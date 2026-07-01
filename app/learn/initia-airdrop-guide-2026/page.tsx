import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Initia Airdrop Guide 2026 — Farm esINIT with the VIP Program',
  description: 'INIT launched April 2025. The initial airdrop is over — but the VIP program distributes 25% of total supply to active users forever. Full farming guide.',
  keywords: ['initia airdrop', 'INIT token', 'esINIT farming', 'initia VIP program', 'initia staking 2026', 'interwoven rollups'],
  openGraph: {
    title: 'Initia Airdrop Guide 2026 — Farm esINIT with the VIP Program',
    description: 'INIT launched April 2025. The initial airdrop is over — but the VIP program distributes 25% of supply to active users. Full guide.',
    type: 'article',
    publishedTime: '2026-07-01T00:00:00Z',
    authors: ['3alamiy Web3'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://www.3alamiyweb3.com/learn/initia-airdrop-guide-2026#article',
      headline: 'Initia Airdrop Guide 2026 — Farm esINIT with the VIP Program',
      description: 'INIT launched April 2025. The initial airdrop is over — but the VIP program distributes 25% of total supply to active users. Full farming guide.',
      datePublished: '2026-07-01T00:00:00Z',
      dateModified: '2026-07-01T00:00:00Z',
      author: { '@type': 'Organization', name: '3alamiy Web3', url: 'https://www.3alamiyweb3.com' },
      publisher: { '@type': 'Organization', name: '3alamiy Web3', url: 'https://www.3alamiyweb3.com' },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.3alamiyweb3.com/learn/initia-airdrop-guide-2026' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.3alamiyweb3.com' },
        { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://www.3alamiyweb3.com/learn' },
        { '@type': 'ListItem', position: 3, name: 'Initia Airdrop Guide 2026', item: 'https://www.3alamiyweb3.com/learn/initia-airdrop-guide-2026' },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Farm esINIT with Initia\'s VIP Program in 2026',
      description: 'Step-by-step guide to earning esINIT rewards through Initia\'s Vested Interest Program.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Set Up a Cosmos Wallet', text: 'Install Keplr or Leap Wallet and add the Initia network. You need INIT tokens for gas and staking.' },
        { '@type': 'HowToStep', position: 2, name: 'Stake INIT to a Validator', text: 'Go to app.initia.xyz/stake and delegate INIT to a validator with good uptime. Earns staking rewards + VIP voting power.' },
        { '@type': 'HowToStep', position: 3, name: 'Use InitiaDEX', text: 'Swap tokens and provide liquidity on InitiaDEX. Trading volume and LP positions earn VIP points each bi-weekly stage.' },
        { '@type': 'HowToStep', position: 4, name: 'Use Inertia Protocol', text: 'Deposit INIT into Inertia\'s liquid restaking protocol to mint inINIT. Earn staking yield + VIP rewards + potential Inertia token airdrop.' },
        { '@type': 'HowToStep', position: 5, name: 'Explore Interwoven Rollups', text: 'Use apps on Initia\'s L2 rollups (Blackwing, Tucana, etc.) — each app has its own VIP allocation. Diversifying across rollups compounds rewards.' },
        { '@type': 'HowToStep', position: 6, name: 'Claim and Vest esINIT', text: 'Claim esINIT bi-weekly at app.initia.xyz/vip. Either vest it over time to convert to INIT, or zap it into an Enshrined Liquidity position for instant unlock.' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Did Initia already do its airdrop?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Initia launched mainnet on April 24, 2025, and airdropped 50 million INIT tokens to 194,294 testnet participants. The claim window closed May 24, 2025. The VIP program is the ongoing rewards mechanism — it distributes 25% of total INIT supply (250 million tokens) to active ecosystem users indefinitely.' },
        },
        {
          '@type': 'Question',
          name: 'What is esINIT and how do I convert it to INIT?',
          acceptedAnswer: { '@type': 'Answer', text: 'esINIT (escrowed INIT) is a locked version of INIT earned through the VIP program. To convert to regular INIT, you must maintain activity in the app where you earned it over the vesting period — meeting the activity threshold gradually unlocks it. Alternatively, you can "zap" esINIT immediately into an Enshrined Liquidity (EL) position, which is a staked INIT-paired LP token.' },
        },
        {
          '@type': 'Question',
          name: 'What is the VIP program and how much does it pay?',
          acceptedAnswer: { '@type': 'Answer', text: 'The Vested Interest Program (VIP) is Initia\'s core reward mechanism. It allocates 25% of the total 1 billion INIT supply (250 million INIT) to active ecosystem users. Rewards are distributed bi-weekly in esINIT across participating apps. The amount you earn depends on your activity score, INIT staked, and the apps you use.' },
        },
        {
          '@type': 'Question',
          name: 'What are Interwoven Rollups on Initia?',
          acceptedAnswer: { '@type': 'Answer', text: 'Interwoven Rollups are Initia\'s L2 app-chains. Each one is a customizable blockchain that inherits security from Initia\'s L1 while running its own logic. Examples include Blackwing (perpetual DEX), Tucana (trading), and others. Using multiple rollups diversifies your VIP rewards since each rollup has its own allocation from the VIP pool.' },
        },
      ],
    },
  ],
};

