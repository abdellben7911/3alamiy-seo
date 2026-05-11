import { MetadataRoute } from 'next'

const SUPABASE_URL = 'https://aahxneihytiogjvcznir.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhaHhuZWloeXRpb2dqdmN6bmlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3OTkzOTUsImV4cCI6MjA4NjM3NTM5NX0.BOcltYn8FrhX-a99JBIs5j5mD-sFnwtzGK1CgswvG_o';

const BASE = 'https://seo.3alamiyweb3.online';

const articles = [
  'why-crypto-airdrops-are-becoming-harder-to-qualify-for',
  'how-to-build-onchain-activity-that-actually-matters',
  'news-report-the-2-trillion-wipeout',
  'solanas-institutional-firedancer-era',
  'nfts-flex-bayc-kidney-moment',
  'can-solana-reach-1000-deep-dive',
  'crypto-airdrops-2026-evolution',
  'how-a-100-domain-became-a-70-million-digital-asset-the-story-behind-ai-com',
  'how-to-find-airdrops-before-everyone-else',
  'discord-role-airdrops-guide-2026',
  'best-no-kyc-crypto-airdrops-2026',
  'best-low-gas-crypto-airdrops-2026',
  'best-free-crypto-airdrops-2026',
  'how-to-set-up-metamask-for-airdrops',
  'what-is-depin-crypto-airdrops',
  'how-to-avoid-crypto-airdrop-scams-2026',
  'top-crypto-airdrop-wallets-2026',
];

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
    // Core pages — highest priority
    { url: BASE, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE}/airdrops`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/gm`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },

    // Airdrop detail pages — high priority
    ...airdrops.map(a => ({
      url: `${BASE}/airdrops/${a.slug}`,
      lastModified: new Date(a.created_at || now),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    })),

    // Learn articles — medium priority
    ...articles.map(slug => ({
      url: `${BASE}/learn/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
