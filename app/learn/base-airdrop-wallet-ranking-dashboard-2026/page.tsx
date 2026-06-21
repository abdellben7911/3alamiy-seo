import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Base Airdrop Wallet Ranking Dashboard 2026 — Top 2.5M Wallets & $BASE Eligibility",
  description: "A new Base analytics dashboard ranks the top 2.5 million wallets out of 250M+ by real on-chain activity. Check your ranking and learn exactly what metrics matter for a $BASE airdrop in 2026.",
  alternates: { canonical: "https://www.3alamiyweb3.com/learn/base-airdrop-wallet-ranking-dashboard-2026" },
  openGraph: {
    title: "Base Airdrop Wallet Ranking Dashboard 2026 — Are You in the Top 2.5M?",
    description: "Only 1% of 250M+ Base wallets made the cut. Here are the exact criteria and how to improve your ranking before a $BASE airdrop.",
    url: "https://www.3alamiyweb3.com/learn/base-airdrop-wallet-ranking-dashboard-2026",
    siteName: "3alamiy Web3", type: "article",
  },
  twitter: { card: "summary_large_image", title: "Base Wallet Ranking Dashboard 2026 — $BASE Airdrop Eligibility Guide", description: "250M+ wallets on Base. Only 2.5M made the leaderboard. Are you one of them?" },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "Base Airdrop Wallet Ranking Dashboard 2026 — Top 2.5M Wallets & $BASE Eligibility",
  description: "A new Base analytics dashboard ranks the top 2.5 million wallets out of 250M+ by real on-chain activity. Full guide to checking your ranking and qualifying for a $BASE airdrop.",
  author: { "@type": "Organization", name: "3alamiy Web3" },
  publisher: { "@type": "Organization", name: "3alamiy Web3", url: "https://www.3alamiyweb3.com" },
  datePublished: "2026-06-21", dateModified: "2026-06-21",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.3alamiyweb3.com/learn/base-airdrop-wallet-ranking-dashboard-2026" },
};

const faqJsonLd = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Base wallet ranking dashboard?",
      acceptedAnswer: { "@type": "Answer", text: "It is a Base analytics dashboard that ranks the top 2.5 million wallets out of 250 million+ that have ever interacted with Base. The ranking is based on real on-chain activity — minimum criteria include 5+ smart contract interactions, 10+ transactions, 3+ months of activity, and at least 0.01 ETH in transaction volume. The dashboard updates daily and tracks metrics like DEX volume, bridge volume, gas fees, and overall on-chain behavior." },
    },
    {
      "@type": "Question",
      name: "Has Coinbase confirmed a $BASE airdrop?",
      acceptedAnswer: { "@type": "Answer", text: "Coinbase has not officially confirmed a $BASE token or airdrop as of June 2026. Base is a Coinbase-incubated L2 and currently has no native token. However, Base has over 250 million wallet interactions, generates significant fee revenue, and hosts a growing DeFi ecosystem. The existence of on-chain ranking dashboards signals that the community considers retroactive airdrop eligibility highly likely." },
    },
    {
      "@type": "Question",
      name: "What are the minimum criteria to appear on the Base ranking dashboard?",
      acceptedAnswer: { "@type": "Answer", text: "To appear in the top 2.5 million Base wallets, you need at least 5 smart contract interactions, at least 10 transactions, active wallet usage for 3 or more months, and at least 0.01 ETH in total transaction volume. These minimums filter out bots, inactive wallets, and low-effort accounts from the 250M+ wallets that have touched Base." },
    },
    {
      "@type": "Question",
      name: "What metrics does the Base dashboard track for ranking?",
      acceptedAnswer: { "@type": "Answer", text: "The Base wallet ranking dashboard tracks: DEX trading volume, bridge volume (bridging ETH or tokens to/from Base), smart contract interactions, gas fees spent (a proxy for real usage), wallet activity duration (age and consistency), and overall on-chain behavior patterns. Higher scores in each metric improve your leaderboard ranking." },
    },
    {
      "@type": "Question",
      name: "How do I improve my Base wallet ranking?",
      acceptedAnswer: { "@type": "Answer", text: "To improve your Base ranking: trade regularly on Aerodrome or Uniswap V3 (DEX volume), bridge ETH from mainnet to Base monthly (bridge volume), interact with multiple smart contracts such as lending protocols and NFT marketplaces (interaction count), and maintain consistent on-chain activity over several months (duration score). Wallets that reach the top 10% of the 2.5M leaderboard are considered strong airdrop candidates by most analysts." },
    },
  ],
};

