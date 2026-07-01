import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Top 25 Airdrop Picks for 2026 — Early Opportunities Worth Farming | 3alamiy Web3",
  description:
    "25 high-potential crypto airdrop opportunities for 2026 — testnets, points programs, waitlists, and confirmed drops. From a16z-backed Layer 1s to DeFi protocols flying under the radar.",
  alternates: { canonical: "https://www.3alamiyweb3.com/learn/top-25-airdrop-picks-2026" },
  openGraph: {
    title: "Top 25 Airdrop Picks for 2026 — Early Opportunities Worth Farming",
    description: "25 high-potential crypto airdrop opportunities for 2026 — testnets, points programs, waitlists, and confirmed drops.",
    url: "https://www.3alamiyweb3.com/learn/top-25-airdrop-picks-2026",
    siteName: "3alamiy Web3",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top 25 Airdrop Picks for 2026 — Early Opportunities Worth Farming",
    description: "25 high-potential crypto airdrop opportunities for 2026.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Top 25 Airdrop Picks for 2026 — Early Opportunities Worth Farming",
  description: "25 high-potential crypto airdrop opportunities for 2026 — testnets, points programs, waitlists, and confirmed drops.",
  author: { "@type": "Organization", name: "3alamiy Web3" },
  publisher: { "@type": "Organization", name: "3alamiy Web3", url: "https://www.3alamiyweb3.com" },
  datePublished: "2026-07-01",
  dateModified: "2026-07-01",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.3alamiyweb3.com/learn/top-25-airdrop-picks-2026" },
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2"] },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What are the top crypto airdrop picks for 2026?", acceptedAnswer: { "@type": "Answer", text: "The top 25 airdrop picks for 2026 include high-potential opportunities across L1s, DeFi, DePIN, and AI: Monad (10,000 TPS EVM, $225M raised), MegaETH (100,000 TPS, $20M raised), Hyperliquid Season 2 (active now, $10K+ Season 1 average), Polymarket POLY (confirmed drop), and 21 more. Full list at 3alamiyweb3.com/learn/top-25-airdrop-picks-2026." } },
    { "@type": "Question", name: "Which crypto airdrops have the highest rewards in 2026?", acceptedAnswer: { "@type": "Answer", text: "The highest-reward airdrop categories in 2026 are: (1) Major L1 testnets — Monad, MegaETH ($500–$5,000+ estimated), (2) Hyperliquid Season 2 ($1,000–$10,000+ estimated), (3) Confirmed DeFi drops like Polymarket POLY ($200–$2,000). Early testnet farmers consistently earn the most." } },
    { "@type": "Question", name: "Which crypto airdrops are confirmed for 2026?", acceptedAnswer: { "@type": 'Answer', text: "Confirmed airdrops in 2026 include: Polymarket POLY token (snapshot expected before year-end), ACI Testnet (30M tokens confirmed, June 30 deadline), Aro Network Season 2 (ARO rewards confirmed). Many others have active points programs that strongly imply future token distributions." } },
    { "@type": "Question", name: "How early should I start farming airdrops?", acceptedAnswer: { "@type": "Answer", text: "The earlier the better. Most retroactive airdrops reward wallets with activity starting months before the snapshot. For testnets like Monad and MegaETH, farming from day one of testnet launch gives the best eligibility position. Social and waitlist airdrops can be done any time before the deadline." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.3alamiyweb3.com" },
    { "@type": "ListItem", position: 2, name: "Learn", item: "https://www.3alamiyweb3.com/learn" },
    { "@type": "ListItem", position: 3, name: "Top 25 Airdrop Picks 2026", item: "https://www.3alamiyweb3.com/learn/top-25-airdrop-picks-2026" },
  ],
};

