import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Polymarket Willo2 $500K Loss — Scam or Greed? Full Breakdown | 3alamiy Web3",
  description:
    "Willo2 lost $500,000 on Polymarket's MicroStrategy Bitcoin market. Was it a scam or a greedy bet gone wrong? Full breakdown of what happened, why it resolved NO, and what every trader needs to learn.",
  alternates: { canonical: "https://www.3alamiyweb3.com/learn/polymarket-willo2-500k-loss" },
  openGraph: {
    title: "Polymarket Willo2 $500K Loss — Scam or Greed? Full Breakdown",
    description: "Willo2 lost $500,000 on Polymarket. Was it a scam or a greedy bet gone wrong? Full breakdown of what happened.",
    url: "https://www.3alamiyweb3.com/learn/polymarket-willo2-500k-loss",
    siteName: "3alamiy Web3",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Polymarket Willo2 $500K Loss — Scam or Greed?",
    description: "Full breakdown of the Polymarket controversy trending on X right now.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Polymarket Willo2 $500K Loss — Scam or Greed? Full Breakdown",
  description: "Willo2 lost $500,000 on Polymarket's MicroStrategy Bitcoin market. Full breakdown of what happened and what every trader needs to learn.",
  author: { "@type": "Organization", name: "3alamiy Web3" },
  publisher: { "@type": "Organization", name: "3alamiy Web3", url: "https://www.3alamiyweb3.com" },
  datePublished: "2026-06-02",
  dateModified: "2026-06-02",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.3alamiyweb3.com/learn/polymarket-willo2-500k-loss" },
};

const speakableJsonLd = {
  "@context": "https://schema.org", "@type": "WebPage",
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "p"] },
  url: "https://www.3alamiyweb3.com/learn/polymarket-willo2-500k-loss",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Did Polymarket scam Willo2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Polymarket resolved the MicroStrategy Bitcoin market to NO based on existing precedent — a previous market with nearly identical rules had been clarified so that information outside the market timeframe did not count. The resolution was consistent with prior policy. The real issue was ambiguous market wording that Polymarket failed to clarify before the deadline.",
      },
    },
    {
      "@type": "Question",
      name: "How did Willo2 lose $500,000 on Polymarket?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Willo2 bought thousands of YES shares on the MicroStrategy Bitcoin market after the news had already come out, when YES was trading at 70-80% instead of 99.9%. He assumed the market was mispriced and bet heavily that it would resolve YES. It resolved NO based on existing precedent, and he lost approximately $500,000.",
      },
    },
    {
      "@type": "Question",
      name: "What was the MicroStrategy Bitcoin Polymarket?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The market asked whether MicroStrategy sold Bitcoin by May 31. After the news that MicroStrategy had sold Bitcoin came out, the market was still trading at 70-80% YES instead of 99.9%. Polymarket resolved it NO, citing a precedent that information outside the market timeframe does not count toward resolution.",
      },
    },
    {
      "@type": "Question",
      name: "What is Polymarket's biggest mistake in this situation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Polymarket's biggest mistake was not clarifying the market rules before May 31, despite traders specifically asking for clarification to avoid exactly this situation. The ambiguous wording allowed reasonable people to argue both YES and NO, and the lack of timely clarification created a situation where someone could reasonably bet large amounts on what looked like a mispriced market.",
      },
    },
    {
      "@type": "Question",
      name: "What should Polymarket traders learn from this?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key lessons: Never full-port into a position that looks like free money — if smart money is not pushing it to 99.9%, there is a reason. Always check the Discord for clarifications before trading ambiguous markets. Understand that Polymarket resolves based on written rules and precedent, not common sense. And never risk more than you can afford to lose on a single position.",
      },
    },
  ],
};