const speakableJsonLd = {
  "@context": "https://schema.org", "@type": "WebPage",
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".base-answer", ".base-criteria", ".base-steps", ".base-faqs"] },
  url: "https://www.3alamiyweb3.com/learn/base-airdrop-wallet-ranking-dashboard-2026",
};

const CRITERIA = [
  { metric: "Smart contract interactions", minimum: "5+", why: "Proves you use real protocols, not just transfer ETH between wallets.", icon: "SC" },
  { metric: "Total transactions", minimum: "10+", why: "The absolute floor for being considered a real user.", icon: "TX" },
  { metric: "Wallet active duration", minimum: "3+ months", why: "Filters out farm accounts spun up in bursts. Consistent history matters.", icon: "AGE" },
  { metric: "Transaction volume", minimum: "0.01 ETH+", why: "Even a small volume threshold removes airdrop bots and dust wallets.", icon: "VOL" },
];

const TRACKED_METRICS = [
  { metric: "DEX volume", desc: "Total dollar value traded on Base DEXes like Aerodrome, Uniswap, Baseswap. The highest-weighted metric on most Base ranking dashboards.", importance: "Very High" },
  { metric: "Bridge volume", desc: "ETH and tokens bridged from Ethereum mainnet or other chains to Base via the official bridge or Stargate. Shows commitment to the ecosystem.", importance: "High" },
  { metric: "Smart contract interactions", desc: "Number of unique contracts called — lending, NFT mints, DeFi protocols, games. Breadth matters, not just depth.", importance: "High" },
  { metric: "Gas fees spent", desc: "Total gas paid over wallet lifetime. A reliable proxy for genuine, sustained usage rather than scripted activity.", importance: "Medium" },
  { metric: "Activity duration", desc: "How long the wallet has been consistently active on Base. 6+ months puts you in a strong position; 12+ months in an elite tier.", importance: "High" },
  { metric: "Overall on-chain behavior", desc: "A composite score factoring in tx frequency, protocol diversity, and absence of bot-like patterns.", importance: "Very High" },
];

const STEPS = [
  {
    n: "01",
    title: "Check your current ranking",
    desc: "Search for the Base wallet ranking dashboard and enter your EVM address to see where you stand. You will see your scores across DEX volume, bridge volume, smart contract interactions, gas fees, and activity duration. Note the categories where you score lowest — these are your priority improvement areas.",
  },
  {
    n: "02",
    title: "Bridge ETH to Base if you have not already",
    desc: "Use the official Base bridge (bridge.base.org) or a cross-chain aggregator like Stargate to move ETH from Ethereum mainnet to Base. Bridging establishes you as someone who came from Ethereum — a signal that correlates with early adopter status. Start with at least 0.05 ETH to have meaningful room to transact.",
  },
  {
    n: "03",
    title: "Trade on Aerodrome or Uniswap V3",
    desc: "DEX volume is the most heavily tracked metric. Aerodrome Finance is the dominant DEX on Base by volume. Swap regularly — weekly is better than monthly. You do not need large amounts: consistent smaller trades over time outperform a single large trade. Set up a recurring swap schedule and stick to it.",
  },
  {
    n: "04",
    title: "Interact with multiple protocols",
    desc: "Smart contract breadth matters. Beyond DEX trading, add activity across: lending (Moonwell, Morpho Blue), NFT marketplaces (OpenSea on Base, Zora), yield protocols (Extra Finance, Seamless Protocol), and any Base-native apps you find interesting. Aim for 10+ unique protocols over your farming period.",
  },
  {
    n: "05",
    title: "Maintain monthly on-chain activity",
    desc: "Duration and consistency are distinct from total volume. A wallet active every month for 8 months ranks higher than one that did 10x the volume in a single month. Set a reminder to make at least 3–5 transactions on Base per month. This builds the activity duration score that filters out burst farmers.",
  },
  {
    n: "06",
    title: "Monitor your rank weekly",
    desc: "The dashboard updates daily. Check your rank weekly and use it as a feedback loop. If your DEX volume score stagnates, increase swap frequency. If your protocol interaction count is low, deliberately try a new Base protocol each week. Treat the leaderboard as your farming scorecard.",
  },
];

