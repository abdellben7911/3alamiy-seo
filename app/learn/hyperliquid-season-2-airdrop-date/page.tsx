import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hyperliquid Season 2 Airdrop Date & Snapshot — When Will HYPE Drop? | 3alamiy Web3",
  description:
    "When is the Hyperliquid Season 2 airdrop date? No official date announced yet. Full breakdown of what we know about the HYPE Season 2 snapshot, eligibility, and timeline.",
  alternates: { canonical: "https://www.3alamiyweb3.com/learn/hyperliquid-season-2-airdrop-date" },
  openGraph: {
    title: "Hyperliquid Season 2 Airdrop Date & Snapshot — When Will HYPE Drop?",
    description: "No official date announced. Here's everything we know about the Hyperliquid Season 2 snapshot date, eligibility criteria, and how to farm before it drops.",
    url: "https://www.3alamiyweb3.com/learn/hyperliquid-season-2-airdrop-date",
    siteName: "3alamiy Web3",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyperliquid Season 2 Airdrop Date — When Is the Snapshot?",
    description: "No official date. Here's everything we know about HYPE Season 2 timeline and eligibility.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hyperliquid Season 2 Airdrop Date & Snapshot — When Will HYPE Drop?",
  description: "No official Hyperliquid Season 2 airdrop date announced. Full breakdown of what we know about HYPE Season 2 snapshot, eligibility, and how to farm before it drops.",
  author: { "@type": "Organization", name: "3alamiy Web3" },
  publisher: { "@type": "Organization", name: "3alamiy Web3", url: "https://www.3alamiyweb3.com" },
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.3alamiyweb3.com/learn/hyperliquid-season-2-airdrop-date" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Hyperliquid Season 2 airdrop date?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of June 2026, no official Hyperliquid Season 2 airdrop date has been announced. Hyperliquid has not published a snapshot date or distribution timeline. The team has historically given no advance notice before snapshots — Season 1 was announced and distributed within the same week.",
      },
    },
    {
      "@type": "Question",
      name: "When did Hyperliquid Season 1 airdrop happen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Hyperliquid Season 1 airdrop (HYPE token) launched in November 2024. It distributed 31% of total HYPE supply to early users of the HyperCore perpetuals exchange. The average allocation was worth over $10,000 at launch prices. No advance notice was given before the snapshot.",
      },
    },
    {
      "@type": "Question",
      name: "How much HYPE is reserved for Season 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hyperliquid has reserved 38.888% of total HYPE supply for future distributions, which includes Season 2 and potential further rounds. This is the largest unreleased allocation of any major L1/DEX protocol, representing hundreds of millions of dollars in potential value at current HYPE prices.",
      },
    },
    {
      "@type": "Question",
      name: "How do I qualify for the Hyperliquid Season 2 airdrop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To qualify for Hyperliquid Season 2: (1) Trade perpetuals on HyperCore — volume earns daily points. (2) Deposit into the HLP vault — earns a 3x multiplier on Season 2 allocation. (3) Stake HYPE tokens — earns 8 points per staked HYPE per day. (4) Interact with HyperEVM protocols: HyperSwap, HyperLend, HyperBeat. (5) Hold strict list tokens: HYPE, PURR, HFUN, CATBAL.",
      },
    },
    {
      "@type": "Question",
      name: "Is it too late to farm Hyperliquid Season 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — as of June 2026, Season 2 is still actively accumulating points. No snapshot date has been announced. Consistent daily activity over months is more valuable than large one-time transactions. Starting now still gives meaningful time to build eligibility.",
      },
    },
    {
      "@type": "Question",
      name: "What is the HLP vault 3x multiplier for Season 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depositing into the HLP (Hyperliquid Provider) vault earns a 3x multiplier on your Season 2 airdrop allocation compared to regular trading activity. The HLP vault provides liquidity for the HyperCore exchange and earns approximately 2% APR in addition to the Season 2 multiplier.",
      },
    },
  ],
};

const signals = [
  { title: "38.888% supply unreleased", detail: "The largest unreleased allocation of any major DEX. This must be distributed — the only question is when.", bullish: true },
  { title: "No date = still farmable", detail: "Hyperliquid gave zero advance notice before Season 1. The snapshot could be tomorrow or in 6 months. Every day counts.", bullish: true },
  { title: "HyperEVM activity growing", detail: "New protocols launching on HyperEVM weekly. Cross-chain activity is rewarded. The ecosystem is expanding rapidly.", bullish: true },
  { title: "Season 1 set the bar high", detail: "$10,000+ average allocation. Season 2 has more supply reserved. If HYPE price holds, Season 2 could be larger.", bullish: true },
];

