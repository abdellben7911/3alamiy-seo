import { MetadataRoute } from 'next'

const SUPABASE_URL = 'https://aahxneihytiogjvcznir.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhaHhuZWloeXRpb2dqdmN6bmlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3OTkzOTUsImV4cCI6MjA4NjM3NTM5NX0.BOcltYn8FrhX-a99JBIs5j5mD-sFnwtzGK1CgswvG_o';

const BASE = 'https://www.3alamiyweb3.com';

// ✅ VALID slugs only — must exist in [slug]/page.tsx articles object OR as a folder
const articles = [
  // — New articles (June 2026) — keep at top so they get re-crawled first
  'best-crypto-airdrops-mexico-2026',
  'best-crypto-airdrops-argentina-2026',
  'best-crypto-airdrops-ukraine-2026',
  'best-crypto-airdrops-kenya-2026',
  'best-crypto-airdrops-june-2026',
  'grass-season-2-airdrop-date-2026',
  'base-airdrop-wallet-ranking-dashboard-2026',
  'pod-network-airdrop-guide-2026',
  'metamask-rewards-season-2-2026',
  'confirmed-crypto-airdrop-pools-2026',
  'metamask-token-launch-2026',
  'what-are-crypto-airdrops-2026',
  'best-crypto-airdrops-morocco-2026',
  'phantom-airdrop-guide-2026',
  'best-crypto-airdrops-no-kyc-2026',
  'how-much-do-crypto-airdrops-pay-2026',
  'best-crypto-airdrops-turkey-2026',
  'best-crypto-airdrops-bangladesh-2026',
  'best-crypto-airdrops-brazil-2026',
  'best-crypto-airdrops-vietnam-2026',
  'best-crypto-airdrops-indonesia-2026',
  'best-crypto-airdrops-egypt-2026',
  'best-crypto-airdrops-philippines-2026',
  'best-crypto-airdrops-pakistan-2026',
  'best-crypto-airdrops-india-2026',
  'ink-by-kraken-airdrop-guide-2026',
  'best-wallet-airdrops-2026',
  'soneium-airdrop-guide-2026',
  'metamask-airdrop-guide-2026',
  'how-to-farm-unichain-airdrop',
  'kaito-airdrop-guide-2026',
  'eclipse-airdrop-guide-2026',
  'initia-airdrop-guide-2026',
  'story-protocol-airdrop-guide-2026',
  'aztec-network-airdrop-guide-2026',
  'polymarket-poly-airdrop-criteria-top-1-percent',
  'how-to-claim-airdrop-hacked-wallet',
  'how-to-farm-fuel-airdrop',
  'kast-card-review-2026',
  'how-to-farm-abstract-airdrop',
  'how-to-farm-movement-airdrop',
  'how-to-farm-megaeth-airdrop',
  'best-base-airdrops-2026',
  'best-hyperliquid-airdrops-2026',
  'how-to-farm-monad-airdrop',

  // — High priority / Hot —
  'hyperliquid-guide',
  'polymarket-airdrop-guide-2026',
  'hyperliquid-season-2-airdrop-date',
  'polymarket-2026-complete-guide',
  'top-25-airdrop-picks-2026',
  'early-crypto-projects-2026',

  // — Analysis & News (static folders) —
  'pumpfun-tattoo-bounty-india-viral',
  'bitmine-strategy-paper-losses-2026',
  'michael-saylor-2000-crash-bitcoin-history',
  'zcash-orchard-vulnerability-2026',
  'pumpfun-opensea-airdrop-2026',
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

  // Article publish/update dates — use real dates so Google trusts lastModified
  const ARTICLE_DATES: Record<string, string> = {
    'best-crypto-airdrops-mexico-2026':          '2026-06-15',
    'best-crypto-airdrops-argentina-2026':       '2026-06-15',
    'best-crypto-airdrops-ukraine-2026':         '2026-06-15',
    'best-crypto-airdrops-kenya-2026':           '2026-06-15',
    'best-crypto-airdrops-june-2026':            '2026-06-17',
    'grass-season-2-airdrop-date-2026':           '2026-06-23',
    'base-airdrop-wallet-ranking-dashboard-2026': '2026-06-21',
    'pod-network-airdrop-guide-2026':            '2026-06-20',
    'metamask-rewards-season-2-2026':            '2026-06-19',
    'confirmed-crypto-airdrop-pools-2026':       '2026-06-19',
    'metamask-token-launch-2026':                '2026-06-17',
    'what-are-crypto-airdrops-2026':             '2026-06-17',
    'best-crypto-airdrops-morocco-2026':         '2026-06-16',
    'best-crypto-airdrops-no-kyc-2026':         '2026-06-15',
    'how-much-do-crypto-airdrops-pay-2026':     '2026-06-15',
    'best-crypto-airdrops-turkey-2026':         '2026-06-12',
    'best-crypto-airdrops-bangladesh-2026':     '2026-06-12',
    'best-crypto-airdrops-brazil-2026':         '2026-06-12',
    'best-crypto-airdrops-vietnam-2026':        '2026-06-12',
    'best-crypto-airdrops-indonesia-2026':      '2026-06-12',
    'best-crypto-airdrops-egypt-2026':          '2026-06-11',
    'best-crypto-airdrops-philippines-2026':    '2026-06-11',
    'best-crypto-airdrops-pakistan-2026':       '2026-06-11',
    'best-crypto-airdrops-india-2026':          '2026-06-11',
    'ink-by-kraken-airdrop-guide-2026':         '2026-06-11',
    'best-wallet-airdrops-2026':               '2026-06-11',
    'soneium-airdrop-guide-2026':              '2026-06-11',
    'phantom-airdrop-guide-2026':             '2026-06-11',
    'metamask-airdrop-guide-2026':            '2026-06-10',
    'how-to-get-crypto-airdrops-2026':        '2026-06-10',
    'best-airdrop-farming-platforms-2026':    '2026-06-10',
    'pumpfun-opensea-airdrop-2026':           '2026-06-10',
    'kaito-airdrop-guide-2026':              '2026-06-10',
    'eclipse-airdrop-guide-2026':            '2026-06-10',
    'initia-airdrop-guide-2026':            '2026-06-10',
    'story-protocol-airdrop-guide-2026':   '2026-06-10',
    'aztec-network-airdrop-guide-2026':    '2026-06-10',
    'how-to-farm-unichain-airdrop':       '2026-06-09',
    'polymarket-poly-airdrop-criteria-top-1-percent': '2026-06-10',
    'how-to-claim-airdrop-hacked-wallet': '2026-06-10',
    'how-to-farm-fuel-airdrop':           '2026-06-09',
    'kast-card-review-2026':              '2026-06-09',
    'how-to-farm-abstract-airdrop':       '2026-06-09',
    'how-to-farm-movement-airdrop':       '2026-06-09',
    'how-to-farm-megaeth-airdrop':        '2026-06-09',
    'best-base-airdrops-2026':            '2026-06-09',
    'best-hyperliquid-airdrops-2026':     '2026-06-09',
    'how-to-farm-monad-airdrop':          '2026-06-01',
    'hyperliquid-guide':                  '2026-06-08',
    'top-25-airdrop-picks-2026':          '2026-06-08',
    'crypto-airdrop-eligibility-requirements-2026': '2026-06-08',
    'free-crypto-airdrops-no-investment-2026':      '2026-06-08',
    'best-crypto-airdrops-this-week':     '2026-06-09',
    'polymarket-airdrop-guide-2026':      '2026-05-20',
    'hyperliquid-season-2-airdrop-date':  '2026-05-15',
  };

  return [
    // Core pages
    { url: BASE, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE}/airdrops`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE}/learn`, lastModified: new Date('2026-06-09'), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/pro`, lastModified: new Date('2026-05-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/wallet-checker`, lastModified: new Date('2026-06-01'), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/upcoming`, lastModified: new Date('2026-06-10'), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/gm`, lastModified: new Date('2026-05-01'), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/privacy`, lastModified: new Date('2026-01-01'), changeFrequency: 'monthly', priority: 0.3 },

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
      lastModified: ARTICLE_DATES[slug] ? new Date(ARTICLE_DATES[slug]) : new Date('2026-05-01'),
      changeFrequency: ['hyperliquid-guide','polymarket-airdrop-guide-2026','hyperliquid-season-2-airdrop-date','best-crypto-airdrops-this-week','top-25-airdrop-picks-2026','how-to-farm-megaeth-airdrop','best-base-airdrops-2026','best-hyperliquid-airdrops-2026','how-to-farm-monad-airdrop'].includes(slug) ? 'weekly' as const : 'monthly' as const,
      priority: ['hyperliquid-guide','polymarket-airdrop-guide-2026','hyperliquid-season-2-airdrop-date','how-to-farm-megaeth-airdrop','best-hyperliquid-airdrops-2026'].includes(slug) ? 0.9 : ['best-crypto-airdrops-this-week','top-25-airdrop-picks-2026','early-crypto-projects-2026','polymarket-2026-complete-guide','best-base-airdrops-2026','how-to-farm-monad-airdrop'].includes(slug) ? 0.8 : 0.7,
    })),
  ];
}