const SIGNALS = [
  { label: "250M+ wallet interactions", detail: "Base has more wallet interactions than any other Coinbase product. A token launch would be one of the highest-distribution airdrops in history — larger than the Arbitrum or Optimism drops.", color: "#6494FF" },
  { label: "Coinbase's incentive to tokenize", detail: "Coinbase earns fees from Base sequencer revenue. A $BASE token would decentralize sequencer governance, satisfy regulatory calls for decentralization, and reward the community that made Base #3 in L2 TVL.", color: "#7CF5C0" },
  { label: "Precedent: OP and ARB", detail: "Optimism and Arbitrum both airdropped tokens retroactively to early users based on on-chain activity criteria almost identical to what this dashboard tracks — transactions, contract interactions, bridge usage, and duration.", color: "#f59e0b" },
  { label: "No token after 2+ years of mainnet", detail: "Base mainnet launched in August 2023. After more than two years with no token, the probability of a retroactive airdrop to early users increases each month.", color: "#a78bfa" },
  { label: "Active developer ecosystem", detail: "Base hosts 1,000+ deployed protocols, $2B+ TVL, and generates more daily active addresses than most other L2s. A token would strengthen governance and ecosystem incentives.", color: "#f6851b" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />

      <main style={{ minHeight: '100vh', background: '#060A12', color: '#fff', fontFamily: "'Inter', sans-serif" }}>

        {/* Nav */}
        <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748b' }}>
          <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <Link href="/learn" style={{ color: '#64748b', textDecoration: 'none' }}>Learn</Link>
          <span>/</span>
          <span style={{ color: '#94a3b8' }}>Base Wallet Ranking Dashboard 2026</span>
        </nav>

        <article style={{ maxWidth: '760px', margin: '0 auto', padding: '48px 24px 80px' }}>

          {/* Tag */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(100,148,255,0.12)', border: '1px solid rgba(100,148,255,0.25)', color: '#6494FF', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Base Chain</span>
            <span style={{ background: 'rgba(124,245,192,0.08)', border: '1px solid rgba(124,245,192,0.15)', color: '#7CF5C0', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Airdrop Farming</span>
            <span style={{ fontSize: '12px', color: '#475569', display: 'flex', alignItems: 'center' }}>June 21, 2026 &nbsp;·&nbsp; 9 min read</span>
          </div>

          {/* Title */}
          <h1 style={{ fontSize: 'clamp(26px, 5vw, 40px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.15, marginBottom: '20px', color: '#fff' }}>
            Base Airdrop Wallet Ranking Dashboard 2026 — Top 2.5M Wallets and What Makes the Cut
          </h1>

          {/* Intro */}
          <div className="base-answer" style={{ fontSize: '16px', color: '#94a3b8', lineHeight: 1.75, marginBottom: '36px' }}>
            <p style={{ marginBottom: '16px' }}>
              Out of 250 million+ wallets that have ever touched Base, a new analytics dashboard is tracking only the top 2.5 million — ranked by real on-chain activity. That is roughly 1 in every 100 wallets that qualifies. If you are not on that list, you are invisible to any retroactive $BASE airdrop algorithm modeled on this data.
            </p>
            <p style={{ marginBottom: '0' }}>
              This guide covers the exact criteria the dashboard uses, the metrics it tracks, why the top 2.5M matter for a $BASE airdrop, and what to do right now to improve your ranking.
            </p>
          </div>

          {/* Quick Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '48px' }}>
            {[
              { n: '250M+', label: 'Total Base wallets' },
              { n: '2.5M', label: 'Wallets on leaderboard' },
              { n: '1%', label: 'Make the cut' },
            ].map(s => (
              <div key={s.n} style={{ background: '#0D1221', border: '1px solid rgba(100,148,255,0.12)', borderRadius: '12px', padding: '20px 16px', textAlign: 'center' }}>
                <div style={{ fontSize: '26px', fontWeight: 900, color: '#6494FF', letterSpacing: '-0.03em', marginBottom: '4px' }}>{s.n}</div>
                <div style={{ fontSize: '12px', color: '#64748b' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Why This Matters */}
          <section style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '16px', color: '#fff' }}>
              Why the ranking dashboard matters for a $BASE airdrop
            </h2>
            <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.75, marginBottom: '20px' }}>
              When Optimism launched the OP token in 2022 and Arbitrum launched ARB in 2023, both protocols distributed tokens retroactively to wallets based on on-chain activity criteria — number of transactions, bridge usage, protocol interactions, and wallet age. The $BASE situation is structurally identical.
            </p>
            <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.75, marginBottom: '20px' }}>
              No one knows what Coinbase will use as the exact airdrop criteria. But the metrics this dashboard tracks — DEX volume, bridge volume, smart contract interactions, gas fees, and activity duration — are the same metrics every major L2 airdrop has used. Wallets at the top of this leaderboard are, by definition, the wallets most likely to qualify.
            </p>

            {/* Signal boxes */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '24px' }}>
              {SIGNALS.map(s => (
                <div key={s.label} style={{ background: '#0D1221', border: `1px solid ${s.color}22`, borderLeft: `3px solid ${s.color}`, borderRadius: '10px', padding: '16px 20px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: s.color, flexShrink: 0, marginTop: '6px' }} />
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>{s.label}</div>
                    <div style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>{s.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Minimum Criteria */}
          <section style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '8px', color: '#fff' }}>
              Minimum criteria to appear on the leaderboard
            </h2>
            <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6, marginBottom: '24px' }}>
              These four thresholds are the floor. Wallets that do not meet all four are excluded from the 2.5M ranking entirely.
            </p>

            <div className="base-criteria" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {CRITERIA.map(c => (
                <div key={c.metric} style={{ background: '#0D1221', border: '1px solid rgba(100,148,255,0.12)', borderRadius: '12px', padding: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{c.metric}</div>
                    <span style={{ background: 'rgba(100,148,255,0.12)', color: '#6494FF', fontSize: '12px', fontWeight: 800, padding: '2px 8px', borderRadius: '6px' }}>{c.minimum}</span>
                  </div>
                  <div style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.5 }}>{c.why}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Metrics Tracked */}
          <section style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '8px', color: '#fff' }}>
              Metrics the dashboard tracks (and how to score higher)
            </h2>
            <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6, marginBottom: '24px' }}>
              Meeting the minimums puts you on the list. Excelling in these six metrics moves you toward the top — the cohort that will receive the largest airdrop allocations.
            </p>

            <div style={{ background: '#0D1221', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '14px', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                    <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: '11px', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Metric</th>
                    <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: '11px', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.08em' }}>What it captures</th>
                    <th style={{ padding: '14px 20px', textAlign: 'center', fontSize: '11px', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {TRACKED_METRICS.map((m, i) => (
                    <tr key={m.metric} style={{ borderBottom: i < TRACKED_METRICS.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                      <td style={{ padding: '14px 20px', fontSize: '13px', fontWeight: 700, color: '#e2e8f0', whiteSpace: 'nowrap' }}>{m.metric}</td>
                      <td style={{ padding: '14px 20px', fontSize: '13px', color: '#64748b', lineHeight: 1.5 }}>{m.desc}</td>
                      <td style={{ padding: '14px 20px', textAlign: 'center' }}>
                        <span style={{
                          fontSize: '11px', fontWeight: 700, padding: '3px 8px', borderRadius: '6px',
                          background: m.importance === 'Very High' ? 'rgba(124,245,192,0.1)' : m.importance === 'High' ? 'rgba(100,148,255,0.1)' : 'rgba(255,255,255,0.06)',
                          color: m.importance === 'Very High' ? '#7CF5C0' : m.importance === 'High' ? '#6494FF' : '#94a3b8',
                        }}>{m.importance}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* How to Improve */}
          <section style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '8px', color: '#fff' }}>
              How to improve your Base wallet ranking
            </h2>
            <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6, marginBottom: '28px' }}>
              These six steps will move you up the leaderboard. The most impactful thing you can do today is start — duration is the one metric you cannot retroactively manufacture.
            </p>

            <div className="base-steps" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {STEPS.map(step => (
                <div key={step.n} style={{ background: '#0D1221', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '24px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(100,148,255,0.1)', border: '1px solid rgba(100,148,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 800, color: '#6494FF', flexShrink: 0, marginTop: '2px' }}>{step.n}</div>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>{step.title}</div>
                    <div style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.7 }}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Protocols */}
          <section style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '16px', color: '#fff' }}>
              Best Base protocols for building leaderboard activity
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {[
                { name: 'Aerodrome Finance', cat: 'DEX / Vote-escrow', why: 'Highest DEX volume on Base. Swapping and providing liquidity both count toward DEX volume score.' },
                { name: 'Moonwell', cat: 'Lending', why: 'Supply ETH or USDC as collateral. Adds a contract interaction and a unique protocol to your diversity score.' },
                { name: 'Morpho Blue', cat: 'Lending', why: 'Permissionless lending protocol. Active on Base and tracks well in on-chain behavior metrics.' },
                { name: 'Seamless Protocol', cat: 'Lending', why: 'Base-native lending. One of the highest-TVL protocols on Base — adds ecosystem depth to your history.' },
                { name: 'Zora', cat: 'NFT / Creator', why: 'Mint NFTs on Base through Zora to add smart contract interaction diversity beyond DeFi.' },
                { name: 'Base Bridge', cat: 'Bridging', why: 'Official bridge from Ethereum to Base. Use it monthly to build bridge volume — the second most tracked metric.' },
              ].map(p => (
                <div key={p.name} style={{ background: '#0D1221', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '16px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#e2e8f0', marginBottom: '4px' }}>{p.name}</div>
                  <div style={{ fontSize: '11px', color: '#6494FF', marginBottom: '8px', fontWeight: 600 }}>{p.cat}</div>
                  <div style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.55 }}>{p.why}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Who gets the largest allocation */}
          <section style={{ background: '#0D1221', border: '1px solid rgba(100,148,255,0.15)', borderRadius: '16px', padding: '28px 32px', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '16px', color: '#fff' }}>
              Who gets the largest allocation in a retroactive airdrop
            </h2>
            <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.75, marginBottom: '16px' }}>
              In every L2 retroactive airdrop studied (OP, ARB, ZK, STRK), the top allocation tier went to wallets that met multiple criteria simultaneously — not just one at a very high level. The pattern is:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                "High tx count (200+) over a long period (6+ months)",
                "Bridge usage from Ethereum mainnet",
                "Multiple unique protocols used (10+)",
                "Gas fees spent across many months, not concentrated in one burst",
                "Wallet age predating any public announcement of a token",
              ].map(item => (
                <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#6494FF', fontWeight: 800, flexShrink: 0, marginTop: '1px' }}>+</span>
                  <span style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.7, marginTop: '16px', marginBottom: 0 }}>
              Wallets with all five characteristics have received 5–20x the median airdrop allocation in past L2 drops. The dashboard top 10% (250,000 wallets) is where the meaningful allocations are likely to land.
            </p>
          </section>

          {/* FAQ */}
          <section className="base-faqs" style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '24px', color: '#fff' }}>
              Frequently asked questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {faqJsonLd.mainEntity.map(faq => (
                <details key={faq.name} style={{ background: '#0D1221', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '0' }}>
                  <summary style={{ padding: '18px 20px', fontSize: '14px', fontWeight: 700, color: '#e2e8f0', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {faq.name}
                    <span style={{ color: '#475569', fontSize: '18px', flexShrink: 0, marginLeft: '12px' }}>+</span>
                  </summary>
                  <div style={{ padding: '0 20px 18px', fontSize: '14px', color: '#64748b', lineHeight: 1.75, borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '0', paddingTop: '16px' }}>
                    {faq.acceptedAnswer.text}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(100,148,255,0.08), rgba(124,245,192,0.04))', border: '1px solid rgba(100,148,255,0.2)', borderRadius: '16px', padding: '32px', textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#6494FF', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Check your wallet now</div>
            <h3 style={{ fontSize: '22px', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '10px', color: '#fff' }}>
              See how your wallet scores across all Base metrics
            </h3>
            <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '24px', lineHeight: 1.6 }}>
              Run your wallet through the 3alamiy checker to see your on-chain history across Base, Ethereum, Arbitrum, and 5 other chains. Know where you stand before a $BASE announcement.
            </p>
            <Link href="/wallet-checker" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #6494FF, #4f7fe8)', color: '#fff', fontSize: '14px', fontWeight: 800, padding: '14px 32px', borderRadius: '10px', textDecoration: 'none', letterSpacing: '-0.01em' }}>
              Check My Wallet Free
            </Link>
            <p style={{ fontSize: '12px', color: '#374151', marginTop: '12px' }}>No sign-up. No KYC. Paste your address and get your results.</p>
          </div>

          {/* Related */}
          <section>
            <h2 style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '16px', color: '#fff' }}>
              Related guides
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {[
                { slug: 'best-base-airdrops-2026', title: 'Best Base Airdrops 2026', desc: 'Top 10 Base ecosystem opportunities worth farming.' },
                { slug: 'how-to-build-onchain-activity-that-actually-matters', title: 'How to Build On-Chain Activity That Actually Matters', desc: 'The framework airdrop algorithms actually reward.' },
                { slug: 'confirmed-crypto-airdrop-pools-2026', title: 'Confirmed Airdrop Pools 2026', desc: '$107M MegaETH, $37M Backpack, $52M Pharos — confirmed distributions.' },
                { slug: 'how-much-do-crypto-airdrops-pay-2026', title: 'How Much Do Airdrops Pay in 2026?', desc: '$20B+ distributed in 2024. Average vs median vs top-tier payouts.' },
              ].map(r => (
                <Link key={r.slug} href={`/learn/${r.slug}`} style={{ display: 'block', background: '#0D1221', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '16px', textDecoration: 'none' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#e2e8f0', marginBottom: '6px', lineHeight: 1.4 }}>{r.title}</div>
                  <div style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.5 }}>{r.desc}</div>
                </Link>
              ))}
            </div>
          </section>

        </article>
      </main>
    </>
  );
}
