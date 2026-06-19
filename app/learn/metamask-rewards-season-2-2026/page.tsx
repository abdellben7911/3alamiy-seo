import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MetaMask Rewards Season 2 Guide 2026 — Double Linea Points, MASK Airdrop Eligibility",
  description: "MetaMask Rewards Season 2 is live. Season 1 ended Jan 23 2026 with $30M in LINEA tokens distributed. Season 2 gives double points for Linea activity. Full guide to maximizing your score before the MASK token launch.",
  alternates: { canonical: "https://www.3alamiyweb3.com/learn/metamask-rewards-season-2-2026" },
  openGraph: {
    title: "MetaMask Rewards Season 2 — Double Linea Points & MASK Eligibility Guide",
    description: "Season 1 paid out $30M in LINEA. Season 2 is live with double points for Linea network. Here is how to maximize your score.",
    url: "https://www.3alamiyweb3.com/learn/metamask-rewards-season-2-2026",
    siteName: "3alamiy Web3", type: "article",
  },
  twitter: { card: "summary_large_image", title: "MetaMask Rewards Season 2 (2026) — Full Guide", description: "Double Linea points, $30M Season 1 payout, how to farm Season 2 before MASK launch." },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "MetaMask Rewards Season 2 Guide 2026 — Double Linea Points, MASK Airdrop Eligibility",
  description: "MetaMask Rewards Season 2 is live. Season 1 ended Jan 23 2026 with $30M in LINEA tokens distributed. Season 2 gives double points for Linea activity.",
  author: { "@type": "Organization", name: "3alamiy Web3" },
  publisher: { "@type": "Organization", name: "3alamiy Web3", url: "https://www.3alamiyweb3.com" },
  datePublished: "2026-06-19", dateModified: "2026-06-19",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.3alamiyweb3.com/learn/metamask-rewards-season-2-2026" },
};

const faqJsonLd = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When did MetaMask Rewards Season 1 end?",
      acceptedAnswer: { "@type": "Answer", text: "MetaMask Rewards Season 1 ended on January 23, 2026. The claim window for Season 1 LINEA token rewards closed on March 9–10, 2026. Season 1 distributed over $30 million in LINEA tokens to point earners." },
    },
    {
      "@type": "Question",
      name: "How do I earn double points in MetaMask Rewards Season 2?",
      acceptedAnswer: { "@type": "Answer", text: "In MetaMask Rewards Season 2, all activity on the Linea network earns double points. This includes swaps, bridges, and DeFi interactions done through MetaMask on the Linea chain. To maximize, bridge ETH to Linea via MetaMask Bridge and swap weekly on Linea." },
    },
    {
      "@type": "Question",
      name: "Do Season 1 MetaMask Rewards points carry over to Season 2?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. MetaMask confirmed that Season 1 points carry over into Season 2. You do not lose accumulated points from Season 1 activity." },
    },
    {
      "@type": "Question",
      name: "What was the Oct 15, 2025 MetaMask bonus cutoff?",
      acceptedAnswer: { "@type": "Answer", text: "Users who were active on MetaMask before October 15, 2025 were eligible for up to 50,000 bonus points in Season 1. This early user bonus is now closed, but Season 2 activity continues to accumulate points." },
    },
    {
      "@type": "Question",
      name: "Will MetaMask Rewards points count toward the MASK token airdrop?",
      acceptedAnswer: { "@type": "Answer", text: "No official confirmation exists. However, MetaMask Rewards is the only official points program run by Consensys, and most analysts believe it is the scoring system that will determine MASK token allocations when the token eventually launches. Farming Rewards points is the safest hedge available." },
    },
  ],
};

const speakableJsonLd = {
  "@context": "https://schema.org", "@type": "WebPage",
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".mmr-answer", ".mmr-timeline", ".mmr-faqs"] },
  url: "https://www.3alamiyweb3.com/learn/metamask-rewards-season-2-2026",
};

