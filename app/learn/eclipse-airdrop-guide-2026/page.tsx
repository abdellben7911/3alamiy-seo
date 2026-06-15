import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eclipse Airdrop Guide 2026 — Farm ES Season 2 with Tide Points',
  description: 'The initial ES airdrop closed Aug 2025. But Eclipse is still in Mainnet Beta — full launch coming 2026. Tide points are live. Here\'s how to farm Season 2.',
  keywords: ['eclipse airdrop', 'ES token', 'eclipse tide points', 'eclipse SVM ethereum L2', 'eclipse season 2 airdrop', 'eclipse farming 2026'],
  openGraph: {
    title: 'Eclipse Airdrop Guide 2026 — Farm ES Season 2 with Tide Points',
    description: 'Initial ES airdrop closed Aug 2025. Eclipse full mainnet coming 2026. Tide points live. Full farming guide.',
    type: 'article',
    publishedTime: '2026-06-10T00:00:00Z',
    authors: ['3alamiy Web3'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://www.3alamiyweb3.com/learn/eclipse-airdrop-guide-2026#article',
      headline: 'Eclipse Airdrop Guide 2026 — Farm ES Season 2 with Tide Points',
      description: 'The initial ES airdrop closed Aug 2025. Eclipse full mainnet is still coming. Tide points are live for Season 2.',
      datePublished: '2026-06-10T00:00:00Z',
      dateModified: '2026-06-10T00:00:00Z',
      author: { '@type': 'Organization', name: '3alamiy Web3', url: 'https://www.3alamiyweb3.com' },
      publisher: { '@type': 'Organization', name: '3alamiy Web3', url: 'https://www.3alamiyweb3.com' },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.3alamiyweb3.com/learn/eclipse-airdrop-guide-2026' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.3alamiyweb3.com' },
        { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://www.3alamiyweb3.com/learn' },
        { '@type': 'ListItem', position: 3, name: 'Eclipse Airdrop Guide 2026', item: 'https://www.3alamiyweb3.com/learn/eclipse-airdrop-guide-2026' },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Farm Eclipse Tide Points for Season 2 in 2026',
      description: 'Step-by-step guide to earning Eclipse Tide points for the Season 2 ES distribution.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Bridge ETH to Eclipse', text: 'Use the official Eclipse bridge at bridge.eclipse.xyz to move ETH from Ethereum mainnet. tETH (Eclipse ETH) is your gas token.' },
        { '@type': 'HowToStep', position: 2, name: 'Set Up a Compatible Wallet', text: 'Install Backpack or Nightly wallet — both are Solana-compatible wallets that work with Eclipse\'s SVM environment.' },
        { '@type': 'HowToStep', position: 3, name: 'Trade on Solar DEX', text: 'Swap tokens on Solar (Eclipse\'s native concentrated-liquidity DEX). Volume and LP deposits earn Tide points each epoch.' },
        { '@type': 'HowToStep', position: 4, name: 'Trade Perps on Plasma', text: 'Open and manage leveraged positions on Plasma, Eclipse\'s perpetual futures DEX. Trading volume on Plasma is one of the highest-weighted Tide point sources.' },
        { '@type': 'HowToStep', position: 5, name: 'Deposit on Save Protocol', text: 'Lend or borrow on Save (forked from Solend). TVL deposited earns Tide points passively — set it and collect.' },
        { '@type': 'HowToStep', position: 6, name: 'Stay Active on Discord and Twitter', text: 'Eclipse rewards community members. Stay active in the Eclipse Discord and post on X tagging @EclipseFND for social Tide points.' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Did Eclipse already do its airdrop?',
          acceptedAnswer: { '@type': 'Answer', text: 'The initial ES airdrop distributed 100 million ES (10% of supply) to early users. The claim window ran July 16 – August 15, 2025 and is now closed. Eclipse is still in Mainnet Beta and the full mainnet launch (with additional token distributions) is expected in 2026. Tide points continue to accumulate for Season 2.' },
        },
        {
          '@type': 'Question',
          name: 'What are Eclipse Tide points?',
          acceptedAnswer: { '@type': 'Answer', text: 'Tide points are Eclipse\'s on-chain loyalty program. You earn them by bridging ETH to Eclipse, providing liquidity on Solar DEX, trading on Plasma perp DEX, depositing on Save, and other ecosystem activity. Points convert to ES token allocations at future distribution events.' },
        },
        {
          '@type': 'Question',
          name: 'What makes Eclipse unique compared to other L2s?',
          acceptedAnswer: { '@type': 'Answer', text: 'Eclipse is the first general-purpose L2 to run the Solana Virtual Machine (SVM) on Ethereum. It combines Ethereum security (settlement layer) with Solana-level throughput (SVM execution), Celestia data availability, and RISC Zero zero-knowledge fraud proofs. This means developers can port Solana apps to Ethereum security without rewriting code.' },
        },
        {
          '@type': 'Question',
          name: 'What wallet do I need for Eclipse?',
          acceptedAnswer: { '@type': 'Answer', text: 'Eclipse uses the Solana Virtual Machine, so you need an SVM-compatible wallet like Backpack or Nightly. MetaMask and standard EVM wallets do not work. Backpack is the most popular choice — it also listed ES tokens first and has deep Eclipse integration.' },
        },
      ],
    },
  ],
};

