import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Top 10 Crypto Cards by Volume — May 2026 ($750M Record) | 3alamiy Web3",
  description:
    "Crypto cards hit an all-time high of $750M in May 2026. RedotPay leads at $445M, Tria grew fastest at +47.1%. Full breakdown of the top 10 crypto cards by volume.",
  alternates: { canonical: "https://www.3alamiyweb3.com/learn/top-crypto-cards-by-volume-may-2026" },
  openGraph: {
    title: "Top 10 Crypto Cards by Volume — May 2026 ($750M Record)",
    description: "Crypto cards hit an all-time high of $750M in May 2026. Full breakdown of the top 10 by volume, growth, and what each card is best for.",
    url: "https://www.3alamiyweb3.com/learn/top-crypto-cards-by-volume-may-2026",
    siteName: "3alamiy Web3",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top 10 Crypto Cards by Volume — May 2026 ($750M Record)",
    description: "Crypto cards hit an all-time high in May 2026. Full breakdown of the top 10.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Top 10 Crypto Cards by Volume — May 2026 ($750M Record)",
  description: "Crypto cards hit an all-time high of $750M in May 2026. Full breakdown of the top 10 crypto cards by volume, growth, and what each card is best for.",
  author: { "@type": "Organization", name: "3alamiy Web3" },
  publisher: { "@type": "Organization", name: "3alamiy Web3", url: "https://www.3alamiyweb3.com" },
  datePublished: "2026-06-02",
  dateModified: "2026-06-02",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.3alamiyweb3.com/learn/top-crypto-cards-by-volume-may-2026" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the top crypto card by volume in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RedotPay is the top crypto card by volume in 2026, processing $445M in May alone — roughly 60% of all crypto card volume. It is a custodial card based in Hong Kong with 0% FX fees and up to 6% cashback.",
      },
    },
    {
      "@type": "Question",
      name: "Which crypto card grew fastest in May 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tria grew fastest in May 2026 at +47.1% month-over-month, reaching $22.9M. KAST was close behind at +25.5% ($93.9M) and Karta at +24.1% ($34.3M).",
      },
    },
    {
      "@type": "Question",
      name: "How much did crypto cards process in May 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Crypto cards processed over $750M in total volume in May 2026 — a new all-time record. This represents massive growth from $607M in March 2026 and $187M a year prior.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between custodial and non-custodial crypto cards?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custodial cards (RedotPay, KAST) hold your crypto in their custody. Non-custodial cards (ether.fi, Gnosis) let you spend directly from your own wallet. Custodial cards are easier to use but require trusting a third party with your funds.",
      },
    },
    {
      "@type": "Question",
      name: "Which crypto card declined in May 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ready was the only card in the top 10 to decline in May 2026, dropping -21.7% to $5.6M. All other cards in the top 10 saw positive growth.",
      },
    },
  ],
};

