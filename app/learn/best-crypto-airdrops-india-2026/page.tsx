import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Crypto Airdrops for Indians 2026 — Free Guides | 3alamiy Web3",
  description:
    "The best crypto airdrops accessible from India in 2026. Free, no investment required. Step-by-step guides for Indian users — no KYC options, works with Indian wallets and exchanges.",
  alternates: { canonical: "https://www.3alamiyweb3.com/learn/best-crypto-airdrops-india-2026" },
  openGraph: {
    title: "Best Crypto Airdrops for Indians 2026 — Free Guides",
    description: "The best crypto airdrops accessible from India in 2026. Free, no investment required.",
    url: "https://www.3alamiyweb3.com/learn/best-crypto-airdrops-india-2026",
    siteName: "3alamiy Web3",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Crypto Airdrops for Indians 2026 — Free Guides",
    description: "The best free crypto airdrops accessible from India in 2026. No investment required.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Crypto Airdrops for Indians 2026 — Free Guides",
  description: "The best crypto airdrops accessible from India in 2026. Free, no investment required.",
  author: { "@type": "Organization", name: "3alamiy Web3" },
  publisher: { "@type": "Organization", name: "3alamiy Web3", url: "https://www.3alamiyweb3.com" },
  datePublished: "2026-07-01",
  dateModified: "2026-07-01",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.3alamiyweb3.com/learn/best-crypto-airdrops-india-2026" },
  areaServed: { "@type": "Country", name: "India", sameAs: "https://en.wikipedia.org/wiki/India" },
  about: { "@type": "Thing", name: "Crypto Airdrops in India 2026" },
};

