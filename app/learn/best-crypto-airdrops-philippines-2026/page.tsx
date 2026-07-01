import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Crypto Airdrops for Filipinos 2026 — Free Guides | 3alamiy Web3",
  description:
    "The best crypto airdrops accessible from the Philippines in 2026. Free, no investment required. Step-by-step guides for Filipino users — no KYC options, works with GCash and local exchanges.",
  alternates: { canonical: "https://www.3alamiyweb3.com/learn/best-crypto-airdrops-philippines-2026" },
  openGraph: {
    title: "Best Crypto Airdrops for Filipinos 2026 — Free Guides",
    description: "The best crypto airdrops accessible from the Philippines in 2026. Free, no investment required.",
    url: "https://www.3alamiyweb3.com/learn/best-crypto-airdrops-philippines-2026",
    siteName: "3alamiy Web3",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Crypto Airdrops for Filipinos 2026 — Free Guides",
    description: "The best free crypto airdrops accessible from the Philippines in 2026. No investment required.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Crypto Airdrops for Filipinos 2026 — Free Guides",
  description: "The best crypto airdrops accessible from the Philippines in 2026. Free, no investment required.",
  author: { "@type": "Organization", name: "3alamiy Web3" },
  publisher: { "@type": "Organization", name: "3alamiy Web3", url: "https://www.3alamiyweb3.com" },
  datePublished: "2026-07-01",
  dateModified: "2026-07-01",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.3alamiyweb3.com/learn/best-crypto-airdrops-philippines-2026" },
  areaServed: { "@type": "Country", name: "Philippines", sameAs: "https://en.wikipedia.org/wiki/Philippines" },
  about: { "@type": "Thing", name: "Crypto Airdrops in Philippines 2026" },
};

const speakableJsonLd = {
  "@context": "https://schema.org", "@type": "WebPage",
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".ph-answer-box", ".ph-faq", ".ph-faqs"] },
  url: "https://www.3alamiyweb3.com/learn/best-crypto-airdrops-philippines-2026",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can Filipinos participate in crypto airdrops in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Filipinos can participate in virtually all crypto airdrops in 2026. The Philippines has a pro-crypto regulatory environment and most DeFi protocols, testnet airdrops, and social task airdrops are fully accessible without a VPN. You need only a self-custody wallet like MetaMask or Phantom. The Philippines consistently ranks in the top 3 for global crypto adoption.",
      },
    },
    {
      "@type": "Question",
      name: "Is crypto legal in the Philippines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Crypto is legal and regulated in the Philippines. The Bangko Sentral ng Pilipinas (BSP) has licensed crypto exchanges since 2017 and maintains one of Asia's most crypto-friendly regulatory environments. Virtual Asset Service Providers (VASPs) must be registered with the BSP. Using self-custody wallets for DeFi airdrops falls outside exchange regulation entirely.",
      },
    },
    {
      "@type": "Question",
      name: "What wallet should Filipinos use for crypto airdrops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For EVM chains (Ethereum, Base, Arbitrum, Optimism): use MetaMask from metamask.io. For Solana: use Phantom from phantom.com. Both work in the Philippines with no restrictions. Never use your Coins.ph or PDAX exchange wallet — exchange wallets cannot receive airdrop tokens.",
      },
    },
    {
      "@type": "Question",
      name: "How can Filipinos buy ETH to fund airdrop farming?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Filipinos can buy ETH on Coins.ph, PDAX, or Binance using GCash, Maya (formerly PayMaya), or bank transfer in PHP. Buy the minimum needed (equivalent to $5-15 USD worth of ETH), then withdraw to your MetaMask wallet. Many airdrops are 100% free — testnet and social task airdrops require no funds whatsoever.",
      },
    },
    {
      "@type": "Question",
      name: "Do Filipinos pay tax on crypto airdrops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Bureau of Internal Revenue (BIR) treats crypto as property. Airdrop tokens received may be considered ordinary income at fair market value on the date of receipt, and capital gains tax applies on subsequent sale. BIR Revenue Memorandum Circular 60-2020 established that crypto transactions are taxable. Consult a CPA for personal tax advice.",
      },
    },
    {
      "@type": "Question",
      name: "Why is the Philippines one of the best countries for crypto airdrops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Philippines ranks in the top 3 globally for crypto adoption and has one of the highest DeFi participation rates in Southeast Asia. Filipino users pioneered play-to-earn NFT gaming (Axie Infinity originated here), which means the community is deeply familiar with on-chain activity — a major advantage for airdrop farming. Pro-crypto regulation, widespread mobile internet, and GCash/Maya payment infrastructure make the Philippines uniquely well-positioned.",
      },
    },
  ],
};