const timeline = [
  { date: "Before May 31", event: "MicroStrategy Bitcoin sale market open", detail: "Market asks: did MicroStrategy sell Bitcoin by May 31? Trading normally.", color: "#7CF5C0" },
  { date: "News breaks", event: "MicroStrategy confirms Bitcoin sale", detail: "The news is out. Logic says the market should immediately jump to 99.9% YES.", color: "#f59e0b" },
  { date: "Market stuck at 70-80%", event: "Smart money holds back", detail: "Experienced traders knew about the NO precedent. They did not push it to 99.9% — a massive red flag that Willo2 ignored.", color: "#f87171" },
  { date: "Willo2 bets big", event: "$500K in YES shares", detail: "Willo2 sees what looks like free money — news is out but market is at 70%. He bets thousands of shares assuming mispricing.", color: "#f87171" },
  { date: "Discord warns", event: "Precedent shared publicly", detail: "The NO precedent from a previous identical market was shared immediately in Polymarket Discord. The information was public.", color: "#f59e0b" },
  { date: "May 31 deadline passes", event: "Market resolves NO", detail: "Polymarket resolves NO — consistent with prior precedent that information outside the market timeframe does not count.", color: "#f87171" },
  { date: "Aftermath", event: "Willo2 loses ~$500,000", detail: "The loss goes viral on X. The debate: was it a Polymarket scam or a greedy bet gone wrong?", color: "#818cf8" },
];

const lessons = [
  {
    n: 1, title: "If it looks like free money, it isn't",
    desc: "When a market should be at 99.9% but is stuck at 70-80%, smart money is telling you something. Experienced traders were not pushing it up — that is a signal, not an opportunity.",
    color: "#f87171",
    icon: "🚨",
  },
  {
    n: 2, title: "Always check the Discord before big trades",
    desc: "The NO precedent was shared in Polymarket Discord immediately after the news broke. Anyone who was active in the community would have known before placing a large bet. Discord activity is not optional — it is research.",
    color: "#7CF5C0",
    icon: "💬",
  },
  {
    n: 3, title: "Never full-port a single position",
    desc: "Willo2 went all-in on a single ambiguous market. No matter how confident you are, position sizing exists for exactly this reason. A $50K loss is recoverable. A $500K loss is life-changing.",
    color: "#f59e0b",
    icon: "⚖️",
  },
  {
    n: 4, title: "Understand how resolution precedent works",
    desc: "Polymarket resolves markets based on written rules AND established precedent. A previous market with nearly identical wording had set a clear standard. If you trade without knowing the precedent, you are trading blind.",
    color: "#c084fc",
    icon: "📋",
  },
  {
    n: 5, title: "Ambiguous wording is a red flag — not an edge",
    desc: "When market rules can be reasonably interpreted in two different ways, that ambiguity is not your edge — it is your risk. Ambiguous markets are unpredictable by definition.",
    color: "#60a5fa",
    icon: "⚠️",
  },
];

