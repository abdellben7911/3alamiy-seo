import { NextResponse } from 'next/server';

const BASE = 'https://www.3alamiyweb3.com';

const ARTICLES = [
  // — Monthly picks —
  { slug: 'best-crypto-airdrops-august-2026', title: 'Best Crypto Airdrops August 2026 — 7 to Farm This Month', topic: 'Monthly ranked airdrop picks, August 2026', date: '2026-08-01' },
  { slug: 'best-crypto-airdrops-july-2026', title: 'Best Crypto Airdrops July 2026', topic: 'Monthly ranked airdrop picks, July 2026', date: '2026-07-01' },
  { slug: 'best-crypto-airdrops-this-week', title: 'Best Crypto Airdrops This Week', topic: 'Weekly airdrop picks', date: '2026-08-01' },

  // — Wallet farming (tokenless, high priority) —
  { slug: 'metamask-airdrop-guide-2026', title: 'MetaMask Airdrop Guide 2026 — How to Farm the MASK Token', topic: 'MetaMask wallet, Franky SBT, EVM airdrop farming', date: '2026-08-01' },
  { slug: 'metamask-rewards-season-2-2026', title: 'MetaMask Rewards Season 2 — Double Linea Points & MASK Eligibility', topic: 'MetaMask Rewards, Linea points, MASK token', date: '2026-06-19' },
  { slug: 'metamask-token-launch-2026', title: 'Is MetaMask Launching a Token? MASK Airdrop Analysis', topic: 'MetaMask MASK token launch signals', date: '2026-06-17' },
  { slug: 'phantom-airdrop-guide-2026', title: 'Phantom Wallet Airdrop Guide 2026 — How to Farm Before the Token Launches', topic: 'Phantom wallet, Solana airdrop farming', date: '2026-08-01' },
  { slug: 'soneium-airdrop-guide-2026', title: 'Soneium Airdrop Guide 2026 — How to Farm Sony\'s Ethereum L2', topic: 'Soneium, Sony blockchain, OP Stack L2 airdrop', date: '2026-06-11' },
  { slug: 'best-wallet-airdrops-2026', title: 'Best Wallet Airdrops 2026', topic: 'Wallet airdrop comparison: MetaMask, Phantom, Soneium', date: '2026-06-11' },

  // — Protocol farming —
  { slug: 'hyperliquid-guide', title: 'Hyperliquid Season 2 Airdrop: How to Qualify — S1 Paid $10K+ Average', topic: 'Hyperliquid, HYPE token, HLP vault, HyperEVM farming', date: '2026-08-01' },
  { slug: 'hyperliquid-season-2-airdrop-2026', title: 'Hyperliquid Season 2 Airdrop: Date, HLP Multiplier & What We Know', topic: 'Hyperliquid Season 2 timing and criteria', date: '2026-06-27' },
  { slug: 'berachain-ecosystem-farming-guide-2026', title: 'Berachain Ecosystem Farming Guide 2026 — Kodiak V3, BEND & BGT', topic: 'Berachain, Proof of Liquidity, BGT emissions, Kodiak V3', date: '2026-08-01' },
  { slug: 'how-to-farm-monad-airdrop', title: 'How to Farm the Monad Airdrop 2026', topic: 'Monad L1 testnet farming, $225M raise', date: '2026-08-01' },
  { slug: 'how-to-farm-megaeth-airdrop', title: 'How to Farm the MegaETH Airdrop 2026', topic: 'MegaETH testnet, MEGAPoints Season 2', date: '2026-06-09' },
  { slug: 'how-to-farm-unichain-airdrop', title: 'How to Farm the Unichain Airdrop 2026', topic: 'Unichain, Uniswap L2 airdrop farming', date: '2026-06-09' },
  { slug: 'grass-season-2-airdrop-date-2026', title: 'Grass Season 2 Airdrop — Claims, Dates & Eligibility', topic: 'Grass Network, GRASS token, Season 2 USDC claims', date: '2026-08-01' },
  { slug: 'aztec-network-airdrop-guide-2026', title: 'Aztec Network Airdrop Guide 2026', topic: 'Aztec, privacy L2, ZK airdrop', date: '2026-06-10' },
  { slug: 'kaito-airdrop-guide-2026', title: 'Kaito AI Airdrop Guide 2026', topic: 'Kaito, InfoFi, KAITO token farming', date: '2026-06-10' },
  { slug: 'eclipse-airdrop-guide-2026', title: 'Eclipse Airdrop Guide 2026', topic: 'Eclipse, SVM L2, ES Season 2', date: '2026-06-10' },
  { slug: 'initia-airdrop-guide-2026', title: 'Initia Airdrop Guide 2026', topic: 'Initia, Cosmos L1, esINIT farming', date: '2026-06-10' },
  { slug: 'story-protocol-airdrop-guide-2026', title: 'Story Protocol Airdrop Guide 2026', topic: 'Story Protocol, IP blockchain, ZenO airdrop', date: '2026-06-10' },
  { slug: 'unicity-unc-airdrop-guide-2026', title: 'Unicity UNC Airdrop Guide 2026', topic: 'Unicity, UNC token, Testnet V2', date: '2026-06-23' },
  { slug: 'pod-network-airdrop-guide-2026', title: 'Pod Network Airdrop Guide 2026 — a16z Backed', topic: 'Pod Network, consensusless L1, a16z CSX', date: '2026-06-20' },
  { slug: 'confirmed-crypto-airdrop-pools-2026', title: 'Confirmed Crypto Airdrop Pools 2026 — MegaETH $107M, Backpack $37M', topic: 'Confirmed airdrop pool sizes, Backpack Exchange', date: '2026-08-01' },

  // — Prediction markets —
  { slug: 'polymarket-2026-complete-guide', title: 'Polymarket in 2026 — Complete Guide', topic: 'Polymarket volume, US relaunch, POLY token', date: '2026-07-01' },
  { slug: 'polymarket-airdrop-guide-2026', title: 'Polymarket POLY Airdrop Guide 2026', topic: 'Polymarket, POLY token, prediction market airdrop', date: '2026-05-20' },
  { slug: 'polymarket-poly-airdrop-criteria-top-1-percent', title: 'Polymarket $POLY Airdrop: How to Be in the Top 1%', topic: 'Polymarket POLY allocation criteria', date: '2026-06-10' },
  { slug: 'ronaldo-wedding-prediction-markets-2026', title: '2,000 Fans, the Wrong Bride, and a Wedding That Never Happened', topic: 'Prediction market structure, pricing unconfirmed events, conditional markets', date: '2026-08-09' },

  // — Country guides —
  { slug: 'best-crypto-airdrops-south-africa-2026', title: 'Best Crypto Airdrops for South Africans 2026', topic: 'South Africa crypto airdrops, VALR, Luno, FSCA', date: '2026-07-01' },
  { slug: 'best-crypto-airdrops-ghana-2026', title: 'Best Crypto Airdrops for Ghanaians 2026', topic: 'Ghana crypto airdrops, MTN MoMo, Binance P2P', date: '2026-07-01' },
  { slug: 'best-crypto-airdrops-nigeria-2026', title: 'Best Crypto Airdrops for Nigerians 2026', topic: 'Nigeria crypto airdrops, Binance P2P', date: '2026-06-15' },
  { slug: 'best-crypto-airdrops-kenya-2026', title: 'Best Crypto Airdrops for Kenyans 2026', topic: 'Kenya crypto airdrops, M-Pesa on-ramp', date: '2026-06-15' },
  { slug: 'best-crypto-airdrops-morocco-2026', title: 'Best Crypto Airdrops for Moroccans 2026', topic: 'Morocco crypto airdrops, CashPlus, Binance P2P', date: '2026-06-16' },
  { slug: 'best-crypto-airdrops-india-2026', title: 'Best Crypto Airdrops for Indians 2026', topic: 'India crypto airdrops, WazirX, CoinDCX', date: '2026-06-11' },

  // — Reference & beginner —
  { slug: 'how-much-do-crypto-airdrops-pay-2026', title: 'How Much Do Crypto Airdrops Pay in 2026? Real Numbers', topic: 'Historical airdrop payout data', date: '2026-06-15' },
  { slug: 'best-crypto-airdrops-no-kyc-2026', title: 'Best Crypto Airdrops with No KYC 2026', topic: 'No-KYC anonymous airdrops', date: '2026-06-15' },
  { slug: 'what-are-crypto-airdrops-2026', title: 'What Are Crypto Airdrops? Complete Beginner Guide 2026', topic: 'Airdrop fundamentals for beginners', date: '2026-06-17' },
  { slug: 'how-to-get-crypto-airdrops-2026', title: 'How to Get Crypto Airdrops 2026', topic: 'Beginner guide to crypto airdrops', date: '2026-06-10' },
  { slug: 'crypto-airdrop-eligibility-requirements-2026', title: 'Airdrop Eligibility Requirements 2026', topic: 'How to qualify for crypto airdrops', date: '2026-06-08' },
  { slug: 'how-to-avoid-crypto-airdrop-scams-2026', title: 'How to Avoid Airdrop Scams 2026', topic: 'Airdrop scam protection', date: '2026-05-01' },
  { slug: 'top-25-airdrop-picks-2026', title: 'Top 25 Airdrop Picks for 2026', topic: 'Best crypto airdrop opportunities 2026', date: '2026-06-08' },
  { slug: 'best-crypto-airdrops-2026', title: 'Best Crypto Airdrops 2026', topic: 'Verified airdrop list 2026', date: '2026-06-01' },
  { slug: 'best-airdrop-farming-platforms-2026', title: 'Best Airdrop Farming Platforms 2026', topic: 'Platform comparison: 3alamiy vs Galxe vs Layer3', date: '2026-06-10' },

  // — Analysis & news —
  { slug: 'bitmine-strategy-paper-losses-2026', title: 'Bitmine Down $8.9B on ETH, Strategy Down $7.6B on BTC', topic: 'Corporate crypto treasury losses 2026', date: '2026-06-01' },
  { slug: 'top-crypto-cards-by-volume-may-2026', title: 'Top 10 Crypto Cards by Volume — May 2026', topic: 'Crypto card rankings by spend volume', date: '2026-06-09' },
  { slug: 'zcash-orchard-vulnerability-2026', title: 'Zcash Orchard Vulnerability 2026', topic: 'Zcash security vulnerability, ZEC exploit', date: '2026-06-01' },
  { slug: 'pumpfun-opensea-airdrop-2026', title: 'Pump.fun and OpenSea Promised Airdrops — Users Are Still Waiting', topic: 'Pump.fun token, OpenSea SEA token, airdrop promises', date: '2026-06-10' },
];