const speakableJsonLd = {
  "@context": "https://schema.org", "@type": "WebPage",
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".ind-answer-box", ".ind-faq", ".ind-faqs"] },
  url: "https://www.3alamiyweb3.com/learn/best-crypto-airdrops-india-2026",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can Indians participate in crypto airdrops in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Indians can participate in the vast majority of crypto airdrops in 2026. Most DeFi protocols, testnet airdrops, and social task airdrops are fully accessible from India. You only need a self-custody wallet like MetaMask or Phantom and an internet connection. Some centralized exchange airdrops may have KYC requirements — DeFi airdrops typically have none.",
      },
    },
    {
      "@type": "Question",
      name: "Do Indians need to pay tax on airdrop income?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "India introduced a 30% flat tax on Virtual Digital Assets (VDAs) in 2022, which applies to crypto gains including airdrops. Airdrop tokens received are treated as income at the fair market value on the date of receipt, and any subsequent sale is taxed as a capital gain. Consult a qualified Indian CA (Chartered Accountant) for personal tax advice. Many airdrop participants hold tokens without selling until they evaluate the value.",
      },
    },
    {
      "@type": "Question",
      name: "What crypto wallet should Indians use for airdrops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For EVM chains (Ethereum, Base, Arbitrum, Optimism): use MetaMask. For Solana: use Phantom. Both are free, available as browser extensions and mobile apps, and work in India without restrictions. Never use your CoinDCX, WazirX, or Zebpay exchange wallet for airdrops — exchange wallets cannot receive airdrop tokens.",
      },
    },
    {
      "@type": "Question",
      name: "How much can Indians earn from crypto airdrops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Earnings vary widely by project and effort. Easy social task airdrops pay $50–$300. Testnet airdrops from well-funded Layer 2 networks have historically paid $500–$5,000+ per wallet. Hyperliquid Season 1 paid average users over $10,000. India has some of the world's most active DeFi users, and consistent daily farming across 5-10 projects can generate meaningful income.",
      },
    },
    {
      "@type": "Question",
      name: "Are crypto airdrops legal in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Participating in crypto airdrops is legal in India. The Indian government has established a regulatory framework for Virtual Digital Assets (VDAs) under the Finance Act 2022. Crypto is not banned. You are required to report crypto income in your ITR (Income Tax Return). Use self-custody wallets for airdrops — do not use exchange wallets.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use Indian exchanges like CoinDCX to fund airdrop farming?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — for buying small amounts of ETH or SOL to cover gas fees, Indian exchanges like CoinDCX, WazirX, Mudrex, or Zebpay work well. Buy the crypto on the exchange, then withdraw to your MetaMask or Phantom self-custody wallet. Many airdrops require zero investment — only free testnets or social tasks. For those, no exchange account is needed at all.",
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
    why: "Trade perpetuals on Hyperliquid's native DEX. Season 2 points are live. The Season 1 airdrop paid average users $10,000+. Still one of the highest-upside free airdrops available.",
    india: "Fully accessible from India",
    color: "#7CF5C0",
  },
  {
    name: "Soneium (Sony Ethereum L2)",
    slug: "soneium-airdrop-guide-2026",
    category: "Layer 2",
    cost: "Free / Low",
    difficulty: "Medium",
    time: "30 min/week",
    raise: "$0 (Sony-backed)",
    why: "Sony Group's Ethereum Layer 2 — no token yet. Bridge ETH, use DeFi apps, build transaction history. Sony's reach makes this one of the most anticipated future airdrops.",
    india: "Fully accessible from India",
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
    why: "Kraken's Ethereum L2 — no token yet. Bridge ETH, trade on Velodrome, supply/borrow on Aave. Well-funded, low user count vs. Base or Arbitrum. High airdrop potential.",
    india: "Fully accessible from India",
    color: "#8b5cf6",
  },
  {
    name: "MetaMask Airdrop",
    slug: "metamask-airdrop-guide-2026",
    category: "Wallet",
    cost: "Free",
    difficulty: "Easy",
    time: "5 min/day",
    raise: "$686M raised (ConsenSys)",
    why: "MetaMask has never launched a token. With 30M+ users, a future MASK token could be one of the largest airdrops ever. Use MetaMask Portfolio, bridge, and swap daily to build eligibility.",
    india: "Fully accessible from India",
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
    why: "Phantom Wallet — no token yet. $109M raised from Paradigm, a16z. Swap on Jupiter, bridge across chains, use Phantom's swap feature daily. India has a growing Solana user base.",
    india: "Fully accessible from India",
    color: "#ab9ff2",
  },
  {
    name: "Galxe (G)",
    slug: "galxe-airdrop-guide-2026",
    category: "Social Tasks",
    cost: "Free",
    difficulty: "Easy",
    time: "10 min/day",
    raise: "$36M raised",
    why: "Complete on-chain quests and social tasks to earn points and NFTs. Galxe campaigns run for hundreds of projects simultaneously. Already has a token (G) — good for earning directly.",
    india: "Fully accessible from India",
    color: "#7CF5C0",
  },
  {
    name: "Polymarket Airdrop",
    slug: "polymarket-airdrop-guide-2026",
    category: "Prediction Market",
    cost: "Low",
    difficulty: "Easy",
    time: "15 min/day",
    raise: "$74M raised (Founders Fund, Vitalik)",
    why: "World's largest prediction market. POLY token launched April 2025 with 600M token allocation for users. Ongoing rewards for active traders. Use UPI to fund via INR on-ramps.",
    india: "Fully accessible from India",
    color: "#3b82f6",
  },
  {
    name: "Movement Labs (MOVE)",
    slug: "movement-labs-airdrop",
    category: "Layer 2",
    cost: "Free",
    difficulty: "Medium",
    time: "30 min",
    raise: "$100M raised",
    why: "Move VM Layer 2 for Ethereum. High-profile Indian crypto community presence. Testnet active. Bridge assets, complete quests, build transaction history before mainnet launch.",
    india: "Fully accessible from India",
    color: "#f59e0b",
  },
];

const walletSteps = [
  { n: 1, title: "Download MetaMask", desc: "Go to metamask.io — download the browser extension (Chrome/Brave/Firefox) or mobile app. Available in India with no restrictions. Brave browser is popular in India and works seamlessly with MetaMask." },
  { n: 2, title: "Create a dedicated airdrop wallet", desc: "Create a new wallet specifically for airdrop farming. Do NOT use your main wallet. Write your 12-word seed phrase on paper and store it safely — never save it digitally or share it with anyone." },
  { n: 3, title: "Get a small amount of ETH for gas", desc: "For EVM chain airdrops, you need a small amount of ETH to pay gas fees. Buy ETH on CoinDCX, WazirX, or Mudrex using UPI or bank transfer, then withdraw to your MetaMask wallet. Even Rs. 500–1,000 is enough to start." },
  { n: 4, title: "Download Phantom for Solana", desc: "For Solana airdrops (MetaMask, Jupiter, Magic Eden), download Phantom wallet from phantom.com. Free, works in India, same safety standards as MetaMask." },
  { n: 5, title: "Start with zero-cost airdrops", desc: "Begin with 100% free airdrops — testnet airdrops use free test tokens, social task airdrops only require your time. Build habits first, then move to low-cost DeFi farming once comfortable." },
];