const cards = [
  {
    rank: 1, name: "RedotPay", handle: "@RedotPay",
    volume: "$445M", growth: "+7.4%", growthPos: true,
    share: "~60%",
    custody: "Custodial",
    best: "Global off-ramp, stablecoin spending",
    highlight: "Dominates the category — nearly 5x ether.fi and KAST combined. Mainly used for large USDT/USDC off-ramp transfers in Southeast Asia, Africa, and Latin America.",
    cashback: "Up to 6%",
    referral: "https://url.hk/i/en/xjrxm",
    color: "#7CF5C0",
  },
  {
    rank: 2, name: "KAST", handle: "@KASTxyz",
    volume: "$93.9M", growth: "+25.5%", growthPos: true,
    share: "~12.5%",
    custody: "Custodial",
    best: "High cashback, Solana ecosystem",
    highlight: "Raised $80M Series A. Season 5 offered up to 12% cashback in $MOVE tokens. On pace for $100M ARR in 2026. Growing fast with strong rewards program.",
    cashback: "Up to 12%",
    referral: "https://app.kast.xyz/referral/M9F7SPDV",
    color: "#c084fc",
  },
  {
    rank: 3, name: "ether.fi", handle: "@ether_fi",
    volume: "$80.4M", growth: "+22.4%", growthPos: true,
    share: "~10.7%",
    custody: "Non-custodial",
    best: "ETH holders, DeFi users",
    highlight: "The only truly non-custodial card in the top 3. 842K transactions in April — more than KAST and RedotPay combined by transaction count. Borrow against ETH without selling.",
    cashback: "3% wETH",
    referral: null,
    color: "#818cf8",
  },
  {
    rank: 4, name: "Karta", handle: "Karta",
    volume: "$34.3M", growth: "+24.1%", growthPos: true,
    share: "~4.6%",
    custody: "Custodial",
    best: "European users",
    highlight: "Strong growth trajectory in the European market. Up 24.1% month-over-month — one of the faster-growing mid-tier cards in the top 10.",
    cashback: "Varies",
    referral: null,
    color: "#60a5fa",
  },
  {
    rank: 5, name: "Tria", handle: "@useTria",
    volume: "$22.9M", growth: "+47.1%", growthPos: true,
    share: "~3.1%",
    custody: "Non-custodial",
    best: "Multi-chain users",
    highlight: "Fastest growing card in the top 10 at +47.1%. Self-custodial with multi-chain support. Small base but explosive growth — one to watch for H2 2026.",
    cashback: "Varies",
    referral: null,
    color: "#f59e0b",
  },
  {
    rank: 6, name: "KoloHub", handle: "@KoloHub",
    volume: "$10.5M", growth: "+22.3%", growthPos: true,
    share: "~1.4%",
    custody: "Custodial",
    best: "Emerging markets",
    highlight: "Solid growth at +22.3%. Focused on emerging market accessibility with simple onboarding.",
    cashback: "Varies",
    referral: null,
    color: "#7CF5C0",
  },
  {
    rank: 7, name: "Gnosis Pay", handle: "@gnosis_",
    volume: "$10.2M", growth: "+5.3%", growthPos: true,
    share: "~1.4%",
    custody: "Non-custodial",
    best: "EU self-custody users",
    highlight: "European non-custodial card running on Gnosis Chain. MiCA compliant. Lower growth but strong on self-custody simplicity within the EU.",
    cashback: "Varies",
    referral: null,
    color: "#06b6d4",
  },
  {
    rank: 8, name: "Cypher", handle: "@Cypher_HQ_",
    volume: "$9.5M", growth: "+3.5%", growthPos: true,
    share: "~1.3%",
    custody: "Non-custodial",
    best: "Crypto-native spenders",
    highlight: "Non-custodial card with on-chain spend tracking. Modest growth at +3.5% but holds steady in the top 10.",
    cashback: "Varies",
    referral: null,
    color: "#818cf8",
  },
  {
    rank: 9, name: "Bitget Card", handle: "@bitget",
    volume: "$6.4M", growth: "+8.7%", growthPos: true,
    share: "~0.9%",
    custody: "Custodial",
    best: "Bitget exchange users",
    highlight: "Exchange-linked card from Bitget. Modest volume but steady growth. Best for existing Bitget users who want a spend card linked to their exchange balance.",
    cashback: "Varies",
    referral: null,
    color: "#60a5fa",
  },
  {
    rank: 10, name: "Ready", handle: "@ready_co",
    volume: "$5.6M", growth: "-21.7%", growthPos: false,
    share: "~0.7%",
    custody: "Non-custodial",
    best: "Metal card users",
    highlight: "The only card in the top 10 to decline in May at -21.7%. Ready Metal offers 0% FX fees and $800 free ATM withdrawals monthly. Decline may reflect seasonal or competitive pressure.",
    cashback: "3% $STRK",
    referral: null,
    color: "#f87171",
  },
];

