import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hyperliquid Season 2 Airdrop: Date, HLP Multiplier & What We Know [2026]',
  description: 'Hyperliquid Season 2 has no official date yet. 38.8% of HYPE supply (388M tokens) is still unreleased. HLP vault deposits earn 3x points. Everything confirmed so far — updated June 2026.',
  keywords: 'hyperliquid season 2 airdrop date, hyperliquid season 2 airdrop 2026, hyperliquid hlp 3x multiplier, hyperliquid season 2 eligibility, when is hyperliquid season 2 airdrop, hyperliquid hype airdrop 2026',
  alternates: { canonical: 'https://www.3alamiyweb3.com/learn/hyperliquid-season-2-airdrop-2026' },
  openGraph: {
    title: 'Hyperliquid Season 2 Airdrop: Date, HLP Multiplier & What We Know [2026]',
    description: 'No official date yet. 388M HYPE tokens still unreleased. HLP vault gives 3x points. Full breakdown of what Hyperliquid has confirmed for Season 2.',
    url: 'https://www.3alamiyweb3.com/learn/hyperliquid-season-2-airdrop-2026',
    type: 'article',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Hyperliquid Season 2 Airdrop: Date, HLP Multiplier & What We Know [2026]',
  description: 'Complete breakdown of Hyperliquid Season 2 airdrop — date speculation, HLP 3x multiplier, eligibility criteria, and farming strategy.',
  author: { '@type': 'Organization', name: '3alamiy Web3' },
  publisher: { '@type': 'Organization', name: '3alamiy Web3', url: 'https://www.3alamiyweb3.com' },
  datePublished: '2026-06-27',
  dateModified: '2026-06-27',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.3alamiyweb3.com/learn/hyperliquid-season-2-airdrop-2026' },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.hl2-intro', '.hl2-confirmed'] },
  about: { '@type': 'Thing', name: 'Hyperliquid Season 2 Airdrop', description: 'The second airdrop from Hyperliquid DEX, distributing the remaining 38.8% of HYPE token supply.' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When is the Hyperliquid Season 2 airdrop date?',
      acceptedAnswer: { '@type': 'Answer', text: 'Hyperliquid has not announced an official Season 2 airdrop date as of June 2026. There is no confirmed snapshot date. Season 1 was also unannounced until it distributed — the safest strategy is to farm continuously rather than wait for an announcement.' },
    },
    {
      '@type': 'Question',
      name: 'How much HYPE is left for Season 2?',
      acceptedAnswer: { '@type': 'Answer', text: '38.8% of the total HYPE supply — approximately 388 million HYPE tokens — is still unreleased and reserved for future community distributions including Season 2. At current prices this represents billions of dollars in potential rewards.' },
    },
    {
      '@type': 'Question',
      name: 'What is the HLP 3x multiplier in Hyperliquid Season 2?',
      acceptedAnswer: { '@type': 'Answer', text: 'Depositing USDC into the HLP (Hyperliquidity Provider) vault earns a 3x multiplier on Season 2 points earned from vault returns. This makes HLP the highest points-per-dollar strategy on Hyperliquid. Returns depend on market-making performance.' },
    },
    {
      '@type': 'Question',
      name: 'Do HLP depositors get a bonus in Hyperliquid Season 2?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. HLP vault depositors receive a 3x point multiplier on their vault earnings during Season 2. This was confirmed by Hyperliquid in their Season 2 points program documentation. HLP depositors were also rewarded heavily in Season 1.' },
    },
    {
      '@type': 'Question',
      name: 'How do I qualify for the Hyperliquid Season 2 airdrop?',
      acceptedAnswer: { '@type': 'Answer', text: 'To qualify for Hyperliquid Season 2: trade perpetuals on HyperCore daily (volume matters), stake HYPE tokens (8 points/HYPE/day), deposit USDC to the HLP vault (3x multiplier), and interact with HyperEVM protocols like HyperSwap, HyperLend, and Felix Protocol. Consistent activity across all four tracks gives the best eligibility.' },
    },
    {
      '@type': 'Question',
      name: 'Did Hyperliquid announce a Season 2 snapshot?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. As of June 2026, Hyperliquid has not announced a Season 2 snapshot date, airdrop date, or distribution timeline. The team historically gives no advance notice — Season 1 was announced and distributed on the same day.' },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.3alamiyweb3.com' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://www.3alamiyweb3.com/learn' },
    { '@type': 'ListItem', position: 3, name: 'Hyperliquid Season 2 Airdrop 2026', item: 'https://www.3alamiyweb3.com/learn/hyperliquid-season-2-airdrop-2026' },
  ],
};

