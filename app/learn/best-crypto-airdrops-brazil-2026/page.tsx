import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Crypto Airdrops for Brazilians 2026 — Free Guides | 3alamiy Web3",
  description: "The best crypto airdrops accessible from Brazil in 2026. Free, no investment required. Step-by-step guides for Brazilian users — fund via PIX on Mercado Bitcoin or Binance.",
  alternates: { canonical: "https://www.3alamiyweb3.com/learn/best-crypto-airdrops-brazil-2026" },
  openGraph: {
    title: "Best Crypto Airdrops for Brazilians 2026 — Free Guides",
    description: "The best crypto airdrops accessible from Brazil in 2026. Free, no investment required.",
    url: "https://www.3alamiyweb3.com/learn/best-crypto-airdrops-brazil-2026",
    siteName: "3alamiy Web3", type: "article",
  },
  twitter: { card: "summary_large_image", title: "Best Crypto Airdrops for Brazilians 2026", description: "Free crypto airdrops accessible from Brazil. No investment required." },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "Best Crypto Airdrops for Brazilians 2026 — Free Guides",
  description: "The best crypto airdrops accessible from Brazil in 2026. Free, no investment required.",
  author: { "@type": "Organization", name: "3alamiy Web3" },
  publisher: { "@type": "Organization", name: "3alamiy Web3", url: "https://www.3alamiyweb3.com" },
  datePublished: "2026-06-12", dateModified: "2026-06-12",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.3alamiyweb3.com/learn/best-crypto-airdrops-brazil-2026" },
  areaServed: { "@type": "Country", name: "Brazil", sameAs: "https://en.wikipedia.org/wiki/Brazil" },
  about: { "@type": "Thing", name: "Crypto Airdrops in Brazil 2026" },
};

const speakableJsonLd = {
  "@context": "https://schema.org", "@type": "WebPage",
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".br2-answer-box", ".br2-faq", ".br2-faqs"] },
  url: "https://www.3alamiyweb3.com/learn/best-crypto-airdrops-brazil-2026",
};

const faqJsonLd = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Can Brazilians participate in crypto airdrops in 2026?", acceptedAnswer: { "@type": "Answer", text: "Yes. Brazilians can fully participate in crypto airdrops in 2026. Brazil is one of the most crypto-friendly jurisdictions in Latin America. Law 14.478/2022 established a legal framework for crypto assets. DeFi protocol airdrops, testnet airdrops, and social task airdrops are fully accessible from Brazil without a VPN." } },
    { "@type": "Question", name: "Is crypto legal in Brazil?", acceptedAnswer: { "@type": "Answer", text: "Yes. Brazil passed Law 14.478/2022, making crypto fully legal and regulated. The Banco Central do Brasil (BACEN) oversees crypto regulation. Brazilian exchanges like Mercado Bitcoin and NovaDAX are licensed. Brazil is one of Latin America's most progressive crypto regulatory environments." } },
    { "@type": "Question", name: "What wallet should Brazilians use for airdrops?", acceptedAnswer: { "@type": "Answer", text: "For EVM chains (Ethereum, Base, Arbitrum): use MetaMask from metamask.io. For Solana: use Phantom from phantom.com. Both work in Brazil with no restrictions. Never use your Mercado Bitcoin or Binance Brazil exchange wallet — exchange wallets cannot receive airdrop tokens." } },
    { "@type": "Question", name: "How can Brazilians buy ETH for airdrop farming?", acceptedAnswer: { "@type": "Answer", text: "Brazilians can buy ETH via PIX on Mercado Bitcoin, Binance Brazil, or NovaDAX — all support instant BRL-to-crypto via PIX. Buy the equivalent of R$25–80 worth of ETH, then withdraw to your MetaMask wallet. Many airdrops are completely free and require no ETH." } },
    { "@type": "Question", name: "Do Brazilians pay tax on crypto airdrops?", acceptedAnswer: { "@type": "Answer", text: "Yes. Brazil's Receita Federal taxes crypto gains. Airdrop tokens received are taxed as income at the fair market value on the date of receipt. Gains from selling crypto above R$35,000/month are subject to capital gains tax (15–22.5%). Report crypto holdings in your DIRPF. Consult a Brazilian accountant (contador) for personal tax advice." } },
    { "@type": "Question", name: "Why is Brazil a top market for crypto airdrops?", acceptedAnswer: { "@type": "Answer", text: "Brazil is Latin America's largest crypto market with 215 million people. It ranks in the top 10 globally for DeFi adoption. Brazil has a highly educated, tech-savvy young population, deep Web3 developer communities in São Paulo, and a regulatory environment that actively supports crypto innovation. PIX, Brazil's instant payment system, makes funding a crypto wallet easier here than in most countries." } },
  ],
};

