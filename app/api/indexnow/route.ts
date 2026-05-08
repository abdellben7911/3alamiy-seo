import { NextResponse } from 'next/server';

const INDEXNOW_KEY = '7f060f9ccc224ebcb4d4e4f69391377f';
const HOST = 'seo.3alamiyweb3.online';
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function GET() {
  try {
    // Fetch all airdrop slugs from Supabase
    const res = await fetch(`${SUPABASE_URL}/rest/v1/airdrops?select=slug`, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      },
    });
    const airdrops = await res.json();

    // Build all URLs to ping
    const airdropUrls = airdrops.map((a: { slug: string }) =>
      `https://${HOST}/airdrops/${a.slug}`
    );

    const learnSlugs = [
      'how-to-find-airdrops-before-everyone-else',
      'why-crypto-airdrops-are-becoming-harder-to-qualify-for',
      'how-to-build-onchain-activity-that-actually-matters',
      'best-free-crypto-airdrops-2026',
      'how-to-set-up-metamask-for-airdrops',
      'what-is-depin-crypto-airdrops',
      'how-to-avoid-crypto-airdrop-scams-2026',
      'top-crypto-airdrop-wallets-2026',
      'crypto-airdrops-2026-evolution',
      'news-report-the-2-trillion-wipeout',
      'solanas-institutional-firedancer-era',
      'can-solana-reach-1000-deep-dive',
      'nfts-flex-bayc-kidney-moment',
      'how-a-100-domain-became-a-70-million-digital-asset-the-story-behind-ai-com',
    ];

    const learnUrls = learnSlugs.map(slug => `https://${HOST}/learn/${slug}`);

    const allUrls = [
      `https://${HOST}/`,
      ...airdropUrls,
      ...learnUrls,
    ];

    // Ping IndexNow (submits to Google, Bing, Yandex all at once)
    const pingResponse = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
        urlList: allUrls,
      }),
    });

    return NextResponse.json({
      success: true,
      urlsSubmitted: allUrls.length,
      status: pingResponse.status,
      message: `Successfully pinged IndexNow with ${allUrls.length} URLs`,
    });

  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