const categoryColors: Record<string, { color: string; bg: string; border: string }> = {
  "Layer 1":      { color: "#7CF5C0", bg: "rgba(124,245,192,0.08)", border: "rgba(124,245,192,0.18)" },
  "DeFi":         { color: "#c084fc", bg: "rgba(192,132,252,0.08)", border: "rgba(192,132,252,0.18)" },
  "Perp DEX":     { color: "#60a5fa", bg: "rgba(96,165,250,0.08)",  border: "rgba(96,165,250,0.18)" },
  "RWA":          { color: "#f59e0b", bg: "rgba(245,158,11,0.08)",  border: "rgba(245,158,11,0.18)" },
  "AI":           { color: "#818cf8", bg: "rgba(129,140,248,0.08)", border: "rgba(129,140,248,0.18)" },
  "Gaming":       { color: "#f87171", bg: "rgba(248,113,113,0.08)", border: "rgba(248,113,113,0.18)" },
  "Privacy":      { color: "#06b6d4", bg: "rgba(6,182,212,0.08)",   border: "rgba(6,182,212,0.18)" },
  "Infrastructure":{ color: "#818cf8", bg: "rgba(129,140,248,0.08)", border: "rgba(129,140,248,0.18)" },
  "SocialFi":     { color: "#60a5fa", bg: "rgba(96,165,250,0.08)",  border: "rgba(96,165,250,0.18)" },
  "Solana":       { color: "#9945FF", bg: "rgba(153,69,255,0.08)",  border: "rgba(153,69,255,0.18)" },
};

