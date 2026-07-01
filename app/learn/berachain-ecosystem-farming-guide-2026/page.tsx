import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Berachain Ecosystem Farming Guide 2026 — Kodiak, BEND, Infrared & BGT',
  description: 'Kodiak V3 is live on Berachain mainnet. Farm BGT emissions through Kodiak pools, BEND lending, Infrared vaults, and BEX liquidity. Full step-by-step guide updated July 2026.',
  keywords: 'berachain farming 2026, kodiak berachain, kodiak v3 berachain, berachain ecosystem apps, BGT farming, BEND berachain, infrared berachain, berachain airdrop guide',
  openGraph: {
    title: 'Berachain Ecosystem Farming Guide 2026 — Kodiak, BEND, Infrared & BGT',
    description: 'Kodiak V3 is live on Berachain mainnet. Farm BGT emissions through Kodiak pools, BEND lending, Infrared vaults, and BEX liquidity. Full step-by-step guide updated July 2026.',
    url: 'https://www.3alamiyweb3.com/learn/berachain-ecosystem-farming-guide-2026',
    siteName: '3alamiy Web3',
    type: 'article',
  },
  twitter: { card: 'summary_large_image', title: 'Berachain Ecosystem Farming Guide 2026 — Kodiak, BEND & BGT', description: 'How to earn BGT emissions on Berachain mainnet using Kodiak V3, BEND, Infrared, and BEX. Updated July 2026.' },
  alternates: { canonical: 'https://www.3alamiyweb3.com/learn/berachain-ecosystem-farming-guide-2026' },
  robots: { index: true, follow: true },
};