const TIMELINE = [
  { date: "Mid 2025", event: "Season 1 launches", detail: "MetaMask Rewards Season 1 goes live. Users earn points for swaps, bridges, staking, and referrals through the MetaMask app.", color: "#f6851b" },
  { date: "Oct 15, 2025", event: "Early user cutoff", detail: "Users active before this date earn up to 50,000 bonus points. This threshold is now permanently closed.", color: "#f59e0b" },
  { date: "Jan 23, 2026", event: "Season 1 ends", detail: "Season 1 officially closes. Over $30M in LINEA tokens is distributed to Season 1 point holders. Points-to-LINEA conversion is finalized.", color: "#7CF5C0" },
  { date: "Mar 9–10, 2026", event: "Season 1 claims close", detail: "The claim window for Season 1 LINEA token rewards closes permanently. Unclaimed LINEA is forfeited.", color: "#f87171" },
  { date: "2026 (ongoing)", event: "Season 2 active", detail: "Season 2 is now live. Season 1 points carry over. Activity on the Linea network earns double points. No end date announced.", color: "#60a5fa" },
];

const WAYS_TO_EARN = [
  { action: "MetaMask Swaps", points: "Base points per swap", tip: "Swap ETH or stablecoins at least weekly. Even $5–10 swaps count.", multiplier: "1x (2x on Linea)" },
  { action: "MetaMask Bridge", points: "Points per bridge tx", tip: "Bridge ETH to Linea via MetaMask Bridge for instant double points.", multiplier: "1x (2x on Linea)" },
  { action: "MetaMask Staking", points: "Points per stake tx", tip: "Stake ETH directly via MetaMask. Long staking positions earn ongoing rewards.", multiplier: "1x" },
  { action: "Referrals", points: "Bonus per referral", tip: "Share your MetaMask Rewards referral link. Points awarded when referees complete actions.", multiplier: "Bonus" },
  { action: "Futures/Perps trading", points: "Points per trade", tip: "Trade perpetual futures through MetaMask-connected DEXes.", multiplier: "1x" },
  { action: "Prior activity bonus", points: "Up to 50,000 bonus pts", tip: "Closed Oct 15, 2025. Rewarded users who were active before Season 1.", multiplier: "Historical" },
];