export default function IndiaAirdrops2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />

      <style>{`
        .ind * { box-sizing: border-box; }
        .ind { background: #060A12; min-height: 100vh; color: #fff; font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif; }
        .ind-wrap { max-width: 800px; margin: 0 auto; padding: 48px 20px 80px; }
        .ind-bc { font-size: 13px; color: rgba(255,255,255,0.25); margin-bottom: 32px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .ind-bc a { color: rgba(255,255,255,0.25); text-decoration: none; }
        .ind-badge { font-size: 11px; font-weight: 600; letter-spacing: 0.08em; padding: 3px 10px; border-radius: 99px; text-transform: uppercase; margin-right: 8px; }
        .ind-h1 { font-size: clamp(24px, 5vw, 36px); font-weight: 700; line-height: 1.2; margin: 16px 0; color: #fff; }
        .ind-h1 span { color: #FF9933; }
        .ind-sub { font-size: 16px; color: rgba(255,255,255,0.45); line-height: 1.7; margin-bottom: 12px; }
        .ind-meta { font-size: 13px; color: rgba(255,255,255,0.25); margin-bottom: 16px; }
        .ind-meta span { color: rgba(255,255,255,0.45); }
        .ind-byline { display: flex; align-items: center; gap: 10px; margin-bottom: 40px; padding: 12px 16px; background: rgba(255,153,51,0.04); border: 1px solid rgba(255,153,51,0.1); border-radius: 10px; }
        .ind-byline-avatar { width: 32px; height: 32px; border-radius: 50%; background: rgba(255,153,51,0.15); border: 1px solid rgba(255,153,51,0.25); display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; }
        .ind-byline-name { font-size: 13px; font-weight: 700; color: #fff; }
        .ind-byline-sub { font-size: 11px; color: rgba(255,255,255,0.35); }
        .ind-byline-sub a { color: #FF9933; text-decoration: none; }

        .ind-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; overflow: hidden; margin-bottom: 48px; }
        .ind-stat { background: #0D1221; padding: 18px 16px; text-align: center; }
        .ind-stat-val { font-size: 22px; font-weight: 700; color: #FF9933; margin-bottom: 4px; }
        .ind-stat-lbl { font-size: 11px; color: rgba(255,255,255,0.25); text-transform: uppercase; letter-spacing: 0.06em; font-weight: 600; }

        .ind-section { margin-bottom: 52px; }
        .ind-h2 { font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 12px; }
        .ind-p { font-size: 15px; color: rgba(255,255,255,0.45); line-height: 1.8; margin-bottom: 16px; }
        .ind-p strong { color: #fff; }

        .ind-cards { display: flex; flex-direction: column; gap: 12px; }
        .ind-card { background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; padding: 20px; text-decoration: none; color: inherit; display: block; transition: border-color 0.15s; }
        .ind-card:hover { border-color: rgba(255,153,51,0.2); }
        .ind-card-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 10px; flex-wrap: wrap; }
        .ind-card-name { font-size: 16px; font-weight: 700; color: #fff; margin-bottom: 4px; }
        .ind-card-tags { display: flex; gap: 6px; flex-wrap: wrap; }
        .ind-tag { font-size: 10px; font-weight: 600; padding: 2px 8px; border-radius: 99px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.04); }
        .ind-card-why { font-size: 13px; color: rgba(255,255,255,0.45); line-height: 1.7; margin-bottom: 10px; }
        .ind-card-footer { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; }
        .ind-india { font-size: 11px; color: #FF9933; font-weight: 600; }
        .ind-cta { font-size: 12px; font-weight: 700; color: #FF9933; }

        .ind-steps { display: flex; flex-direction: column; gap: 10px; }
        .ind-step { background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 16px 18px; display: flex; gap: 14px; align-items: flex-start; }
        .ind-step-num { width: 28px; height: 28px; border-radius: 8px; background: rgba(255,153,51,0.1); border: 1px solid rgba(255,153,51,0.2); color: #FF9933; font-size: 12px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .ind-step-title { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 4px; }
        .ind-step-desc { font-size: 13px; color: rgba(255,255,255,0.4); line-height: 1.65; }

        .ind-warning { background: rgba(248,113,113,0.05); border: 1px solid rgba(248,113,113,0.18); border-radius: 12px; padding: 16px 18px; margin-bottom: 20px; display: flex; gap: 12px; }
        .ind-warning-text { font-size: 13px; color: rgba(255,255,255,0.5); line-height: 1.7; }
        .ind-warning-text strong { color: #f87171; }

        .ind-faqs { display: flex; flex-direction: column; gap: 10px; }
        .ind-faq { background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 18px 20px; }
        .ind-faq h3 { font-weight: 600; color: #fff; font-size: 14px; margin-bottom: 8px; }
        .ind-faq p { color: rgba(255,255,255,0.45); font-size: 13px; margin: 0; line-height: 1.7; }

        .ind-related { display: flex; flex-direction: column; gap: 8px; }
        .ind-related-link { display: flex; align-items: center; justify-content: space-between; background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; padding: 13px 16px; text-decoration: none; color: rgba(255,255,255,0.6); font-size: 13px; font-weight: 500; }
        .ind-related-link span:last-child { color: #FF9933; font-size: 12px; }

        .ind-cta-box { background: rgba(255,153,51,0.06); border: 1px solid rgba(255,153,51,0.18); border-radius: 16px; padding: 40px 28px; text-align: center; }
        .ind-cta-box h2 { font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 10px; }
        .ind-cta-box p { font-size: 14px; color: rgba(255,255,255,0.45); line-height: 1.7; max-width: 420px; margin: 0 auto 24px; }
        .ind-cta-btn { display: inline-flex; align-items: center; gap: 6px; background: #FF9933; color: #060A12; font-weight: 700; font-size: 14px; padding: 12px 28px; border-radius: 99px; text-decoration: none; }
        
        .ind-answer-box{background:rgba(255,153,51,0.06);border:1px solid rgba(255,153,51,0.18);border-radius:14px;padding:20px 22px;margin-bottom:40px}
        .ind-answer-label{font-size:11px;font-weight:700;color:#FF9933;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:10px}
        .ind-answer-box p{font-size:14px;color:rgba(255,255,255,0.7);line-height:1.75;margin:0}
        .ind-note { font-size: 11px; color: rgba(255,255,255,0.18); margin-top: 16px; }

        .ind-tax-box { background: rgba(255,153,51,0.05); border: 1px solid rgba(255,153,51,0.15); border-radius: 12px; padding: 20px; margin-bottom: 20px; }
        .ind-tax-title { font-size: 14px; font-weight: 700; color: #FF9933; margin-bottom: 10px; }
        .ind-tax-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .ind-tax-item { font-size: 12px; color: rgba(255,255,255,0.4); line-height: 1.6; }
        .ind-tax-item strong { color: rgba(255,255,255,0.8); display: block; font-size: 13px; margin-bottom: 2px; }

        @media (max-width: 600px) {
          .ind-wrap { padding: 32px 16px 64px; }
          .ind-stats { grid-template-columns: repeat(3, 1fr); }
          .ind-stat-val { font-size: 18px; }
          .ind-cta-box { padding: 28px 16px; }
          .ind-tax-grid { grid-template-columns: 1fr; }
        }

        .ind-aff-box { background: rgba(243,186,47,0.06); border: 1px solid rgba(243,186,47,0.18); border-radius: 14px; padding: 20px 22px; margin-bottom: 32px; display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
        .ind-aff-box-left { flex: 1; min-width: 200px; }
        .ind-aff-label { font-size: 10px; font-weight: 800; color: #f3ba2f; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 4px; }
        .ind-aff-title { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 2px; }
        .ind-aff-sub { font-size: 12px; color: rgba(255,255,255,0.4); }
        .ind-aff-btn { display: inline-flex; align-items: center; gap: 6px; background: #f3ba2f; color: #000; font-weight: 800; font-size: 13px; padding: 10px 20px; border-radius: 99px; text-decoration: none; flex-shrink: 0; }

        .ind-card-dual-box{display:flex;gap:10px;margin-bottom:32px;flex-wrap:wrap}
        .ind-card-btn{flex:1;min-width:140px;display:flex;align-items:center;justify-content:space-between;gap:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:14px 16px;text-decoration:none;transition:border-color .2s}
        .ind-card-btn:hover{border-color:rgba(255,255,255,0.25)}
        .ind-card-btn-left{text-align:left}
        .ind-card-tag{font-size:9px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.3);margin-bottom:3px}
        .ind-card-name{font-size:13px;font-weight:700;color:#fff}
        .ind-card-perk{font-size:11px;color:rgba(255,255,255,0.4);margin-top:1px}
        .ind-card-arrow{font-size:14px;color:rgba(255,255,255,0.25);flex-shrink:0}
      `}</style>

      <main className="ind">
        <div className="ind-wrap">

          {/* Breadcrumb */}
          <nav className="ind-bc">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/learn">Learn</Link><span>/</span>
            <span style={{ color: "rgba(255,255,255,0.45)" }}>Crypto Airdrops India 2026</span>
          </nav>

          {/* Header */}
          <div>
            <span className="ind-badge" style={{ background: "rgba(255,153,51,0.1)", color: "#FF9933", border: "1px solid rgba(255,153,51,0.18)" }}>India</span>
            <span className="ind-badge" style={{ background: "rgba(96,165,250,0.1)", color: "#60a5fa", border: "1px solid rgba(96,165,250,0.18)" }}>Free Guide</span>
            <h1 className="ind-h1">Best Crypto Airdrops for Indians in 2026 <span>— Free, No Investment</span></h1>
            <p className="ind-sub">India has the world's highest crypto adoption rate. Here are the best crypto airdrops fully accessible from India in 2026 — free to join, no KYC required, with step-by-step guides.</p>
            <p className="ind-meta">By <span>3alamiy Team</span> · June 11, 2026 · 8 min read</p>
            <div className="ind-byline">
              <div className="ind-byline-avatar">W</div>
              <div>
                <div className="ind-byline-name">3alamiy Team</div>
                <div className="ind-byline-sub">Web3 Airdrop Research · <a href="https://www.3alamiyweb3.com">3alamiyweb3.com</a></div>
              </div>
            </div>
          </div>

          <div className="ind-answer-box">
            <div className="ind-answer-label">Quick Answer</div>
            <p>The best crypto airdrops in India 2026 are Hyperliquid, MetaMask, Phantom, Polymarket, Soneium, and Ink by Kraken. All are free, accessible from India without a VPN, and can be funded via WazirX, CoinDCX, or Binance. India has the world's highest crypto adoption rate.</p>
          </div>
          <div className="ind-stats">
            {[
              { val: "#1", lbl: "India in Global Crypto Adoption" },
              { val: "600M+", lbl: "Internet Users in India" },
              { val: "Free", lbl: "All Airdrops Below" },
            ].map((s) => (
              <div key={s.lbl} className="ind-stat">
                <div className="ind-stat-val">{s.val}</div>
                <div className="ind-stat-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>

          {/* Why India */}
          <section className="ind-section">
            <h2 className="ind-h2">Why India is the World's Biggest Crypto Airdrop Market</h2>
            <p className="ind-p">
              India has ranked <strong>#1 in the Chainalysis Global Crypto Adoption Index for three consecutive years</strong>. With over 600 million internet users, a massive tech-literate young population, and one of the world's most active DeFi user bases, India is the single most important crypto market globally.
            </p>
            <p className="ind-p">
              Most DeFi protocols, Layer 2 networks, and testnet airdrops are <strong>fully accessible from India</strong> with no restrictions. You do not need a VPN. You do not need a bank account to get started. You need a self-custody wallet and an internet connection. Everything below has been verified to work from India.
            </p>
            <p className="ind-p">
              India's developer community is also uniquely well-positioned: many high-value airdrops reward users who interact with smart contracts, build on testnets, and participate in governance — all areas where Indian Web3 users are exceptionally active.
            </p>
          </section>

          {/* Tax note */}
          <section className="ind-section">
            <h2 className="ind-h2">Crypto Tax in India — What Airdrop Farmers Need to Know</h2>
            <p className="ind-p">India's Finance Act 2022 introduced a 30% flat tax on VDA (Virtual Digital Asset) gains. This applies to airdrop income. Here is what matters for airdrop farmers:</p>
            <div className="ind-tax-box">
              <p className="ind-tax-title">India VDA Tax Summary for Airdrop Farmers</p>
              <div className="ind-tax-grid">
                <div className="ind-tax-item">
                  <strong>Tax rate on gains</strong>
                  30% flat — no basic exemption deduction allowed
                </div>
                <div className="ind-tax-item">
                  <strong>When airdrops are taxed</strong>
                  On receipt (at fair market value) and again on sale
                </div>
                <div className="ind-tax-item">
                  <strong>TDS on crypto sales</strong>
                  1% TDS deducted by Indian exchanges on crypto sales above Rs. 50,000/year
                </div>
                <div className="ind-tax-item">
                  <strong>Self-custody wallets</strong>
                  No TDS on DeFi transactions — you report gains yourself in ITR
                </div>
              </div>
            </div>
            <p className="ind-p" style={{ fontSize: 13 }}>
              This page is for informational purposes only. Consult a qualified Chartered Accountant for personal tax advice. Many airdrop participants hold tokens and report income only when they sell.
            </p>
          </section>

          {/* Setup guide */}
          <section className="ind-section">
            <h2 className="ind-h2">How to Get Started in India — 5 Steps</h2>
            <div className="ind-steps">
              {walletSteps.map((s) => (
                <div key={s.n} className="ind-step">
                  <div className="ind-step-num">{s.n}</div>
                  <div>
                    <div className="ind-step-title">{s.title}</div>
                    <div className="ind-step-desc">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Warning */}
          <section className="ind-section">
            <h2 className="ind-h2">Common Scams Targeting Indian Crypto Users</h2>
            <div className="ind-warning">
              <span style={{ fontSize: 20, flexShrink: 0 }}>!</span>
              <p className="ind-warning-text">
                <strong>Never share your seed phrase.</strong> Legitimate airdrops never ask for your private key or seed phrase. Never send crypto to &quot;unlock&quot; an airdrop. India has a high volume of crypto scam attempts targeting Hindi, Tamil, and regional language communities.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { scam: "Fake airdrop announcements in Indian Telegram/WhatsApp groups", fix: "Only use official project links from verified Twitter/X accounts and project websites." },
                { scam: "Sites asking for seed phrase to claim tokens", fix: "Your seed phrase restores your wallet — no legitimate protocol ever needs it." },
                { scam: "Pay Rs. 500–2,000 to unlock your airdrop", fix: "Legitimate airdrops are always free. Paying to receive an airdrop is always a scam." },
                { scam: "Fake CoinDCX or WazirX airdrop emails", fix: "Indian exchanges do not distribute DeFi airdrops. Check official exchange websites only." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#0D1221", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: "12px 16px" }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#f87171", marginBottom: 4 }}>x {item.scam}</p>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", margin: 0 }}><span style={{ color: "#FF9933", fontWeight: 600 }}>Fix: </span>{item.fix}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Airdrops list */}
          <section className="ind-section">
            <h2 className="ind-h2">Best Crypto Airdrops Accessible from India — June 2026</h2>
            <p className="ind-p">All verified to work in India. Start with the free ones — no gas fees, no investment, no KYC required.</p>
            <div className="ind-cards">
              {airdrops.map((a) => (
                <Link key={a.slug} href={`/learn/${a.slug}`} className="ind-card">
                  <div className="ind-card-top">
                    <div>
                      <div className="ind-card-name">{a.name}</div>
                      <div className="ind-card-tags">
                        <span className="ind-tag" style={{ color: "#FF9933", background: "rgba(255,153,51,0.08)", borderColor: "rgba(255,153,51,0.18)" }}>{a.cost}</span>
                        <span className="ind-tag" style={{ color: a.difficulty === "Easy" ? "#7CF5C0" : "#f59e0b" }}>{a.difficulty}</span>
                        <span className="ind-tag">{a.category}</span>
                        <span className="ind-tag">{a.time}</span>
                        {a.raise && <span className="ind-tag" style={{ color: "rgba(255,255,255,0.5)" }}>{a.raise}</span>}
                      </div>
                    </div>
                  </div>
                  <p className="ind-card-why">{a.why}</p>
                  <div className="ind-card-footer">
                    <span className="ind-india">{a.india}</span>
                    <span className="ind-cta">View Guide →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Tips */}
          <section className="ind-section">
            <h2 className="ind-h2">Tips for Indian Airdrop Farmers</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { tip: "Use UPI to fund your first wallet", desc: "CoinDCX, Mudrex, and Zebpay support UPI deposits with no minimum. Buy Rs. 500–1,000 worth of ETH, withdraw to MetaMask — enough to start most DeFi airdrops." },
                { tip: "Use your tech skills", desc: "Indian Web3 developers earn far more from airdrops than average users. Testnets, developer quests, and protocol feedback programs reward technical engagement with higher allocations." },
                { tip: "Consistency over capital", desc: "10 minutes per day across 5-6 free airdrops beats one large investment every time. India's top airdrop farmers spend Rs. 0 upfront and earn from protocol activity alone." },
                { tip: "Join India-specific crypto communities", desc: "Indian Web3 communities on Twitter/X and Telegram share early opportunities and India-specific farming tips. Search for Indian crypto Discord servers on major DeFi protocols." },
                { tip: "Track your airdrop income for ITR", desc: "Keep a simple spreadsheet of tokens received, the date, and approximate INR value at receipt. Your CA will need this for your ITR. Tools like Koinly support Indian tax reporting." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#0D1221", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "14px 18px" }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#FF9933", marginBottom: 6 }}>+ {item.tip}</p>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", margin: 0, lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="ind-section">
            <h2 className="ind-h2">Frequently Asked Questions</h2>
            <div className="ind-faqs">
              {faqJsonLd.mainEntity.map((faq, i) => (
                <div key={i} className="ind-faq">
                  <h3>{faq.name}</h3>
                  <p>{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section className="ind-section">
            <h2 className="ind-h2" style={{ marginBottom: 16 }}>Related Guides</h2>
            <div className="ind-related">
              {[
                { slug: "metamask-airdrop-guide-2026", title: "MetaMask Airdrop Guide 2026 — How to Get Eligible" },
                { slug: "phantom-airdrop-guide-2026", title: "Phantom Wallet Airdrop Guide 2026" },
                { slug: "hyperliquid-guide", title: "Hyperliquid Airdrop Guide — HYPE Season 2" },
                { slug: "how-to-get-crypto-airdrops-2026", title: "How to Get Crypto Airdrops in 2026 — Complete Guide" },
                { slug: "best-crypto-airdrops-2026", title: "Best Crypto Airdrops 2026 — Full List" },
              ].map((a) => (
                <Link key={a.slug} href={`/learn/${a.slug}`} className="ind-related-link">
                  <span>{a.title}</span><span>→</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Binance Affiliate */}
          <div className="ind-aff-box">
            <div className="ind-aff-box-left">
              <div className="ind-aff-label">Recommended Exchange</div>
              <div className="ind-aff-title">Fund your wallet with Binance</div>
              <div className="ind-aff-sub">Best on-ramp for Indians · WazirX, CoinDCX, or Binance P2P</div>
            </div>
            <a href="https://www.binance.com/referral/earn-together/refer2earn-usdc/claim?hl=en&ref=GRO_28502_0JWES&utm_source=referral_entrance" target="_blank" rel="noopener noreferrer sponsored" className="ind-aff-btn">
              Open Binance →
            </a>
          </div>

          {/* CTA */}
          <div className="ind-card-dual-box">
            <a href="https://app.kast.xyz/referral/M9F7SPDV" target="_blank" rel="noopener noreferrer sponsored" className="ind-card-btn">
              <div className="ind-card-btn-left">
                <div className="ind-card-tag">Crypto Card</div>
                <div className="ind-card-name">KAST Card</div>
                <div className="ind-card-perk">Up to 12% cashback</div>
              </div>
              <span className="ind-card-arrow">→</span>
            </a>
            <a href="https://url.hk/i/en/xjrxm" target="_blank" rel="noopener noreferrer sponsored" className="ind-card-btn">
              <div className="ind-card-btn-left">
                <div className="ind-card-tag">Crypto Card</div>
                <div className="ind-card-name">RedotPay Card</div>
                <div className="ind-card-perk">$445M volume · 6% cashback</div>
              </div>
              <span className="ind-card-arrow">→</span>
            </a>
          </div>
          <div className="ind-cta-box">
            <h2>Start Farming Airdrops Today</h2>
            <p>Browse 130+ verified airdrops on 3alamiy Web3 — all with full step-by-step guides. Updated daily. Always free.</p>
            <Link href="/airdrops" className="ind-cta-btn">Browse All Airdrops →</Link>
            <p className="ind-note">Last updated: June 11, 2026 · Reviewed weekly</p>
          </div>

        </div>
      </main>
    </>
  );
}
