import { NextRequest, NextResponse } from 'next/server';

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || '';
const STRIPE_PRICE_ID = process.env.STRIPE_PRICE_ID || '';
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.3alamiyweb3.com';

export async function POST(req: NextRequest) {
  if (!STRIPE_SECRET_KEY || !STRIPE_PRICE_ID) {
    return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 });
  }

  const { wallet } = await req.json();
  if (!wallet) {
    return NextResponse.json({ error: 'Wallet address required' }, { status: 400 });
  }

  try {
    const res = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'mode': 'subscription',
        'payment_method_types[]': 'card',
        'line_items[0][price]': STRIPE_PRICE_ID,
        'line_items[0][quantity]': '1',
        'success_url': `${BASE_URL}/wallet-checker?success=true&wallet=${encodeURIComponent(wallet)}`,
        'cancel_url': `${BASE_URL}/wallet-checker?wallet=${encodeURIComponent(wallet)}`,
        'metadata[wallet_address]': wallet.toLowerCase(),
        'allow_promotion_codes': 'true',
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      return NextResponse.json({ error: err.error?.message || 'Stripe error' }, { status: 500 });
    }

    const session = await res.json();
    return NextResponse.json({ url: session.url });
  } catch (e) {
    return NextResponse.json({ error: 'Failed to create session' }, { status: 500 });
  }
}
