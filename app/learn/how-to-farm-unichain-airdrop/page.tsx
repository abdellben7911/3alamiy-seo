import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Farm the Unichain Airdrop 2026: Complete Step-by-Step Guide',
  description: 'Unichain is Uniswap\'s official Layer 2. Learn how to farm the potential Unichain airdrop in 2026 — bridge ETH, swap on Uniswap v4, provide liquidity, and build on-chain history that qualifies.',
  alternates: { canonical: 'https://www.3alamiyweb3.com/learn/how-to-farm-unichain-airdrop' },
  openGraph: {
    title: 'How to Farm the Unichain Airdrop 2026',
    description: 'Unichain is Uniswap\'s official L2. Step-by-step guide to farming the potential airdrop — bridge, swap, LP, and qualify.',
    url: 'https://www.3alamiyweb3.com/learn/how-to-farm-unichain-airdrop',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Farm the Unichain Airdrop 2026: Complete Step-by-Step Guide',
  description: 'A complete guide to farming the potential Unichain airdrop in 2026 by bridging ETH, swapping on Uniswap v4, providing liquidity, and building on-chain history.',
  datePublished: '2026-06-09',
  dateModified: '2026-06-09',
  author: { '@type': 'Organization', name: '3alamiy Web3', url: 'https://www.3alamiyweb3.com' },
  publisher: {
    '@type': 'Organization',
    name: '3alamiy Web3',
    url: 'https://www.3alamiyweb3.com',
    logo: { '@type': 'ImageObject', url: 'https://www.3alamiyweb3.com/icon.svg' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.3alamiyweb3.com/learn/how-to-farm-unichain-airdrop' },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-summary', '.article-steps'] },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is there a confirmed Unichain airdrop?',
      acceptedAnswer: { '@type': 'Answer', text: 'No official airdrop has been confirmed by Uniswap Labs as of June 2026. However, Unichain launched in early 2025 with no token, and Uniswap has a history of rewarding early users (the original UNI airdrop gave 400 UNI to every early wallet). Farming activity now is considered high-potential by the airdrop community.' },
    },
    {
      '@type': 'Question',
      name: 'What is Unichain?',
      acceptedAnswer: { '@type': 'Answer', text: 'Unichain is a Layer 2 blockchain built by Uniswap Labs on the OP Stack (same technology as Optimism and Base). It launched on mainnet in early 2025 and is specifically designed for DeFi — fast finality, low gas, and deep integration with Uniswap v4 liquidity pools.' },
    },
    {
      '@type': 'Question',
      name: 'How do I bridge to Unichain?',
      acceptedAnswer: { '@type': 'Answer', text: 'Bridge ETH to Unichain using the official Unichain bridge at app.uniswap.org, or use third-party bridges like Relay, Across Protocol, or Stargate. The official bridge takes ~1 minute and costs minimal gas. Unichain chain ID is 130.' },
    },
    {
      '@type': 'Question',
      name: 'What activities qualify for a potential Unichain airdrop?',
      acceptedAnswer: { '@type': 'Answer', text: 'Based on Uniswap\'s history and current on-chain activity patterns, the most likely qualifying activities are: swapping on Uniswap v4 on Unichain, providing liquidity in Uniswap v4 pools, bridging ETH to Unichain, and maintaining consistent monthly activity over several months.' },
    },
    {
      '@type': 'Question',
      name: 'How much could the Unichain airdrop be worth?',
      acceptedAnswer: { '@type': 'Answer', text: 'No estimates are official. For comparison, the original UNI airdrop (September 2020) gave 400 UNI tokens to ~250,000 wallets — worth $1,200 at launch and $15,000+ at peak. Active Unichain liquidity providers and frequent swappers are expected to receive the largest allocations if an airdrop occurs.' },
    },
    {
      '@type': 'Question',
      name: 'Do I need a lot of money to farm Unichain?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Gas fees on Unichain are very low (often under $0.01 per transaction). You can start with as little as $20–50 in ETH. The key is consistent activity over months, not the dollar size of transactions. Uniswap has historically rewarded wallets based on interaction count, not capital size.' },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Farm the Unichain Airdrop in 2026',
  description: 'Step-by-step guide to building qualifying on-chain activity on Unichain for a potential future airdrop.',
  totalTime: 'PT30M',
  estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '20' },
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Set up MetaMask for Unichain', text: 'Add Unichain to MetaMask: Chain ID 130, RPC https://mainnet.unichain.org, symbol ETH, explorer https://uniscan.xyz. Or use the "Add to MetaMask" button on the official Unichain website.' },
    { '@type': 'HowToStep', position: 2, name: 'Bridge ETH to Unichain', text: 'Go to app.uniswap.org and use the Bridge tab. Select Ethereum → Unichain and bridge at least 0.01 ETH. The bridge takes ~1 minute. This creates your first qualifying on-chain record.' },
    { '@type': 'HowToStep', position: 3, name: 'Swap tokens on Uniswap v4', text: 'On Uniswap with Unichain selected, swap ETH → USDC or ETH → any token. Do this at least weekly. Transaction volume and swap count are both tracked signals. Even small swaps ($5–20) count.' },
    { '@type': 'HowToStep', position: 4, name: 'Provide liquidity in a Uniswap v4 pool', text: 'Go to app.uniswap.org → Pool → New Position. Select the ETH/USDC pool on Unichain. Provide liquidity in a concentrated range. LP positions are a strong signal — Uniswap rewards LPs.' },
    { '@type': 'HowToStep', position: 5, name: 'Maintain consistent monthly activity', text: 'Set a reminder to do at least 4–5 transactions per month on Unichain: swap, add/remove LP, bridge in/out. Consistency across 6+ months builds a strong wallet profile.' },
    { '@type': 'HowToStep', position: 6, name: 'Explore the broader Unichain ecosystem', text: 'Use other dApps deployed on Unichain — lending protocols, NFT platforms, and DeFi tools built on the chain. Broad ecosystem usage is a secondary signal for airdrops.' },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.3alamiyweb3.com' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://www.3alamiyweb3.com/learn' },
    { '@type': 'ListItem', position: 3, name: 'How to Farm the Unichain Airdrop 2026', item: 'https://www.3alamiyweb3.com/learn/how-to-farm-unichain-airdrop' },
  ],
};

