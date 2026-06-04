import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Polymarket in 2026 — Everything You Need to Know | 3alamiy Web3",
  description:
    "Polymarket hit $10.57B monthly volume in March 2026, partnered with MLS, expanded to the US, and confirmed the POLY token. Full guide to what's happening on Polymarket right now.",
  alternates: { canonical: "https://www.3alamiyweb3.com/learn/polymarket-2026-complete-guide" },
  openGraph: {
    title: "Polymarket in 2026 — Everything You Need to Know",
    description: "Polymarket hit $10.57B monthly volume, partnered with MLS, expanded to the US, and confirmed the POLY token. Full guide.",
    url: "https://www.3alamiyweb3.com/learn/polymarket-2026-complete-guide",
    siteName: "3alamiy Web3",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Polymarket in 2026 — Everything You Need to Know",
    description: "Polymarket hit $10.57B monthly volume and confirmed the POLY token. Full guide to what's happening right now.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Polymarket in 2026 — Everything You Need to Know",
  description: "Polymarket hit $10.57B monthly volume in March 2026, partnered with MLS, and confirmed the POLY token. Full guide.",
  author: { "@type": "Organization", name: "3alamiy Web3" },
  publisher: { "@type": "Organization", name: "3alamiy Web3", url: "https://www.3alamiyweb3.com" },
  datePublished: "2026-06-04",
  dateModified: "2026-06-04",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.3alamiyweb3.com/learn/polymarket-2026-complete-guide" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Polymarket?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Polymarket is the world's largest decentralized prediction market platform. Users trade on the outcomes of real-world events — sports, politics, crypto, economics — using USDC on the Polygon blockchain. It hit $10.57 billion in monthly trading volume in March 2026.",
      },
    },
    {
      "@type": "Question",
      name: "Is Polymarket legal in the US in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. In 2026 Polymarket officially relaunched access for US users following regulatory developments. The platform now operates legally in over 40 US states. It has also partnered with Major League Soccer (MLS) for official prediction markets.",
      },
    },
    {
      "@type": "Question",
      name: "What is the POLY token?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The POLY token is Polymarket's upcoming governance and utility token. The CMO confirmed in March 2026: 'There will be a token, there will be an airdrop.' No launch date has been announced. Early reports suggest 5-10% of total supply will be distributed to active traders.",
      },
    },
    {
      "@type": "Question",
      name: "What are the most popular markets on Polymarket right now?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of June 2026, the most active markets include the NBA Finals (New York Knicks vs San Antonio Spurs), sports markets via the MLS partnership, French Presidential Election, and various crypto price prediction markets. Sports markets have become one of the fastest-growing categories following the MLS deal.",
      },
    },
    {
      "@type": "Question",
      name: "How do I start trading on Polymarket?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Go to polymarket.com, connect MetaMask (make sure Polygon network is added), deposit USDC, and start trading. In 2026, US users can also deposit via credit card. Link your X account from profile settings — it is believed to be an eligibility factor for the future POLY airdrop.",
      },
    },
    {
      "@type": "Question",
      name: "What happened with the Willo2 $500K loss on Polymarket?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Willo2 lost approximately $500,000 betting YES on a MicroStrategy Bitcoin market after the news had already come out. The market resolved NO based on existing precedent. It was not a scam — Polymarket's resolution was consistent with prior policy. The main issue was ambiguous market wording that Polymarket should have clarified earlier.",
      },
    },
  ],
};

const stats = [
  { val: "$10.57B", lbl: "March 2026 Volume", color: "#7CF5C0" },
  { val: "1.35M+", lbl: "Active Traders", color: "#7CF5C0" },
  { val: "$15B", lbl: "Valuation", color: "#f59e0b" },
  { val: "40+", lbl: "US States Legal", color: "#818cf8" },
];

const trending = [
  { market: "NBA Finals 2026", category: "Sports", leader: "New York Knicks", odds: "54%", volume: "High", why: "NBA Finals underway — Knicks vs Spurs is one of the most traded markets right now." },
  { market: "French Presidential Election", category: "Politics", leader: "TBD", odds: "Active", volume: "High", why: "European political markets are surging as the French election cycle heats up." },
  { market: "Will Bitcoin hit $100K in 2026?", category: "Crypto", leader: "NO", odds: "Active", volume: "Medium", why: "Bitcoin price markets always attract heavy volume. Traders betting on BTC trajectory." },
  { market: "MLS Cup Winner 2026", category: "Sports", leader: "Various", odds: "Active", volume: "Growing", why: "Official MLS partnership launched — first regulated sports prediction markets with league oversight." },
];

