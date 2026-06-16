import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Crypto Airdrops for Nigerians 2026 — Free Guides | 3alamiy Web3",
  description:
    "The best crypto airdrops available in Nigeria in 2026. Free, no investment required. Step-by-step guides, no KYC options, and exactly what works from Nigeria.",
  alternates: { canonical: "https://www.3alamiyweb3.com/learn/best-crypto-airdrops-nigeria-2026" },
  openGraph: {
    title: "Best Crypto Airdrops for Nigerians 2026 — Free Guides",
    description: "The best crypto airdrops available in Nigeria in 2026. Free, no investment required.",
    url: "https://www.3alamiyweb3.com/learn/best-crypto-airdrops-nigeria-2026",
    siteName: "3alamiy Web3",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Crypto Airdrops for Nigerians 2026 — Free Guides",
    description: "The best free crypto airdrops available in Nigeria in 2026. No investment required.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Crypto Airdrops for Nigerians 2026 — Free Guides",
  description: "The best crypto airdrops available in Nigeria in 2026. Free, no investment required.",
  author: { "@type": "Organization", name: "3alamiy Web3" },
  publisher: { "@type": "Organization", name: "3alamiy Web3", url: "https://www.3alamiyweb3.com" },
  datePublished: "2026-06-03",
  dateModified: "2026-06-03",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.3alamiyweb3.com/learn/best-crypto-airdrops-nigeria-2026" },
  areaServed: { "@type": "Country", name: "Nigeria", sameAs: "https://en.wikipedia.org/wiki/Nigeria" },
  about: { "@type": "Thing", name: "Crypto Airdrops in Nigeria 2026" },
};

const speakableJsonLd = {
  "@context": "https://schema.org", "@type": "WebPage",
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".ng-answer-box", ".ng-faq", ".ng-faqs"] },
  url: "https://www.3alamiyweb3.com/learn/best-crypto-airdrops-nigeria-2026",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can Nigerians participate in crypto airdrops in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Most DeFi and testnet airdrops are fully accessible from Nigeria. You only need a self-custody crypto wallet (MetaMask or Phantom) and an internet connection. No bank account required. Some centralized exchange airdrops may restrict Nigeria — stick to DeFi protocols and testnet airdrops for full access.",
      },
    },
    {
      "@type": "Question",
      name: "Do you need money to farm airdrops in Nigeria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Many legitimate airdrops are completely free. These include testnet airdrops (using free test tokens), social task airdrops (follow + join Discord), and waitlist airdrops (email signup only). You only need your time and a crypto wallet.",
      },
    },
    {
      "@type": "Question",
      name: "What crypto wallet should Nigerians use for airdrops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For EVM chains (Ethereum, Base, Arbitrum): use MetaMask. For Solana: use Phantom. Both are free, available as browser extensions and mobile apps, and work in Nigeria without restrictions. Never use a centralized exchange wallet like Binance — you will not receive airdrop tokens.",
      },
    },
    {
      "@type": "Question",
      name: "How much can Nigerians earn from crypto airdrops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Earnings vary widely. Easy free airdrops typically pay $50–$500 per wallet. Testnet airdrops have paid $500–$5,000+. The Hyperliquid Season 1 airdrop paid average users over $10,000. With consistent daily effort across 5-10 projects, serious farmers can earn significant income.",
      },
    },
    {
      "@type": "Question",
      name: "Are crypto airdrops legal in Nigeria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Participating in crypto airdrops is legal in Nigeria. The Central Bank of Nigeria (CBN) lifted its banking restrictions on crypto in 2023 and the Securities and Exchange Commission (SEC) has been developing a regulatory framework for digital assets. Always use self-custody wallets for airdrops to maintain full control of your funds.",
      },
    },
  ],
};

