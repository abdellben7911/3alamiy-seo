import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Michael Saylor Lost $6.8B in One Day in 2000 — Will History Repeat With Bitcoin? | 3alamiy Web3",
  description:
    "In 2000, Michael Saylor lost $6.8 billion in a single day during the dot-com crash. MicroStrategy was charged with SEC fraud. Now he holds 843,706 BTC. Here's the full story.",
  alternates: { canonical: "https://www.3alamiyweb3.com/learn/michael-saylor-2000-crash-bitcoin-history" },
  openGraph: {
    title: "Michael Saylor Lost $6.8B in One Day in 2000 — Will History Repeat With Bitcoin?",
    description: "In 2000, Saylor lost $6.8B in a day, faced SEC fraud charges, and nearly went bankrupt. Now he holds $56B in BTC. Full story.",
    url: "https://www.3alamiyweb3.com/learn/michael-saylor-2000-crash-bitcoin-history",
    siteName: "3alamiy Web3",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Saylor Lost $6.8B in One Day in 2000 — Will History Repeat With Bitcoin?",
    description: "In 2000, Saylor lost $6.8B in a day and faced SEC fraud charges. Now he holds 843K BTC. Full story.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Michael Saylor Lost $6.8B in One Day in 2000 — Will History Repeat With Bitcoin?",
  description: "In 2000, Michael Saylor lost $6.8 billion in a single day during the dot-com crash. MicroStrategy faced SEC fraud charges. Now he holds 843,706 BTC.",
  author: { "@type": "Organization", name: "3alamiy Web3" },
  publisher: { "@type": "Organization", name: "3alamiy Web3", url: "https://www.3alamiyweb3.com" },
  datePublished: "2026-06-03",
  dateModified: "2026-06-03",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.3alamiyweb3.com/learn/michael-saylor-2000-crash-bitcoin-history" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much did Michael Saylor lose in the dot-com crash?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Michael Saylor lost over $6.8 billion in personal wealth in a single day on March 10, 2000, when the dot-com bubble burst. MicroStrategy's stock fell from $3,130 to around $86 per share within months. It was one of the largest single-day personal wealth destructions in history.",
      },
    },
    {
      "@type": "Question",
      name: "Was Michael Saylor charged with fraud?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. In 2000, the SEC charged MicroStrategy and Michael Saylor with accounting fraud — specifically restating financial results that had falsely shown profits when the company was actually operating at a loss. MicroStrategy paid an $11 million settlement. Saylor personally paid $8.3 million. No criminal charges were filed.",
      },
    },
    {
      "@type": "Question",
      name: "Did Michael Saylor used to be against Bitcoin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. In 2013, Saylor tweeted: 'Bitcoin's days are numbered. It seems like just a matter of time before it suffers the same fate as online gambling.' He completely reversed this position in 2020 when MicroStrategy began purchasing Bitcoin as a treasury reserve asset.",
      },
    },
    {
      "@type": "Question",
      name: "How much Bitcoin does MicroStrategy own in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of June 2026, MicroStrategy (now renamed Strategy) holds 843,706 BTC valued at approximately $56.26 billion. The position is currently showing unrealized losses of approximately $7.6 billion as Bitcoin trades below Saylor's average purchase price.",
      },
    },
    {
      "@type": "Question",
      name: "Could MicroStrategy go bankrupt over Bitcoin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is possible but not imminent. Strategy has convertible notes outstanding that could create pressure if Bitcoin falls significantly further. However, the company has been proactive about refinancing debt and Saylor has consistently stated there are no forced selling mechanisms. A prolonged bear market below $40,000 BTC would create serious stress on the balance sheet.",
      },
    },
  ],
};

