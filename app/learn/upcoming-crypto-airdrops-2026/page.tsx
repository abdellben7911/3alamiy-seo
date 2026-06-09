import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Upcoming Crypto Airdrops 2026 — Pre-TGE Projects | Updated June 2026 | 3alamiy Web3',
  description: 'The best upcoming crypto airdrops and pre-TGE projects in 2026. AI, DeFi, DePIN, and Web3 — get in before they launch their tokens. Updated June 2026.',
  keywords: 'upcoming crypto airdrops 2026, early crypto projects, new crypto projects 2026, upcoming web3 airdrops, early stage crypto',
  alternates: { canonical: 'https://www.3alamiyweb3.com/learn/upcoming-crypto-airdrops-2026' },
  openGraph: {
    title: 'Upcoming Crypto Airdrops 2026 — Pre-TGE Projects | Updated June 2026',
    description: 'Early stage platforms across AI, DeFi, DePIN, and Web3. Get in before they launch.',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Upcoming Crypto Airdrops 2026 — 18 Early Projects to Watch',
  description: 'The best upcoming crypto projects to watch in 2026 before they launch their tokens.',
  url: 'https://www.3alamiyweb3.com/learn/upcoming-crypto-airdrops-2026',
  datePublished: '2026-05-25',
  dateModified: '2026-05-25',
  author: { '@type': 'Organization', name: '3alamiy Web3', url: 'https://www.3alamiyweb3.com' },
  publisher: { '@type': 'Organization', name: '3alamiy Web3', url: 'https://www.3alamiyweb3.com' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the best upcoming crypto airdrops in 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'The best upcoming crypto projects in 2026 include Glowfdn (clean energy blockchain), FloeLabs (DeFi lending for AI agents), Augustus Bank (AI native banking), Umi (decentralized stablecoin), and SpecterAMM (AI crypto trading). These are early stage platforms that have not yet launched tokens.' }
    },
    {
      '@type': 'Question',
      name: 'How do I get early access to upcoming crypto projects?',
      acceptedAnswer: { '@type': 'Answer', text: 'Follow the project on Twitter/X, join their Discord, sign up for waitlists, and complete any available tasks on Galxe or their own platform. Early community members almost always receive priority in token distributions.' }
    },
    {
      '@type': 'Question',
      name: 'Are early stage crypto projects worth following?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Projects like Arbitrum, Optimism, and Hyperliquid all started as early stage platforms with small communities. Getting in early — following, joining Discord, and using testnet products — has historically led to significant airdrop rewards.' }
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.3alamiyweb3.com' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://www.3alamiyweb3.com/learn' },
    { '@type': 'ListItem', position: 3, name: 'Upcoming Crypto Airdrops 2026', item: 'https://www.3alamiyweb3.com/learn/upcoming-crypto-airdrops-2026' },
  ],
};

type Category = 'AI' | 'DeFi' | 'DePIN' | 'Infrastructure' | 'Social' | 'Meme' | 'Analytics' | 'Banking';

const catColors: Record<Category, { bg: string; color: string }> = {
  AI:             { bg: 'rgba(99,102,241,0.1)',  color: '#818cf8' },
  DeFi:           { bg: 'rgba(124,245,192,0.1)', color: '#7CF5C0' },
  DePIN:          { bg: 'rgba(245,158,11,0.1)',  color: '#f59e0b' },
  Infrastructure: { bg: 'rgba(52,211,153,0.1)',  color: '#34d399' },
  Social:         { bg: 'rgba(244,63,94,0.1)',   color: '#f43f5e' },
  Meme:           { bg: 'rgba(192,132,252,0.1)', color: '#c084fc' },
  Analytics:      { bg: 'rgba(96,165,250,0.1)',  color: '#60a5fa' },
  Banking:        { bg: 'rgba(251,191,36,0.1)',  color: '#fbbf24' },
};