const airdrops = [
  {
    name: "Hyperliquid (HYPE)",
    slug: "hyperliquid-guide",
    category: "DEX / Perps",
    cost: "Free",
    difficulty: "Easy",
    time: "10 min/day",
    raise: "No VC — community funded",
    why: "Trade perpetuals on Hyperliquid. Season 2 points are live. Season 1 paid average users $10,000+. No KYC. Fully accessible from the Philippines. One of the highest-upside free airdrops.",
    ph: "Fully accessible from the Philippines",
    color: "#7CF5C0",
  },
  {
    name: "MetaMask Airdrop",
    slug: "metamask-airdrop-guide-2026",
    category: "Wallet",
    cost: "Free",
    difficulty: "Easy",
    time: "5 min/day",
    raise: "$686M raised (ConsenSys)",
    why: "MetaMask has never launched a token. The Philippines has millions of MetaMask users from the P2E gaming era — all potentially eligible for a future MASK token. Use MetaMask Portfolio and bridge daily.",
    ph: "Fully accessible from the Philippines",
    color: "#f6851b",
  },
  {
    name: "Phantom Airdrop (Solana)",
    slug: "phantom-airdrop-guide-2026",
    category: "Wallet",
    cost: "Free",
    difficulty: "Easy",
    time: "5 min/day",
    raise: "$109M raised",
    why: "Phantom Wallet — no token yet. Filipino Solana users are active. Swap on Jupiter daily, use Phantom bridge, earn points toward a potential airdrop. $109M raised from Paradigm and a16z.",
    ph: "Fully accessible from the Philippines",
    color: "#ab9ff2",
  },
  {
    name: "Soneium (Sony Ethereum L2)",
    slug: "soneium-airdrop-guide-2026",
    category: "Layer 2",
    cost: "Free / Low",
    difficulty: "Medium",
    time: "30 min/week",
    raise: "$0 (Sony-backed)",
    why: "Sony Group's Ethereum L2 — no token yet. Sony has a massive presence in the Philippines. Bridge ETH, use DeFi on Soneium weekly. High brand recognition makes this one to watch.",
    ph: "Fully accessible from the Philippines",
    color: "#00b4ff",
  },
  {
    name: "Ink by Kraken (L2)",
    slug: "ink-by-kraken-airdrop-guide-2026",
    category: "Layer 2",
    cost: "Low",
    difficulty: "Medium",
    time: "45 min/week",
    raise: "Kraken-backed",
    why: "Kraken's Ethereum L2 — no token yet. Bridge ETH, trade on Velodrome, supply on Aave. Lower user count than Base or Arbitrum — strong upside for early farmers.",
    ph: "Fully accessible from the Philippines",
    color: "#8b5cf6",
  },
  {
    name: "Galxe (G)",
    slug: "galxe-airdrop-guide-2026",
    category: "Social Tasks",
    cost: "Free",
    difficulty: "Easy",
    time: "10 min/day",
    raise: "$36M raised",
    why: "Complete on-chain quests for hundreds of projects at once. Filipino users are prolific Galxe quest completers — no investment, just time. Already has a live G token for immediate earnings.",
    ph: "Fully accessible from the Philippines",
    color: "#7CF5C0",
  },
  {
    name: "Polymarket Airdrop",
    slug: "polymarket-airdrop-guide-2026",
    category: "Prediction Market",
    cost: "Low",
    difficulty: "Easy",
    time: "15 min/day",
    raise: "$74M raised",
    why: "World's largest prediction market. POLY token launched April 2025 — 600M tokens for active traders. Fund with PHP via Coins.ph or Maya. Philippine sports and election prediction markets are popular on Polymarket.",
    ph: "Fully accessible from the Philippines",
    color: "#3b82f6",
  },
  {
    name: "Story Protocol Airdrop",
    slug: "story-protocol-airdrop-guide-2026",
    category: "IP Layer 1",
    cost: "Free",
    difficulty: "Easy",
    time: "20 min",
    raise: "$140M raised (a16z)",
    why: "IP monetization blockchain — $140M raised. Filipino content creators (music, gaming, art) are a natural fit. Register IP assets, participate in testnet, complete creator quests for airdrop eligibility.",
    ph: "Fully accessible from the Philippines",
    color: "#f59e0b",
  },
];

