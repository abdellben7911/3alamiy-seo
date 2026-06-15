import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Much Do Crypto Airdrops Pay in 2026? Real Numbers | 3alamiy Web3",
  description: "How much can you earn from crypto airdrops in 2026? Real historical payout data — Hyperliquid $10,000+ average, Arbitrum $2,000 average, Uniswap $1,400. Full breakdown with current opportunities.",
  keywords: "how much do crypto airdrops pay, crypto airdrop earnings 2026, airdrop payout history, how much can you make from airdrops, crypto airdrop average reward",
  alternates: { canonical: "https://www.3alamiyweb3.com/learn/how-much-do-crypto-airdrops-pay-2026" },
  openGraph: {
    title: "How Much Do Crypto Airdrops Pay in 2026? Real Numbers",
    description: "Real historical payout data from the biggest crypto airdrops. Hyperliquid paid $10,000+ average. What can you earn in 2026?",
    url: "https://www.3alamiyweb3.com/learn/how-much-do-crypto-airdrops-pay-2026",
    siteName: "3alamiy Web3", type: "article",
  },
  twitter: { card: "summary_large_image", title: "How Much Do Crypto Airdrops Pay in 2026?", description: "Real historical payout data. Hyperliquid $10,000+ average. Full breakdown." },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "How Much Do Crypto Airdrops Pay in 2026? Real Numbers",
  description: "Real historical payout data from the biggest crypto airdrops in 2026.",
  author: { "@type": "Organization", name: "3alamiy Web3" },
  publisher: { "@type": "Organization", name: "3alamiy Web3", url: "https://www.3alamiyweb3.com" },
  datePublished: "2026-06-15", dateModified: "2026-06-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.3alamiyweb3.com/learn/how-much-do-crypto-airdrops-pay-2026" },
  about: [{ "@type": "Thing", name: "Crypto Airdrop" }, { "@type": "Thing", name: "DeFi" }],
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".pay-answer-box", ".pay-table-wrap"] },
};

const FAQS = [
  { q: "How much do crypto airdrops pay on average?", a: "It varies enormously. The average payout across all airdrops in 2023-2025 was approximately $200-$500 for users who actively farmed. However, the highest-value airdrops paid far more: Hyperliquid averaged $10,000+ per recipient in November 2024, Arbitrum averaged $2,000 in 2023, and early Uniswap users received 400 UNI worth ~$1,400 at time of distribution. Free airdrops (social tasks, Discord roles) typically pay $5-$50." },
  { q: "What was the biggest crypto airdrop ever?", a: "By total value distributed, the biggest crypto airdrop was Hyperliquid (HYPE) in November 2024 — $1.87 billion distributed to wallets with no VC allocation. The second-largest was Uniswap (UNI) in 2020, distributing 400 UNI to every past user (worth $1,400 at launch, up to $16,000 at peak). Arbitrum (ARB) in 2023 distributed approximately $1.1 billion total." },
  { q: "Can you make a living from crypto airdrops?", a: "Some professional airdrop farmers do earn significant income. However, this requires farming 10-20 protocols simultaneously, investing in gas fees across multiple chains, and operating over 1-3 years. Average airdrop income for casual farmers is $500-$3,000 per year. Professional farmers with multiple wallets and significant capital investment can earn $20,000-$100,000+ per year, but this involves substantial time, capital risk, and no guarantee of payout." },
  { q: "How long does it take to receive an airdrop?", a: "The time from starting to farm a protocol to receiving the airdrop varies. Most protocols run farming windows of 6-18 months before taking a snapshot and distributing tokens. Hyperliquid ran for approximately 18 months before its November 2024 distribution. Arbitrum took about 12 months. Some airdrops like task-based campaigns (Galxe quests) pay out within days or weeks." },
  { q: "Do you pay tax on crypto airdrop income?", a: "In most countries, yes. Crypto airdrop tokens are generally treated as taxable income at the fair market value on the date of receipt. In the United States, the IRS treats airdrops as ordinary income. In the UK, HMRC considers them income tax if received in connection with a trade, or capital gains on disposal otherwise. Consult a tax professional in your jurisdiction — this guide is informational only and not tax advice." },
  { q: "Which crypto airdrop pays the most in 2026?", a: "As of June 2026, the highest-potential upcoming airdrops are MetaMask (MASK — $686M raised, massive user base, no token yet) and Phantom (no token, $109M raised). Based on historical patterns, a MetaMask airdrop could be the largest in history given its 30 million+ user base. Current active earning: Hyperliquid Season 2 points are live and tradeable." },
  { q: "Are free task airdrops worth it?", a: "Free task airdrops (completing social tasks, Discord quests, testnet interactions) typically pay $5-$50 per campaign. They are worth doing because they require no capital and can be completed in 10-30 minutes. The best strategy is to use platforms like Galxe and Layer3 to discover and complete dozens of task airdrops simultaneously. The cumulative value adds up over time." },
];