const airdrops = [
  { name: "Hyperliquid (HYPE)", slug: "hyperliquid-guide", category: "DEX / Perps", cost: "Free", difficulty: "Easy", time: "10 min/day", raise: "No VC", why: "Season 2 points live. Season 1 paid average users $10,000+. No KYC. Fully accessible from Brazil. Brazilian traders are highly active on perp DEXes.", country: "Fully accessible from Brazil", color: "#7CF5C0" },
  { name: "MetaMask Airdrop", slug: "metamask-airdrop-guide-2026", category: "Wallet", cost: "Free", difficulty: "Easy", time: "5 min/day", raise: "$686M raised", why: "No token yet. Brazil has millions of MetaMask users from DeFi and NFT activity. Use MetaMask Portfolio, swap, and bridge daily. A future MASK token would be one of the largest airdrops ever.", country: "Fully accessible from Brazil", color: "#f6851b" },
  { name: "Phantom Airdrop", slug: "phantom-airdrop-guide-2026", category: "Wallet", cost: "Free", difficulty: "Easy", time: "5 min/day", raise: "$109M raised", why: "No token yet. Brazilian Solana community is large and active. Swap on Jupiter, use Phantom bridge. $109M from Paradigm and a16z backs a major future airdrop.", country: "Fully accessible from Brazil", color: "#ab9ff2" },
  { name: "Polymarket Airdrop", slug: "polymarket-airdrop-guide-2026", category: "Prediction Market", cost: "Low", difficulty: "Easy", time: "15 min/day", raise: "$74M raised", why: "World's largest prediction market. Brazilian politics, football, and elections are popular on Polymarket. POLY token live — ongoing rewards for active traders. Fund via PIX on Binance.", country: "Fully accessible from Brazil", color: "#3b82f6" },
  { name: "Soneium (Sony L2)", slug: "soneium-airdrop-guide-2026", category: "Layer 2", cost: "Free / Low", difficulty: "Medium", time: "30 min/week", raise: "Sony-backed", why: "Sony Group's Ethereum L2. Sony has enormous brand presence in Brazil. No token yet. Bridge ETH weekly and use DeFi apps to build farming history.", country: "Fully accessible from Brazil", color: "#00b4ff" },
  { name: "Ink by Kraken", slug: "ink-by-kraken-airdrop-guide-2026", category: "Layer 2", cost: "Low", difficulty: "Medium", time: "45 min/week", raise: "Kraken-backed", why: "Kraken's Ethereum L2 — no token yet. Low user count vs. major L2s. Brazilian DeFi users who farm early will have a strong allocation advantage.", country: "Fully accessible from Brazil", color: "#8b5cf6" },
];

const steps = [
  { n: 1, title: "Download MetaMask", desc: "Go to metamask.io and download the browser extension or mobile app. Works in Brazil with no restrictions. Brave browser is popular in Brazil and integrates smoothly with MetaMask." },
  { n: 2, title: "Create a dedicated airdrop wallet", desc: "Create a new wallet for airdrop farming only. Write your 12-word seed phrase on paper. Never store it digitally or photograph it." },
  { n: 3, title: "Buy ETH via PIX", desc: "Use PIX on Mercado Bitcoin, Binance Brazil, or NovaDAX to buy ETH in BRL. Buy R$25–80 worth of ETH, then withdraw to your MetaMask wallet. PIX makes this instant — the fastest on-ramp in Latin America." },
  { n: 4, title: "Download Phantom for Solana", desc: "For Solana airdrops, download Phantom from phantom.com. Buy SOL on Binance Brazil via PIX and withdraw to Phantom. Works in Brazil." },
  { n: 5, title: "Join Brazilian Web3 communities", desc: "Brazil has active Web3 communities on Twitter/X, Discord, and Telegram. Search for Brazilian communities on major DeFi protocol Discord servers — early tips often come from local communities." },
];