export default function HyperliquidSeason2Page() {
  return (
    <>
      <style>{`
        .hl2-wrap { min-height:100vh; background:#060A12; font-family:var(--font-space),'Space Grotesk',system-ui,sans-serif; }

        .hl2-hero { background:#060A12; border-bottom:1px solid rgba(255,255,255,0.06); padding:56px 24px 48px; position:relative; overflow:hidden; }
        .hl2-hero-glow { position:absolute; top:-120px; left:50%; transform:translateX(-50%); width:700px; height:500px; background:radial-gradient(ellipse,rgba(124,245,192,0.05) 0%,transparent 65%); pointer-events:none; }
        .hl2-hero-inner { max-width:800px; margin:0 auto; position:relative; }
        .hl2-breadcrumb { display:flex; align-items:center; gap:6px; margin-bottom:20px; flex-wrap:wrap; }
        .hl2-breadcrumb a { font-size:12px; color:rgba(255,255,255,0.3); text-decoration:none; }
        .hl2-breadcrumb a:hover { color:rgba(255,255,255,0.6); }
        .hl2-breadcrumb span { color:rgba(255,255,255,0.15); font-size:12px; }
        .hl2-breadcrumb-cur { font-size:12px; color:#7CF5C0; font-weight:600; }

        .hl2-badge { display:inline-flex; align-items:center; gap:6px; background:rgba(124,245,192,0.08); border:1px solid rgba(124,245,192,0.2); color:#7CF5C0; padding:4px 12px; border-radius:99px; font-size:10px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:18px; }
        .hl2-badge-dot { width:5px; height:5px; border-radius:50%; background:#7CF5C0; box-shadow:0 0 6px rgba(124,245,192,0.6); animation:hl2blink 2s infinite; }
        @keyframes hl2blink { 0%,100%{opacity:1} 50%{opacity:.3} }

        .hl2-title { font-size:clamp(26px,5vw,40px); font-weight:700; color:#fff; letter-spacing:-0.03em; line-height:1.12; margin:0 0 16px; }
        .hl2-title span { color:#7CF5C0; }
        .hl2-intro { font-size:15px; color:rgba(255,255,255,0.4); line-height:1.75; max-width:620px; margin:0 0 28px; }

        .hl2-stats { display:flex; gap:32px; flex-wrap:wrap; padding:24px 0 0; border-top:1px solid rgba(255,255,255,0.06); }
        .hl2-stat-val { font-size:22px; font-weight:800; color:#7CF5C0; letter-spacing:-0.03em; }
        .hl2-stat-lbl { font-size:10px; color:rgba(255,255,255,0.25); font-weight:600; text-transform:uppercase; letter-spacing:0.07em; margin-top:2px; }

        .hl2-article { max-width:800px; margin:0 auto; padding:48px 24px 100px; }

        .hl2-answer-box { background:rgba(124,245,192,0.04); border:1px solid rgba(124,245,192,0.18); border-left:3px solid #7CF5C0; border-radius:10px; padding:20px 22px; margin-bottom:36px; }
        .hl2-answer-box h2 { font-size:13px; font-weight:800; color:#7CF5C0; text-transform:uppercase; letter-spacing:0.07em; margin:0 0 10px; }
        .hl2-answer-box p { font-size:14px; color:rgba(255,255,255,0.55); line-height:1.75; margin:0; }

        .hl2-confirmed { background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.07); border-radius:14px; padding:24px; margin-bottom:32px; }
        .hl2-confirmed h3 { font-size:11px; font-weight:800; color:rgba(255,255,255,0.25); text-transform:uppercase; letter-spacing:0.1em; margin:0 0 16px; }
        .hl2-fact { display:flex; gap:14px; align-items:flex-start; padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.05); }
        .hl2-fact:last-child { border-bottom:none; padding-bottom:0; }
        .hl2-fact-icon { width:28px; height:28px; border-radius:7px; display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:1px; }
        .hl2-fact-label { font-size:11px; font-weight:700; color:rgba(255,255,255,0.3); text-transform:uppercase; letter-spacing:0.06em; margin-bottom:4px; }
        .hl2-fact-value { font-size:14px; color:#fff; font-weight:600; line-height:1.5; }
        .hl2-fact-note { font-size:12px; color:rgba(255,255,255,0.3); margin-top:3px; line-height:1.5; }

        .hl2-h2 { font-size:22px; font-weight:700; color:#fff; letter-spacing:-0.02em; margin:44px 0 14px; display:flex; align-items:center; gap:10px; }
        .hl2-h2-num { width:28px; height:28px; border-radius:7px; background:rgba(124,245,192,0.1); border:1px solid rgba(124,245,192,0.2); display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:800; color:#7CF5C0; flex-shrink:0; }
        .hl2-p { font-size:14px; color:rgba(255,255,255,0.45); line-height:1.8; margin:0 0 16px; }
        .hl2-p strong { color:rgba(255,255,255,0.75); font-weight:700; }
        .hl2-p a { color:#7CF5C0; text-decoration:none; }
        .hl2-p a:hover { text-decoration:underline; }

        .hl2-track-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(220px,1fr)); gap:14px; margin:20px 0 32px; }
        .hl2-track { background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.07); border-radius:13px; padding:18px; }
        .hl2-track-icon { font-size:20px; margin-bottom:10px; }
        .hl2-track-name { font-size:13px; font-weight:700; color:#fff; margin-bottom:6px; }
        .hl2-track-desc { font-size:12px; color:rgba(255,255,255,0.35); line-height:1.6; }
        .hl2-track-pts { display:inline-flex; align-items:center; gap:4px; background:rgba(124,245,192,0.08); border:1px solid rgba(124,245,192,0.18); color:#7CF5C0; font-size:10px; font-weight:800; padding:2px 8px; border-radius:99px; margin-top:8px; }

        .hl2-warning { background:rgba(245,158,11,0.05); border:1px solid rgba(245,158,11,0.18); border-radius:12px; padding:16px 20px; margin:20px 0; display:flex; gap:12px; align-items:flex-start; }
        .hl2-warning svg { flex-shrink:0; margin-top:2px; }
        .hl2-warning p { font-size:13px; color:rgba(255,255,255,0.45); line-height:1.7; margin:0; }
        .hl2-warning strong { color:#f59e0b; }

        .hl2-s1-table { width:100%; border-collapse:collapse; margin:16px 0 28px; font-size:13px; }
        .hl2-s1-table th { text-align:left; font-size:10px; font-weight:800; color:rgba(255,255,255,0.25); text-transform:uppercase; letter-spacing:0.07em; padding:8px 12px; border-bottom:1px solid rgba(255,255,255,0.07); }
        .hl2-s1-table td { padding:12px; border-bottom:1px solid rgba(255,255,255,0.05); color:rgba(255,255,255,0.5); vertical-align:top; line-height:1.5; }
        .hl2-s1-table td:first-child { color:#fff; font-weight:600; }
        .hl2-s1-table tr:last-child td { border-bottom:none; }

        .hl2-faq { margin-top:48px; border-top:1px solid rgba(255,255,255,0.06); padding-top:40px; }
        .hl2-faq-title { font-size:20px; font-weight:700; color:#fff; margin:0 0 24px; letter-spacing:-0.02em; }
        .hl2-faq-item { border-bottom:1px solid rgba(255,255,255,0.06); padding:20px 0; }
        .hl2-faq-item:last-child { border-bottom:none; }
        .hl2-faq-q { font-size:14px; font-weight:700; color:#fff; margin:0 0 10px; line-height:1.4; }
        .hl2-faq-a { font-size:13px; color:rgba(255,255,255,0.4); line-height:1.75; margin:0; }

        .hl2-cta { background:rgba(124,245,192,0.04); border:1px solid rgba(124,245,192,0.14); border-radius:16px; padding:28px 24px; text-align:center; margin-top:48px; }
        .hl2-cta h3 { font-size:18px; font-weight:700; color:#fff; margin:0 0 8px; letter-spacing:-0.02em; }
        .hl2-cta p { font-size:13px; color:rgba(255,255,255,0.35); margin:0 0 20px; line-height:1.6; }
        .hl2-cta-btn { display:inline-flex; align-items:center; gap:8px; background:linear-gradient(135deg,#7CF5C0,#4ade80); color:#060A12; font-size:13px; font-weight:800; padding:12px 24px; border-radius:10px; text-decoration:none; transition:opacity 0.15s; }
        .hl2-cta-btn:hover { opacity:0.9; }

        @media(max-width:600px) {
          .hl2-stats { gap:20px; }
          .hl2-track-grid { grid-template-columns:1fr 1fr; }
        }
      `}</style>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="hl2-wrap">

        {/* Hero */}
        <section className="hl2-hero">
          <div className="hl2-hero-glow" />
          <div className="hl2-hero-inner">
            <nav className="hl2-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/learn">Learn</Link>
              <span>/</span>
              <span className="hl2-breadcrumb-cur">Hyperliquid Season 2 Airdrop</span>
            </nav>

            <div className="hl2-badge">
              <span className="hl2-badge-dot" />
              Updated June 2026
            </div>

            <h1 className="hl2-title">
              Hyperliquid Season 2 Airdrop:<br />
              <span>Date, HLP Multiplier &amp; What We Know</span>
            </h1>

            <p className="hl2-intro">
              No official date has been announced. Hyperliquid has 38.8% of HYPE supply — 388 million tokens — still unreleased and reserved for future community distributions. Season 2 farming is active right now.
            </p>

            <div className="hl2-stats">
              <div>
                <div className="hl2-stat-val">388M</div>
                <div className="hl2-stat-lbl">HYPE Tokens Unreleased</div>
              </div>
              <div>
                <div className="hl2-stat-val">38.8%</div>
                <div className="hl2-stat-lbl">Supply Still Reserved</div>
              </div>
              <div>
                <div className="hl2-stat-val">3×</div>
                <div className="hl2-stat-lbl">HLP Vault Multiplier</div>
              </div>
              <div>
                <div className="hl2-stat-val">No Date</div>
                <div className="hl2-stat-lbl">Official Announcement</div>
              </div>
            </div>
          </div>
        </section>

        {/* Article */}
        <article className="hl2-article">

          {/* Direct answer box — targets featured snippet */}
          <div className="hl2-answer-box hl2-confirmed">
            <h2>Direct Answer: When is the Hyperliquid Season 2 Airdrop?</h2>
            <p>
              <strong style={{ color: '#7CF5C0' }}>There is no official Season 2 airdrop date as of June 2026.</strong> Hyperliquid has not announced a snapshot date, distribution window, or timeline. Season 1 was unannounced until the day it happened — the team gave no advance notice. The safest approach is to farm continuously. Waiting for an announcement may mean missing the snapshot entirely.
            </p>
          </div>

          {/* Confirmed facts */}
          <div className="hl2-confirmed">
            <h3>What Hyperliquid Has Actually Confirmed for Season 2</h3>

            <div className="hl2-fact">
              <div className="hl2-fact-icon" style={{ background: 'rgba(124,245,192,0.1)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7CF5C0" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div>
                <div className="hl2-fact-label">Supply Reserved</div>
                <div className="hl2-fact-value">38.8% of total HYPE supply (388M tokens) is unreleased</div>
                <div className="hl2-fact-note">Confirmed in Hyperliquid tokenomics documentation. This is the pool for Season 2 and future community distributions.</div>
              </div>
            </div>

            <div className="hl2-fact">
              <div className="hl2-fact-icon" style={{ background: 'rgba(124,245,192,0.1)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7CF5C0" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div>
                <div className="hl2-fact-label">HLP Vault</div>
                <div className="hl2-fact-value">3× point multiplier on vault returns for Season 2</div>
                <div className="hl2-fact-note">Depositing USDC to the HLP vault earns 3x the normal points rate on your vault earnings.</div>
              </div>
            </div>

            <div className="hl2-fact">
              <div className="hl2-fact-icon" style={{ background: 'rgba(124,245,192,0.1)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7CF5C0" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div>
                <div className="hl2-fact-label">HYPE Staking</div>
                <div className="hl2-fact-value">8 Season 2 points per HYPE staked per day</div>
                <div className="hl2-fact-note">Delegating HYPE to a validator through the native staking tab earns a fixed daily point rate.</div>
              </div>
            </div>

            <div className="hl2-fact">
              <div className="hl2-fact-icon" style={{ background: 'rgba(124,245,192,0.1)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7CF5C0" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div>
                <div className="hl2-fact-label">Trading Activity</div>
                <div className="hl2-fact-value">HyperCore perpetual trading volume counts toward points</div>
                <div className="hl2-fact-note">Trading on the native DEX (BTC-PERP, ETH-PERP, etc.) is the core activity for Season 2 eligibility.</div>
              </div>
            </div>

            <div className="hl2-fact">
              <div className="hl2-fact-icon" style={{ background: 'rgba(248,113,113,0.1)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </div>
              <div>
                <div className="hl2-fact-label">NOT Confirmed</div>
                <div className="hl2-fact-value">Snapshot date, airdrop date, or distribution timeline</div>
                <div className="hl2-fact-note">Any specific date circulating on social media is speculation — Hyperliquid has made no official announcement.</div>
              </div>
            </div>
          </div>

          {/* What is Season 2 */}
          <h2 className="hl2-h2">
            <span className="hl2-h2-num">1</span>
            What Is the Hyperliquid Season 2 Airdrop?
          </h2>
          <p className="hl2-p">
            Hyperliquid launched its HYPE token in November 2024 through Season 1, distributing <strong>310 million HYPE</strong> (31% of total supply) to over 94,000 wallets — entirely without a presale, VC allocation, or ICO. It was the largest fair-launch airdrop in crypto history at that point.
          </p>
          <p className="hl2-p">
            Season 2 refers to the next major community distribution from the <strong>38.8% of supply</strong> still reserved for future rewards. The exact mechanics, allocation formula, and timing have not been officially announced. What is known is that Hyperliquid runs an ongoing points program and that accumulated points are expected to influence Season 2 allocation.
          </p>
          <p className="hl2-p">
            The platform continues to grow — Hyperliquid regularly processes more perp trading volume than all other on-chain DEXes combined. With the launch of HyperEVM in early 2026, there are now more ways to earn eligibility than in Season 1.
          </p>

          {/* Season 1 context */}
          <h2 className="hl2-h2">
            <span className="hl2-h2-num">2</span>
            What Season 1 Paid — Setting Expectations
          </h2>
          <p className="hl2-p">
            Before farming Season 2, it helps to understand what Season 1 actually distributed so you can calibrate your effort:
          </p>

          <table className="hl2-s1-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Season 1 Data</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total distributed</td>
                <td>310 million HYPE (31% of supply)</td>
              </tr>
              <tr>
                <td>Eligible wallets</td>
                <td>94,000+</td>
              </tr>
              <tr>
                <td>Average per wallet</td>
                <td>~3,300 HYPE (~$10,000+ at peak)</td>
              </tr>
              <tr>
                <td>Top farmers</td>
                <td>$50,000–$200,000+ per wallet</td>
              </tr>
              <tr>
                <td>HLP depositors</td>
                <td>Received disproportionately large allocations</td>
              </tr>
              <tr>
                <td>Notice given</td>
                <td>None — announced and distributed same day</td>
              </tr>
            </tbody>
          </table>

          <div className="hl2-warning">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <p>
              <strong>Important:</strong> Season 2 has 388 million HYPE reserved — 25% more than Season 1. But if more wallets are eligible, individual allocations could be smaller. Consistent activity across multiple tracks (trading + staking + HLP) is the best way to maximize your share.
            </p>
          </div>

          {/* Farming tracks */}
          <h2 className="hl2-h2">
            <span className="hl2-h2-num">3</span>
            The 4 Farming Tracks for Season 2
          </h2>
          <p className="hl2-p">
            Hyperliquid Season 2 points come from four distinct activities. Doing all four gives the strongest eligibility signal — wallets active across multiple tracks were favored in Season 1.
          </p>

          <div className="hl2-track-grid">
            <div className="hl2-track">
              <div className="hl2-track-icon">📊</div>
              <div className="hl2-track-name">HyperCore Trading</div>
              <div className="hl2-track-desc">Trade perpetuals on app.hyperliquid.xyz. Volume drives points. BTC-PERP and ETH-PERP have deepest liquidity.</div>
              <div className="hl2-track-pts">Core track</div>
            </div>
            <div className="hl2-track">
              <div className="hl2-track-icon">🏦</div>
              <div className="hl2-track-name">HLP Vault Deposit</div>
              <div className="hl2-track-desc">Deposit USDC to the Hyperliquidity Provider vault. Earns vault returns plus a 3× Season 2 point multiplier.</div>
              <div className="hl2-track-pts">3× multiplier</div>
            </div>
            <div className="hl2-track">
              <div className="hl2-track-icon">🔒</div>
              <div className="hl2-track-name">HYPE Staking</div>
              <div className="hl2-track-desc">Stake HYPE via the Staking tab or use Kinetiq (kHYPE) for liquid staking. Earns 8 points per HYPE per day.</div>
              <div className="hl2-track-pts">8 pts/HYPE/day</div>
            </div>
            <div className="hl2-track">
              <div className="hl2-track-icon">⚡</div>
              <div className="hl2-track-name">HyperEVM Protocols</div>
              <div className="hl2-track-desc">Use HyperSwap, HyperLend, Felix Protocol, and HyperBeat. On-chain activity on HyperEVM contributes to eligibility.</div>
              <div className="hl2-track-pts">Onchain activity</div>
            </div>
          </div>

          {/* HLP section */}
          <h2 className="hl2-h2">
            <span className="hl2-h2-num">4</span>
            The HLP 3× Multiplier Explained
          </h2>
          <p className="hl2-p">
            The HLP vault is Hyperliquid's native market-making pool. When you deposit USDC, the protocol uses your capital to provide liquidity across all perpetual markets. In return you earn a share of the spread and funding fees the vault collects.
          </p>
          <p className="hl2-p">
            For Season 2, Hyperliquid introduced a <strong>3× point multiplier</strong> on the returns earned inside HLP. This means every dollar of vault earnings generates 3× the Season 2 points compared to normal trading activity. It is the highest points-per-dollar strategy available on the platform.
          </p>
          <p className="hl2-p">
            HLP depositors were already significantly rewarded in Season 1 relative to their capital deployed — the 3× multiplier in Season 2 makes this track even more important. To deposit, go to <strong>app.hyperliquid.xyz</strong>, navigate to the Earn section, and deposit USDC into the HLP vault. There is no minimum deposit and no lockup period.
          </p>

          <div className="hl2-warning">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <p>
              HLP returns depend on market-making performance and can vary significantly. In losing market conditions the vault can have negative returns — meaning no points are earned (and your USDC balance decreases slightly). Understand the risk before depositing large amounts.
            </p>
          </div>

          {/* Date speculation */}
          <h2 className="hl2-h2">
            <span className="hl2-h2-num">5</span>
            Season 2 Date Speculation — What the Community Thinks
          </h2>
          <p className="hl2-p">
            Since Hyperliquid has made no official announcement, everything below is community speculation based on on-chain patterns and precedent from Season 1:
          </p>
          <p className="hl2-p">
            <strong>Season 1 precedent:</strong> Season 1 launched in November 2024 after about 18 months of farming activity. If Season 2 follows a similar timeline from the HYPE token launch, late 2025 to mid 2026 would be the speculation window — but the platform has grown substantially and the team may not follow the same cadence.
          </p>
          <p className="hl2-p">
            <strong>No snapshot signals yet:</strong> In Season 1, there were no on-chain signals before the snapshot. The distribution happened with no warning. Community members watching the contract saw the snapshot had already occurred when they went to check.
          </p>
          <p className="hl2-p">
            <strong>Bottom line:</strong> Do not wait for an announcement to start farming. The optimal strategy is to maintain consistent activity now and treat every day as potentially the last before a snapshot.
          </p>

          {/* Step by step */}
          <h2 className="hl2-h2">
            <span className="hl2-h2-num">6</span>
            How to Start Farming Season 2 Today
          </h2>
          <p className="hl2-p">
            Here is the minimum viable farming routine to establish eligibility across all four tracks:
          </p>
          <p className="hl2-p">
            <strong>Step 1 — Bridge USDC.</strong> Go to <a href="https://app.hyperliquid.xyz" target="_blank" rel="noopener noreferrer">app.hyperliquid.xyz</a> and deposit USDC from Arbitrum or another supported chain. Gas is free on Hyperliquid itself. You need at least enough to cover one trade and any vault deposit you want to make.
          </p>
          <p className="hl2-p">
            <strong>Step 2 — Trade daily.</strong> Place at least one perp trade per day on HyperCore. Volume matters more than frequency — a single $500 BTC-PERP trade counts more than 10 tiny trades. Consistent daily trading since Season 2 started is the strongest on-chain signal.
          </p>
          <p className="hl2-p">
            <strong>Step 3 — Deposit to HLP.</strong> Navigate to the Earn tab and deposit USDC into the HLP vault. Even a small amount earns the 3× multiplier. Leave it there — withdrawing and re-depositing repeatedly does not increase points.
          </p>
          <p className="hl2-p">
            <strong>Step 4 — Stake HYPE.</strong> Buy HYPE on Hyperliquid (available as a spot token) and stake it via the Staking tab. Each staked HYPE earns 8 points per day. Alternatively, use <a href="https://kinetiq.xyz" target="_blank" rel="noopener noreferrer">Kinetiq</a> to get kHYPE (liquid staking) while still accumulating staking rewards.
          </p>
          <p className="hl2-p">
            <strong>Step 5 — Use HyperEVM.</strong> Bridge a small amount of HYPE to HyperEVM (it uses HYPE as gas). Swap on HyperSwap, deposit to HyperLend, and mint feUSD on Felix Protocol. These interactions add an additional eligibility layer that pure perp traders will miss.
          </p>

          {/* Internal links */}
          <p className="hl2-p" style={{ marginTop: 32 }}>
            For a deeper dive into the full farming strategy including HyperEVM protocols and advanced tactics, see the{' '}
            <Link href="/learn/hyperliquid-guide">complete Hyperliquid Season 2 farming guide</Link>.
            To track other high-potential upcoming airdrops alongside Hyperliquid, see the{' '}
            <Link href="/upcoming">upcoming airdrops tracker</Link>.
          </p>

          {/* FAQ */}
          <div className="hl2-faq">
            <h2 className="hl2-faq-title">Frequently Asked Questions</h2>

            {faqSchema.mainEntity.map((item) => (
              <div key={item.name} className="hl2-faq-item">
                <p className="hl2-faq-q">{item.name}</p>
                <p className="hl2-faq-a">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hl2-cta">
            <h3>Check Your Wallet&apos;s Airdrop Eligibility</h3>
            <p>See which active airdrops your wallet qualifies for — free, no sign-up required.</p>
            <Link href="/wallet-checker" className="hl2-cta-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              Check My Wallet Free
            </Link>
          </div>

        </article>
      </div>
    </>
  );
}
