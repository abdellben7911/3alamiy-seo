import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Polymarket $POLY Airdrop: How to Be in the Top 1% — Full Criteria Breakdown',
  description: 'Polymarket confirmed the $POLY token launch. Here are the 7 criteria that will determine your airdrop tier — trading volume, market diversity, account age, and more. Full breakdown of what separates top 1% users.',
  alternates: { canonical: 'https://www.3alamiyweb3.com/learn/polymarket-poly-airdrop-criteria-top-1-percent' },
  openGraph: {
    title: 'Polymarket $POLY Airdrop: How to Be in the Top 1%',
    description: 'Full breakdown of the 7 criteria that determine your POLY airdrop allocation. What top 1% Polymarket users actually do.',
    url: 'https://www.3alamiyweb3.com/learn/polymarket-poly-airdrop-criteria-top-1-percent',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Polymarket $POLY Airdrop: How to Be in the Top 1%',
    description: '7 criteria that will determine your POLY allocation. Full breakdown.',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Polymarket $POLY Airdrop: How to Be in the Top 1% — Full Criteria Breakdown',
  description: 'Polymarket CMO confirmed the POLY token and airdrop. This guide breaks down all 7 likely eligibility criteria and what separates top 1% users from average participants.',
  datePublished: '2026-06-10',
  dateModified: '2026-06-10',
  author: { '@type': 'Organization', name: '3alamiy Web3', url: 'https://www.3alamiyweb3.com' },
  publisher: { '@type': 'Organization', name: '3alamiy Web3', url: 'https://www.3alamiyweb3.com', logo: { '@type': 'ImageObject', url: 'https://www.3alamiyweb3.com/icon.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.3alamiyweb3.com/learn/polymarket-poly-airdrop-criteria-top-1-percent' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is the Polymarket POLY airdrop confirmed?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Polymarket\'s CMO Matthew Modabber publicly confirmed both a POLY token and an airdrop on the Degenz Live podcast. Approximately 5-10% of the total POLY supply is expected to be allocated to active traders and community members. No official launch date has been announced as of June 2026.' },
    },
    {
      '@type': 'Question',
      name: 'What are the Polymarket POLY airdrop criteria?',
      acceptedAnswer: { '@type': 'Answer', text: 'The likely criteria based on community analysis and Polymarket\'s patterns include: (1) Trading volume consistency over time, (2) Number of prediction markets participated in, (3) Account age — older accounts get higher weighting, (4) Market diversity across Sports, Crypto, Politics, and Global Events, (5) Reinvestment of winnings into new positions, (6) Linked social accounts (X/Twitter), (7) Total volume traded. Consistent engagement over months is considered the most important factor.' },
    },
    {
      '@type': 'Question',
      name: 'How do I get into the top 1% for the Polymarket airdrop?',
      acceptedAnswer: { '@type': 'Answer', text: 'The top 1% of Polymarket users trade more than $50,000 total. To reach this tier: trade consistently every week (not just once), participate in 50+ different markets, trade across all 4 categories (Sports, Crypto, Politics, Global Events), reinvest your winnings instead of withdrawing, and link your X/Twitter account. Volume alone is not enough — consistency and diversity of participation matter more.' },
    },
    {
      '@type': 'Question',
      name: 'Does Polymarket trading volume matter for the POLY airdrop?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, but consistent volume matters more than one-time large trades. A user who trades $500 per month for 12 months is likely scored higher than someone who placed a single $5,000 trade. Only 1.7% of Polymarket wallets trade more than $50,000 total — placing you in this group significantly increases your expected allocation.' },
    },
    {
      '@type': 'Question',
      name: 'What categories should I trade on Polymarket?',
      acceptedAnswer: { '@type': 'Answer', text: 'Trade across all 4 major categories: Sports (NFL, NBA, soccer, F1), Crypto (BTC price, altcoin predictions, ETF decisions), Politics (elections, policy, geopolitics), and Global Events (economics, weather events, science). Using all categories signals genuine platform engagement rather than farming a single niche.' },
    },
    {
      '@type': 'Question',
      name: 'How much POLY will the airdrop give?',
      acceptedAnswer: { '@type': 'Answer', text: 'No official allocation has been announced. Based on comparable prediction market token launches, estimates range from $100-500 for average users up to $2,000-10,000+ for top 1% power users. The 5-10% supply allocation for the airdrop divided across active users suggests meaningful rewards for consistent traders.' },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.3alamiyweb3.com' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://www.3alamiyweb3.com/learn' },
    { '@type': 'ListItem', position: 3, name: 'Polymarket POLY Airdrop Top 1% Criteria', item: 'https://www.3alamiyweb3.com/learn/polymarket-poly-airdrop-criteria-top-1-percent' },
  ],
};