const walletSteps = [
  { n: 1, title: "Download MetaMask", desc: "Go to metamask.io — download the browser extension (Chrome/Brave/Firefox) or mobile app. Available in the Philippines with no restrictions. Brave browser is popular in the Philippines and works seamlessly with MetaMask." },
  { n: 2, title: "Create a dedicated airdrop wallet", desc: "Create a new wallet for airdrop farming only. Do NOT use your Axie Infinity, gaming, or main DeFi wallet. Write your 12-word seed phrase on paper — never digitally. Store it safely." },
  { n: 3, title: "Get ETH via Coins.ph or PDAX", desc: "Buy ETH on Coins.ph or PDAX using GCash, Maya, or bank transfer. Buy 300–700 PHP worth of ETH, then withdraw to your MetaMask wallet. This covers gas fees for most DeFi airdrops." },
  { n: 4, title: "Download Phantom for Solana", desc: "For Solana airdrops, download Phantom from phantom.com. The Filipino Solana community is large — Phantom works in the Philippines with no restrictions. Buy SOL on Coins.ph and withdraw to Phantom." },
  { n: 5, title: "Start with free airdrops", desc: "The Philippines has thousands of experienced P2E gamers who already know on-chain wallets. Apply that skill to free testnet and social task airdrops — same concept, often bigger payouts." },
];