const timeline = [
  { date: "2020", event: "Polymarket launches on Polygon", detail: "Founded by Shayne Coplan. Prediction markets for crypto-native users." },
  { date: "2022", event: "CFTC issues a cease and desist", detail: "US regulator forces Polymarket to block US users and pay $1.4M settlement. The platform pivots to non-US markets." },
  { date: "2024", event: "US Presidential election drives $3.7B in volume", detail: "Polymarket becomes mainstream during the Trump vs Biden/Harris election. Total election bets exceed $3.7B." },
  { date: "Jan 2026", event: "Polymarket raises at $15B valuation", detail: "ICE (NYSE parent company) invests close to $2B. Polymarket becomes the most valuable prediction market company in history." },
  { date: "March 2026", event: "$10.57B monthly volume — new record", detail: "Breaks all previous records. 1.35M+ active traders. CMO confirms POLY token is coming." },
  { date: "2026", event: "US relaunch + MLS partnership", detail: "Polymarket officially relaunches for US users in 40+ states. Partners with MLS for official league prediction markets with regulatory oversight." },
  { date: "H2 2026", event: "POLY token expected", detail: "No official date. Community estimates point to H2 2026. Active traders building history now." },
];

export default function Polymarket2026Guide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <style>{`
        .pm2 * { box-sizing: border-box; }
        .pm2 { background: #060A12; min-height: 100vh; color: #fff; font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif; }
        .pm2-wrap { max-width: 800px; margin: 0 auto; padding: 48px 20px 80px; }
        .pm2-bc { font-size: 13px; color: rgba(255,255,255,0.25); margin-bottom: 32px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .pm2-bc a { color: rgba(255,255,255,0.25); text-decoration: none; }
        .pm2-badge { font-size: 11px; font-weight: 600; letter-spacing: 0.08em; padding: 3px 10px; border-radius: 99px; text-transform: uppercase; margin-right: 8px; }
        .pm2-h1 { font-size: clamp(24px, 5vw, 36px); font-weight: 700; line-height: 1.2; margin: 16px 0; color: #fff; }
        .pm2-h1 span { color: #7CF5C0; }
        .pm2-sub { font-size: 16px; color: rgba(255,255,255,0.45); line-height: 1.7; margin-bottom: 12px; }
        .pm2-meta { font-size: 13px; color: rgba(255,255,255,0.25); margin-bottom: 16px; }
        .pm2-meta span { color: rgba(255,255,255,0.45); }
        .pm2-byline { display: flex; align-items: center; gap: 10px; margin-bottom: 40px; padding: 12px 16px; background: rgba(124,245,192,0.04); border: 1px solid rgba(124,245,192,0.1); border-radius: 10px; }
        .pm2-byline-avatar { width: 32px; height: 32px; border-radius: 50%; background: rgba(124,245,192,0.15); border: 1px solid rgba(124,245,192,0.25); display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; }
        .pm2-byline-name { font-size: 13px; font-weight: 700; color: #fff; }
        .pm2-byline-sub { font-size: 11px; color: rgba(255,255,255,0.35); }
        .pm2-byline-sub a { color: #7CF5C0; text-decoration: none; }

        /* Stats */
        .pm2-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; overflow: hidden; margin-bottom: 48px; }
        .pm2-stat { background: #0D1221; padding: 16px 12px; text-align: center; }
        .pm2-stat-val { font-size: 20px; font-weight: 700; margin-bottom: 4px; }
        .pm2-stat-lbl { font-size: 10px; color: rgba(255,255,255,0.25); text-transform: uppercase; letter-spacing: 0.06em; font-weight: 600; }

        /* Section */
        .pm2-section { margin-bottom: 52px; }
        .pm2-h2 { font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 12px; }
        .pm2-p { font-size: 15px; color: rgba(255,255,255,0.45); line-height: 1.8; margin-bottom: 16px; }
        .pm2-p strong { color: #fff; }

        /* Timeline */
        .pm2-timeline { display: flex; flex-direction: column; }
        .pm2-tl-item { display: flex; gap: 16px; padding-bottom: 20px; }
        .pm2-tl-item:last-child { padding-bottom: 0; }
        .pm2-tl-left { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; width: 20px; }
        .pm2-tl-dot { width: 10px; height: 10px; border-radius: 50%; background: #7CF5C0; flex-shrink: 0; margin-top: 4px; }
        .pm2-tl-line { width: 1px; flex: 1; background: rgba(255,255,255,0.06); margin-top: 4px; }
        .pm2-tl-item:last-child .pm2-tl-line { display: none; }
        .pm2-tl-content { flex: 1; padding-bottom: 4px; }
        .pm2-tl-date { font-size: 10px; font-weight: 700; color: #7CF5C0; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 3px; }
        .pm2-tl-event { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 4px; }
        .pm2-tl-detail { font-size: 12px; color: rgba(255,255,255,0.35); line-height: 1.65; }

        /* Trending markets */
        .pm2-markets { display: flex; flex-direction: column; gap: 10px; }
        .pm2-market { background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 16px 18px; }
        .pm2-market-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px; flex-wrap: wrap; gap: 8px; }
        .pm2-market-name { font-size: 14px; font-weight: 700; color: #fff; }
        .pm2-market-tags { display: flex; gap: 6px; }
        .pm2-market-tag { font-size: 10px; font-weight: 600; padding: 2px 8px; border-radius: 99px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); color: rgba(255,255,255,0.4); }
        .pm2-market-why { font-size: 12px; color: rgba(255,255,255,0.35); line-height: 1.6; }

        /* Box */
        .pm2-box { border-radius: 12px; padding: 16px 18px; margin-bottom: 16px; }
        .pm2-box-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px; }
        .pm2-box-text { font-size: 13px; color: rgba(255,255,255,0.5); line-height: 1.7; margin: 0; }
        .pm2-box-text strong { color: #fff; }

        /* FAQ */
        .pm2-faqs { display: flex; flex-direction: column; gap: 10px; }
        .pm2-faq { background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 18px 20px; }
        .pm2-faq h3 { font-weight: 600; color: #fff; font-size: 14px; margin-bottom: 8px; }
        .pm2-faq p { color: rgba(255,255,255,0.45); font-size: 13px; margin: 0; line-height: 1.7; }

        /* Related */
        .pm2-related { display: flex; flex-direction: column; gap: 8px; }
        .pm2-related-link { display: flex; align-items: center; justify-content: space-between; background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; padding: 13px 16px; text-decoration: none; color: rgba(255,255,255,0.6); font-size: 13px; font-weight: 500; }
        .pm2-related-link span:last-child { color: #7CF5C0; font-size: 12px; }

        /* CTA */
        .pm2-cta { background: rgba(124,245,192,0.06); border: 1px solid rgba(124,245,192,0.18); border-radius: 16px; padding: 40px 28px; text-align: center; }
        .pm2-cta h2 { font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 10px; }
        .pm2-cta p { font-size: 14px; color: rgba(255,255,255,0.45); line-height: 1.7; max-width: 420px; margin: 0 auto 24px; }
        .pm2-cta-btn { display: inline-flex; align-items: center; gap: 6px; background: #7CF5C0; color: #060A12; font-weight: 700; font-size: 14px; padding: 12px 28px; border-radius: 99px; text-decoration: none; }
        .pm2-note { font-size: 11px; color: rgba(255,255,255,0.18); margin-top: 16px; }

        @media (max-width: 600px) {
          .pm2-wrap { padding: 32px 16px 64px; }
          .pm2-stats { grid-template-columns: repeat(2, 1fr); }
          .pm2-stat-val { font-size: 17px; }
          .pm2-cta { padding: 28px 16px; }
        }
      `}</style>

      <main className="pm2">
        <div className="pm2-wrap">

          {/* Breadcrumb */}
          <nav className="pm2-bc">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/learn">Learn</Link><span>/</span>
            <span style={{ color: "rgba(255,255,255,0.45)" }}>Polymarket 2026 Complete Guide</span>
          </nav>

          {/* Header */}
          <div>
            <span className="pm2-badge" style={{ background: "rgba(124,245,192,0.1)", color: "#7CF5C0", border: "1px solid rgba(124,245,192,0.18)" }}>Updated June 2026</span>
            <span className="pm2-badge" style={{ background: "rgba(248,113,113,0.1)", color: "#f87171", border: "1px solid rgba(248,113,113,0.2)" }}>Trending</span>
            <h1 className="pm2-h1">Polymarket in 2026 — <span>Everything You Need to Know</span></h1>
            <p className="pm2-sub">Polymarket hit $10.57B monthly volume, relaunched in the US, partnered with MLS, and confirmed the POLY token is coming. Here is everything happening on the world's largest prediction market right now.</p>
            <p className="pm2-meta">By <span>3alamiy Team</span> · June 4, 2026 · 8 min read</p>
            <div className="pm2-byline">
              <div className="pm2-byline-avatar">🪂</div>
              <div>
                <div className="pm2-byline-name">3alamiy Team</div>
                <div className="pm2-byline-sub">Web3 Research · <a href="https://www.3alamiyweb3.com">3alamiyweb3.com</a></div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="pm2-stats">
            {stats.map((s) => (
              <div key={s.lbl} className="pm2-stat">
                <div className="pm2-stat-val" style={{ color: s.color }}>{s.val}</div>
                <div className="pm2-stat-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>

          {/* What is Polymarket */}
          <section className="pm2-section">
            <h2 className="pm2-h2">What is Polymarket?</h2>
            <p className="pm2-p">
              Polymarket is the world's largest decentralized prediction market. Users buy and sell shares in the outcomes of real-world events — from NBA Finals to elections to crypto prices — using USDC on the Polygon blockchain. Every market has a clearly defined resolution criteria. When the event concludes, winning shares pay out <strong>$1 each</strong>.
            </p>
            <p className="pm2-p">
              In 2026, Polymarket has become mainstream. <strong>$10.57 billion</strong> in monthly trading volume in March 2026. Over <strong>1.35 million active traders</strong>. A valuation of <strong>$15 billion</strong> after NYSE parent company ICE invested close to $2 billion. And now officially legal in over 40 US states.
            </p>
          </section>

          {/* Timeline */}
          <section className="pm2-section">
            <h2 className="pm2-h2">Polymarket in 2026 — Full Timeline</h2>
            <div className="pm2-timeline">
              {timeline.map((t, i) => (
                <div key={i} className="pm2-tl-item">
                  <div className="pm2-tl-left">
                    <div className="pm2-tl-dot" />
                    <div className="pm2-tl-line" />
                  </div>
                  <div className="pm2-tl-content">
                    <div className="pm2-tl-date">{t.date}</div>
                    <div className="pm2-tl-event">{t.event}</div>
                    <div className="pm2-tl-detail">{t.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Trending now */}
          <section className="pm2-section">
            <h2 className="pm2-h2">What's Trending on Polymarket Right Now</h2>
            <p className="pm2-p">These are the highest-volume markets on Polymarket as of June 4, 2026:</p>
            <div className="pm2-markets">
              {trending.map((m) => (
                <div key={m.market} className="pm2-market">
                  <div className="pm2-market-top">
                    <span className="pm2-market-name">{m.market}</span>
                    <div className="pm2-market-tags">
                      <span className="pm2-market-tag">{m.category}</span>
                      <span className="pm2-market-tag" style={{ color: "#7CF5C0", background: "rgba(124,245,192,0.08)", borderColor: "rgba(124,245,192,0.18)" }}>Volume: {m.volume}</span>
                    </div>
                  </div>
                  <p className="pm2-market-why">{m.why}</p>
                </div>
              ))}
            </div>
          </section>

          {/* MLS Partnership */}
          <section className="pm2-section">
            <h2 className="pm2-h2">The MLS Partnership — What It Means</h2>
            <p className="pm2-p">
              In 2026, Major League Soccer officially partnered with Polymarket to launch prediction markets for the MLS season. This includes markets for the MLS Cup, All-Star Game, and Leagues Cup. The league oversees market integrity with third-party compliance firms IC360 and Sportradar. Players and staff are barred from participating.
            </p>
            <div className="pm2-box" style={{ background: "rgba(124,245,192,0.04)", border: "1px solid rgba(124,245,192,0.15)" }}>
              <p className="pm2-box-label" style={{ color: "#7CF5C0" }}>Why This Is a Big Deal</p>
              <p className="pm2-box-text">
                This is the first time a major US professional sports league has officially partnered with a crypto prediction market. It signals <strong>regulatory legitimacy</strong> and opens the door for NFL, NBA, and MLB partnerships. For Polymarket users, it means more liquidity, more markets, and better resolution standards.
              </p>
            </div>
          </section>

          {/* POLY Token */}
          <section className="pm2-section">
            <h2 className="pm2-h2">The POLY Token — What We Know</h2>
            <p className="pm2-p">
              Polymarket's CMO confirmed in a podcast: <strong>"There will be a token, there will be an airdrop."</strong> Beyond that, no official details have been released. Here is what the community analysis suggests:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "Likely allocation", detail: "5-10% of total POLY supply for active traders", color: "#7CF5C0" },
                { label: "Eligibility signals", detail: "Trading volume, market diversity, consistency, linked X account", color: "#7CF5C0" },
                { label: "Expected timing", detail: "H2 2026 — after US relaunch stabilizes", color: "#f59e0b" },
                { label: "Sybil protection", detail: "Multiple wallets will be detected and disqualified", color: "#f87171" },
              ].map((item) => (
                <div key={item.label} style={{ background: "#0D1221", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: "12px 16px", display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ color: item.color, fontSize: 12, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>→</span>
                  <div>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{item.label}: </span>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="pm2-p" style={{ marginTop: 16 }}>
              The best strategy: trade genuinely across multiple market categories, keep one consistent wallet, link your X account, and maintain activity over months. There is no shortcut — the snapshot has not been announced intentionally.
            </p>
            <Link href="/learn/polymarket-airdrop-guide-2026" style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(124,245,192,0.08)", border: "1px solid rgba(124,245,192,0.18)", color: "#7CF5C0", fontWeight: 700, fontSize: 13, padding: "10px 18px", borderRadius: 99, textDecoration: "none" }}>
              Full POLY Airdrop Farming Guide →
            </Link>
          </section>

          {/* Willo2 controversy */}
          <section className="pm2-section">
            <h2 className="pm2-h2">The Willo2 $500K Loss — What Really Happened</h2>
            <p className="pm2-p">
              The biggest Polymarket controversy of 2026 was user Willo2 losing approximately $500,000 on the MicroStrategy Bitcoin market. The market asked whether MicroStrategy sold Bitcoin by May 31 — after the news came out, the market stayed at 70-80% YES instead of jumping to 99.9%. Willo2 bet heavily on YES. It resolved NO.
            </p>
            <div className="pm2-box" style={{ background: "rgba(245,158,11,0.04)", border: "1px solid rgba(245,158,11,0.15)" }}>
              <p className="pm2-box-label" style={{ color: "#f59e0b" }}>The Key Lesson</p>
              <p className="pm2-box-text">
                The market stayed at 70-80% — not 99.9% — because experienced traders knew about a NO precedent. <strong>If smart money isn't pushing a market where it logically should be, that gap is a warning, not an opportunity.</strong> Polymarket's real mistake was failing to clarify ambiguous rules before the deadline, despite traders specifically asking for clarification.
              </p>
            </div>
            <Link href="/learn/polymarket-willo2-500k-loss" style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)", fontWeight: 600, fontSize: 13, padding: "10px 18px", borderRadius: 99, textDecoration: "none" }}>
              Full Willo2 Breakdown →
            </Link>
          </section>

          {/* FAQ */}
          <section className="pm2-section">
            <h2 className="pm2-h2">Frequently Asked Questions</h2>
            <div className="pm2-faqs">
              {faqJsonLd.mainEntity.map((faq, i) => (
                <div key={i} className="pm2-faq">
                  <h3>{faq.name}</h3>
                  <p>{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section className="pm2-section">
            <h2 className="pm2-h2" style={{ marginBottom: 16 }}>Related Guides</h2>
            <div className="pm2-related">
              {[
                { slug: "polymarket-airdrop-guide-2026", title: "Polymarket POLY Airdrop Guide — How to Farm Before the Snapshot" },
                { slug: "polymarket-willo2-500k-loss", title: "Did Polymarket Scam Willo2 — or Just Greed? Full Breakdown" },
                { slug: "early-crypto-projects-2026", title: "Best Early Crypto Projects to Farm in 2026" },
                { slug: "top-25-airdrop-picks-2026", title: "Top 25 Airdrop Picks for 2026" },
                { slug: "how-to-avoid-crypto-airdrop-scams-2026", title: "How to Avoid Crypto Airdrop Scams 2026" },
              ].map((a) => (
                <Link key={a.slug} href={`/learn/${a.slug}`} className="pm2-related-link">
                  <span>{a.title}</span><span>→</span>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="pm2-cta">
            <h2>While You Wait for POLY — Farm Other Airdrops</h2>
            <p>115+ verified airdrops with full guides. Track all opportunities in one place, updated daily.</p>
            <Link href="/airdrops" className="pm2-cta-btn">Browse All Airdrops →</Link>
            <p className="pm2-note">Last updated: June 4, 2026 · Reviewed weekly</p>
          </div>

        </div>
      </main>
    </>
  );
}
