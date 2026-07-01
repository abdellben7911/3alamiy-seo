import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Polymarket 2026 — POLY Token, $10B Volume, Active Markets & What's Next",
  description: "Polymarket hit $10.57B monthly volume in 2026. POLY token confirmed, US relaunch live, MLS partnership active. Current hot markets, POLY farming guide, and the biggest changes in 2026.",
  alternates: { canonical: "https://www.3alamiyweb3.com/learn/polymarket-2026-complete-guide" },
  openGraph: {
    title: "Polymarket 2026 — POLY Token, $10B Volume, Active Markets & What's Next",
    description: "Polymarket hit $10.57B monthly volume. POLY token confirmed, US relaunch live. Current hot markets and full 2026 guide.",
    url: "https://www.3alamiyweb3.com/learn/polymarket-2026-complete-guide",
    siteName: "3alamiy Web3",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Polymarket 2026 — POLY Token, $10B Volume & Active Markets",
    description: "POLY token confirmed, US relaunch live, $10.57B monthly volume. Full guide to Polymarket in 2026 — current markets, farming, and what's next.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Polymarket in 2026 — Everything You Need to Know",
  description: "Polymarket hit $10.57B monthly volume in March 2026, partnered with MLS, and confirmed the POLY token.",
  author: { "@type": "Organization", name: "3alamiy Web3" },
  publisher: { "@type": "Organization", name: "3alamiy Web3", url: "https://www.3alamiyweb3.com" },
  datePublished: "2026-06-04",
  dateModified: "2026-06-04",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.3alamiyweb3.com/learn/polymarket-2026-complete-guide" },
};

const speakableJsonLd = {
  "@context": "https://schema.org", "@type": "WebPage",
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".pg-faq", ".pg-faqs"] },
  url: "https://www.3alamiyweb3.com/learn/polymarket-2026-complete-guide",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Polymarket?",
      acceptedAnswer: { "@type": "Answer", text: "Polymarket is the world's largest decentralized prediction market. Users trade on outcomes of real-world events using USDC on Polygon. It hit $10.57 billion in monthly trading volume in March 2026." },
    },
    {
      "@type": "Question",
      name: "Is Polymarket legal in the US in 2026?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. In 2026 Polymarket officially relaunched access for US users in over 40 states. It also partnered with Major League Soccer for official prediction markets." },
    },
    {
      "@type": "Question",
      name: "What is the POLY token?",
      acceptedAnswer: { "@type": "Answer", text: "The POLY token is Polymarket's upcoming governance token. The CMO confirmed: 'There will be a token, there will be an airdrop.' Expected H2 2026. Active traders are building eligibility now." },
    },
    {
      "@type": "Question",
      name: "What are the most popular markets on Polymarket right now?",
      acceptedAnswer: { "@type": "Answer", text: "As of June 2026: NBA Finals (Knicks vs Spurs, Knicks at 54%), French Presidential Election, MLS Cup 2026, and various crypto price prediction markets." },
    },
    {
      "@type": "Question",
      name: "How do I start trading on Polymarket?",
      acceptedAnswer: { "@type": "Answer", text: "Go to polymarket.com, connect MetaMask on Polygon, deposit USDC, and start trading. US users can also deposit via credit card in 2026. Link your X account — believed to be an eligibility factor for the POLY airdrop." },
    },
    {
      "@type": "Question",
      name: "What happened with the Willo2 $500K loss on Polymarket?",
      acceptedAnswer: { "@type": "Answer", text: "Willo2 lost $500K betting YES on a MicroStrategy Bitcoin market. It resolved NO based on precedent. Not a scam — Polymarket's resolution was consistent with prior policy. The real issue was ambiguous market wording Polymarket should have clarified earlier." },
    },
  ],
};

