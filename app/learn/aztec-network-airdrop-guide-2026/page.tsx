import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aztec Network Airdrop Guide 2026 — Is It Still Worth Farming? | 3alamiy Web3',
  description: 'Aztec Network TGE happened in February 2026. But the adversarial testnet is still live, node operators earn rewards, and ecosystem apps are tokenless. Full guide to what still works.',
  keywords: 'aztec network airdrop 2026, aztec airdrop guide, aztec testnet farming, AZTEC token, aztec node setup, aztec adversarial testnet, privacy L2 airdrop',
  alternates: { canonical: 'https://www.3alamiyweb3.com/learn/aztec-network-airdrop-guide-2026' },
  openGraph: {
    title: 'Aztec Network Airdrop Guide 2026 — Is It Still Worth Farming?',
    description: 'TGE done. But adversarial testnet challenges, node roles, and ecosystem apps make Aztec still worth farming. Full step-by-step guide.',
    url: 'https://www.3alamiyweb3.com/learn/aztec-network-airdrop-guide-2026',
    siteName: '3alamiy Web3',
    type: 'article',
  },
};

export default function AztecGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify([
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Aztec Network Airdrop Guide 2026 — Is It Still Worth Farming?',
          description: 'Complete guide to farming Aztec Network in 2026 — TGE status, adversarial testnet tasks, node setup, and ecosystem app opportunities.',
          url: 'https://www.3alamiyweb3.com/learn/aztec-network-airdrop-guide-2026',
          datePublished: '2026-06-10',
          dateModified: '2026-06-10',
          author: { '@type': 'Organization', name: '3alamiy Web3', url: 'https://www.3alamiyweb3.com' },
          publisher: { '@type': 'Organization', name: '3alamiy Web3', url: 'https://www.3alamiyweb3.com' },
          image: 'https://www.3alamiyweb3.com/og-image.png',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'How to Farm Aztec Network in 2026',
          description: 'Step-by-step guide to earning rewards on Aztec Network through the adversarial testnet, node operation, and ecosystem apps.',
          step: [
            { '@type': 'HowToStep', position: 1, name: 'Set up MetaMask for Aztec Testnet', text: 'Add Aztec testnet to MetaMask: Chain ID 677868, RPC https://rpc.aztec.network, symbol ETH.' },
            { '@type': 'HowToStep', position: 2, name: 'Bridge ETH to Aztec Testnet', text: 'Go to portal.aztec.network and bridge Sepolia ETH to Aztec testnet.' },
            { '@type': 'HowToStep', position: 3, name: 'Deploy a Private Smart Contract', text: 'Use the Aztec Playground at playground.aztec.network to deploy a simple private token contract.' },
            { '@type': 'HowToStep', position: 4, name: 'Run an Aztec Sequencer Node', text: 'Set up a sequencer node using Docker. Requires 4-core CPU, 8GB RAM, 100GB SSD. Join Discord for Apprentice role.' },
            { '@type': 'HowToStep', position: 5, name: 'Complete Adversarial Testnet Challenges', text: 'Participate in weekly challenges on Aztec Discord. Top performers earn points and special roles.' },
            { '@type': 'HowToStep', position: 6, name: 'Use Nemi Finance on Aztec', text: 'Swap and provide liquidity on Nemi, the native DEX on Aztec testnet. Private DeFi interactions count.' },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'Did Aztec Network launch a token?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The AZTEC token TGE occurred on February 11, 2026, after a public community token sale in December 2025 that raised $61M (19,476 ETH) from 16,700+ participants. The token is live but unlocks linearly through November 2026 unless governance votes to unlock earlier.' } },
            { '@type': 'Question', name: 'Is there still an Aztec airdrop coming?', acceptedAnswer: { '@type': 'Answer', text: 'Aztec has no official airdrop announced and has stated "No airdrops." However, the adversarial testnet is still live with challenge rewards, node operators earn Discord roles, and ecosystem apps on Aztec are still tokenless. Farming testnet activity positions you for potential ecosystem app rewards.' } },
            { '@type': 'Question', name: 'What is the Aztec adversarial testnet?', acceptedAnswer: { '@type': 'Answer', text: 'The adversarial testnet is a phase of Aztec testing where node operators and developers compete in challenges to stress-test the network. Winners earn points, special Discord roles (Apprentice, Guardian, Defender), and recognition that historically precedes reward distributions.' } },
            { '@type': 'Question', name: 'How do I set up an Aztec node?', acceptedAnswer: { '@type': 'Answer', text: 'You need a server with 4-core CPU, 8GB RAM, 100GB SSD. Install Docker, clone the Aztec node repo, configure your .env with an Ethereum RPC URL, and run docker-compose up. Join Aztec Discord and complete verification to get your Apprentice role.' } },
            { '@type': 'Question', name: 'What is Aztec Network?', acceptedAnswer: { '@type': 'Answer', text: 'Aztec Network is a privacy-first Layer 2 on Ethereum. It uses ZK proofs to enable private smart contracts — transactions where inputs, outputs, and logic can be encrypted. It\'s backed by a16z, Paradigm, and Vitalik Buterin, with $119M+ raised.' } },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.3alamiyweb3.com' },
            { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://www.3alamiyweb3.com/learn' },
            { '@type': 'ListItem', position: 3, name: 'Aztec Network Airdrop Guide 2026', item: 'https://www.3alamiyweb3.com/learn/aztec-network-airdrop-guide-2026' },
          ],
        },
      ])}} />

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .an { min-height: 100vh; background: #060A12; font-family: var(--font-space),'Space Grotesk',system-ui,sans-serif; color: #D8DAE5; }

        /* HERO */
        .an-hero { padding: 48px 24px 44px; border-bottom: 1px solid rgba(255,255,255,0.05); position: relative; overflow: hidden; }
        .an-hero::before { content:''; position:absolute; inset:0; background:radial-gradient(ellipse 60% 50% at 20% 0%, rgba(139,92,246,0.07) 0%, transparent 70%); pointer-events:none; }
        .an-inner { max-width: 800px; margin: 0 auto; position: relative; }
        .an-bc { display:flex; gap:6px; font-size:11px; color:rgba(255,255,255,0.28); margin-bottom:24px; flex-wrap:wrap; }
        .an-bc a { color:rgba(255,255,255,0.38); text-decoration:none; }
        .an-bc a:hover { color:#a78bfa; }
        .an-tags { display:flex; gap:6px; flex-wrap:wrap; margin-bottom:14px; }
        .an-tag { font-size:10px; font-weight:700; letter-spacing:0.07em; text-transform:uppercase; padding:3px 10px; border-radius:99px; }
        .an-tag-chain { background:rgba(139,92,246,0.1); color:#a78bfa; border:1px solid rgba(139,92,246,0.2); }
        .an-tag-date { background:rgba(255,255,255,0.05); color:rgba(255,255,255,0.35); border:1px solid rgba(255,255,255,0.08); }
        .an-tag-status { background:rgba(245,158,11,0.1); color:#f59e0b; border:1px solid rgba(245,158,11,0.2); }
        .an-h1 { font-size:clamp(24px,4vw,38px); font-weight:900; letter-spacing:-0.04em; color:#fff; line-height:1.15; margin-bottom:14px; }
        .an-h1 em { font-style:normal; color:#a78bfa; }
        .an-intro { font-size:15px; color:rgba(255,255,255,0.5); line-height:1.7; margin-bottom:28px; }
        .an-stats { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; }
        .an-stat { background:rgba(139,92,246,0.06); border:1px solid rgba(139,92,246,0.12); border-radius:12px; padding:14px 16px; }
        .an-stat-num { font-size:20px; font-weight:900; color:#a78bfa; letter-spacing:-0.03em; }
        .an-stat-lbl { font-size:10px; font-weight:600; text-transform:uppercase; letter-spacing:0.07em; color:rgba(255,255,255,0.3); margin-top:3px; }

        /* CONTENT */
        .an-body { max-width:800px; margin:0 auto; padding:40px 24px 80px; }
        .an-body h2 { font-size:22px; font-weight:900; letter-spacing:-0.03em; color:#fff; margin:40px 0 16px; }
        .an-body h3 { font-size:16px; font-weight:800; color:#e2e8f0; margin:28px 0 12px; }
        .an-body p { font-size:14px; color:rgba(255,255,255,0.55); line-height:1.8; margin-bottom:16px; }
        .an-body strong { color:rgba(255,255,255,0.8); font-weight:700; }
        .an-body a { color:#a78bfa; text-decoration:none; }
        .an-body a:hover { text-decoration:underline; }

        /* CALLOUT */
        .an-callout { border-radius:12px; padding:18px 20px; margin:24px 0; }
        .an-callout-warn { background:rgba(245,158,11,0.06); border:1px solid rgba(245,158,11,0.18); }
        .an-callout-info { background:rgba(139,92,246,0.06); border:1px solid rgba(139,92,246,0.15); }
        .an-callout-success { background:rgba(124,245,192,0.05); border:1px solid rgba(124,245,192,0.15); }
        .an-callout-title { font-size:11px; font-weight:800; text-transform:uppercase; letter-spacing:0.08em; margin-bottom:8px; }
        .an-callout-warn .an-callout-title { color:#f59e0b; }
        .an-callout-info .an-callout-title { color:#a78bfa; }
        .an-callout-success .an-callout-title { color:#7CF5C0; }
        .an-callout p { margin:0; font-size:13px; }

        /* STEPS */
        .an-steps { display:flex; flex-direction:column; gap:16px; margin:20px 0; }
        .an-step { display:flex; gap:16px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); border-radius:14px; padding:18px 20px; }
        .an-step-num { width:32px; height:32px; border-radius:50%; background:rgba(139,92,246,0.15); border:1px solid rgba(139,92,246,0.25); color:#a78bfa; font-size:13px; font-weight:900; display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:2px; }
        .an-step-body h3 { margin:0 0 6px; font-size:14px; font-weight:800; color:#e2e8f0; }
        .an-step-body p { margin:0; font-size:13px; color:rgba(255,255,255,0.5); line-height:1.65; }

        /* TABLE */
        .an-table-wrap { overflow-x:auto; margin:20px 0; }
        .an-table { width:100%; border-collapse:collapse; font-size:13px; }
        .an-table th { background:rgba(139,92,246,0.08); color:rgba(255,255,255,0.5); font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:0.07em; padding:10px 14px; text-align:left; border-bottom:1px solid rgba(255,255,255,0.07); }
        .an-table td { padding:11px 14px; border-bottom:1px solid rgba(255,255,255,0.04); color:rgba(255,255,255,0.6); vertical-align:top; }
        .an-table tr:last-child td { border-bottom:none; }
        .an-pill { display:inline-block; font-size:9px; font-weight:800; padding:2px 7px; border-radius:99px; text-transform:uppercase; letter-spacing:0.06em; }
        .an-pill-yes { background:rgba(124,245,192,0.1); color:#7CF5C0; border:1px solid rgba(124,245,192,0.2); }
        .an-pill-no { background:rgba(239,68,68,0.1); color:#f87171; border:1px solid rgba(239,68,68,0.2); }
        .an-pill-maybe { background:rgba(245,158,11,0.1); color:#f59e0b; border:1px solid rgba(245,158,11,0.2); }

        /* FAQ */
        .an-faq { display:flex; flex-direction:column; gap:12px; margin:20px 0; }
        .an-faq-item { background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); border-radius:12px; padding:18px 20px; }
        .an-faq-q { font-size:14px; font-weight:800; color:#e2e8f0; margin-bottom:8px; }
        .an-faq-a { font-size:13px; color:rgba(255,255,255,0.5); line-height:1.7; margin:0; }

        /* CTA */
        .an-cta { background:linear-gradient(135deg,rgba(139,92,246,0.08),rgba(109,40,217,0.04)); border:1px solid rgba(139,92,246,0.18); border-radius:16px; padding:28px; text-align:center; margin-top:48px; }
        .an-cta h2 { font-size:18px; font-weight:900; color:#fff; margin-bottom:8px; }
        .an-cta p { font-size:13px; color:rgba(255,255,255,0.4); margin-bottom:20px; }
        .an-cta-btns { display:flex; gap:10px; justify-content:center; flex-wrap:wrap; }
        .an-btn-primary { background:#a78bfa; color:#060A12; font-size:12px; font-weight:800; padding:10px 20px; border-radius:8px; text-decoration:none; }
        .an-btn-secondary { background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:rgba(255,255,255,0.7); font-size:12px; font-weight:700; padding:10px 20px; border-radius:8px; text-decoration:none; }

        /* RELATED */
        .an-related { margin-top:48px; }
        .an-related-title { font-size:14px; font-weight:700; color:rgba(255,255,255,0.4); text-transform:uppercase; letter-spacing:0.08em; margin-bottom:14px; }
        .an-related-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(220px,1fr)); gap:10px; }
        .an-related-card { background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); border-radius:12px; padding:14px 16px; text-decoration:none; color:inherit; transition:border-color 0.2s; }
        .an-related-card:hover { border-color:rgba(139,92,246,0.25); }
        .an-related-card-label { font-size:10px; font-weight:700; color:rgba(255,255,255,0.25); text-transform:uppercase; margin-bottom:4px; }
        .an-related-card-title { font-size:13px; font-weight:700; color:#e2e8f0; }

        @media(max-width:600px){
          .an-stats { grid-template-columns:1fr 1fr; }
          .an-cta-btns { flex-direction:column; align-items:center; }
        }
      `}</style>

      <div className="an">
        {/* HERO */}
        <div className="an-hero">
          <div className="an-inner">
            <nav className="an-bc">
              <Link href="/">Home</Link><span>›</span>
              <Link href="/learn">Learn</Link><span>›</span>
              <span style={{color:'rgba(255,255,255,0.5)'}}>Aztec Network Airdrop Guide 2026</span>
            </nav>
            <div className="an-tags">
              <span className="an-tag an-tag-chain">Privacy L2</span>
              <span className="an-tag an-tag-status">Token Live · Testnet Active</span>
              <span className="an-tag an-tag-date">Updated June 2026</span>
            </div>
            <h1 className="an-h1">Aztec Network Airdrop Guide 2026<br /><em>Is It Still Worth Farming?</em></h1>
            <p className="an-intro">
              Aztec's TGE happened in February 2026 — but the adversarial testnet is still running, 
              node operators earn real Discord roles, and ecosystem apps are still tokenless. 
              Here's exactly what still works and what to do right now.
            </p>
            <div className="an-stats">
              <div className="an-stat"><div className="an-stat-num">$119M+</div><div className="an-stat-lbl">VC Raised</div></div>
              <div className="an-stat"><div className="an-stat-num">Feb 2026</div><div className="an-stat-lbl">TGE Date</div></div>
              <div className="an-stat"><div className="an-stat-num">16,700+</div><div className="an-stat-lbl">Token Sale Participants</div></div>
              <div className="an-stat"><div className="an-stat-num">Active</div><div className="an-stat-lbl">Adversarial Testnet</div></div>
            </div>
          </div>
        </div>

        {/* BODY */}
        <div className="an-body">

          <div className="an-callout an-callout-warn">
            <div className="an-callout-title">⚠️ TGE Already Happened</div>
            <p>Aztec's public token sale raised $61M in December 2025. The AZTEC token TGE occurred on <strong>February 11, 2026</strong>. There is no announced "free airdrop" for testnet users. However, the adversarial testnet is still live and rewards active participants — here's what that means for you.</p>
          </div>

          <h2>What Is Aztec Network?</h2>
          <p>
            Aztec Network is the first privacy-first Layer 2 on Ethereum. Unlike other L2s where all transactions are publicly visible on-chain, Aztec uses <strong>ZK (zero-knowledge) proofs</strong> to keep transaction data — inputs, outputs, and contract logic — encrypted. You can build smart contracts that have both public and private state.
          </p>
          <p>
            Think of it as Ethereum, but with a privacy layer built in by default. The project is backed by <strong>a16z, Paradigm, and Vitalik Buterin</strong> — the most credible set of investors in Web3 — with over $119M raised across multiple rounds.
          </p>

          <div className="an-callout an-callout-info">
            <div className="an-callout-title">🔒 Why Privacy Matters in 2026</div>
            <p>As DeFi matures, on-chain transparency has become a liability. MEV bots front-run trades. Competitors copy strategies. Aztec solves this by making DeFi private by default — a massive addressable market that no other L2 currently serves.</p>
          </div>

          <h2>Token Status: What You Need to Know</h2>
          <div className="an-table-wrap">
            <table className="an-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Status</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>AZTEC Token</strong></td><td><span className="an-pill an-pill-yes">Live</span></td><td>TGE February 11, 2026</td></tr>
                <tr><td><strong>Free Airdrop</strong></td><td><span className="an-pill an-pill-no">Not Announced</span></td><td>Aztec says "No airdrops"</td></tr>
                <tr><td><strong>Token Sale</strong></td><td><span className="an-pill an-pill-yes">Completed</span></td><td>$61M raised, 16,700+ buyers</td></tr>
                <tr><td><strong>Transferability</strong></td><td><span className="an-pill an-pill-maybe">Linear Unlock</span></td><td>Unlocks linearly through Nov 2026</td></tr>
                <tr><td><strong>Adversarial Testnet</strong></td><td><span className="an-pill an-pill-yes">Active</span></td><td>Ongoing challenges + node rewards</td></tr>
                <tr><td><strong>Ecosystem Apps</strong></td><td><span className="an-pill an-pill-maybe">Tokenless</span></td><td>Nemi, private DEXes — no token yet</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Is It Still Worth Farming in 2026?</h2>
          <p>
            Short answer: <strong>yes, but for different reasons than before.</strong>
          </p>
          <p>
            The AZTEC token exists, but that doesn't mean opportunity is gone. Here's what still matters:
          </p>
          <p>
            <strong>1. Adversarial Testnet Rewards:</strong> Aztec is actively running weekly challenges where top node operators earn points, special roles, and recognition. These are real on-chain participation signals. Projects routinely use testnet engagement data for future reward distributions — even if the main token is live.
          </p>
          <p>
            <strong>2. Ecosystem App Airdrops:</strong> Nemi Finance (the native DEX on Aztec), and other apps being built on top of Aztec are still tokenless. If you're active on Aztec now, you're building history for every protocol that launches on top of it.
          </p>
          <p>
            <strong>3. Node Operator Roles:</strong> The Apprentice → Guardian → Defender role progression in Aztec Discord is actively tracked. In crypto, Discord role history matters when teams decide how to distribute future incentives.
          </p>

          <h2>Step-by-Step: How to Farm Aztec Right Now</h2>
          <div className="an-steps">
            <div className="an-step">
              <div className="an-step-num">1</div>
              <div className="an-step-body">
                <h3>Set Up MetaMask for Aztec Testnet</h3>
                <p>Add the Aztec testnet to MetaMask manually: Network name "Aztec Testnet", RPC URL from <strong>docs.aztec.network</strong>, Chain ID 677868, currency symbol ETH. This takes 2 minutes.</p>
              </div>
            </div>
            <div className="an-step">
              <div className="an-step-num">2</div>
              <div className="an-step-body">
                <h3>Get Testnet ETH and Bridge to Aztec</h3>
                <p>Get free Sepolia ETH from a faucet (sepoliafaucet.com or alchemy.com/faucets). Then go to <strong>portal.aztec.network</strong> and bridge your Sepolia ETH to the Aztec testnet. This establishes your first on-chain activity.</p>
              </div>
            </div>
            <div className="an-step">
              <div className="an-step-num">3</div>
              <div className="an-step-body">
                <h3>Use the Aztec Playground — Deploy a Private Contract</h3>
                <p>Go to <strong>playground.aztec.network</strong> — Aztec's browser-based development environment. Deploy the example private token contract, mint tokens, and send a private transfer. This takes 15 minutes and creates meaningful on-chain history without needing coding skills.</p>
              </div>
            </div>
            <div className="an-step">
              <div className="an-step-num">4</div>
              <div className="an-step-body">
                <h3>Use Nemi Finance — Private Swaps and Liquidity</h3>
                <p>Nemi is the native DEX on Aztec testnet. Connect your wallet, swap test tokens, and add liquidity. Nemi has no token yet — protocol-level activity here earns you history as an early user of the most important dApp on the network.</p>
              </div>
            </div>
            <div className="an-step">
              <div className="an-step-num">5</div>
              <div className="an-step-body">
                <h3>Run an Aztec Sequencer Node (Advanced)</h3>
                <p>For maximum rewards, run a node. Requirements: <strong>4-core CPU, 8GB RAM, 100GB SSD</strong>. Install Docker, clone the Aztec node repository from GitHub, configure your .env file with an Ethereum Sepolia RPC URL (use Alchemy free tier), and run <code style={{fontFamily:'monospace', background:'rgba(255,255,255,0.05)', padding:'1px 6px', borderRadius:4, fontSize:12}}>aztec start --node --archiver --sequencer</code>. Join Aztec Discord and complete verification to earn the <strong>Apprentice role</strong>. Consistent uptime promotes you to Guardian and Defender.</p>
              </div>
            </div>
            <div className="an-step">
              <div className="an-step-num">6</div>
              <div className="an-step-body">
                <h3>Participate in Weekly Adversarial Testnet Challenges</h3>
                <p>Every week, Aztec runs network stress tests and competition challenges in their Discord. Challenges include uptime contests, transaction volume races, and bug bounty hunting. Top performers earn special roles and on-chain recognition. Follow <strong>@aztecnetwork</strong> on X for challenge announcements.</p>
              </div>
            </div>
          </div>

          <h2>Reward Potential Breakdown</h2>
          <div className="an-table-wrap">
            <table className="an-table">
              <thead>
                <tr><th>Activity</th><th>Effort</th><th>Potential Reward</th><th>Source</th></tr>
              </thead>
              <tbody>
                <tr><td>Aztec Playground usage</td><td>Low (15 min)</td><td>Ecosystem app airdrops</td><td>Nemi + future protocols</td></tr>
                <tr><td>Nemi Finance activity</td><td>Low (daily swaps)</td><td>$100–$1,000</td><td>Nemi token launch</td></tr>
                <tr><td>Adversarial testnet challenges</td><td>Medium</td><td>Challenge prizes + roles</td><td>Aztec Discord</td></tr>
                <tr><td>Node operation (Apprentice)</td><td>High</td><td>$500–$5,000+</td><td>Future node incentives</td></tr>
                <tr><td>Node operation (Guardian/Defender)</td><td>Very High</td><td>Highest tier allocation</td><td>Protocol rewards</td></tr>
              </tbody>
            </table>
          </div>

          <div className="an-callout an-callout-success">
            <div className="an-callout-title">✅ Bottom Line</div>
            <p>The free airdrop window for the AZTEC token is closed. But <strong>Nemi Finance and future Aztec ecosystem apps are still tokenless</strong>. Anyone active on Aztec testnet today is building a 6-12 month usage history that every protocol launching on Aztec will reference. The setup cost is low, the upside is meaningful.</p>
          </div>

          <h2>Frequently Asked Questions</h2>
          <div className="an-faq">
            {[
              { q:'Did Aztec launch a token?', a:'Yes. The AZTEC token TGE occurred on February 11, 2026, after a public community auction in December 2025 that raised $61M (19,476 ETH) from over 16,700 participants. The token unlocks linearly through November 2026 unless governance votes to accelerate it.' },
              { q:'Is there still a free Aztec airdrop coming?', a:'Aztec has explicitly stated "No airdrops." There is no confirmed free distribution to testnet users. However, the adversarial testnet rewards active participants, and ecosystem apps built on top of Aztec (like Nemi Finance) are still tokenless and likely to reward early users.' },
              { q:'What is the Aztec adversarial testnet?', a:'The adversarial testnet is Aztec\'s current testing phase where node operators compete in weekly challenges to stress-test the network\'s privacy and consensus mechanisms. Top performers earn Discord roles (Apprentice → Guardian → Defender) and on-chain recognition.' },
              { q:'What hardware do I need to run an Aztec node?', a:'You need a VPS or dedicated server with minimum: 4-core CPU, 8GB RAM, 100GB SSD, and stable internet. A Hetzner CX31 server (~$8/month) is sufficient for running an Aztec sequencer node on testnet.' },
              { q:'What is Nemi Finance on Aztec?', a:'Nemi Finance is the first native DEX on Aztec Network, enabling private token swaps and liquidity provision. Transactions on Nemi are encrypted by default — your trade sizes and counterparties are hidden. Nemi has no token yet, making it a prime target for early user rewards.' },
            ].map((item, i) => (
              <div key={i} className="an-faq-item">
                <div className="an-faq-q">{item.q}</div>
                <p className="an-faq-a">{item.a}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="an-cta">
            <h2>Farm All 15 Upcoming Tokenless Projects</h2>
            <p>Aztec is one of 15 high-potential projects on our curated upcoming airdrops tracker — each with step-by-step farming tasks.</p>
            <div className="an-cta-btns">
              <Link href="/upcoming" className="an-btn-primary">View All Upcoming Airdrops →</Link>
              <Link href="/airdrops" className="an-btn-secondary">Browse All 129+ Airdrops</Link>
            </div>
          </div>

          {/* RELATED */}
          <div className="an-related">
            <div className="an-related-title">Related Guides</div>
            <div className="an-related-grid">
              {[
                { href:'/learn/how-to-farm-fuel-airdrop', label:'Farming Guide', title:'How to Farm Fuel Network Airdrop 2026' },
                { href:'/learn/how-to-farm-movement-airdrop', label:'Farming Guide', title:'How to Farm Movement Labs Airdrop 2026' },
                { href:'/learn/how-to-claim-airdrop-hacked-wallet', label:'Security Guide', title:'Claim an Airdrop From a Hacked Wallet' },
                { href:'/upcoming', label:'Tracker', title:'15 Upcoming Tokenless Projects — Full List' },
              ].map(r => (
                <Link key={r.href} href={r.href} className="an-related-card">
                  <div className="an-related-card-label">{r.label}</div>
                  <div className="an-related-card-title">{r.title}</div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