export default function PhilippinesAirdrops2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />

      <style>{`
        .ph * { box-sizing: border-box; }
        .ph { background: #060A12; min-height: 100vh; color: #fff; font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif; }
        .ph-wrap { max-width: 800px; margin: 0 auto; padding: 48px 20px 80px; }
        .ph-bc { font-size: 13px; color: rgba(255,255,255,0.25); margin-bottom: 32px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .ph-bc a { color: rgba(255,255,255,0.25); text-decoration: none; }
        .ph-badge { font-size: 11px; font-weight: 600; letter-spacing: 0.08em; padding: 3px 10px; border-radius: 99px; text-transform: uppercase; margin-right: 8px; }
        .ph-h1 { font-size: clamp(24px, 5vw, 36px); font-weight: 700; line-height: 1.2; margin: 16px 0; color: #fff; }
        .ph-h1 span { color: #fcd34d; }
        .ph-sub { font-size: 16px; color: rgba(255,255,255,0.45); line-height: 1.7; margin-bottom: 12px; }
        .ph-meta { font-size: 13px; color: rgba(255,255,255,0.25); margin-bottom: 16px; }
        .ph-meta span { color: rgba(255,255,255,0.45); }
        .ph-byline { display: flex; align-items: center; gap: 10px; margin-bottom: 40px; padding: 12px 16px; background: rgba(252,211,77,0.04); border: 1px solid rgba(252,211,77,0.1); border-radius: 10px; }
        .ph-byline-avatar { width: 32px; height: 32px; border-radius: 50%; background: rgba(252,211,77,0.15); border: 1px solid rgba(252,211,77,0.25); display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; }
        .ph-byline-name { font-size: 13px; font-weight: 700; color: #fff; }
        .ph-byline-sub { font-size: 11px; color: rgba(255,255,255,0.35); }
        .ph-byline-sub a { color: #fcd34d; text-decoration: none; }

        .ph-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; overflow: hidden; margin-bottom: 48px; }
        .ph-stat { background: #0D1221; padding: 18px 16px; text-align: center; }
        .ph-stat-val { font-size: 22px; font-weight: 700; color: #fcd34d; margin-bottom: 4px; }
        .ph-stat-lbl { font-size: 11px; color: rgba(255,255,255,0.25); text-transform: uppercase; letter-spacing: 0.06em; font-weight: 600; }

        .ph-section { margin-bottom: 52px; }
        .ph-h2 { font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 12px; }
        .ph-p { font-size: 15px; color: rgba(255,255,255,0.45); line-height: 1.8; margin-bottom: 16px; }
        .ph-p strong { color: #fff; }

        .ph-cards { display: flex; flex-direction: column; gap: 12px; }
        .ph-card { background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; padding: 20px; text-decoration: none; color: inherit; display: block; transition: border-color 0.15s; }
        .ph-card:hover { border-color: rgba(252,211,77,0.2); }
        .ph-card-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 10px; flex-wrap: wrap; }
        .ph-card-name { font-size: 16px; font-weight: 700; color: #fff; margin-bottom: 4px; }
        .ph-card-tags { display: flex; gap: 6px; flex-wrap: wrap; }
        .ph-tag { font-size: 10px; font-weight: 600; padding: 2px 8px; border-radius: 99px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.04); }
        .ph-card-why { font-size: 13px; color: rgba(255,255,255,0.45); line-height: 1.7; margin-bottom: 10px; }
        .ph-card-footer { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; }
        .ph-flag { font-size: 11px; color: #fcd34d; font-weight: 600; }
        .ph-cta { font-size: 12px; font-weight: 700; color: #fcd34d; }

        .ph-steps { display: flex; flex-direction: column; gap: 10px; }
        .ph-step { background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 16px 18px; display: flex; gap: 14px; align-items: flex-start; }
        .ph-step-num { width: 28px; height: 28px; border-radius: 8px; background: rgba(252,211,77,0.1); border: 1px solid rgba(252,211,77,0.2); color: #fcd34d; font-size: 12px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .ph-step-title { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 4px; }
        .ph-step-desc { font-size: 13px; color: rgba(255,255,255,0.4); line-height: 1.65; }

        .ph-warning { background: rgba(248,113,113,0.05); border: 1px solid rgba(248,113,113,0.18); border-radius: 12px; padding: 16px 18px; margin-bottom: 20px; display: flex; gap: 12px; }
        .ph-warning-text { font-size: 13px; color: rgba(255,255,255,0.5); line-height: 1.7; }
        .ph-warning-text strong { color: #f87171; }

        .ph-faqs { display: flex; flex-direction: column; gap: 10px; }
        .ph-faq { background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 18px 20px; }
        .ph-faq h3 { font-weight: 600; color: #fff; font-size: 14px; margin-bottom: 8px; }
        .ph-faq p { color: rgba(255,255,255,0.45); font-size: 13px; margin: 0; line-height: 1.7; }

        .ph-related { display: flex; flex-direction: column; gap: 8px; }
        .ph-related-link { display: flex; align-items: center; justify-content: space-between; background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; padding: 13px 16px; text-decoration: none; color: rgba(255,255,255,0.6); font-size: 13px; font-weight: 500; }
        .ph-related-link span:last-child { color: #fcd34d; font-size: 12px; }

        .ph-cta-box { background: rgba(252,211,77,0.05); border: 1px solid rgba(252,211,77,0.15); border-radius: 16px; padding: 40px 28px; text-align: center; }
        .ph-cta-box h2 { font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 10px; }
        .ph-cta-box p { font-size: 14px; color: rgba(255,255,255,0.45); line-height: 1.7; max-width: 420px; margin: 0 auto 24px; }
        .ph-cta-btn { display: inline-flex; align-items: center; gap: 6px; background: #fcd34d; color: #060A12; font-weight: 700; font-size: 14px; padding: 12px 28px; border-radius: 99px; text-decoration: none; }
        
        .ph-answer-box{background:rgba(245,158,11,0.06);border:1px solid rgba(245,158,11,0.18);border-radius:14px;padding:20px 22px;margin-bottom:40px}
        .ph-answer-label{font-size:11px;font-weight:700;color:#f59e0b;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:10px}
        .ph-answer-box p{font-size:14px;color:rgba(255,255,255,0.7);line-height:1.75;margin:0}
        .ph-note { font-size: 11px; color: rgba(255,255,255,0.18); margin-top: 16px; }

        @media (max-width: 600px) {
          .ph-wrap { padding: 32px 16px 64px; }
          .ph-stats { grid-template-columns: repeat(3, 1fr); }
          .ph-stat-val { font-size: 18px; }
          .ph-cta-box { padding: 28px 16px; }
        }

        .ph-aff-box{background:rgba(243,186,47,0.06);border:1px solid rgba(243,186,47,0.18);border-radius:14px;padding:20px 22px;margin-bottom:32px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}
        .ph-aff-label{font-size:10px;font-weight:800;color:#f3ba2f;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:4px}
        .ph-aff-title{font-size:14px;font-weight:700;color:#fff;margin-bottom:2px}
        .ph-aff-sub{font-size:12px;color:rgba(255,255,255,0.4)}
        .ph-aff-btn{display:inline-flex;align-items:center;gap:6px;background:#f3ba2f;color:#000;font-weight:800;font-size:13px;padding:10px 20px;border-radius:99px;text-decoration:none;flex-shrink:0}

        .ph-card-dual-box{display:flex;gap:10px;margin-bottom:32px;flex-wrap:wrap}
        .ph-card-btn{flex:1;min-width:140px;display:flex;align-items:center;justify-content:space-between;gap:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:14px 16px;text-decoration:none;transition:border-color .2s}
        .ph-card-btn:hover{border-color:rgba(255,255,255,0.25)}
        .ph-card-btn-left{text-align:left}
        .ph-card-tag{font-size:9px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.3);margin-bottom:3px}
        .ph-card-name{font-size:13px;font-weight:700;color:#fff}
        .ph-card-perk{font-size:11px;color:rgba(255,255,255,0.4);margin-top:1px}
        .ph-card-arrow{font-size:14px;color:rgba(255,255,255,0.25);flex-shrink:0}
      `}</style>

      <main className="ph">
        <div className="ph-wrap">

          <nav className="ph-bc">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/learn">Learn</Link><span>/</span>
            <span style={{ color: "rgba(255,255,255,0.45)" }}>Crypto Airdrops Philippines 2026</span>
          </nav>

          <div>
            <span className="ph-badge" style={{ background: "rgba(252,211,77,0.1)", color: "#fcd34d", border: "1px solid rgba(252,211,77,0.18)" }}>Philippines</span>
            <span className="ph-badge" style={{ background: "rgba(96,165,250,0.1)", color: "#60a5fa", border: "1px solid rgba(96,165,250,0.18)" }}>Free Guide</span>
            <h1 className="ph-h1">Best Crypto Airdrops for Filipinos in 2026 <span>— Free, No Investment</span></h1>
            <p className="ph-sub">The Philippines ranks top 3 globally for crypto adoption. Here are the best airdrops fully accessible from the Philippines in 2026 — free to join, no KYC required, with step-by-step guides.</p>
            <p className="ph-meta">By <span>3alamiy Team</span> · June 11, 2026 · 7 min read</p>
            <div className="ph-byline">
              <div className="ph-byline-avatar">W</div>
              <div>
                <div className="ph-byline-name">3alamiy Team</div>
                <div className="ph-byline-sub">Web3 Airdrop Research · <a href="https://www.3alamiyweb3.com">3alamiyweb3.com</a></div>
              </div>
            </div>
          </div>

          <div className="ph-answer-box">
            <div className="ph-answer-label">Quick Answer</div>
            <p>The best crypto airdrops in Philippines 2026 are Hyperliquid, MetaMask, Phantom, Polymarket, Soneium, and Ink by Kraken. All are free, accessible from the Philippines without a VPN, and can be funded via Coins.ph or Binance. Philippines ranks top 5 globally for crypto adoption.</p>
          </div>
          <div className="ph-stats">
            {[
              { val: "Top 3", lbl: "Global Crypto Adoption" },
              { val: "110M+", lbl: "Population" },
              { val: "Free", lbl: "All Airdrops Below" },
            ].map((s) => (
              <div key={s.lbl} className="ph-stat">
                <div className="ph-stat-val">{s.val}</div>
                <div className="ph-stat-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>

          <section className="ph-section">
            <h2 className="ph-h2">Why the Philippines is Perfect for Airdrop Farming</h2>
            <p className="ph-p">
              The Philippines consistently ranks <strong>top 3 in the Chainalysis Global Crypto Adoption Index</strong>. The country pioneered play-to-earn gaming with Axie Infinity — millions of Filipinos already have self-custody wallets, understand on-chain transactions, and have been interacting with DeFi protocols for years.
            </p>
            <p className="ph-p">
              That existing on-chain history is <strong>a direct advantage for airdrop eligibility</strong>. Most airdrop snapshot criteria reward wallets with real transaction history — Filipino crypto users already have this. New users can build it quickly with free testnet and social task airdrops.
            </p>
            <p className="ph-p">
              The BSP (Bangko Sentral ng Pilipinas) has maintained a crypto-friendly regulatory environment since 2017. <strong>No VPN needed</strong> for any DeFi protocol listed below. GCash and Maya make funding a crypto wallet fast and cheap.
            </p>
          </section>

          <section className="ph-section">
            <h2 className="ph-h2">How to Get Started — 5 Steps</h2>
            <div className="ph-steps">
              {walletSteps.map((s) => (
                <div key={s.n} className="ph-step">
                  <div className="ph-step-num">{s.n}</div>
                  <div>
                    <div className="ph-step-title">{s.title}</div>
                    <div className="ph-step-desc">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="ph-section">
            <h2 className="ph-h2">Scams Targeting Filipino Crypto Users</h2>
            <div className="ph-warning">
              <span style={{ fontSize: 20, flexShrink: 0 }}>!</span>
              <p className="ph-warning-text">
                <strong>Never share your seed phrase.</strong> Legitimate airdrops never ask for it. The Philippines has a high rate of crypto scam activity — scammers specifically target Filipino communities on Facebook, Telegram, and TikTok.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { scam: "Facebook groups offering free airdrop payouts in PHP", fix: "Airdrops pay in crypto tokens. Any group promising PHP payouts for airdrop claims is a scam." },
                { scam: "TikTok accounts impersonating MetaMask or Phantom with 'free token' links", fix: "Download wallets only from official websites: metamask.io and phantom.com." },
                { scam: "'Scholarship' offers that require sharing your wallet seed phrase", fix: "No legitimate scholarship or P2E guild requires your seed phrase. This is always a scam." },
                { scam: "GCash-based 'pay to activate airdrop' schemes", fix: "Legitimate airdrops are always free. Any upfront payment requirement is a scam." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#0D1221", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: "12px 16px" }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#f87171", marginBottom: 4 }}>x {item.scam}</p>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", margin: 0 }}><span style={{ color: "#fcd34d", fontWeight: 600 }}>Fix: </span>{item.fix}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="ph-section">
            <h2 className="ph-h2">Best Airdrops Accessible from the Philippines — June 2026</h2>
            <p className="ph-p">All verified to work in the Philippines. No VPN required. Start with the free ones.</p>
            <div className="ph-cards">
              {airdrops.map((a) => (
                <Link key={a.slug} href={`/learn/${a.slug}`} className="ph-card">
                  <div className="ph-card-top">
                    <div>
                      <div className="ph-card-name">{a.name}</div>
                      <div className="ph-card-tags">
                        <span className="ph-tag" style={{ color: "#fcd34d", background: "rgba(252,211,77,0.08)", borderColor: "rgba(252,211,77,0.18)" }}>{a.cost}</span>
                        <span className="ph-tag" style={{ color: a.difficulty === "Easy" ? "#7CF5C0" : "#f59e0b" }}>{a.difficulty}</span>
                        <span className="ph-tag">{a.category}</span>
                        <span className="ph-tag">{a.time}</span>
                        {a.raise && <span className="ph-tag" style={{ color: "rgba(255,255,255,0.5)" }}>{a.raise}</span>}
                      </div>
                    </div>
                  </div>
                  <p className="ph-card-why">{a.why}</p>
                  <div className="ph-card-footer">
                    <span className="ph-flag">{a.ph}</span>
                    <span className="ph-cta">View Guide →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="ph-section">
            <h2 className="ph-h2">Tips for Filipino Airdrop Farmers</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { tip: "Your P2E experience is an advantage", desc: "If you played Axie Infinity, Pegaxy, or any P2E game, you already understand wallets and on-chain transactions. DeFi airdrop farming uses the same skills — and pays more consistently." },
                { tip: "Use GCash or Maya to fund ETH purchases", desc: "Coins.ph and PDAX both support GCash and Maya for PHP-to-crypto purchases. Even 300-500 PHP is enough to start farming most DeFi airdrops with gas fees to spare." },
                { tip: "Leverage your existing wallet history", desc: "If you have old MetaMask or Phantom wallets from gaming or DeFi, those wallets may already qualify for upcoming airdrops. Check your old addresses against airdrop checkers before starting fresh." },
                { tip: "Filipino content creators can earn from Story Protocol", desc: "Story Protocol specifically rewards creators who register IP on-chain. Filipino musicians, artists, and developers are a natural fit for this $140M-backed project." },
                { tip: "Report airdrop income on BIR filings", desc: "Keep a record of tokens received and their approximate PHP value on receipt. The BIR taxes crypto as property — consult a local CPA familiar with crypto taxation." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#0D1221", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "14px 18px" }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#fcd34d", marginBottom: 6 }}>+ {item.tip}</p>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", margin: 0, lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="ph-section">
            <h2 className="ph-h2">Frequently Asked Questions</h2>
            <div className="ph-faqs">
              {faqJsonLd.mainEntity.map((faq, i) => (
                <div key={i} className="ph-faq">
                  <h3>{faq.name}</h3>
                  <p>{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="ph-section">
            <h2 className="ph-h2" style={{ marginBottom: 16 }}>Related Guides</h2>
            <div className="ph-related">
              {[
                { slug: "metamask-airdrop-guide-2026", title: "MetaMask Airdrop Guide 2026 — How to Get Eligible" },
                { slug: "phantom-airdrop-guide-2026", title: "Phantom Wallet Airdrop Guide 2026" },
                { slug: "hyperliquid-guide", title: "Hyperliquid Airdrop Guide — HYPE Season 2" },
                { slug: "best-crypto-airdrops-india-2026", title: "Best Crypto Airdrops for Indians 2026" },
                { slug: "how-to-get-crypto-airdrops-2026", title: "How to Get Crypto Airdrops in 2026 — Complete Guide" },
              ].map((a) => (
                <Link key={a.slug} href={`/learn/${a.slug}`} className="ph-related-link">
                  <span>{a.title}</span><span>→</span>
                </Link>
              ))}
            </div>
          </section>

          <div className="ph-aff-box">
            <div>
              <div className="ph-aff-label">Recommended Exchange</div>
              <div className="ph-aff-title">Fund your wallet with Binance</div>
              <div className="ph-aff-sub">Best on-ramp for Filipinos · Coins.ph or Binance P2P</div>
            </div>
            <a href="https://www.binance.com/referral/earn-together/refer2earn-usdc/claim?hl=en&ref=GRO_28502_0JWES&utm_source=referral_entrance" target="_blank" rel="noopener noreferrer sponsored" className="ph-aff-btn">Open Binance →</a>
          </div>
          <div className="ph-card-dual-box">
            <a href="https://app.kast.xyz/referral/M9F7SPDV" target="_blank" rel="noopener noreferrer sponsored" className="ph-card-btn">
              <div className="ph-card-btn-left">
                <div className="ph-card-tag">Crypto Card</div>
                <div className="ph-card-name">KAST Card</div>
                <div className="ph-card-perk">Up to 12% cashback</div>
              </div>
              <span className="ph-card-arrow">→</span>
            </a>
            <a href="https://url.hk/i/en/xjrxm" target="_blank" rel="noopener noreferrer sponsored" className="ph-card-btn">
              <div className="ph-card-btn-left">
                <div className="ph-card-tag">Crypto Card</div>
                <div className="ph-card-name">RedotPay Card</div>
                <div className="ph-card-perk">$445M volume · 6% cashback</div>
              </div>
              <span className="ph-card-arrow">→</span>
            </a>
          </div>
          <div className="ph-cta-box">
            <h2>Start Farming Airdrops Today</h2>
            <p>Browse 130+ verified airdrops on 3alamiy Web3 — all with full step-by-step guides. Updated daily. Always free.</p>
            <Link href="/airdrops" className="ph-cta-btn">Browse All Airdrops →</Link>
            <p className="ph-note">Last updated: June 11, 2026 · Reviewed weekly</p>
          </div>

        </div>
      </main>
    </>
  );
}
