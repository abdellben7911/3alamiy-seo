import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bitmine Down $8.9B on ETH, Strategy Down $7.6B on BTC — What It Means | 3alamiy Web3",
  description:
    "Tom Lee's Bitmine is down $8.9B on 5.4M ETH as ETH falls below $1,800. Michael Saylor's Strategy is down $7.6B on 843K BTC. Full breakdown of the corporate crypto treasury crisis.",
  alternates: { canonical: "https://www.3alamiyweb3.com/learn/bitmine-strategy-paper-losses-2026" },
  openGraph: {
    title: "Bitmine Down $8.9B on ETH, Strategy Down $7.6B on BTC — What It Means",
    description: "Tom Lee's Bitmine and Michael Saylor's Strategy are sitting on a combined $16.5B in unrealized crypto losses. Full breakdown.",
    url: "https://www.3alamiyweb3.com/learn/bitmine-strategy-paper-losses-2026",
    siteName: "3alamiy Web3",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitmine Down $8.9B on ETH, Strategy Down $7.6B on BTC",
    description: "Combined $16.5B in unrealized losses. Full breakdown of the corporate crypto treasury crisis.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Bitmine Down $8.9B on ETH, Strategy Down $7.6B on BTC — What It Means for Crypto",
  description: "Tom Lee's Bitmine and Michael Saylor's Strategy are sitting on a combined $16.5B in unrealized crypto losses as ETH falls below $1,800.",
  author: { "@type": "Organization", name: "3alamiy Web3" },
  publisher: { "@type": "Organization", name: "3alamiy Web3", url: "https://www.3alamiyweb3.com" },
  datePublished: "2026-06-03",
  dateModified: "2026-06-03",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.3alamiyweb3.com/learn/bitmine-strategy-paper-losses-2026" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much is Bitmine down on its ETH holdings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of June 3, 2026, Bitmine is down an estimated $8.9 billion on its 5,416,901 ETH holdings (worth approximately $10.03 billion at current prices). The company acquired its ETH at an average cost of around $3,476 per token — far above the current sub-$1,800 level.",
      },
    },
    {
      "@type": "Question",
      name: "How much is Michael Saylor's Strategy down on Bitcoin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Strategy (formerly MicroStrategy) is down approximately $7.6 billion on its 843,706 BTC holdings valued at $56.26 billion. The losses are unrealized — no Bitcoin has been sold.",
      },
    },
    {
      "@type": "Question",
      name: "Will Bitmine sell its ETH?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tom Lee has stated there is no pressure to sell. The firm earns approximately $164 million annually in ETH staking revenue, has no debt covenants, and maintains strong cash reserves. Roughly 2 million ETH are staked, creating withdrawal delays of days to weeks that also limit any rapid exit.",
      },
    },
    {
      "@type": "Question",
      name: "What is Bitmine's Alchemy of 5% strategy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bitmine's 'Alchemy of 5%' strategy aims to accumulate 5% of Ethereum's total circulating supply. At 5.4 million ETH, the firm controls roughly 4.5% and is 86% of the way toward its target. Tom Lee believes controlling this much ETH creates a compounding yield machine through staking rewards.",
      },
    },
    {
      "@type": "Question",
      name: "Are these losses real or just paper losses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "These are unrealized paper losses — neither Bitmine nor Strategy has sold assets. However, under FASB fair value accounting rules (ASU 2023-08), unrealized losses flow directly through to GAAP earnings, causing multi-billion dollar quarterly losses on paper even without any asset sales.",
      },
    },
  ],
};

