import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const airdrops = [
    'megaeth-points-season1','konnex','arkham','robinhood-chain','abstract',
    'sosovalue','arc-testnet','polymarket','SkaleNetwork','zetarium-testnet',
    'veera','mocaverse','dango','pip-world','fhenix','goldfish','datahaven',
    'inkonchain','rivrdex','republic-testnet','miden-testnet','D3inc','LAM',
    'BlockSt','megaeth-mainnet','outcome-airdrop',
  ]
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
  return [
    { url: 'https://seo.3alamiyweb3.online', lastModified: new Date() },
    { url: 'https://seo.3alamiyweb3.online/learn', lastModified: new Date() },
    ...airdrops.map(slug => ({ url: `https://seo.3alamiyweb3.online/airdrops/${slug}`, lastModified: new Date() })),
    ...articles.map(slug => ({ url: `https://seo.3alamiyweb3.online/learn/${slug}`, lastModified: new Date() })),
  ]
}