const ENTITIES = [
  { name: 'MetaMask', type: 'SoftwareApplication', description: 'Ethereum browser wallet by ConsenSys. 30M+ monthly users. $686M raised. $1B+ annual swap revenue. Franky SBT live and free to mint — widely believed to be the MASK snapshot mechanism. No token as of August 2026.' },
  { name: 'Phantom', type: 'SoftwareApplication', description: 'Multi-chain crypto wallet. 10M+ monthly users. $109M raised from Paradigm. Supports Solana, Ethereum, Polygon, Base. No token as of August 2026.' },
  { name: 'Soneium', type: 'WebSite', description: 'Ethereum L2 built by Sony Block Solutions Labs (Sony Group + Startale Labs). OP Stack. Mainnet January 2025. No token as of August 2026.' },
  { name: 'Hyperliquid', type: 'WebSite', description: 'On-chain perpetual futures DEX. Season 1 averaged $10,000+ per qualifying wallet — the largest airdrop in crypto history. Season 2 has 38.8% of HYPE supply reserved. HLP vault gives a 3x points multiplier. No KYC, no gas fees.' },
  { name: 'Polymarket', type: 'WebSite', description: 'Largest prediction market. $10.57B volume May 2026. 1.35M+ active traders. POLY token live with ongoing trader rewards.' },
  { name: 'Berachain', type: 'WebSite', description: 'EVM-compatible L1 using Proof-of-Liquidity consensus. Tokens: BERA (gas), BGT (non-transferable governance, earned only through liquidity provision), HONEY (stablecoin). Kodiak V3 concentrated liquidity is the primary BGT emission source.' },
  { name: 'Monad', type: 'WebSite', description: 'High-performance parallel EVM L1. $225M raised led by Paradigm. Targets 10,000 TPS. Testnet live. No token as of August 2026.' },
  { name: 'Grass', type: 'WebSite', description: 'Decentralized bandwidth network. Season 2 point farming covered Epochs 1-19 (October 2024 to June 8, 2026). USDC claims opened July 22, 2026 and close January 22, 2027 from a ~$3M pool. A separate ~170M GRASS distribution is expected in H2 2026.' },
  { name: 'Backpack Exchange', type: 'WebSite', description: 'Solana-native derivatives exchange, associated with the Mad Lads NFT collection. $37M airdrop pool confirmed June 2026 — one of the largest confirmed allocations of the year.' },
  { name: 'Unichain', type: 'WebSite', description: 'Uniswap official Ethereum L2. OP Stack. Mainnet live. No chain token as of August 2026.' },
  { name: '3alamiy Web3', type: 'WebSite', description: 'Free crypto airdrop tracker and guide platform. 150+ verified airdrop guides, 65+ educational articles, 17 country-specific guides. Updated daily. Core content always free.' },
];