const timeline = [
  {
    year: "1989",
    event: "Saylor founds MicroStrategy",
    detail: "At age 24, Saylor co-founds MicroStrategy with Sanju Bansal. The company builds business intelligence software. It becomes one of the fastest-growing tech companies of the 1990s.",
    color: "#7CF5C0",
    icon: "🚀",
  },
  {
    year: "1998–1999",
    event: "MicroStrategy goes public — stock explodes",
    detail: "MSTR goes public in 1998. During the dot-com bubble, the stock rises from $7 to over $3,130 per share. Saylor becomes a billionaire multiple times over on paper. He is celebrated as one of the smartest tech executives in America.",
    color: "#7CF5C0",
    icon: "📈",
  },
  {
    year: "March 2000",
    event: "SEC fraud charges — $6.8B lost in one day",
    detail: "The SEC charges MicroStrategy with accounting fraud — the company had been booking revenue before it was earned, reporting profits while actually losing money. The stock collapses from $3,130 to $86. Saylor loses $6.8 billion in personal wealth in a single day — one of the largest single-day personal wealth destructions in history.",
    color: "#f87171",
    icon: "📉",
  },
  {
    year: "2000",
    event: "Settlement — no bankruptcy, no prison",
    detail: "MicroStrategy pays an $11 million SEC settlement. Saylor personally pays $8.3 million. The company avoids bankruptcy through asset sales and restructuring. Saylor retains his position as CEO — unusual for an SEC fraud defendant.",
    color: "#f59e0b",
    icon: "⚖️",
  },
  {
    year: "2013",
    event: "Saylor calls Bitcoin 'a matter of time before it fails'",
    detail: "Saylor tweets: 'Bitcoin's days are numbered. It seems like just a matter of time before it suffers the same fate as online gambling.' He is publicly skeptical of all cryptocurrency.",
    color: "#f87171",
    icon: "🐦",
  },
  {
    year: "2020",
    event: "MicroStrategy buys its first Bitcoin",
    detail: "Complete reversal. Saylor announces MicroStrategy will use Bitcoin as its primary treasury reserve asset. The company purchases 21,454 BTC for $250 million in August 2020. Saylor becomes Bitcoin's most vocal corporate advocate.",
    color: "#f59e0b",
    icon: "₿",
  },
  {
    year: "2021–2023",
    event: "Accumulation continues through the bear market",
    detail: "MicroStrategy keeps buying Bitcoin through the 2022 crash — when BTC fell from $69,000 to $16,000. The company uses debt financing to buy more BTC even as its position goes deeply underwater. Critics call it reckless. Saylor calls it conviction.",
    color: "#818cf8",
    icon: "💎",
  },
  {
    year: "2024",
    event: "Company renamed to Strategy",
    detail: "MicroStrategy rebrands to Strategy — a name that reflects its singular mission: accumulate Bitcoin. The stock surges 500%+ as Bitcoin reaches new all-time highs. Saylor's bet appears to be paying off.",
    color: "#7CF5C0",
    icon: "🏆",
  },
  {
    year: "June 2026",
    event: "843,706 BTC — $7.6B underwater",
    detail: "Strategy holds 843,706 BTC valued at ~$56.26 billion, with unrealized losses of approximately $7.6 billion as Bitcoin trades below Saylor's average cost basis. The position is the largest corporate Bitcoin holding in history. The question: is this 2000 all over again — or is it different this time?",
    color: "#f87171",
    icon: "❓",
  },
];

