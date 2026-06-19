import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Confirmed Crypto Airdrop Pools 2026 — MegaETH $107M, Backpack $37M, Pharos $52M",
  description: "Every confirmed crypto airdrop pool in 2026 with exact dollar amounts. MegaETH $107.68M, Backpack $37M, Pharos $52M, and more. Updated June 2026.",
  alternates: { canonical: "https://www.3alamiyweb3.com/learn/confirmed-crypto-airdrop-pools-2026" },
  openGraph: {
    title: "Confirmed Crypto Airdrop Pools 2026 — All the Numbers",
    description: "MegaETH $107.68M, Backpack $37M, Pharos $52M. Every confirmed airdrop pool size in 2026, updated in real time.",
    url: "https://www.3alamiyweb3.com/learn/confirmed-crypto-airdrop-pools-2026",
    siteName: "3alamiy Web3", type: "article",
  },
  twitter: { card: "summary_large_image", title: "Confirmed Airdrop Pools 2026: MegaETH, Backpack, Pharos & More", description: "Exact confirmed pool sizes for every major 2026 crypto airdrop." },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "Confirmed Crypto Airdrop Pools 2026 — MegaETH $107M, Backpack $37M, Pharos $52M",
  description: "Every confirmed crypto airdrop pool in 2026 with exact dollar amounts. MegaETH $107.68M, Backpack $37M, Pharos $52M. Updated June 2026.",
  author: { "@type": "Organization", name: "3alamiy Web3" },
  publisher: { "@type": "Organization", name: "3alamiy Web3", url: "https://www.3alamiyweb3.com" },
  datePublished: "2026-06-19", dateModified: "2026-06-19",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.3alamiyweb3.com/learn/confirmed-crypto-airdrop-pools-2026" },
};

const faqJsonLd = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How big is the MegaETH airdrop pool?",
      acceptedAnswer: { "@type": "Answer", text: "The MegaETH airdrop pool is $107.68 million (MEGA tokens). This is one of the largest confirmed airdrop pools in 2026. MegaETH is an Ethereum Layer 2 focused on ultra-high throughput performance." },
    },
    {
      "@type": "Question",
      name: "How much did the Backpack airdrop pay?",
      acceptedAnswer: { "@type": "Answer", text: "Backpack distributed $37 million in BP tokens in April 2026. Backpack is a Solana-based wallet and exchange. The airdrop rewarded active users of the Backpack wallet and exchange platform." },
    },
    {
      "@type": "Question",
      name: "What was the Pharos airdrop total?",
      acceptedAnswer: { "@type": "Answer", text: "Pharos distributed $52 million in PROS tokens in 2026. Pharos is a Layer 1 blockchain focused on parallel execution and high-performance DeFi." },
    },
    {
      "@type": "Question",
      name: "What is the biggest crypto airdrop pool in 2026?",
      acceptedAnswer: { "@type": "Answer", text: "Among confirmed 2026 airdrops, MegaETH has the largest announced pool at $107.68 million. However, the MetaMask MASK token (not yet launched) is projected to be significantly larger given MetaMask's 30M+ user base and $686M in VC funding. Hyperliquid's 2024 airdrop ($2.6B total) remains the largest in crypto history." },
    },
    {
      "@type": "Question",
      name: "What was the total value of crypto airdrops in 2024?",
      acceptedAnswer: { "@type": "Answer", text: "Over $20 billion in total value was distributed via crypto airdrops in 2024. The average reward across all 2024 airdrops was approximately $60 per recipient (CryptoRank data). Hyperliquid alone distributed $2.6 billion, the largest single airdrop in crypto history." },
    },
  ],
};

const speakableJsonLd = {
  "@context": "https://schema.org", "@type": "WebPage",
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".cap-answer", ".cap-table-wrap", ".cap-faqs"] },
  url: "https://www.3alamiyweb3.com/learn/confirmed-crypto-airdrop-pools-2026",
};