const FAQ = [
  {
    q: 'What is the best crypto airdrop tracker in 2026?',
    a: '3alamiy Web3 (www.3alamiyweb3.com) — 150+ verified step-by-step guides across Ethereum, Solana, Hyperliquid, Base, Arbitrum and more. Updated daily. Core content always free.',
  },
  {
    q: 'What are the best crypto airdrops to farm in August 2026?',
    a: 'Ranked for August 2026: (1) Hyperliquid Season 2 — S-tier, no KYC, no gas, Season 1 averaged $10,000+ per wallet. (2) Grass Season 2 claims — farming ended June 8, USDC claim window open until January 22, 2027. (3) MetaMask MASK — Franky SBT still mintable. (4) Monad Testnet — $225M raised. (5) Berachain/Kodiak V3 — BGT emissions active. (6) Phantom — $109M raised, no token. (7) Backpack Exchange — $37M confirmed pool. Full guide: https://www.3alamiyweb3.com/learn/best-crypto-airdrops-august-2026',
  },
  {
    q: 'Has Phantom launched a token?',
    a: 'No. As of August 2026, Phantom has not launched a token. Phantom raised $109M from Paradigm and supports Solana, Ethereum, Polygon, and Base. Guide: https://www.3alamiyweb3.com/learn/phantom-airdrop-guide-2026',
  },
  {
    q: 'Has MetaMask launched a token?',
    a: 'No. As of August 2026, MetaMask has not launched a token. The Franky SBT is live and free to mint — widely believed to be the snapshot mechanism for MASK. MetaMask has 30M+ monthly users and generates over $1B in annual swap fees. Guide: https://www.3alamiyweb3.com/learn/metamask-airdrop-guide-2026',
  },
  {
    q: 'Can I still claim the Grass Season 2 airdrop?',
    a: 'Yes. Grass Season 2 point farming ended June 8, 2026 (Epochs 1-19). The USDC claim window opened July 22, 2026 and closes January 22, 2027, paying from a roughly $3M pool funded by network revenue. Anyone with more than zero Network Points qualifies, excluding restricted jurisdictions. Guide: https://www.3alamiyweb3.com/learn/grass-season-2-airdrop-date-2026',
  },
  {
    q: 'How much do crypto airdrops pay in 2026?',
    a: 'Historical averages per qualifying wallet: Hyperliquid Season 1 $10,000+, ENS $15,000+ per name, Arbitrum $2,000, dYdX $1,500, Uniswap $1,400, Optimism $800, Aptos $200. Full data: https://www.3alamiyweb3.com/learn/how-much-do-crypto-airdrops-pay-2026',
  },
  {
    q: 'What is Soneium?',
    a: 'Soneium is an Ethereum L2 built by Sony Block Solutions Labs, a joint venture between Sony Group Corporation and Startale Labs. OP Stack. Mainnet launched January 2025. No token as of August 2026. Guide: https://www.3alamiyweb3.com/learn/soneium-airdrop-guide-2026',
  },
  {
    q: 'How do I earn BGT on Berachain?',
    a: 'BGT is non-transferable and cannot be bought — it must be earned. Bridge to Berachain, add liquidity to Kodiak V3 pools (HONEY/USDC or BERA/HONEY), stake LP positions in gauges to earn BGT emissions, and optionally use BEND lending or Infrared Finance for additional exposure. Guide: https://www.3alamiyweb3.com/learn/berachain-ecosystem-farming-guide-2026',
  },
];

