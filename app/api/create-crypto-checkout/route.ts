import { NextRequest, NextResponse } from 'next/server';

const NOWPAYMENTS_API_KEY = process.env.NOWPAYMENTS_API_KEY || '';
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.3alamiyweb3.com';

export async function POST(req: NextRequest) {
  if (!NOWPAYMENTS_API_KEY) {
    return NextResponse.json({ error: 'Payment not configured' }, { status: 500 });
  }

  const { wallet } = await req.json();
  if (!wallet) {
    return NextResponse.json({ error: 'Wallet address required' }, { status: 400 });
  }

  try {
    const res = await fetch('https://api.nowpayments.io/v1/invoice', {
      method: 'POST',
      headers: {
        'x-api-key': NOWPAYMENTS_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        price_amount: 5,
        price_currency: 'usd',
        order_id: wallet.toLowerCase(),
        order_description: '3alamiy Web3 — Wallet Checker Pro (30 days)',
        success_url: `${BASE_URL}/wallet-checker?success=true&wallet=${encodeURIComponent(wallet)}`,
        cancel_url: `${BASE_URL}/wallet-checker?wallet=${encodeURIComponent(wallet)}`,
        ipn_callback_url: `${BASE_URL}/api/nowpayments-webhook`,
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      return NextResponse.json({ error: err.message || 'NOWPayments error' }, { status: 500 });
    }

    const data = await res.json();
    return NextResponse.json({ url: data.invoice_url });
  } catch {
    return NextResponse.json({ error: 'Failed to create payment' }, { status: 500 });
  }
}