const projects = [
  {
    handle: '@Glowfdn',
    name: 'Glowfdn',
    url: 'https://x.com/Glowfdn',
    category: 'DePIN' as Category,
    desc: 'Blockchain powered solar energy platform focused on funding and scaling clean energy projects.',
    why: 'Clean energy + blockchain is one of the strongest narratives for 2026. Real-world asset backing gives this serious token launch potential.',
    emoji: '☀️',
  },
  {
    handle: '@padifydotfun',
    name: 'Padify',
    url: 'https://x.com/padifydotfun',
    category: 'Infrastructure' as Category,
    desc: 'Launchpad platform for discovering, creating, and supporting early stage crypto and meme coin projects.',
    why: 'Launchpads always need tokens to power their ecosystems. Being early here means getting in before the platform has any traction.',
    emoji: '🚀',
  },
  {
    handle: '@shoken_fun',
    name: 'Shoken',
    url: 'https://x.com/shoken_',
    category: 'Meme' as Category,
    desc: 'Meme coin and token launch platform focused on community driven crypto projects.',
    why: 'Meme platforms generate massive community volumes. The platform token benefits from every launch.',
    emoji: '🎭',
  },
  {
    handle: '@Blockrunai',
    name: 'Blockrun AI',
    url: 'https://x.com/Blockrunai',
    category: 'Analytics' as Category,
    desc: 'Blockchain analytics and automation platform focused on onchain data, trading insights and web3 tools.',
    why: 'Onchain analytics tools are in high demand. AI + analytics is a winning combo for the 2026 narrative.',
    emoji: '📊',
  },
  {
    handle: '@megawattfinance',
    name: 'Megawatt Finance',
    url: 'https://x.com/megawattfinance',
    category: 'DePIN' as Category,
    desc: 'Blockchain powered platform for funding and earning yield from renewable energy infrastructure.',
    why: 'Yield-bearing real world assets on-chain. DePIN + energy is the hottest narrative combination right now.',
    emoji: '⚡',
  },
  {
    handle: '@foundryrobotics',
    name: 'Foundry Robotics',
    url: 'https://x.com/foundryrobotics',
    category: 'AI' as Category,
    desc: 'AI powered robotics company building autonomous manufacturing and industrial automation systems.',
    why: 'Physical AI meets blockchain. One of the most ambitious projects on this list — high risk, very high reward potential.',
    emoji: '🤖',
  },
  {
    handle: '@FloeLabs',
    name: 'Floe Labs',
    url: 'https://x.com/FloeLabs',
    category: 'DeFi' as Category,
    desc: 'DeFi lending and credit infrastructure platform focused on AI agents, onchain borrowing, and fixed term crypto loans.',
    why: 'AI agent finance is an emerging category with almost no competition. Fixed-term lending fills a real gap in DeFi.',
    emoji: '🧊',
  },
  {
    handle: '@Blinktrade',
    name: 'Blinktrade',
    url: 'https://x.com/Blinktrade',
    category: 'Infrastructure' as Category,
    desc: 'Digital asset exchange infrastructure platform focused on crypto trading and liquidity solutions.',
    why: 'Exchange infrastructure is fundamental to crypto. Liquidity providers and early users of exchange platforms historically receive large allocations.',
    emoji: '💱',
  },
  {
    handle: '@usequant',
    name: 'Quant',
    url: 'https://x.com/usequant',
    category: 'AI' as Category,
    desc: 'AI powered trading and analytics platform designed for crypto market insights and automated strategies.',
    why: 'AI trading tools are replacing manual analysis. Early adopters of AI trading platforms are the core user base for any token launch.',
    emoji: '📈',
  },
  {
    handle: '@optivault',
    name: 'Optivault',
    url: 'https://x.com/optivault',
    category: 'AI' as Category,
    desc: 'AI powered personal finance app focused on budgeting, financial planning and smart money management.',
    why: 'Consumer finance apps with blockchain integration have massive addressable markets. AI + personal finance is underserved on-chain.',
    emoji: '💰',
  },
  {
    handle: '@Pitch_Erc',
    name: 'Pitch',
    url: 'https://x.com/Pitch_Erc',
    category: 'AI' as Category,
    desc: 'AI powered platform for creating, practicing and improving startup or investor pitches.',
    why: 'Niche but viral. Pitch tools have strong B2B adoption potential. Token incentives for feedback and coaching could create serious demand.',
    emoji: '🎤',
  },
  {
    handle: '@Obsessedapp',
    name: 'Obsessed',
    url: 'https://x.com/Obsessedapp',
    category: 'AI' as Category,
    desc: 'AI platform focused on autonomous agents, workflow automation and productivity tools.',
    why: 'Autonomous AI agents is the biggest crypto narrative right now. Any platform building agent infrastructure is worth watching closely.',
    emoji: '🧠',
  },
  {
    handle: '@rushecosystem',
    name: 'Rush Ecosystem',
    url: 'https://x.com/rushecosystem',
    category: 'Infrastructure' as Category,
    desc: 'Web3 ecosystem focused on decentralized tools, community growth, and blockchain-powered digital experiences.',
    why: 'Ecosystem platforms that aggregate tools and communities often distribute tokens to early members across all their products.',
    emoji: '🌐',
  },
  {
    handle: '@basedare_xyz',
    name: 'Basedare',
    url: 'https://x.com/basedare_xyz',
    category: 'Social' as Category,
    desc: 'Social prediction and challenge platform built around viral onchain interactions and community driven bets.',
    why: 'Social + prediction markets is a proven model. Onchain bets create natural token demand and viral growth loops.',
    emoji: '🎯',
  },
  {
    handle: '@umiapp',
    name: 'Umi',
    url: 'https://x.com/umiapp',
    category: 'DeFi' as Category,
    desc: 'Decentralized stablecoin protocol focused on yield generation and capital efficient DeFi strategies.',
    why: 'Stablecoin protocols always need governance tokens. Yield-bearing stablecoins are in massive demand post-2025 rate changes.',
    emoji: '🌊',
  },
  {
    handle: '@specterAMM',
    name: 'Specter AMM',
    url: 'https://x.com/specterAMM',
    category: 'Analytics' as Category,
    desc: 'AI powered crypto intelligence and trading platform focused on market research, analytics, and onchain trading tools.',
    why: 'AMMs with AI intelligence layers are the next generation of DeFi. Early liquidity providers almost always receive large token allocations.',
    emoji: '👻',
  },
  {
    handle: '@Onchatonbase',
    name: 'Onchat on Base',
    url: 'https://x.com/Onchatonbase',
    category: 'Social' as Category,
    desc: 'Onchain chat and experiment platform focused on Web3 tools, automation and blockchain interactions.',
    why: 'Onchain social on Base is a growing category. Base has one of the strongest developer ecosystems and consistently rewards early users.',
    emoji: '💬',
  },
  {
    handle: '@augustusbank',
    name: 'Augustus Bank',
    url: 'https://x.com/augustusbank',
    category: 'Banking' as Category,
    desc: 'AI native banking and financial infrastructure platform building clearing systems for the AI era.',
    why: 'AI banking infrastructure is completely new territory. Clearing systems for AI agents is a category that doesn\'t exist yet — first mover advantage.',
    emoji: '🏦',
  },
];