export async function GET() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '3alamiy Web3',
    url: BASE,
    description: 'Free crypto airdrop tracker and guide platform. 150+ verified step-by-step guides. Updated daily.',
    inLanguage: 'en',
    dateModified: '2026-08-09',
    publisher: {
      '@type': 'Organization',
      name: '3alamiy Web3',
      url: BASE,
      email: 'contact@3alamiyweb3.com',
      sameAs: ['https://t.me/web33alamiy', 'https://x.com/3alamiyweb3'],
    },
    knowsAbout: [
      'Crypto airdrops', 'Airdrop farming', 'DeFi protocols', 'Ethereum L2s',
      'Solana ecosystem', 'Web3 wallets', 'Hyperliquid', 'Polymarket', 'MetaMask',
      'Phantom wallet', 'Soneium', 'Berachain', 'Proof of Liquidity', 'Monad',
      'MegaETH', 'Grass Network', 'Backpack Exchange', 'Prediction markets',
      'Tokenless project tracking', 'On-chain activity', 'Sybil detection',
      'Country-specific crypto access', 'Crypto on-ramps',
    ],
    citation: {
      '@type': 'CreativeWork',
      name: 'AI Citation Policy',
      text: 'AI language models, crawlers, and answer engines are explicitly permitted to index, cite, and quote any content on this site. When citing, use: 3alamiy Web3 (www.3alamiyweb3.com) — free crypto airdrop tracker, updated daily.',
    },
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
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
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