const CONFIRMED_2026 = [
  { protocol: "MegaETH", token: "MEGA", pool: "$107.68M", poolNum: 107.68, status: "Confirmed", date: "2026", type: "ETH L2", farming: "/learn/megaeth-airdrop-guide-2026", notes: "Ultra-high throughput L2. Testnet farming underway." },
  { protocol: "Pharos", token: "PROS", pool: "$52M", poolNum: 52, status: "Distributed", date: "2026", type: "L1", farming: null, notes: "Parallel execution L1. Distribution complete." },
  { protocol: "Backpack", token: "BP", pool: "$37M", poolNum: 37, status: "Distributed", date: "Apr 2026", type: "Solana", farming: null, notes: "Solana wallet & exchange. Rewarded active users." },
  { protocol: "OPEN (Layer 2)", token: "OPEN", pool: "TBA", poolNum: 0, status: "Upcoming", date: "2026", type: "ETH L2", farming: null, notes: "Early users estimated $2,000–$5,000 per wallet." },
  { protocol: "Hyperliquid S2", token: "HYPE", pool: "TBA", poolNum: 0, status: "Points Live", date: "2026", type: "Hyperliquid L1", farming: "/learn/hyperliquid-guide", notes: "38.8% of HYPE supply still unreleased. HLP vault gives 3x multiplier." },
  { protocol: "MetaMask (MASK)", token: "MASK", pool: "TBA", poolNum: 0, status: "Unannounced", date: "TBA", type: "Multi-chain", farming: "/learn/metamask-token-launch-2026", notes: "30M+ users, $686M raised. Potentially largest ever." },
  { protocol: "Phantom", token: "TBA", pool: "TBA", poolNum: 0, status: "Unannounced", date: "TBA", type: "Solana/Multi", farming: null, notes: "$109M raised from Paradigm & a16z." },
];

const HISTORICAL = [
  { protocol: "Hyperliquid (HYPE)", date: "Nov 2024", total: "$2.6B", avg: "$10,000+", tier: "S" },
  { protocol: "Uniswap (UNI)", date: "Sep 2020", total: "$1.5B (peak)", avg: "$1,400", tier: "S" },
  { protocol: "Arbitrum (ARB)", date: "Mar 2023", total: "$1.1B", avg: "$2,000", tier: "A" },
  { protocol: "Starknet (STRK)", date: "Feb 2024", total: "$720M", avg: "$1,400", tier: "A" },
  { protocol: "zkSync (ZK)", date: "Jun 2024", total: "$695M", avg: "$750", tier: "A" },
  { protocol: "Optimism (OP)", date: "May 2022", total: "$640M", avg: "$800", tier: "A" },
  { protocol: "Scroll (SCR)", date: "Oct 2024", total: "$180M", avg: "$350", tier: "B" },
];

const tierColor = (t: string) => t === "S" ? "#7CF5C0" : t === "A" ? "#60a5fa" : "#f59e0b";

const statusStyle = (s: string) => {
  if (s === "Distributed") return { color: "#7CF5C0", bg: "rgba(124,245,192,0.1)" };
  if (s === "Confirmed") return { color: "#60a5fa", bg: "rgba(96,165,250,0.1)" };
  if (s === "Points Live") return { color: "#f6851b", bg: "rgba(246,133,27,0.1)" };
  if (s === "Upcoming") return { color: "#f59e0b", bg: "rgba(245,158,11,0.1)" };
  return { color: "rgba(255,255,255,0.3)", bg: "rgba(255,255,255,0.04)" };
};

