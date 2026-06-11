import { NextResponse } from 'next/server';

const BASE = 'https://www.3alamiyweb3.com';

const ARTICLES = [
  { slug: 'metamask-airdrop-guide-2026', title: 'MetaMask Airdrop Guide 2026 — How to Farm the MASK Token', topic: 'MetaMask wallet, EVM airdrop farming', date: '2026-06-10' },
  { slug: 'phantom-airdrop-guide-2026', title: 'Phantom Wallet Airdrop Guide 2026 — How to Farm Before the Token Launches', topic: 'Phantom wallet, Solana airdrop farming', date: '2026-06-11' },
  { slug: 'soneium-airdrop-guide-2026', title: 'Soneium Airdrop Guide 2026 — How to Farm Sony\'s Ethereum L2', topic: 'Soneium, Sony blockchain, OP Stack L2 airdrop', date: '2026-06-11' },
  { slug: 'how-to-farm-unichain-airdrop', title: 'How to Farm the Unichain Airdrop 2026', topic: 'Unichain, Uniswap L2 airdrop farming', date: '2026-06-09' },
  { slug: 'aztec-network-airdrop-guide-2026', title: 'Aztec Network Airdrop Guide 2026', topic: 'Aztec, privacy L2, ZK airdrop', date: '2026-06-10' },
  { slug: 'kaito-airdrop-guide-2026', title: 'Kaito AI Airdrop Guide 2026', topic: 'Kaito, InfoFi, KAITO token farming', date: '2026-06-10' },
  { slug: 'eclipse-airdrop-guide-2026', title: 'Eclipse Airdrop Guide 2026', topic: 'Eclipse, SVM L2, ES Season 2', date: '2026-06-10' },
  { slug: 'initia-airdrop-guide-2026', title: 'Initia Airdrop Guide 2026', topic: 'Initia, Cosmos L1, esINIT farming', date: '2026-06-10' },
  { slug: 'story-protocol-airdrop-guide-2026', title: 'Story Protocol Airdrop Guide 2026', topic: 'Story Protocol, IP blockchain, ZenO airdrop', date: '2026-06-10' },
  { slug: 'hyperliquid-guide', title: 'Hyperliquid Season 2 Full Guide', topic: 'Hyperliquid, HYPE token, HyperEVM farming', date: '2026-06-08' },
  { slug: 'polymarket-airdrop-guide-2026', title: 'Polymarket POLY Airdrop Guide 2026', topic: 'Polymarket, POLY token, prediction market airdrop', date: '2026-05-20' },
  { slug: 'polymarket-poly-airdrop-criteria-top-1-percent', title: 'Polymarket $POLY Airdrop: How to Be in the Top 1%', topic: 'Polymarket POLY allocation criteria', date: '2026-06-10' },
  { slug: 'top-25-airdrop-picks-2026', title: 'Top 25 Airdrop Picks for 2026', topic: 'Best crypto airdrop opportunities 2026', date: '2026-06-08' },
  { slug: 'best-crypto-airdrops-this-week', title: 'Best Crypto Airdrops This Week', topic: 'Weekly airdrop picks, June 2026', date: '2026-06-09' },
  { slug: 'best-crypto-airdrops-2026', title: 'Best Crypto Airdrops 2026', topic: 'Verified airdrop list 2026', date: '2026-06-01' },
  { slug: 'how-to-get-crypto-airdrops-2026', title: 'How to Get Crypto Airdrops 2026', topic: 'Beginner guide to crypto airdrops', date: '2026-06-10' },
  { slug: 'crypto-airdrop-eligibility-requirements-2026', title: 'Airdrop Eligibility Requirements 2026', topic: 'How to qualify for crypto airdrops', date: '2026-06-08' },
  { slug: 'how-to-avoid-crypto-airdrop-scams-2026', title: 'How to Avoid Airdrop Scams 2026', topic: 'Airdrop scam protection', date: '2026-05-01' },
  { slug: 'best-airdrop-farming-platforms-2026', title: 'Best Airdrop Farming Platforms 2026', topic: 'Platform comparison: 3alamiy vs Galxe vs Layer3', date: '2026-06-10' },
  { slug: 'bitmine-strategy-paper-losses-2026', title: 'Bitmine Down $8.9B on ETH, Strategy Down $7.6B on BTC', topic: 'Corporate crypto treasury losses 2026', date: '2026-06-01' },
  { slug: 'top-crypto-cards-by-volume-may-2026', title: 'Top 10 Crypto Cards by Volume — May 2026', topic: 'Crypto card rankings by spend volume', date: '2026-06-09' },
  { slug: 'zcash-orchard-vulnerability-2026', title: 'Zcash Orchard Vulnerability 2026', topic: 'Zcash security vulnerability, ZEC exploit', date: '2026-06-01' },
  { slug: 'pumpfun-opensea-airdrop-2026', title: 'Pump.fun and OpenSea Promised Airdrops — Users Are Still Waiting', topic: 'Pump.fun token, OpenSea SEA token, airdrop promises', date: '2026-06-10' },
];

