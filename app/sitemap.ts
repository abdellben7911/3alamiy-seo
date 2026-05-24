import { MetadataRoute } from 'next'

const SUPABASE_URL = 'https://aahxneihytiogjvcznir.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhaHhuZWloeXRpb2dqdmN6bmlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3OTkzOTUsImV4cCI6MjA4NjM3NTM5NX0.BOcltYn8FrhX-a99JBIs5j5mD-sFnwtzGK1CgswvG_o';

const BASE = 'https://www.3alamiyweb3.com';

// ✅ VALID slugs only — must exist in [slug]/page.tsx articles object OR as a folder
const articles = [
  // — In [slug]/page.tsx articles object —
  'how-to-find-airdrops-before-everyone-else',
  'discord-role-airdrops-guide-2026',
  'how-to-avoid-crypto-airdrop-scams-2026',
  'how-to-build-onchain-activity-that-actually-matters',
  'best-airdrop-farming-platforms-2026',
  'crypto-wallet-setup-for-airdrops-2026',
  'best-ai-crypto-airdrops-2026',
  'best-depin-airdrops-2026',
  'best-testnet-airdrops-2026',

  // — Static folder pages —
  'best-airdrop-farming-platforms-2026',
  'best-crypto-airdrops-2026',
  'best-crypto-airdrops-this-week',
  'best-solana-airdrops-2026',
  'free-crypto-airdrops-no-investment-2026',
  'how-to-get-crypto-airdrops-2026',
  'what-are-crypto-airdrops',
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

    // Learn articles — only valid ones
    ...uniqueArticles.map(slug => ({
      url: `${BASE}/learn/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
