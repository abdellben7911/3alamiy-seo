import { MetadataRoute } from 'next'

const SUPABASE_URL = 'https://aahxneihytiogjvcznir.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhaHhuZWloeXRpb2dqdmN6bmlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3OTkzOTUsImV4cCI6MjA4NjM3NTM5NX0.BOcltYn8FrhX-a99JBIs5j5mD-sFnwtzGK1CgswvG_o';

const BASE = 'https://www.3alamiyweb3.com';

// ✅ VALID slugs only — must exist in [slug]/page.tsx articles object OR as a folder
const articles = [
  // — High priority / Hot —
  'hyperliquid-guide',
  'polymarket-airdrop-guide-2026',
  'hyperliquid-season-2-airdrop-date',
  'polymarket-2026-complete-guide',
  'top-25-airdrop-picks-2026',
  'early-crypto-projects-2026',

  // — Analysis & News (static folders) —
  'bitmine-strategy-paper-losses-2026',
  'michael-saylor-2000-crash-bitcoin-history',
  'zcash-orchard-vulnerability-2026',
  'polymarket-willo2-500k-loss',
  'top-crypto-cards-by-volume-may-2026',

  // — Geo & Lists —
  'best-crypto-airdrops-nigeria-2026',
  'best-crypto-airdrops-2026',
  'best-crypto-airdrops-this-week',
  'best-solana-airdrops-2026',
  'upcoming-crypto-airdrops-2026',
  '3alamiy-vs-galxe',

  // — Beginner guides (static folders) —
  'best-airdrop-farming-platforms-2026',
  'best-crypto-airdrop-checker-tools-2026',
  'best-crypto-airdrop-websites-2026',
  'crypto-airdrop-eligibility-requirements-2026',
  'free-crypto-airdrops-no-investment-2026',
  'how-to-get-crypto-airdrops-2026',
  'what-are-crypto-airdrops',

  // — In [slug]/page.tsx —
  'how-to-find-airdrops-before-everyone-else',
  'discord-role-airdrops-guide-2026',
  'how-to-avoid-crypto-airdrop-scams-2026',
  'how-to-build-onchain-activity-that-actually-matters',
  'best-ai-crypto-airdrops-2026',
  'best-depin-airdrops-2026',
  'best-testnet-airdrops-2026',
  'best-no-kyc-crypto-airdrops-2026',
  'best-low-gas-crypto-airdrops-2026',
  'why-crypto-airdrops-are-becoming-harder-to-qualify-for',
  'how-to-set-up-metamask-for-airdrops',
  'what-is-depin-crypto-airdrops',
  'top-crypto-airdrop-wallets-2026',
  'best-free-crypto-airdrops-2026',
  'crypto-airdrops-2026-evolution',
  'news-report-the-2-trillion-wipeout',
  'solanas-institutional-firedancer-era',
  'can-solana-reach-1000-deep-dive',
];

// Remove duplicates
const uniqueArticles = [...new Set(articles)];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let airdrops: { slug: string; created_at: string }[] = [];
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/airdrops?select=slug,created_at&order=created_at.desc`,
      {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        },
        next: { revalidate: 3600 },
      }
    );
    if (res.ok) airdrops = await res.json();
  } catch {}

  const now = new Date();

  return [
    // Core pages
    { url: BASE, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE}/airdrops`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE}/learn`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/gm`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },

    // Airdrop detail pages
    ...airdrops.map(a => ({
      url: `${BASE}/airdrops/${a.slug}`,
      lastModified: new Date(a.created_at || now),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    })),

    // Learn articles — high priority for hot pages
    ...uniqueArticles.map(slug => ({
      url: `${BASE}/learn/${slug}`,
      lastModified: now,
      changeFrequency: ['hyperliquid-guide','polymarket-airdrop-guide-2026','hyperliquid-season-2-airdrop-date','best-crypto-airdrops-this-week','top-25-airdrop-picks-2026'].includes(slug) ? 'weekly' as const : 'monthly' as const,
      priority: ['hyperliquid-guide','polymarket-airdrop-guide-2026','hyperliquid-season-2-airdrop-date'].includes(slug) ? 0.9 : ['best-crypto-airdrops-this-week','top-25-airdrop-picks-2026','early-crypto-projects-2026','polymarket-2026-complete-guide'].includes(slug) ? 0.8 : 0.7,
    })),
  ];
}