const speakableJsonLd = {
  "@context": "https://schema.org", "@type": "WebPage",
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".ini-faq", ".ini-faqs"] },
  url: "https://www.3alamiyweb3.com/learn/initia-airdrop-guide-2026",
};

export default function InitiaGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style>{`
        .ia-wrap {
          max-width: 780px; margin: 0 auto;
          padding: 40px 24px 80px;
          font-family: var(--font-space),'Space Grotesk',system-ui,sans-serif;
          color: rgba(255,255,255,0.88);
        }
        .ia-breadcrumb {
          display: flex; align-items: center; gap: 6px;
          font-size: 12px; color: rgba(255,255,255,0.35);
          margin-bottom: 28px; flex-wrap: wrap;
        }
        .ia-breadcrumb a { color: rgba(255,255,255,0.35); text-decoration: none; }
        .ia-breadcrumb a:hover { color: rgba(255,255,255,0.6); }
        .ia-breadcrumb span { color: rgba(255,255,255,0.18); }

        .ia-hero-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.25);
          color: #34d399; font-size: 11px; font-weight: 700;
          padding: 4px 10px; border-radius: 20px; letter-spacing: 0.06em;
          text-transform: uppercase; margin-bottom: 14px;
        }
        .ia-title {
          font-size: clamp(26px, 5vw, 40px); font-weight: 900;
          letter-spacing: -0.03em; line-height: 1.15;
          color: #fff; margin: 0 0 14px;
        }
        .ia-title em { color: #34d399; font-style: normal; }
        .ia-subtitle {
          font-size: 17px; line-height: 1.65;
          color: rgba(255,255,255,0.55); margin: 0 0 28px;
        }
        .ia-meta-row {
          display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 36px;
        }
        .ia-meta-chip {
          display: inline-flex; align-items: center; gap: 5px;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.45); font-size: 12px; font-weight: 600;
          padding: 5px 11px; border-radius: 8px;
        }
        .ia-meta-chip strong { color: rgba(255,255,255,0.75); }

        .ia-stats {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 12px; margin-bottom: 40px;
        }
        .ia-stat {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px; padding: 16px 18px;
        }
        .ia-stat-label { font-size: 11px; color: rgba(255,255,255,0.35); font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 6px; }
        .ia-stat-value { font-size: 20px; font-weight: 800; color: #34d399; letter-spacing: -0.02em; }
        .ia-stat-sub { font-size: 11px; color: rgba(255,255,255,0.35); margin-top: 2px; }

        .ia-alert {
          background: rgba(16,185,129,0.06); border: 1px solid rgba(16,185,129,0.2);
          border-left: 3px solid #34d399;
          border-radius: 10px; padding: 16px 18px; margin-bottom: 36px;
          font-size: 14px; line-height: 1.65; color: rgba(255,255,255,0.7);
        }
        .ia-alert strong { color: #34d399; }

        .ia-warn {
          background: rgba(245,158,11,0.06); border: 1px solid rgba(245,158,11,0.2);
          border-left: 3px solid #f59e0b;
          border-radius: 10px; padding: 16px 18px; margin-bottom: 28px;
          font-size: 14px; line-height: 1.65; color: rgba(255,255,255,0.7);
        }
        .ia-warn strong { color: #f59e0b; }

        .ia-h2 {
          font-size: 22px; font-weight: 800; letter-spacing: -0.02em;
          color: #fff; margin: 44px 0 16px; border-bottom: 1px solid rgba(255,255,255,0.06);
          padding-bottom: 10px;
        }
        .ia-p {
          font-size: 15px; line-height: 1.75; color: rgba(255,255,255,0.65);
          margin: 0 0 18px;
        }

        /* VIP diagram */
        .ia-vip-box {
          background: linear-gradient(135deg, rgba(16,185,129,0.07), rgba(5,150,105,0.04));
          border: 1px solid rgba(16,185,129,0.2); border-radius: 16px;
          padding: 24px 26px; margin-bottom: 32px;
        }
        .ia-vip-title { font-size: 16px; font-weight: 800; color: #fff; margin-bottom: 6px; }
        .ia-vip-sub { font-size: 13px; color: rgba(255,255,255,0.45); margin-bottom: 20px; }
        .ia-vip-flow {
          display: flex; gap: 0; align-items: stretch;
          flex-wrap: wrap; gap: 2px;
        }
        .ia-vip-node {
          flex: 1; min-width: 120px;
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 10px; padding: 14px 16px; text-align: center;
        }
        .ia-vip-node-icon { font-size: 20px; margin-bottom: 6px; }
        .ia-vip-node-label { font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.7); margin-bottom: 3px; }
        .ia-vip-node-desc { font-size: 11px; color: rgba(255,255,255,0.35); line-height: 1.4; }
        .ia-vip-arrow {
          display: flex; align-items: center; color: #34d399;
          font-size: 16px; padding: 0 4px; flex-shrink: 0;
        }

        /* Steps */
        .ia-steps { display: flex; flex-direction: column; gap: 16px; margin-bottom: 32px; }
        .ia-step {
          display: flex; gap: 16px;
          background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px; padding: 20px 22px; transition: border-color 0.15s;
        }
        .ia-step:hover { border-color: rgba(16,185,129,0.2); }
        .ia-step-num {
          width: 32px; height: 32px; border-radius: 10px; flex-shrink: 0;
          background: rgba(16,185,129,0.12); border: 1px solid rgba(16,185,129,0.2);
          color: #34d399; font-size: 13px; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
        }
        .ia-step-content { flex: 1; min-width: 0; }
        .ia-step-title { font-size: 15px; font-weight: 700; color: #fff; margin-bottom: 6px; }
        .ia-step-body { font-size: 14px; line-height: 1.65; color: rgba(255,255,255,0.55); }
        .ia-step-body a { color: #34d399; text-decoration: none; }
        .ia-step-body a:hover { text-decoration: underline; }
        .ia-step-tip {
          display: inline-block; margin-top: 8px;
          background: rgba(16,185,129,0.08); border: 1px solid rgba(16,185,129,0.15);
          color: #34d399; font-size: 12px; font-weight: 600;
          padding: 4px 10px; border-radius: 6px;
        }

        /* Rollups grid */
        .ia-rollups { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 12px; margin-bottom: 32px; }
        .ia-rollup {
          background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px; padding: 16px 18px;
        }
        .ia-rollup-header { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
        .ia-rollup-logo { width: 28px; height: 28px; border-radius: 6px; object-fit: cover; }
        .ia-rollup-name { font-size: 14px; font-weight: 700; color: #fff; }
        .ia-rollup-tag {
          font-size: 10px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.05em; padding: 2px 6px; border-radius: 4px; margin-left: auto;
        }
        .ia-rollup-desc { font-size: 12px; color: rgba(255,255,255,0.45); line-height: 1.5; }

        /* esINIT explainer */
        .ia-esinit {
          background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px; padding: 22px 24px; margin-bottom: 32px;
        }
        .ia-esinit-title { font-size: 16px; font-weight: 800; color: #fff; margin-bottom: 14px; }
        .ia-esinit-paths { display: flex; gap: 12px; flex-wrap: wrap; }
        .ia-esinit-path {
          flex: 1; min-width: 200px;
          border-radius: 10px; padding: 16px 18px;
        }
        .ia-esinit-path.vest {
          background: rgba(16,185,129,0.06); border: 1px solid rgba(16,185,129,0.18);
        }
        .ia-esinit-path.zap {
          background: rgba(245,158,11,0.06); border: 1px solid rgba(245,158,11,0.18);
        }
        .ia-esinit-path-title { font-size: 14px; font-weight: 700; margin-bottom: 6px; }
        .ia-esinit-path.vest .ia-esinit-path-title { color: #34d399; }
        .ia-esinit-path.zap .ia-esinit-path-title { color: #f59e0b; }
        .ia-esinit-path-desc { font-size: 13px; color: rgba(255,255,255,0.5); line-height: 1.55; }

        /* Reward box */
        .ia-reward {
          background: rgba(124,245,192,0.04); border: 1px solid rgba(124,245,192,0.12);
          border-radius: 14px; padding: 20px 22px; margin-bottom: 32px;
          display: flex; gap: 20px; align-items: flex-start; flex-wrap: wrap;
        }
        .ia-reward-block { flex: 1; min-width: 130px; }
        .ia-reward-label { font-size: 11px; color: rgba(255,255,255,0.35); text-transform: uppercase; letter-spacing: 0.06em; font-weight: 600; margin-bottom: 6px; }
        .ia-reward-val { font-size: 22px; font-weight: 900; color: #7CF5C0; letter-spacing: -0.02em; }
        .ia-reward-note { font-size: 12px; color: rgba(255,255,255,0.35); margin-top: 3px; }

        /* FAQ */
        .ia-faq { display: flex; flex-direction: column; gap: 14px; margin-bottom: 40px; }
        .ia-faq-item {
          background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px; padding: 18px 20px;
        }
        .ia-faq-q { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 8px; }
        .ia-faq-a { font-size: 14px; color: rgba(255,255,255,0.55); line-height: 1.65; }

        /* CTA */
        .ia-cta { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 40px; }
        .ia-cta-btn {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 13px 22px; border-radius: 11px;
          font-size: 14px; font-weight: 700; text-decoration: none; transition: all 0.15s;
        }
        .ia-cta-btn.primary {
          background: rgba(16,185,129,0.15); border: 1px solid rgba(16,185,129,0.3);
          color: #34d399;
        }
        .ia-cta-btn.primary:hover { background: rgba(16,185,129,0.22); transform: translateY(-1px); }
        .ia-cta-btn.secondary {
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.09);
          color: rgba(255,255,255,0.6);
        }
        .ia-cta-btn.secondary:hover { background: rgba(255,255,255,0.07); }

        /* Related */
        .ia-related { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; margin-top: 16px; }
        .ia-related-card {
          background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px; padding: 16px 18px; text-decoration: none; transition: border-color 0.15s;
        }
        .ia-related-card:hover { border-color: rgba(16,185,129,0.2); }
        .ia-related-label { font-size: 10px; color: rgba(255,255,255,0.3); text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700; margin-bottom: 6px; }
        .ia-related-title { font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.8); line-height: 1.4; }

        @media (max-width: 600px) {
          .ia-wrap { padding: 28px 16px 60px; }
          .ia-stats { grid-template-columns: repeat(2, 1fr); }
          .ia-vip-arrow { display: none; }
          .ia-vip-flow { gap: 8px; }
          .ia-reward { flex-direction: column; gap: 12px; }
        }
      `}</style>

      <main className="ia-wrap">
        {/* Breadcrumb */}
        <nav className="ia-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/learn">Learn</a>
          <span>/</span>
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>Initia Airdrop Guide 2026</span>
        </nav>

        {/* Hero */}
        <div className="ia-hero-badge">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          Cosmos L1 · Hype Score 84
        </div>
        <h1 className="ia-title">
          Initia Airdrop Guide 2026<br />
          <em>Farm esINIT — The VIP Program Never Stops</em>
        </h1>
        <p className="ia-subtitle">
          INIT launched mainnet April 2025. The initial 50M token airdrop is done.
          But the VIP program — 250 million INIT distributed to active users — runs indefinitely.
          Here&apos;s how to earn your share.
        </p>

        {/* Meta */}
        <div className="ia-meta-row">
          <span className="ia-meta-chip">📅 Published <strong>Jun 10, 2026</strong></span>
          <span className="ia-meta-chip">⏱ <strong>8 min read</strong></span>
          <span className="ia-meta-chip">⛓ <strong>Cosmos / Modular L1</strong></span>
          <span className="ia-meta-chip">VIP Pool <strong>250M INIT</strong></span>
        </div>

        {/* Stats */}
        <div className="ia-stats">
          <div className="ia-stat">
            <div className="ia-stat-label">VIP Allocation</div>
            <div className="ia-stat-value">250M</div>
            <div className="ia-stat-sub">25% of total supply</div>
          </div>
          <div className="ia-stat">
            <div className="ia-stat-label">INIT TGE</div>
            <div className="ia-stat-value">Apr 2025</div>
            <div className="ia-stat-sub">Mainnet live</div>
          </div>
          <div className="ia-stat">
            <div className="ia-stat-label">Initial Airdrop</div>
            <div className="ia-stat-value">50M INIT</div>
            <div className="ia-stat-sub">194K testnet users</div>
          </div>
          <div className="ia-stat">
            <div className="ia-stat-label">Rewards Cadence</div>
            <div className="ia-stat-value">Bi-weekly</div>
            <div className="ia-stat-sub">esINIT distributions</div>
          </div>
        </div>

        {/* Alert */}
        <div className="ia-alert">
          <strong>What this guide covers:</strong> The initial INIT airdrop closed May 24, 2025.
          This guide is about the <strong>VIP (Vested Interest Program)</strong> — Initia&apos;s ongoing rewards
          mechanism that distributes esINIT to active users every two weeks. It&apos;s how 250 million INIT
          (25% of total supply) gets distributed over time. Still very much worth farming.
        </div>

        {/* What is Initia */}
        <h2 className="ia-h2">What Is Initia?</h2>
        <p className="ia-p">
          Initia is a Cosmos-based modular blockchain that combines a Layer 1 with a framework for
          building customized Layer 2 rollups called <strong>Interwoven Rollups</strong>. Each rollup inherits
          security from Initia&apos;s L1 while running its own logic, tokenomics, and DeFi ecosystem.
          Think of it as a Cosmos app-chain factory with shared liquidity.
        </p>
        <p className="ia-p">
          The INIT token powers everything: gas, staking, governance, and the VIP rewards system.
          Mainnet launched April 24, 2025, with an initial airdrop of 50 million tokens to 194,294
          testnet participants who had been active in 2024.
        </p>
        <p className="ia-p">
          The bigger opportunity is the VIP program — 250 million INIT reserved for ongoing
          ecosystem participation, distributed indefinitely to active users across Initia&apos;s L1 and
          all Interwoven Rollups.
        </p>

        {/* VIP Program */}
        <h2 className="ia-h2">The VIP Program — How It Works</h2>
        <p className="ia-p">
          Every two weeks, Initia runs a &ldquo;stage&rdquo; of the VIP program. At the end of each stage,
          the protocol distributes esINIT to participating apps based on their VIP score — and users
          who were active on those apps receive their share.
        </p>

        <div className="ia-vip-box">
          <div className="ia-vip-title">VIP Reward Flow</div>
          <div className="ia-vip-sub">How esINIT flows from protocol → app → user every 2 weeks</div>
          <div className="ia-vip-flow">
            <div className="ia-vip-node">
              <div className="ia-vip-node-icon">🏛</div>
              <div className="ia-vip-node-label">VIP Pool</div>
              <div className="ia-vip-node-desc">250M INIT total allocated</div>
            </div>
            <div className="ia-vip-arrow">→</div>
            <div className="ia-vip-node">
              <div className="ia-vip-node-icon">📊</div>
              <div className="ia-vip-node-label">Apps / Rollups</div>
              <div className="ia-vip-node-desc">Scored by TVL, volume, activity</div>
            </div>
            <div className="ia-vip-arrow">→</div>
            <div className="ia-vip-node">
              <div className="ia-vip-node-icon">👤</div>
              <div className="ia-vip-node-label">Active Users</div>
              <div className="ia-vip-node-desc">esINIT distributed bi-weekly</div>
            </div>
            <div className="ia-vip-arrow">→</div>
            <div className="ia-vip-node">
              <div className="ia-vip-node-icon">🔓</div>
              <div className="ia-vip-node-label">Vesting / EL</div>
              <div className="ia-vip-node-desc">Convert to INIT over time</div>
            </div>
          </div>
        </div>

        <p className="ia-p">
          Your VIP score is determined by: (1) how much INIT you stake, (2) which participating apps
          you use, and (3) your activity level within those apps (trades, liquidity, governance votes).
          INIT stakers also get to vote on how rewards are distributed across apps — making staking
          more valuable than just yield.
        </p>

        {/* 6-step guide */}
        <h2 className="ia-h2">6-Step VIP Farming Guide</h2>

        <div className="ia-steps">
          <div className="ia-step">
            <div className="ia-step-num">1</div>
            <div className="ia-step-content">
              <div className="ia-step-title">Set Up Keplr or Leap Wallet</div>
              <div className="ia-step-body">
                Initia is a Cosmos chain — use <a href="https://www.keplr.app" target="_blank" rel="noopener noreferrer">Keplr</a> or <a href="https://www.leapwallet.io" target="_blank" rel="noopener noreferrer">Leap Wallet</a>.
                Leap has native VIP reward tracking built in, so you can see your esINIT balance without leaving the wallet.
                <br /><br />
                Get INIT from Binance, Bybit, OKX, or bridge from another Cosmos chain via IBC. You need INIT for gas
                and staking — a small amount (5–10 INIT) is enough to start.
                <div className="ia-step-tip">Leap Wallet shows your VIP rewards directly — recommended for beginners</div>
              </div>
            </div>
          </div>

          <div className="ia-step">
            <div className="ia-step-num">2</div>
            <div className="ia-step-content">
              <div className="ia-step-title">Stake INIT to a Validator</div>
              <div className="ia-step-body">
                Go to <a href="https://app.initia.xyz/stake" target="_blank" rel="noopener noreferrer">app.initia.xyz/stake</a> and delegate your INIT.
                Staking earns you: (1) staking APR (~15–20%), (2) VIP governance voting power, and (3) a higher baseline
                VIP score that multiplies your app activity rewards.
                <br /><br />
                Pick validators with &gt;99% uptime and under 10% commission. Avoid the very top validators
                to help decentralize the network (and some protocols reward delegation diversity).
                <div className="ia-step-tip">Staking INIT is the single highest-leverage VIP action</div>
              </div>
            </div>
          </div>

          <div className="ia-step">
            <div className="ia-step-num">3</div>
            <div className="ia-step-content">
              <div className="ia-step-title">Trade on InitiaDEX</div>
              <div className="ia-step-body">
                <a href="https://app.initia.xyz/swap" target="_blank" rel="noopener noreferrer">app.initia.xyz/swap</a> — InitiaDEX is the native DEX for Initia&apos;s L1.
                Swap between INIT and other assets regularly to build trading volume.
                Providing liquidity to INIT pairs earns LP fees plus VIP points.
                <br /><br />
                Aim for at least 2–3 swaps and one LP deposit per stage (every 2 weeks).
                Small consistent activity beats large one-time trades for VIP scoring.
              </div>
            </div>
          </div>

          <div className="ia-step">
            <div className="ia-step-num">4</div>
            <div className="ia-step-content">
              <div className="ia-step-title">Use Inertia — Liquid Restaking</div>
              <div className="ia-step-body">
                Inertia is Initia&apos;s first liquid restaking protocol. Deposit INIT and receive <strong>inINIT</strong> —
                a liquid token that earns staking yield while remaining deployable in DeFi.
                <br /><br />
                inINIT can be used as collateral on EchelonMarket (the lending protocol on Initia) to borrow
                against your position. Both Inertia and EchelonMarket are in the VIP program, so using both
                compounds your esINIT earnings.
                <div className="ia-step-tip">Inertia is also pre-token — a separate airdrop opportunity</div>
              </div>
            </div>
          </div>

          <div className="ia-step">
            <div className="ia-step-num">5</div>
            <div className="ia-step-content">
              <div className="ia-step-title">Use Apps on Interwoven Rollups</div>
              <div className="ia-step-body">
                Each Interwoven Rollup (L2 app-chain on Initia) has its own VIP allocation.
                Using apps on multiple rollups diversifies your rewards:
                <br /><br />
                <strong style={{ color: 'rgba(255,255,255,0.8)' }}>Blackwing</strong> — perpetual DEX with leverage trading<br />
                <strong style={{ color: 'rgba(255,255,255,0.8)' }}>Tucana</strong> — trading and liquidity rollup<br />
                <strong style={{ color: 'rgba(255,255,255,0.8)' }}>EchelonMarket</strong> — lending/borrowing against Initia assets<br /><br />
                Check the full list at <a href="https://app.initia.xyz/ecosystem" target="_blank" rel="noopener noreferrer">app.initia.xyz/ecosystem</a> — new rollups launch regularly, and early adopters tend to get higher allocations.
              </div>
            </div>
          </div>

          <div className="ia-step">
            <div className="ia-step-num">6</div>
            <div className="ia-step-content">
              <div className="ia-step-title">Claim esINIT and Choose Your Path</div>
              <div className="ia-step-body">
                After each bi-weekly stage ends, claim your esINIT at <a href="https://app.initia.xyz/vip" target="_blank" rel="noopener noreferrer">app.initia.xyz/vip</a>.
                You have two options for converting esINIT to regular INIT:
              </div>
            </div>
          </div>
        </div>

        {/* esINIT paths */}
        <div className="ia-esinit">
          <div className="ia-esinit-title">What to Do with esINIT</div>
          <div className="ia-esinit-paths">
            <div className="ia-esinit-path vest">
              <div className="ia-esinit-path-title">🕐 Vest Over Time</div>
              <div className="ia-esinit-path-desc">
                Maintain activity in the app where you earned esINIT. Meet the activity threshold
                each stage and your esINIT gradually unlocks into regular INIT.
                Best if you&apos;re committed to long-term farming — higher total yield.
              </div>
            </div>
            <div className="ia-esinit-path zap">
              <div className="ia-esinit-path-title">⚡ Zap to Enshrined Liquidity</div>
              <div className="ia-esinit-path-desc">
                Convert esINIT immediately into an EL (Enshrined Liquidity) position —
                a staked INIT-paired LP token. You forgo some upside but get instant
                liquidity. Best if you want to compound quickly without long vesting.
              </div>
            </div>
          </div>
        </div>

        {/* Rollup ecosystem */}
        <h2 className="ia-h2">Interwoven Rollups to Farm</h2>
        <p className="ia-p">
          Each rollup on Initia has its own VIP budget. Being early on new rollups is the
          highest-upside play — allocations per user are larger before the rollup attracts a crowd.
        </p>

        <div className="ia-rollups">
          <div className="ia-rollup">
            <div className="ia-rollup-header">
              <img src="https://www.google.com/s2/favicons?domain=blackwing.fi&sz=64" alt="Blackwing" width={28} height={28} className="ia-rollup-logo" />
              <span className="ia-rollup-name">Blackwing</span>
              <span className="ia-rollup-tag" style={{ background: 'rgba(16,185,129,0.1)', color: '#34d399' }}>PERPS</span>
            </div>
            <div className="ia-rollup-desc">Perpetual DEX on Initia. Trade leveraged positions, earn VIP points per volume.</div>
          </div>
          <div className="ia-rollup">
            <div className="ia-rollup-header">
              <img src="https://www.google.com/s2/favicons?domain=tucana.fi&sz=64" alt="Tucana" width={28} height={28} className="ia-rollup-logo" />
              <span className="ia-rollup-name">Tucana</span>
              <span className="ia-rollup-tag" style={{ background: 'rgba(245,158,11,0.1)', color: '#f59e0b' }}>DEX</span>
            </div>
            <div className="ia-rollup-desc">Trading rollup on Initia. Liquidity and swaps with VIP rewards.</div>
          </div>
          <div className="ia-rollup">
            <div className="ia-rollup-header">
              <img src="https://www.google.com/s2/favicons?domain=echelon.market&sz=64" alt="EchelonMarket" width={28} height={28} className="ia-rollup-logo" />
              <span className="ia-rollup-name">EchelonMarket</span>
              <span className="ia-rollup-tag" style={{ background: 'rgba(99,102,241,0.1)', color: '#818cf8' }}>LENDING</span>
            </div>
            <div className="ia-rollup-desc">Lending protocol. Borrow against inINIT or INIT collateral. VIP rewards on deposits.</div>
          </div>
          <div className="ia-rollup">
            <div className="ia-rollup-header">
              <img src="https://www.google.com/s2/favicons?domain=inertia.finance&sz=64" alt="Inertia" width={28} height={28} className="ia-rollup-logo" />
              <span className="ia-rollup-name">Inertia</span>
              <span className="ia-rollup-tag" style={{ background: 'rgba(245,158,11,0.1)', color: '#f59e0b' }}>PRE-TGE</span>
            </div>
            <div className="ia-rollup-desc">Liquid restaking — mint inINIT, earn staking yield + VIP + own token airdrop.</div>
          </div>
        </div>

        {/* Reward estimate */}
        <h2 className="ia-h2">What to Expect</h2>
        <div className="ia-reward">
          <div className="ia-reward-block">
            <div className="ia-reward-label">INIT Staking APR</div>
            <div className="ia-reward-val">~15–20%</div>
            <div className="ia-reward-note">From validator staking</div>
          </div>
          <div className="ia-reward-block">
            <div className="ia-reward-label">VIP esINIT</div>
            <div className="ia-reward-val">Variable</div>
            <div className="ia-reward-note">Bi-weekly, activity-based</div>
          </div>
          <div className="ia-reward-block">
            <div className="ia-reward-label">VIP Pool Total</div>
            <div className="ia-reward-val">250M INIT</div>
            <div className="ia-reward-note">25% of total supply</div>
          </div>
          <div className="ia-reward-block">
            <div className="ia-reward-label">Risk Level</div>
            <div className="ia-reward-val" style={{ color: '#f59e0b' }}>Medium</div>
            <div className="ia-reward-note">Cosmos L1, mainnet live</div>
          </div>
        </div>

        <p className="ia-p">
          The VIP program rewards consistent engagement, not one-time deposits. The more stages you
          participate in — staking, trading, using rollup apps — the higher your cumulative esINIT
          balance. With 250 million INIT in the pool and distributions running indefinitely, this is
          a true long-term farming opportunity, not a one-shot airdrop.
        </p>

        {/* FAQ */}
        <h2 className="ia-h2">FAQ</h2>
        <div className="ia-faq">
          <div className="ia-faq-item">
            <div className="ia-faq-q">Is the Initia airdrop still happening?</div>
            <div className="ia-faq-a">
              The initial 50M INIT airdrop closed May 24, 2025. But the VIP program distributes
              250M INIT (25% of supply) to ongoing active users. It runs bi-weekly with no
              announced end date — this is Initia&apos;s permanent user rewards mechanism.
            </div>
          </div>
          <div className="ia-faq-item">
            <div className="ia-faq-q">What is esINIT and how do I convert it to INIT?</div>
            <div className="ia-faq-a">
              esINIT is escrowed INIT earned through the VIP program. You have two options:
              (1) <strong>Vest</strong> — maintain activity in the earning app over time, and esINIT gradually
              unlocks to regular INIT. (2) <strong>Zap to EL</strong> — convert immediately into an Enshrined
              Liquidity position (staked INIT LP token) with no waiting period.
            </div>
          </div>
          <div className="ia-faq-item">
            <div className="ia-faq-q">Do I need a lot of INIT to farm the VIP program?</div>
            <div className="ia-faq-a">
              No. Activity score matters as much as INIT held. A wallet with 100 INIT staked
              and regular DeFi activity can earn meaningful esINIT. The key is consistency —
              showing up every stage is more important than holding a large position.
            </div>
          </div>
          <div className="ia-faq-item">
            <div className="ia-faq-q">What wallets work with Initia?</div>
            <div className="ia-faq-a">
              Keplr and Leap Wallet both support Initia natively. Leap has built-in VIP reward
              tracking — you can see your esINIT balance and claim directly from the wallet.
              MetaMask does not work for Initia (it&apos;s Cosmos-based, not EVM).
            </div>
          </div>
          <div className="ia-faq-item">
            <div className="ia-faq-q">Is Inertia a separate airdrop from INIT?</div>
            <div className="ia-faq-a">
              Yes. Inertia is a separate protocol (liquid restaking) built on Initia. It is
              pre-token as of June 2026. Using Inertia earns you VIP rewards in esINIT
              (from Initia&apos;s VIP pool) <em>plus</em> potential future Inertia token allocation.
              It&apos;s double exposure from one deposit.
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <h2 className="ia-h2">Bottom Line</h2>
        <p className="ia-p">
          Initia&apos;s initial airdrop is history. But 250 million INIT — a quarter of total supply —
          sits in the VIP pool waiting to be distributed to active users, bi-weekly, indefinitely.
          This is one of the most generous ongoing reward programs in Cosmos right now.
        </p>
        <p className="ia-p">
          The strategy: stake INIT for the base APR and VIP voting power, use InitiaDEX and Inertia
          consistently, and diversify across a few Interwoven Rollups. Collect esINIT every two weeks
          and either vest it or zap to EL. Over 6–12 months, this compounds into a meaningful position —
          and Inertia&apos;s own token is still to come.
        </p>

        {/* CTAs */}
        <div className="ia-cta">
          <a href="https://app.initia.xyz" target="_blank" rel="noopener noreferrer" className="ia-cta-btn primary">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Open Initia App
          </a>
          <a href="https://app.initia.xyz/vip" target="_blank" rel="noopener noreferrer" className="ia-cta-btn primary">
            Claim VIP Rewards
          </a>
          <a href="/upcoming" className="ia-cta-btn secondary">
            ← All Upcoming Airdrops
          </a>
        </div>

        {/* Related */}
        <h2 className="ia-h2">Related Guides</h2>
        <div className="ia-related">
          <a href="/learn/story-protocol-airdrop-guide-2026" className="ia-related-card">
            <div className="ia-related-label">IP Blockchain</div>
            <div className="ia-related-title">Story Protocol — Farm the Ecosystem (ZenO + More)</div>
          </a>
          <a href="/learn/aztec-network-airdrop-guide-2026" className="ia-related-card">
            <div className="ia-related-label">Privacy L2</div>
            <div className="ia-related-title">Aztec Network Airdrop Guide 2026</div>
          </a>
          <a href="/upcoming" className="ia-related-card">
            <div className="ia-related-label">Tracker</div>
            <div className="ia-related-title">15 Tokenless Projects to Farm in 2026</div>
          </a>
        </div>
      </main>
    </>
  );
}