const CRITERIA = [
  {
    n: '01',
    title: 'Trading Volume & Consistency',
    tier1: 'Trade $500–$1K+ per month, every month',
    avg: 'One-time large trades or irregular activity',
    detail: 'Consistent monthly volume over 6–12 months is the strongest signal. Platforms reward users who supported them through growth, not those who appeared only when a token was rumored. Aim for at least 10 trades per month at any size.',
    color: '#f59e0b',
  },
  {
    n: '02',
    title: 'Number of Markets Participated In',
    tier1: '50+ unique prediction markets',
    avg: 'Under 10 markets, usually the same topic',
    detail: 'Active participation across many markets signals a genuine platform user. Users who have bet on 50+ different markets — across elections, sports events, crypto prices, and geopolitical events — are far more likely to be classified as organic versus sybil.',
    color: '#f59e0b',
  },
  {
    n: '03',
    title: 'Account Age',
    tier1: 'Account created before 2025',
    avg: 'Account created after airdrop rumor started',
    detail: 'Long-term users who have been on Polymarket since 2023–2024 will almost certainly receive a higher allocation multiplier. Newer accounts, even with high volume, are likely to be discounted. If you have an old account, use it. If not, start now and build months of history.',
    color: '#f59e0b',
  },
  {
    n: '04',
    title: 'Market Diversity',
    tier1: 'All 4 categories: Sports, Crypto, Politics, Global',
    avg: 'Only crypto or only politics markets',
    detail: 'Trading across all major categories — Sports, Crypto, Politics, and Global Events — looks like a real user with genuine interest in prediction markets. Farming only one category (usually crypto price markets) looks like a bot strategy and may be discounted in the allocation formula.',
    color: '#f59e0b',
  },
  {
    n: '05',
    title: 'Reinvestment of Winnings',
    tier1: 'Winnings stay on platform, reinvested into new positions',
    avg: 'Deposit once, withdraw immediately after wins',
    detail: 'Users who reinvest their winnings — cycling profits back into new prediction markets instead of withdrawing — demonstrate deeper platform engagement. It increases your total volume naturally and shows you value the platform beyond a one-time airdrop opportunity.',
    color: '#f59e0b',
  },
  {
    n: '06',
    title: 'Linked Social Account (X/Twitter)',
    tier1: 'X account linked, active, non-bot profile',
    avg: 'No linked social, anonymous wallet only',
    detail: 'Polymarket encourages users to link their X/Twitter account. Linked accounts with genuine social history (not newly created) are harder to sybil and likely receive a boost. Link your X account in Polymarket settings if you haven\'t already.',
    color: '#f59e0b',
  },
  {
    n: '07',
    title: 'Total Volume Traded (All-Time)',
    tier1: '$50,000+ total (top 1.7% of all wallets)',
    avg: 'Under $1,000 all-time',
    detail: 'Only 1.7% of Polymarket wallets have traded more than $50,000 in total volume. Reaching this threshold almost certainly puts you in the highest allocation tier. Even $10,000–$25,000 all-time volume likely qualifies you for a meaningful allocation.',
    color: '#f59e0b',
  },
];

