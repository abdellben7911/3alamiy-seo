import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const IPN_SECRET = process.env.NOWPAYMENTS_IPN_SECRET || '';
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function POST(req: NextRequest) {
  const rawBody = await req.text();

  // Verify NOWPayments IPN signature
  if (IPN_SECRET) {
    const sig = req.headers.get('x-nowpayments-sig') || '';
    const sorted = sortedJsonSignature(rawBody);
    const expected = crypto
      .createHmac('sha512', IPN_SECRET)
      .update(sorted)
      .digest('hex');
    if (sig !== expected) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }
  }

  let payload: any;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const status = payload?.payment_status;

  // Only activate on confirmed / finished payment
  if (status !== 'finished' && status !== 'confirmed') {
    return NextResponse.json({ received: true });
  }

  // order_id is the wallet address we set during invoice creation
  const walletAddress = payload?.order_id;
  if (!walletAddress) {
    return NextResponse.json({ error: 'No wallet in order_id' }, { status: 400 });
  }

  const periodEnd = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/subscriptions`, {
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
        nowpayments_payment_id: payload?.payment_id?.toString() || null,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Supabase upsert error:', err);
      return NextResponse.json({ error: 'DB error' }, { status: 500 });
    }
  } catch (e) {
    console.error('NOWPayments webhook error:', e);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}

// NOWPayments requires the JSON keys to be sorted alphabetically for HMAC
function sortedJsonSignature(raw: string): string {
  try {
    const obj = JSON.parse(raw);
    return JSON.stringify(sortObject(obj));
  } catch {
    return raw;
  }
}

function sortObject(obj: any): any {
  if (Array.isArray(obj)) return obj.map(sortObject);
  if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).sort().reduce((acc: any, key) => {
      acc[key] = sortObject(obj[key]);
      return acc;
    }, {});
  }
  return obj;
}