const speakableJsonLd = {
  "@context": "https://schema.org", "@type": "WebPage",
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".ecl-faq", ".ecl-faqs"] },
  url: "https://www.3alamiyweb3.com/learn/eclipse-airdrop-guide-2026",
};

export default function EclipseGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style>{`
        .ec-wrap {
          max-width: 780px; margin: 0 auto;
          padding: 40px 24px 80px;
          font-family: var(--font-space),'Space Grotesk',system-ui,sans-serif;
          color: rgba(255,255,255,0.88);
        }
        .ec-breadcrumb {
          display: flex; align-items: center; gap: 6px;
          font-size: 12px; color: rgba(255,255,255,0.35);
          margin-bottom: 28px; flex-wrap: wrap;
        }
        .ec-breadcrumb a { color: rgba(255,255,255,0.35); text-decoration: none; }
        .ec-breadcrumb a:hover { color: rgba(255,255,255,0.6); }
        .ec-breadcrumb span { color: rgba(255,255,255,0.18); }

        .ec-hero-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(249,115,22,0.1); border: 1px solid rgba(249,115,22,0.25);
          color: #fb923c; font-size: 11px; font-weight: 700;
          padding: 4px 10px; border-radius: 20px; letter-spacing: 0.06em;
          text-transform: uppercase; margin-bottom: 14px;
        }
        .ec-title {
          font-size: clamp(26px, 5vw, 40px); font-weight: 900;
          letter-spacing: -0.03em; line-height: 1.15;
          color: #fff; margin: 0 0 14px;
        }
        .ec-title em { color: #fb923c; font-style: normal; }
        .ec-subtitle {
          font-size: 17px; line-height: 1.65;
          color: rgba(255,255,255,0.55); margin: 0 0 28px;
        }
        .ec-meta-row {
          display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 36px;
        }
        .ec-meta-chip {
          display: inline-flex; align-items: center; gap: 5px;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.45); font-size: 12px; font-weight: 600;
          padding: 5px 11px; border-radius: 8px;
        }
        .ec-meta-chip strong { color: rgba(255,255,255,0.75); }

        .ec-stats {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 12px; margin-bottom: 40px;
        }
        .ec-stat {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px; padding: 16px 18px;
        }
        .ec-stat-label { font-size: 11px; color: rgba(255,255,255,0.35); font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 6px; }
        .ec-stat-value { font-size: 20px; font-weight: 800; color: #fb923c; letter-spacing: -0.02em; }
        .ec-stat-sub { font-size: 11px; color: rgba(255,255,255,0.35); margin-top: 2px; }

        .ec-alert {
          background: rgba(249,115,22,0.06); border: 1px solid rgba(249,115,22,0.2);
          border-left: 3px solid #fb923c;
          border-radius: 10px; padding: 16px 18px; margin-bottom: 36px;
          font-size: 14px; line-height: 1.65; color: rgba(255,255,255,0.7);
        }
        .ec-alert strong { color: #fb923c; }

        .ec-warn {
          background: rgba(239,68,68,0.06); border: 1px solid rgba(239,68,68,0.18);
          border-left: 3px solid #f87171;
          border-radius: 10px; padding: 16px 18px; margin-bottom: 28px;
          font-size: 14px; line-height: 1.65; color: rgba(255,255,255,0.7);
        }
        .ec-warn strong { color: #f87171; }

        .ec-h2 {
          font-size: 22px; font-weight: 800; letter-spacing: -0.02em;
          color: #fff; margin: 44px 0 16px; border-bottom: 1px solid rgba(255,255,255,0.06);
          padding-bottom: 10px;
        }
        .ec-p {
          font-size: 15px; line-height: 1.75; color: rgba(255,255,255,0.65);
          margin: 0 0 18px;
        }

        /* Architecture card */
        .ec-arch {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(160px,1fr));
          gap: 10px; margin-bottom: 32px;
        }
        .ec-arch-card {
          background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px; padding: 16px 18px; text-align: center;
        }
        .ec-arch-icon { font-size: 22px; margin-bottom: 8px; }
        .ec-arch-label { font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.7); margin-bottom: 3px; }
        .ec-arch-desc { font-size: 11px; color: rgba(255,255,255,0.35); line-height: 1.4; }

        /* Steps */
        .ec-steps { display: flex; flex-direction: column; gap: 16px; margin-bottom: 32px; }
        .ec-step {
          display: flex; gap: 16px;
          background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px; padding: 20px 22px; transition: border-color 0.15s;
        }
        .ec-step:hover { border-color: rgba(249,115,22,0.2); }
        .ec-step-num {
          width: 32px; height: 32px; border-radius: 10px; flex-shrink: 0;
          background: rgba(249,115,22,0.12); border: 1px solid rgba(249,115,22,0.2);
          color: #fb923c; font-size: 13px; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
        }
        .ec-step-content { flex: 1; min-width: 0; }
        .ec-step-title { font-size: 15px; font-weight: 700; color: #fff; margin-bottom: 6px; }
        .ec-step-body { font-size: 14px; line-height: 1.65; color: rgba(255,255,255,0.55); }
        .ec-step-body a { color: #fb923c; text-decoration: none; }
        .ec-step-body a:hover { text-decoration: underline; }
        .ec-step-tip {
          display: inline-block; margin-top: 8px;
          background: rgba(249,115,22,0.08); border: 1px solid rgba(249,115,22,0.15);
          color: #fb923c; font-size: 12px; font-weight: 600;
          padding: 4px 10px; border-radius: 6px;
        }

        /* Ecosystem apps */
        .ec-apps { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px,1fr)); gap: 12px; margin-bottom: 32px; }
        .ec-app {
          background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px; padding: 16px 18px;
        }
        .ec-app-header { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
        .ec-app-logo { width: 28px; height: 28px; border-radius: 6px; object-fit: cover; }
        .ec-app-name { font-size: 14px; font-weight: 700; color: #fff; }
        .ec-app-tag {
          font-size: 10px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.05em; padding: 2px 6px; border-radius: 4px; margin-left: auto;
        }
        .ec-app-desc { font-size: 12px; color: rgba(255,255,255,0.45); line-height: 1.5; }

        /* Tide points table */
        .ec-tide {
          background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px; overflow: hidden; margin-bottom: 32px;
        }
        .ec-tide-header {
          background: rgba(249,115,22,0.08); border-bottom: 1px solid rgba(249,115,22,0.15);
          padding: 14px 20px;
          font-size: 14px; font-weight: 700; color: #fb923c;
        }
        .ec-tide-row {
          display: flex; align-items: center; gap: 16px;
          padding: 13px 20px; border-bottom: 1px solid rgba(255,255,255,0.04);
          font-size: 14px;
        }
        .ec-tide-row:last-child { border-bottom: none; }
        .ec-tide-action { flex: 1; color: rgba(255,255,255,0.7); font-weight: 600; }
        .ec-tide-points {
          font-weight: 800; font-size: 13px; letter-spacing: -0.01em;
          padding: 3px 10px; border-radius: 6px; flex-shrink: 0;
        }
        .ec-tide-points.high { background: rgba(249,115,22,0.12); color: #fb923c; }
        .ec-tide-points.med { background: rgba(245,158,11,0.1); color: #f59e0b; }
        .ec-tide-points.low { background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.4); }

        /* Reward box */
        .ec-reward {
          background: rgba(124,245,192,0.04); border: 1px solid rgba(124,245,192,0.12);
          border-radius: 14px; padding: 20px 22px; margin-bottom: 32px;
          display: flex; gap: 20px; align-items: flex-start; flex-wrap: wrap;
        }
        .ec-reward-block { flex: 1; min-width: 130px; }
        .ec-reward-label { font-size: 11px; color: rgba(255,255,255,0.35); text-transform: uppercase; letter-spacing: 0.06em; font-weight: 600; margin-bottom: 6px; }
        .ec-reward-val { font-size: 22px; font-weight: 900; color: #7CF5C0; letter-spacing: -0.02em; }
        .ec-reward-note { font-size: 12px; color: rgba(255,255,255,0.35); margin-top: 3px; }

        /* FAQ */
        .ec-faq { display: flex; flex-direction: column; gap: 14px; margin-bottom: 40px; }
        .ec-faq-item {
          background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px; padding: 18px 20px;
        }
        .ec-faq-q { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 8px; }
        .ec-faq-a { font-size: 14px; color: rgba(255,255,255,0.55); line-height: 1.65; }
        .ec-faq-a code { background: rgba(255,255,255,0.06); padding: 2px 6px; border-radius: 4px; font-size: 13px; }

        /* CTA */
        .ec-cta { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 40px; }
        .ec-cta-btn {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 13px 22px; border-radius: 11px;
          font-size: 14px; font-weight: 700; text-decoration: none; transition: all 0.15s;
        }
        .ec-cta-btn.primary {
          background: rgba(249,115,22,0.15); border: 1px solid rgba(249,115,22,0.3);
          color: #fb923c;
        }
        .ec-cta-btn.primary:hover { background: rgba(249,115,22,0.22); transform: translateY(-1px); }
        .ec-cta-btn.secondary {
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.09);
          color: rgba(255,255,255,0.6);
        }
        .ec-cta-btn.secondary:hover { background: rgba(255,255,255,0.07); }

        /* Related */
        .ec-related { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px,1fr)); gap: 12px; margin-top: 16px; }
        .ec-related-card {
          background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px; padding: 16px 18px; text-decoration: none; transition: border-color 0.15s;
        }
        .ec-related-card:hover { border-color: rgba(249,115,22,0.2); }
        .ec-related-label { font-size: 10px; color: rgba(255,255,255,0.3); text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700; margin-bottom: 6px; }
        .ec-related-title { font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.8); line-height: 1.4; }

        @media (max-width: 600px) {
          .ec-wrap { padding: 28px 16px 60px; }
          .ec-stats { grid-template-columns: repeat(2, 1fr); }
          .ec-arch { grid-template-columns: repeat(2, 1fr); }
          .ec-reward { flex-direction: column; gap: 12px; }
        }
      `}</style>

      <main className="ec-wrap">
        {/* Breadcrumb */}
        <nav className="ec-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/learn">Learn</a>
          <span>/</span>
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>Eclipse Airdrop Guide 2026</span>
        </nav>

        {/* Hero */}
        <div className="ec-hero-badge">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          SVM on Ethereum · Hype Score 83
        </div>
        <h1 className="ec-title">
          Eclipse Airdrop Guide 2026<br />
          <em>Farm ES Season 2 — Full Mainnet Still Coming</em>
        </h1>
        <p className="ec-subtitle">
          Eclipse is Solana&apos;s virtual machine running on Ethereum security. The initial 100M ES
          airdrop closed August 2025 — but Eclipse is still in Mainnet Beta, full launch is 2026,
          and Tide points are accumulating for Season 2 right now.
        </p>

        {/* Meta */}
        <div className="ec-meta-row">
          <span className="ec-meta-chip">📅 Published <strong>Jun 10, 2026</strong></span>
          <span className="ec-meta-chip">⏱ <strong>7 min read</strong></span>
          <span className="ec-meta-chip">⛓ <strong>SVM / Ethereum L2</strong></span>
          <span className="ec-meta-chip">Supply <strong>1B ES</strong></span>
        </div>

        {/* Stats */}
        <div className="ec-stats">
          <div className="ec-stat">
            <div className="ec-stat-label">Total Supply</div>
            <div className="ec-stat-value">1B ES</div>
            <div className="ec-stat-sub">10% airdrop wave 1</div>
          </div>
          <div className="ec-stat">
            <div className="ec-stat-label">Wave 1 Closed</div>
            <div className="ec-stat-value">Aug 2025</div>
            <div className="ec-stat-sub">100M ES distributed</div>
          </div>
          <div className="ec-stat">
            <div className="ec-stat-label">Status</div>
            <div className="ec-stat-value">Beta</div>
            <div className="ec-stat-sub">Full mainnet 2026</div>
          </div>
          <div className="ec-stat">
            <div className="ec-stat-label">Points Program</div>
            <div className="ec-stat-value">Tide</div>
            <div className="ec-stat-sub">Active — earn now</div>
          </div>
        </div>

        {/* Alert */}
        <div className="ec-alert">
          <strong>What this guide covers:</strong> The Season 1 ES airdrop (100M tokens, July–August 2025)
          is done. Eclipse is still in Mainnet Beta — the full mainnet launch is targeted for 2026 and will
          likely come with additional ES distributions. <strong>Tide points</strong> are the active farming
          mechanism right now. This guide shows you exactly how to earn them.
        </div>

        {/* What is Eclipse */}
        <h2 className="ec-h2">What Is Eclipse?</h2>
        <p className="ec-p">
          Eclipse is the first general-purpose Ethereum L2 to run the <strong>Solana Virtual Machine (SVM)</strong>.
          This means Eclipse gets Solana-level throughput — thousands of TPS, low latency, cheap transactions —
          while settling on Ethereum for security. It&apos;s modular by design: execution on SVM,
          settlement on Ethereum, data availability on Celestia, and fraud proofs via RISC Zero.
        </p>
        <p className="ec-p">
          The bet: Solana developers can port their apps to Ethereum security without rewriting code,
          and Ethereum users get access to SVM-speed DeFi. Eclipse launched mainnet in November 2024
          and distributed 100M ES tokens to early users in July–August 2025. Full mainnet launch
          and the ES token&apos;s full market debut are expected in 2026.
        </p>

        {/* Architecture */}
        <h2 className="ec-h2">Eclipse Architecture — Why It&apos;s Different</h2>

        <div className="ec-arch">
          <div className="ec-arch-card">
            <div className="ec-arch-icon">⚡</div>
            <div className="ec-arch-label">Execution</div>
            <div className="ec-arch-desc">Solana VM (SVM) — thousands of TPS, parallel transactions</div>
          </div>
          <div className="ec-arch-card">
            <div className="ec-arch-icon">🔒</div>
            <div className="ec-arch-label">Settlement</div>
            <div className="ec-arch-desc">Ethereum L1 — inherits full Ethereum security</div>
          </div>
          <div className="ec-arch-card">
            <div className="ec-arch-icon">📦</div>
            <div className="ec-arch-label">Data Availability</div>
            <div className="ec-arch-desc">Celestia — cheap, scalable blob storage</div>
          </div>
          <div className="ec-arch-card">
            <div className="ec-arch-icon">🔍</div>
            <div className="ec-arch-label">Fraud Proofs</div>
            <div className="ec-arch-desc">RISC Zero ZK — cryptographic validity</div>
          </div>
        </div>

        {/* Tide points */}
        <h2 className="ec-h2">Tide Points — How to Earn Season 2 Allocation</h2>
        <p className="ec-p">
          Tide is Eclipse&apos;s on-chain loyalty program. Points accumulate based on your DeFi activity
          on Eclipse and convert to ES allocations at future distribution events. The program is
          live right now — every week you don&apos;t farm is points left on the table.
        </p>

        <div className="ec-tide">
          <div className="ec-tide-header">Tide Points — Activity Weight</div>
          <div className="ec-tide-row">
            <span className="ec-tide-action">Trading volume on Plasma (perp DEX)</span>
            <span className="ec-tide-points high">Very High</span>
          </div>
          <div className="ec-tide-row">
            <span className="ec-tide-action">Liquidity provision on Solar DEX</span>
            <span className="ec-tide-points high">High</span>
          </div>
          <div className="ec-tide-row">
            <span className="ec-tide-action">TVL deposited on Save (lending)</span>
            <span className="ec-tide-points high">High</span>
          </div>
          <div className="ec-tide-row">
            <span className="ec-tide-action">Spot trading on Solar DEX</span>
            <span className="ec-tide-points med">Medium</span>
          </div>
          <div className="ec-tide-row">
            <span className="ec-tide-action">Bridging ETH to Eclipse</span>
            <span className="ec-tide-points med">Medium</span>
          </div>
          <div className="ec-tide-row">
            <span className="ec-tide-action">Discord activity + X/Twitter posts</span>
            <span className="ec-tide-points low">Bonus</span>
          </div>
        </div>

        {/* 6-step guide */}
        <h2 className="ec-h2">6-Step Eclipse Farming Guide</h2>

        <div className="ec-steps">
          <div className="ec-step">
            <div className="ec-step-num">1</div>
            <div className="ec-step-content">
              <div className="ec-step-title">Install Backpack or Nightly Wallet</div>
              <div className="ec-step-body">
                Eclipse uses the SVM — you need an SVM-compatible wallet.
                <a href="https://backpack.app" target="_blank" rel="noopener noreferrer"> Backpack</a> is the most
                widely used and was the first to list ES tokens.
                <a href="https://nightly.app" target="_blank" rel="noopener noreferrer"> Nightly</a> also works well
                and has native Eclipse support.
                <br /><br />
                MetaMask and Phantom do <strong>not</strong> work on Eclipse. If you already have a Solana
                wallet (Backpack, Phantom), you can import the same seed phrase — the SVM address format is identical.
                <div className="ec-step-tip">Backpack = recommended — deepest Eclipse integration</div>
              </div>
            </div>
          </div>

          <div className="ec-step">
            <div className="ec-step-num">2</div>
            <div className="ec-step-content">
              <div className="ec-step-title">Bridge ETH to Eclipse</div>
              <div className="ec-step-body">
                Go to <a href="https://bridge.eclipse.xyz" target="_blank" rel="noopener noreferrer">bridge.eclipse.xyz</a> and
                bridge ETH from Ethereum mainnet to Eclipse. Your bridged ETH becomes <strong>tETH</strong> (Eclipse ETH)
                — the native gas and trading token.
                <br /><br />
                Start with a small amount (0.05–0.1 ETH) to cover gas and initial DeFi activity.
                Bridging itself earns Tide points and establishes your wallet age on Eclipse.
              </div>
            </div>
          </div>

          <div className="ec-step">
            <div className="ec-step-num">3</div>
            <div className="ec-step-content">
              <div className="ec-step-title">Trade on Plasma — Highest Tide Weight</div>
              <div className="ec-step-body">
                <a href="https://app.plasma.to" target="_blank" rel="noopener noreferrer">Plasma</a> is Eclipse&apos;s
                native perpetual futures DEX. It carries the highest weight in Tide point calculations —
                trading volume on Plasma is the single most efficient way to accumulate points.
                <br /><br />
                Open positions in ETH or other available markets. You don&apos;t need large size — consistent
                activity matters more than single large trades. Trade at least 2–3 times per week.
                <div className="ec-step-tip">Plasma volume = highest Tide points per dollar of activity</div>
              </div>
            </div>
          </div>

          <div className="ec-step">
            <div className="ec-step-num">4</div>
            <div className="ec-step-content">
              <div className="ec-step-title">Add Liquidity on Solar DEX</div>
              <div className="ec-step-body">
                <a href="https://app.solar.exchange" target="_blank" rel="noopener noreferrer">Solar</a> is Eclipse&apos;s
                native concentrated-liquidity DEX, similar in design to Orca on Solana. Provide liquidity
                to the tETH/USDC pair (the most liquid pool) for the highest fee and Tide point yield.
                <br /><br />
                Set a tight price range around the current price for maximum fee capture, but check it
                regularly — concentrated LP positions need rebalancing as price moves.
              </div>
            </div>
          </div>

          <div className="ec-step">
            <div className="ec-step-num">5</div>
            <div className="ec-step-content">
              <div className="ec-step-title">Deposit on Save — Passive Tide Points</div>
              <div className="ec-step-body">
                <a href="https://save.finance" target="_blank" rel="noopener noreferrer">Save</a> is Eclipse&apos;s
                lending protocol, forked from Solend. Deposit tETH or USDC to earn lending yield plus
                Tide points based on your TVL deposited.
                <br /><br />
                This is the lowest-effort farming action — deposit once and collect points passively.
                Borrowing against your deposit (to loop or use elsewhere) also earns points and
                amplifies your yield if you manage the liquidation risk carefully.
                <div className="ec-step-tip">Save = set-and-forget Tide point farming</div>
              </div>
            </div>
          </div>

          <div className="ec-step">
            <div className="ec-step-num">6</div>
            <div className="ec-step-content">
              <div className="ec-step-title">Community — Discord and Twitter</div>
              <div className="ec-step-body">
                Join the <a href="https://discord.gg/eclipse-fnd" target="_blank" rel="noopener noreferrer">Eclipse Discord</a> and
                get verified. Post regularly on X tagging @EclipseFND about your activity.
                Social Tide points are a bonus multiplier on your on-chain activity.
                <br /><br />
                Eclipse has also run game-based campaigns (Turbo Tap game, .turbo domain minting) —
                watch the Discord for new campaigns. These historically gave large point bonuses
                to early participants.
              </div>
            </div>
          </div>
        </div>

        {/* Ecosystem apps */}
        <h2 className="ec-h2">Eclipse Ecosystem — Key Apps</h2>

        <div className="ec-apps">
          <div className="ec-app">
            <div className="ec-app-header">
              <img src="https://www.google.com/s2/favicons?domain=plasma.to&sz=64" alt="Plasma" width={28} height={28} className="ec-app-logo" />
              <span className="ec-app-name">Plasma</span>
              <span className="ec-app-tag" style={{ background: 'rgba(249,115,22,0.1)', color: '#fb923c' }}>PERPS</span>
            </div>
            <div className="ec-app-desc">Perpetual futures DEX. Highest Tide point weight. Trade ETH and other assets with leverage.</div>
          </div>
          <div className="ec-app">
            <div className="ec-app-header">
              <img src="https://www.google.com/s2/favicons?domain=solar.exchange&sz=64" alt="Solar" width={28} height={28} className="ec-app-logo" />
              <span className="ec-app-name">Solar DEX</span>
              <span className="ec-app-tag" style={{ background: 'rgba(16,185,129,0.1)', color: '#34d399' }}>DEX</span>
            </div>
            <div className="ec-app-desc">Concentrated liquidity DEX. Provide LP for tETH/USDC or trade spot.</div>
          </div>
          <div className="ec-app">
            <div className="ec-app-header">
              <img src="https://www.google.com/s2/favicons?domain=save.finance&sz=64" alt="Save" width={28} height={28} className="ec-app-logo" />
              <span className="ec-app-name">Save</span>
              <span className="ec-app-tag" style={{ background: 'rgba(99,102,241,0.1)', color: '#818cf8' }}>LENDING</span>
            </div>
            <div className="ec-app-desc">Lending protocol (forked from Solend). Deposit to earn yield + passive Tide points.</div>
          </div>
          <div className="ec-app">
            <div className="ec-app-header">
              <img src="https://www.google.com/s2/favicons?domain=wireshark.xyz&sz=64" alt="Wireshark" width={28} height={28} className="ec-app-logo" />
              <span className="ec-app-name">Wireshark</span>
              <span className="ec-app-tag" style={{ background: 'rgba(245,158,11,0.1)', color: '#f59e0b' }}>MEMES</span>
            </div>
            <div className="ec-app-desc">Memecoin trading on Eclipse. High-volume, high-activity — good for aggressive Tide farming.</div>
          </div>
        </div>

        {/* Reward estimate */}
        <h2 className="ec-h2">What to Expect</h2>
        <div className="ec-reward">
          <div className="ec-reward-block">
            <div className="ec-reward-label">Season 2 Pool</div>
            <div className="ec-reward-val">TBD</div>
            <div className="ec-reward-note">Portion of unused S1 reserve</div>
          </div>
          <div className="ec-reward-block">
            <div className="ec-reward-label">Solar LP Yield</div>
            <div className="ec-reward-val">Variable</div>
            <div className="ec-reward-note">Trading fees + Tide points</div>
          </div>
          <div className="ec-reward-block">
            <div className="ec-reward-label">Save APR</div>
            <div className="ec-reward-val">~5–12%</div>
            <div className="ec-reward-note">Lending yield on tETH</div>
          </div>
          <div className="ec-reward-block">
            <div className="ec-reward-label">Risk Level</div>
            <div className="ec-reward-val" style={{ color: '#f59e0b' }}>Medium</div>
            <div className="ec-reward-note">Mainnet Beta stage</div>
          </div>
        </div>

        <div className="ec-warn">
          <strong>Important:</strong> Eclipse is still in Mainnet Beta. There is smart contract risk on all
          DeFi protocols. Only deploy capital you can afford to lose while the chain matures toward
          full mainnet. Plasma leverage trading carries liquidation risk on top of that.
        </div>

        {/* FAQ */}
        <h2 className="ec-h2">FAQ</h2>
        <div className="ec-faq">
          <div className="ec-faq-item">
            <div className="ec-faq-q">Is it too late to farm Eclipse?</div>
            <div className="ec-faq-a">
              No. The Season 1 airdrop (100M ES) is done, but Eclipse hasn&apos;t launched its full mainnet yet.
              Tide points are still accumulating. Wallets farming now during Beta will have significantly
              more history than wallets that start after the full mainnet launch.
            </div>
          </div>
          <div className="ec-faq-item">
            <div className="ec-faq-q">Why can&apos;t I use MetaMask on Eclipse?</div>
            <div className="ec-faq-a">
              Eclipse runs the Solana Virtual Machine (SVM), not the Ethereum Virtual Machine (EVM).
              MetaMask is EVM-only. You need an SVM-compatible wallet like Backpack or Nightly.
              Your Solana wallet address format works on Eclipse — same seed phrase, same address.
            </div>
          </div>
          <div className="ec-faq-item">
            <div className="ec-faq-q">What is tETH?</div>
            <div className="ec-faq-a">
              tETH is ETH bridged to Eclipse. When you bridge ETH from Ethereum mainnet to Eclipse
              via <code>bridge.eclipse.xyz</code>, it becomes tETH on the Eclipse chain. You use
              tETH for gas and as the primary trading asset. 1 tETH = 1 ETH (bridged).
            </div>
          </div>
          <div className="ec-faq-item">
            <div className="ec-faq-q">What was the Drift Drop airdrop?</div>
            <div className="ec-faq-a">
              The Drift Drop was a targeted airdrop for active Drift Protocol users on Solana.
              Eclipse took a snapshot in April 2025 and gave those users ES tokens to bootstrap
              early usage. This claim window closed August 15, 2025. New farming must go through
              Tide points and ecosystem activity.
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <h2 className="ec-h2">Bottom Line</h2>
        <p className="ec-p">
          Eclipse is a genuinely novel architecture — SVM throughput with Ethereum security —
          that no other L2 has replicated. Season 1 is over, but the chain is still pre-full-mainnet,
          which means now is still early. Tide points are live and reward exactly the right behavior:
          real DeFi activity (trading, LP, lending) rather than one-off bridging tricks.
        </p>
        <p className="ec-p">
          Plasma for perp volume, Solar for LP, Save for passive deposit — run all three and
          you&apos;re capturing the full Tide points stack. When the full mainnet launches, your
          history on the chain is already built.
        </p>

        {/* CTAs */}
        <div className="ec-cta">
          <a href="https://app.plasma.to" target="_blank" rel="noopener noreferrer" className="ec-cta-btn primary">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Trade on Plasma
          </a>
          <a href="https://bridge.eclipse.xyz" target="_blank" rel="noopener noreferrer" className="ec-cta-btn primary">
            Bridge to Eclipse
          </a>
          <a href="/upcoming" className="ec-cta-btn secondary">
            ← All Upcoming Airdrops
          </a>
        </div>

        {/* Related */}
        <h2 className="ec-h2">Related Guides</h2>
        <div className="ec-related">
          <a href="/learn/initia-airdrop-guide-2026" className="ec-related-card">
            <div className="ec-related-label">Cosmos L1</div>
            <div className="ec-related-title">Initia — Farm esINIT with the VIP Program</div>
          </a>
          <a href="/learn/story-protocol-airdrop-guide-2026" className="ec-related-card">
            <div className="ec-related-label">IP Blockchain</div>
            <div className="ec-related-title">Story Protocol — Farm the Ecosystem</div>
          </a>
          <a href="/upcoming" className="ec-related-card">
            <div className="ec-related-label">Tracker</div>
            <div className="ec-related-title">15 Tokenless Projects to Farm in 2026</div>
          </a>
        </div>
      </main>
    </>
  );
}
