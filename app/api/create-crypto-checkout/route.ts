import { NextRequest, NextResponse } from 'next/server';

const COINBASE_API_KEY = process.env.COINBASE_COMMERCE_API_KEY || '';
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.3alamiyweb3.com';

export async function POST(req: NextRequest) {
  if (!COINBASE_API_KEY) {
    return NextResponse.json({ error: 'Payment not configured' }, { status: 500 });
  }

  const { wallet } = await req.json();
  if (!wallet) {
    return NextResponse.json({ error: 'Wallet address required' }, { status: 400 });
  }

  try {
    const res = await fetch('https://api.commerce.coinbase.com/charges', {
      method: 'POST',
      headers: {
        'X-CC-Api-Key': COINBASE_API_KEY,
        'X-CC-Version': '2018-03-22',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: '3alamiy Web3 — Wallet Checker Pro',
        description: '30-day full access: missed airdrop history, full eligibility report, multi-chain PNL.',
        pricing_type: 'fixed_price',
        local_price: {
          amount: '3.00',
          currency: 'USDC',
        },
        metadata: {
          wallet_address: wallet.toLowerCase(),
        },
        redirect_url: `${BASE_URL}/wallet-checker?success=true&wallet=${encodeURIComponent(wallet)}`,
        cancel_url: `${BASE_URL}/wallet-checker?wallet=${encodeURIComponent(wallet)}`,
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      return NextResponse.json({ error: err.error?.message || 'Coinbase error' }, { status: 500 });
    }

    const data = await res.json();
    return NextResponse.json({ url: data.data.hosted_url });
  } catch {
    return NextResponse.json({ error: 'Failed to create payment' }, { status: 500 });
  }
}