export default function BitmineLossesArticle() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <style>{`
        .bl * { box-sizing: border-box; }
        .bl { background: #060A12; min-height: 100vh; color: #fff; font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif; }
        .bl-wrap { max-width: 800px; margin: 0 auto; padding: 48px 20px 80px; }
        .bl-bc { font-size: 13px; color: rgba(255,255,255,0.25); margin-bottom: 32px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .bl-bc a { color: rgba(255,255,255,0.25); text-decoration: none; }
        .bl-badge { font-size: 11px; font-weight: 600; letter-spacing: 0.08em; padding: 3px 10px; border-radius: 99px; text-transform: uppercase; margin-right: 8px; }
        .bl-h1 { font-size: clamp(22px, 4.5vw, 34px); font-weight: 700; line-height: 1.2; margin: 16px 0; color: #fff; }
        .bl-h1 span { color: #f87171; }
        .bl-sub { font-size: 16px; color: rgba(255,255,255,0.45); line-height: 1.7; margin-bottom: 12px; }
        .bl-meta { font-size: 13px; color: rgba(255,255,255,0.25); margin-bottom: 16px; }
        .bl-meta span { color: rgba(255,255,255,0.45); }
        .bl-byline { display: flex; align-items: center; gap: 10px; margin-bottom: 40px; padding: 12px 16px; background: rgba(124,245,192,0.04); border: 1px solid rgba(124,245,192,0.1); border-radius: 10px; }
        .bl-byline-avatar { width: 32px; height: 32px; border-radius: 50%; background: rgba(124,245,192,0.15); border: 1px solid rgba(124,245,192,0.25); display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; }
        .bl-byline-name { font-size: 13px; font-weight: 700; color: #fff; }
        .bl-byline-sub { font-size: 11px; color: rgba(255,255,255,0.35); }
        .bl-byline-sub a { color: #7CF5C0; text-decoration: none; }

        /* Scoreboard */
        .bl-board { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 48px; }
        .bl-card { border-radius: 16px; padding: 22px; }
        .bl-card-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 12px; }
        .bl-card-name { font-size: 17px; font-weight: 700; color: #fff; margin-bottom: 4px; }
        .bl-card-ticker { font-size: 11px; color: rgba(255,255,255,0.35); margin-bottom: 16px; }
        .bl-card-loss { font-size: 28px; font-weight: 900; letter-spacing: -0.03em; margin-bottom: 4px; }
        .bl-card-desc { font-size: 12px; color: rgba(255,255,255,0.4); line-height: 1.6; }
        .bl-card-val { font-size: 13px; font-weight: 600; margin-top: 10px; }

        /* Section */
        .bl-section { margin-bottom: 52px; }
        .bl-h2 { font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 12px; }
        .bl-p { font-size: 15px; color: rgba(255,255,255,0.45); line-height: 1.8; margin-bottom: 16px; }
        .bl-p strong { color: #fff; }

        /* Insight boxes */
        .bl-box { border-radius: 12px; padding: 16px 18px; margin-bottom: 16px; }
        .bl-box-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px; }
        .bl-box-text { font-size: 13px; color: rgba(255,255,255,0.5); line-height: 1.7; margin: 0; }
        .bl-box-text strong { color: #fff; }

        /* Comparison table */
        .bl-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 13px; }
        .bl-table th { background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.35); font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; padding: 10px 14px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .bl-table td { padding: 12px 14px; border-bottom: 1px solid rgba(255,255,255,0.04); color: rgba(255,255,255,0.55); }
        .bl-table td:first-child { color: #fff; font-weight: 600; }
        .bl-table tr:last-child td { border-bottom: none; }

        /* FAQ */
        .bl-faqs { display: flex; flex-direction: column; gap: 10px; }
        .bl-faq { background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 18px 20px; }
        .bl-faq h3 { font-weight: 600; color: #fff; font-size: 14px; margin-bottom: 8px; }
        .bl-faq p { color: rgba(255,255,255,0.45); font-size: 13px; margin: 0; line-height: 1.7; }

        /* Related */
        .bl-related { display: flex; flex-direction: column; gap: 8px; }
        .bl-related-link { display: flex; align-items: center; justify-content: space-between; background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; padding: 13px 16px; text-decoration: none; color: rgba(255,255,255,0.6); font-size: 13px; font-weight: 500; }
        .bl-related-link span:last-child { color: #7CF5C0; font-size: 12px; }

        /* CTA */
        .bl-cta { background: rgba(124,245,192,0.06); border: 1px solid rgba(124,245,192,0.18); border-radius: 16px; padding: 40px 28px; text-align: center; }
        .bl-cta h2 { font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 10px; }
        .bl-cta p { font-size: 14px; color: rgba(255,255,255,0.45); line-height: 1.7; max-width: 420px; margin: 0 auto 24px; }
        .bl-cta-btn { display: inline-flex; align-items: center; gap: 6px; background: #7CF5C0; color: #060A12; font-weight: 700; font-size: 14px; padding: 12px 28px; border-radius: 99px; text-decoration: none; }
        .bl-note { font-size: 11px; color: rgba(255,255,255,0.18); margin-top: 16px; }

        @media (max-width: 600px) {
          .bl-wrap { padding: 32px 16px 64px; }
          .bl-board { grid-template-columns: 1fr; }
          .bl-card-loss { font-size: 22px; }
          .bl-cta { padding: 28px 16px; }
        }
      `}</style>

      <main className="bl">
        <div className="bl-wrap">

          {/* Breadcrumb */}
          <nav className="bl-bc">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/learn">Learn</Link><span>/</span>
            <span style={{ color: "rgba(255,255,255,0.45)" }}>Bitmine & Strategy Losses 2026</span>
          </nav>

          {/* Header */}
          <div>
            <span className="bl-badge" style={{ background: "rgba(248,113,113,0.1)", color: "#f87171", border: "1px solid rgba(248,113,113,0.2)" }}>Breaking</span>
            <span className="bl-badge" style={{ background: "rgba(124,245,192,0.1)", color: "#7CF5C0", border: "1px solid rgba(124,245,192,0.18)" }}>June 3, 2026</span>
            <h1 className="bl-h1">Bitmine Down $8.9B on ETH. Strategy Down $7.6B on BTC. <span>Here's What's Actually Happening.</span></h1>
            <p className="bl-sub">Two of the biggest corporate crypto treasury bets in history are sitting on a combined $16.5 billion in unrealized losses. Here is the full breakdown — what the numbers mean, why neither is selling, and what happens next.</p>
            <p className="bl-meta">By <span>3alamiy Team</span> · June 3, 2026 · 7 min read</p>
            <div className="bl-byline">
              <div className="bl-byline-avatar">🪂</div>
              <div>
                <div className="bl-byline-name">3alamiy Team</div>
                <div className="bl-byline-sub">Web3 Research · <a href="https://www.3alamiyweb3.com">3alamiyweb3.com</a></div>
              </div>
            </div>
          </div>

          {/* Scoreboard */}
          <div className="bl-board">
            <div className="bl-card" style={{ background: "rgba(98,126,234,0.06)", border: "1px solid rgba(98,126,234,0.2)" }}>
              <div className="bl-card-label" style={{ color: "#818cf8" }}>🔵 Ethereum Treasury</div>
              <div className="bl-card-name">Bitmine (BMNR)</div>
              <div className="bl-card-ticker">Tom Lee · @fundstrat</div>
              <div className="bl-card-loss" style={{ color: "#f87171" }}>-$8.9B</div>
              <div className="bl-card-desc">5,416,901 ETH held</div>
              <div className="bl-card-val" style={{ color: "rgba(255,255,255,0.5)" }}>Current value: <strong style={{ color: "#fff" }}>~$10.03B</strong></div>
            </div>
            <div className="bl-card" style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.2)" }}>
              <div className="bl-card-label" style={{ color: "#f59e0b" }}>🟠 Bitcoin Treasury</div>
              <div className="bl-card-name">Strategy (MSTR)</div>
              <div className="bl-card-ticker">Michael Saylor · @saylor</div>
              <div className="bl-card-loss" style={{ color: "#f87171" }}>-$7.6B</div>
              <div className="bl-card-desc">843,706 BTC held</div>
              <div className="bl-card-val" style={{ color: "rgba(255,255,255,0.5)" }}>Current value: <strong style={{ color: "#fff" }}>~$56.26B</strong></div>
            </div>
          </div>

          {/* Context */}
          <section className="bl-section">
            <h2 className="bl-h2">What's Actually Happening</h2>
            <p className="bl-p">
              Two of the most watched corporate crypto bets in history are simultaneously underwater. <strong>Bitmine</strong> — Tom Lee's Ethereum treasury vehicle — is sitting on an estimated $8.9 billion in unrealized losses as ETH fell below $1,800 this week. <strong>Strategy</strong> — Michael Saylor's Bitcoin treasury — is down $7.6 billion as BTC remains well below its all-time highs.
            </p>
            <p className="bl-p">
              Combined, that's <strong>$16.5 billion in paper losses</strong> across the two largest corporate crypto treasury positions in history. Neither company has sold. Both are doubling down.
            </p>

            <div className="bl-box" style={{ background: "rgba(248,113,113,0.05)", border: "1px solid rgba(248,113,113,0.15)" }}>
              <p className="bl-box-label" style={{ color: "#f87171" }}>Important Context</p>
              <p className="bl-box-text">
                These are <strong>unrealized paper losses</strong> — no assets have been sold. However, under FASB fair value accounting rules (ASU 2023-08), unrealized losses flow directly through to GAAP earnings. Bitmine reported a <strong>$3.8 billion quarterly loss</strong> in one recent period — entirely from mark-to-market accounting, not actual cash losses.
              </p>
            </div>
          </section>

          {/* Bitmine deep dive */}
          <section className="bl-section">
            <h2 className="bl-h2">Bitmine: The ETH Bet That Keeps Growing</h2>
            <p className="bl-p">
              Bitmine started as a crypto mining company and pivoted to become the world's largest corporate Ethereum holder in 2025. Under Tom Lee's leadership, it has amassed <strong>5,416,901 ETH</strong> — roughly 4.5% of Ethereum's entire circulating supply — at an average cost of approximately $3,476 per token.
            </p>
            <p className="bl-p">
              With ETH now below $1,800, that position is deeply underwater. But Lee has consistently defended the strategy, calling paper losses "by design" and comparing Bitmine to an ETH index product that tracks the asset through full market cycles.
            </p>

            <div className="bl-box" style={{ background: "rgba(129,140,248,0.05)", border: "1px solid rgba(129,140,248,0.15)" }}>
              <p className="bl-box-label" style={{ color: "#818cf8" }}>The Alchemy of 5% Strategy</p>
              <p className="bl-box-text">
                Bitmine's stated goal is to control <strong>5% of Ethereum's circulating supply</strong>. At 4.5% currently, the firm is 86% of the way there. Lee believes that level of control, combined with staking yield, creates a compounding ETH accumulation machine. The firm earns approximately <strong>$164 million per year</strong> in staking rewards — yield that gets reinvested into more ETH.
              </p>
            </div>

            <p className="bl-p">
              Why not sell? Two reasons. First, roughly <strong>2 million ETH are staked</strong> — those can't be withdrawn instantly. Ethereum's exit queue could delay withdrawals for days or weeks, meaning a rapid exit isn't even possible. Second, any announcement of a sale would trigger massive front-running, cratering ETH prices and making the exit far more painful.
            </p>
          </section>

          {/* Strategy comparison */}
          <section className="bl-section">
            <h2 className="bl-h2">Strategy vs Bitmine — Two Very Different Risk Profiles</h2>

            <div style={{ overflowX: "auto", borderRadius: 12, border: "1px solid rgba(255,255,255,0.06)" }}>
              <table className="bl-table">
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Strategy (BTC)</th>
                    <th>Bitmine (ETH)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Holdings</td><td>843,706 BTC</td><td>5,416,901 ETH</td></tr>
                  <tr><td>Current Value</td><td>~$56.26B</td><td>~$10.03B</td></tr>
                  <tr><td>Paper Loss</td><td>~$7.6B</td><td>~$8.9B</td></tr>
                  <tr><td>% of Supply</td><td>~4% of BTC supply</td><td>~4.5% of ETH supply</td></tr>
                  <tr><td>Yield</td><td>None (BTC doesn't stake)</td><td>~$164M/yr staking</td></tr>
                  <tr><td>Debt</td><td>Convertible notes outstanding</td><td>No debt covenants</td></tr>
                  <tr><td>Stock decline</td><td>Significant from peak</td><td>-28% since May, -88% from 2025 high</td></tr>
                </tbody>
              </table>
            </div>

            <p className="bl-p">
              Strategy's position is larger in absolute terms but Bitcoin's liquidity is far superior to Ethereum — Saylor could theoretically exit faster. Bitmine's staked ETH creates both a yield advantage and a liquidity trap. The $164 million in annual staking income is meaningful, but it also means the exit is slower and more complex.
            </p>
          </section>

          {/* What it means */}
          <section className="bl-section">
            <h2 className="bl-h2">What This Means for the Crypto Market</h2>

            <div className="bl-box" style={{ background: "rgba(124,245,192,0.04)", border: "1px solid rgba(124,245,192,0.15)" }}>
              <p className="bl-box-label" style={{ color: "#7CF5C0" }}>The Bull Case</p>
              <p className="bl-box-text">
                Both companies holding through paper losses is actually <strong>bullish for the market</strong>. Neither is selling into weakness. Combined they hold hundreds of billions in crypto off the market. If prices recover, these positions flip from embarrassing losses to massive institutional wins — and the narrative shifts overnight.
              </p>
            </div>

            <div className="bl-box" style={{ background: "rgba(245,158,11,0.04)", border: "1px solid rgba(245,158,11,0.15)" }}>
              <p className="bl-box-label" style={{ color: "#f59e0b" }}>The Risk Case</p>
              <p className="bl-box-text">
                Strategy has convertible notes outstanding — if BTC falls further, debt covenants become a concern. Bitmine's BMNR stock is down 88% from its 2025 high. If either company faces forced selling pressure from creditors or shareholders, the resulting supply shock could push prices significantly lower.
              </p>
            </div>

            <div className="bl-box" style={{ background: "rgba(248,113,113,0.04)", border: "1px solid rgba(248,113,113,0.15)" }}>
              <p className="bl-box-label" style={{ color: "#f87171" }}>The Accounting Reality</p>
              <p className="bl-box-text">
                Under FASB ASU 2023-08 fair value rules, these paper losses hit GAAP earnings every quarter. Bitmine reported a <strong>$3.8 billion quarterly loss</strong> in one period purely from mark-to-market adjustments. This makes the financials look catastrophic even though no actual losses are realized. Retail investors unfamiliar with these accounting rules may panic sell the stocks — creating more volatility.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="bl-section">
            <h2 className="bl-h2">Frequently Asked Questions</h2>
            <div className="bl-faqs">
              {faqJsonLd.mainEntity.map((faq, i) => (
                <div key={i} className="bl-faq">
                  <h3>{faq.name}</h3>
                  <p>{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section className="bl-section">
            <h2 className="bl-h2" style={{ marginBottom: 16 }}>Related Guides</h2>
            <div className="bl-related">
              {[
                { slug: "polymarket-willo2-500k-loss", title: "Did Polymarket Scam Willo2 — or Just Greed? Full Breakdown" },
                { slug: "early-crypto-projects-2026", title: "Best Early Crypto Projects to Farm in 2026" },
                { slug: "top-25-airdrop-picks-2026", title: "Top 25 Airdrop Picks for 2026" },
                { slug: "how-to-avoid-crypto-airdrop-scams-2026", title: "How to Avoid Crypto Airdrop Scams 2026" },
              ].map((a) => (
                <Link key={a.slug} href={`/learn/${a.slug}`} className="bl-related-link">
                  <span>{a.title}</span><span>→</span>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bl-cta">
            <h2>Track the Best Crypto Opportunities</h2>
            <p>While Bitmine and Strategy hold through losses, smart farmers are earning free crypto through airdrops. 115+ verified guides, updated daily.</p>
            <Link href="/airdrops" className="bl-cta-btn">Browse All Airdrops →</Link>
            <p className="bl-note">Last updated: June 3, 2026 · Data source: DropsTab, CoinDesk</p>
          </div>

        </div>
      </main>
    </>
  );
}
