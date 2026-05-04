import { MetadataRoute } from 'next'

const SUPABASE_URL = 'https://aahxneihytiogjvcznir.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhaHhuZWloeXRpb2dqdmN6bmlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3OTkzOTUsImV4cCI6MjA4NjM3NTM5NX0.BOcltYn8FrhX-a99JBIs5j5mD-sFnwtzGK1CgswvG_o';

const articles = [
  'why-crypto-airdrops-are-becoming-harder-to-qualify-for',
  'how-to-build-onchain-activity-that-actually-matters',
  'news-report-the-2-trillion-wipeout',
  'solanas-institutional-firedancer-era',
  'nfts-flex-bayc-kidney-moment',
  'can-solana-reach-1000-deep-dive',
  'crypto-airdrops-2026-evolution',
  'how-a-100-domain-became-a-70-million-digital-asset-the-story-behind-ai-com',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch all airdrops from Supabase dynamically
  let airdropSlugs: string[] = [];
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/airdrops?select=id`, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      },
    });
    if (res.ok) {
      const data = await res.json();
      airdropSlugs = data.map((a: any) => a.id);
    }
  } catch (e) {
    // fallback to empty if Supabase fails
  }

  return [
    { url: 'https://seo.3alamiyweb3.online', lastModified: new Date() },
    { url: 'https://seo.3alamiyweb3.online/learn', lastModified: new Date() },
    ...airdropSlugs.map(slug => ({
      url: `https://seo.3alamiyweb3.online/airdrops/${slug}`,
      lastModified: new Date(),
    })),
    ...articles.map(slug => ({
      url: `https://seo.3alamiyweb3.online/learn/${slug}`,
      lastModified: new Date(),
    })),
  ]
}