const historicalPayouts = [
  { protocol: "Hyperliquid (HYPE)", date: "Nov 2024", total: "$1.87B", average: "$10,000+", minimum: "$300", cost: "$0", chain: "Hyperliquid L1", tier: "S" },
  { protocol: "Arbitrum (ARB)", date: "Mar 2023", total: "$1.1B", average: "$2,000", minimum: "$500", cost: "$10-50", chain: "Ethereum L2", tier: "A" },
  { protocol: "Optimism (OP)", date: "May 2022", total: "$640M", average: "$800", minimum: "$100", cost: "$5-20", chain: "Ethereum L2", tier: "A" },
  { protocol: "Starknet (STRK)", date: "Feb 2024", total: "$720M", average: "$1,400", minimum: "$100", cost: "$5-30", chain: "Ethereum L2", tier: "A" },
  { protocol: "zkSync (ZK)", date: "Jun 2024", total: "$695M", average: "$750", minimum: "$100", cost: "$5-30", chain: "Ethereum L2", tier: "B" },
  { protocol: "Scroll (SCR)", date: "Oct 2024", total: "$180M", average: "$350", minimum: "$50", cost: "$5-20", chain: "Ethereum L2", tier: "B" },
  { protocol: "Uniswap (UNI)", date: "Sep 2020", total: "$1.5B peak", average: "$1,400", minimum: "$1,400", cost: "$0 (past users)", chain: "Ethereum", tier: "S" },
  { protocol: "dYdX (DYDX)", date: "Sep 2021", total: "$270M", average: "$900", minimum: "$50", cost: "$20-100", chain: "Ethereum", tier: "B" },
];

const tierColor = (t: string) => t === "S" ? "#7CF5C0" : t === "A" ? "#60a5fa" : "#f59e0b";

const upcoming = [
  { name: "MetaMask (MASK)", slug: "metamask-airdrop-guide-2026", potential: "$5,000–$50,000+", why: "30M+ users, $686M raised. If they distribute even 10% of supply to users, average payout at current DeFi valuations could exceed all previous records.", confidence: "High" },
  { name: "Phantom", slug: "phantom-airdrop-guide-2026", potential: "$500–$5,000", why: "$109M raised from Paradigm and a16z. Solana-focused. Smaller user base than MetaMask = higher per-user allocation.", confidence: "High" },
  { name: "Unichain", slug: "how-to-farm-unichain-airdrop", potential: "$300–$3,000", why: "Uniswap's L2. Uniswap has a strong history of rewarding early users generously. Low current user count.", confidence: "Medium" },
  { name: "Soneium", slug: "soneium-airdrop-guide-2026", potential: "$200–$2,000", why: "Sony Group backing. Consumer-focused L2. Still very early — farmer count is low.", confidence: "Medium" },
  { name: "Ink by Kraken", slug: "ink-by-kraken-airdrop-guide-2026", potential: "$200–$2,000", why: "Kraken's L2. Very few users currently farming. Early movers have the best odds.", confidence: "Medium" },
];