export default function BrazilAirdrops2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />
      <style>{`
        .br*{box-sizing:border-box}.br{background:#060A12;min-height:100vh;color:#fff;font-family:var(--font-space),'Space Grotesk',system-ui,sans-serif}
        .br-wrap{max-width:800px;margin:0 auto;padding:48px 20px 80px}
        .br-bc{font-size:13px;color:rgba(255,255,255,0.25);margin-bottom:32px;display:flex;align-items:center;gap:8px;flex-wrap:wrap}
        .br-bc a{color:rgba(255,255,255,0.25);text-decoration:none}
        .br-badge{font-size:11px;font-weight:600;letter-spacing:0.08em;padding:3px 10px;border-radius:99px;text-transform:uppercase;margin-right:8px}
        .br-h1{font-size:clamp(24px,5vw,36px);font-weight:700;line-height:1.2;margin:16px 0;color:#fff}
        .br-h1 span{color:#34d399}
        .br-sub{font-size:16px;color:rgba(255,255,255,0.45);line-height:1.7;margin-bottom:12px}
        .br-meta{font-size:13px;color:rgba(255,255,255,0.25);margin-bottom:16px}
        .br-meta span{color:rgba(255,255,255,0.45)}
        .br-byline{display:flex;align-items:center;gap:10px;margin-bottom:40px;padding:12px 16px;background:rgba(52,211,153,0.04);border:1px solid rgba(52,211,153,0.1);border-radius:10px}
        .br-byline-avatar{width:32px;height:32px;border-radius:50%;background:rgba(52,211,153,0.15);border:1px solid rgba(52,211,153,0.25);display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0}
        .br-byline-name{font-size:13px;font-weight:700;color:#fff}
        .br-byline-sub{font-size:11px;color:rgba(255,255,255,0.35)}
        .br-byline-sub a{color:#34d399;text-decoration:none}
        .br-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.06);border-radius:14px;overflow:hidden;margin-bottom:48px}
        .br-stat{background:#0D1221;padding:18px 16px;text-align:center}
        .br-stat-val{font-size:22px;font-weight:700;color:#34d399;margin-bottom:4px}
        .br-stat-lbl{font-size:11px;color:rgba(255,255,255,0.25);text-transform:uppercase;letter-spacing:0.06em;font-weight:600}
        .br-section{margin-bottom:52px}
        .br-h2{font-size:22px;font-weight:700;color:#fff;margin-bottom:12px}
        .br-p{font-size:15px;color:rgba(255,255,255,0.45);line-height:1.8;margin-bottom:16px}
        .br-p strong{color:#fff}
        .br-steps{display:flex;flex-direction:column;gap:10px}
        .br-step{background:#0D1221;border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:16px 18px;display:flex;gap:14px;align-items:flex-start}
        .br-step-num{width:28px;height:28px;border-radius:8px;background:rgba(52,211,153,0.1);border:1px solid rgba(52,211,153,0.2);color:#34d399;font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0}
        .br-step-title{font-size:14px;font-weight:700;color:#fff;margin-bottom:4px}
        .br-step-desc{font-size:13px;color:rgba(255,255,255,0.4);line-height:1.65}
        .br-cards{display:flex;flex-direction:column;gap:12px}
        .br-card{background:#0D1221;border:1px solid rgba(255,255,255,0.06);border-radius:14px;padding:20px;text-decoration:none;color:inherit;display:block;transition:border-color 0.15s}
        .br-card:hover{border-color:rgba(52,211,153,0.2)}
        .br-card-name{font-size:16px;font-weight:700;color:#fff;margin-bottom:6px}
        .br-card-tags{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px}
        .br-tag{font-size:10px;font-weight:600;padding:2px 8px;border-radius:99px;border:1px solid rgba(255,255,255,0.08);background:rgba(255,255,255,0.04)}
        .br-card-why{font-size:13px;color:rgba(255,255,255,0.45);line-height:1.7;margin-bottom:10px}
        .br-card-footer{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px}
        .br-country{font-size:11px;color:#34d399;font-weight:600}
        .br-arrow{font-size:12px;font-weight:700;color:#34d399}
        .br-faqs{display:flex;flex-direction:column;gap:10px}
        .br-faq{background:#0D1221;border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:18px 20px}
        .br-faq h3{font-weight:600;color:#fff;font-size:14px;margin-bottom:8px}
        .br-faq p{color:rgba(255,255,255,0.45);font-size:13px;margin:0;line-height:1.7}
        .br-related{display:flex;flex-direction:column;gap:8px}
        .br-related-link{display:flex;align-items:center;justify-content:space-between;background:#0D1221;border:1px solid rgba(255,255,255,0.06);border-radius:10px;padding:13px 16px;text-decoration:none;color:rgba(255,255,255,0.6);font-size:13px;font-weight:500}
        .br-related-link span:last-child{color:#34d399;font-size:12px}
        .br-cta-box{background:rgba(52,211,153,0.05);border:1px solid rgba(52,211,153,0.15);border-radius:16px;padding:40px 28px;text-align:center}
        .br-cta-box h2{font-size:22px;font-weight:700;color:#fff;margin-bottom:10px}
        .br-cta-box p{font-size:14px;color:rgba(255,255,255,0.45);line-height:1.7;max-width:420px;margin:0 auto 24px}
        .br-cta-btn{display:inline-flex;align-items:center;gap:6px;background:#34d399;color:#060A12;font-weight:700;font-size:14px;padding:12px 28px;border-radius:99px;text-decoration:none}
        
        .br-answer-box{background:rgba(52,211,153,0.06);border:1px solid rgba(52,211,153,0.18);border-radius:14px;padding:20px 22px;margin-bottom:40px}
        .br-answer-label{font-size:11px;font-weight:700;color:#34d399;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:10px}
        .br-answer-box p{font-size:14px;color:rgba(255,255,255,0.7);line-height:1.75;margin:0}
        .br-note{font-size:11px;color:rgba(255,255,255,0.18);margin-top:16px}
        @media(max-width:600px){.br-wrap{padding:32px 16px 64px}.br-stat-val{font-size:18px}.br-cta-box{padding:28px 16px}}

        .br-aff-box{background:rgba(243,186,47,0.06);border:1px solid rgba(243,186,47,0.18);border-radius:14px;padding:20px 22px;margin-bottom:32px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}
        .br-aff-label{font-size:10px;font-weight:800;color:#f3ba2f;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:4px}
        .br-aff-title{font-size:14px;font-weight:700;color:#fff;margin-bottom:2px}
        .br-aff-sub{font-size:12px;color:rgba(255,255,255,0.4)}
        .br-aff-btn{display:inline-flex;align-items:center;gap:6px;background:#f3ba2f;color:#000;font-weight:800;font-size:13px;padding:10px 20px;border-radius:99px;text-decoration:none;flex-shrink:0}

        .br-card-dual-box{display:flex;gap:10px;margin-bottom:32px;flex-wrap:wrap}
        .br-card-btn{flex:1;min-width:140px;display:flex;align-items:center;justify-content:space-between;gap:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:14px 16px;text-decoration:none;transition:border-color .2s}
        .br-card-btn:hover{border-color:rgba(255,255,255,0.25)}
        .br-card-btn-left{text-align:left}
        .br-card-tag{font-size:9px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.3);margin-bottom:3px}
        .br-card-name{font-size:13px;font-weight:700;color:#fff}
        .br-card-perk{font-size:11px;color:rgba(255,255,255,0.4);margin-top:1px}
        .br-card-arrow{font-size:14px;color:rgba(255,255,255,0.25);flex-shrink:0}
      `}</style>
      <main className="br">
        <div className="br-wrap">
          <nav className="br-bc">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/learn">Learn</Link><span>/</span>
            <span style={{ color: "rgba(255,255,255,0.45)" }}>Crypto Airdrops Brazil 2026</span>
          </nav>
          <div>
            <span className="br-badge" style={{ background: "rgba(52,211,153,0.1)", color: "#34d399", border: "1px solid rgba(52,211,153,0.18)" }}>Brazil</span>
            <span className="br-badge" style={{ background: "rgba(96,165,250,0.1)", color: "#60a5fa", border: "1px solid rgba(96,165,250,0.18)" }}>Free Guide</span>
            <h1 className="br-h1">Best Crypto Airdrops for Brazilians in 2026 <span>— Free, No Investment</span></h1>
            <p className="br-sub">Brazil is Latin America&apos;s largest crypto market with fully legal regulation since 2022. Here are the best airdrops accessible from Brazil — fund via PIX, no KYC required for DeFi.</p>
            <p className="br-meta">By <span>3alamiy Team</span> · June 12, 2026 · 7 min read</p>
            <div className="br-byline">
              <div className="br-byline-avatar">W</div>
              <div>
                <div className="br-byline-name">3alamiy Team</div>
                <div className="br-byline-sub">Web3 Airdrop Research · <a href="https://www.3alamiyweb3.com">3alamiyweb3.com</a></div>
              </div>
            </div>
          </div>
          <div className="br-answer-box">
            <div className="br-answer-label">Quick Answer</div>
            <p>The best crypto airdrops in Brazil 2026 are Hyperliquid, MetaMask, Phantom, Polymarket, Soneium, and Ink by Kraken. All are free, accessible from Brazil without a VPN, and can be funded via PIX through Mercado Bitcoin or Binance. Brazil is Latin America's largest crypto market.</p>
          </div>
          <div className="br-stats">
            {[{ val: "#1", lbl: "Largest Latin America Market" }, { val: "215M+", lbl: "Population" }, { val: "Free", lbl: "All Airdrops Below" }].map(s => (
              <div key={s.lbl} className="br-stat"><div className="br-stat-val">{s.val}</div><div className="br-stat-lbl">{s.lbl}</div></div>
            ))}
          </div>
          <section className="br-section">
            <h2 className="br-h2">Why Brazil Leads Latin America in Crypto Airdrops</h2>
            <p className="br-p">Brazil is <strong>Latin America&apos;s largest and most advanced crypto market</strong>. Law 14.478/2022 made Brazil one of the few countries with a comprehensive crypto legal framework. The Banco Central do Brasil actively supports crypto innovation, and Brazilian exchanges process billions of BRL in crypto volume monthly.</p>
            <p className="br-p"><strong>PIX</strong> — Brazil&apos;s instant payment system — makes buying ETH easier here than almost anywhere in the world. You can go from zero to a funded MetaMask wallet in under 5 minutes using any Brazilian bank account.</p>
            <p className="br-p">Brazil&apos;s tech communities in São Paulo, Rio de Janeiro, and Belo Horizonte are among the most active in Latin America for DeFi, NFTs, and blockchain development. <strong>All airdrops below are fully accessible from Brazil</strong> with no VPN required.</p>
          </section>
          <section className="br-section">
            <h2 className="br-h2">How to Get Started in Brazil — 5 Steps</h2>
            <div className="br-steps">
              {steps.map(s => (
                <div key={s.n} className="br-step">
                  <div className="br-step-num">{s.n}</div>
                  <div><div className="br-step-title">{s.title}</div><div className="br-step-desc">{s.desc}</div></div>
                </div>
              ))}
            </div>
          </section>
          <section className="br-section">
            <h2 className="br-h2">Best Airdrops Accessible from Brazil — June 2026</h2>
            <div className="br-cards">
              {airdrops.map(a => (
                <Link key={a.slug} href={`/learn/${a.slug}`} className="br-card">
                  <div className="br-card-name">{a.name}</div>
                  <div className="br-card-tags">
                    <span className="br-tag" style={{ color: "#34d399", background: "rgba(52,211,153,0.08)", borderColor: "rgba(52,211,153,0.18)" }}>{a.cost}</span>
                    <span className="br-tag" style={{ color: a.difficulty === "Easy" ? "#7CF5C0" : "#f59e0b" }}>{a.difficulty}</span>
                    <span className="br-tag">{a.category}</span>
                    <span className="br-tag">{a.time}</span>
                    <span className="br-tag" style={{ color: "rgba(255,255,255,0.4)" }}>{a.raise}</span>
                  </div>
                  <p className="br-card-why">{a.why}</p>
                  <div className="br-card-footer">
                    <span className="br-country">{a.country}</span>
                    <span className="br-arrow">View Guide →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
          <section className="br-section">
            <h2 className="br-h2">Frequently Asked Questions</h2>
            <div className="br-faqs">
              {faqJsonLd.mainEntity.map((faq, i) => (
                <div key={i} className="br-faq"><h3>{faq.name}</h3><p>{faq.acceptedAnswer.text}</p></div>
              ))}
            </div>
          </section>
          <section className="br-section">
            <h2 className="br-h2" style={{ marginBottom: 16 }}>Related Guides</h2>
            <div className="br-related">
              {[
                { slug: "metamask-airdrop-guide-2026", title: "MetaMask Airdrop Guide 2026" },
                { slug: "hyperliquid-guide", title: "Hyperliquid — HYPE Season 2 Guide" },
                { slug: "polymarket-airdrop-guide-2026", title: "Polymarket POLY Airdrop Guide 2026" },
                { slug: "how-to-get-crypto-airdrops-2026", title: "How to Get Crypto Airdrops in 2026" },
                { slug: "best-crypto-airdrops-2026", title: "Best Crypto Airdrops 2026 — Full List" },
              ].map(a => (
                <Link key={a.slug} href={`/learn/${a.slug}`} className="br-related-link">
                  <span>{a.title}</span><span>→</span>
                </Link>
              ))}
            </div>
          </section>
          <div className="br-aff-box">
            <div>
              <div className="br-aff-label">Recommended Exchange</div>
              <div className="br-aff-title">Fund your wallet with Binance</div>
              <div className="br-aff-sub">Best on-ramp for Brazilians · PIX via Mercado Bitcoin or Binance P2P</div>
            </div>
            <a href="https://www.binance.com/referral/earn-together/refer2earn-usdc/claim?hl=en&ref=GRO_28502_0JWES&utm_source=referral_entrance" target="_blank" rel="noopener noreferrer sponsored" className="br-aff-btn">Open Binance →</a>
          </div>
          <div className="br-card-dual-box">
            <a href="https://app.kast.xyz/referral/M9F7SPDV" target="_blank" rel="noopener noreferrer sponsored" className="br-card-btn">
              <div className="br-card-btn-left">
                <div className="br-card-tag">Crypto Card</div>
                <div className="br-card-name">KAST Card</div>
                <div className="br-card-perk">Up to 12% cashback</div>
              </div>
              <span className="br-card-arrow">→</span>
            </a>
            <a href="https://url.hk/i/en/xjrxm" target="_blank" rel="noopener noreferrer sponsored" className="br-card-btn">
              <div className="br-card-btn-left">
                <div className="br-card-tag">Crypto Card</div>
                <div className="br-card-name">RedotPay Card</div>
                <div className="br-card-perk">$445M volume · 6% cashback</div>
              </div>
              <span className="br-card-arrow">→</span>
            </a>
          </div>
          <div className="br-cta-box">
            <h2>Start Farming Airdrops Today</h2>
            <p>Browse 130+ verified airdrops on 3alamiy Web3 — all with full step-by-step guides. Updated daily. Always free.</p>
            <Link href="/airdrops" className="br-cta-btn">Browse All Airdrops →</Link>
            <p className="br-note">Last updated: June 12, 2026 · Reviewed weekly</p>
          </div>
        </div>
      </main>
    </>
  );
}