const methods = [
  {
    rank: 1, name: "HLP Vault Deposit", multiplier: "3x", difficulty: "Easy",
    icon: "🏦",
    how: "Deposit any amount into the HLP vault at app.hyperliquid.xyz/vaults. Earns ~2% APR plus the 3x Season 2 multiplier. Best risk-adjusted farming method.",
    note: "Highest ROI per dollar deposited. Can be withdrawn anytime.",
  },
  {
    rank: 2, name: "HYPE Staking", multiplier: "8 pts/HYPE/day", difficulty: "Easy",
    icon: "🔒",
    how: "Stake HYPE tokens directly in the Hyperliquid interface. Each staked HYPE earns 8 points per day toward Season 2 allocation.",
    note: "Simple passive accumulation. Earns ~2% APR on top of Season 2 points.",
  },
  {
    rank: 3, name: "HyperCore Trading", multiplier: "Volume-based", difficulty: "Medium",
    icon: "📈",
    how: "Trade perpetuals on HyperCore (the main DEX). Volume drives points. Consistent daily trading of any size builds history over time.",
    note: "Genuine trading activity. Don't wash trade — Hyperliquid detects it.",
  },
  {
    rank: 4, name: "HyperEVM DeFi", multiplier: "Activity-based", difficulty: "Medium",
    icon: "⚡",
    how: "Bridge HYPE to HyperEVM and interact with HyperSwap, HyperLend, HyperBeat, Felix. Cross-chain bridging and DeFi interactions build on-chain history.",
    note: "Bridge at least 5 HYPE to HyperEVM to activate eligibility signal.",
  },
  {
    rank: 5, name: "Strict List Tokens", multiplier: "Holding bonus", difficulty: "Easy",
    icon: "🎯",
    how: "Hold HYPE, PURR, HFUN, or CATBAL tokens. These tokens appear on the Hyperliquid 'strict list' and holding them signals ecosystem participation.",
    note: "Minimum holding amounts not officially specified. Any meaningful amount helps.",
  },
];