const statusColor: Record<string, { color: string; bg: string }> = {
  "Testnet Live":    { color: "#7CF5C0", bg: "rgba(124,245,192,0.1)" },
  "Points Live":     { color: "#7CF5C0", bg: "rgba(124,245,192,0.1)" },
  "Waitlist Open":   { color: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
  "Confirmed Drop":  { color: "#f87171", bg: "rgba(248,113,113,0.1)" },
  "Mainnet Live":    { color: "#7CF5C0", bg: "rgba(124,245,192,0.1)" },
};

const projects = [
  {
    n: 1, name: "Push Chain", handle: "@PushChain", category: "Layer 1", status: "Points Live",
    raise: "$11.9M", allocation: "30% community",
    desc: "Universal Layer 1 solving blockchain fragmentation and cross-chain communication. Rewards program live with testnet activity, liquidity, swaps and daily engagement.",
    how: "Complete testnet tasks, provide liquidity, swap tokens, daily engagement on push.org",
    link: "https://push.org", backers: "Public raise",
  },
  {
    n: 2, name: "Pod Network", handle: "@poddotnetwork", category: "Layer 1", status: "Testnet Live",
    raise: "$10M", allocation: "TBA",
    desc: "MEV-free Layer 1 for global financial markets — spot trading, perpetuals, equities, commodities. Backed by a16z CSX, 1kx, and Flashbots.",
    how: "Trade on testnet at test.pod.network, build Discord roles, daily trading volume",
    link: "https://pod.network", backers: "a16z, 1kx, Flashbots",
  },
  {
    n: 3, name: "Bulk", handle: "@bulktrade", category: "Perp DEX", status: "Points Live",
    raise: "$8M", allocation: "30% community",
    desc: "Fully on-chain perp DEX on Solana backed by Toly. Season 1 live with pre-deposits open for early users.",
    how: "Pre-deposit at early.bulk.trade, trade during Season 1, accumulate points",
    link: "https://early.bulk.trade", backers: "Toly (Solana co-founder)",
  },
  {
    n: 4, name: "Catena", handle: "@catena_labs", category: "AI", status: "Waitlist Open",
    raise: "$48M", allocation: "TBA",
    desc: "Banking and financial infrastructure for AI agents. Founded by a Circle co-founder, backed by a16z, Coinbase, and Circle ecosystem.",
    how: "Join waitlist at app.catena.com/waitlist, stay active in community",
    link: "https://app.catena.com/waitlist", backers: "a16z, Coinbase, Circle",
  },
  {
    n: 5, name: "Popdex", handle: "@popdex", category: "Perp DEX", status: "Waitlist Open",
    raise: "$30M", allocation: "TBA",
    desc: "Trader-centric perp DEX focused on capital efficiency and UX. Raised $30M from Foresight Ventures.",
    how: "Apply for early access at popdex.xyz",
    link: "https://popdex.xyz", backers: "Foresight Ventures",
  },
  {
    n: 6, name: "Percolator", handle: "@percolatortrade", category: "Solana", status: "Waitlist Open",
    raise: "Stealth", allocation: "TBA",
    desc: "Upcoming perp trading platform on Solana. Toly publicly encouraged users to join the waitlist — rare and meaningful signal.",
    how: "Join waitlist at percolator.trade",
    link: "https://percolator.trade", backers: "Toly endorsed",
  },
  {
    n: 7, name: "JTX", handle: "@jtx_trade", category: "Solana", status: "Waitlist Open",
    raise: "TBA", allocation: "TBA",
    desc: "New trading dapp connected to the Jito ecosystem on Solana. Usernames claimable before official launch.",
    how: "Claim username early at jtx.trade, register for early access",
    link: "https://jtx.trade", backers: "Jito ecosystem",
  },
  {
    n: 8, name: "Hypernova", handle: "@hypernovax", category: "DeFi", status: "Waitlist Open",
    raise: "$3M", allocation: "TBA",
    desc: "On-chain prop trading protocol on Arbitrum backed by Lemniscap. Exploring decentralized proprietary trading.",
    how: "Join waitlist at hypernova.xyz",
    link: "https://hypernova.xyz", backers: "Lemniscap",
  },
  {
    n: 9, name: "Nof1", handle: "@the_nof1", category: "AI", status: "Waitlist Open",
    raise: "$15M", allocation: "TBA",
    desc: "AI infrastructure project combining AI with community-driven growth. Backed by Sui ecosystem participants.",
    how: "Join waitlist at nof1.ai",
    link: "https://nof1.ai", backers: "Sui ecosystem",
  },
  {
    n: 10, name: "Canborsa", handle: "@Canborsa_DEX", category: "RWA", status: "Points Live",
    raise: "TBA", allocation: "TBA",
    desc: "First RWA perpetual DEX on Canton Network. Points program live — low competition, still early.",
    how: "Complete quests at canborsa.com, earn points through participation",
    link: "https://canborsa.com", backers: "Canton Network",
  },
  {
    n: 11, name: "Xeffy", handle: "@Xeffy_io", category: "SocialFi", status: "Points Live",
    raise: "$20M", allocation: "23% community",
    desc: "Social rewards platform on Telegram. Claims $20M funding and 23% community allocation. Daily tasks and social engagement.",
    how: "Join Telegram bot, complete daily social tasks, refer friends",
    link: "https://xeffy.io", backers: "Private investors",
  },
  {
    n: 12, name: "Zoth", handle: "@zoth_io", category: "RWA", status: "Points Live",
    raise: "$21.5M", allocation: "TBA",
    desc: "RWA infrastructure connecting institutional assets with DeFi liquidity on Base. ZOCTA points program live — deposit USDC/USDT into Zopal Vault.",
    how: "Deposit USDC/USDT into Zopal Vault at app.zoth.io, earn yield + points",
    link: "https://app.zoth.io", backers: "Blockchain Founders Fund, Ripple ecosystem",
  },
  {
    n: 13, name: "Nodiens", handle: "@nodiens", category: "AI", status: "Points Live",
    raise: "TBA", allocation: "TBA",
    desc: "AI platform distributing Intelligence Cards to early community members. Social tasks and pre-registration open.",
    how: "Pre-register at access.nodiens.com, complete social tasks, claim Intelligence Card",
    link: "https://access.nodiens.com", backers: "TBA",
  },
  {
    n: 14, name: "Kiedex", handle: "@kiedexapp", category: "Perp DEX", status: "Confirmed Drop",
    raise: "$3.5M", allocation: "Confirmed",
    desc: "Decentralized trading platform with active testnet and confirmed airdrop. New missions added regularly.",
    how: "Complete daily testnet activity at kiedex.app, new missions every week",
    link: "https://kiedex.app", backers: "Private investors",
  },
  {
    n: 15, name: "Concrete", handle: "@ConcreteXYZ", category: "DeFi", status: "Confirmed Drop",
    raise: "$17M", allocation: "Confirmed",
    desc: "Onchain capital markets protocol with confirmed airdrop. Points earned through tasks, content creation, and liquidity provision.",
    how: "Complete tasks at points.concrete.xyz, create content, provide liquidity",
    link: "https://points.concrete.xyz", backers: "Leading crypto investors",
  },
  {
    n: 16, name: "Zodl", handle: "@zodl_co", category: "Privacy", status: "Points Live",
    raise: "$25M", allocation: "TBA",
    desc: "Privacy-focused wallet for the Zcash ecosystem. Backed by Paradigm, a16z, and Coinbase Ventures. Still flying under the radar.",
    how: "Create wallet at zodl.com, fund with ZEC, generate activity through swaps",
    link: "https://zodl.com", backers: "Paradigm, a16z, Coinbase Ventures",
  },
  {
    n: 17, name: "xStocks", handle: "@xStocksFi", category: "RWA", status: "Points Live",
    raise: "TBA", allocation: "OG Role",
    desc: "100+ tokenized US stocks and ETFs on-chain, 1:1 backed by real shares. Integrated with Kraken across Solana, Ethereum, TON. $25B+ trading volume.",
    how: "Secure OG role in Discord, trade tokenized stocks",
    link: "https://xstocks.com", backers: "Kraken integration",
  },
  {
    n: 18, name: "Nemesis", handle: "@Nemesisdottrade", category: "Perp DEX", status: "Testnet Live",
    raise: "$20M", allocation: "TBA",
    desc: "Next-gen perp DEX backed by a16z Crypto, Initialized, District, and LYVC. Free testnet live for early participants.",
    how: "Swap, trade, provide liquidity at nemesis.trade testnet",
    link: "https://nemesis.trade", backers: "a16z, Initialized, LYVC",
  },
  {
    n: 19, name: "Simple Chain", handle: "@SimpleChain_RWA", category: "RWA", status: "Testnet Live",
    raise: "$15M", allocation: "TBA",
    desc: "RWA-focused blockchain with active testnet. Multiple ways to build activity — faucet, staking, domains, badges.",
    how: "Claim faucet, stake, register domain, complete badges at simplechain.com",
    link: "https://simplechain.com", backers: "Private investors",
  },
  {
    n: 20, name: "Kaio", handle: "@KAIO_xyz", category: "Gaming", status: "Confirmed Drop",
    raise: "$11M+", allocation: "37.5% community",
    desc: "Web3 gaming and infrastructure with confirmed airdrop and one of the largest community allocations available. Galxe quests live.",
    how: "Register waitlist + complete Galxe quests at kaio.xyz",
    link: "https://kaio.xyz", backers: "Private investors",
  },
  {
    n: 21, name: "Forte Protocol", handle: "@ForteProtocol", category: "Gaming", status: "Points Live",
    raise: "$910M+", allocation: "XP rewards",
    desc: "Blockchain gaming infrastructure with $910M+ in funding. Earn XP through early access, quests, and community engagement.",
    how: "Complete early access activities and quests at fairground.fi",
    link: "https://fairground.fi", backers: "Massive ecosystem funding",
  },
  {
    n: 22, name: "Seismic", handle: "@SeismicSys", category: "Privacy", status: "Testnet Live",
    raise: "$17M", allocation: "TBA",
    desc: "Privacy-focused blockchain with active developer testnet. Claim faucet tokens and deploy smart contracts for activity.",
    how: "Claim faucet, deploy contracts at seismic.systems",
    link: "https://seismic.systems", backers: "Leading crypto VCs",
  },
  {
    n: 23, name: "GenLayer", handle: "@GenLayer", category: "AI", status: "Testnet Live",
    raise: "$7.5M", allocation: "Points",
    desc: "AI-powered blockchain for intelligent smart contracts with incentivized testnet. Builder tasks, faucet, contract deployments.",
    how: "Complete builder tasks, deploy contracts at genlayer.foundation",
    link: "https://genlayer.foundation", backers: "Crypto VCs",
  },
  {
    n: 24, name: "Doma Protocol", handle: "@domaprotocol", category: "Infrastructure", status: "Mainnet Live",
    raise: "$30M+", allocation: "Points",
    desc: "DomainFi infrastructure backed by Paradigm and Coinbase. Mainnet season live — points for swaps, liquidity, domain trading.",
    how: "Swap, provide liquidity, trade domains at app.doma.xyz",
    link: "https://app.doma.xyz", backers: "Paradigm, Coinbase",
  },
  {
    n: 25, name: "LiteVM", handle: "@LitecoinVM", category: "Infrastructure", status: "Testnet Live",
    raise: "TBA", allocation: "TBA",
    desc: "First trustless EVM rollup for Litecoin. Bringing DeFi and smart contracts to LTC. Free testnet — bridge, faucet, dapp interactions.",
    how: "Bridge LTC, claim faucet, interact with dapps at testnet.litvm.com",
    link: "https://testnet.litvm.com", backers: "Litecoin ecosystem",
  },
];

const topByCategory = [
  { cat: "Best Funded", picks: [4, 21, 5, 16, 24], note: "$17M–$910M raised" },
  { cat: "Lowest Competition", picks: [10, 13, 25, 7, 8], note: "Under the radar" },
  { cat: "Confirmed Drops", picks: [14, 15, 20], note: "Airdrop officially confirmed" },
  { cat: "Best for Beginners", picks: [11, 13, 17, 7, 9], note: "No investment, easy tasks" },
];

export default function Top25AirdropPicks2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <style>{`
        .t25 * { box-sizing: border-box; }
        .t25 { background: #060A12; min-height: 100vh; color: #fff; font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif; }
        .t25-wrap { max-width: 860px; margin: 0 auto; padding: 48px 20px 80px; }
        .t25-bc { font-size: 13px; color: rgba(255,255,255,0.25); margin-bottom: 32px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .t25-bc a { color: rgba(255,255,255,0.25); text-decoration: none; }
        .t25-badge { font-size: 11px; font-weight: 600; letter-spacing: 0.08em; padding: 3px 10px; border-radius: 99px; text-transform: uppercase; margin-right: 8px; }
        .t25-h1 { font-size: clamp(24px, 5vw, 38px); font-weight: 700; line-height: 1.2; margin: 16px 0; color: #fff; }
        .t25-h1 span { color: #7CF5C0; }
        .t25-sub { font-size: 16px; color: rgba(255,255,255,0.45); line-height: 1.7; margin-bottom: 12px; max-width: 620px; }
        .t25-meta { font-size: 13px; color: rgba(255,255,255,0.25); margin-bottom: 16px; }
        .t25-meta span { color: rgba(255,255,255,0.45); }
        .t25-byline { display: flex; align-items: center; gap: 10px; margin-bottom: 40px; padding: 12px 16px; background: rgba(124,245,192,0.04); border: 1px solid rgba(124,245,192,0.1); border-radius: 10px; }
        .t25-byline-avatar { width: 32px; height: 32px; border-radius: 50%; background: rgba(124,245,192,0.15); border: 1px solid rgba(124,245,192,0.25); display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; }
        .t25-byline-name { font-size: 13px; font-weight: 700; color: #fff; }
        .t25-byline-sub { font-size: 11px; color: rgba(255,255,255,0.35); }
        .t25-byline-sub a { color: #7CF5C0; text-decoration: none; }

        /* Stats */
        .t25-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; overflow: hidden; margin-bottom: 48px; }
        .t25-stat { background: #0D1221; padding: 16px 12px; text-align: center; }
        .t25-stat-val { font-size: 22px; font-weight: 700; color: #7CF5C0; margin-bottom: 3px; }
        .t25-stat-lbl { font-size: 10px; color: rgba(255,255,255,0.25); text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600; }

        /* Quick picks */
        .t25-section { margin-bottom: 52px; }
        .t25-h2 { font-size: 20px; font-weight: 700; color: #fff; margin-bottom: 16px; }
        .t25-picks-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
        .t25-pick-card { background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 14px 16px; }
        .t25-pick-title { font-size: 12px; font-weight: 700; color: #7CF5C0; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px; }
        .t25-pick-note { font-size: 11px; color: rgba(255,255,255,0.25); margin-bottom: 8px; }
        .t25-pick-list { display: flex; flex-wrap: wrap; gap: 6px; }
        .t25-pick-tag { font-size: 11px; font-weight: 600; color: rgba(255,255,255,0.6); background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); padding: 3px 8px; border-radius: 99px; }

        /* Project cards */
        .t25-projects { display: flex; flex-direction: column; gap: 12px; }
        .t25-card { background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; padding: 18px 20px; transition: border-color 0.15s; }
        .t25-card:hover { border-color: rgba(255,255,255,0.12); }
        .t25-card-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 10px; flex-wrap: wrap; }
        .t25-card-left { display: flex; align-items: center; gap: 10px; }
        .t25-card-num { width: 28px; height: 28px; border-radius: 8px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.3); flex-shrink: 0; }
        .t25-card-name { font-size: 15px; font-weight: 700; color: #fff; margin-bottom: 2px; }
        .t25-card-handle { font-size: 11px; color: rgba(255,255,255,0.25); }
        .t25-card-tags { display: flex; gap: 6px; flex-wrap: wrap; }
        .t25-card-desc { font-size: 13px; color: rgba(255,255,255,0.45); line-height: 1.7; margin-bottom: 10px; }
        .t25-card-how { font-size: 12px; color: rgba(255,255,255,0.35); background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px; padding: 8px 12px; margin-bottom: 10px; line-height: 1.6; }
        .t25-card-how strong { color: "#7CF5C0"; }
        .t25-card-footer { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; }
        .t25-card-raise { font-size: 11px; color: rgba(255,255,255,0.25); }
        .t25-card-raise strong { color: rgba(255,255,255,0.5); }
        .t25-card-link { font-size: 12px; font-weight: 600; color: #7CF5C0; text-decoration: none; }

        /* Related */
        .t25-related { display: flex; flex-direction: column; gap: 8px; }
        .t25-related-link { display: flex; align-items: center; justify-content: space-between; background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; padding: 13px 16px; text-decoration: none; color: rgba(255,255,255,0.6); font-size: 13px; font-weight: 500; }
        .t25-related-link span:last-child { color: #7CF5C0; font-size: 12px; }

        /* CTA */
        .t25-cta { background: rgba(124,245,192,0.06); border: 1px solid rgba(124,245,192,0.18); border-radius: 16px; padding: 40px 28px; text-align: center; }
        .t25-cta h2 { font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 10px; }
        .t25-cta p { font-size: 14px; color: rgba(255,255,255,0.45); line-height: 1.7; max-width: 420px; margin: 0 auto 24px; }
        .t25-cta-btn { display: inline-flex; align-items: center; gap: 6px; background: #7CF5C0; color: #060A12; font-weight: 700; font-size: 14px; padding: 12px 28px; border-radius: 99px; text-decoration: none; }
        .t25-note { font-size: 11px; color: rgba(255,255,255,0.18); margin-top: 16px; }

        @media (max-width: 600px) {
          .t25-wrap { padding: 32px 16px 64px; }
          .t25-stats { grid-template-columns: repeat(2, 1fr); }
          .t25-picks-grid { grid-template-columns: 1fr; }
          .t25-cta { padding: 28px 16px; }
        }
      `}</style>

      <main className="t25">
        <div className="t25-wrap">

          {/* Breadcrumb */}
          <nav className="t25-bc">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/learn">Learn</Link><span>/</span>
            <span style={{ color: "rgba(255,255,255,0.45)" }}>Top 25 Airdrop Picks 2026</span>
          </nav>

          {/* Header */}
          <div>
            <span className="t25-badge" style={{ background: "rgba(124,245,192,0.1)", color: "#7CF5C0", border: "1px solid rgba(124,245,192,0.18)" }}>Strategy</span>
            <span className="t25-badge" style={{ background: "rgba(248,113,113,0.1)", color: "#f87171", border: "1px solid rgba(248,113,113,0.2)" }}>June 2026</span>
            <h1 className="t25-h1">Top 25 Airdrop Picks for 2026 <span>🪂</span></h1>
            <p className="t25-sub">25 high-potential early opportunities worth farming right now — from a16z-backed Layer 1s to under-the-radar DeFi protocols. Testnets, points programs, confirmed drops, and waitlists.</p>
            <p className="t25-meta">By <span>3alamiy Team</span> · June 2, 2026 · 10 min read</p>
            <div className="t25-byline">
              <div className="t25-byline-avatar">🪂</div>
              <div>
                <div className="t25-byline-name">3alamiy Team</div>
                <div className="t25-byline-sub">Web3 Airdrop Research · <a href="https://www.3alamiyweb3.com">3alamiyweb3.com</a></div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="t25-stats">
            {[
              { val: "25", lbl: "Projects" },
              { val: "3", lbl: "Confirmed Drops" },
              { val: "$1.2B+", lbl: "Total Raised" },
              { val: "June 2026", lbl: "Updated" },
            ].map((s) => (
              <div key={s.lbl} className="t25-stat">
                <div className="t25-stat-val">{s.val}</div>
                <div className="t25-stat-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>

          {/* Quick picks */}
          <section className="t25-section">
            <h2 className="t25-h2">Quick Picks by Category</h2>
            <div className="t25-picks-grid">
              {topByCategory.map((cat) => (
                <div key={cat.cat} className="t25-pick-card">
                  <div className="t25-pick-title">{cat.cat}</div>
                  <div className="t25-pick-note">{cat.note}</div>
                  <div className="t25-pick-list">
                    {cat.picks.map((n) => {
                      const p = projects.find((x) => x.n === n);
                      return p ? <span key={n} className="t25-pick-tag">#{n} {p.name}</span> : null;
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* All 25 Projects */}
          <section className="t25-section">
            <h2 className="t25-h2">All 25 Projects — Full Breakdown</h2>
            <div className="t25-projects">
              {projects.map((p) => {
                const cat = categoryColors[p.category] || { color: "#7CF5C0", bg: "rgba(124,245,192,0.08)", border: "rgba(124,245,192,0.18)" };
                const st = statusColor[p.status] || { color: "#7CF5C0", bg: "rgba(124,245,192,0.1)" };
                return (
                  <div key={p.n} className="t25-card">
                    <div className="t25-card-top">
                      <div className="t25-card-left">
                        <div className="t25-card-num">#{p.n}</div>
                        <div>
                          <div className="t25-card-name">{p.name}</div>
                          <div className="t25-card-handle">{p.handle}</div>
                        </div>
                      </div>
                      <div className="t25-card-tags">
                        <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 99, color: cat.color, background: cat.bg, border: `1px solid ${cat.border}` }}>{p.category}</span>
                        <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 99, color: st.color, background: st.bg, border: `1px solid ${st.color}30` }}>{p.status}</span>
                        {p.raise !== "TBA" && <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 99, color: "rgba(255,255,255,0.35)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>{p.raise}</span>}
                      </div>
                    </div>
                    <p className="t25-card-desc">{p.desc}</p>
                    <div className="t25-card-how"><strong style={{ color: "#7CF5C0" }}>How to farm: </strong>{p.how}</div>
                    <div className="t25-card-footer">
                      <div className="t25-card-raise">
                        {p.backers !== "TBA" && <><strong>Backed by: </strong>{p.backers}</>}
                        {p.allocation !== "TBA" && <> · <strong>Allocation: </strong>{p.allocation}</>}
                      </div>
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="t25-card-link">Visit →</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Related */}
          <section className="t25-section">
            <h2 className="t25-h2" style={{ marginBottom: 16 }}>
          <div className="aff-box">
            <p className="aff-label">🔗 Fund your wallet to start</p>
            <div className="aff-links">
              <a href="https://www.gate.com/share/xwvca1ha" target="_blank" rel="noopener noreferrer sponsored" className="aff-btn aff-gate">Gate.io — Buy crypto →</a>
              <a href="https://www.binance.com/referral/earn-together/refer2earn-usdc/claim?hl=en&ref=GRO_28502_0JWES&utm_source=referral_entrance" target="_blank" rel="noopener noreferrer sponsored" className="aff-btn aff-binance">Binance →</a>
            </div>
            <p className="aff-note">Low fees · Supports ETH, USDC, all major chains · Instant deposits</p>
          </div>

          Related Guides</h2>
            <div className="t25-related">
              {[
                { slug: "early-crypto-projects-2026", title: "Best Early Crypto Projects to Farm in 2026" },
                { slug: "crypto-airdrop-eligibility-requirements-2026", title: "Crypto Airdrop Eligibility Requirements 2026" },
                { slug: "how-to-find-airdrops-before-everyone-else", title: "How to Find Airdrops Before Everyone Else" },
                { slug: "best-crypto-airdrop-websites-2026", title: "Best Crypto Airdrop Websites 2026" },
                { slug: "how-to-avoid-crypto-airdrop-scams-2026", title: "How to Avoid Crypto Airdrop Scams 2026" },
              ].map((a) => (
                <Link key={a.slug} href={`/learn/${a.slug}`} className="t25-related-link">
                  <span>{a.title}</span><span>→</span>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="t25-cta">
            <h2>Track All 25 Airdrops Daily</h2>
            <p>3alamiy Web3 tracks 110+ active airdrops with full step-by-step guides. Add these projects to your watchlist and never miss an update.</p>
            <Link href="/airdrops" className="t25-cta-btn">Browse All Airdrops →</Link>
            <p className="t25-note">Last updated: June 2, 2026 · Reviewed weekly</p>
          </div>

        </div>
      </main>
    </>
  );
}