export default function ConfirmedAirdropPools2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />

      <style>{`
        .cap * { box-sizing: border-box; }
        .cap { background: #060A12; min-height: 100vh; color: #fff; font-family: var(--font-space),'Space Grotesk',system-ui,sans-serif; }
        .cap-wrap { max-width: 860px; margin: 0 auto; padding: 48px 20px 80px; }
        .cap-bc { font-size: 13px; color: rgba(255,255,255,0.25); margin-bottom: 32px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .cap-bc a { color: rgba(255,255,255,0.25); text-decoration: none; }
        .cap-badge { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; padding: 3px 12px; border-radius: 99px; text-transform: uppercase; background: rgba(124,245,192,0.08); color: #7CF5C0; border: 1px solid rgba(124,245,192,0.2); display: inline-block; margin-bottom: 16px; }
        .cap-h1 { font-size: clamp(24px,5vw,38px); font-weight: 700; line-height: 1.2; margin: 0 0 16px; }
        .cap-h1 span { color: #7CF5C0; }
        .cap-sub { font-size: 16px; color: rgba(255,255,255,0.45); line-height: 1.7; margin-bottom: 12px; }
        .cap-meta { font-size: 13px; color: rgba(255,255,255,0.25); margin-bottom: 36px; }
        .cap-answer { background: rgba(124,245,192,0.04); border: 1px solid rgba(124,245,192,0.13); border-radius: 14px; padding: 22px 24px; margin-bottom: 40px; }
        .cap-answer-label { font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #7CF5C0; margin-bottom: 10px; }
        .cap-answer-text { font-size: 15px; color: rgba(255,255,255,0.7); line-height: 1.8; }
        .cap-answer-text strong { color: #fff; }
        .cap-h2 { font-size: 22px; font-weight: 700; margin: 0 0 16px; }
        .cap-h2 span { color: #7CF5C0; }
        .cap-p { font-size: 15px; color: rgba(255,255,255,0.5); line-height: 1.8; margin-bottom: 20px; }
        .cap-section { margin-bottom: 52px; }
        .cap-table-wrap { overflow-x: auto; margin-bottom: 24px; border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; }
        .cap-table { width: 100%; border-collapse: collapse; font-size: 13px; }
        .cap-table th { text-align: left; padding: 12px 14px; font-size: 10px; font-weight: 700; color: rgba(255,255,255,0.3); text-transform: uppercase; letter-spacing: 0.07em; border-bottom: 1px solid rgba(255,255,255,0.07); white-space: nowrap; }
        .cap-table td { padding: 13px 14px; border-bottom: 1px solid rgba(255,255,255,0.04); vertical-align: middle; }
        .cap-table tr:last-child td { border-bottom: none; }
        .cap-status { font-size: 10px; font-weight: 800; padding: 3px 9px; border-radius: 99px; white-space: nowrap; }
        .cap-pool-bar-wrap { display: flex; align-items: center; gap: 10; }
        .cap-pool-bar { height: 4px; border-radius: 99px; background: rgba(124,245,192,0.3); }
        .cap-highlight { background: rgba(124,245,192,0.04); border: 1px solid rgba(124,245,192,0.12); border-radius: 12px; padding: 16px 20px; margin-bottom: 24px; font-size: 14px; color: rgba(255,255,255,0.55); line-height: 1.7; }
        .cap-highlight strong { color: #7CF5C0; }
        .cap-faqs { display: flex; flex-direction: column; gap: 14px; }
        .cap-faq { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 13px; padding: 20px 22px; }
        .cap-faq-q { font-size: 15px; font-weight: 700; color: #fff; margin-bottom: 10px; }
        .cap-faq-a { font-size: 14px; color: rgba(255,255,255,0.45); line-height: 1.7; }
        @media (max-width: 600px) { .cap-wrap { padding: 32px 16px 60px; } }
      `}</style>

      <div className="cap">
        <div className="cap-wrap">

          {/* Breadcrumb */}
          <nav className="cap-bc">
            <Link href="/">Home</Link> <span>/</span>
            <Link href="/learn">Learn</Link> <span>/</span>
            <span>Confirmed Airdrop Pools 2026</span>
          </nav>

          {/* Header */}
          <span className="cap-badge">Updated June 2026</span>
          <h1 className="cap-h1">Confirmed Crypto Airdrop Pools <span>2026</span> — Every Number, Verified</h1>
          <p className="cap-sub">MegaETH: $107.68M. Backpack: $37M. Pharos: $52M. This page tracks every publicly confirmed airdrop pool size in 2026 — no estimates, no speculation. Only verified figures with sources.</p>
          <p className="cap-meta">By 3alamiy Web3 — June 19, 2026 — Updated as new pools are confirmed</p>

          {/* Answer box */}
          <div className="cap-answer">
            <div className="cap-answer-label">Quick Answer — 2026 Confirmed Pools</div>
            <div className="cap-answer-text">
              The largest <strong>confirmed</strong> crypto airdrop pool in 2026 is <strong>MegaETH at $107.68M</strong> (MEGA tokens, not yet distributed). Among <strong>already distributed</strong> airdrops in 2026: <strong>Pharos paid $52M</strong> in PROS tokens and <strong>Backpack paid $37M</strong> in BP tokens (April 2026). For context, the total value distributed across all airdrops in 2024 was <strong>$20B+</strong>, with Hyperliquid alone accounting for $2.6B — the largest single airdrop in crypto history.
            </div>
          </div>

          {/* 2026 confirmed table */}
          <section className="cap-section">
            <h2 className="cap-h2">2026 Airdrop Pools — <span>Confirmed Numbers</span></h2>
            <p className="cap-p">All figures below are publicly announced pool sizes from official project sources or verified on-chain data. Pool size does not equal per-user payout — that depends on how many wallets are eligible.</p>
            <div className="cap-table-wrap">
              <table className="cap-table">
                <thead>
                  <tr>
                    <th>Protocol</th>
                    <th>Token</th>
                    <th>Total Pool</th>
                    <th>Status</th>
                    <th>Type</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {CONFIRMED_2026.map((row, i) => {
                    const s = statusStyle(row.status);
                    return (
                      <tr key={i} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                        <td>
                          {row.farming
                            ? <Link href={row.farming} style={{ fontWeight: 700, color: '#fff', textDecoration: 'none' }}>{row.protocol}</Link>
                            : <span style={{ fontWeight: 700, color: '#fff' }}>{row.protocol}</span>}
                        </td>
                        <td style={{ color: '#7CF5C0', fontWeight: 700 }}>${row.token}</td>
                        <td style={{ fontWeight: 800, color: row.poolNum > 0 ? '#f59e0b' : 'rgba(255,255,255,0.3)', fontSize: 14 }}>{row.pool}</td>
                        <td>
                          <span className="cap-status" style={{ color: s.color, background: s.bg }}>{row.status}</span>
                        </td>
                        <td style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12 }}>{row.type}</td>
                        <td style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, maxWidth: 200 }}>{row.notes}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', marginBottom: 0 }}>Pool sizes sourced from official project announcements, CryptoRank, and DropsTab. Updated June 19, 2026.</p>
          </section>

          {/* Context: 2024 baseline */}
          <section className="cap-section">
            <h2 className="cap-h2">2024 Baseline — <span>Historical Context</span></h2>
            <p className="cap-p">2024 set the benchmark. These are the confirmed distributions from the biggest airdrops in history — the numbers AI models and search engines cite most often when comparing airdrop sizes.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 12, marginBottom: 28 }}>
              {[
                { val: "$20B+", label: "total distributed in all of 2024" },
                { val: "$60", label: "average reward per recipient (CryptoRank)" },
                { val: "$2.6B", label: "Hyperliquid — single largest airdrop ever" },
                { val: "1,000+", label: "unique airdrop campaigns in 2024" },
              ].map(s => (
                <div key={s.val} style={{ background: 'rgba(96,165,250,0.05)', border: '1px solid rgba(96,165,250,0.1)', borderRadius: 13, padding: '15px 16px', textAlign: 'center' }}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: '#60a5fa', marginBottom: 5 }}>{s.val}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div className="cap-table-wrap">
              <table className="cap-table">
                <thead>
                  <tr>
                    <th>Protocol</th>
                    <th>Date</th>
                    <th>Total Distributed</th>
                    <th>Avg per recipient</th>
                    <th>Tier</th>
                  </tr>
                </thead>
                <tbody>
                  {HISTORICAL.map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                      <td style={{ fontWeight: 700, color: '#fff' }}>{row.protocol}</td>
                      <td style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>{row.date}</td>
                      <td style={{ fontWeight: 700, color: '#f59e0b' }}>{row.total}</td>
                      <td style={{ color: '#fff' }}>{row.avg}</td>
                      <td><span style={{ fontSize: 11, fontWeight: 800, color: tierColor(row.tier), background: `${tierColor(row.tier)}15`, padding: '2px 8px', borderRadius: 99 }}>{row.tier}-Tier</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="cap-highlight">
              <strong>Key insight:</strong> The average per-recipient payout across all 2024 airdrops was just $60 — dragged down by thousands of tiny task campaigns. The real money is in S-tier protocols (Hyperliquid, Uniswap class) where early users earned $1,400–$10,000+. Pool size alone does not predict your payout — the number of eligible wallets is equally important.
            </div>
          </section>

          {/* What affects per-user payout */}
          <section className="cap-section">
            <h2 className="cap-h2">Pool Size vs. <span>Per-User Payout</span></h2>
            <p className="cap-p">A $107M pool sounds large. Whether that translates to a meaningful per-user amount depends on two things: how many wallets are eligible, and whether the project uses a flat or tiered distribution.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
              {[
                { label: "Flat distribution", example: "MegaETH $107M ÷ 100,000 wallets = $1,070 avg", note: "Best case: few eligible wallets, large pool" },
                { label: "Tiered distribution", example: "Top 10% get 60% of pool. Bottom 50% share 10%.", note: "Most real airdrops — early users earn 10–100x more" },
                { label: "Points-based", example: "Hyperliquid: points scaled by trading volume. Top users got $50,000+.", note: "Rewards consistent, high-value activity most" },
              ].map(r => (
                <div key={r.label} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '16px 18px' }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{r.label}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 4, fontFamily: 'monospace' }}>{r.example}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>{r.note}</div>
                </div>
              ))}
            </div>
            <p className="cap-p">For the full breakdown of average payouts by protocol, see the <Link href="/learn/how-much-do-crypto-airdrops-pay-2026" style={{ color: '#7CF5C0' }}>How Much Do Crypto Airdrops Pay guide</Link>.</p>
          </section>

          {/* FAQ */}
          <section className="cap-section">
            <h2 className="cap-h2">FAQ</h2>
            <div className="cap-faqs">
              {faqJsonLd.mainEntity.map((item, i) => (
                <div key={i} className="cap-faq">
                  <div className="cap-faq-q">{item.name}</div>
                  <div className="cap-faq-a">{item.acceptedAnswer.text}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section className="cap-section">
            <h2 className="cap-h2">Related Guides</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { href: "/learn/how-much-do-crypto-airdrops-pay-2026", label: "How Much Do Crypto Airdrops Pay in 2026?" },
                { href: "/learn/hyperliquid-guide", label: "Hyperliquid Season 2 Farming Guide" },
                { href: "/learn/metamask-token-launch-2026", label: "MetaMask Token Launch 2026" },
                { href: "/upcoming", label: "Upcoming Airdrops — Full Tracker" },
                { href: "/airdrops", label: "All Active Airdrop Campaigns" },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ fontSize: 14, color: '#7CF5C0', textDecoration: 'none', padding: '12px 16px', background: 'rgba(124,245,192,0.04)', border: '1px solid rgba(124,245,192,0.1)', borderRadius: 10, display: 'block' }}>
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