export default function HyperliquidSeason2AirdropDate() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <style>{`
        .hl2 * { box-sizing: border-box; }
        .hl2 { background: #060A12; min-height: 100vh; color: #fff; font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif; }
        .hl2-wrap { max-width: 800px; margin: 0 auto; padding: 48px 20px 80px; }
        .hl2-bc { font-size: 13px; color: rgba(255,255,255,0.25); margin-bottom: 32px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .hl2-bc a { color: rgba(255,255,255,0.25); text-decoration: none; }
        .hl2-badge { font-size: 11px; font-weight: 600; letter-spacing: 0.08em; padding: 3px 10px; border-radius: 99px; text-transform: uppercase; margin-right: 8px; }
        .hl2-h1 { font-size: clamp(22px, 4.5vw, 34px); font-weight: 700; line-height: 1.2; margin: 16px 0; color: #fff; }
        .hl2-h1 span { color: #7CF5C0; }
        .hl2-sub { font-size: 16px; color: rgba(255,255,255,0.45); line-height: 1.7; margin-bottom: 12px; }
        .hl2-meta { font-size: 13px; color: rgba(255,255,255,0.25); margin-bottom: 16px; }
        .hl2-meta span { color: rgba(255,255,255,0.45); }
        .hl2-byline { display: flex; align-items: center; gap: 10px; margin-bottom: 40px; padding: 12px 16px; background: rgba(124,245,192,0.04); border: 1px solid rgba(124,245,192,0.1); border-radius: 10px; }
        .hl2-byline-avatar { width: 32px; height: 32px; border-radius: 50%; background: rgba(124,245,192,0.15); border: 1px solid rgba(124,245,192,0.25); display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; }
        .hl2-byline-name { font-size: 13px; font-weight: 700; color: #fff; }
        .hl2-byline-sub { font-size: 11px; color: rgba(255,255,255,0.35); }
        .hl2-byline-sub a { color: #7CF5C0; text-decoration: none; }

        /* Alert */
        .hl2-alert { background: rgba(124,245,192,0.05); border: 1px solid rgba(124,245,192,0.2); border-radius: 14px; padding: 18px 20px; margin-bottom: 40px; display: flex; gap: 14px; align-items: flex-start; }
        .hl2-alert-icon { font-size: 22px; flex-shrink: 0; }
        .hl2-alert-title { font-size: 13px; font-weight: 700; color: #7CF5C0; margin-bottom: 5px; }
        .hl2-alert-text { font-size: 13px; color: rgba(255,255,255,0.45); line-height: 1.7; }
        .hl2-alert-text strong { color: #fff; }

        /* Stats */
        .hl2-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; overflow: hidden; margin-bottom: 48px; }
        .hl2-stat { background: #0D1221; padding: 18px 16px; text-align: center; }
        .hl2-stat-val { font-size: 22px; font-weight: 700; margin-bottom: 4px; }
        .hl2-stat-lbl { font-size: 11px; color: rgba(255,255,255,0.25); text-transform: uppercase; letter-spacing: 0.06em; font-weight: 600; }

        /* Section */
        .hl2-section { margin-bottom: 52px; }
        .hl2-h2 { font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 12px; }
        .hl2-p { font-size: 15px; color: rgba(255,255,255,0.45); line-height: 1.8; margin-bottom: 16px; }
        .hl2-p strong { color: #fff; }

        /* Signals */
        .hl2-signals { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .hl2-signal { background: #0D1221; border: 1px solid rgba(124,245,192,0.15); border-radius: 12px; padding: 16px 18px; }
        .hl2-signal-title { font-size: 13px; font-weight: 700; color: #7CF5C0; margin-bottom: 6px; display: flex; align-items: center; gap: 6px; }
        .hl2-signal-detail { font-size: 12px; color: rgba(255,255,255,0.4); line-height: 1.65; }

        /* Methods */
        .hl2-methods { display: flex; flex-direction: column; gap: 10px; }
        .hl2-method { background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; padding: 18px 20px; display: flex; gap: 16px; align-items: flex-start; }
        .hl2-method-left { flex-shrink: 0; }
        .hl2-method-rank { width: 36px; height: 36px; border-radius: 10px; background: rgba(124,245,192,0.08); border: 1px solid rgba(124,245,192,0.18); display: flex; align-items: center; justify-content: center; font-size: 16px; }
        .hl2-method-name { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 4px; }
        .hl2-method-tags { display: flex; gap: 6px; margin-bottom: 8px; flex-wrap: wrap; }
        .hl2-tag { font-size: 10px; font-weight: 600; padding: 2px 8px; border-radius: 99px; }
        .hl2-method-how { font-size: 13px; color: rgba(255,255,255,0.45); line-height: 1.7; margin-bottom: 6px; }
        .hl2-method-note { font-size: 11px; color: rgba(124,245,192,0.6); background: rgba(124,245,192,0.04); border: 1px solid rgba(124,245,192,0.1); border-radius: 7px; padding: 6px 10px; }

        /* Box */
        .hl2-box { border-radius: 12px; padding: 16px 18px; margin-bottom: 14px; }
        .hl2-box-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px; }
        .hl2-box-text { font-size: 13px; color: rgba(255,255,255,0.5); line-height: 1.7; margin: 0; }
        .hl2-box-text strong { color: #fff; }

        /* FAQ */
        .hl2-faqs { display: flex; flex-direction: column; gap: 10px; }
        .hl2-faq { background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 18px 20px; }
        .hl2-faq h3 { font-weight: 600; color: #fff; font-size: 14px; margin-bottom: 8px; }
        .hl2-faq p { color: rgba(255,255,255,0.45); font-size: 13px; margin: 0; line-height: 1.7; }

        /* Related */
        .hl2-related { display: flex; flex-direction: column; gap: 8px; }
        .hl2-related-link { display: flex; align-items: center; justify-content: space-between; background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; padding: 13px 16px; text-decoration: none; color: rgba(255,255,255,0.6); font-size: 13px; font-weight: 500; }
        .hl2-related-link span:last-child { color: #7CF5C0; font-size: 12px; }

        /* CTA */
        .hl2-cta { background: rgba(124,245,192,0.06); border: 1px solid rgba(124,245,192,0.18); border-radius: 16px; padding: 40px 28px; text-align: center; }
        .hl2-cta h2 { font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 10px; }
        .hl2-cta p { font-size: 14px; color: rgba(255,255,255,0.45); line-height: 1.7; max-width: 420px; margin: 0 auto 24px; }
        .hl2-cta-btn { display: inline-flex; align-items: center; gap: 6px; background: #7CF5C0; color: #060A12; font-weight: 700; font-size: 14px; padding: 12px 28px; border-radius: 99px; text-decoration: none; }
        .hl2-note { font-size: 11px; color: rgba(255,255,255,0.18); margin-top: 16px; }

        @media (max-width: 600px) {
          .hl2-wrap { padding: 32px 16px 64px; }
          .hl2-stats { grid-template-columns: repeat(3, 1fr); }
          .hl2-signals { grid-template-columns: 1fr; }
          .hl2-cta { padding: 28px 16px; }
          .hl2-method { flex-direction: column; gap: 10px; }
        }
      `}</style>

      <main className="hl2">
        <div className="hl2-wrap">

          {/* Breadcrumb */}
          <nav className="hl2-bc">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/learn">Learn</Link><span>/</span>
            <span style={{ color: "rgba(255,255,255,0.45)" }}>Hyperliquid Season 2 Airdrop Date</span>
          </nav>

          {/* Header */}
          <div>
            <span className="hl2-badge" style={{ background: "rgba(124,245,192,0.1)", color: "#7CF5C0", border: "1px solid rgba(124,245,192,0.18)" }}>Updated June 2026</span>
            <span className="hl2-badge" style={{ background: "rgba(248,113,113,0.1)", color: "#f87171", border: "1px solid rgba(248,113,113,0.2)" }}>Still Active</span>
            <h1 className="hl2-h1">Hyperliquid Season 2 Airdrop Date — <span>When Is the Snapshot?</span></h1>
            <p className="hl2-sub">No official date announced. Season 2 is still actively accumulating points. Here is everything we know about the HYPE Season 2 snapshot timeline, eligibility criteria, and how to maximize your allocation before it drops.</p>
            <p className="hl2-meta">By <span>3alamiy Team</span> · June 5, 2026 · 7 min read · Updated weekly</p>
            <div className="hl2-byline">
              <div className="hl2-byline-avatar">🪂</div>
              <div>
                <div className="hl2-byline-name">3alamiy Team</div>
                <div className="hl2-byline-sub">Web3 Airdrop Research · <a href="https://www.3alamiyweb3.com">3alamiyweb3.com</a></div>
              </div>
            </div>
          </div>

          {/* Alert */}
          <div className="hl2-alert">
            <span className="hl2-alert-icon">📅</span>
            <div>
              <div className="hl2-alert-title">Current Status — June 2026</div>
              <p className="hl2-alert-text">
                <strong>No official Hyperliquid Season 2 airdrop date announced.</strong> Season 2 is actively accumulating points right now. Hyperliquid historically gives no advance warning before snapshots — Season 1 was announced and distributed in the same week. The snapshot could happen any day.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="hl2-stats">
            {[
              { val: "38.888%", lbl: "Supply Reserved S2", color: "#7CF5C0" },
              { val: "No date", lbl: "Official Announcement", color: "#f87171" },
              { val: "$10K+", lbl: "Season 1 Avg Value", color: "#f59e0b" },
            ].map((s) => (
              <div key={s.lbl} className="hl2-stat">
                <div className="hl2-stat-val" style={{ color: s.color }}>{s.val}</div>
                <div className="hl2-stat-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>

          {/* What we know */}
          <section className="hl2-section">
            <h2 className="hl2-h2">What We Know About the Season 2 Date</h2>
            <p className="hl2-p">
              Hyperliquid has made no official announcement about a Season 2 airdrop date. The team does not publish roadmaps or timelines — this is intentional. When Season 1 launched in November 2024, <strong>no advance notice was given</strong>. The snapshot, announcement, and distribution all happened within the same week.
            </p>
            <p className="hl2-p">
              This means there is no warning system. The snapshot could happen this month or six months from now. The only safe strategy is to <strong>stay consistently active every day</strong> and assume the snapshot could be tomorrow.
            </p>

            <div className="hl2-box" style={{ background: "rgba(124,245,192,0.04)", border: "1px solid rgba(124,245,192,0.15)" }}>
              <p className="hl2-box-label" style={{ color: "#7CF5C0" }}>Why no date is actually good news</p>
              <p className="hl2-box-text">
                If Hyperliquid announced a date 3 months in advance, everyone would farm intensively in the final weeks. Without a date, <strong>consistent long-term participants are rewarded</strong> over last-minute farmers. If you are reading this and starting now, you have a real advantage over people waiting for an announcement.
              </p>
            </div>
          </section>

          {/* Signals */}
          <section className="hl2-section">
            <h2 className="hl2-h2">4 Reasons Season 2 Is Coming</h2>
            <div className="hl2-signals">
              {signals.map((s, i) => (
                <div key={i} className="hl2-signal">
                  <div className="hl2-signal-title">✓ {s.title}</div>
                  <div className="hl2-signal-detail">{s.detail}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Season 1 recap */}
          <section className="hl2-section">
            <h2 className="hl2-h2">Season 1 — What Happened and What to Expect</h2>
            <p className="hl2-p">
              Season 1 launched in <strong>November 2024</strong>. It distributed <strong>31% of total HYPE supply</strong> to early users of HyperCore — the perpetuals DEX. The snapshot captured months of trading activity, vault deposits, and on-chain behavior.
            </p>
            <p className="hl2-p">
              At HYPE's peak price, the average allocation was worth over <strong>$10,000</strong>. Top farmers who had deposited into the HLP vault and traded consistently received allocations worth $50,000–$200,000+.
            </p>

            <div className="hl2-box" style={{ background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.15)" }}>
              <p className="hl2-box-label" style={{ color: "#f59e0b" }}>Season 2 supply is larger</p>
              <p className="hl2-box-text">
                Season 2 has <strong>38.888% of total supply reserved</strong> — significantly more than Season 1's 31%. If HYPE price holds at current levels, Season 2 allocations could exceed Season 1 in total dollar value distributed. The HLP vault 3x multiplier is confirmed for Season 2.
              </p>
            </div>
          </section>

          {/* How to farm */}
          <section className="hl2-section">
            <h2 className="hl2-h2">How to Maximize Your Season 2 Allocation</h2>
            <p className="hl2-p">Ranked by efficiency — highest reward per effort first:</p>
            <div className="hl2-methods">
              {methods.map((m) => (
                <div key={m.rank} className="hl2-method">
                  <div className="hl2-method-left">
                    <div className="hl2-method-rank">{m.icon}</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="hl2-method-name">#{m.rank} {m.name}</div>
                    <div className="hl2-method-tags">
                      <span className="hl2-tag" style={{ color: "#7CF5C0", background: "rgba(124,245,192,0.08)", border: "1px solid rgba(124,245,192,0.18)" }}>{m.multiplier}</span>
                      <span className="hl2-tag" style={{ color: m.difficulty === "Easy" ? "#7CF5C0" : "#f59e0b", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>{m.difficulty}</span>
                    </div>
                    <p className="hl2-method-how">{m.how}</p>
                    <div className="hl2-method-note">💡 {m.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="hl2-section">
            <h2 className="hl2-h2">Frequently Asked Questions</h2>
            <div className="hl2-faqs">
              {faqJsonLd.mainEntity.map((faq, i) => (
                <div key={i} className="hl2-faq">
                  <h3>{faq.name}</h3>
                  <p>{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section className="hl2-section">
            <h2 className="hl2-h2" style={{ marginBottom: 16 }}>
          <div className="aff-box">
            <p className="aff-label">🔗 Start earning HYPE on</p>
            <div className="aff-links">
              <a href="https://www.gate.com/share/xwvca1ha" target="_blank" rel="noopener noreferrer sponsored" className="aff-btn aff-gate">Gate.io — Buy crypto →</a>
              <a href="https://www.binance.com/en/register?ref=YOUR_BINANCE_REF" target="_blank" rel="noopener noreferrer sponsored" className="aff-btn aff-binance">Binance →</a>
              <a href="https://www.bybit.com/en/sign-up?affiliate_id=YOUR_BYBIT_REF" target="_blank" rel="noopener noreferrer sponsored" className="aff-btn aff-bybit">Bybit →</a>
            </div>
            <p className="aff-note">Low fees · Supports ETH, USDC, all major chains · Instant deposits</p>
          </div>

          Related Guides</h2>
            <div className="hl2-related">
              {[
                { slug: "hyperliquid-guide", title: "Hyperliquid Season 2 Full Farming Guide — HyperCore, HLP, HyperEVM" },
                { slug: "top-25-airdrop-picks-2026", title: "Top 25 Airdrop Picks for 2026" },
                { slug: "polymarket-airdrop-guide-2026", title: "Polymarket POLY Airdrop Guide 2026" },
                { slug: "early-crypto-projects-2026", title: "Best Early Crypto Projects to Farm in 2026" },
              ].map((a) => (
                <Link key={a.slug} href={`/learn/${a.slug}`} className="hl2-related-link">
                  <span>{a.title}</span><span>→</span>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="hl2-cta">
            <h2>Track All Airdrops While You Wait</h2>
            <p>115+ verified airdrops with full guides. Stay active across multiple projects while waiting for the Hyperliquid Season 2 snapshot.</p>
            <Link href="/airdrops" className="hl2-cta-btn">Browse All Airdrops →</Link>
            <p className="hl2-note">Last updated: June 5, 2026 · Updated weekly with any new Hyperliquid announcements</p>
          </div>

        </div>
      </main>
    </>
  );
}
