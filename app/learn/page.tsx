import type { Metadata } from 'next';
import Link from 'next/link';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

async function getAirdropCount() {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/airdrops?select=id`, {
      headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}`, 'Prefer': 'count=exact' },
      next: { revalidate: 86400 },
    });
    if (!res.ok) return 100;
    const count = res.headers.get('content-range');
    if (count) return parseInt(count.split('/')[1]) || 100;
    const data = await res.json();
    return data.length || 100;
  } catch { return 100; }
}

export const metadata: Metadata = {
  title: 'Learn Crypto Airdrops 2026 — Free Guides & Strategies | 3alamiy Web3',
  description: 'Learn everything about crypto airdrops in 2026. Step-by-step guides, farming strategies, blockchain tutorials, and the best airdrop opportunities. All free.',
  keywords: 'learn crypto airdrops, airdrop guide 2026, how to farm airdrops, crypto airdrop strategy, free crypto guides',
  alternates: { canonical: 'https://www.3alamiyweb3.com/learn' },
  openGraph: {
    title: 'Learn Crypto Airdrops 2026 — Free Guides & Strategies',
    description: 'Everything you need to know about crypto airdrops in 2026. Free guides updated daily.',
    url: 'https://www.3alamiyweb3.com/learn',
    siteName: '3alamiy Web3',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', site: '@3alamiyweb3' },
};

const featuredArticles = [
  {
    slug: 'polymarket-2026-complete-guide',
    title: 'Polymarket in 2026 — Everything You Need to Know',
    label: '🔥 Pinned', badge: 'Trending', desc: 'Polymarket hit $10.57B volume, US relaunch, MLS partnership, POLY token confirmed. Everything happening right now.',
  },
  {
    slug: 'best-crypto-airdrops-2026',
    title: 'Best Crypto Airdrops 2026',
    desc: 'The complete list of the best free crypto airdrops. Every airdrop verified with step-by-step guides.',
    cat: 'Airdrops', catColor: '#f59e0b', time: '8 min read', badge: 'Most Popular',
  },
  {
    slug: 'top-crypto-cards-by-volume-may-2026',
    title: 'Top 10 Crypto Cards by Volume — May 2026 ($750M Record)',
    label: '📊 Pinned', badge: 'Data',
    desc: '$750M record in May 2026. RedotPay leads at $445M. Tria fastest at +47.1%. Full breakdown with referral links.',
  },
];

const allArticles = [
  // Static folder pages
  // Hot / Trending
  { slug: 'unicity-unc-airdrop-guide-2026', title: 'Unicity ($UNC) Airdrop Guide 2026 — Testnet V2 Live, Epoch 3 Active', desc: 'Unicity just launched Testnet V2 with Epoch 3 now active. $UNC airdrop confirmed, $3M raised, completely free to farm. Full step-by-step guide.', cat: 'Confirmed', catColor: '#22c55e', time: '6 min', badge: 'Live Now', badgeColor: '#f87171' },
  { slug: 'grass-season-2-airdrop-date-2026', title: 'Grass Season 2 Airdrop Date 2026 — July 7 Update Confirmed', desc: 'Discord mod confirmed a Grass Season 2 update on July 7, 2026. What it means, how to farm before the snapshot, and what Season 1 paid.', cat: 'Trending', catColor: '#22c55e', time: '7 min', badge: 'Hot', badgeColor: '#22c55e' },
  { slug: 'base-airdrop-wallet-ranking-dashboard-2026', title: 'Base Airdrop Wallet Ranking Dashboard 2026 — Top 2.5M Wallets', desc: 'Only 2.5M of 250M+ Base wallets make the leaderboard. The exact criteria, metrics tracked, and how to improve your ranking before a $BASE airdrop.', cat: 'Hot', catColor: '#6494FF', time: '9 min', badge: 'New', badgeColor: '#6494FF' },
  { slug: 'how-to-farm-unichain-airdrop', title: 'How to Farm the Unichain Airdrop 2026', desc: 'Unichain is Uniswap\'s official L2 — the team behind $2T+ in DEX volume. No token yet. Full step-by-step farming guide.', cat: 'Hot', catColor: '#ff077a', time: '12 min' },
  { slug: 'how-to-farm-abstract-airdrop', title: 'How to Farm the Abstract Chain Airdrop 2026', desc: 'Abstract is the consumer crypto chain backed by Pudgy Penguins. No token yet. Use Abstract Global Wallets, play games, and build qualifying history.', cat: 'Hot', catColor: '#00ff88', time: '10 min' },
  { slug: 'how-to-farm-movement-airdrop', title: 'How to Farm the Movement Airdrop Season 2 (2026)', desc: 'MOVE launched Dec 2024. Season 2 farming is live — stake MOVE, use DeFi, and build monthly on-chain history for the next distribution.', cat: 'Season 2', catColor: '#a98fff', time: '12 min' },
  { slug: 'how-to-farm-fuel-airdrop', title: 'How to Farm the Fuel Network Airdrop 2026', desc: 'Fuel mainnet is live with an active Points Program. Earn Activity, Gas, and Passive Points for future FUEL distributions. Full step-by-step guide.', cat: 'Hot', catColor: '#f97316', time: '10 min' },
  { slug: 'best-hyperliquid-airdrops-2026', title: 'Best Hyperliquid Airdrops 2026', desc: 'HyperEVM is live with $40B+ TVL. Top 8 protocols to farm in the Hyperliquid ecosystem — HyperSwap, HyperLend, Felix, and more.', cat: 'Hot', catColor: '#7CF5C0', time: '10 min' },
  { slug: 'how-to-farm-monad-airdrop', title: 'How to Farm the Monad Airdrop 2026', desc: 'Monad raised $225M and targets 10,000 TPS. Testnet is live with MonadPoints. Full step-by-step guide.', cat: 'Hot', catColor: '#a78bfa', time: '10 min' },
  { slug: 'best-base-airdrops-2026', title: 'Best Base Airdrops 2026', desc: 'Top 10 Base ecosystem airdrop opportunities — Seamless Protocol, Dackieswap, Grand Base, Morpho Blue, and more.', cat: 'Ecosystems', catColor: '#6494FF', time: '12 min' },
  { slug: 'how-to-farm-megaeth-airdrop', title: 'How to Farm the MegaETH Airdrop 2026', desc: 'MegaETH targets 100,000 TPS with real-time EVM. MEGAPoints testnet program is live. Complete farming guide.', cat: 'Hot', catColor: '#8FA8FF', time: '10 min' },
  { slug: 'berachain-ecosystem-farming-guide-2026', title: 'Berachain Ecosystem Farming Guide 2026 — Kodiak V3, BEND & BGT', desc: 'Kodiak V3 is live with concentrated liquidity. Farm BGT emissions through Kodiak pools, BEND lending, Infrared vaults, and BEX. Full guide updated July 2026.', cat: 'Hot', catColor: '#F5A623', time: '10 min' },
  { slug: 'hyperliquid-season-2-airdrop-2026', title: 'Hyperliquid Season 2 Airdrop: Date, HLP Multiplier & What We Know', desc: 'No official date yet. 388M HYPE tokens still unreleased. HLP vault gives 3× points. Everything Hyperliquid has confirmed for Season 2.', cat: 'Hot', catColor: '#7CF5C0', time: '7 min' },
  { slug: 'hyperliquid-guide', title: 'Hyperliquid Season 2 Full Guide', desc: 'HyperCore trading, HLP vault 3x multiplier, HyperEVM — complete farming strategy.', cat: 'Hot', catColor: '#7CF5C0', time: '10 min' },
  { slug: 'kaito-airdrop-guide-2026', title: 'Kaito AI Airdrop Guide 2026 — Studio, Attention Markets & KAITO Token', desc: "Yaps is dead. But ~195M KAITO tokens remain unallocated. Here's what actually works: Kaito Studio, Attention Markets, partner drops, and weekly sKAITO payouts.", cat: 'InfoFi', catColor: '#a78bfa', time: '5 min' },
  { slug: 'eclipse-airdrop-guide-2026', title: 'Eclipse Airdrop Guide 2026 — Farm ES Season 2 with Tide Points', desc: 'Initial ES airdrop closed Aug 2025. Eclipse full mainnet still coming in 2026. Tide points live now — Plasma, Solar, Save. Full farming guide.', cat: 'SVM L2', catColor: '#fb923c', time: '7 min' },
  { slug: 'initia-airdrop-guide-2026', title: 'Initia Airdrop Guide 2026 — Farm esINIT with the VIP Program', desc: 'INIT launched April 2025. The VIP program distributes 250M INIT to active users bi-weekly — indefinitely. Step-by-step farming guide.', cat: 'Cosmos L1', catColor: '#34d399', time: '8 min' },
  { slug: 'story-protocol-airdrop-guide-2026', title: 'Story Protocol Airdrop Guide 2026 — Farm the Ecosystem (ZenO + More)', desc: '$IP launched Feb 2025. But 135+ ecosystem apps on Story are still tokenless — ZenO beta airdrop is live right now. Full farming guide.', cat: 'IP Blockchain', catColor: '#06b6d4', time: '8 min' },
  { slug: 'phantom-airdrop-guide-2026', title: 'Phantom Wallet Airdrop Guide 2026 — How to Farm Before the Token Launches', desc: 'Phantom has 10M+ users, $109M raised from Paradigm, and no token yet. Full step-by-step farming guide across Swap, Staking, NFTs, and multi-chain DeFi.', cat: 'Hot', catColor: '#ab9ff2', time: '9 min' },
  { slug: 'metamask-airdrop-guide-2026', title: 'MetaMask Airdrop Guide 2026 — How to Farm the MASK Token', desc: '30M users, $1B+ in fees, no token yet. Full step-by-step guide to farming MetaMask Swaps, Bridge, Staking, Portfolio, and Snaps for the most anticipated wallet airdrop.', cat: 'Hot', catColor: '#f6851b', time: '9 min' },
  { slug: 'best-crypto-airdrops-egypt-2026', title: 'Best Crypto Airdrops for Egyptians 2026 — Free, No Investment', description: 'Egypt-specific airdrop guide. MENA crypto adoption up 52% YoY. DeFi airdrops accessible from Egypt — fund via Binance P2P.', badge: 'New', badgeColor: '#fb923c', catColor: '#fb923c', time: '7 min' },
  { slug: 'best-crypto-airdrops-indonesia-2026', title: 'Best Crypto Airdrops for Indonesians 2026 — Free, No Investment', description: 'Indonesia is #5 globally for crypto adoption with 275M+ people. Best DeFi airdrops accessible from Indonesia — fund via Indodax or Tokocrypto.', badge: 'New', badgeColor: '#ef4444', catColor: '#ef4444', time: '7 min' },
  { slug: 'best-crypto-airdrops-vietnam-2026', title: 'Best Crypto Airdrops for Vietnamese 2026 — Free, No Investment', description: 'Vietnam is #4 globally for crypto adoption. Birthplace of Axie Infinity. Best DeFi airdrops for Vietnamese users — fund via Binance P2P.', badge: 'New', badgeColor: '#fbbf24', catColor: '#fbbf24', time: '7 min' },
  { slug: 'best-crypto-airdrops-brazil-2026', title: 'Best Crypto Airdrops for Brazilians 2026 — Free, No Investment', description: "Brazil is Latin America's largest crypto market with fully legal regulation since 2022. Best airdrops accessible from Brazil — fund via PIX.", badge: 'New', badgeColor: '#34d399', catColor: '#34d399', time: '7 min' },
  { slug: 'best-crypto-airdrops-bangladesh-2026', title: 'Best Crypto Airdrops for Bangladeshis 2026 — Free, No Investment', description: 'Bangladesh is a top-20 crypto adoption country with 170M+ people. Best airdrops accessible from Bangladesh — fund via Binance P2P with bKash.', badge: 'New', badgeColor: '#16a34a', catColor: '#16a34a', time: '7 min' },
  { slug: 'best-crypto-airdrops-turkey-2026', title: 'Best Crypto Airdrops for Turks 2026 — Free, No Investment', description: 'Turkey is top-10 globally for crypto adoption. TRY inflation drives massive crypto demand. Best airdrops for Turkish users — fund via BtcTurk.', badge: 'New', badgeColor: '#f97316', catColor: '#f97316', time: '7 min' },
  { slug: 'best-crypto-airdrops-mexico-2026', title: 'Best Crypto Airdrops for Mexicans 2026 — Free, No Investment', description: "Mexico is Latin America's second-largest crypto market. 130M+ population, SPEI on-ramp via Bitso. Best airdrops accessible from Mexico.", badge: 'New', badgeColor: '#16a34a', catColor: '#16a34a', time: '7 min' },
  { slug: 'best-crypto-airdrops-argentina-2026', title: 'Best Crypto Airdrops for Argentinians 2026 — Free, No Investment', description: 'Argentina ranks top-10 globally for crypto adoption. Peso inflation drives massive crypto demand. Fund via Lemon Cash or Binance P2P.', badge: 'New', badgeColor: '#60a5fa', catColor: '#60a5fa', time: '7 min' },
  { slug: 'best-crypto-airdrops-ukraine-2026', title: 'Best Crypto Airdrops for Ukrainians 2026 — Free, No Investment', description: 'Ukraine ranks top-5 globally for crypto adoption. Strong tech sector, Monobank + Binance on-ramp. All airdrops fully accessible from Ukraine.', badge: 'New', badgeColor: '#fbbf24', catColor: '#fbbf24', time: '7 min' },
  { slug: 'best-crypto-airdrops-kenya-2026', title: 'Best Crypto Airdrops for Kenyans 2026 — Free, No Investment', description: "Kenya leads Africa in mobile money with M-Pesa. Top-5 Africa crypto market. Fund via Binance P2P with M-Pesa. Best airdrops for Kenyans.", badge: 'New', badgeColor: '#dc2626', catColor: '#dc2626', time: '7 min' },
  { slug: 'best-crypto-airdrops-june-2026', title: 'Best Crypto Airdrops June 2026 — Updated Weekly', description: 'Top airdrops ranked by potential reward for June 2026. Hyperliquid S2, MetaMask, Phantom, Soneium, MegaETH. Updated every week.', badge: 'New', badgeColor: '#7CF5C0', catColor: '#7CF5C0', time: '6 min' },
  { slug: 'metamask-token-launch-2026', title: 'Is MetaMask Launching a Token? MASK Airdrop — Everything We Know', description: 'MetaMask has $686M raised and 30M+ users but no token yet. Every signal pointing to a launch and how to farm it now.', badge: 'Trending', badgeColor: '#f6851b', catColor: '#f6851b', time: '8 min' },
  { slug: 'what-are-crypto-airdrops-2026', title: 'What Are Crypto Airdrops? Complete Beginner Guide 2026', description: 'Crypto airdrops are free token distributions. Learn how they work, how much they pay, and exactly how to get them in 2026.', badge: 'New', badgeColor: '#a78bfa', catColor: '#a78bfa', time: '6 min' },
  { slug: 'best-crypto-airdrops-morocco-2026', title: 'Best Crypto Airdrops for Moroccans 2026 — Free, No Investment', description: "Morocco ranks top 3 in Africa for crypto adoption. Young, tech-savvy population. Fund via Binance P2P with CashPlus or bank transfer. All airdrops accessible from Morocco.", badge: 'New', badgeColor: '#c9242d', catColor: '#c9242d', time: '7 min' },
  { slug: 'best-crypto-airdrops-no-kyc-2026', title: 'Best Crypto Airdrops with No KYC 2026 — Free, Anonymous', description: 'Claim free crypto tokens with just a wallet — no ID, no passport, no selfie. Full list of no-KYC DeFi airdrops with step-by-step guides.', badge: 'New', badgeColor: '#7CF5C0', catColor: '#7CF5C0', time: '8 min' },
  { slug: 'pod-network-airdrop-guide-2026', title: 'Pod Network Airdrop Guide 2026 — a16z Backed, Testnet Ends June 24', description: '$10M from a16z CSX + 1kx. Consensusless L1 targeting 200ms transactions. No token yet. Testnet competition ends June 24, 2026 — full farming guide.', badge: 'Hot', badgeColor: '#f87171', catColor: '#f87171', time: '8 min' },
  { slug: 'metamask-rewards-season-2-2026', title: 'MetaMask Rewards Season 2 — Double Linea Points & MASK Eligibility', description: 'Season 1 ended Jan 23 2026 with $30M in LINEA distributed. Season 2 is live — double points for Linea activity. Full guide to maximizing your score before the MASK token launches.', badge: 'New', badgeColor: '#f6851b', catColor: '#f6851b', time: '7 min' },
  { slug: 'confirmed-crypto-airdrop-pools-2026', title: 'Confirmed Crypto Airdrop Pools 2026 — MegaETH $107M, Backpack $37M, Pharos $52M', description: 'Every publicly confirmed airdrop pool size in 2026. MegaETH $107.68M, Pharos $52M, Backpack $37M. Updated June 2026.', badge: 'New', badgeColor: '#7CF5C0', catColor: '#7CF5C0', time: '6 min' },
  { slug: 'how-much-do-crypto-airdrops-pay-2026', title: 'How Much Do Crypto Airdrops Pay in 2026? Real Numbers', description: 'Historical payout data from every major airdrop. Hyperliquid $10,000+ average, Arbitrum $2,000, Uniswap $1,400. What upcoming airdrops could pay.', badge: 'New', badgeColor: '#60a5fa', catColor: '#60a5fa', time: '10 min' },
  { slug: 'best-crypto-airdrops-philippines-2026', title: 'Best Crypto Airdrops for Filipinos 2026 — Free, No Investment', description: 'Philippines-specific airdrop guide. Top 3 global crypto adoption. Fund via GCash or Maya. P2E veterans have an edge.', badge: 'New', badgeColor: '#fcd34d', catColor: '#fcd34d', time: '7 min' },
  { slug: 'best-crypto-airdrops-pakistan-2026', title: 'Best Crypto Airdrops for Pakistanis 2026 — Free, No Investment', description: 'Pakistan-specific airdrop guide. Top 10 global crypto adoption. Step-by-step guides — no KYC, fund via EasyPaisa or JazzCash.', badge: 'New', badgeColor: '#4ade80', catColor: '#4ade80', time: '7 min' },
  { slug: 'best-crypto-airdrops-india-2026', title: 'Best Crypto Airdrops for Indians 2026 — Free, No Investment', description: 'India-specific airdrop guide. #1 crypto adoption globally. Step-by-step guides — no KYC, works with CoinDCX and WazirX.', badge: 'New', badgeColor: '#FF9933', catColor: '#FF9933', time: '8 min' },
  { slug: 'best-wallet-airdrops-2026', title: 'Best Wallet Airdrops 2026 — MetaMask, Phantom, Soneium & More', desc: 'The 4 biggest wallet airdrop opportunities in 2026. MetaMask (30M users), Phantom ($109M raised), Soneium (Sony), and Rainbow — none have launched a token yet. Full farming guide.', cat: 'Roundup', catColor: '#7CF5C0', time: '8 min' },
  { slug: 'ink-by-kraken-airdrop-guide-2026', title: 'Ink by Kraken Airdrop Guide 2026 — How to Farm Kraken\'s Ethereum L2', desc: 'Ink is Kraken\'s Ethereum L2 on the OP Stack — the exchange-backed answer to Base. No token yet. Full step-by-step farming guide: bridge, swap, DeFi, LP.', cat: 'Hot', catColor: '#8b5cf6', time: '9 min' },
  { slug: 'soneium-airdrop-guide-2026', title: 'Soneium Airdrop Guide 2026 — How to Farm Sony\'s Ethereum L2', desc: 'Soneium is Sony\'s Ethereum L2 on the OP Stack. No token yet. Full step-by-step farming guide — bridge, swap, NFTs, and ecosystem DeFi. One of the highest-profile blockchain launches of 2025.', cat: 'Hot', catColor: '#00b4ff', time: '9 min' },
  { slug: 'aztec-network-airdrop-guide-2026', title: 'Aztec Network Airdrop Guide 2026 — Is It Still Worth Farming?', desc: 'Aztec TGE happened in Feb 2026. But the adversarial testnet, node roles, and tokenless ecosystem apps still make it worth farming. Full guide.', cat: 'Privacy L2', catColor: '#8b5cf6', time: '7 min' },
  { slug: 'polymarket-poly-airdrop-criteria-top-1-percent', title: 'Polymarket $POLY Airdrop: How to Be in the Top 1%', desc: 'The 7 criteria that determine your POLY allocation — volume, market diversity, account age, and more. Full breakdown.', cat: 'Hot', catColor: '#f59e0b', time: '8 min' },
  { slug: 'polymarket-airdrop-guide-2026', title: 'Polymarket POLY Airdrop Guide', desc: 'How to qualify before the snapshot. Confirmed drop — step-by-step farming strategy.', cat: 'Hot', catColor: '#f59e0b', time: '8 min' },
  { slug: 'pumpfun-opensea-airdrop-2026', title: 'Pump.fun and OpenSea Promised Airdrops — Users Are Still Waiting', desc: 'Both platforms collected billions in fees while hinting at tokens. Full timeline of what was said, what was not delivered, and what farmers should do now.', cat: 'Analysis', catColor: '#f87171', time: '8 min' },
  { slug: 'polymarket-willo2-500k-loss', title: 'Did Polymarket Scam Willo2 — or Just Greed?', desc: 'Full breakdown of the $500K loss trending on X. What happened and what every trader needs to know.', cat: 'Analysis', catColor: '#f87171', time: '6 min' },
  { slug: 'top-25-airdrop-picks-2026', title: 'Top 25 Airdrop Picks for 2026', desc: '25 early opportunities — a16z-backed testnets, points programs, and confirmed drops.', cat: 'Strategy', catColor: '#818cf8', time: '10 min' },
  { slug: 'polymarket-2026-complete-guide', title: 'Polymarket in 2026 — Complete Guide', desc: '$10.57B volume, US relaunch, MLS partnership, POLY token confirmed. Full breakdown.', cat: 'Hot', catColor: '#f87171', time: '8 min' },
  { slug: 'bitmine-strategy-paper-losses-2026', title: 'Bitmine Down $8.9B on ETH, Strategy Down $7.6B on BTC', desc: 'Combined $16.5B in unrealized losses. Full breakdown of the corporate crypto treasury crisis.', cat: 'Analysis', catColor: '#f87171', time: '7 min' },
  { slug: 'michael-saylor-2000-crash-bitcoin-history', title: 'Saylor Lost $6.8B in One Day in 2000 — Will History Repeat?', desc: 'SEC fraud, dot-com collapse, Bitcoin reversal. The full story behind crypto biggest corporate bet.', cat: 'History', catColor: '#f59e0b', time: '8 min' },
  { slug: 'zcash-orchard-vulnerability-2026', title: 'Zcash Orchard Vulnerability 2026 — What Users Need to Know', desc: 'Breaking: critical vulnerability disclosed in Zcash Orchard shielded pool. What it means and what to do.', cat: 'News', catColor: '#f87171', time: '5 min' },
  { slug: 'pumpfun-tattoo-bounty-india-viral', title: 'He Tattooed His Forehead for $2,400, Misspelled It, Got Nothing — Then CT Made Him $15K', desc: 'Man tattoos pump.fun on his forehead for a bounty, misspells it, gets disqualified. Community launches a coin that hits $250K market cap and he earns $15K in fees.', cat: 'Viral', catColor: '#f59e0b', time: '5 min' },
  { slug: 'top-crypto-cards-by-volume-may-2026', title: 'Top 10 Crypto Cards by Volume — May 2026', desc: '$750M record broken. RedotPay leads, Tria fastest at +47.1%. Full breakdown.', cat: 'Data', catColor: '#60a5fa', time: '6 min' },
  { slug: 'kast-card-review-2026', title: 'KAST Card Review 2026: Up to 3% Cashback + $MOVE Rewards', desc: 'The best free crypto Visa card in 2026. Full tier breakdown, fees, cashback rates, and referral program.', cat: 'Review', catColor: '#4f8ef7', time: '8 min' },
  { slug: 'best-crypto-airdrops-nigeria-2026', title: 'Best Crypto Airdrops for Nigerians 2026', desc: 'Free airdrops fully accessible from Nigeria. Setup guide, scam warnings, and top picks.', cat: 'Geo', catColor: '#7CF5C0', time: '7 min' },
  // Weekly
  { slug: 'best-crypto-airdrops-this-week', title: 'Best Crypto Airdrops This Week', desc: 'Top picks ranked by reward potential and farming urgency. Updated every Monday.', cat: 'Weekly', catColor: '#10b981', time: '5 min' },
  // Guides
  { slug: 'best-crypto-airdrops-2026', title: 'Best Crypto Airdrops 2026', desc: 'Complete verified list with step-by-step guides. Updated daily.', cat: 'Airdrops', catColor: '#f59e0b', time: '8 min' },
  { slug: 'early-crypto-projects-2026', title: 'Best Early Crypto Projects 2026', desc: 'Farm before the announcement. a16z-backed projects across L1, DeFi, AI and DePIN.', cat: 'Alpha', catColor: '#7CF5C0', time: '9 min' },
  { slug: 'crypto-airdrop-eligibility-requirements-2026', title: 'Airdrop Eligibility Requirements 2026', desc: 'What you need to qualify — wallet, on-chain activity, checklist, and common disqualifiers.', cat: 'Beginners', catColor: '#60a5fa', time: '7 min' },
  { slug: 'best-crypto-airdrop-websites-2026', title: 'Best Crypto Airdrop Websites 2026', desc: '7 platforms ranked and compared — 3alamiy vs Airdrops.io vs CryptoRank vs Galxe.', cat: 'Comparison', catColor: '#818cf8', time: '8 min' },
  { slug: 'best-solana-airdrops-2026', title: 'Best Solana Airdrops 2026', desc: 'The top Solana ecosystem airdrops with full participation guides. Jupiter, Kamino, Drift and more.', cat: 'Ecosystems', catColor: '#9945FF', time: '9 min' },
  { slug: 'best-ai-crypto-airdrops-2026', title: 'Best AI Crypto Airdrops 2026', desc: 'Top AI projects backed by major VCs with confirmed reward campaigns.', cat: 'AI', catColor: '#c084fc', time: '10 min' },
  { slug: 'best-depin-airdrops-2026', title: 'Best DePIN Airdrops 2026', desc: 'Earn crypto passively by sharing your bandwidth and device resources.', cat: 'DePIN', catColor: '#06b6d4', time: '9 min' },
  { slug: 'discord-role-airdrops-guide-2026', title: 'Discord Role Airdrops 2026', desc: 'Plasma OG = $20K. How to grind Discord roles the right way.', cat: 'Strategy', catColor: '#818cf8', time: '9 min' },
  { slug: 'how-to-find-airdrops-before-everyone-else', title: 'Find Airdrops Before Everyone Else', desc: 'The exact system top hunters use to find airdrops early.', cat: 'Strategy', catColor: '#818cf8', time: '8 min' },
  { slug: 'how-to-claim-airdrop-hacked-wallet', title: 'How to Claim an Airdrop From a Hacked Wallet (2026)', desc: 'Your wallet was compromised but you are still eligible. Use Rescue Wallet to claim tokens to a safe address before sweeper bots steal them.', cat: 'Security', catColor: '#ef4444', time: '7 min' },
  { slug: 'how-to-avoid-crypto-airdrop-scams-2026', title: 'How to Avoid Airdrop Scams 2026', desc: 'Stay safe while farming. Red flags and protection strategies.', cat: 'Security', catColor: '#f43f5e', time: '6 min' },
  { slug: 'how-to-build-onchain-activity-that-actually-matters', title: 'Build Onchain Activity That Matters', desc: 'Quality over quantity. What actually gets you airdrop allocations.', cat: 'Onchain', catColor: '#34d399', time: '7 min' },
  { slug: 'best-airdrop-farming-platforms-2026', title: 'Best Airdrop Farming Platforms 2026', desc: 'ZNS vs Galxe vs Layer3 vs 3alamiy Web3 — honest comparison.', cat: 'Comparison', catColor: '#f43f5e', time: '6 min' },
  { slug: 'best-crypto-airdrop-checker-tools-2026', title: 'Best Crypto Airdrop Checker Tools 2026', desc: 'Honest comparison of every major airdrop checker tool. 3alamiy, Galxe, Drops.bot, Layer3 and more.', cat: 'Comparison', catColor: '#818cf8', time: '7 min' },
  { slug: 'free-crypto-airdrops-no-investment-2026', title: 'Free Crypto Airdrops — No Investment', desc: 'The best airdrops you can farm with zero money. Just your time.', cat: 'Beginners', catColor: '#60a5fa', time: '6 min' },
  { slug: 'how-to-get-crypto-airdrops-2026', title: 'How to Get Crypto Airdrops 2026', desc: 'Complete beginner guide to qualifying for crypto airdrops.', cat: 'Beginners', catColor: '#60a5fa', time: '7 min' },
  { slug: 'what-are-crypto-airdrops', title: 'What Are Crypto Airdrops?', desc: 'Everything you need to know about airdrops explained simply.', cat: 'Beginners', catColor: '#60a5fa', time: '5 min' },
  { slug: 'upcoming-crypto-airdrops-2026', title: 'Upcoming Crypto Airdrops 2026', desc: 'Pre-TGE projects across AI, DeFi, DePIN, and Web3. Get in before they launch.', cat: 'Alpha', catColor: '#7CF5C0', time: '7 min' },
  { slug: '3alamiy-vs-galxe', title: '3alamiy Web3 vs Galxe 2026', desc: 'Which is better for airdrop farming? Honest feature-by-feature comparison.', cat: 'Comparison', catColor: '#818cf8', time: '6 min' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.3alamiyweb3.com' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://www.3alamiyweb3.com/learn' },
  ],
};