const TIERS = [
  { tier: 'Top 1%', volume: '$50,000+', markets: '100+', age: '2023–2024', est: '$2,000–$10,000+', color: '#f59e0b' },
  { tier: 'Top 5%', volume: '$10,000–$50,000', markets: '30–99', age: '2024', est: '$500–$2,000', color: '#f97316' },
  { tier: 'Top 20%', volume: '$1,000–$10,000', markets: '10–29', age: '2024–2025', est: '$100–$500', color: '#60a5fa' },
  { tier: 'Everyone else', volume: 'Under $1,000', markets: 'Under 10', age: '2025–2026', est: '$10–$100', color: 'rgba(255,255,255,0.3)' },
];

const speakableJsonLd = {
  "@context": "https://schema.org", "@type": "WebPage",
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".pp-faq", ".pp-faqs"] },
  url: "https://www.3alamiyweb3.com/learn/polymarket-poly-airdrop-criteria-top-1-percent",
};

export default function PolymarketTop1Percent() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <style>{`
        .pm1-wrap { min-height:100vh; background:#060A12; font-family:var(--font-space),'Space Grotesk',system-ui,sans-serif; color:#fff; }
        .pm1-hero { background:linear-gradient(180deg,rgba(245,158,11,0.07) 0%,transparent 100%); border-bottom:1px solid rgba(255,255,255,0.06); padding:52px 24px 44px; }
        .pm1-inner { max-width:780px; margin:0 auto; }
        .pm1-breadcrumb { display:flex; align-items:center; gap:6px; font-size:12px; color:rgba(255,255,255,0.28); margin-bottom:24px; flex-wrap:wrap; }
        .pm1-breadcrumb a { color:rgba(255,255,255,0.28); text-decoration:none; }
        .pm1-badge { display:inline-flex; align-items:center; gap:6px; background:rgba(245,158,11,0.1); border:1px solid rgba(245,158,11,0.3); color:#f59e0b; padding:4px 12px; border-radius:99px; font-size:10px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:18px; }
        .pm1-h1 { font-size:clamp(26px,4vw,42px); font-weight:900; letter-spacing:-0.04em; line-height:1.1; margin:0 0 18px; }
        .pm1-h1 span { color:#f59e0b; }
        .pm1-meta { display:flex; gap:16px; flex-wrap:wrap; margin-bottom:20px; font-size:12px; color:rgba(255,255,255,0.35); }
        .pm1-summary { font-size:17px; line-height:1.65; color:rgba(255,255,255,0.72); margin:0; }

        .pm1-body { padding:40px 24px 80px; }
        .pm1-section { margin-bottom:48px; }
        .pm1-h2 { font-size:22px; font-weight:800; letter-spacing:-0.02em; margin:0 0 16px; }
        .pm1-h2 span { color:#f59e0b; }
        .pm1-p { font-size:15px; line-height:1.7; color:rgba(255,255,255,0.68); margin:0 0 14px; }

        /* Confirmed banner */
        .pm1-confirm { background:rgba(16,185,129,0.06); border:1px solid rgba(16,185,129,0.2); border-radius:14px; padding:14px 18px; margin-bottom:28px; display:flex; gap:10px; align-items:center; }
        .pm1-confirm-text { font-size:13px; color:rgba(255,255,255,0.72); margin:0; line-height:1.5; }
        .pm1-confirm-text strong { color:#10b981; }

        /* Stats */
        .pm1-stats { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin-bottom:32px; }
        .pm1-stat { background:rgba(245,158,11,0.05); border:1px solid rgba(245,158,11,0.12); border-radius:14px; padding:16px; text-align:center; }
        .pm1-stat-val { font-size:22px; font-weight:900; color:#f59e0b; margin:0 0 4px; }
        .pm1-stat-label { font-size:11px; color:rgba(255,255,255,0.38); margin:0; }

        /* Criteria */
        .pm1-criteria { display:flex; flex-direction:column; gap:16px; }
        .pm1-criterion { border:1px solid rgba(245,158,11,0.12); border-radius:14px; padding:18px 20px; background:rgba(245,158,11,0.02); }
        .pm1-crit-header { display:flex; align-items:center; gap:12px; margin-bottom:10px; }
        .pm1-crit-num { font-size:11px; font-weight:900; color:#f59e0b; background:rgba(245,158,11,0.12); border-radius:6px; padding:4px 9px; flex-shrink:0; }
        .pm1-crit-title { font-size:15px; font-weight:800; margin:0; }
        .pm1-crit-compare { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:10px; }
        .pm1-crit-top { background:rgba(16,185,129,0.06); border:1px solid rgba(16,185,129,0.15); border-radius:8px; padding:10px 12px; }
        .pm1-crit-avg { background:rgba(239,68,68,0.05); border:1px solid rgba(239,68,68,0.12); border-radius:8px; padding:10px 12px; }
        .pm1-crit-label { font-size:9px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; margin:0 0 4px; }
        .pm1-crit-top .pm1-crit-label { color:#10b981; }
        .pm1-crit-avg .pm1-crit-label { color:#ef4444; }
        .pm1-crit-val { font-size:12px; color:rgba(255,255,255,0.72); margin:0; line-height:1.4; }
        .pm1-crit-detail { font-size:13px; color:rgba(255,255,255,0.52); margin:0; line-height:1.65; }

        /* Tier table */
        .pm1-tiers { width:100%; border-collapse:collapse; font-size:13px; margin-bottom:24px; }
        .pm1-tiers th { text-align:left; padding:10px 12px; font-size:10px; font-weight:700; letter-spacing:0.05em; text-transform:uppercase; color:rgba(255,255,255,0.28); border-bottom:1px solid rgba(255,255,255,0.07); }
        .pm1-tiers td { padding:11px 12px; border-bottom:1px solid rgba(255,255,255,0.04); color:rgba(255,255,255,0.68); vertical-align:top; }
        .pm1-tiers tr:last-child td { border-bottom:none; }
        .pm1-tier-name { font-weight:800; }

        /* 30-day action plan */
        .pm1-plan { display:flex; flex-direction:column; gap:12px; }
        .pm1-plan-item { display:flex; gap:14px; align-items:flex-start; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); border-radius:12px; padding:14px 16px; }
        .pm1-plan-day { font-size:11px; font-weight:900; color:#f59e0b; background:rgba(245,158,11,0.1); border-radius:6px; padding:4px 8px; flex-shrink:0; white-space:nowrap; }
        .pm1-plan-text { font-size:13px; color:rgba(255,255,255,0.65); margin:0; line-height:1.55; }
        .pm1-plan-text strong { color:rgba(255,255,255,0.9); }

        /* Affiliate */
        .pm1-aff { background:rgba(255,255,255,0.03); border:1px solid rgba(124,245,192,0.12); border-radius:16px; padding:20px 24px; margin-bottom:32px; text-align:center; }
        .pm1-aff-label { font-size:11px; font-weight:800; color:rgba(124,245,192,0.6); text-transform:uppercase; letter-spacing:0.08em; margin:0 0 12px; }
        .pm1-aff-links { display:flex; gap:10px; justify-content:center; flex-wrap:wrap; margin-bottom:10px; }
        .pm1-aff-btn { display:inline-flex; align-items:center; gap:7px; padding:11px 20px; border-radius:10px; font-size:13px; font-weight:700; text-decoration:none; }
        .pm1-aff-gate { background:rgba(0,100,220,0.12); border:1px solid rgba(0,100,220,0.25); color:#5b9bf8; }
        .pm1-aff-binance { background:rgba(243,186,47,0.1); border:1px solid rgba(243,186,47,0.25); color:#f3ba2f; }
        .pm1-aff-note { font-size:11px; color:rgba(255,255,255,0.25); margin:0; }

        /* FAQ */
        .pm1-faq { display:flex; flex-direction:column; gap:12px; }
        .pm1-faq-item { background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); border-radius:12px; padding:16px 18px; }
        .pm1-faq-q { font-size:14px; font-weight:700; margin:0 0 8px; }
        .pm1-faq-a { font-size:13px; color:rgba(255,255,255,0.58); margin:0; line-height:1.65; }

        .pm1-divider { border:none; border-top:1px solid rgba(255,255,255,0.05); margin:40px 0; }

        /* Related */
        .pm1-related { background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); border-radius:16px; padding:24px; }
        .pm1-related-title { font-size:13px; font-weight:700; color:rgba(255,255,255,0.4); text-transform:uppercase; letter-spacing:0.06em; margin:0 0 14px; }
        .pm1-related-links { display:flex; flex-direction:column; gap:0; }
        .pm1-related-link { display:flex; justify-content:space-between; align-items:center; text-decoration:none; color:rgba(255,255,255,0.78); font-size:14px; font-weight:600; padding:10px 0; border-bottom:1px solid rgba(255,255,255,0.04); }
        .pm1-related-link:last-child { border-bottom:none; }
        .pm1-related-link:hover { color:#f59e0b; }

        @media(max-width:600px) {
          .pm1-stats { grid-template-columns:1fr 1fr; }
          .pm1-crit-compare { grid-template-columns:1fr; }
        }
      `}</style>

      <div className="pm1-wrap">
        {/* HERO */}
        <div className="pm1-hero">
          <div className="pm1-inner">
            <nav className="pm1-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>›</span>
              <Link href="/learn">Learn</Link>
              <span>›</span>
              <span>Polymarket POLY Airdrop Top 1% Criteria</span>
            </nav>

            <div className="pm1-badge">🪂 POLY Airdrop Confirmed</div>

            <h1 className="pm1-h1">
              Polymarket <span>$POLY</span> Airdrop:<br />How to Be in the Top 1%
            </h1>

            <div className="pm1-meta">
              <span>📅 June 10, 2026</span>
              <span>⏱ 8 min read</span>
              <span>✅ CMO Confirmed</span>
              <span>🎯 7 Criteria</span>
            </div>

            <p className="pm1-summary">
              Polymarket&apos;s CMO confirmed the $POLY token. The airdrop will reward the most active,
              consistent traders — not last-minute farmers. Here are all 7 criteria that separate the top
              1% from everyone else, and exactly what to do about it.
            </p>
          </div>
        </div>

        {/* BODY */}
        <div className="pm1-body">
          <div className="pm1-inner">

            {/* Confirmed */}
            <div className="pm1-confirm">
              <span style={{ fontSize: 18 }}>✅</span>
              <p className="pm1-confirm-text">
                <strong>Confirmed:</strong> Polymarket CMO Matthew Modabber confirmed the $POLY token and airdrop on the Degenz Live podcast.
                Expected allocation: 5–10% of total supply to active traders and community members. No official launch date yet.
              </p>
            </div>

            {/* Stats */}
            <div className="pm1-stats">
              <div className="pm1-stat">
                <p className="pm1-stat-val">1.35M</p>
                <p className="pm1-stat-label">active traders on Polymarket</p>
              </div>
              <div className="pm1-stat">
                <p className="pm1-stat-val">13,500</p>
                <p className="pm1-stat-label">wallets in the top 1%</p>
              </div>
              <div className="pm1-stat">
                <p className="pm1-stat-val">$50K+</p>
                <p className="pm1-stat-label">volume threshold for top 1%</p>
              </div>
            </div>

            {/* Key criteria summary box for AI citation */}
            <div style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.15)', borderRadius: 14, padding: '20px 24px', marginBottom: 28 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f59e0b', marginBottom: 12 }}>Top 1% Estimated Thresholds (Community Analysis)</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 10 }}>
                {[
                  { label: 'Total trading volume', val: '$50,000+' },
                  { label: 'Number of active days', val: '30+ days' },
                  { label: 'Average trade size (top 10%)', val: '$500+' },
                  { label: 'Number of trades', val: '100+' },
                  { label: 'Lifetime profit status', val: 'Positive required' },
                  { label: 'Market diversity', val: 'All 4 categories' },
                ].map(r => (
                  <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: 8 }}>
                    <span style={{ color: 'rgba(255,255,255,0.5)' }}>{r.label}</span>
                    <span style={{ fontWeight: 700, color: '#f59e0b' }}>{r.val}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', marginTop: 10, marginBottom: 0 }}>Source: Community wallet analysis via Dune Analytics and PolyTrack. No official criteria announced.</p>
            </div>

            {/* Criteria */}
            <div className="pm1-section">
              <h2 className="pm1-h2">The 7 <span>Criteria</span> That Determine Your Tier</h2>
              <p className="pm1-p">
                No official criteria have been announced. But based on Polymarket&apos;s patterns, comparable
                prediction market launches, and community analysis, these 7 factors are almost certain to
                determine your allocation tier.
              </p>
              <div className="pm1-criteria">
                {CRITERIA.map(c => (
                  <div key={c.n} className="pm1-criterion">
                    <div className="pm1-crit-header">
                      <span className="pm1-crit-num">{c.n}</span>
                      <p className="pm1-crit-title">{c.title}</p>
                    </div>
                    <div className="pm1-crit-compare">
                      <div className="pm1-crit-top">
                        <p className="pm1-crit-label">🏆 Top 1%</p>
                        <p className="pm1-crit-val">{c.tier1}</p>
                      </div>
                      <div className="pm1-crit-avg">
                        <p className="pm1-crit-label">⚠️ Average user</p>
                        <p className="pm1-crit-val">{c.avg}</p>
                      </div>
                    </div>
                    <p className="pm1-crit-detail">{c.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Estimated tier table */}
            <div className="pm1-section">
              <h2 className="pm1-h2">Estimated <span>Allocation Tiers</span></h2>
              <p className="pm1-p">Community estimates based on comparable launches. Not official — treat as directional only.</p>
              <table className="pm1-tiers">
                <thead>
                  <tr>
                    <th>Tier</th>
                    <th>All-Time Volume</th>
                    <th>Markets</th>
                    <th>Account Since</th>
                    <th>Est. POLY Value</th>
                  </tr>
                </thead>
                <tbody>
                  {TIERS.map(t => (
                    <tr key={t.tier}>
                      <td><span className="pm1-tier-name" style={{ color: t.color }}>{t.tier}</span></td>
                      <td>{t.volume}</td>
                      <td>{t.markets}</td>
                      <td>{t.age}</td>
                      <td style={{ color: t.color, fontWeight: 700 }}>{t.est}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="pm1-p" style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
                * Estimates only. Actual allocation depends on official criteria when announced.
              </p>
            </div>

            {/* 30-day action plan */}
            <div className="pm1-section">
              <h2 className="pm1-h2">Your <span>30-Day Action Plan</span></h2>
              <div className="pm1-plan">
                <div className="pm1-plan-item">
                  <span className="pm1-plan-day">Today</span>
                  <p className="pm1-plan-text"><strong>Link your X/Twitter account</strong> in Polymarket settings. Go to polymarket.com → Profile → Connect Social. Takes 30 seconds and may give you a meaningful boost.</p>
                </div>
                <div className="pm1-plan-item">
                  <span className="pm1-plan-day">This Week</span>
                  <p className="pm1-plan-text"><strong>Make your first diverse trades.</strong> Place at least one position in each of the 4 categories: Sports, Crypto, Politics, and Global Events. Even small $5–$10 positions count toward market diversity.</p>
                </div>
                <div className="pm1-plan-item">
                  <span className="pm1-plan-day">Week 2</span>
                  <p className="pm1-plan-text"><strong>Build volume consistently.</strong> Aim for $200–$500 in trades spread across 10+ different markets. Do NOT place it all in one market — breadth matters more than size per bet.</p>
                </div>
                <div className="pm1-plan-item">
                  <span className="pm1-plan-day">Week 3–4</span>
                  <p className="pm1-plan-text"><strong>Reinvest any winnings.</strong> If you win a position, cycle those funds back into 2–3 new markets instead of withdrawing. This increases both your volume and your market count simultaneously.</p>
                </div>
                <div className="pm1-plan-item">
                  <span className="pm1-plan-day">Ongoing</span>
                  <p className="pm1-plan-text"><strong>Trade at least 3–5x per week.</strong> Consistent weekly activity over multiple months is the hardest criteria to fake and likely the most weighted. Set a calendar reminder and stick to it.</p>
                </div>
              </div>
            </div>

            {/* Affiliate CTA */}
            <div className="pm1-aff">
              <p className="pm1-aff-label">💰 Get USDC to trade on Polymarket</p>
              <div className="pm1-aff-links">
                <a href="https://www.gate.com/share/xwvca1ha" target="_blank" rel="noopener noreferrer sponsored" className="pm1-aff-btn pm1-aff-gate">Gate.io →</a>
                <a href="https://www.binance.com/referral/earn-together/refer2earn-usdc/claim?hl=en&ref=GRO_28502_0JWES&utm_source=referral_entrance" target="_blank" rel="noopener noreferrer sponsored" className="pm1-aff-btn pm1-aff-binance">Binance →</a>
              </div>
              <p className="pm1-aff-note">Buy USDC · Deposit to Polymarket · Start building your trading history today</p>
            </div>

            {/* FAQ */}
            <div className="pm1-section">
              <h2 className="pm1-h2">Frequently Asked <span>Questions</span></h2>
              <div className="pm1-faq">
                <div className="pm1-faq-item">
                  <p className="pm1-faq-q">Is the Polymarket POLY airdrop confirmed?</p>
                  <p className="pm1-faq-a">Yes. Polymarket&apos;s CMO publicly confirmed the POLY token and airdrop. 5–10% of total supply expected for active traders and community members. No official launch date as of June 2026.</p>
                </div>
                <div className="pm1-faq-item">
                  <p className="pm1-faq-q">What are the top criteria for the POLY airdrop?</p>
                  <p className="pm1-faq-a">Trading volume consistency, number of markets participated in, account age, market diversity across all 4 categories, reinvestment of winnings, linked social account, and total all-time volume. Consistency over months is the most important factor.</p>
                </div>
                <div className="pm1-faq-item">
                  <p className="pm1-faq-q">How do I get into the top 1%?</p>
                  <p className="pm1-faq-a">Trade $50,000+ total across 100+ markets, trade across all categories, link your X account, and have been active since 2023–2024. Realistically: trade consistently every week across diverse markets and your position will compound over time.</p>
                </div>
                <div className="pm1-faq-item">
                  <p className="pm1-faq-q">Does trading volume matter?</p>
                  <p className="pm1-faq-a">Yes — but consistent volume matters more than one big trade. $500/month for 12 months outperforms a single $5,000 bet. Only 1.7% of wallets exceed $50K all-time, which is the likely threshold for top 1% status.</p>
                </div>
                <div className="pm1-faq-item">
                  <p className="pm1-faq-q">What categories should I trade?</p>
                  <p className="pm1-faq-a">All 4: Sports, Crypto, Politics, Global Events. Using all categories signals genuine platform usage. Farming only crypto markets looks like an airdrop strategy and may be discounted.</p>
                </div>
                <div className="pm1-faq-item">
                  <p className="pm1-faq-q">How much POLY will the airdrop give?</p>
                  <p className="pm1-faq-a">Unofficial estimates: top 1% users could receive $2,000–$10,000+ equivalent. Average active users likely $100–$500. These are community estimates — official allocation has not been announced.</p>
                </div>
              </div>
            </div>

            <hr className="pm1-divider" />

            {/* Related */}
            <div className="pm1-related">
              <p className="pm1-related-title">Related Guides</p>
              <div className="pm1-related-links">
                <Link href="/learn/polymarket-airdrop-guide-2026" className="pm1-related-link">
                  <span>Polymarket POLY Airdrop — Full Guide 2026</span><span>→</span>
                </Link>
                <Link href="/learn/polymarket-2026-complete-guide" className="pm1-related-link">
                  <span>Polymarket 2026 Complete Guide</span><span>→</span>
                </Link>
                <Link href="/learn/top-25-airdrop-picks-2026" className="pm1-related-link">
                  <span>Top 25 Airdrop Picks for 2026</span><span>→</span>
                </Link>
                <Link href="/learn/how-to-build-onchain-activity-that-actually-matters" className="pm1-related-link">
                  <span>Build On-Chain Activity That Actually Matters</span><span>→</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