const timeline = [
  { date: "2020", event: "Polymarket launches on Polygon", detail: "Founded by Shayne Coplan. Prediction markets for crypto-native users. First real decentralized prediction market with meaningful liquidity.", hot: false },
  { date: "2022", event: "CFTC cease and desist — US users blocked", detail: "US regulator forces Polymarket to block US users and pay $1.4M settlement. Platform pivots hard to non-US markets. Volume drops.", hot: false },
  { date: "2024", event: "$3.7B in US election bets", detail: "Trump vs Biden/Harris drives Polymarket to mainstream. $3.7B in election bets. First time a crypto platform becomes the go-to political forecasting tool.", hot: false },
  { date: "Jan 2026", event: "ICE invests ~$2B — $15B valuation", detail: "NYSE parent company invests close to $2 billion. Polymarket becomes the most valuable prediction market company in history.", hot: true },
  { date: "March 2026", event: "$10.57B monthly volume — all-time record", detail: "1.35M+ active traders. CMO confirms POLY token is coming. Largest single month in prediction market history.", hot: true },
  { date: "2026", event: "US relaunch + MLS official partnership", detail: "Legal in 40+ US states. Official MLS deal — first major US sports league on a crypto prediction platform. League regulates market integrity.", hot: true },
  { date: "H2 2026", event: "POLY token expected", detail: "No official date. Active traders building history now. Community estimates point to H2 2026 after US relaunch stabilizes.", hot: false },
];

const trending = [
  { market: "NBA Finals 2026", cat: "🏀 Sports", odds: "Knicks 54%", note: "Most active market. Knicks vs Spurs — one of the most traded sports events in Polymarket history." },
  { market: "MLS Cup Winner 2026", cat: "⚽ Sports", odds: "Active", note: "Official MLS partnership markets — first regulated sports prediction with league oversight." },
  { market: "French Presidential Election", cat: "🗳️ Politics", odds: "Active", note: "European political markets surging. High volume across all election category markets." },
  { market: "Bitcoin price markets", cat: "₿ Crypto", odds: "Active", note: "BTC bull/bear markets always attract heavy volume. Traders betting on H2 2026 trajectory." },
];