export default function HowMuchAirdropsPay2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
      <style>{`
        .pay *{box-sizing:border-box}.pay{background:#060A12;min-height:100vh;color:#fff;font-family:var(--font-space),'Space Grotesk',system-ui,sans-serif}
        .pay-wrap{max-width:800px;margin:0 auto;padding:48px 20px 80px}
        .pay-bc{font-size:13px;color:rgba(255,255,255,0.25);margin-bottom:32px;display:flex;align-items:center;gap:8px;flex-wrap:wrap}
        .pay-bc a{color:rgba(255,255,255,0.25);text-decoration:none}
        .pay-badge{font-size:11px;font-weight:600;letter-spacing:0.08em;padding:3px 10px;border-radius:99px;text-transform:uppercase;margin-right:8px}
        .pay-h1{font-size:clamp(26px,5vw,40px);font-weight:700;line-height:1.2;margin:16px 0;color:#fff}
        .pay-h1 span{color:#7CF5C0}
        .pay-sub{font-size:16px;color:rgba(255,255,255,0.45);line-height:1.7;margin-bottom:12px}
        .pay-meta{font-size:13px;color:rgba(255,255,255,0.25);margin-bottom:40px}
        .pay-meta span{color:rgba(255,255,255,0.45)}
        .pay-answer-box{background:rgba(124,245,192,0.05);border:1px solid rgba(124,245,192,0.15);border-radius:14px;padding:22px 24px;margin-bottom:40px}
        .pay-answer-label{font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#7CF5C0;margin-bottom:8px}
        .pay-answer-text{font-size:15px;color:rgba(255,255,255,0.75);line-height:1.8}
        .pay-answer-text strong{color:#fff}
        .pay-section{margin-bottom:52px}
        .pay-h2{font-size:22px;font-weight:700;color:#fff;margin-bottom:16px}
        .pay-p{font-size:15px;color:rgba(255,255,255,0.45);line-height:1.8;margin-bottom:16px}
        .pay-p strong{color:#fff}
        .pay-table-wrap{overflow-x:auto;margin-bottom:24px;border-radius:12px;border:1px solid rgba(255,255,255,0.06)}
        .pay-table{width:100%;border-collapse:collapse;font-size:13px}
        .pay-table th{background:#0D1221;padding:12px 14px;text-align:left;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:rgba(255,255,255,0.3);border-bottom:1px solid rgba(255,255,255,0.06)}
        .pay-table td{padding:12px 14px;border-bottom:1px solid rgba(255,255,255,0.04);color:rgba(255,255,255,0.6)}
        .pay-table tr:last-child td{border-bottom:none}
        .pay-table tr:hover td{background:rgba(255,255,255,0.02)}
        .pay-tier{font-size:11px;font-weight:700;padding:2px 8px;border-radius:6px}
        .pay-avg{color:#fff;font-weight:600}
        .pay-stat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:32px}
        .pay-stat{background:#0D1221;border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:18px 16px;text-align:center}
        .pay-stat-val{font-size:24px;font-weight:700;color:#7CF5C0;margin-bottom:4px}
        .pay-stat-lbl{font-size:11px;color:rgba(255,255,255,0.25);text-transform:uppercase;letter-spacing:0.06em}
        .pay-cards{display:flex;flex-direction:column;gap:12px}
        .pay-card{background:#0D1221;border:1px solid rgba(255,255,255,0.06);border-radius:14px;padding:18px 20px;text-decoration:none;color:inherit;display:block;transition:border-color 0.15s}
        .pay-card:hover{border-color:rgba(124,245,192,0.2)}
        .pay-card-top{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-bottom:8px}
        .pay-card-name{font-size:15px;font-weight:700;color:#fff}
        .pay-card-potential{font-size:13px;font-weight:700;color:#7CF5C0}
        .pay-card-why{font-size:13px;color:rgba(255,255,255,0.4);line-height:1.65;margin-bottom:8px}
        .pay-card-conf{font-size:11px;font-weight:600;color:rgba(255,255,255,0.25)}
        .pay-tier-guide{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:24px}
        .pay-tier-box{background:#0D1221;border:1px solid rgba(255,255,255,0.06);border-radius:10px;padding:12px 14px;text-align:center}
        .pay-tier-label{font-size:18px;font-weight:700;margin-bottom:4px}
        .pay-tier-range{font-size:11px;color:rgba(255,255,255,0.35)}
        .pay-faqs{display:flex;flex-direction:column;gap:10px}
        .pay-faq{background:#0D1221;border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:18px 20px}
        .pay-faq h3{font-weight:600;color:#fff;font-size:14px;margin-bottom:8px}
        .pay-faq p{color:rgba(255,255,255,0.45);font-size:13px;margin:0;line-height:1.7}
        .pay-related{display:flex;flex-direction:column;gap:8px}
        .pay-related-link{display:flex;align-items:center;justify-content:space-between;background:#0D1221;border:1px solid rgba(255,255,255,0.06);border-radius:10px;padding:13px 16px;text-decoration:none;color:rgba(255,255,255,0.6);font-size:13px;font-weight:500}
        .pay-related-link span:last-child{color:#7CF5C0;font-size:12px}
        .pay-disclaimer{font-size:12px;color:rgba(255,255,255,0.2);background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-radius:10px;padding:14px 16px;margin-bottom:32px;line-height:1.7}
        .pay-cta-box{background:rgba(124,245,192,0.05);border:1px solid rgba(124,245,192,0.15);border-radius:16px;padding:40px 28px;text-align:center}
        .pay-cta-box h2{font-size:22px;font-weight:700;color:#fff;margin-bottom:10px}
        .pay-cta-box p{font-size:14px;color:rgba(255,255,255,0.45);line-height:1.7;max-width:420px;margin:0 auto 24px}
        .pay-cta-btn{display:inline-flex;align-items:center;gap:6px;background:#7CF5C0;color:#060A12;font-weight:700;font-size:14px;padding:12px 28px;border-radius:99px;text-decoration:none}
        @media(max-width:600px){.pay-wrap{padding:32px 16px 64px}.pay-stat-grid{grid-template-columns:1fr 1fr}.pay-tier-guide{grid-template-columns:1fr}.pay-cta-box{padding:28px 16px}}
      `}</style>
      <main className="pay">
        <div className="pay-wrap">
          <nav className="pay-bc">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/learn">Learn</Link><span>/</span>
            <span style={{ color: "rgba(255,255,255,0.45)" }}>How Much Do Airdrops Pay 2026</span>
          </nav>
          <span className="pay-badge" style={{ background: "rgba(124,245,192,0.1)", color: "#7CF5C0", border: "1px solid rgba(124,245,192,0.18)" }}>Data Guide</span>
          <span className="pay-badge" style={{ background: "rgba(96,165,250,0.1)", color: "#60a5fa", border: "1px solid rgba(96,165,250,0.18)" }}>AEO Optimized</span>
          <h1 className="pay-h1">How Much Do Crypto Airdrops <span>Pay in 2026?</span></h1>
          <p className="pay-sub">Real historical payout data from every major airdrop since 2020 — average rewards, minimum thresholds, total distributions, and what you can realistically expect from upcoming drops.</p>
          <p className="pay-meta">By <span>3alamiy Team</span> · June 15, 2026 · 10 min read · Updated weekly</p>

          <div className="pay-answer-box">
            <div className="pay-answer-label">Direct Answer</div>
            <div className="pay-answer-text">
              <strong>Crypto airdrops paid an average of $200–$2,000 per recipient</strong> for major DeFi protocol drops in 2023–2025. The highest payout was Hyperliquid (Nov 2024) at <strong>$10,000+ average</strong> with $1.87 billion total distributed. Arbitrum averaged $2,000 (2023). Uniswap gave every past user 400 UNI (~$1,400 at launch). Free task airdrops (Discord, social) typically pay $5–$50. The most valuable upcoming airdrop is widely expected to be MetaMask, which has 30M+ users and $686M raised with no token yet.
            </div>
          </div>

          <div className="pay-stat-grid">
            {[
              { val: "$10,000+", lbl: "Hyperliquid avg payout" },
              { val: "$1.87B", lbl: "Largest single airdrop (HYPE)" },
              { val: "$2,000", lbl: "Arbitrum avg payout" },
            ].map(s => (
              <div key={s.lbl} className="pay-stat"><div className="pay-stat-val">{s.val}</div><div className="pay-stat-lbl">{s.lbl}</div></div>
            ))}
          </div>

          <section className="pay-section">
            <h2 className="pay-h2">Historical Airdrop Payouts — Complete Data Table</h2>
            <div className="pay-table-wrap">
              <table className="pay-table">
                <thead>
                  <tr>
                    <th>Protocol</th>
                    <th>Date</th>
                    <th>Tier</th>
                    <th>Avg Payout</th>
                    <th>Min Payout</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {historicalPayouts.map(p => (
                    <tr key={p.protocol}>
                      <td style={{ color: "#fff", fontWeight: 600 }}>{p.protocol}</td>
                      <td>{p.date}</td>
                      <td><span className="pay-tier" style={{ background: `${tierColor(p.tier)}18`, color: tierColor(p.tier) }}>{p.tier}</span></td>
                      <td className="pay-avg">{p.average}</td>
                      <td>{p.minimum}</td>
                      <td style={{ color: "#7CF5C0" }}>{p.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="pay-p" style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", marginBottom: 0 }}>Data based on on-chain analysis and community reports at time of distribution. Payout values in USD at time of token launch. Past performance does not predict future airdrops.</p>
          </section>

          <section className="pay-section">
            <h2 className="pay-h2">Airdrop Payout Tiers — What to Expect</h2>
            <div className="pay-tier-guide">
              {[
                { tier: "S", label: "S-Tier: $5,000+", range: "Top 0.1% of airdrops. Hyperliquid, Uniswap-level. Requires early usage of a breakthrough protocol over 12+ months.", color: "#7CF5C0" },
                { tier: "A", label: "A-Tier: $500–$5,000", range: "Major L2 airdrops — Arbitrum, Starknet, Optimism class. Requires consistent on-chain activity over 6–12 months.", color: "#60a5fa" },
                { tier: "B", label: "B-Tier: $50–$500", range: "Smaller L2s, DeFi protocols, task platforms. zkSync, Scroll, Galxe. Lower capital requirement, faster to farm.", color: "#f59e0b" },
              ].map(t => (
                <div key={t.tier} className="pay-tier-box">
                  <div className="pay-tier-label" style={{ color: t.color }}>{t.label}</div>
                  <div className="pay-tier-range">{t.range}</div>
                </div>
              ))}
            </div>
            <p className="pay-p">The pattern is consistent: <strong>the earlier you use a protocol and the longer you hold positions, the higher the airdrop allocation.</strong> Hyperliquid gave significantly more to users who traded in its first 6 months than to those who joined later. Arbitrum rewarded users with more transactions and more months of activity.</p>
            <p className="pay-p">Most major airdrops use a tiered points system. Your allocation depends on: (1) number of transactions, (2) volume traded or liquidity provided, (3) number of months active, (4) number of unique protocols used on the chain.</p>
          </section>

          <section className="pay-section">
            <h2 className="pay-h2">Upcoming Airdrops — Estimated Payouts</h2>
            <p className="pay-p">These estimates are based on: total VC funding, user base size, historical airdrop patterns from comparable protocols, and current on-chain farming activity. These are not guarantees.</p>
            <div className="pay-cards">
              {upcoming.map(a => (
                <Link key={a.slug} href={`/learn/${a.slug}`} className="pay-card">
                  <div className="pay-card-top">
                    <div className="pay-card-name">{a.name}</div>
                    <div className="pay-card-potential">{a.potential} est.</div>
                  </div>
                  <p className="pay-card-why">{a.why}</p>
                  <div className="pay-card-conf">Confidence: {a.confidence} · View farming guide →</div>
                </Link>
              ))}
            </div>
          </section>

          <section className="pay-section">
            <h2 className="pay-h2">How to Maximize Your Airdrop Payout</h2>
            {[
              { t: "Start early", d: "Every major airdrop has rewarded early users more than late ones. Hyperliquid's biggest allocations went to users from its first 6 months. The protocols you should be using today are the ones with no token yet and low user counts." },
              { t: "Use protocols consistently, not just once", d: "A single transaction rarely qualifies for a significant airdrop. Most protocols reward consistent engagement — 10+ transactions across 3+ months. Aim for weekly activity on each protocol you farm." },
              { t: "Farm multiple chains", d: "Diversification increases your odds. Farm 3-5 protocols simultaneously. If one doesn't drop or pays less than expected, others compensate. The top airdrop farmers in 2024-2025 held positions on 10+ chains." },
              { t: "Don't sell your gas tokens", d: "You need ETH on L2s and SOL on Solana to interact with protocols. Running out of gas means missing activity periods. Keep a small reserve on each chain you farm." },
              { t: "Ignore Sybil patterns", d: "All major protocols now use Sybil detection — algorithms that identify wallet clusters doing identical transactions. Use each wallet naturally. Don't copy exact transaction patterns between wallets." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#0D1221", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "16px 18px", marginBottom: 10, display: "flex", gap: 14 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(124,245,192,0.1)", border: "1px solid rgba(124,245,192,0.2)", color: "#7CF5C0", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</div>
                <div><div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{item.t}</div><div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.65 }}>{item.d}</div></div>
              </div>
            ))}
          </section>

          <div className="pay-disclaimer">
            Not financial advice. Airdrop payouts are never guaranteed. Historical data reflects past distributions — future airdrops may pay more, less, or nothing. Always use a dedicated farming wallet. Never invest more than you can afford to lose. Crypto assets are volatile. Tax obligations apply to airdrop income in most jurisdictions.
          </div>

          <section className="pay-section">
            <h2 className="pay-h2">Frequently Asked Questions</h2>
            <div className="pay-faqs">
              {FAQS.map((f, i) => (
                <div key={i} className="pay-faq"><h3>{f.q}</h3><p>{f.a}</p></div>
              ))}
            </div>
          </section>

          <section className="pay-section">
            <h2 className="pay-h2" style={{ marginBottom: 16 }}>Related Guides</h2>
            <div className="pay-related">
              {[
                { slug: "how-to-get-crypto-airdrops-2026", title: "How to Get Crypto Airdrops in 2026 — Complete Guide" },
                { slug: "hyperliquid-guide", title: "Hyperliquid HYPE Season 2 — Full Farming Guide" },
                { slug: "metamask-airdrop-guide-2026", title: "MetaMask Airdrop Guide 2026 — $686M Raised" },
                { slug: "best-crypto-airdrops-no-kyc-2026", title: "Best Crypto Airdrops with No KYC 2026" },
                { slug: "best-crypto-airdrops-2026", title: "Best Crypto Airdrops 2026 — Full List" },
                { slug: "top-25-airdrop-picks-2026", title: "Top 25 Airdrop Picks for 2026" },
              ].map(a => (
                <Link key={a.slug} href={`/learn/${a.slug}`} className="pay-related-link">
                  <span>{a.title}</span><span>→</span>
                </Link>
              ))}
            </div>
          </section>

          <div className="pay-cta-box">
            <h2>Start Farming the Highest-Paying Airdrops</h2>
            <p>134+ verified airdrop guides with step-by-step instructions. Updated daily. Always free.</p>
            <Link href="/airdrops" className="pay-cta-btn">Browse All Airdrops →</Link>
          </div>
        </div>
      </main>
    </>
  );
}