export default function TopCryptoCardsMay2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <style>{`
        .cc * { box-sizing: border-box; }
        .cc { background: #060A12; min-height: 100vh; color: #fff; font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif; }
        .cc-wrap { max-width: 800px; margin: 0 auto; padding: 48px 20px 80px; }
        .cc-bc { font-size: 13px; color: rgba(255,255,255,0.25); margin-bottom: 32px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .cc-bc a { color: rgba(255,255,255,0.25); text-decoration: none; }
        .cc-badge { font-size: 11px; font-weight: 600; letter-spacing: 0.08em; padding: 3px 10px; border-radius: 99px; text-transform: uppercase; margin-right: 8px; }
        .cc-h1 { font-size: clamp(24px, 5vw, 36px); font-weight: 700; line-height: 1.2; margin: 16px 0; color: #fff; }
        .cc-h1 span { color: #7CF5C0; }
        .cc-sub { font-size: 16px; color: rgba(255,255,255,0.45); line-height: 1.7; margin-bottom: 12px; }
        .cc-meta { font-size: 13px; color: rgba(255,255,255,0.25); margin-bottom: 16px; }
        .cc-meta span { color: rgba(255,255,255,0.45); }
        .cc-byline { display: flex; align-items: center; gap: 10px; margin-bottom: 40px; padding: 12px 16px; background: rgba(124,245,192,0.04); border: 1px solid rgba(124,245,192,0.1); border-radius: 10px; }
        .cc-byline-avatar { width: 32px; height: 32px; border-radius: 50%; background: rgba(124,245,192,0.15); border: 1px solid rgba(124,245,192,0.25); display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; }
        .cc-byline-name { font-size: 13px; font-weight: 700; color: #fff; }
        .cc-byline-sub { font-size: 11px; color: rgba(255,255,255,0.35); }
        .cc-byline-sub a { color: #7CF5C0; text-decoration: none; }

        /* Stats */
        .cc-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; overflow: hidden; margin-bottom: 48px; }
        .cc-stat { background: #0D1221; padding: 18px 16px; text-align: center; }
        .cc-stat-val { font-size: 22px; font-weight: 700; color: #7CF5C0; margin-bottom: 4px; }
        .cc-stat-lbl { font-size: 11px; color: rgba(255,255,255,0.25); text-transform: uppercase; letter-spacing: 0.06em; font-weight: 600; }

        /* Section */
        .cc-section { margin-bottom: 52px; }
        .cc-h2 { font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 12px; }
        .cc-p { font-size: 15px; color: rgba(255,255,255,0.45); line-height: 1.8; margin-bottom: 16px; }
        .cc-p strong { color: #fff; }

        /* Cards */
        .cc-cards { display: flex; flex-direction: column; gap: 12px; }
        .cc-card { background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; padding: 20px; }
        .cc-card-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 12px; flex-wrap: wrap; }
        .cc-card-left { display: flex; align-items: center; gap: 10px; }
        .cc-card-num { width: 30px; height: 30px; border-radius: 8px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.3); flex-shrink: 0; }
        .cc-card-name { font-size: 16px; font-weight: 700; color: #fff; }
        .cc-card-handle { font-size: 11px; color: rgba(255,255,255,0.25); }
        .cc-card-right { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
        .cc-volume { font-size: 18px; font-weight: 700; color: #fff; }
        .cc-growth { font-size: 13px; font-weight: 700; padding: 3px 10px; border-radius: 99px; }
        .cc-desc { font-size: 13px; color: rgba(255,255,255,0.45); line-height: 1.7; margin-bottom: 12px; }
        .cc-tags { display: flex; gap: 8px; flex-wrap: wrap; }
        .cc-tag { font-size: 11px; color: rgba(255,255,255,0.4); background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); padding: 3px 10px; border-radius: 99px; }
        .cc-referral { display: inline-flex; align-items: center; gap: 6px; margin-top: 12px; background: #7CF5C0; color: #060A12; font-weight: 700; font-size: 12px; padding: 8px 16px; border-radius: 99px; text-decoration: none; }

        /* Insight boxes */
        .cc-insight { background: rgba(124,245,192,0.04); border: 1px solid rgba(124,245,192,0.15); border-radius: 12px; padding: 16px 18px; margin-bottom: 16px; }
        .cc-insight-label { font-size: 10px; font-weight: 700; color: #7CF5C0; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px; }
        .cc-insight-text { font-size: 13px; color: rgba(255,255,255,0.5); line-height: 1.7; }
        .cc-insight-text strong { color: #fff; }

        /* FAQ */
        .cc-faqs { display: flex; flex-direction: column; gap: 10px; }
        .cc-faq { background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 18px 20px; }
        .cc-faq h3 { font-weight: 600; color: #fff; font-size: 14px; margin-bottom: 8px; }
        .cc-faq p { color: rgba(255,255,255,0.45); font-size: 13px; margin: 0; line-height: 1.7; }

        /* Related */
        .cc-related { display: flex; flex-direction: column; gap: 8px; }
        .cc-related-link { display: flex; align-items: center; justify-content: space-between; background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; padding: 13px 16px; text-decoration: none; color: rgba(255,255,255,0.6); font-size: 13px; font-weight: 500; }
        .cc-related-link span:last-child { color: #7CF5C0; font-size: 12px; }

        /* CTA */
        .cc-cta { background: rgba(124,245,192,0.06); border: 1px solid rgba(124,245,192,0.18); border-radius: 16px; padding: 40px 28px; text-align: center; }
        .cc-cta h2 { font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 10px; }
        .cc-cta p { font-size: 14px; color: rgba(255,255,255,0.45); line-height: 1.7; max-width: 420px; margin: 0 auto 24px; }
        .cc-cta-btn { display: inline-flex; align-items: center; gap: 6px; background: #7CF5C0; color: #060A12; font-weight: 700; font-size: 14px; padding: 12px 28px; border-radius: 99px; text-decoration: none; }
        .cc-note { font-size: 11px; color: rgba(255,255,255,0.18); margin-top: 16px; }

        @media (max-width: 600px) {
          .cc-wrap { padding: 32px 16px 64px; }
          .cc-stats { grid-template-columns: repeat(3, 1fr); }
          .cc-stat-val { font-size: 18px; }
          .cc-cta { padding: 28px 16px; }
        }
      `}</style>

      <main className="cc">
        <div className="cc-wrap">

          {/* Breadcrumb */}
          <nav className="cc-bc">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/learn">Learn</Link><span>/</span>
            <span style={{ color: "rgba(255,255,255,0.45)" }}>Top Crypto Cards May 2026</span>
          </nav>

          {/* Header */}
          <div>
            <span className="cc-badge" style={{ background: "rgba(124,245,192,0.1)", color: "#7CF5C0", border: "1px solid rgba(124,245,192,0.18)" }}>Data</span>
            <span className="cc-badge" style={{ background: "rgba(248,113,113,0.1)", color: "#f87171", border: "1px solid rgba(248,113,113,0.2)" }}>May 2026</span>
            <h1 className="cc-h1">Top 10 Crypto Cards by Volume — <span>May 2026 ($750M Record)</span></h1>
            <p className="cc-sub">May was the best month ever for crypto cards. Total volume passed $750M for the first time. Here is the full breakdown — who won, who is growing fastest, and what it means for the space.</p>
            <p className="cc-meta">By <span>3alamiy Team</span> · June 2, 2026 · 6 min read</p>
            <div className="cc-byline">
              <div className="cc-byline-avatar">🪂</div>
              <div>
                <div className="cc-byline-name">3alamiy Team</div>
                <div className="cc-byline-sub">Web3 Research · <a href="https://www.3alamiyweb3.com">3alamiyweb3.com</a></div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="cc-stats">
            {[
              { val: "$750M+", lbl: "May Total Volume" },
              { val: "10", lbl: "Cards Tracked" },
              { val: "+47.1%", lbl: "Fastest Growth (Tria)" },
            ].map((s) => (
              <div key={s.lbl} className="cc-stat">
                <div className="cc-stat-val">{s.val}</div>
                <div className="cc-stat-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>

          {/* Context */}
          <section className="cc-section">
            <h2 className="cc-h2">Why This Record Matters</h2>
            <p className="cc-p">
              Crypto card volume barely existed two years ago. Monthly spending was around <strong>$100M</strong> in mid-2024. By March 2026 it hit <strong>$607M</strong>. May 2026 broke that record again at <strong>$750M+</strong> — a 6x increase in under two years.
            </p>
            <p className="cc-p">
              This is not speculation. These are real transactions — stablecoins moving through Visa rails at checkout counters, airports, and grocery stores around the world. The growth is driven by three things: rising stablecoin usage as a savings vehicle in emerging markets, cashback rewards programs, and simpler onboarding compared to earlier crypto products.
            </p>

            <div className="cc-insight">
              <p className="cc-insight-label">Important Context</p>
              <p className="cc-insight-text">
                Volume figures are not all measured the same way. <strong>Custodial cards like RedotPay</strong> track deposit flow — crypto moved into the card wallet, not necessarily spent. <strong>Non-custodial cards like ether.fi</strong> track actual on-chain spend transactions. This means RedotPay's $445M may overstate actual consumer spending, while ether.fi's $80M is closer to real checkout volume.
              </p>
            </div>
          </section>

          {/* Cards */}
          <section className="cc-section">
            <h2 className="cc-h2">Top 10 by Volume — May 2026</h2>
            <div className="cc-cards">
              {cards.map((c) => (
                <div key={c.rank} className="cc-card" style={{ borderColor: c.rank === 1 ? `${c.color}30` : 'rgba(255,255,255,0.06)' }}>
                  <div className="cc-card-top">
                    <div className="cc-card-left">
                      <div className="cc-card-num">#{c.rank}</div>
                      <div>
                        <div className="cc-card-name" style={{ color: c.rank === 1 ? c.color : '#fff' }}>{c.name}</div>
                        <div className="cc-card-handle">{c.handle}</div>
                      </div>
                    </div>
                    <div className="cc-card-right">
                      <span className="cc-volume">{c.volume}</span>
                      <span className="cc-growth" style={{
                        color: c.growthPos ? "#7CF5C0" : "#f87171",
                        background: c.growthPos ? "rgba(124,245,192,0.08)" : "rgba(248,113,113,0.08)",
                        border: `1px solid ${c.growthPos ? "rgba(124,245,192,0.18)" : "rgba(248,113,113,0.2)"}`,
                      }}>{c.growth}</span>
                    </div>
                  </div>
                  <p className="cc-desc">{c.highlight}</p>
                  <div className="cc-tags">
                    <span className="cc-tag">{c.custody}</span>
                    <span className="cc-tag">Best for: {c.best}</span>
                    {c.cashback !== "Varies" && <span className="cc-tag">Cashback: {c.cashback}</span>}
                    <span className="cc-tag">Market share: {c.share}</span>
                  </div>
                  {c.referral && (
                    <a href={c.referral} target="_blank" rel="noopener noreferrer" className="cc-referral">
                      {c.name === "KAST" ? "Get KAST — Up to 12% cashback →" : "Get RedotPay — Up to 6% cashback →"}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Key takeaways */}
          <section className="cc-section">
            <h2 className="cc-h2">Key Takeaways</h2>

            <div className="cc-insight">
              <p className="cc-insight-label">RedotPay is the undisputed leader</p>
              <p className="cc-insight-text">
                At <strong>$445M</strong> — 60% of all volume — RedotPay runs the category by a massive margin. Nearly 5x the next two cards combined. The growth is concentrated in <strong>Southeast Asia, Africa, and Latin America</strong> where stablecoins serve as primary savings vehicles.
              </p>
            </div>

            <div className="cc-insight">
              <p className="cc-insight-label">The challengers are growing faster</p>
              <p className="cc-insight-text">
                Tria (+47.1%), KAST (+25.5%), and Karta (+24.1%) all outpaced RedotPay's +7.4% growth rate. On a smaller base, but the direction is clear — the market is diversifying. <strong>KAST's $80M Series A and $100M ARR trajectory</strong> makes it the strongest challenger to watch.
              </p>
            </div>

            <div className="cc-insight">
              <p className="cc-insight-label">Non-custodial is winning on transactions</p>
              <p className="cc-insight-text">
                ether.fi processed <strong>842K transactions in April</strong> — more than KAST and RedotPay combined by transaction count. Lower average transaction size ($80–100 vs $700+ for custodial) but far more frequent usage. This is the consumer spending pattern, not the capital movement pattern.
              </p>
            </div>

            <div className="cc-insight" style={{ background: "rgba(248,113,113,0.04)", border: "1px solid rgba(248,113,113,0.15)" }}>
              <p className="cc-insight-label" style={{ color: "#f87171" }}>Ready is the only loser</p>
              <p className="cc-insight-text">
                Ready dropped <strong>-21.7%</strong> in May — the only card in the red. Despite strong features (0% FX, $800 free ATM withdrawals, metal card), it appears to be losing ground to higher-cashback competitors like KAST and ether.fi.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="cc-section">
            <h2 className="cc-h2">Frequently Asked Questions</h2>
            <div className="cc-faqs">
              {faqJsonLd.mainEntity.map((faq, i) => (
                <div key={i} className="cc-faq">
                  <h3>{faq.name}</h3>
                  <p>{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section className="cc-section">
            <h2 className="cc-h2" style={{ marginBottom: 16 }}>Related Guides</h2>
            <div className="cc-related">
              {[
                { slug: "early-crypto-projects-2026", title: "Best Early Crypto Projects to Farm in 2026" },
                { slug: "top-25-airdrop-picks-2026", title: "Top 25 Airdrop Picks for 2026" },
                { slug: "polymarket-airdrop-guide-2026", title: "Polymarket POLY Airdrop Guide 2026" },
                { slug: "how-to-build-onchain-activity-that-actually-matters", title: "How to Build On-Chain Activity That Actually Matters" },
              ].map((a) => (
                <Link key={a.slug} href={`/learn/${a.slug}`} className="cc-related-link">
                  <span>{a.title}</span><span>→</span>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="cc-cta">
            <h2>Track the Best Crypto Opportunities</h2>
            <p>3alamiy Web3 tracks 115+ active airdrops with full step-by-step guides. Stay ahead of the market.</p>
            <Link href="/airdrops" className="cc-cta-btn">Browse All Airdrops →</Link>
            <p className="cc-note">Last updated: June 2, 2026 · Data source: Paymentscan</p>
          </div>

        </div>
      </main>
    </>
  );
}