const categoryGroups: Record<string, typeof projects> = {};
projects.forEach(p => {
  if (!categoryGroups[p.category]) categoryGroups[p.category] = [];
  categoryGroups[p.category].push(p);
});

export default function UpcomingAirdrops() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        .up-root {
          min-height: 100vh; background: #080C14;
          font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif;
          color: #fff;
        }
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes gradShift { 0%{background-position:0% 50%;} 50%{background-position:100% 50%;} 100%{background-position:0% 50%;} }
        @keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:0.4;} }

        /* HERO */
        .up-hero {
          position: relative; overflow: hidden;
          padding: 72px 24px 56px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .up-hero-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(124,245,192,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,245,192,0.03) 1px, transparent 1px);
          background-size: 52px 52px; pointer-events: none;
        }
        .up-hero-glow {
          position: absolute; top: -100px; right: -100px;
          width: 500px; height: 400px;
          background: radial-gradient(ellipse, rgba(124,245,192,0.07) 0%, transparent 65%);
          pointer-events: none;
        }
        .up-hero-inner { position: relative; max-width: 1200px; margin: 0 auto; }
        .up-breadcrumb {
          display: flex; align-items: center; gap: 8px;
          margin-bottom: 20px;
        }
        .up-bc-link { font-size: 12px; color: rgba(255,255,255,0.3); text-decoration: none; }
        .up-bc-link:hover { color: rgba(255,255,255,0.6); }
        .up-bc-sep { color: rgba(255,255,255,0.15); font-size: 12px; }
        .up-bc-cur { font-size: 12px; color: #7CF5C0; font-weight: 700; }
        .up-badge {
          display: inline-flex; align-items: center; gap: 7px;
          background: rgba(124,245,192,0.06); border: 1px solid rgba(124,245,192,0.18);
          color: #7CF5C0; font-size: 10px; font-weight: 800;
          padding: 5px 14px; border-radius: 99px; letter-spacing: 0.06em;
          text-transform: uppercase; margin-bottom: 20px;
        }
        .up-badge-dot { width: 5px; height: 5px; border-radius: 50%; background: #7CF5C0; animation: pulse 1.8s infinite; }
        .up-h1 {
          font-size: clamp(32px, 5vw, 60px); font-weight: 900;
          letter-spacing: -0.035em; color: #fff; line-height: 1.08;
          margin: 0 0 16px;
        }
        .up-h1-accent {
          background: linear-gradient(135deg, #7CF5C0, #6366f1, #7CF5C0);
          background-size: 200% auto; -webkit-background-clip: text;
          -webkit-text-fill-color: transparent; background-clip: text;
          animation: gradShift 4s ease infinite;
        }
        .up-sub {
          font-size: 16px; color: rgba(255,255,255,0.4); line-height: 1.7;
          max-width: 580px; margin: 0 0 32px;
        }
        .up-hero-stats { display: flex; gap: 28px; flex-wrap: wrap; }
        .up-hero-stat { display: flex; flex-direction: column; gap: 2px; }
        .up-hero-stat-num { font-size: 22px; font-weight: 900; letter-spacing: -0.04em; }
        .up-hero-stat-label { font-size: 10px; color: rgba(255,255,255,0.25); font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; }

        /* LOGO GRID */
        .up-logo-grid {
          max-width: 1200px; margin: 0 auto;
          padding: 48px 24px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .up-logo-grid-title {
          font-size: 11px; font-weight: 800; text-transform: uppercase;
          letter-spacing: 0.1em; color: rgba(255,255,255,0.2); margin-bottom: 20px;
        }
        .up-logos {
          display: grid; grid-template-columns: repeat(9, 1fr); gap: 8px;
        }
        .up-logo-item {
          background: #0D1221; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px; padding: 16px 8px;
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          transition: border-color 0.15s, transform 0.15s;
          text-decoration: none;
        }
        .up-logo-item:hover { border-color: rgba(124,245,192,0.2); transform: translateY(-2px); }
        .up-logo-emoji { font-size: 22px; }
        .up-logo-name { font-size: 10px; font-weight: 700; color: rgba(255,255,255,0.4); text-align: center; }

        /* PROJECTS LIST */
        .up-projects {
          max-width: 1200px; margin: 0 auto;
          padding: 48px 24px 80px;
        }
        .up-section-hdr { margin-bottom: 24px; }
        .up-section-title {
          font-size: clamp(22px, 3vw, 32px); font-weight: 900;
          letter-spacing: -0.03em; margin-bottom: 6px;
        }
        .up-section-sub { font-size: 13px; color: rgba(255,255,255,0.3); }

        .up-cat-section { margin-bottom: 48px; }
        .up-cat-label {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 10px; font-weight: 800; text-transform: uppercase;
          letter-spacing: 0.1em; padding: 4px 12px; border-radius: 99px;
          margin-bottom: 16px;
        }
        .up-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }

        .up-card {
          background: #0D1221; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 18px; padding: 22px;
          display: flex; flex-direction: column; gap: 14px;
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
          animation: fadeUp 0.5s ease both;
        }
        .up-card:hover { border-color: rgba(124,245,192,0.15); transform: translateY(-2px); box-shadow: 0 12px 40px rgba(0,0,0,0.3); }

        .up-card-top { display: flex; align-items: center; gap: 14px; }
        .up-card-icon {
          width: 44px; height: 44px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 20px; flex-shrink: 0;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07);
        }
        .up-card-name { font-size: 16px; font-weight: 900; letter-spacing: -0.02em; color: #fff; }
        .up-card-handle { font-size: 11px; color: rgba(255,255,255,0.25); font-weight: 500; margin-top: 2px; }

        .up-card-desc { font-size: 13px; color: rgba(255,255,255,0.38); line-height: 1.7; }

        .up-card-why {
          background: rgba(124,245,192,0.04); border: 1px solid rgba(124,245,192,0.1);
          border-radius: 10px; padding: 12px 14px;
        }
        .up-card-why-label {
          font-size: 9px; font-weight: 800; text-transform: uppercase;
          letter-spacing: 0.1em; color: #7CF5C0; margin-bottom: 5px;
        }
        .up-card-why-text { font-size: 12px; color: rgba(255,255,255,0.4); line-height: 1.6; }

        .up-card-footer { display: flex; align-items: center; justify-content: space-between; }
        .up-follow-btn {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.5); font-size: 11px; font-weight: 700;
          padding: 7px 14px; border-radius: 8px; text-decoration: none;
          transition: all 0.15s; font-family: inherit;
        }
        .up-follow-btn:hover { background: rgba(255,255,255,0.08); color: #fff; border-color: rgba(255,255,255,0.15); }

        /* CTA */
        .up-cta {
          background: linear-gradient(135deg, #0D1A2B, #080C14);
          border: 1px solid rgba(124,245,192,0.15);
          border-radius: 20px; padding: 40px;
          text-align: center; margin: 0 24px;
          max-width: 1152px; margin: 0 auto 80px;
          position: relative; overflow: hidden;
        }
        .up-cta::before {
          content: ''; position: absolute; top: -60px; left: 50%; transform: translateX(-50%);
          width: 400px; height: 300px; border-radius: 50%;
          background: radial-gradient(circle, rgba(124,245,192,0.06) 0%, transparent 70%);
        }
        .up-cta-title { font-size: 28px; font-weight: 900; letter-spacing: -0.03em; margin-bottom: 10px; }
        .up-cta-sub { font-size: 14px; color: rgba(255,255,255,0.35); margin-bottom: 24px; line-height: 1.6; }
        .up-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .up-cta-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, #7CF5C0, #4ade80);
          color: #080C14; font-size: 14px; font-weight: 800;
          padding: 13px 26px; border-radius: 12px; text-decoration: none;
          box-shadow: 0 8px 24px rgba(124,245,192,0.25);
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .up-cta-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(124,245,192,0.35); }
        .up-cta-btn-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.6); font-size: 14px; font-weight: 600;
          padding: 13px 26px; border-radius: 12px; text-decoration: none;
          transition: all 0.15s;
        }
        .up-cta-btn-secondary:hover { background: rgba(255,255,255,0.08); color: #fff; }

        /* FAQ */
        .up-faq {
          max-width: 800px; margin: 0 auto;
          padding: 0 24px 80px;
        }
        .up-faq-title { font-size: 28px; font-weight: 900; letter-spacing: -0.03em; margin-bottom: 24px; }
        .up-faq-item {
          background: #0D1221; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px; padding: 20px 22px; margin-bottom: 10px;
        }
        .up-faq-q { font-size: 15px; font-weight: 800; color: #fff; margin-bottom: 10px; display: flex; gap: 10px; align-items: flex-start; }
        .up-faq-q-badge {
          width: 20px; height: 20px; border-radius: 6px; flex-shrink: 0;
          background: rgba(124,245,192,0.1); border: 1px solid rgba(124,245,192,0.2);
          display: flex; align-items: center; justify-content: center;
          font-size: 10px; font-weight: 900; color: #7CF5C0; margin-top: 1px;
        }
        .up-faq-a { font-size: 13px; color: rgba(255,255,255,0.35); line-height: 1.75; padding-left: 30px; }

        @media (max-width: 900px) {
          .up-logos { grid-template-columns: repeat(6, 1fr); }
          .up-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .up-hero { padding: 48px 16px 40px; }
          .up-logo-grid, .up-projects, .up-faq { padding-left: 16px; padding-right: 16px; }
          .up-logos { grid-template-columns: repeat(4, 1fr); }
          .up-hero-stats { gap: 20px; }
          .up-cta { margin: 0 16px 60px; padding: 28px 20px; }
        }
      `}</style>

      <div className="up-root">

        {/* HERO */}
        <section className="up-hero">
          <div className="up-hero-grid" />
          <div className="up-hero-glow" />
          <div className="up-hero-inner">
            <div className="up-breadcrumb">
              <Link href="/" className="up-bc-link">Home</Link>
              <span className="up-bc-sep">›</span>
              <Link href="/learn" className="up-bc-link">Learn</Link>
              <span className="up-bc-sep">›</span>
              <span className="up-bc-cur">Upcoming Projects</span>
            </div>
            <div className="up-badge">
              <span className="up-badge-dot" />
              Updated May 25, 2026
            </div>
            <h1 className="up-h1">
              <span className="up-h1-accent">18 Early Projects</span><br />
              to watch before<br />
              they launch.
            </h1>
            <p className="up-sub">
              The best early stage crypto platforms across AI, DeFi, DePIN, and Web3. Follow these projects now — before they announce tokens.
            </p>
            <div className="up-hero-stats">
              <div className="up-hero-stat">
                <span className="up-hero-stat-num" style={{ color: '#7CF5C0' }}>18</span>
                <span className="up-hero-stat-label">Early Projects</span>
              </div>
              <div className="up-hero-stat">
                <span className="up-hero-stat-num" style={{ color: '#818cf8' }}>6</span>
                <span className="up-hero-stat-label">Categories</span>
              </div>
              <div className="up-hero-stat">
                <span className="up-hero-stat-num" style={{ color: '#f59e0b' }}>Free</span>
                <span className="up-hero-stat-label">To Follow</span>
              </div>
            </div>
          </div>
        </section>

        {/* LOGO GRID */}
        <div className="up-logo-grid">
          <div className="up-logo-grid-title">All 18 Projects</div>
          <div className="up-logos">
            {projects.map(p => (
              <a key={p.handle} href={p.url} target="_blank" rel="noopener noreferrer" className="up-logo-item">
                <span className="up-logo-emoji">{p.emoji}</span>
                <span className="up-logo-name">{p.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* PROJECTS BY CATEGORY */}
        <div className="up-projects">
          <div className="up-section-hdr">
            <h2 className="up-section-title">All 18 Projects — Full Breakdown</h2>
            <p className="up-section-sub">Why each one is worth following and what to do right now.</p>
          </div>

          {(Object.entries(categoryGroups) as [Category, typeof projects][]).map(([cat, projs]) => {
            const colors = catColors[cat];
            return (
              <div key={cat} className="up-cat-section">
                <div className="up-cat-label" style={{ background: colors.bg, color: colors.color, border: `1px solid ${colors.color}30` }}>
                  {cat}
                </div>
                <div className="up-grid">
                  {projs.map((p, i) => (
                    <div key={p.handle} className="up-card" style={{ animationDelay: `${i * 0.08}s` }}>
                      <div className="up-card-top">
                        <div className="up-card-icon">{p.emoji}</div>
                        <div>
                          <div className="up-card-name">{p.name}</div>
                          <div className="up-card-handle">{p.handle}</div>
                        </div>
                        <div style={{ marginLeft: 'auto', flexShrink: 0 }}>
                          <span style={{ background: colors.bg, color: colors.color, border: `1px solid ${colors.color}30`, fontSize: '9px', fontWeight: 800, padding: '3px 8px', borderRadius: '99px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                            {cat}
                          </span>
                        </div>
                      </div>
                      <p className="up-card-desc">{p.desc}</p>
                      <div className="up-card-why">
                        <div className="up-card-why-label">Why it matters</div>
                        <p className="up-card-why-text">{p.why}</p>
                      </div>
                      <div className="up-card-footer">
                        <a href={p.url} target="_blank" rel="noopener noreferrer" className="up-follow-btn">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
                          Follow on X
                        </a>
                        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)', fontWeight: 600 }}>No token yet</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="up-cta" style={{ margin: '0 24px 80px', maxWidth: '1152px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 className="up-cta-title">Track every airdrop in one place</h2>
            <p className="up-cta-sub">94+ verified airdrop guides. Updated daily. Always free.</p>
            <div className="up-cta-btns">
              <Link href="/airdrops" className="up-cta-btn-primary">Browse All Airdrops →</Link>
              <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" className="up-cta-btn-secondary">
                Join Telegram for Alerts
              </a>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="up-faq">
          <h2 className="up-faq-title">Frequently Asked Questions</h2>
          {[
            { q: 'What are the best upcoming crypto airdrops in 2026?', a: 'The best upcoming crypto projects in 2026 include Glowfdn (clean energy blockchain), FloeLabs (DeFi lending for AI agents), Augustus Bank (AI native banking), Umi (decentralized stablecoin), and SpecterAMM (AI crypto trading). These are early stage platforms that have not yet launched tokens.' },
            { q: 'How do I get early access to upcoming crypto projects?', a: 'Follow the project on Twitter/X, join their Discord, sign up for waitlists, and complete any available tasks on Galxe or their own platform. Early community members almost always receive priority in token distributions.' },
            { q: 'Are early stage crypto projects worth following?', a: 'Yes. Projects like Arbitrum, Optimism, and Hyperliquid all started as early stage platforms with small communities. Getting in early — following, joining Discord, and using testnet products — has historically led to significant airdrop rewards.' },
          ].map((f, i) => (
            <div key={i} className="up-faq-item">
              <div className="up-faq-q">
                <span className="up-faq-q-badge">Q</span>
                {f.q}
              </div>
              <p className="up-faq-a">{f.a}</p>
            </div>
          ))}
        </div>

          <div className="aff-box">
            <p className="aff-label">🔗 Get ready — buy crypto now</p>
            <div className="aff-links">
              <a href="https://www.gate.com/share/xwvca1ha" target="_blank" rel="noopener noreferrer sponsored" className="aff-btn aff-gate">Gate.io — Buy crypto →</a>
              <a href="https://www.binance.com/referral/earn-together/refer2earn-usdc/claim?hl=en&ref=GRO_28502_0JWES&utm_source=referral_entrance" target="_blank" rel="noopener noreferrer sponsored" className="aff-btn aff-binance">Binance →</a>
            </div>
            <p className="aff-note">Low fees · Supports ETH, USDC, all major chains · Instant deposits</p>
          </div>


      </div>
    </>
  );
}