const airdrops = [
  {
    name: "Aro Network Season 2",
    slug: "aro-network-season-2-testnet",
    category: "DePIN",
    cost: "Free",
    difficulty: "Easy",
    time: "10 min setup",
    raise: "$7.1M",
    why: "Install Chrome extension, mine daily in the background. Confirmed $ARO token rewards. No gas fees, no investment — just keep the extension running.",
    nigeria: "✅ Fully accessible from Nigeria",
    color: "#7CF5C0",
  },
  {
    name: "Fast Portal Season 0",
    slug: "fast-portal-season-0",
    category: "AI",
    cost: "Free",
    difficulty: "Easy",
    time: "5 min",
    raise: "Well funded",
    why: "AI shopping agent. Complete tasks, earn points. Pi Squared users get 1.1x multiplier. Email signup + wallet connect.",
    nigeria: "✅ Fully accessible from Nigeria",
    color: "#c084fc",
  },
  {
    name: "ACI Testnet Airdrop",
    slug: "aci-testnet-airdrop",
    category: "Testnet",
    cost: "Free",
    difficulty: "Easy",
    time: "20 min",
    raise: "30M tokens confirmed",
    why: "First AI blockchain with post-quantum cryptography. Swap and stake free testnet tokens, complete missions. Phase 1 deadline June 30, 2026.",
    nigeria: "✅ Fully accessible from Nigeria",
    color: "#7CF5C0",
  },
  {
    name: "MYNE Community Points",
    slug: "myne-community-points",
    category: "Browser",
    cost: "Free",
    difficulty: "Easy",
    time: "10 min",
    raise: "Active campaign",
    why: "Complete social tasks, quizzes, and Galxe campaigns. Collect points for potential future rewards. No investment needed.",
    nigeria: "✅ Fully accessible from Nigeria",
    color: "#60a5fa",
  },
  {
    name: "Checkpoint Galxe Quest Series",
    slug: "checkpoint-galxe-quest-series",
    category: "Quest",
    cost: "Free",
    difficulty: "Easy",
    time: "15 min/week",
    raise: "Active campaign",
    why: "Weekly Galxe quests. Collect 9 NFTs to qualify for Week 10 rewards. Social tasks only — no gas needed.",
    nigeria: "✅ Fully accessible from Nigeria",
    color: "#f59e0b",
  },
  {
    name: "Xeffy Airdrop Campaign",
    slug: "xeffy-airdrop-campaign",
    category: "SocialFi",
    cost: "Free",
    difficulty: "Easy",
    time: "5 min/day",
    raise: "$20M, 23% community",
    why: "Telegram bot. Daily social tasks earn points. 23% of supply confirmed for community. TGE coming.",
    nigeria: "✅ Fully accessible from Nigeria",
    color: "#7CF5C0",
  },
  {
    name: "Pod Network Testnet",
    slug: "pod-network-testnet",
    category: "Layer 1",
    cost: "Free",
    difficulty: "Medium",
    time: "30 min",
    raise: "$10M (a16z, 1kx)",
    why: "MEV-free Layer 1 backed by a16z. Trade spot and perps on testnet with free funds. Build Discord roles for higher allocation.",
    nigeria: "✅ Fully accessible from Nigeria",
    color: "#818cf8",
  },
];

const walletSteps = [
  { n: 1, title: "Download MetaMask", desc: "Go to metamask.io — download the browser extension (Chrome/Firefox) or mobile app. Available in Nigeria with no restrictions." },
  { n: 2, title: "Create a new wallet", desc: "Create a new wallet dedicated to airdrop farming. NEVER use your main wallet. Write down your seed phrase on paper — never digitally." },
  { n: 3, title: "Get small ETH for gas", desc: "For EVM airdrops, you need a tiny amount of ETH for gas. Buy $5-10 USDT on any Nigerian exchange (Binance, Bybit) and bridge to the required chain." },
  { n: 4, title: "Download Phantom for Solana", desc: "For Solana airdrops, download Phantom wallet (phantom.com). Free, works in Nigeria, same security as MetaMask." },
  { n: 5, title: "Start with free airdrops", desc: "Begin with 100% free airdrops — no gas, no investment. Testnet airdrops use free test tokens. Social task airdrops only require your time." },
];