export default function PolymarketWillo2Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />

      <style>{`
        .pw * { box-sizing: border-box; }
        .pw { background: #060A12; min-height: 100vh; color: #fff; font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif; }
        .pw-wrap { max-width: 800px; margin: 0 auto; padding: 48px 20px 80px; }
        .pw-bc { font-size: 13px; color: rgba(255,255,255,0.25); margin-bottom: 32px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .pw-bc a { color: rgba(255,255,255,0.25); text-decoration: none; }
        .pw-badge { font-size: 11px; font-weight: 600; letter-spacing: 0.08em; padding: 3px 10px; border-radius: 99px; text-transform: uppercase; margin-right: 8px; }
        .pw-badge-trending { background: rgba(248,113,113,0.1); color: #f87171; border: 1px solid rgba(248,113,113,0.2); }
        .pw-badge-analysis { background: rgba(124,245,192,0.1); color: #7CF5C0; border: 1px solid rgba(124,245,192,0.18); }
        .pw-h1 { font-size: clamp(24px, 5vw, 36px); font-weight: 700; line-height: 1.2; margin: 16px 0; color: #fff; }
        .pw-h1 span { color: #f87171; }
        .pw-sub { font-size: 16px; color: rgba(255,255,255,0.45); line-height: 1.7; margin-bottom: 12px; }
        .pw-meta { font-size: 13px; color: rgba(255,255,255,0.25); margin-bottom: 16px; }
        .pw-meta span { color: rgba(255,255,255,0.45); }
        .pw-byline { display: flex; align-items: center; gap: 10px; margin-bottom: 40px; padding: 12px 16px; background: rgba(124,245,192,0.04); border: 1px solid rgba(124,245,192,0.1); border-radius: 10px; }
        .pw-byline-avatar { width: 32px; height: 32px; border-radius: 50%; background: rgba(124,245,192,0.15); border: 1px solid rgba(124,245,192,0.25); display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; }
        .pw-byline-name { font-size: 13px; font-weight: 700; color: #fff; }
        .pw-byline-sub { font-size: 11px; color: rgba(255,255,255,0.35); }
        .pw-byline-sub a { color: #7CF5C0; text-decoration: none; }

        .pw-verdict { background: rgba(248,113,113,0.05); border: 1px solid rgba(248,113,113,0.2); border-radius: 14px; padding: 20px; margin-bottom: 48px; }
        .pw-verdict-label { font-size: 11px; font-weight: 700; color: #f87171; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px; }
        .pw-verdict-text { font-size: 15px; color: rgba(255,255,255,0.6); line-height: 1.75; margin: 0; }
        .pw-verdict-text strong { color: #fff; }

        .pw-section { margin-bottom: 52px; }
        .pw-h2 { font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 12px; }
        .pw-p { font-size: 15px; color: rgba(255,255,255,0.45); line-height: 1.8; margin-bottom: 16px; }
        .pw-p strong { color: #fff; }

        /* Timeline */
        .pw-timeline { display: flex; flex-direction: column; gap: 0; position: relative; }
        .pw-tl-item { display: flex; gap: 16px; padding-bottom: 24px; position: relative; }
        .pw-tl-item:last-child { padding-bottom: 0; }
        .pw-tl-left { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; width: 20px; }
        .pw-tl-dot { width: 12px; height: 12px; border-radius: 50%; flex-shrink: 0; border: 2px solid; margin-top: 4px; }
        .pw-tl-line { width: 1px; flex: 1; background: rgba(255,255,255,0.06); margin-top: 4px; }
        .pw-tl-item:last-child .pw-tl-line { display: none; }
        .pw-tl-content { flex: 1; background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 14px 16px; margin-top: -2px; }
        .pw-tl-date { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px; }
        .pw-tl-event { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 4px; }
        .pw-tl-detail { font-size: 12px; color: rgba(255,255,255,0.4); line-height: 1.6; }

        /* Lessons */
        .pw-lessons { display: flex; flex-direction: column; gap: 12px; }
        .pw-lesson { background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; padding: 18px 20px; }
        .pw-lesson-head { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }
        .pw-lesson-icon { width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0; }
        .pw-lesson-title { font-size: 15px; font-weight: 700; color: #fff; }
        .pw-lesson-desc { font-size: 13px; color: rgba(255,255,255,0.45); line-height: 1.75; }

        /* Verdict boxes */
        .pw-boxes { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 24px; }
        .pw-box { border-radius: 12px; padding: 16px; }

        /* Quote */
        .pw-quote { border-left: 3px solid rgba(124,245,192,0.4); padding: 14px 18px; margin: 24px 0; background: rgba(124,245,192,0.03); border-radius: 0 10px 10px 0; }
        .pw-quote-text { font-size: 14px; color: rgba(255,255,255,0.55); line-height: 1.75; font-style: italic; margin: 0; }
        .pw-quote-text strong { color: #fff; font-style: normal; }

        /* FAQ */
        .pw-faqs { display: flex; flex-direction: column; gap: 10px; }
        .pw-faq { background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 18px 20px; }
        .pw-faq h3 { font-weight: 600; color: #fff; font-size: 14px; margin-bottom: 8px; }
        .pw-faq p { color: rgba(255,255,255,0.45); font-size: 13px; margin: 0; line-height: 1.7; }

        /* Related */
        .pw-related { display: flex; flex-direction: column; gap: 8px; }
        .pw-related-link { display: flex; align-items: center; justify-content: space-between; background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; padding: 13px 16px; text-decoration: none; color: rgba(255,255,255,0.6); font-size: 13px; font-weight: 500; }
        .pw-related-link span:last-child { color: #7CF5C0; font-size: 12px; }

        /* CTA */
        .pw-cta { background: rgba(124,245,192,0.06); border: 1px solid rgba(124,245,192,0.18); border-radius: 16px; padding: 40px 28px; text-align: center; }
        .pw-cta h2 { font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 10px; }
        .pw-cta p { font-size: 14px; color: rgba(255,255,255,0.45); line-height: 1.7; max-width: 420px; margin: 0 auto 24px; }
        .pw-cta-btn { display: inline-flex; align-items: center; gap: 6px; background: #7CF5C0; color: #060A12; font-weight: 700; font-size: 14px; padding: 12px 28px; border-radius: 99px; text-decoration: none; }
        .pw-note { font-size: 11px; color: rgba(255,255,255,0.18); margin-top: 16px; }

        @media (max-width: 600px) {
          .pw-wrap { padding: 32px 16px 64px; }
          .pw-boxes { grid-template-columns: 1fr; }
          .pw-cta { padding: 28px 16px; }
        }
      `}</style>

      <main className="pw">
        <div className="pw-wrap">

          {/* Breadcrumb */}
          <nav className="pw-bc">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/learn">Learn</Link><span>/</span>
            <span style={{ color: "rgba(255,255,255,0.45)" }}>Polymarket Willo2 Controversy</span>
          </nav>

          {/* Header */}
          <div>
            <span className="pw-badge pw-badge-trending">Trending on X</span>
            <span className="pw-badge pw-badge-analysis">Analysis</span>
            <h1 className="pw-h1">Did Polymarket Scam Willo2 — or Did He Just <span>Lose $500K Being Greedy?</span></h1>
            <p className="pw-sub">Willo2 lost approximately $500,000 on Polymarket's MicroStrategy Bitcoin market. The story is all over X right now. Here is the full, honest breakdown of what actually happened.</p>
            <p className="pw-meta">By <span>3alamiy Team</span> · June 2, 2026 · 6 min read</p>
            <div className="pw-byline">
              <div className="pw-byline-avatar">🪂</div>
              <div>
                <div className="pw-byline-name">3alamiy Team</div>
                <div className="pw-byline-sub">Web3 Airdrop Research · <a href="https://www.3alamiyweb3.com">3alamiyweb3.com</a></div>
              </div>
            </div>
          </div>

          {/* Verdict */}
          <div className="pw-verdict">
            <p className="pw-verdict-label">Our Verdict</p>
            <p className="pw-verdict-text">
              <strong>Not a scam. But Polymarket made a serious mistake.</strong> Willo2 lost $500K primarily because he made a greedy, reckless bet on an ambiguous market. Polymarket's resolution was consistent with prior precedent. But Polymarket should have clarified the rules days earlier when traders specifically asked — and that failure is on them.
            </p>
          </div>

          {/* What happened */}
          <section className="pw-section">
            <h2 className="pw-h2">What Actually Happened — The Full Timeline</h2>
            <p className="pw-p">To understand this controversy you need to understand the exact sequence of events. Here is what happened step by step.</p>
            <div className="pw-timeline">
              {timeline.map((t, i) => (
                <div key={i} className="pw-tl-item">
                  <div className="pw-tl-left">
                    <div className="pw-tl-dot" style={{ borderColor: t.color, background: `${t.color}30` }} />
                    <div className="pw-tl-line" />
                  </div>
                  <div className="pw-tl-content">
                    <div className="pw-tl-date" style={{ color: t.color }}>{t.date}</div>
                    <div className="pw-tl-event">{t.event}</div>
                    <div className="pw-tl-detail">{t.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why it resolved NO */}
          <section className="pw-section">
            <h2 className="pw-h2">Why the Market Resolved NO — And Why It Was Correct</h2>
            <p className="pw-p">
              The core of this controversy is a precedent question. A previous Polymarket market with nearly identical rules had already been clarified — information that emerges <strong>outside the market's timeframe</strong> does not count toward resolution.
            </p>
            <p className="pw-p">
              The MicroStrategy Bitcoin sale news came out after the May 31 deadline. Under the existing precedent, that information should not change the outcome — and Polymarket resolved NO accordingly.
            </p>
            <div className="pw-quote">
              <p className="pw-quote-text">
                The key insight experienced traders had: <strong>if this was truly a slam-dunk YES, the market would have moved to 99.9% immediately.</strong> It stayed at 70-80% because sharp money knew about the NO precedent. That gap was not mispricing — it was a warning.
              </p>
            </div>
            <p className="pw-p">
              Markets for later timeframes — like June 30 — were trading at 99.9% because the sale was confirmed for the longer window. The May 31 market staying at 70-80% was a direct signal that something was different about this specific market. Willo2 either did not notice or did not care.
            </p>
          </section>

          {/* Two sides */}
          <section className="pw-section">
            <h2 className="pw-h2">Two Sides of the Blame</h2>
            <div className="pw-boxes">
              <div className="pw-box" style={{ background: "rgba(248,113,113,0.06)", border: "1px solid rgba(248,113,113,0.18)" }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: "#f87171", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Willo2's Fault</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    "Bought after the news was out at 70-80% — not 99%",
                    "Ignored the signal that smart money was not pushing it higher",
                    "Full-ported a single ambiguous position",
                    "Did not check Discord for the precedent clarification",
                    "Assumed he was smarter than the market",
                  ].map((item) => (
                    <li key={item} style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", display: "flex", gap: 8 }}>
                      <span style={{ color: "#f87171", flexShrink: 0 }}>✗</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pw-box" style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.18)" }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: "#f59e0b", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Polymarket's Fault</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    "Did not clarify ambiguous rules before the deadline",
                    "Traders specifically asked for clarification — it was ignored",
                    "Unclear wording created the conditions for this loss",
                    "A simple rule update days earlier prevents everything",
                  ].map((item) => (
                    <li key={item} style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", display: "flex", gap: 8 }}>
                      <span style={{ color: "#f59e0b", flexShrink: 0 }}>⚠</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="pw-p">
              Both parties made mistakes. But the $500K loss sits primarily with Willo2. He had access to the same information as everyone else — including the Discord where the precedent was shared immediately after the news broke. He chose to bet anyway.
            </p>
          </section>

          {/* 5 Lessons */}
          <section className="pw-section">
            <h2 className="pw-h2">5 Lessons Every Polymarket Trader Needs to Learn From This</h2>
            <div className="pw-lessons">
              {lessons.map((l) => (
                <div key={l.n} className="pw-lesson">
                  <div className="pw-lesson-head">
                    <div className="pw-lesson-icon" style={{ background: `${l.color}15`, border: `1px solid ${l.color}30` }}>{l.icon}</div>
                    <div>
                      <span style={{ fontSize: 10, color: "rgba(255,255,255,0.25)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>Lesson {l.n}</span>
                      <div className="pw-lesson-title" style={{ color: l.color }}>{l.title}</div>
                    </div>
                  </div>
                  <p className="pw-lesson-desc">{l.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What Polymarket must fix */}
          <section className="pw-section">
            <h2 className="pw-h2">What Polymarket Must Fix</h2>
            <p className="pw-p">
              The resolution itself was defensible. The process that led to it was not. Polymarket has a responsibility to its users to clarify markets when ambiguity is flagged — especially when large sums are at stake.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { fix: "Mandatory clarification window", desc: "Any market flagged as ambiguous by 3+ traders should trigger an automatic clarification within 24 hours." },
                { fix: "Precedent database", desc: "Make all previous clarifications searchable and linked from similar markets. The precedent existed — it just was not easy to find." },
                { fix: "Rule freeze before deadline", desc: "Market rules should be locked with explicit interpretation 48 hours before the resolution window closes." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#0D1221", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "14px 18px" }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#7CF5C0", marginBottom: 6 }}>{item.fix}</p>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", margin: 0, lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="pw-section">
            <h2 className="pw-h2">Frequently Asked Questions</h2>
            <div className="pw-faqs">
              {faqJsonLd.mainEntity.map((faq, i) => (
                <div key={i} className="pw-faq">
                  <h3>{faq.name}</h3>
                  <p>{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section className="pw-section">
            <h2 className="pw-h2" style={{ marginBottom: 16 }}>Related Guides</h2>
            <div className="pw-related">
              {[
                { slug: "polymarket-airdrop-guide-2026", title: "Polymarket Airdrop Guide 2026 — How to Farm the POLY Token" },
                { slug: "how-to-avoid-crypto-airdrop-scams-2026", title: "How to Avoid Crypto Airdrop Scams 2026" },
                { slug: "crypto-airdrop-eligibility-requirements-2026", title: "Crypto Airdrop Eligibility Requirements 2026" },
                { slug: "early-crypto-projects-2026", title: "Best Early Crypto Projects to Farm in 2026" },
              ].map((a) => (
                <Link key={a.slug} href={`/learn/${a.slug}`} className="pw-related-link">
                  <span>{a.title}</span><span>→</span>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="pw-cta">
            <h2>Stay Ahead of the Next Drop</h2>
            <p>Track 110+ verified airdrops with full guides, scam warnings, and daily updates. Never get caught off guard again.</p>
            <Link href="/airdrops" className="pw-cta-btn">Browse All Airdrops →</Link>
            <p className="pw-note">Last updated: June 2, 2026</p>
          </div>

        </div>
      </main>
    </>
  );
}