export default function UnichainAirdropGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <style>{`
        .ug-wrap { min-height:100vh; background:#060A12; font-family:var(--font-space),'Space Grotesk',system-ui,sans-serif; color:#fff; }
        .ug-hero { background:linear-gradient(180deg,rgba(255,7,122,0.07) 0%,transparent 100%); border-bottom:1px solid rgba(255,255,255,0.06); padding:52px 24px 44px; }
        .ug-inner { max-width:780px; margin:0 auto; }
        .ug-breadcrumb { display:flex; align-items:center; gap:6px; font-size:12px; color:rgba(255,255,255,0.28); margin-bottom:24px; flex-wrap:wrap; }
        .ug-breadcrumb a { color:rgba(255,255,255,0.28); text-decoration:none; }
        .ug-breadcrumb a:hover { color:rgba(255,255,255,0.6); }
        .ug-badge { display:inline-flex; align-items:center; gap:6px; background:rgba(255,7,122,0.1); border:1px solid rgba(255,7,122,0.25); color:#ff077a; padding:4px 12px; border-radius:99px; font-size:10px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:18px; }
        .ug-h1 { font-size:clamp(26px,4vw,42px); font-weight:900; letter-spacing:-0.04em; line-height:1.1; margin:0 0 18px; }
        .ug-h1 span { color:#ff077a; }
        .ug-meta { display:flex; align-items:center; gap:16px; flex-wrap:wrap; font-size:12px; color:rgba(255,255,255,0.3); margin-bottom:24px; }
        .ug-meta-dot { width:3px; height:3px; border-radius:50%; background:rgba(255,255,255,0.2); }
        .ug-summary { background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.07); border-radius:16px; padding:22px 26px; margin-bottom:0; }
        .ug-summary p { font-size:15px; color:rgba(255,255,255,0.65); line-height:1.8; margin:0; }

        .ug-body { max-width:780px; margin:0 auto; padding:44px 24px 80px; }
        .ug-section { margin-bottom:44px; }
        .ug-h2 { font-size:22px; font-weight:900; color:#fff; letter-spacing:-0.03em; margin:0 0 18px; padding-bottom:12px; border-bottom:1px solid rgba(255,255,255,0.07); }
        .ug-h3 { font-size:17px; font-weight:800; color:#fff; letter-spacing:-0.02em; margin:24px 0 10px; }
        .ug-p { font-size:15px; color:rgba(255,255,255,0.6); line-height:1.85; margin:0 0 16px; }
        .ug-p a { color:#ff077a; text-decoration:none; }
        .ug-p a:hover { text-decoration:underline; }

        /* Stats bar */
        .ug-stats { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin-bottom:32px; }
        .ug-stat { background:#0D1221; border:1px solid rgba(255,255,255,0.06); border-radius:14px; padding:18px 20px; text-align:center; }
        .ug-stat-val { font-size:22px; font-weight:900; color:#ff077a; letter-spacing:-0.04em; margin-bottom:4px; }
        .ug-stat-lbl { font-size:11px; color:rgba(255,255,255,0.3); font-weight:600; }

        /* Steps */
        .ug-steps { display:flex; flex-direction:column; gap:16px; }
        .ug-step { display:flex; gap:18px; background:#0D1221; border:1px solid rgba(255,255,255,0.06); border-radius:16px; padding:22px 24px; }
        .ug-step-num { width:36px; height:36px; border-radius:10px; background:rgba(255,7,122,0.1); border:1px solid rgba(255,7,122,0.25); color:#ff077a; font-size:15px; font-weight:900; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .ug-step-title { font-size:15px; font-weight:800; color:#fff; margin:0 0 6px; letter-spacing:-0.01em; }
        .ug-step-text { font-size:13px; color:rgba(255,255,255,0.5); line-height:1.75; margin:0; }
        .ug-step-tip { display:inline-block; margin-top:8px; background:rgba(255,7,122,0.06); border:1px solid rgba(255,7,122,0.15); color:rgba(255,7,122,0.8); font-size:11px; font-weight:700; padding:4px 10px; border-radius:6px; }

        /* Chain info */
        .ug-chain-card { background:linear-gradient(135deg,rgba(255,7,122,0.06),rgba(255,7,122,0.02)); border:1px solid rgba(255,7,122,0.15); border-radius:16px; padding:24px 28px; margin-bottom:32px; display:grid; grid-template-columns:1fr 1fr; gap:12px; }
        .ug-chain-item { }
        .ug-chain-key { font-size:10px; font-weight:800; color:rgba(255,255,255,0.25); text-transform:uppercase; letter-spacing:0.09em; margin-bottom:5px; }
        .ug-chain-val { font-size:14px; font-weight:700; color:#fff; font-family:monospace; }

        /* Comparison table */
        .ug-table { width:100%; border-collapse:collapse; margin-bottom:24px; }
        .ug-table th { font-size:10px; font-weight:800; color:rgba(255,255,255,0.25); text-transform:uppercase; letter-spacing:0.08em; padding:10px 16px; text-align:left; border-bottom:1px solid rgba(255,255,255,0.07); }
        .ug-table td { font-size:13px; color:rgba(255,255,255,0.55); padding:12px 16px; border-bottom:1px solid rgba(255,255,255,0.04); }
        .ug-table tr:last-child td { border-bottom:none; }
        .ug-table tr:hover td { background:rgba(255,255,255,0.02); }
        .ug-table td:first-child { font-weight:700; color:#fff; }
        .ug-green { color:#7CF5C0 !important; font-weight:700 !important; }
        .ug-yellow { color:#fbbf24 !important; font-weight:700 !important; }

        /* FAQ */
        .ug-faq { display:flex; flex-direction:column; gap:12px; }
        .ug-faq-item { background:#0D1221; border:1px solid rgba(255,255,255,0.06); border-radius:14px; padding:20px 22px; }
        .ug-faq-q { font-size:14px; font-weight:800; color:#fff; margin:0 0 8px; letter-spacing:-0.01em; }
        .ug-faq-a { font-size:13px; color:rgba(255,255,255,0.5); line-height:1.8; margin:0; }

        /* Warning box */
        .ug-warning { background:rgba(251,191,36,0.05); border:1px solid rgba(251,191,36,0.2); border-radius:14px; padding:18px 22px; margin-bottom:28px; display:flex; gap:12px; align-items:flex-start; }
        .ug-warning-text { font-size:13px; color:rgba(255,255,255,0.5); line-height:1.7; margin:0; }
        .ug-warning-text strong { color:rgba(251,191,36,0.9); }

        /* CTA */
        .ug-cta { background:linear-gradient(135deg,rgba(255,7,122,0.08),rgba(255,7,122,0.03)); border:1px solid rgba(255,7,122,0.2); border-radius:20px; padding:32px; text-align:center; }

        /* Related */
        .ug-related { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
        .ug-related-card { background:#0D1221; border:1px solid rgba(255,255,255,0.06); border-radius:14px; padding:18px 20px; text-decoration:none; transition:all 0.15s; display:block; }
        .ug-related-card:hover { border-color:rgba(255,255,255,0.14); transform:translateY(-2px); }
        .ug-related-tag { font-size:9px; font-weight:800; color:rgba(255,255,255,0.25); text-transform:uppercase; letter-spacing:0.08em; margin-bottom:8px; }
        .ug-related-title { font-size:13px; font-weight:700; color:#fff; line-height:1.4; }

        @media(max-width:600px){
          .ug-stats{grid-template-columns:1fr 1fr;}
          .ug-chain-card{grid-template-columns:1fr 1fr;}
          .ug-related{grid-template-columns:1fr;}
        }
      `}</style>

      <div className="ug-wrap">
        <div className="ug-hero">
          <div className="ug-inner">
            <nav className="ug-breadcrumb">
              <a href="/">Home</a><span>/</span>
              <a href="/learn">Learn</a><span>/</span>
              <span>Unichain Airdrop Guide</span>
            </nav>
            <div className="ug-badge">🦄 Uniswap L2 · High Potential</div>
            <h1 className="ug-h1">How to Farm the <span>Unichain Airdrop</span> in 2026</h1>
            <div className="ug-meta">
              <span>By 3alamiy Web3</span>
              <span className="ug-meta-dot"/>
              <span>Updated June 9, 2026</span>
              <span className="ug-meta-dot"/>
              <span>12 min read</span>
              <span className="ug-meta-dot"/>
              <span>🔴 No airdrop confirmed yet</span>
            </div>
            <div className="ug-summary article-summary">
              <p>Unichain is the official Layer 2 blockchain built by Uniswap Labs — the team behind the world's largest DEX with $2T+ in lifetime volume. No airdrop has been confirmed, but Uniswap has rewarded early users before (the UNI airdrop reached $15K+ per wallet at peak). This guide covers every activity that builds a strong qualifying wallet profile.</p>
            </div>
          </div>
        </div>

        <div className="ug-body">

          {/* Stats */}
          <div className="ug-stats">
            <div className="ug-stat">
              <div className="ug-stat-val">$2T+</div>
              <div className="ug-stat-lbl">Uniswap lifetime volume</div>
            </div>
            <div className="ug-stat">
              <div className="ug-stat-val">130</div>
              <div className="ug-stat-lbl">Unichain Chain ID</div>
            </div>
            <div className="ug-stat">
              <div className="ug-stat-val">&lt;$0.01</div>
              <div className="ug-stat-lbl">avg gas per tx</div>
            </div>
          </div>

          <div className="ug-warning">
            <span style={{ fontSize: 20, flexShrink: 0 }}>⚠️</span>
            <p className="ug-warning-text"><strong>No airdrop confirmed.</strong> This guide is based on Uniswap's past airdrop behavior and current community research. Farm at your own risk. Never spend more than you're comfortable losing on speculative airdrop activity.</p>
          </div>

          {/* What is Unichain */}
          <div className="ug-section">
            <h2 className="ug-h2">What is Unichain?</h2>
            <p className="ug-p">Unichain is a Layer 2 blockchain built by Uniswap Labs and launched on mainnet in early 2025. It runs on the OP Stack — the same technology powering Optimism and Base — and is specifically designed for DeFi with sub-second block times, near-zero gas fees, and native integration with Uniswap v4.</p>
            <p className="ug-p">Unlike generic L2s, Unichain is purpose-built for swapping. Uniswap v4 introduced "hooks" — programmable logic attached to liquidity pools — and Unichain is the primary chain where these hooks are deployed at scale.</p>

            <div className="ug-chain-card">
              <div className="ug-chain-item">
                <div className="ug-chain-key">Chain ID</div>
                <div className="ug-chain-val">130</div>
              </div>
              <div className="ug-chain-item">
                <div className="ug-chain-key">RPC URL</div>
                <div className="ug-chain-val" style={{ fontSize: 12 }}>mainnet.unichain.org</div>
              </div>
              <div className="ug-chain-item">
                <div className="ug-chain-key">Native Token</div>
                <div className="ug-chain-val">ETH</div>
              </div>
              <div className="ug-chain-item">
                <div className="ug-chain-key">Explorer</div>
                <div className="ug-chain-val" style={{ fontSize: 12 }}>uniscan.xyz</div>
              </div>
              <div className="ug-chain-item">
                <div className="ug-chain-key">Block Time</div>
                <div className="ug-chain-val">~1 second</div>
              </div>
              <div className="ug-chain-item">
                <div className="ug-chain-key">Technology</div>
                <div className="ug-chain-val">OP Stack</div>
              </div>
            </div>
          </div>

          {/* Why it could airdrop */}
          <div className="ug-section">
            <h2 className="ug-h2">Why a Unichain Airdrop is Likely</h2>
            <p className="ug-p">Unichain launched with no native token. Uniswap Labs has form here — the original UNI token launched in September 2020 as a retroactive airdrop to every wallet that had ever used Uniswap v1 or v2. Each wallet received 400 UNI, worth $1,200 at launch and over $15,000 at the 2021 bull market peak.</p>

            <table className="ug-table">
              <thead>
                <tr>
                  <th>Signal</th>
                  <th>Details</th>
                  <th>Strength</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>No chain token at launch</td>
                  <td>Unichain mainnet launched with 0 native token</td>
                  <td className="ug-green">Strong ✓</td>
                </tr>
                <tr>
                  <td>Uniswap's airdrop history</td>
                  <td>UNI retroactive airdrop rewarded ~250K wallets</td>
                  <td className="ug-green">Strong ✓</td>
                </tr>
                <tr>
                  <td>VC funding</td>
                  <td>Uniswap Labs raised $165M — VCs want token liquidity</td>
                  <td className="ug-yellow">Medium</td>
                </tr>
                <tr>
                  <td>Active ecosystem incentives</td>
                  <td>Uniswap Foundation currently running grants on Unichain</td>
                  <td className="ug-yellow">Medium</td>
                </tr>
                <tr>
                  <td>Competitor L2s all have tokens</td>
                  <td>Base, Arbitrum, Optimism, zkSync all airdropped</td>
                  <td className="ug-green">Strong ✓</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Step by step */}
          <div className="ug-section article-steps">
            <h2 className="ug-h2">Step-by-Step Farming Guide</h2>
            <div className="ug-steps">
              {[
                {
                  n: 1,
                  title: 'Add Unichain to MetaMask',
                  text: 'Open MetaMask → Networks → Add Network. Enter: Network Name: Unichain, RPC: https://mainnet.unichain.org, Chain ID: 130, Symbol: ETH, Explorer: https://uniscan.xyz. Or visit unichain.org and click "Add to MetaMask" for one-click setup.',
                  tip: '🔧 Takes 2 minutes',
                },
                {
                  n: 2,
                  title: 'Bridge ETH to Unichain',
                  text: 'Go to app.uniswap.org → select "Bridge" → Ethereum → Unichain. Bridge at least 0.01 ETH (~$25). The official bridge uses the OP Stack native bridge and takes about 1 minute. You can also use Relay.link or Across Protocol for faster bridging.',
                  tip: '💡 Bridge at least $30 to cover multiple months of activity',
                },
                {
                  n: 3,
                  title: 'Swap on Uniswap v4 (weekly)',
                  text: 'Go to app.uniswap.org with Unichain selected. Swap ETH → USDC, ETH → WBTC, or between any tokens. Do this at minimum once per week. Swap count and total volume both contribute to your wallet profile. Swaps cost under $0.01 each on Unichain.',
                  tip: '📅 Set a weekly calendar reminder',
                },
                {
                  n: 4,
                  title: 'Provide liquidity in a v4 pool',
                  text: 'Go to app.uniswap.org → Pool → New Position → select Unichain. The ETH/USDC 0.05% pool has the deepest liquidity. Provide a concentrated liquidity range. LPs are historically the highest-rewarded group in Uniswap airdrops. Even $50 in an LP counts.',
                  tip: '⭐ LP positions = strongest signal',
                },
                {
                  n: 5,
                  title: 'Interact with Unichain ecosystem dApps',
                  text: 'Beyond Uniswap itself, interact with other protocols deployed on Unichain. Check Unichain.org/ecosystem for the latest deployed dApps — lending protocols, NFT platforms, and yield tools. Each unique dApp interaction diversifies your on-chain footprint.',
                  tip: '🌐 Ecosystem breadth matters',
                },
                {
                  n: 6,
                  title: 'Bridge back to Ethereum occasionally',
                  text: 'Bridging both IN and OUT of Unichain (rather than just in) shows genuine usage rather than farming. Bridge small amounts back to Ethereum every 1–2 months to demonstrate two-directional activity.',
                  tip: '🔄 Bidirectional activity looks organic',
                },
              ].map(s => (
                <div key={s.n} className="ug-step">
                  <div className="ug-step-num">{s.n}</div>
                  <div>
                    <p className="ug-step-title">{s.title}</p>
                    <p className="ug-step-text">{s.text}</p>
                    <span className="ug-step-tip">{s.tip}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly checklist */}
          <div className="ug-section">
            <h2 className="ug-h2">Monthly Activity Checklist</h2>
            <p className="ug-p">Follow this routine every month to build a strong, consistent wallet profile that looks like a genuine Unichain user — not a farmer.</p>
            <table className="ug-table">
              <thead>
                <tr>
                  <th>Activity</th>
                  <th>Frequency</th>
                  <th>Time</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Swap on Uniswap v4', 'Weekly (4×/month)', '2 min', '~$0.04'],
                  ['Adjust LP range', 'Once per month', '5 min', '~$0.02'],
                  ['Bridge ETH in/out', 'Once per month', '3 min', '~$0.50 ETH gas'],
                  ['Try a new ecosystem dApp', 'Once per month', '10 min', '~$0.05'],
                  ['Check Unichain announcements', 'Weekly', '2 min', 'Free'],
                ].map(([act, freq, time, cost]) => (
                  <tr key={act as string}>
                    <td>{act}</td>
                    <td>{freq}</td>
                    <td>{time}</td>
                    <td className="ug-green">{cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* FAQ */}
          <div className="ug-section">
            <h2 className="ug-h2">Frequently Asked Questions</h2>
            <div className="ug-faq">
              {faqSchema.mainEntity.map((q) => (
                <div key={q.name} className="ug-faq-item">
                  <p className="ug-faq-q">{q.name}</p>
                  <p className="ug-faq-a">{q.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="ug-cta">
            <div style={{ fontSize: 40, marginBottom: 16 }}>🦄</div>
            <h3 style={{ fontSize: 20, fontWeight: 900, margin: '0 0 10px', letterSpacing: '-0.03em' }}>Check Your Unichain Eligibility</h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', maxWidth: 420, margin: '0 auto 22px', lineHeight: 1.75 }}>Already active on Unichain? Run your wallet through our checker to see all airdrops you currently qualify for.</p>
            <a href="/wallet-checker" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#ff077a,#c2185b)', color: '#fff', fontWeight: 800, fontSize: 14, padding: '13px 28px', borderRadius: 12, textDecoration: 'none' }}>
              Check My Wallet →
            </a>
          </div>

          {/* Related articles */}
          <div className="ug-section" style={{ marginTop: 44 }}>
            <h2 className="ug-h2">Related Guides</h2>
            <div className="ug-related">
              {[
                { tag: 'L2 Guide', title: 'How to Farm the MegaETH Airdrop 2026', href: '/learn/how-to-farm-megaeth-airdrop' },
                { tag: 'Ecosystem', title: 'Best Base Airdrops 2026', href: '/learn/best-base-airdrops-2026' },
                { tag: 'DeFi Farming', title: 'How to Farm the Monad Airdrop 2026', href: '/learn/how-to-farm-monad-airdrop' },
                { tag: 'Top Picks', title: 'Top 25 Airdrop Picks for 2026', href: '/learn/top-25-airdrop-picks-2026' },
              ].map(r => (
                <a key={r.href} href={r.href} className="ug-related-card">
                  <div className="ug-related-tag">{r.tag}</div>
                  <div className="ug-related-title">{r.title}</div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