export default function BerachainFarmingGuide() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Berachain Ecosystem Farming Guide 2026 — Kodiak, BEND, Infrared & BGT',
    description: 'How to farm BGT emissions on Berachain mainnet using Kodiak V3, BEND lending, Infrared vaults, and BEX. Updated July 2026.',
    datePublished: '2026-07-01',
    dateModified: '2026-07-01',
    author: { '@type': 'Organization', name: '3alamiy Web3', url: 'https://www.3alamiyweb3.com' },
    publisher: { '@type': 'Organization', name: '3alamiy Web3', url: 'https://www.3alamiyweb3.com', logo: { '@type': 'ImageObject', url: 'https://www.3alamiyweb3.com/logo.png' } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.3alamiyweb3.com/learn/berachain-ecosystem-farming-guide-2026' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Kodiak V3 on Berachain?',
        acceptedAnswer: { '@type': 'Answer', text: 'Kodiak V3 is the latest version of Kodiak Finance, a concentrated liquidity DEX (decentralized exchange) built natively on Berachain. V3 introduces concentrated liquidity ranges, allowing LPs to provide liquidity within specific price ranges for higher fee efficiency compared to V2.' },
      },
      {
        '@type': 'Question',
        name: 'How do I earn BGT on Berachain?',
        acceptedAnswer: { '@type': 'Answer', text: 'BGT (Berachain Governance Token) is earned by providing liquidity in whitelisted gauge pools. The main ways are: adding liquidity to Kodiak V3 pools, depositing into BEX vaults, lending on BEND, and staking in Infrared vaults. BGT is non-transferable and must be burned 1:1 for BERA or delegated to validators.' },
      },
      {
        '@type': 'Question',
        name: 'Does Kodiak Finance have its own token?',
        acceptedAnswer: { '@type': 'Answer', text: 'Kodiak Finance has not officially announced a native token launch as of July 2026. The protocol uses BGT emissions as liquidity incentives. Any future KODI or equivalent token would be an additional reward layer on top of BGT farming.' },
      },
      {
        '@type': 'Question',
        name: 'What is the best pool to farm on Kodiak?',
        acceptedAnswer: { '@type': 'Answer', text: 'The highest BGT-emitting pools on Kodiak V3 are typically WBERA/HONEY, WBTC/WBERA, and WETH/WBERA. Pool APRs change frequently based on validator delegation. Always check the Kodiak app gauge rankings before depositing.' },
      },
      {
        '@type': 'Question',
        name: 'Is Berachain mainnet live?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Berachain mainnet (Artio then Bera mainnet) launched in early 2025. BERA is the gas token. The ecosystem includes Kodiak (DEX), BEX (native AMM), BEND (lending), Berps (perps), and Infrared (liquid BGT staking).' },
      },
      {
        '@type': 'Question',
        name: 'What is Infrared Finance on Berachain?',
        acceptedAnswer: { '@type': 'Answer', text: 'Infrared Finance is a liquid staking protocol on Berachain. It lets you deposit BGT and receive iBGT (liquid BGT) in return, allowing you to use BGT in DeFi while still earning validator rewards. Infrared also runs validators that direct BGT emissions to partner protocols.' },
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.3alamiyweb3.com' },
      { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://www.3alamiyweb3.com/learn' },
      { '@type': 'ListItem', position: 3, name: 'Berachain Ecosystem Farming Guide 2026', item: 'https://www.3alamiyweb3.com/learn/berachain-ecosystem-farming-guide-2026' },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <style>{`
        .bg-wrap { background: #080D18; min-height: 100vh; color: #fff; font-family: Arial, sans-serif; }
        .bg-inner { max-width: 760px; margin: 0 auto; padding: 48px 24px 100px; }

        /* Breadcrumb */
        .bg-bc { display: flex; align-items: center; gap: 6px; font-size: 11px; color: rgba(255,255,255,0.28); margin-bottom: 32px; flex-wrap: wrap; }
        .bg-bc a { color: rgba(255,255,255,0.38); text-decoration: none; }
        .bg-bc a:hover { color: #7CF5C0; }
        .bg-bc-sep { opacity: 0.3; }

        /* Hero */
        .bg-eyebrow { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: #F5A623; margin-bottom: 12px; }
        .bg-h1 { font-size: clamp(26px, 5vw, 38px); font-weight: 800; letter-spacing: -0.03em; line-height: 1.15; margin: 0 0 16px; color: #fff; }
        .bg-h1 em { font-style: normal; color: #7CF5C0; }
        .bg-meta { font-size: 12px; color: rgba(255,255,255,0.3); margin-bottom: 32px; display: flex; gap: 16px; flex-wrap: wrap; }
        .bg-meta span { display: flex; align-items: center; gap: 5px; }

        /* Direct answer box */
        .bg-answer { background: rgba(124,245,192,0.06); border: 1px solid rgba(124,245,192,0.2); border-left: 3px solid #7CF5C0; border-radius: 10px; padding: 18px 20px; margin-bottom: 32px; }
        .bg-answer-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #7CF5C0; margin-bottom: 8px; }
        .bg-answer p { font-size: 14px; color: rgba(255,255,255,0.8); line-height: 1.7; margin: 0; }

        /* Stats strip */
        .bg-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 36px; }
        .bg-stat { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 16px 14px; text-align: center; }
        .bg-stat-num { font-size: 22px; font-weight: 900; letter-spacing: -0.04em; color: #7CF5C0; line-height: 1; margin-bottom: 4px; }
        .bg-stat-lbl { font-size: 10px; color: rgba(255,255,255,0.3); text-transform: uppercase; letter-spacing: 0.07em; font-weight: 600; }

        /* Body text */
        .bg-wrap h2 { font-size: 22px; font-weight: 700; letter-spacing: -0.02em; margin: 40px 0 14px; color: #fff; }
        .bg-wrap h3 { font-size: 16px; font-weight: 700; margin: 28px 0 10px; color: rgba(255,255,255,0.9); }
        .bg-wrap p { font-size: 14.5px; line-height: 1.8; color: rgba(255,255,255,0.65); margin: 0 0 16px; }
        .bg-wrap a { color: #7CF5C0; text-decoration: none; }
        .bg-wrap a:hover { text-decoration: underline; }

        /* App cards grid */
        .bg-apps { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 24px 0 32px; }
        .bg-app { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 14px; padding: 18px 16px; }
        .bg-app-head { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
        .bg-app-icon { width: 32px; height: 32px; border-radius: 8px; background: rgba(124,245,192,0.1); display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 800; color: #7CF5C0; }
        .bg-app-name { font-size: 14px; font-weight: 700; color: #fff; }
        .bg-app-tag { font-size: 10px; color: rgba(255,255,255,0.3); margin-top: 1px; }
        .bg-app-desc { font-size: 12.5px; color: rgba(255,255,255,0.45); line-height: 1.6; margin: 0; }

        /* Step list */
        .bg-steps { list-style: none; padding: 0; margin: 0 0 28px; display: flex; flex-direction: column; gap: 12px; }
        .bg-step { display: flex; gap: 14px; align-items: flex-start; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 14px 16px; }
        .bg-step-num { width: 24px; height: 24px; border-radius: 50%; background: rgba(124,245,192,0.15); color: #7CF5C0; font-size: 11px; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; }
        .bg-step-text { font-size: 13.5px; color: rgba(255,255,255,0.7); line-height: 1.6; }
        .bg-step-text strong { color: #fff; }

        /* Update log */
        .bg-updates { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 18px 20px; margin: 28px 0; }
        .bg-updates-title { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.09em; color: rgba(255,255,255,0.3); margin-bottom: 12px; }
        .bg-update-row { display: flex; gap: 12px; font-size: 13px; color: rgba(255,255,255,0.5); padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.04); }
        .bg-update-row:last-child { border-bottom: none; }
        .bg-update-date { color: #7CF5C0; font-weight: 600; font-size: 11px; flex-shrink: 0; padding-top: 1px; }

        /* Warning box */
        .bg-warn { background: rgba(245,166,35,0.06); border: 1px solid rgba(245,166,35,0.2); border-radius: 10px; padding: 14px 16px; margin: 20px 0; font-size: 13px; color: rgba(255,255,255,0.6); line-height: 1.6; }
        .bg-warn strong { color: #F5A623; }

        /* FAQ */
        .bg-faq { display: flex; flex-direction: column; gap: 14px; margin: 20px 0 40px; }
        .bg-faq-item { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 16px 18px; }
        .bg-faq-q { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 8px; }
        .bg-faq-a { font-size: 13.5px; color: rgba(255,255,255,0.55); line-height: 1.7; margin: 0; }

        /* CTA */
        .bg-cta { background: linear-gradient(135deg, rgba(124,245,192,0.08) 0%, rgba(124,245,192,0.03) 100%); border: 1px solid rgba(124,245,192,0.2); border-radius: 16px; padding: 28px 24px; text-align: center; margin-top: 48px; }
        .bg-cta h3 { font-size: 18px; font-weight: 800; color: #fff; margin: 0 0 8px; }
        .bg-cta p { font-size: 13px; color: rgba(255,255,255,0.4); margin: 0 0 18px; }
        .bg-cta-btn { display: inline-block; background: #7CF5C0; color: #080D18; font-size: 13px; font-weight: 800; padding: 11px 24px; border-radius: 10px; text-decoration: none; }

        @media (max-width: 640px) {
          .bg-inner { padding: 32px 16px 80px; }
          .bg-stats { grid-template-columns: repeat(2, 1fr); }
          .bg-apps { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="bg-wrap">
        <div className="bg-inner">

          {/* Breadcrumb */}
          <nav className="bg-bc" aria-label="Breadcrumb">
            <a href="/">Home</a><span className="bg-bc-sep">/</span>
            <a href="/learn">Learn</a><span className="bg-bc-sep">/</span>
            <span>Berachain Farming Guide 2026</span>
          </nav>

          {/* Hero */}
          <p className="bg-eyebrow">Berachain Ecosystem</p>
          <h1 className="bg-h1">Berachain Ecosystem Farming Guide 2026 — <em>Kodiak V3</em>, BEND, Infrared & BGT</h1>
          <div className="bg-meta">
            <span>Updated July 1, 2026</span>
            <span>10 min read</span>
            <span>Mainnet Live</span>
          </div>

          {/* Direct answer box */}
          <div className="bg-answer">
            <div className="bg-answer-label">Quick Answer</div>
            <p>Berachain mainnet is live. BGT (non-transferable governance token) is earned by providing liquidity in whitelisted gauge pools. The four main farming venues are Kodiak V3 (concentrated liquidity DEX), BEX (native AMM), BEND (lending), and Infrared (liquid BGT staking). Kodiak V3 launched in Q2 2026 with concentrated liquidity ranges for higher capital efficiency.</p>
          </div>

          {/* Stats */}
          <div className="bg-stats">
            <div className="bg-stat">
              <div className="bg-stat-num">V3</div>
              <div className="bg-stat-lbl">Kodiak Version</div>
            </div>
            <div className="bg-stat">
              <div className="bg-stat-num">4+</div>
              <div className="bg-stat-lbl">Farming Venues</div>
            </div>
            <div className="bg-stat">
              <div className="bg-stat-num">BGT</div>
              <div className="bg-stat-lbl">Reward Token</div>
            </div>
            <div className="bg-stat">
              <div className="bg-stat-num">Live</div>
              <div className="bg-stat-lbl">Mainnet Status</div>
            </div>
          </div>

          <p>Berachain uses a unique Proof-of-Liquidity (PoL) consensus model where validators earn block rewards and direct BGT emissions to specific liquidity pools. This means users who provide liquidity in the right pools earn BGT — the governance token that controls where future emissions go. The ecosystem has grown significantly since mainnet launch, with Kodiak V3 now live as the primary concentrated liquidity venue.</p>

          {/* Kodiak V3 section */}
          <h2>Kodiak V3: What Changed</h2>

          <p>Kodiak Finance launched V3 in Q2 2026, upgrading from its original V2 constant-product AMM to a concentrated liquidity model similar to Uniswap V3. The main changes:</p>

          <ul className="bg-steps">
            <li className="bg-step">
              <span className="bg-step-num">1</span>
              <span className="bg-step-text"><strong>Concentrated liquidity ranges</strong> — LPs can now choose a price range for their liquidity instead of providing across the full curve. Tighter ranges earn more fees per dollar deployed when the price stays in range.</span>
            </li>
            <li className="bg-step">
              <span className="bg-step-num">2</span>
              <span className="bg-step-text"><strong>Island vaults</strong> — Kodiak Islands are managed positions that auto-rebalance your liquidity range for you. Useful if you don't want to manage ranges manually.</span>
            </li>
            <li className="bg-step">
              <span className="bg-step-num">3</span>
              <span className="bg-step-text"><strong>BGT gauge eligibility</strong> — Selected V3 pools and Islands receive BGT emissions via validator gauge delegation. Check the Rewards page to see which pools are currently emitting.</span>
            </li>
            <li className="bg-step">
              <span className="bg-step-num">4</span>
              <span className="bg-step-text"><strong>V2 pools still active</strong> — Legacy V2 pools continue to function. Some still have gauge allocations, but V3 pools generally attract more delegation over time.</span>
            </li>
          </ul>

          <div className="bg-warn">
            <strong>Impermanent loss risk:</strong> Concentrated liquidity amplifies both gains and impermanent loss. If the price moves outside your range, your position earns zero fees and stops accumulating BGT until rebalanced.
          </div>

          {/* Ecosystem overview */}
          <h2>The 4 Main Farming Venues</h2>

          <div className="bg-apps">
            <div className="bg-app">
              <div className="bg-app-head">
                <div className="bg-app-icon">K</div>
                <div>
                  <div className="bg-app-name">Kodiak Finance</div>
                  <div className="bg-app-tag">Concentrated liquidity DEX</div>
                </div>
              </div>
              <p className="bg-app-desc">The primary DEX on Berachain. V3 pools and Island vaults earn trading fees plus BGT emissions from gauge allocations. Highest fee volume on the network.</p>
            </div>
            <div className="bg-app">
              <div className="bg-app-head">
                <div className="bg-app-icon">B</div>
                <div>
                  <div className="bg-app-name">BEX</div>
                  <div className="bg-app-tag">Native AMM (built into chain)</div>
                </div>
              </div>
              <p className="bg-app-desc">BEX is Berachain's native built-in DEX. Certain BEX pools receive BGT gauge allocations directly from the protocol. Lower IL risk than concentrated positions.</p>
            </div>
            <div className="bg-app">
              <div className="bg-app-head">
                <div className="bg-app-icon">N</div>
                <div>
                  <div className="bg-app-name">BEND</div>
                  <div className="bg-app-tag">Lending protocol</div>
                </div>
              </div>
              <p className="bg-app-desc">Berachain's native lending market. Supply assets to earn yield and BGT. Borrowing against collateral to lever up is a common strategy but adds liquidation risk.</p>
            </div>
            <div className="bg-app">
              <div className="bg-app-head">
                <div className="bg-app-icon">I</div>
                <div>
                  <div className="bg-app-name">Infrared Finance</div>
                  <div className="bg-app-tag">Liquid BGT staking</div>
                </div>
              </div>
              <p className="bg-app-desc">Deposit BGT to receive iBGT, a liquid token that retains validator rewards. Infrared runs validators that direct BGT emissions to whitelisted protocols.</p>
            </div>
          </div>

          {/* How to farm */}
          <h2>Step-by-Step: How to Farm on Berachain</h2>

          <h3>Step 1: Bridge to Berachain</h3>
          <p>Berachain mainnet uses BERA as the native gas token. Bridge ETH, USDC, or WBTC via the official Berachain bridge or third-party bridges like LayerZero, Stargate, or Relay. You need a small amount of BERA for gas — the faucet at <strong>faucet.berachain.com</strong> gives a small amount to new wallets.</p>

          <h3>Step 2: Acquire HONEY</h3>
          <p>HONEY is Berachain's native overcollateralized stablecoin. Most high-BGT pools pair assets against HONEY (e.g., WBERA/HONEY, WBTC/HONEY). Mint HONEY by depositing USDC on BEX, or swap for it directly on Kodiak.</p>

          <h3>Step 3: Add Liquidity on Kodiak V3</h3>
          <ul className="bg-steps">
            <li className="bg-step">
              <span className="bg-step-num">1</span>
              <span className="bg-step-text">Go to <strong>app.kodiak.finance</strong> and connect your wallet.</span>
            </li>
            <li className="bg-step">
              <span className="bg-step-num">2</span>
              <span className="bg-step-text">Click <strong>Earn</strong> and filter by "BGT Rewards" to see gauge-eligible pools.</span>
            </li>
            <li className="bg-step">
              <span className="bg-step-num">3</span>
              <span className="bg-step-text">Select a pool (e.g., WBERA/HONEY). For V3, set your price range — start wide (±20%) if you're new to concentrated liquidity.</span>
            </li>
            <li className="bg-step">
              <span className="bg-step-num">4</span>
              <span className="bg-step-text">Or choose a <strong>Kodiak Island</strong> vault for the same pool — it auto-rebalances and stakes the LP token for you.</span>
            </li>
            <li className="bg-step">
              <span className="bg-step-num">5</span>
              <span className="bg-step-text">Deposit and confirm. BGT starts accruing immediately to the pool's gauge position.</span>
            </li>
            <li className="bg-step">
              <span className="bg-step-num">6</span>
              <span className="bg-step-text">Claim BGT from the Rewards tab. You can burn it 1:1 for BERA or delegate it to a validator to earn future yield.</span>
            </li>
          </ul>

          <h3>Step 4: Lend on BEND for Extra BGT</h3>
          <p>Navigate to <strong>bend.berachain.com</strong>, supply WBERA or HONEY as collateral, and earn supply APY plus any gauge-allocated BGT. BEND supply positions that are gauge-eligible earn BGT on top of base interest.</p>

          <h3>Step 5: Stake BGT via Infrared</h3>
          <p>Instead of burning BGT for BERA, stake it on <strong>infrared.finance</strong> to receive iBGT. iBGT accrues validator delegation rewards and can be used in other DeFi protocols. Infrared also offers iBERA (liquid BERA staking) which earns a base staking yield.</p>

          {/* Recent updates */}
          <h2>Recent Berachain Ecosystem Updates</h2>

          <div className="bg-updates">
            <div className="bg-updates-title">Update Log</div>
            <div className="bg-update-row">
              <span className="bg-update-date">Jul 2026</span>
              <span>Kodiak V3 mainnet stable; Island vault TVL surpasses V2 legacy pools for the first time.</span>
            </div>
            <div className="bg-update-row">
              <span className="bg-update-date">Jun 2026</span>
              <span>Kodiak V3 soft-launched with concentrated liquidity. Selected V3 pools added to BGT gauge whitelist.</span>
            </div>
            <div className="bg-update-row">
              <span className="bg-update-date">May 2026</span>
              <span>BEND introduced BGT gauge allocations for supply positions. Infrared iBGT yield increased with new validator partnerships.</span>
            </div>
            <div className="bg-update-row">
              <span className="bg-update-date">Feb 2026</span>
              <span>Berachain mainnet went live. BERA listed on major exchanges. BGT farming began for BEX and BEND positions.</span>
            </div>
          </div>

          {/* Strategy tips */}
          <h2>BGT Farming Strategy Tips</h2>

          <p>The most efficient Berachain farming strategy is not just about providing liquidity — it is about understanding validator incentives. BGT emissions go to pools that validators whitelist. Validators whitelist pools based on bribes from protocols. This creates a flywheel:</p>

          <ul className="bg-steps">
            <li className="bg-step">
              <span className="bg-step-num">1</span>
              <span className="bg-step-text"><strong>Follow the BGT emissions, not just the APR.</strong> The displayed APR changes hourly as validators redirect emissions. Check Berachain's Rewards page for live emission rates per pool.</span>
            </li>
            <li className="bg-step">
              <span className="bg-step-num">2</span>
              <span className="bg-step-text"><strong>Delegate BGT to Infrared validators</strong> to earn compounding returns without burning BGT for BERA (which is a one-way action and reduces your governance power).</span>
            </li>
            <li className="bg-step">
              <span className="bg-step-num">3</span>
              <span className="bg-step-text"><strong>Use Island vaults</strong> on Kodiak V3 if you are providing liquidity in volatile pairs. Auto-rebalancing prevents your position from going out-of-range and losing BGT accrual.</span>
            </li>
            <li className="bg-step">
              <span className="bg-step-num">4</span>
              <span className="bg-step-text"><strong>Combine BEND + Kodiak.</strong> Supply HONEY on BEND to earn BGT, then use borrowed assets to add liquidity on Kodiak for additional BGT. Only do this if you understand liquidation risk.</span>
            </li>
          </ul>

          {/* FAQ */}
          <h2>Frequently Asked Questions</h2>

          <div className="bg-faq">
            {[
              { q: 'What is Kodiak V3 on Berachain?', a: 'Kodiak V3 is the latest version of Kodiak Finance, a concentrated liquidity DEX built natively on Berachain. V3 introduces price range selection for LPs (similar to Uniswap V3), plus Island vaults that auto-manage your position and stake the LP token for BGT rewards automatically.' },
              { q: 'How do I earn BGT on Berachain?', a: 'BGT is earned by providing liquidity in pools that have been whitelisted for gauge emissions. The main venues are Kodiak V3 pools and Island vaults, BEX liquidity pools, BEND supply positions, and Infrared iBGT staking. BGT accrues automatically and can be claimed from each protocol\'s Rewards page.' },
              { q: 'Does Kodiak Finance have its own token?', a: 'As of July 2026, Kodiak Finance has not launched a native token. The protocol uses BGT incentives. Watch Kodiak\'s official Twitter and Discord for any future token announcements.' },
              { q: 'What is the best Kodiak pool for BGT farming?', a: 'WBERA/HONEY and WBTC/WBERA typically receive the highest BGT gauge allocations because they are the deepest and most actively traded pairs. However, BGT emissions shift daily — always check the live Rewards page on Kodiak before depositing.' },
              { q: 'Is Berachain mainnet live?', a: 'Yes. Berachain mainnet is live as of early 2025. BERA is the gas token, BGT is the non-transferable governance token, and HONEY is the native stablecoin. All major ecosystem apps (Kodiak, BEX, BEND, Berps, Infrared) are deployed on mainnet.' },
              { q: 'What is Infrared Finance?', a: 'Infrared is a liquid staking protocol on Berachain. It converts your BGT into iBGT, which is transferable and earns validator delegation rewards. Infrared also runs a set of validators that direct BGT gauge allocations to whitelisted protocols, creating synergies with Kodiak and BEND.' },
            ].map((item, i) => (
              <div key={i} className="bg-faq-item">
                <div className="bg-faq-q">{item.q}</div>
                <p className="bg-faq-a">{item.a}</p>
              </div>
            ))}
          </div>

          {/* Internal links */}
          <p>Looking for more airdrop opportunities? Check the <a href="/upcoming">upcoming tokenless projects</a> tracker for protocols that haven't launched tokens yet, or browse all <a href="/airdrops">active airdrops</a> on the main listings page.</p>

          {/* CTA */}
          <div className="bg-cta">
            <h3>Check Your Wallet for Berachain Eligibility</h3>
            <p>Use the free wallet checker to see your on-chain activity score and potential airdrop eligibility.</p>
            <a href="/wallet-checker" className="bg-cta-btn">Check My Wallet — Free</a>
          </div>

        </div>
      </div>
    </>
  );
}