export default function SaylorHistoryArticle() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <style>{`
        .ms * { box-sizing: border-box; }
        .ms { background: #060A12; min-height: 100vh; color: #fff; font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif; }
        .ms-wrap { max-width: 800px; margin: 0 auto; padding: 48px 20px 80px; }
        .ms-bc { font-size: 13px; color: rgba(255,255,255,0.25); margin-bottom: 32px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .ms-bc a { color: rgba(255,255,255,0.25); text-decoration: none; }
        .ms-badge { font-size: 11px; font-weight: 600; letter-spacing: 0.08em; padding: 3px 10px; border-radius: 99px; text-transform: uppercase; margin-right: 8px; }
        .ms-h1 { font-size: clamp(22px, 4.5vw, 34px); font-weight: 700; line-height: 1.2; margin: 16px 0; color: #fff; }
        .ms-h1 span { color: #f87171; }
        .ms-sub { font-size: 16px; color: rgba(255,255,255,0.45); line-height: 1.7; margin-bottom: 12px; }
        .ms-meta { font-size: 13px; color: rgba(255,255,255,0.25); margin-bottom: 16px; }
        .ms-meta span { color: rgba(255,255,255,0.45); }
        .ms-byline { display: flex; align-items: center; gap: 10px; margin-bottom: 40px; padding: 12px 16px; background: rgba(124,245,192,0.04); border: 1px solid rgba(124,245,192,0.1); border-radius: 10px; }
        .ms-byline-avatar { width: 32px; height: 32px; border-radius: 50%; background: rgba(124,245,192,0.15); border: 1px solid rgba(124,245,192,0.25); display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; }
        .ms-byline-name { font-size: 13px; font-weight: 700; color: #fff; }
        .ms-byline-sub { font-size: 11px; color: rgba(255,255,255,0.35); }
        .ms-byline-sub a { color: #7CF5C0; text-decoration: none; }

        /* Stats */
        .ms-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; overflow: hidden; margin-bottom: 48px; }
        .ms-stat { background: #0D1221; padding: 18px 16px; text-align: center; }
        .ms-stat-val { font-size: 20px; font-weight: 700; margin-bottom: 4px; }
        .ms-stat-lbl { font-size: 11px; color: rgba(255,255,255,0.25); text-transform: uppercase; letter-spacing: 0.06em; font-weight: 600; }

        /* Section */
        .ms-section { margin-bottom: 52px; }
        .ms-h2 { font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 12px; }
        .ms-p { font-size: 15px; color: rgba(255,255,255,0.45); line-height: 1.8; margin-bottom: 16px; }
        .ms-p strong { color: #fff; }

        /* Timeline */
        .ms-timeline { display: flex; flex-direction: column; gap: 0; }
        .ms-tl-item { display: flex; gap: 16px; padding-bottom: 24px; position: relative; }
        .ms-tl-item:last-child { padding-bottom: 0; }
        .ms-tl-left { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; width: 44px; }
        .ms-tl-icon { width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0; border: 1px solid; }
        .ms-tl-line { width: 1px; flex: 1; background: rgba(255,255,255,0.06); margin-top: 6px; }
        .ms-tl-item:last-child .ms-tl-line { display: none; }
        .ms-tl-content { flex: 1; background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 14px 16px; margin-top: -2px; }
        .ms-tl-year { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 4px; }
        .ms-tl-event { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 6px; }
        .ms-tl-detail { font-size: 12px; color: rgba(255,255,255,0.4); line-height: 1.7; }

        /* Quote */
        .ms-quote { border-left: 3px solid rgba(248,113,113,0.4); padding: 14px 18px; margin: 24px 0; background: rgba(248,113,113,0.04); border-radius: 0 10px 10px 0; }
        .ms-quote-text { font-size: 15px; color: rgba(255,255,255,0.6); line-height: 1.75; font-style: italic; margin: 0 0 8px; }
        .ms-quote-attr { font-size: 12px; color: rgba(255,255,255,0.3); }

        /* Boxes */
        .ms-box { border-radius: 12px; padding: 16px 18px; margin-bottom: 16px; }
        .ms-box-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px; }
        .ms-box-text { font-size: 13px; color: rgba(255,255,255,0.5); line-height: 1.7; margin: 0; }
        .ms-box-text strong { color: #fff; }

        /* FAQ */
        .ms-faqs { display: flex; flex-direction: column; gap: 10px; }
        .ms-faq { background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 18px 20px; }
        .ms-faq h3 { font-weight: 600; color: #fff; font-size: 14px; margin-bottom: 8px; }
        .ms-faq p { color: rgba(255,255,255,0.45); font-size: 13px; margin: 0; line-height: 1.7; }

        /* Related */
        .ms-related { display: flex; flex-direction: column; gap: 8px; }
        .ms-related-link { display: flex; align-items: center; justify-content: space-between; background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; padding: 13px 16px; text-decoration: none; color: rgba(255,255,255,0.6); font-size: 13px; font-weight: 500; }
        .ms-related-link span:last-child { color: #7CF5C0; font-size: 12px; }

        /* CTA */
        .ms-cta { background: rgba(124,245,192,0.06); border: 1px solid rgba(124,245,192,0.18); border-radius: 16px; padding: 40px 28px; text-align: center; }
        .ms-cta h2 { font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 10px; }
        .ms-cta p { font-size: 14px; color: rgba(255,255,255,0.45); line-height: 1.7; max-width: 420px; margin: 0 auto 24px; }
        .ms-cta-btn { display: inline-flex; align-items: center; gap: 6px; background: #7CF5C0; color: #060A12; font-weight: 700; font-size: 14px; padding: 12px 28px; border-radius: 99px; text-decoration: none; }
        .ms-note { font-size: 11px; color: rgba(255,255,255,0.18); margin-top: 16px; }

        @media (max-width: 600px) {
          .ms-wrap { padding: 32px 16px 64px; }
          .ms-stats { grid-template-columns: repeat(3, 1fr); }
          .ms-stat-val { font-size: 16px; }
          .ms-cta { padding: 28px 16px; }
          .ms-tl-left { width: 32px; }
          .ms-tl-icon { width: 28px; height: 28px; font-size: 13px; }
        }
      `}</style>

      <main className="ms">
        <div className="ms-wrap">

          {/* Breadcrumb */}
          <nav className="ms-bc">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/learn">Learn</Link><span>/</span>
            <span style={{ color: "rgba(255,255,255,0.45)" }}>Saylor 2000 Crash — History</span>
          </nav>

          {/* Header */}
          <div>
            <span className="ms-badge" style={{ background: "rgba(248,113,113,0.1)", color: "#f87171", border: "1px solid rgba(248,113,113,0.2)" }}>History</span>
            <span className="ms-badge" style={{ background: "rgba(245,158,11,0.1)", color: "#f59e0b", border: "1px solid rgba(245,158,11,0.2)" }}>Bitcoin</span>
            <h1 className="ms-h1">In 2000, Michael Saylor Lost $6.8B in One Day. <span>Will History Repeat With Bitcoin?</span></h1>
            <p className="ms-sub">Before Saylor became Bitcoin's biggest corporate advocate, he was the dot-com era's biggest single-day loser — facing SEC fraud charges and near-bankruptcy. Here is the full story, and what it means for his $56 billion Bitcoin bet.</p>
            <p className="ms-meta">By <span>3alamiy Team</span> · June 3, 2026 · 8 min read</p>
            <div className="ms-byline">
              <div className="ms-byline-avatar">🪂</div>
              <div>
                <div className="ms-byline-name">3alamiy Team</div>
                <div className="ms-byline-sub">Web3 Research · <a href="https://www.3alamiyweb3.com">3alamiyweb3.com</a></div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="ms-stats">
            {[
              { val: "$6.8B", lbl: "Lost in One Day (2000)", color: "#f87171" },
              { val: "$56.26B", lbl: "BTC Holdings (2026)", color: "#f59e0b" },
              { val: "$7.6B", lbl: "Current Paper Loss", color: "#f87171" },
            ].map((s) => (
              <div key={s.lbl} className="ms-stat">
                <div className="ms-stat-val" style={{ color: s.color }}>{s.val}</div>
                <div className="ms-stat-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>

          {/* Intro */}
          <section className="ms-section">
            <h2 className="ms-h2">The Man Who Lost Everything — Then Bet It All Again</h2>
            <p className="ms-p">
              Most people know Michael Saylor as Bitcoin's most vocal corporate champion. What fewer people know is that Saylor lived through a collapse that makes his current Bitcoin losses look minor.
            </p>
            <p className="ms-p">
              In March 2000, Saylor lost <strong>$6.8 billion in personal wealth in a single day</strong> — one of the largest single-day personal fortune destructions in financial history. MicroStrategy was charged with SEC accounting fraud. The company nearly went bankrupt. And Saylor — at the time one of the richest men in America — watched it all collapse.
            </p>
            <p className="ms-p">
              Twenty-six years later, he is doing it again. Different asset, same conviction, same all-in approach. The question the entire crypto market is asking right now: is this 2000 all over again?
            </p>
          </section>

          {/* Timeline */}
          <section className="ms-section">
            <h2 className="ms-h2">The Full Timeline — From Dot-Com King to Bitcoin Maximalist</h2>
            <div className="ms-timeline">
              {timeline.map((t, i) => (
                <div key={i} className="ms-tl-item">
                  <div className="ms-tl-left">
                    <div className="ms-tl-icon" style={{ background: `${t.color}12`, borderColor: `${t.color}30` }}>{t.icon}</div>
                    <div className="ms-tl-line" />
                  </div>
                  <div className="ms-tl-content">
                    <div className="ms-tl-year" style={{ color: t.color }}>{t.year}</div>
                    <div className="ms-tl-event">{t.event}</div>
                    <div className="ms-tl-detail">{t.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* The fraud section */}
          <section className="ms-section">
            <h2 className="ms-h2">The SEC Fraud — What Actually Happened</h2>
            <p className="ms-p">
              The SEC investigation found that MicroStrategy had been reporting profits while actually operating at a loss. The company had improperly booked revenue from contracts before the work was completed — a classic accounting manipulation designed to make the company look more profitable to investors.
            </p>
            <p className="ms-p">
              This was not a rounding error. The SEC found that MicroStrategy overstated its cumulative revenue by <strong>$66 million</strong> over three years. The restatement turned reported profits into reported losses — and when investors found out, the stock collapsed.
            </p>

            <div className="ms-box" style={{ background: "rgba(248,113,113,0.05)", border: "1px solid rgba(248,113,113,0.15)" }}>
              <p className="ms-box-label" style={{ color: "#f87171" }}>The Settlement</p>
              <p className="ms-box-text">
                MicroStrategy paid <strong>$11 million</strong> to settle SEC charges. Saylor personally paid <strong>$8.3 million</strong>. No criminal charges were filed. Saylor did not go to prison. He retained his position as CEO — which is remarkable given the scale of the restatement and the market damage caused.
              </p>
            </div>
          </section>

          {/* The Bitcoin reversal */}
          <section className="ms-section">
            <h2 className="ms-h2">From Bitcoin Critic to Bitcoin Maximalist</h2>

            <div className="ms-quote">
              <p className="ms-quote-text">"Bitcoin's days are numbered. It seems like just a matter of time before it suffers the same fate as online gambling."</p>
              <p className="ms-quote-attr">— Michael Saylor, Twitter, 2013</p>
            </div>

            <p className="ms-p">
              Seven years after this tweet, Saylor did a complete reversal. In August 2020, he announced that MicroStrategy had purchased 21,454 BTC for $250 million. He described Bitcoin as "digital gold" — a superior store of value that would protect against currency debasement.
            </p>
            <p className="ms-p">
              The reversal was total. Saylor became arguably the most vocal Bitcoin advocate in corporate history — giving hundreds of interviews, writing long-form essays on Bitcoin, and continuing to buy more BTC even as prices fell.
            </p>

            <div className="ms-box" style={{ background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.15)" }}>
              <p className="ms-box-label" style={{ color: "#f59e0b" }}>Why the Reversal?</p>
              <p className="ms-box-text">
                Saylor has explained that the COVID-19 pandemic and the Federal Reserve's money printing in 2020 changed his view. He became convinced that fiat currencies were being debased at an accelerating rate and that Bitcoin — with its fixed 21 million supply — was the only reliable store of value. The man who compared Bitcoin to gambling now calls it <strong>"the world's most certain asset."</strong>
              </p>
            </div>
          </section>

          {/* Will history repeat */}
          <section className="ms-section">
            <h2 className="ms-h2">Will History Repeat? The Honest Analysis</h2>

            <div className="ms-box" style={{ background: "rgba(124,245,192,0.04)", border: "1px solid rgba(124,245,192,0.15)" }}>
              <p className="ms-box-label" style={{ color: "#7CF5C0" }}>Why It's Different This Time</p>
              <p className="ms-box-text">
                In 2000, MicroStrategy's stock crashed because of <strong>accounting fraud</strong> — manufactured numbers that collapsed when reality was revealed. Strategy's Bitcoin position is the opposite of fraud — it is completely transparent. Every BTC purchase is publicly announced. The losses are real-time on-chain data. There is no accounting manipulation. The risk is market risk, not fraud risk.
              </p>
            </div>

            <div className="ms-box" style={{ background: "rgba(248,113,113,0.04)", border: "1px solid rgba(248,113,113,0.15)" }}>
              <p className="ms-box-label" style={{ color: "#f87171" }}>Why It Could Be Similar</p>
              <p className="ms-box-text">
                The pattern is the same: <strong>massive all-in bet, debt financing, unwillingness to cut losses, absolute conviction</strong>. In 2000, Saylor's conviction was that internet software would dominate business forever — he was right about the thesis but wrong about the timing and the valuation. The same thing could happen with Bitcoin. The technology could be correct but the price paid could be too high, at the wrong time.
              </p>
            </div>

            <div className="ms-box" style={{ background: "rgba(129,140,248,0.04)", border: "1px solid rgba(129,140,248,0.15)" }}>
              <p className="ms-box-label" style={{ color: "#818cf8" }}>The Real Risk</p>
              <p className="ms-box-text">
                Strategy has convertible notes outstanding. If Bitcoin falls to <strong>$40,000 or below</strong> for an extended period, debt refinancing becomes difficult and creditors could apply pressure. A forced selling event from Strategy would be catastrophic for Bitcoin's price — creating a self-reinforcing spiral. This is the scenario the market fears most.
              </p>
            </div>

            <p className="ms-p">
              Saylor survived 2000. He paid the fine, restructured the company, and rebuilt. He has said publicly that he learned from the dot-com experience that you have to hold through volatility with conviction. Whether that lesson applies equally to Bitcoin is the question that $56 billion is riding on.
            </p>
          </section>

          {/* FAQ */}
          <section className="ms-section">
            <h2 className="ms-h2">Frequently Asked Questions</h2>
            <div className="ms-faqs">
              {faqJsonLd.mainEntity.map((faq, i) => (
                <div key={i} className="ms-faq">
                  <h3>{faq.name}</h3>
                  <p>{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section className="ms-section">
            <h2 className="ms-h2" style={{ marginBottom: 16 }}>Related Articles</h2>
            <div className="ms-related">
              {[
                { slug: "bitmine-strategy-paper-losses-2026", title: "Bitmine Down $8.9B on ETH, Strategy Down $7.6B on BTC — Full Breakdown" },
                { slug: "polymarket-willo2-500k-loss", title: "Did Polymarket Scam Willo2 — or Just Greed?" },
                { slug: "early-crypto-projects-2026", title: "Best Early Crypto Projects to Farm in 2026" },
                { slug: "top-25-airdrop-picks-2026", title: "Top 25 Airdrop Picks for 2026" },
              ].map((a) => (
                <Link key={a.slug} href={`/learn/${a.slug}`} className="ms-related-link">
                  <span>{a.title}</span><span>→</span>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="ms-cta">
            <h2>While Saylor Holds — Farm Airdrops for Free</h2>
            <p>115+ verified crypto airdrops with full guides. No $56B required. Just your time and a wallet.</p>
            <Link href="/airdrops" className="ms-cta-btn">Browse All Airdrops →</Link>
            <p className="ms-note">Last updated: June 3, 2026</p>
          </div>

        </div>
      </main>
    </>
  );
}
