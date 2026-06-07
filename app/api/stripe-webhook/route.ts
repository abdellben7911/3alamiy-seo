import { NextRequest, NextResponse } from 'next/server';

const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || '';
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || '';
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

async function upsertSubscription(data: {
  wallet_address: string;
  stripe_customer_id: string;
  stripe_subscription_id: string;
  status: string;
  current_period_end: string;
}) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/subscriptions`, {
    method: 'POST',
    headers: {
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'resolution=merge-duplicates',
    },
    body: JSON.stringify(data),
  });
  return res.ok;
}

async function verifyStripeSignature(body: string, signature: string, secret: string): Promise<boolean> {
  // Simple timestamp + signature verification
  const parts = signature.split(',');
  const tsPart = parts.find(p => p.startsWith('t='));
  const v1Part = parts.find(p => p.startsWith('v1='));
  if (!tsPart || !v1Part) return false;

  const timestamp = tsPart.slice(2);
  const v1 = v1Part.slice(3);
  const payload = `${timestamp}.${body}`;

  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sigBytes = await crypto.subtle.sign('HMAC', key, encoder.encode(payload));
  const expected = Array.from(new Uint8Array(sigBytes)).map(b => b.toString(16).padStart(2, '0')).join('');
  return expected === v1;
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature') || '';

  if (STRIPE_WEBHOOK_SECRET) {
    const valid = await verifyStripeSignature(body, signature, STRIPE_WEBHOOK_SECRET);
    if (!valid) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }
  }

  const event = JSON.parse(body);
  const { type, data } = event;

  if (type === 'checkout.session.completed') {
    const session = data.object;
    const walletAddress = session.metadata?.wallet_address;
    const customerId = session.customer;
    const subscriptionId = session.subscription;

    if (walletAddress && subscriptionId) {
      // Fetch subscription to get period end
      let periodEnd = new Date(Date.now() + 30 * 86400000).toISOString();
      try {
        const subRes = await fetch(`https://api.stripe.com/v1/subscriptions/${subscriptionId}`, {
          headers: { 'Authorization': `Bearer ${STRIPE_SECRET_KEY}` },
        });
        if (subRes.ok) {
          const sub = await subRes.json();
          periodEnd = new Date(sub.current_period_end * 1000).toISOString();
        }
      } catch {}

      await upsertSubscription({
        wallet_address: walletAddress,
        stripe_customer_id: customerId,
        stripe_subscription_id: subscriptionId,
        status: 'active',
        current_period_end: periodEnd,
      });
    }
  }

  if (type === 'customer.subscription.updated' || type === 'customer.subscription.deleted') {
    const sub = data.object;
    const customerId = sub.customer;

    // Find wallet by customer id
    try {
      const findRes = await fetch(
        `${SUPABASE_URL}/rest/v1/subscriptions?stripe_customer_id=eq.${customerId}&select=wallet_address`,
        { headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` } }
      );
      if (findRes.ok) {
        const rows = await findRes.json();
        if (rows[0]?.wallet_address) {
          await upsertSubscription({
            wallet_address: rows[0].wallet_address,
            stripe_customer_id: customerId,
            stripe_subscription_id: sub.id,
            status: sub.status === 'active' ? 'active' : 'canceled',
            current_period_end: new Date(sub.current_period_end * 1000).toISOString(),
          });
        }
      }
    } catch {}
  }

  return NextResponse.json({ received: true });
}
