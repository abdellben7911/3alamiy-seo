import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const COINBASE_WEBHOOK_SECRET = process.env.COINBASE_COMMERCE_WEBHOOK_SECRET || '';
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const sig = req.headers.get('x-cc-webhook-signature') || '';

  // Verify webhook signature if secret is configured
  if (COINBASE_WEBHOOK_SECRET) {
    const expected = crypto
      .createHmac('sha256', COINBASE_WEBHOOK_SECRET)
      .update(rawBody)
      .digest('hex');
    if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }
  }

  let event: any;
  try {
    event = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const type = event?.event?.type;

  // Only handle successful payment
  if (type !== 'charge:confirmed' && type !== 'charge:resolved') {
    return NextResponse.json({ received: true });
  }

  const charge = event.event?.data;
  const walletAddress = charge?.metadata?.wallet_address;

  if (!walletAddress) {
    return NextResponse.json({ error: 'No wallet address in metadata' }, { status: 400 });
  }

  // 30 days from now
  const periodEnd = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();

  // Upsert subscription in Supabase
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/subscriptions`,
      {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_SERVICE_KEY,
          'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'resolution=merge-duplicates',
        },
        body: JSON.stringify({
          wallet_address: walletAddress.toLowerCase(),
          status: 'active',
          current_period_end: periodEnd,
          coinbase_charge_id: charge?.id || null,
        }),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      console.error('Supabase upsert error:', err);
      return NextResponse.json({ error: 'DB error' }, { status: 500 });
    }
  } catch (e) {
    console.error('Coinbase webhook error:', e);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