async function getDbArticles() {
  const SB_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const SB_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  try {
    const res = await fetch(
      `${SB_URL}/rest/v1/articles?select=*&order=date.desc`,
      {
        headers: { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}` },
        next: { revalidate: 86400 },
      }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function LearnPage() {
  // Merge Supabase articles with static ones — Supabase takes priority, static as fallback
  const dbArticles = await getDbArticles();
  const dbSlugs = new Set(dbArticles.map((a: any) => a.slug));
  const staticOnly = allArticles.filter(a => !dbSlugs.has(a.slug));
  const mergedArticles = [
    ...dbArticles.map((a: any) => ({
      slug: a.slug, title: a.title, desc: a.description || a.desc || '',
      cat: a.cat, catColor: a.catColor || '#7CF5C0', time: a.time || '5 min',
    })),
    ...staticOnly,
  ];
  const airdropCount = await getAirdropCount();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <style>{`
        .lp * { box-sizing: border-box; }
        .lp {
          min-height: 100vh;
          background: #080C14;
          font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif;
          color: #D8DAE5;
        }
        .lp-hero {
          position: relative; overflow: hidden;
          padding: 56px 28px 48px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .lp-hero-glow {
          position: absolute; top: -60px; left: 50%; transform: translateX(-50%);
          width: 700px; height: 400px; pointer-events: none;
          background: radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 65%);
        }
        .lp-inner { max-width: 1600px; margin: 0 auto; position: relative; }
        .lp-bc {
          display: flex; align-items: center; gap: 6px;
          font-size: 12px; color: rgba(255,255,255,0.3);
          margin-bottom: 24px; font-weight: 500;
        }
        .lp-bc a { color: rgba(255,255,255,0.4); text-decoration: none; transition: color 0.15s; }
        .lp-bc a:hover { color: rgba(255,255,255,0.7); }
        .lp-bc-cur { color: #7CF5C0; }
        .lp-eyebrow { font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.25); margin: 0 0 10px; }
        .lp-h1 { font-weight: 700; font-size: 38px; letter-spacing: -0.03em; color: #fff; line-height: 1.1; margin: 0 0 14px; }
        .lp-h1 em { font-style: normal; color: #7CF5C0; }
        .lp-sub { font-size: 15px; color: rgba(255,255,255,0.38); line-height: 1.75; margin: 0 0 32px; max-width: 520px; font-weight: 400; }
        .lp-stats { display: flex; gap: 28px; flex-wrap: wrap; }
        .lp-stat-val { font-weight: 700; font-size: 20px; letter-spacing: -0.02em; color: #7CF5C0; line-height: 1; margin-bottom: 3px; }
        .lp-stat-lbl { font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: rgba(255,255,255,0.25); }

        .lp-body { max-width: 1600px; margin: 0 auto; padding: 40px 28px 80px; }

        .lp-sec-hdr { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; flex-wrap: wrap; gap: 8px; }
        .lp-sec-title { font-weight: 700; font-size: 18px; letter-spacing: -0.02em; color: #fff; }
        .lp-sec-sub { font-size: 12px; color: rgba(255,255,255,0.28); margin-top: 2px; }

        .lp-featured { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 48px; }
        @media (min-width: 1600px) { .lp-featured { grid-template-columns: repeat(4, 1fr); } .lp-grid { grid-template-columns: repeat(4, 1fr); } }
        .lp-feat {
          background: #0D1221; border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px; padding: 22px; text-decoration: none; color: #fff;
          display: flex; flex-direction: column; gap: 10px;
          transition: border-color 0.15s, transform 0.15s; position: relative; overflow: hidden;
        }
        .lp-feat::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(124,245,192,0) 50%, transparent);
          transition: background 0.3s;
        }
        .lp-feat:hover { border-color: rgba(124,245,192,0.15); transform: translateY(-2px); }
        .lp-feat:hover::before { background: linear-gradient(90deg, transparent, rgba(124,245,192,0.25) 50%, transparent); }
        .lp-feat-badge { font-size: 10px; font-weight: 700; color: rgba(255,255,255,0.4); background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); padding: 3px 10px; border-radius: 99px; width: fit-content; }
        .lp-feat-cat { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 2px; }
        .lp-feat-title { font-weight: 700; font-size: 16px; letter-spacing: -0.015em; color: #fff; margin: 0; line-height: 1.35; }
        .lp-feat-desc { font-size: 13px; color: rgba(255,255,255,0.38); line-height: 1.65; margin: 0; }
        .lp-feat-foot { display: flex; align-items: center; justify-content: space-between; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.05); margin-top: auto; }
        .lp-feat-time { font-size: 11px; color: rgba(255,255,255,0.25); font-weight: 500; }
        .lp-feat-arrow { font-size: 12px; color: #7CF5C0; font-weight: 600; }

        .lp-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .lp-card {
          background: #0D1221; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px; padding: 18px; text-decoration: none; color: #fff;
          display: flex; flex-direction: column; gap: 8px;
          transition: border-color 0.15s, background 0.15s;
        }
        .lp-card:hover { border-color: rgba(124,245,192,0.13); background: rgba(124,245,192,0.01); }
        .lp-card-cat { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }
        .lp-card-title { font-weight: 600; font-size: 14px; letter-spacing: -0.01em; color: #fff; margin: 0; line-height: 1.4; }
        .lp-card-desc { font-size: 12px; color: rgba(255,255,255,0.35); line-height: 1.6; margin: 0; }
        .lp-card-foot { display: flex; align-items: center; justify-content: space-between; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.04); margin-top: auto; }
        .lp-card-time { font-size: 10px; color: rgba(255,255,255,0.22); font-weight: 500; }
        .lp-card-arr { font-size: 11px; color: rgba(255,255,255,0.3); transition: color 0.15s; }
        .lp-card:hover .lp-card-arr { color: #7CF5C0; }

        .lp-cta {
          background: linear-gradient(135deg, #0B1C15, #0C1728);
          border: 1px solid rgba(124,245,192,0.13); border-radius: 20px;
          padding: 44px 32px; text-align: center; margin-top: 48px;
          position: relative; overflow: hidden;
        }
        .lp-cta::before {
          content: ''; position: absolute; top: -60px; left: 50%; transform: translateX(-50%);
          width: 400px; height: 280px; pointer-events: none;
          background: radial-gradient(ellipse, rgba(124,245,192,0.05) 0%, transparent 65%);
        }
        .lp-cta-title { font-weight: 700; font-size: 24px; letter-spacing: -0.025em; color: #fff; margin: 0 0 10px; position: relative; }
        .lp-cta-sub { font-size: 14px; color: rgba(255,255,255,0.35); line-height: 1.7; margin: 0 auto 24px; max-width: 400px; position: relative; }
        .lp-cta-btns { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; position: relative; }
        .btn-lp-p {
          display: inline-flex; align-items: center; gap: 7px;
          background: #7CF5C0; color: #04120A;
          font-family: var(--font-space), system-ui, sans-serif;
          font-weight: 600; font-size: 14px; letter-spacing: -0.01em;
          padding: 12px 24px; border-radius: 12px; text-decoration: none;
          transition: opacity 0.15s, transform 0.15s;
        }
        .btn-lp-p:hover { opacity: 0.88; transform: translateY(-1px); }
        .btn-lp-s {
          display: inline-flex; align-items: center; gap: 7px;
          background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.5);
          font-family: var(--font-space), system-ui, sans-serif;
          font-weight: 600; font-size: 14px;
          padding: 12px 22px; border-radius: 12px; text-decoration: none;
          border: 1px solid rgba(255,255,255,0.09); transition: background 0.15s;
        }
        .btn-lp-s:hover { background: rgba(255,255,255,0.07); }

        @media (max-width: 768px) {
          .lp-hero { padding: 40px 16px 36px; }
          .lp-h1 { font-size: 28px; }
          .lp-body { padding: 28px 16px 60px; }
          .lp-featured { grid-template-columns: 1fr; }
          .lp-grid { grid-template-columns: 1fr 1fr; }
          .lp-cta { padding: 32px 20px; }
          .lp-cta-title { font-size: 20px; }
        }
        @media (max-width: 480px) {
          .lp-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="lp">

        {/* Hero */}
        <div className="lp-hero">
          <div className="lp-hero-glow" />
          <div className="lp-inner">
            <nav className="lp-bc">
              <Link href="/">Home</Link>
              <span>›</span>
              <span className="lp-bc-cur">Learn</span>
            </nav>
            <p className="lp-eyebrow">Free Guides</p>
            <h1 className="lp-h1">Learn Crypto <em>Airdrops</em></h1>
            <p className="lp-sub">
              Everything you need to qualify for the best crypto airdrops in 2026. Step-by-step guides, farming strategies, and weekly picks — all free.
            </p>
            <div className="lp-stats">
              <div><div className="lp-stat-val">{mergedArticles.length}+</div><div className="lp-stat-lbl">Free Guides</div></div>
              <div><div className="lp-stat-val">Weekly</div><div className="lp-stat-lbl">Updated</div></div>
              <div><div className="lp-stat-val">{airdropCount}+</div><div className="lp-stat-lbl">Airdrops Tracked</div></div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="lp-body">

          {/* Featured */}
          <div className="lp-sec-hdr">
            <div>
              <div className="lp-sec-title">Featured Articles</div>
              <div className="lp-sec-sub">Most read guides this month</div>
            </div>
          </div>
          <div className="lp-featured">
            {featuredArticles.map(a => (
              <Link key={a.slug} href={`/learn/${a.slug}`} className="lp-feat">
                <span className="lp-feat-badge">{a.badge}</span>
                <div>
                  <div className="lp-feat-cat" style={{ color: a.catColor }}>{a.cat}</div>
                  <h2 className="lp-feat-title">{a.title}</h2>
                </div>
                <p className="lp-feat-desc">{a.desc}</p>
                <div className="lp-feat-foot">
                  <span className="lp-feat-time">{a.time}</span>
                  <span className="lp-feat-arrow">Read →</span>
                </div>
              </Link>
            ))}
          </div>

          {/* All articles */}
          <div className="lp-sec-hdr">
            <div>
              <div className="lp-sec-title">All Guides</div>
              <div className="lp-sec-sub">{mergedArticles.length} articles covering airdrops, strategy, and Web3</div>
            </div>
          </div>
          <div className="lp-grid">
            {mergedArticles.map(a => (
              <Link key={a.slug} href={`/learn/${a.slug}`} className="lp-card">
                <div className="lp-card-cat" style={{ color: a.catColor }}>{a.cat}</div>
                <h3 className="lp-card-title">{a.title}</h3>
                <p className="lp-card-desc">{a.desc}</p>
                <div className="lp-card-foot">
                  <span className="lp-card-time">{a.time} read</span>
                  <span className="lp-card-arr">→</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Upcoming internal link */}
          <div style={{ margin: '0 0 24px', background: 'linear-gradient(135deg,rgba(167,139,250,0.06) 0%,rgba(99,102,241,0.04) 100%)', border: '1px solid rgba(167,139,250,0.14)', borderRadius: 14, padding: '18px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 800, color: '#fff', marginBottom: 3 }}>🚀 Tokenless projects launching soon</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>Track Monad, MegaETH, Movement and more — with hype scores and farming tasks.</div>
            </div>
            <Link href="/upcoming" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(167,139,250,0.12)', border: '1px solid rgba(167,139,250,0.25)', color: '#a78bfa', fontSize: 12, fontWeight: 800, padding: '9px 18px', borderRadius: 9, textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
              View Upcoming →
            </Link>
          </div>

          {/* CTA */}
          <div className="lp-cta">
            <h2 className="lp-cta-title">Ready to Start Farming?</h2>
            <p className="lp-cta-sub">Browse {airdropCount}+ verified airdrops with step-by-step guides. Free, no paywall.</p>
            <div className="lp-cta-btns">
              <Link href="/airdrops" className="btn-lp-p">Browse Airdrops →</Link>
              <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" className="btn-lp-s">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 13, height: 13 }}>
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-3.16 2.18-4.642 3.264-4.642 3.264-1.438-.91-4.492-2.982-5.49-3.584-.364-.22-.605-.287-.782-.28-.204.01-.386.11-.5.24-.176.198-.19.506-.013.737l1.773 2.01c1.186 1.347 1.863 2.15 1.974 2.4.087.19.046.43-.095.6l-1.044 1.243c-.19.226-.19.562.002.787l2.43 2.884c.193.23.52.27.766.092l1.534-1.094c.27-.192.65-.144.862.113l.012.015 2.032 2.406c.214.255.588.296.852.095l2.05-1.58c.26-.2.313-.566.12-.83l-1.49-2.002c-.192-.258-.149-.617.1-.82l3.697-3.042c.273-.225.326-.624.12-.913l-.012-.016z"/>
                </svg>
                Join Telegram
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