export default function MetaMaskRewardsSeason2() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />

      <style>{`
        .mmr * { box-sizing: border-box; }
        .mmr { background: #060A12; min-height: 100vh; color: #fff; font-family: var(--font-space),'Space Grotesk',system-ui,sans-serif; }
        .mmr-wrap { max-width: 800px; margin: 0 auto; padding: 48px 20px 80px; }
        .mmr-bc { font-size: 13px; color: rgba(255,255,255,0.25); margin-bottom: 32px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .mmr-bc a { color: rgba(255,255,255,0.25); text-decoration: none; }
        .mmr-badge { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; padding: 3px 12px; border-radius: 99px; text-transform: uppercase; background: rgba(246,133,27,0.1); color: #f6851b; border: 1px solid rgba(246,133,27,0.2); display: inline-block; margin-bottom: 16px; }
        .mmr-h1 { font-size: clamp(26px,5vw,40px); font-weight: 700; line-height: 1.2; margin: 0 0 16px; }
        .mmr-h1 span { color: #f6851b; }
        .mmr-sub { font-size: 16px; color: rgba(255,255,255,0.45); line-height: 1.7; margin-bottom: 12px; }
        .mmr-meta { font-size: 13px; color: rgba(255,255,255,0.25); margin-bottom: 36px; }
        .mmr-answer { background: rgba(246,133,27,0.05); border: 1px solid rgba(246,133,27,0.15); border-radius: 14px; padding: 22px 24px; margin-bottom: 40px; }
        .mmr-answer-label { font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #f6851b; margin-bottom: 10px; }
        .mmr-answer-text { font-size: 15px; color: rgba(255,255,255,0.75); line-height: 1.8; }
        .mmr-answer-text strong { color: #fff; }
        .mmr-h2 { font-size: 22px; font-weight: 700; margin: 0 0 16px; }
        .mmr-h2 span { color: #f6851b; }
        .mmr-p { font-size: 15px; color: rgba(255,255,255,0.55); line-height: 1.8; margin-bottom: 20px; }
        .mmr-section { margin-bottom: 48px; }
        .mmr-timeline { display: flex; flex-direction: column; gap: 0; position: relative; margin-bottom: 32px; }
        .mmr-timeline::before { content: ''; position: absolute; left: 18px; top: 0; bottom: 0; width: 2px; background: rgba(246,133,27,0.15); }
        .mmr-tl-item { display: flex; gap: 18; padding-bottom: 24px; position: relative; }
        .mmr-tl-dot { width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; z-index: 1; font-size: 10px; font-weight: 800; }
        .mmr-tl-date { font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 4px; }
        .mmr-tl-event { font-size: 15px; font-weight: 700; color: #fff; margin-bottom: 4px; }
        .mmr-tl-detail { font-size: 13px; color: rgba(255,255,255,0.4); line-height: 1.6; }
        .mmr-table-wrap { overflow-x: auto; margin-bottom: 32px; }
        .mmr-table { width: 100%; border-collapse: collapse; font-size: 14px; }
        .mmr-table th { text-align: left; padding: 10px 14px; font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.3); text-transform: uppercase; letter-spacing: 0.07em; border-bottom: 1px solid rgba(255,255,255,0.07); }
        .mmr-table td { padding: 13px 14px; border-bottom: 1px solid rgba(255,255,255,0.05); vertical-align: top; }
        .mmr-highlight { background: rgba(246,133,27,0.06); border: 1px solid rgba(246,133,27,0.15); border-radius: 12px; padding: 16px 20px; margin-bottom: 24px; font-size: 14px; color: rgba(255,255,255,0.6); line-height: 1.7; }
        .mmr-highlight strong { color: #f6851b; }
        .mmr-faqs { display: flex; flex-direction: column; gap: 16px; }
        .mmr-faq { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 13px; padding: 20px 22px; }
        .mmr-faq-q { font-size: 15px; font-weight: 700; color: #fff; margin-bottom: 10px; }
        .mmr-faq-a { font-size: 14px; color: rgba(255,255,255,0.45); line-height: 1.7; }
        @media (max-width: 600px) { .mmr-wrap { padding: 32px 16px 60px; } }
      `}</style>

      <div className="mmr">
        <div className="mmr-wrap">

          {/* Breadcrumb */}
          <nav className="mmr-bc">
            <Link href="/">Home</Link> <span>/</span>
            <Link href="/learn">Learn</Link> <span>/</span>
            <span>MetaMask Rewards Season 2</span>
          </nav>

          {/* Header */}
          <span className="mmr-badge">Updated June 2026</span>
          <h1 className="mmr-h1">MetaMask Rewards <span>Season 2</span> — Double Linea Points & MASK Airdrop Eligibility</h1>
          <p className="mmr-sub">Season 1 distributed over $30M in LINEA tokens and ended January 23, 2026. Season 2 is now live — with double points for all Linea network activity. Here is everything you need to know to maximize your score before the MASK token launches.</p>
          <p className="mmr-meta">By 3alamiy Web3 — June 19, 2026</p>

          {/* Answer box */}
          <div className="mmr-answer">
            <div className="mmr-answer-label">Quick Answer</div>
            <div className="mmr-answer-text">
              MetaMask Rewards Season 2 is currently active. <strong>Season 1 ended January 23, 2026</strong>, after distributing <strong>$30M+ in LINEA tokens</strong> to point holders. Season 1 claims closed March 9–10, 2026. <strong>Season 1 points carry over to Season 2.</strong> In Season 2, all activity on the <strong>Linea network earns double points</strong>. Users active before October 15, 2025 received up to 50,000 bonus points (this cutoff is now closed). No official end date for Season 2 has been announced.
            </div>
          </div>

          {/* Timeline */}
          <section className="mmr-section">
            <h2 className="mmr-h2">Season <span>Timeline</span> — Key Dates</h2>
            <p className="mmr-p">Every confirmed date and event in the MetaMask Rewards program, from launch through the current Season 2.</p>
            <div className="mmr-timeline">
              {TIMELINE.map((item, i) => (
                <div key={i} className="mmr-tl-item">
                  <div className="mmr-tl-dot" style={{ background: `${item.color}15`, border: `2px solid ${item.color}40` }}>
                    <span style={{ color: item.color }}>{i + 1}</span>
                  </div>
                  <div style={{ paddingTop: 6 }}>
                    <div className="mmr-tl-date" style={{ color: item.color }}>{item.date}</div>
                    <div className="mmr-tl-event">{item.event}</div>
                    <div className="mmr-tl-detail">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mmr-highlight">
              <strong>Season 2 double points rule:</strong> Every swap, bridge, or DeFi interaction you do through MetaMask on the Linea network earns 2x points compared to other chains. Bridge ETH to Linea via MetaMask Bridge, then swap weekly on Linea DEXes to stack points faster than any other method.
            </div>
          </section>

          {/* How to earn */}
          <section className="mmr-section">
            <h2 className="mmr-h2">How to Earn <span>Points</span> in Season 2</h2>
            <p className="mmr-p">MetaMask does not publish exact point values, but these are all confirmed earning actions in the Rewards program. Linea activity earns double on all of them.</p>
            <div className="mmr-table-wrap">
              <table className="mmr-table">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Multiplier</th>
                    <th>Best practice</th>
                  </tr>
                </thead>
                <tbody>
                  {WAYS_TO_EARN.map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                      <td style={{ fontWeight: 700, color: '#fff' }}>{row.action}</td>
                      <td><span style={{ fontSize: 11, fontWeight: 800, color: row.multiplier.includes('2x') ? '#7CF5C0' : row.multiplier === 'Bonus' ? '#f59e0b' : 'rgba(255,255,255,0.4)', background: row.multiplier.includes('2x') ? 'rgba(124,245,192,0.1)' : 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: 99, border: '1px solid currentColor' }}>{row.multiplier}</span></td>
                      <td style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>{row.tip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Season 1 recap */}
          <section className="mmr-section">
            <h2 className="mmr-h2">Season 1 <span>Recap</span> — What Was Paid Out</h2>
            <p className="mmr-p">Season 1 is now closed. Here is a full summary of what happened.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 12, marginBottom: 24 }}>
              {[
                { val: "$30M+", label: "LINEA tokens distributed to Season 1 holders" },
                { val: "Jan 23", label: "2026 — official end date of Season 1" },
                { val: "Mar 9–10", label: "2026 — final claim window for Season 1 LINEA" },
                { val: "50,000", label: "bonus points for users active before Oct 15, 2025" },
              ].map(s => (
                <div key={s.val} style={{ background: 'rgba(246,133,27,0.05)', border: '1px solid rgba(246,133,27,0.12)', borderRadius: 14, padding: '16px 18px', textAlign: 'center' }}>
                  <div style={{ fontSize: 24, fontWeight: 900, color: '#f6851b', marginBottom: 6 }}>{s.val}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>
            <p className="mmr-p">Season 1 rewarded activity with LINEA tokens — Linea is the Ethereum L2 built by Consensys, MetaMask&apos;s parent company. The Season 1 payout strongly suggests that MetaMask Rewards is a long-term loyalty program designed to tie users to the Consensys ecosystem ahead of a potential MASK token launch.</p>
          </section>

          {/* Connection to MASK token */}
          <section className="mmr-section">
            <h2 className="mmr-h2">Does Season 2 Affect the <span>MASK Token</span> Airdrop?</h2>
            <p className="mmr-p">No official statement connects MetaMask Rewards points directly to a future MASK token airdrop. However, MetaMask Rewards is the only official on-chain scoring system Consensys has ever run, and the pattern closely mirrors how Arbitrum, Optimism, and Uniswap built their user databases before distributing tokens.</p>
            <div className="mmr-highlight">
              <strong>Analyst view:</strong> MetaMask Rewards is the most credible proxy for MASK token eligibility currently available. Users with high Season 2 point balances are the most likely recipients if Consensys launches a token. The Linea double-points rule further ties Rewards to the Consensys ecosystem — both Linea and MetaMask sit under the same parent company.
            </div>
            <p className="mmr-p">For full context on the MASK token signals, funding history, and farming strategy, see the <Link href="/learn/metamask-token-launch-2026" style={{ color: '#f6851b' }}>MetaMask Token Launch 2026 guide</Link>.</p>
          </section>

          {/* FAQ */}
          <section className="mmr-section">
            <h2 className="mmr-h2">FAQ</h2>
            <div className="mmr-faqs">
              {faqJsonLd.mainEntity.map((item, i) => (
                <div key={i} className="mmr-faq">
                  <div className="mmr-faq-q">{item.name}</div>
                  <div className="mmr-faq-a">{item.acceptedAnswer.text}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section className="mmr-section">
            <h2 className="mmr-h2">Related Guides</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { href: "/learn/metamask-token-launch-2026", label: "MetaMask Token Launch 2026 — Full Analysis" },
                { href: "/learn/metamask-airdrop-guide-2026", label: "MetaMask Airdrop Farming Guide" },
                { href: "/learn/how-much-do-crypto-airdrops-pay-2026", label: "How Much Do Crypto Airdrops Pay in 2026?" },
                { href: "/airdrops", label: "All Active Airdrop Campaigns" },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ fontSize: 14, color: '#f6851b', textDecoration: 'none', padding: '12px 16px', background: 'rgba(246,133,27,0.05)', border: '1px solid rgba(246,133,27,0.12)', borderRadius: 10, display: 'block' }}>
                  {l.label} →
                </Link>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