export default function Polymarket2026Guide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --green: #7CF5C0;
          --green-dim: rgba(124,245,192,0.12);
          --green-border: rgba(124,245,192,0.2);
          --red: #f87171;
          --amber: #f59e0b;
          --card: #0B1120;
          --bg: #060A12;
          --text: rgba(255,255,255,0.45);
          --text-bright: #fff;
          --border: rgba(255,255,255,0.07);
        }

        .p26 * { box-sizing: border-box; margin: 0; padding: 0; }
        .p26 { background: var(--bg); min-height: 100vh; color: var(--text-bright); font-family: 'DM Sans', var(--font-space), system-ui, sans-serif; }

        /* ── HERO ── */
        .p26-hero {
          position: relative; overflow: hidden;
          padding: 0 20px 0;
          border-bottom: 1px solid var(--border);
        }
        .p26-hero-glow {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 10% -10%, rgba(124,245,192,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 90% 100%, rgba(96,165,250,0.05) 0%, transparent 60%);
          pointer-events: none;
        }
        .p26-hero-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }
        .p26-inner { max-width: 760px; margin: 0 auto; position: relative; }

        /* Breadcrumb */
        .p26-bc { display: flex; align-items: center; gap: 6px; padding: 24px 0 0; font-size: 12px; color: rgba(255,255,255,0.25); }
        .p26-bc a { color: rgba(255,255,255,0.25); text-decoration: none; transition: color 0.15s; }
        .p26-bc a:hover { color: var(--green); }

        /* Badge row */
        .p26-badges { display: flex; gap: 8px; margin: 20px 0 16px; flex-wrap: wrap; }
        .p26-badge {
          font-size: 10px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; padding: 4px 12px;
          border-radius: 99px; border: 1px solid;
        }

        /* Headline */
        .p26-h1 {
          font-family: 'Outfit', var(--font-space), system-ui, sans-serif;
          font-size: clamp(26px, 4.5vw, 42px);
          font-weight: 700; line-height: 1.15;
          letter-spacing: -0.02em;
          color: #fff;
          margin-bottom: 20px;
        }
        .p26-h1 .accent { color: var(--green); }
        .p26-h1 .dim { color: rgba(255,255,255,0.5); }

        /* Deck */
        .p26-deck {
          font-size: clamp(14px, 2.2vw, 17px);
          color: rgba(255,255,255,0.5);
          line-height: 1.75;
          max-width: 580px;
          margin-bottom: 24px;
          font-weight: 300;
        }

        /* Author strip */
        .p26-author {
          display: flex; align-items: center; gap: 12px;
          padding: 14px 0 28px;
          border-top: 1px solid var(--border);
          margin-top: 8px;
        }
        .p26-author-avatar {
          width: 36px; height: 36px; border-radius: 50%;
          background: var(--green-dim); border: 1px solid var(--green-border);
          display: flex; align-items: center; justify-content: center; font-size: 16px;
        }
        .p26-author-name { font-size: 13px; font-weight: 600; color: #fff; }
        .p26-author-meta { font-size: 11px; color: rgba(255,255,255,0.3); margin-top: 2px; }
        .p26-author-meta a { color: var(--green); text-decoration: none; }

        /* ── STATS BAND ── */
        .p26-stats {
          display: grid; grid-template-columns: repeat(4,1fr);
          border-bottom: 1px solid var(--border);
          background: rgba(255,255,255,0.01);
        }
        .p26-stat {
          padding: 22px 16px; text-align: center;
          border-right: 1px solid var(--border);
          position: relative; overflow: hidden;
        }
        .p26-stat:last-child { border-right: none; }
        .p26-stat::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          opacity: 0; transition: opacity 0.3s;
        }
        .p26-stat:hover::before { opacity: 1; }
        .p26-stat-val {
          font-family: 'Outfit', var(--font-space), system-ui, sans-serif;
          font-size: clamp(18px, 3.5vw, 28px);
          font-weight: 800; letter-spacing: -0.03em;
          line-height: 1; margin-bottom: 6px;
        }
        .p26-stat-lbl {
          font-size: 9px; font-weight: 600; text-transform: uppercase;
          letter-spacing: 0.1em; color: rgba(255,255,255,0.2);
        }

        /* ── BODY ── */
        .p26-body { max-width: 760px; margin: 0 auto; padding: 52px 20px 80px; }

        .p26-section { margin-bottom: 60px; }
        .p26-h2 {
          font-family: 'Outfit', var(--font-space), system-ui, sans-serif;
          font-size: clamp(20px, 3.5vw, 28px);
          font-weight: 800; letter-spacing: -0.02em;
          color: #fff; margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border);
        }
        .p26-p {
          font-size: 15px; color: var(--text);
          line-height: 1.85; margin-bottom: 16px;
          font-weight: 300;
        }
        .p26-p strong { color: #fff; font-weight: 600; }

        /* ── TIMELINE ── */
        .p26-tl { display: flex; flex-direction: column; gap: 0; }
        .p26-tl-row { display: flex; gap: 0; }
        .p26-tl-left {
          display: flex; flex-direction: column; align-items: center;
          width: 60px; flex-shrink: 0; padding-top: 4px;
        }
        .p26-tl-year {
          font-family: 'Outfit', var(--font-space), system-ui, sans-serif;
          font-size: 11px; font-weight: 800; color: rgba(255,255,255,0.25);
          letter-spacing: 0.05em; margin-bottom: 8px; white-space: nowrap;
        }
        .p26-tl-dot {
          width: 10px; height: 10px; border-radius: 50%;
          background: rgba(255,255,255,0.15); border: 2px solid rgba(255,255,255,0.2);
          flex-shrink: 0; position: relative; z-index: 1;
          transition: all 0.3s;
        }
        .p26-tl-dot.hot {
          background: var(--green);
          border-color: var(--green);
          box-shadow: 0 0 12px rgba(124,245,192,0.5);
          animation: glow-pulse 2s ease-in-out infinite;
        }
        @keyframes glow-pulse { 0%,100%{box-shadow:0 0 8px rgba(124,245,192,0.5)} 50%{box-shadow:0 0 20px rgba(124,245,192,0.8)} }
        .p26-tl-vline {
          width: 1px; flex: 1; background: var(--border);
          margin: 4px 0;
        }
        .p26-tl-row:last-child .p26-tl-vline { display: none; }
        .p26-tl-content {
          flex: 1; padding: 0 0 28px 20px;
        }
        .p26-tl-event {
          font-size: 15px; font-weight: 600; color: #fff;
          margin-bottom: 6px; line-height: 1.3;
        }
        .p26-tl-detail {
          font-size: 13px; color: rgba(255,255,255,0.35);
          line-height: 1.7; font-weight: 300;
        }
        .p26-tl-hot-badge {
          display: inline-block; font-size: 9px; font-weight: 800;
          background: var(--green-dim); color: var(--green);
          border: 1px solid var(--green-border);
          padding: 2px 8px; border-radius: 99px;
          text-transform: uppercase; letter-spacing: 0.08em;
          margin-left: 8px; vertical-align: middle;
        }

        /* ── TRENDING CARDS ── */
        .p26-trending { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .p26-tcard {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 14px; padding: 18px;
          transition: border-color 0.2s, transform 0.2s;
          position: relative; overflow: hidden;
        }
        .p26-tcard::before {
          content: ''; position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(124,245,192,0.3) 50%, transparent);
          opacity: 0; transition: opacity 0.3s;
        }
        .p26-tcard:hover { border-color: var(--green-border); transform: translateY(-2px); }
        .p26-tcard:hover::before { opacity: 1; }
        .p26-tcard-cat { font-size: 11px; color: rgba(255,255,255,0.3); margin-bottom: 8px; font-weight: 500; }
        .p26-tcard-name { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 6px; line-height: 1.3; }
        .p26-tcard-odds {
          display: inline-block; font-size: 11px; font-weight: 700;
          background: var(--green-dim); color: var(--green);
          border: 1px solid var(--green-border);
          padding: 3px 10px; border-radius: 99px; margin-bottom: 10px;
        }
        .p26-tcard-note { font-size: 12px; color: rgba(255,255,255,0.3); line-height: 1.65; font-weight: 300; }

        /* ── POLY BOX ── */
        .p26-poly-box {
          background: linear-gradient(135deg, rgba(124,245,192,0.05) 0%, rgba(96,165,250,0.03) 100%);
          border: 1px solid var(--green-border);
          border-radius: 16px; padding: 24px;
          margin-bottom: 24px; position: relative; overflow: hidden;
        }
        .p26-poly-box::before {
          content: ''; position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, var(--green) 50%, transparent);
          opacity: 0.4;
        }
        .p26-poly-label {
          font-size: 10px; font-weight: 800; text-transform: uppercase;
          letter-spacing: 0.1em; color: var(--green); margin-bottom: 12px;
          display: flex; align-items: center; gap: 6px;
        }
        .p26-poly-label::before {
          content: ''; width: 6px; height: 6px; border-radius: 50%;
          background: var(--green); box-shadow: 0 0 8px rgba(124,245,192,0.8);
          animation: glow-pulse 2s infinite;
        }

        /* Eligibility rows */
        .p26-elig { display: flex; flex-direction: column; gap: 8px; margin-top: 16px; }
        .p26-elig-row {
          display: flex; align-items: flex-start; gap: 12px;
          background: rgba(255,255,255,0.02); border: 1px solid var(--border);
          border-radius: 10px; padding: 12px 14px;
        }
        .p26-elig-icon { font-size: 14px; flex-shrink: 0; margin-top: 1px; }
        .p26-elig-label { font-size: 13px; font-weight: 600; color: #fff; margin-bottom: 2px; }
        .p26-elig-desc { font-size: 12px; color: rgba(255,255,255,0.35); font-weight: 300; }

        /* Callout boxes */
        .p26-callout {
          border-radius: 12px; padding: 16px 18px; margin-bottom: 14px;
          display: flex; gap: 14px; align-items: flex-start;
        }
        .p26-callout-icon { font-size: 18px; flex-shrink: 0; }
        .p26-callout-label { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 6px; }
        .p26-callout-text { font-size: 13px; color: rgba(255,255,255,0.5); line-height: 1.7; font-weight: 300; }
        .p26-callout-text strong { color: #fff; font-weight: 600; }

        /* FAQ */
        .p26-faqs { display: flex; flex-direction: column; gap: 8px; }
        .p26-faq {
          background: var(--card); border: 1px solid var(--border);
          border-radius: 12px; padding: 18px 20px;
          transition: border-color 0.2s;
        }
        .p26-faq:hover { border-color: rgba(255,255,255,0.12); }
        .p26-faq h3 { font-size: 14px; font-weight: 600; color: #fff; margin-bottom: 8px; line-height: 1.4; }
        .p26-faq p { font-size: 13px; color: rgba(255,255,255,0.4); line-height: 1.75; font-weight: 300; }

        /* Related */
        .p26-related { display: flex; flex-direction: column; gap: 8px; }
        .p26-rel {
          display: flex; align-items: center; justify-content: space-between;
          background: var(--card); border: 1px solid var(--border);
          border-radius: 10px; padding: 13px 16px;
          text-decoration: none; color: rgba(255,255,255,0.5);
          font-size: 13px; font-weight: 400;
          transition: border-color 0.2s, color 0.2s;
        }
        .p26-rel:hover { border-color: var(--green-border); color: rgba(255,255,255,0.8); }
        .p26-rel-arrow { color: var(--green); font-size: 12px; flex-shrink: 0; }

        /* CTA */
        .p26-cta {
          background: linear-gradient(135deg, rgba(124,245,192,0.06) 0%, rgba(96,165,250,0.04) 100%);
          border: 1px solid var(--green-border);
          border-radius: 20px; padding: 48px 32px;
          text-align: center; position: relative; overflow: hidden;
        }
        .p26-cta::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, var(--green) 50%, transparent);
          opacity: 0.5;
        }
        .p26-cta-title {
          font-family: 'Outfit', var(--font-space), system-ui, sans-serif;
          font-size: clamp(20px, 4vw, 28px); font-weight: 800;
          color: #fff; margin-bottom: 12px; letter-spacing: -0.02em;
        }
        .p26-cta-desc { font-size: 14px; color: rgba(255,255,255,0.4); line-height: 1.7; max-width: 420px; margin: 0 auto 28px; font-weight: 300; }
        .p26-cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--green); color: #060A12;
          font-weight: 700; font-size: 14px;
          padding: 13px 30px; border-radius: 99px;
          text-decoration: none; letter-spacing: 0.01em;
          transition: opacity 0.2s, transform 0.2s;
        }
        .p26-cta-btn:hover { opacity: 0.9; transform: translateY(-1px); }
        .p26-note { font-size: 11px; color: rgba(255,255,255,0.18); margin-top: 16px; }

        /* ── MOBILE ── */
        
        .p26-answer-box{background:rgba(59,130,246,0.06);border:1px solid rgba(59,130,246,0.18);border-radius:14px;padding:20px 22px;margin-bottom:32px}
        .p26-answer-label{font-size:11px;font-weight:700;color:#3b82f6;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:10px}
        .p26-answer-box p{font-size:14px;color:rgba(255,255,255,0.7);line-height:1.75;margin:0}
        @media (max-width: 640px) {
          .p26-stats { grid-template-columns: repeat(2, 1fr); }
          .p26-stat { padding: 16px 10px; }
          .p26-trending { grid-template-columns: 1fr; }
          .p26-cta { padding: 32px 20px; }
          .p26-tl-left { width: 44px; }
          .p26-tl-year { font-size: 10px; }
          .p26-body { padding: 36px 16px 60px; }
          .p26-hero { padding: 0 16px; }
        }
      `}</style>

      <article className="p26">

        {/* ── HERO ── */}
        <header className="p26-hero">
          <div className="p26-hero-glow" />
          <div className="p26-hero-grid" />
          <div className="p26-inner">

            <nav className="p26-bc">
              <Link href="/">Home</Link>
              <span style={{ opacity: 0.3 }}>›</span>
              <Link href="/learn">Learn</Link>
              <span style={{ opacity: 0.3 }}>›</span>
              <span style={{ color: "var(--green)" }}>Polymarket 2026</span>
            </nav>

            <div className="p26-badges">
              <span className="p26-badge" style={{ color: "var(--red)", borderColor: "rgba(248,113,113,0.25)", background: "rgba(248,113,113,0.08)" }}>🔴 Trending</span>
              <span className="p26-badge" style={{ color: "var(--green)", borderColor: "var(--green-border)", background: "var(--green-dim)" }}>Updated June 2026</span>
              <span className="p26-badge" style={{ color: "rgba(255,255,255,0.3)", borderColor: "var(--border)", background: "transparent" }}>8 min read</span>
            </div>

            <h1 className="p26-h1">
              Polymarket in 2026 —<br />
              <span className="accent">Everything</span>{" "}
              <span className="dim">You Need to Know</span>
            </h1>

            <p className="p26-deck">
              $10.57B monthly volume. US relaunch. MLS partnership. POLY token confirmed.
              Here is everything happening on the world's largest prediction market right now.
            </p>

            <div className="p26-author">
              <div className="p26-author-avatar">🪂</div>
              <div>
                <div className="p26-author-name">3alamiy Team</div>
                <div className="p26-author-meta">Web3 Research · <a href="https://www.3alamiyweb3.com">3alamiyweb3.com</a> · June 4, 2026</div>
              </div>
            </div>
          </div>
        </header>

        {/* ── STATS BAND ── */}
        <div className="p26-answer-box">
          <div className="p26-answer-label">Quick Answer</div>
          <p>Polymarket is the world's largest prediction market with $10.57B in 2026 volume. The POLY token is live. To earn POLY rewards: trade on Polymarket daily, hold positions in high-volume markets, and maintain high accuracy. Polymarket is accessible globally via Polygon network with USDC.</p>
        </div>
        <div className="p26-stats">
          {[
            { val: "$10.57B", lbl: "March 2026 Volume", color: "var(--green)", glow: "rgba(124,245,192,0.5)" },
            { val: "1.35M+", lbl: "Active Traders", color: "var(--green)", glow: "rgba(124,245,192,0.5)" },
            { val: "$15B", lbl: "Valuation (2026)", color: "var(--amber)", glow: "rgba(245,158,11,0.5)" },
            { val: "40+", lbl: "US States Legal", color: "#818cf8", glow: "rgba(129,140,248,0.5)" },
          ].map((s) => (
            <div key={s.lbl} className="p26-stat" style={{ ['--glow-color' as any]: s.glow }}>
              <style>{`.p26-stat:hover::before { background: linear-gradient(90deg, transparent, ${s.glow} 50%, transparent); }`}</style>
              <div className="p26-stat-val" style={{ color: s.color }}>{s.val}</div>
              <div className="p26-stat-lbl">{s.lbl}</div>
            </div>
          ))}
        </div>

        {/* ── BODY ── */}
        <div className="p26-body">

          {/* What is Polymarket */}
          <section className="p26-section">
            <h2 className="p26-h2">What is Polymarket?</h2>
            <p className="p26-p">
              Polymarket is the world's largest decentralized prediction market. Users buy and sell shares in the outcomes of real-world events — from NBA Finals to elections to crypto prices — using USDC on the Polygon blockchain. Every market has clearly defined resolution criteria. When the event concludes, <strong>winning shares pay out $1 each</strong>.
            </p>
            <p className="p26-p">
              In 2026, Polymarket has gone fully mainstream. <strong>$10.57 billion</strong> in monthly trading volume in March. Over <strong>1.35 million active traders</strong>. A valuation of <strong>$15 billion</strong> after NYSE parent company ICE invested close to $2 billion. Now officially legal in over 40 US states.
            </p>
          </section>

          {/* Timeline */}
          <section className="p26-section">
            <h2 className="p26-h2">How Polymarket Got Here — Full Timeline</h2>
            <div className="p26-tl">
              {timeline.map((t, i) => (
                <div key={i} className="p26-tl-row">
                  <div className="p26-tl-left">
                    <div className="p26-tl-year">{t.date}</div>
                    <div className={`p26-tl-dot${t.hot ? ' hot' : ''}`} />
                    <div className="p26-tl-vline" />
                  </div>
                  <div className="p26-tl-content">
                    <div className="p26-tl-event">
                      {t.event}
                      {t.hot && <span className="p26-tl-hot-badge">New</span>}
                    </div>
                    <div className="p26-tl-detail">{t.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Trending */}
          <section className="p26-section">
            <h2 className="p26-h2">What's Trending on Polymarket Right Now</h2>
            <p className="p26-p" style={{ marginBottom: 20 }}>Highest-volume markets as of June 4, 2026:</p>
            <div className="p26-trending">
              {trending.map((m) => (
                <div key={m.market} className="p26-tcard">
                  <div className="p26-tcard-cat">{m.cat}</div>
                  <div className="p26-tcard-name">{m.market}</div>
                  <div className="p26-tcard-odds">{m.odds}</div>
                  <p className="p26-tcard-note">{m.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* MLS */}
          <section className="p26-section">
            <h2 className="p26-h2">The MLS Partnership — A Milestone for Crypto</h2>
            <p className="p26-p">
              In 2026, Major League Soccer officially partnered with Polymarket to launch prediction markets for the MLS season. Markets cover the MLS Cup, All-Star Game, and Leagues Cup. The league oversees market integrity with third-party compliance firms IC360 and Sportradar.
            </p>
            <div className="p26-callout" style={{ background: "rgba(124,245,192,0.04)", border: "1px solid rgba(124,245,192,0.15)" }}>
              <span className="p26-callout-icon">⚽</span>
              <div>
                <div className="p26-callout-label" style={{ color: "var(--green)" }}>Why It Matters</div>
                <p className="p26-callout-text">This is the <strong>first time a major US professional sports league officially partnered with a crypto prediction platform</strong>. It signals regulatory legitimacy and opens the door for NFL, NBA, and MLB partnerships. For users — more liquidity, better resolution standards, and mainstream credibility.</p>
              </div>
            </div>
          </section>

          {/* POLY Token */}
          <section className="p26-section">
            <h2 className="p26-h2">The POLY Token — Confirmed, No Date Yet</h2>
            <div className="p26-poly-box">
              <div className="p26-poly-label">Confirmed by Polymarket CMO</div>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, fontStyle: "italic", fontWeight: 300 }}>
                "There will be a token, there will be an airdrop."
              </p>
            </div>
            <p className="p26-p">No launch date. No official eligibility criteria. But here is what community analysis and trading patterns suggest:</p>
            <div className="p26-elig">
              {[
                { icon: "📊", label: "Trading Volume", desc: "Total USDC traded — higher volume = stronger eligibility signal" },
                { icon: "🌐", label: "Market Diversity", desc: "Trade across multiple categories: sports, politics, crypto, economics" },
                { icon: "📅", label: "Consistency Over Time", desc: "Regular activity over months, not bursts. Projects reward genuine users" },
                { icon: "🐦", label: "X Account Linked", desc: "Connect Twitter from your profile settings — believed to be a key signal" },
                { icon: "🚫", label: "One Wallet Only", desc: "Sybil detection is sophisticated. Multiple wallets = disqualification" },
              ].map((e) => (
                <div key={e.label} className="p26-elig-row">
                  <span className="p26-elig-icon">{e.icon}</span>
                  <div>
                    <div className="p26-elig-label">{e.label}</div>
                    <div className="p26-elig-desc">{e.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20 }}>
              <Link href="/learn/polymarket-airdrop-guide-2026" style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "var(--green)", color: "#060A12", fontWeight: 700, fontSize: 13, padding: "10px 20px", borderRadius: 99, textDecoration: "none" }}>
                Full POLY Farming Guide →
              </Link>
            </div>
          </section>

          {/* Willo2 */}
          <section className="p26-section">
            <h2 className="p26-h2">The Willo2 $500K Controversy</h2>
            <p className="p26-p">The biggest Polymarket story of 2026: user Willo2 lost $500,000 on the MicroStrategy Bitcoin market. It resolved NO. Was it a scam?</p>
            <div className="p26-callout" style={{ background: "rgba(245,158,11,0.04)", border: "1px solid rgba(245,158,11,0.15)" }}>
              <span className="p26-callout-icon">⚖️</span>
              <div>
                <div className="p26-callout-label" style={{ color: "var(--amber)" }}>The Verdict</div>
                <p className="p26-callout-text"><strong>Not a scam — but Polymarket failed their users.</strong> The resolution was consistent with prior precedent. The real problem: Polymarket had ambiguous market wording and refused to clarify it when traders specifically asked. The market stayed at 70-80% — not 99.9% — because smart money knew. That gap was a warning, not an opportunity.</p>
              </div>
            </div>
            <Link href="/learn/polymarket-willo2-500k-loss" style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)", color: "rgba(255,255,255,0.5)", fontWeight: 600, fontSize: 13, padding: "10px 20px", borderRadius: 99, textDecoration: "none" }}>
              Full Willo2 Breakdown →
            </Link>
          </section>

          {/* FAQ */}
          <section className="p26-section">
            <h2 className="p26-h2">Frequently Asked Questions</h2>
            <div className="p26-faqs">
              {faqJsonLd.mainEntity.map((faq, i) => (
                <div key={i} className="p26-faq">
                  <h3>{faq.name}</h3>
                  <p>{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section className="p26-section">
            <h2 className="p26-h2">Related Guides</h2>
            <div className="p26-related">
              {[
                { slug: "polymarket-airdrop-guide-2026", title: "Polymarket POLY Airdrop Guide — How to Farm Before the Snapshot" },
                { slug: "polymarket-willo2-500k-loss", title: "Did Polymarket Scam Willo2 — or Just Greed?" },
                { slug: "bitmine-strategy-paper-losses-2026", title: "Bitmine Down $8.9B on ETH, Strategy Down $7.6B on BTC" },
                { slug: "top-25-airdrop-picks-2026", title: "Top 25 Airdrop Picks for 2026" },
              ].map((a) => (
                <Link key={a.slug} href={`/learn/${a.slug}`} className="p26-rel">
                  <span>{a.title}</span>
                  <span className="p26-rel-arrow">→</span>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="p26-cta">
            <div className="p26-cta-title">While You Wait for POLY</div>
            <p className="p26-cta-desc">115+ verified airdrops with full step-by-step guides. Track every opportunity — updated daily, always free.</p>
            <Link href="/airdrops" className="p26-cta-btn">
              Browse All Airdrops
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <p className="p26-note">Last updated: June 4, 2026 · Reviewed weekly</p>
          </div>

        </div>
      </article>
    </>
  );
}