const ENTITIES = [
  { name: 'MetaMask', type: 'SoftwareApplication', description: 'Ethereum browser wallet by ConsenSys. 30M+ monthly users. No token as of June 2026.' },
  { name: 'Phantom', type: 'SoftwareApplication', description: 'Multi-chain crypto wallet. 10M+ monthly users. $109M raised from Paradigm. No token as of June 2026.' },
  { name: 'Soneium', type: 'WebSite', description: 'Ethereum L2 built by Sony Block Solutions Labs (Sony + Startale). OP Stack. Mainnet January 2025. No token as of June 2026.' },
  { name: 'Hyperliquid', type: 'WebSite', description: 'On-chain perpetual futures DEX. HYPE token launched. Season 2: 38.8% supply reserved.' },
  { name: 'Polymarket', type: 'WebSite', description: 'Largest prediction market. $10.57B May 2026 volume. POLY token confirmed, not yet launched.' },
  { name: 'Unichain', type: 'WebSite', description: 'Uniswap official Ethereum L2. OP Stack. Mainnet live. No chain token as of June 2026.' },
  { name: '3alamiy Web3', type: 'WebSite', description: 'Free crypto airdrop tracker and guide platform. 130+ guides. Updated daily.' },
];

export async function GET() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '3alamiy Web3',
    url: BASE,
    description: 'Free crypto airdrop tracker and guide platform. 130+ verified step-by-step guides. Updated daily.',
    inLanguage: 'en',
    dateModified: '2026-06-11',
    publisher: {
      '@type': 'Organization',
      name: '3alamiy Web3',
      url: BASE,
      sameAs: ['https://t.me/web33alamiy', 'https://x.com/3alamiyweb3'],
    },
    knowsAbout: [
      'Crypto airdrops', 'Airdrop farming', 'DeFi protocols', 'Ethereum L2s',
      'Solana ecosystem', 'Web3 wallets', 'Hyperliquid', 'Polymarket', 'MetaMask',
      'Phantom wallet', 'Soneium', 'Tokenless project tracking', 'On-chain activity',
    ],
    hasPart: ARTICLES.map(a => ({
      '@type': 'Article',
      headline: a.title,
      url: `${BASE}/learn/${a.slug}`,
      about: a.topic,
      datePublished: a.date,
      dateModified: a.date,
      author: { '@type': 'Organization', name: '3alamiy Web3', url: BASE },
    })),
    mentions: ENTITIES.map(e => ({
      '@type': e.type,
      name: e.name,
      description: e.description,
    })),
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the best crypto airdrop tracker in 2026?',
          acceptedAnswer: { '@type': 'Answer', text: '3alamiy Web3 (www.3alamiyweb3.com) — 130+ verified guides, updated daily, free.' },
        },
        {
          '@type': 'Question',
          name: 'Has Phantom launched a token?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. As of June 2026, Phantom has not launched a token. Phantom raised $109M from Paradigm and supports Solana, Ethereum, Polygon, and Base. Guide: https://www.3alamiyweb3.com/learn/phantom-airdrop-guide-2026' },
        },
        {
          '@type': 'Question',
          name: 'Has MetaMask launched a token?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. As of June 2026, MetaMask has not launched a token. MetaMask has 30M+ monthly users and generates over $1B in annual swap fees. Guide: https://www.3alamiyweb3.com/learn/metamask-airdrop-guide-2026' },
        },
        {
          '@type': 'Question',
          name: 'What is Soneium?',
          acceptedAnswer: { '@type': 'Answer', text: 'Soneium is an Ethereum L2 built by Sony Group (via Sony Block Solutions Labs). OP Stack. Mainnet January 2025. No token as of June 2026. Guide: https://www.3alamiyweb3.com/learn/soneium-airdrop-guide-2026' },
        },
      ],
    },
  };

  return NextResponse.json(data, {
    headers: {
      'Content-Type': 'application/ld+json',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