export default function NigeriaAirdrops2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />

      <style>{`
        .ng * { box-sizing: border-box; }
        .ng { background: #060A12; min-height: 100vh; color: #fff; font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif; }
        .ng-wrap { max-width: 800px; margin: 0 auto; padding: 48px 20px 80px; }
        .ng-bc { font-size: 13px; color: rgba(255,255,255,0.25); margin-bottom: 32px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .ng-bc a { color: rgba(255,255,255,0.25); text-decoration: none; }
        .ng-badge { font-size: 11px; font-weight: 600; letter-spacing: 0.08em; padding: 3px 10px; border-radius: 99px; text-transform: uppercase; margin-right: 8px; }
        .ng-h1 { font-size: clamp(24px, 5vw, 36px); font-weight: 700; line-height: 1.2; margin: 16px 0; color: #fff; }
        .ng-h1 span { color: #7CF5C0; }
        .ng-sub { font-size: 16px; color: rgba(255,255,255,0.45); line-height: 1.7; margin-bottom: 12px; }
        .ng-meta { font-size: 13px; color: rgba(255,255,255,0.25); margin-bottom: 16px; }
        .ng-meta span { color: rgba(255,255,255,0.45); }
        .ng-byline { display: flex; align-items: center; gap: 10px; margin-bottom: 40px; padding: 12px 16px; background: rgba(124,245,192,0.04); border: 1px solid rgba(124,245,192,0.1); border-radius: 10px; }
        .ng-byline-avatar { width: 32px; height: 32px; border-radius: 50%; background: rgba(124,245,192,0.15); border: 1px solid rgba(124,245,192,0.25); display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; }
        .ng-byline-name { font-size: 13px; font-weight: 700; color: #fff; }
        .ng-byline-sub { font-size: 11px; color: rgba(255,255,255,0.35); }
        .ng-byline-sub a { color: #7CF5C0; text-decoration: none; }

        /* Stats */
        .ng-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; overflow: hidden; margin-bottom: 48px; }
        .ng-stat { background: #0D1221; padding: 18px 16px; text-align: center; }
        .ng-stat-val { font-size: 22px; font-weight: 700; color: #7CF5C0; margin-bottom: 4px; }
        .ng-stat-lbl { font-size: 11px; color: rgba(255,255,255,0.25); text-transform: uppercase; letter-spacing: 0.06em; font-weight: 600; }

        /* Section */
        .ng-section { margin-bottom: 52px; }
        .ng-h2 { font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 12px; }
        .ng-p { font-size: 15px; color: rgba(255,255,255,0.45); line-height: 1.8; margin-bottom: 16px; }
        .ng-p strong { color: #fff; }

        /* Airdrop cards */
        .ng-cards { display: flex; flex-direction: column; gap: 12px; }
        .ng-card { background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; padding: 20px; text-decoration: none; color: inherit; display: block; transition: border-color 0.15s; }
        .ng-card:hover { border-color: rgba(124,245,192,0.2); }
        .ng-card-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 10px; flex-wrap: wrap; }
        .ng-card-name { font-size: 16px; font-weight: 700; color: #fff; margin-bottom: 4px; }
        .ng-card-tags { display: flex; gap: 6px; flex-wrap: wrap; }
        .ng-tag { font-size: 10px; font-weight: 600; padding: 2px 8px; border-radius: 99px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.04); }
        .ng-card-why { font-size: 13px; color: rgba(255,255,255,0.45); line-height: 1.7; margin-bottom: 10px; }
        .ng-card-footer { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; }
        .ng-nigeria { font-size: 11px; color: #7CF5C0; font-weight: 600; }
        .ng-cta { font-size: 12px; font-weight: 700; color: #7CF5C0; }

        /* Wallet steps */
        .ng-steps { display: flex; flex-direction: column; gap: 10px; }
        .ng-step { background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 16px 18px; display: flex; gap: 14px; align-items: flex-start; }
        .ng-step-num { width: 28px; height: 28px; border-radius: 8px; background: rgba(124,245,192,0.1); border: 1px solid rgba(124,245,192,0.2); color: #7CF5C0; font-size: 12px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .ng-step-title { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 4px; }
        .ng-step-desc { font-size: 13px; color: rgba(255,255,255,0.4); line-height: 1.65; }

        /* Warning */
        .ng-warning { background: rgba(248,113,113,0.05); border: 1px solid rgba(248,113,113,0.18); border-radius: 12px; padding: 16px 18px; margin-bottom: 20px; display: flex; gap: 12px; }
        .ng-warning-text { font-size: 13px; color: rgba(255,255,255,0.5); line-height: 1.7; }
        .ng-warning-text strong { color: #f87171; }

        /* FAQ */
        .ng-faqs { display: flex; flex-direction: column; gap: 10px; }
        .ng-faq { background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 18px 20px; }
        .ng-faq h3 { font-weight: 600; color: #fff; font-size: 14px; margin-bottom: 8px; }
        .ng-faq p { color: rgba(255,255,255,0.45); font-size: 13px; margin: 0; line-height: 1.7; }

        /* Related */
        .ng-related { display: flex; flex-direction: column; gap: 8px; }
        .ng-related-link { display: flex; align-items: center; justify-content: space-between; background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; padding: 13px 16px; text-decoration: none; color: rgba(255,255,255,0.6); font-size: 13px; font-weight: 500; }
        .ng-related-link span:last-child { color: #7CF5C0; font-size: 12px; }

        /* CTA */
        .ng-cta-box { background: rgba(124,245,192,0.06); border: 1px solid rgba(124,245,192,0.18); border-radius: 16px; padding: 40px 28px; text-align: center; }
        .ng-cta-box h2 { font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 10px; }
        .ng-cta-box p { font-size: 14px; color: rgba(255,255,255,0.45); line-height: 1.7; max-width: 420px; margin: 0 auto 24px; }
        .ng-cta-btn { display: inline-flex; align-items: center; gap: 6px; background: #7CF5C0; color: #060A12; font-weight: 700; font-size: 14px; padding: 12px 28px; border-radius: 99px; text-decoration: none; }
        
        .ng-answer-box{background:rgba(22,163,74,0.06);border:1px solid rgba(22,163,74,0.18);border-radius:14px;padding:20px 22px;margin-bottom:40px}
        .ng-answer-label{font-size:11px;font-weight:700;color:#16a34a;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:10px}
        .ng-answer-box p{font-size:14px;color:rgba(255,255,255,0.7);line-height:1.75;margin:0}
        .ng-note { font-size: 11px; color: rgba(255,255,255,0.18); margin-top: 16px; }

        @media (max-width: 600px) {
          .ng-wrap { padding: 32px 16px 64px; }
          .ng-stats { grid-template-columns: repeat(3, 1fr); }
          .ng-stat-val { font-size: 18px; }
          .ng-cta-box { padding: 28px 16px; }
        }

        .ng-aff-box { background: rgba(243,186,47,0.06); border: 1px solid rgba(243,186,47,0.18); border-radius: 14px; padding: 20px 22px; margin-bottom: 32px; display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
        .ng-aff-box-left { flex: 1; min-width: 200px; }
        .ng-aff-label { font-size: 10px; font-weight: 800; color: #f3ba2f; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 4px; }
        .ng-aff-title { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 2px; }
        .ng-aff-sub { font-size: 12px; color: rgba(255,255,255,0.4); }
        .ng-aff-btn { display: inline-flex; align-items: center; gap: 6px; background: #f3ba2f; color: #000; font-weight: 800; font-size: 13px; padding: 10px 20px; border-radius: 99px; text-decoration: none; flex-shrink: 0; }

        .ng-card-dual-box{display:flex;gap:10px;margin-bottom:32px;flex-wrap:wrap}
        .ng-card-btn{flex:1;min-width:140px;display:flex;align-items:center;justify-content:space-between;gap:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:14px 16px;text-decoration:none;transition:border-color .2s}
        .ng-card-btn:hover{border-color:rgba(255,255,255,0.25)}
        .ng-card-btn-left{text-align:left}
        .ng-card-tag{font-size:9px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.3);margin-bottom:3px}
        .ng-card-name{font-size:13px;font-weight:700;color:#fff}
        .ng-card-perk{font-size:11px;color:rgba(255,255,255,0.4);margin-top:1px}
        .ng-card-arrow{font-size:14px;color:rgba(255,255,255,0.25);flex-shrink:0}
      `}</style>

      <main className="ng">
        <div className="ng-wrap">

          {/* Breadcrumb */}
          <nav className="ng-bc">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/learn">Learn</Link><span>/</span>
            <span style={{ color: "rgba(255,255,255,0.45)" }}>Crypto Airdrops Nigeria 2026</span>
          </nav>

          {/* Header */}
          <div>
            <span className="ng-badge" style={{ background: "rgba(124,245,192,0.1)", color: "#7CF5C0", border: "1px solid rgba(124,245,192,0.18)" }}>Nigeria</span>
            <span className="ng-badge" style={{ background: "rgba(96,165,250,0.1)", color: "#60a5fa", border: "1px solid rgba(96,165,250,0.18)" }}>Free Guide</span>
            <h1 className="ng-h1">Best Crypto Airdrops for Nigerians in 2026 <span>— Free, No Investment</span></h1>
            <p className="ng-sub">Nigeria is one of the fastest-growing crypto markets in the world. Here are the best airdrops fully accessible from Nigeria in 2026 — free to join, step-by-step guides included.</p>
            <p className="ng-meta">By <span>3alamiy Team</span> · June 3, 2026 · 7 min read</p>
            <div className="ng-byline">
              <div className="ng-byline-avatar">🪂</div>
              <div>
                <div className="ng-byline-name">3alamiy Team</div>
                <div className="ng-byline-sub">Web3 Airdrop Research · <a href="https://www.3alamiyweb3.com">3alamiyweb3.com</a></div>
              </div>
            </div>
          </div>

          <div className="ng-answer-box">
            <div className="ng-answer-label">Quick Answer</div>
            <p>The best crypto airdrops in Nigeria 2026 are Hyperliquid, MetaMask, Phantom, Polymarket, Soneium, and Ink by Kraken. All are free, accessible from Nigeria without a VPN, and can be funded via Binance P2P with bank transfer. Nigeria is Africa's largest crypto market.</p>
          </div>
          <div className="ng-stats">
            {[
              { val: "#6", lbl: "Nigeria in Global Crypto Adoption" },
              { val: "$205B+", lbl: "Africa Onchain Value 2025" },
              { val: "Free", lbl: "All Airdrops Below" },
            ].map((s) => (
              <div key={s.lbl} className="ng-stat">
                <div className="ng-stat-val">{s.val}</div>
                <div className="ng-stat-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>

          {/* Why Nigeria */}
          <section className="ng-section">
            <h2 className="ng-h2">Why Nigeria is Perfect for Airdrop Farming</h2>
            <p className="ng-p">
              Nigeria ranked <strong>#6 in the 2025 Global Crypto Adoption Index</strong> — ahead of most European countries. Sub-Saharan Africa received $205 billion in on-chain value between July 2024 and June 2025, a 52% year-over-year increase. Nigerian crypto users are sophisticated, active, and growing fast.
            </p>
            <p className="ng-p">
              Most DeFi and testnet airdrops are <strong>fully accessible from Nigeria</strong> with no restrictions. You don't need a bank account, a credit card, or any capital. You only need a crypto wallet and an internet connection. The airdrops below are all verified to work in Nigeria.
            </p>
          </section>

          {/* Setup guide */}
          <section className="ng-section">
            <h2 className="ng-h2">How to Get Started in Nigeria — 5 Steps</h2>
            <div className="ng-steps">
              {walletSteps.map((s) => (
                <div key={s.n} className="ng-step">
                  <div className="ng-step-num">{s.n}</div>
                  <div>
                    <div className="ng-step-title">{s.title}</div>
                    <div className="ng-step-desc">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Warning */}
          <section className="ng-section">
            <h2 className="ng-h2">Avoid These Scams — They Target Nigerians</h2>
            <div className="ng-warning">
              <span style={{ fontSize: 20, flexShrink: 0 }}>⚠️</span>
              <p className="ng-warning-text">
                <strong>Never share your seed phrase.</strong> Legitimate airdrops never ask for your private key or seed phrase. Never send crypto to "unlock" an airdrop — that is always a scam. Stick to projects listed on verified trackers like 3alamiy Web3.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { scam: "Fake airdrop DMs on Telegram/WhatsApp", fix: "Only use official project links. Never click links from strangers." },
                { scam: "Sites asking for seed phrase to 'verify' wallet", fix: "Your seed phrase is only for restoring your wallet. No legitimate site needs it." },
                { scam: "Pay to unlock your airdrop rewards", fix: "Legitimate airdrops are always free. If they ask you to send crypto first, it's a scam." },
                { scam: "Fake MetaMask or Phantom apps", fix: "Only download from official websites: metamask.io and phantom.com" },
              ].map((item, i) => (
                <div key={i} style={{ background: "#0D1221", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: "12px 16px" }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#f87171", marginBottom: 4 }}>✗ {item.scam}</p>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", margin: 0 }}><span style={{ color: "#7CF5C0", fontWeight: 600 }}>Fix: </span>{item.fix}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Airdrops list */}
          <section className="ng-section">
            <h2 className="ng-h2">Best Airdrops Accessible from Nigeria — June 2026</h2>
            <p className="ng-p">All verified to work in Nigeria. Start with the easiest ones — no gas fees, no investment needed.</p>
            <div className="ng-cards">
              {airdrops.map((a) => (
                <Link key={a.slug} href={`/airdrops/${a.slug}`} className="ng-card">
                  <div className="ng-card-top">
                    <div>
                      <div className="ng-card-name">{a.name}</div>
                      <div className="ng-card-tags">
                        <span className="ng-tag" style={{ color: "#7CF5C0", background: "rgba(124,245,192,0.08)", borderColor: "rgba(124,245,192,0.18)" }}>{a.cost}</span>
                        <span className="ng-tag" style={{ color: a.difficulty === "Easy" ? "#7CF5C0" : "#f59e0b" }}>{a.difficulty}</span>
                        <span className="ng-tag">{a.category}</span>
                        <span className="ng-tag">{a.time}</span>
                        {a.raise && <span className="ng-tag" style={{ color: "rgba(255,255,255,0.5)" }}>{a.raise}</span>}
                      </div>
                    </div>
                  </div>
                  <p className="ng-card-why">{a.why}</p>
                  <div className="ng-card-footer">
                    <span className="ng-nigeria">{a.nigeria}</span>
                    <span className="ng-cta">View Guide →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Tips */}
          <section className="ng-section">
            <h2 className="ng-h2">Tips for Nigerian Airdrop Farmers</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { tip: "Use a VPN if needed", desc: "Some projects restrict access by IP. A reliable VPN gives you access to all DeFi protocols. ProtonVPN has a free tier that works well." },
                { tip: "Start with zero-cost airdrops", desc: "Build your farming routine with 100% free airdrops first. Once you're earning, reinvest a small amount into medium-cost ones." },
                { tip: "Join the Telegram community", desc: "Nigerian crypto communities on Telegram share the best opportunities early. 3alamiy's Telegram: t.me/web33alamiy" },
                { tip: "Use mobile for Galxe quests", desc: "Most social task airdrops work perfectly on mobile. Phantom and MetaMask mobile apps are smooth and fast on Nigerian internet speeds." },
                { tip: "Consistency beats capital", desc: "10 minutes per day across 5-6 free airdrops beats one large investment. Build habits, not one-time bets." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#0D1221", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "14px 18px" }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#7CF5C0", marginBottom: 6 }}>✓ {item.tip}</p>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", margin: 0, lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="ng-section">
            <h2 className="ng-h2">Frequently Asked Questions</h2>
            <div className="ng-faqs">
              {faqJsonLd.mainEntity.map((faq, i) => (
                <div key={i} className="ng-faq">
                  <h3>{faq.name}</h3>
                  <p>{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section className="ng-section">
            <h2 className="ng-h2" style={{ marginBottom: 16 }}>Related Guides</h2>
            <div className="ng-related">
              {[
                { slug: "free-crypto-airdrops-no-investment-2026", title: "Free Crypto Airdrops — No Investment Required 2026" },
                { slug: "crypto-airdrop-eligibility-requirements-2026", title: "Crypto Airdrop Eligibility Requirements 2026" },
                { slug: "how-to-avoid-crypto-airdrop-scams-2026", title: "How to Avoid Crypto Airdrop Scams 2026" },
                { slug: "how-to-build-onchain-activity-that-actually-matters", title: "How to Build On-Chain Activity That Actually Matters" },
                { slug: "best-crypto-airdrops-2026", title: "Best Crypto Airdrops 2026 — Full List" },
              ].map((a) => (
                <Link key={a.slug} href={`/learn/${a.slug}`} className="ng-related-link">
                  <span>{a.title}</span><span>→</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Binance Affiliate */}
          <div className="ng-aff-box">
            <div className="ng-aff-box-left">
              <div className="ng-aff-label">Recommended Exchange</div>
              <div className="ng-aff-title">Fund your wallet with Binance</div>
              <div className="ng-aff-sub">Best on-ramp for Nigerians · Binance P2P + bank transfer</div>
            </div>
            <a href="https://www.binance.com/referral/earn-together/refer2earn-usdc/claim?hl=en&ref=GRO_28502_0JWES&utm_source=referral_entrance" target="_blank" rel="noopener noreferrer sponsored" className="ng-aff-btn">
              Open Binance →
            </a>
          </div>

          {/* CTA */}
          <div className="ng-card-dual-box">
            <a href="https://app.kast.xyz/referral/M9F7SPDV" target="_blank" rel="noopener noreferrer sponsored" className="ng-card-btn">
              <div className="ng-card-btn-left">
                <div className="ng-card-tag">Crypto Card</div>
                <div className="ng-card-name">KAST Card</div>
                <div className="ng-card-perk">Up to 12% cashback</div>
              </div>
              <span className="ng-card-arrow">→</span>
            </a>
            <a href="https://url.hk/i/en/xjrxm" target="_blank" rel="noopener noreferrer sponsored" className="ng-card-btn">
              <div className="ng-card-btn-left">
                <div className="ng-card-tag">Crypto Card</div>
                <div className="ng-card-name">RedotPay Card</div>
                <div className="ng-card-perk">$445M volume · 6% cashback</div>
              </div>
              <span className="ng-card-arrow">→</span>
            </a>
          </div>
          <div className="ng-cta-box">
            <h2>Start Farming Airdrops Today 🇳🇬</h2>
            <p>Browse 115+ verified airdrops on 3alamiy Web3 — all with full step-by-step guides. Updated daily. Always free.</p>
            <Link href="/airdrops" className="ng-cta-btn">Browse All Airdrops →</Link>
            <p className="ng-note">Last updated: June 3, 2026 · Reviewed weekly</p>
          </div>

        </div>
      </main>
    </>
  );
}
