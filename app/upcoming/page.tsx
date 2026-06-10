import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Upcoming Crypto Airdrops 2026 — Tokenless Projects to Farm Now | 3alamiy Web3',
  description: 'The best upcoming crypto airdrops in 2026. Curated tokenless projects with huge funding, step-by-step farming tasks, hype scores, and estimated reward tiers. Updated weekly.',
  keywords: 'upcoming crypto airdrops 2026, tokenless projects 2026, potential airdrops, best airdrops to farm, monad airdrop, megaeth airdrop, story protocol airdrop, movement airdrop',
  alternates: { canonical: 'https://www.3alamiyweb3.com/upcoming' },
  openGraph: {
    title: 'Upcoming Crypto Airdrops 2026 — Tokenless Projects to Farm Now',
    description: 'Curated tokenless projects with huge VC funding, farming tasks, hype scores, and estimated rewards. Updated weekly.',
    url: 'https://www.3alamiyweb3.com/upcoming',
    siteName: '3alamiy Web3',
    type: 'website',
  },
};

const PROJECTS = [
  {
    name: 'Monad Ecosystem',
    slug: 'monad-ecosystem',
    chain: 'EVM L1',
    chainColor: '#627EEA',
    logo: 'monad.xyz',
    tagline: 'Monad mainnet is live (MON token exists). Ecosystem dApps — DEXes, lending, NFT — are still tokenless and farming-ready.',
    funding: '$244M',
    investors: 'Paradigm, a16z',
    hypeScore: 91,
    rewardTier: '$$$',
    rewardEst: '$300–$3,000',
    risk: 'Low',
    status: 'Mainnet · Ecosystem Season',
    statusColor: '#f59e0b',
    tasks: [
      'Use Ambient Finance on Monad — provide liquidity daily',
      'Trade on Kuru DEX (tokenless, high farming potential)',
      'Use Apriori or aPriori liquid staking (stMON)',
      'Interact with Monad ecosystem NFT projects (collect, trade)',
      'Bridge assets via Monad official bridge and 3rd party bridges',
    ],
  },
  {
    name: 'Aztec Network',
    slug: 'aztec',
    chain: 'Ethereum L2',
    chainColor: '#627EEA',
    logo: 'aztec.network',
    tagline: 'Privacy-first zk-rollup on Ethereum. Smart contracts with encrypted state. $100M+ raised. TGE vote pending.',
    funding: '$119M',
    investors: 'a16z, Paradigm, Variant',
    hypeScore: 94,
    rewardTier: '$$$$',
    rewardEst: '$500–$5,000+',
    risk: 'Low',
    status: 'Testnet Live',
    statusColor: '#7CF5C0',
    tasks: [
      'Use Aztec testnet — deploy a simple private smart contract',
      'Send private transactions on Aztec Sandbox',
      'Complete Aztec developer quests on aztec.network',
      'Join Aztec Discord and get active contributor roles',
      'Follow @aztecnetwork and engage with technical posts',
    ],
  },
  {
    name: 'Story Protocol',
    slug: 'story-protocol',
    chain: 'EVM L1',
    chainColor: '#a855f7',
    logo: 'story.foundation',
    tagline: 'IP blockchain — register and license intellectual property on-chain.',
    funding: '$140M',
    investors: 'a16z, Polychain',
    hypeScore: 89,
    rewardTier: '$$$',
    rewardEst: '$300–$3,000',
    risk: 'Low',
    status: 'Mainnet — No Token',
    statusColor: '#f59e0b',
    tasks: [
      'Register an IP asset on Story Protocol mainnet',
      'Attach license terms to your IP (PIL — Programmable IP License)',
      'Mint derivative works from existing IP',
      'Use testnet bridge and stake IP tokens',
      'Participate in ecosystem campaigns on Galxe',
    ],
  },
  {
    name: 'Movement Labs',
    slug: 'movement-labs',
    chain: 'Move L2',
    chainColor: '#f97316',
    logo: 'movementnetwork.xyz',
    tagline: 'Move-based Ethereum L2. Fast finality, Aptos/Sui tech on Ethereum.',
    funding: '$38M',
    investors: 'Polychain, Binance Labs',
    hypeScore: 85,
    rewardTier: '$$$',
    rewardEst: '$200–$1,500',
    risk: 'Medium',
    status: 'Mainnet — No Token',
    statusColor: '#f59e0b',
    tasks: [
      'Bridge ETH to Movement mainnet',
      'Use Movement DEX and lending protocols',
      'Build or deploy a simple Move module',
      'Complete Movement Quests on official site',
      'Join Movement Discord and get active roles',
    ],
  },
  {
    name: 'Sophon',
    slug: 'sophon',
    chain: 'ZK L2',
    chainColor: '#06b6d4',
    logo: 'sophon.xyz',
    tagline: 'ZK chain for consumer apps — gaming, entertainment, social.',
    funding: '$60M',
    investors: 'Paper Ventures, Robot Ventures',
    hypeScore: 82,
    rewardTier: '$$$',
    rewardEst: '$150–$1,200',
    risk: 'Medium',
    status: 'Mainnet — No Token',
    statusColor: '#f59e0b',
    tasks: [
      'Create a Sophon account and complete onboarding',
      'Use Sophon Hub to explore and use dApps',
      'Farm Sophon Points by daily interactions',
      'Refer friends using your referral link',
      'Stake ETH or USDC in Sophon native yield vaults',
    ],
  },
  {
    name: 'Espresso Systems',
    slug: 'espresso',
    chain: 'Ethereum',
    chainColor: '#627EEA',
    logo: 'espressosys.com',
    tagline: 'Shared sequencer for rollups — decentralizes L2 ordering.',
    funding: '$100M',
    investors: 'a16z, Greylock',
    hypeScore: 79,
    rewardTier: '$$$',
    rewardEst: '$100–$1,000',
    risk: 'Medium',
    status: 'Testnet Live',
    statusColor: '#7CF5C0',
    tasks: [
      'Join Espresso testnet and run a light node',
      'Use testnet chains that integrate Espresso (Eclipse, Arbitrum Orbit)',
      'Complete Espresso community quests on Discord',
      'Follow @EspressoSys and engage on X/Twitter',
    ],
  },
  {
    name: 'Nillion',
    slug: 'nillion',
    chain: 'Cosmos SDK',
    chainColor: '#f59e0b',
    logo: 'nillion.com',
    tagline: 'Decentralized privacy-preserving computation network.',
    funding: '$25M',
    investors: 'HashKey, Distributed Global',
    hypeScore: 76,
    rewardTier: '$$',
    rewardEst: '$100–$800',
    risk: 'Medium',
    status: 'Testnet Live',
    statusColor: '#7CF5C0',
    tasks: [
      'Join Nillion Network Testnet (NilChain)',
      'Store and retrieve secrets using nillion-python SDK',
      'Complete testnet tasks in the Nillion developer docs',
      'Follow @nillionnetwork and join community channels',
    ],
  },
  {
    name: 'Grass',
    slug: 'grass',
    chain: 'Solana',
    chainColor: '#9945FF',
    logo: 'getgrass.io',
    tagline: 'DePIN data network — sell your unused bandwidth for rewards.',
    funding: '$4.5M',
    investors: 'Polychain, Tribe Capital',
    hypeScore: 88,
    rewardTier: '$$$',
    rewardEst: '$200–$2,000',
    risk: 'Low',
    status: 'Season 2 Live',
    statusColor: '#7CF5C0',
    tasks: [
      'Install Grass browser extension on Chrome',
      'Keep it running 24/7 — uptime = more points',
      'Connect a Solana wallet (Phantom or Backpack)',
      'Refer others — referral bonus boosts your score',
      'Check grass.io/dashboard daily for epoch rewards',
    ],
  },
  {
    name: 'Irys',
    slug: 'irys',
    chain: 'Ethereum',
    chainColor: '#627EEA',
    logo: 'irys.xyz',
    tagline: 'Programmable data layer. Permanent on-chain storage for Web3.',
    funding: '$10M',
    investors: 'Multicoin Capital',
    hypeScore: 72,
    rewardTier: '$$',
    rewardEst: '$100–$600',
    risk: 'Medium',
    status: 'Mainnet — No Token',
    statusColor: '#f59e0b',
    tasks: [
      'Upload data to Irys mainnet (costs small ETH fee)',
      'Build or use an Irys-powered app (Ardrive, Helix)',
      'Complete developer quests in Irys docs',
      'Join Irys Discord and get contributor roles',
    ],
  },
  {
    name: 'Allora Network',
    slug: 'allora',
    chain: 'Cosmos SDK',
    chainColor: '#f59e0b',
    logo: 'allora.network',
    tagline: 'Decentralized AI network — crowdsourced machine learning inference.',
    funding: '$8M',
    investors: 'Multicoin, Delphi Digital',
    hypeScore: 75,
    rewardTier: '$$',
    rewardEst: '$100–$700',
    risk: 'Medium',
    status: 'Testnet Live',
    statusColor: '#7CF5C0',
    tasks: [
      'Run an Allora worker node on testnet',
      'Submit price predictions to Allora testnet topics',
      'Earn testnet points via inference competition',
      'Follow @AlloraNetwork on X and join Discord',
    ],
  },
  {
    name: 'Initia',
    slug: 'initia',
    chain: 'Cosmos SDK',
    chainColor: '#ec4899',
    logo: 'initia.xyz',
    tagline: 'Modular L1 with interlinked rollups ("Minitias"). Cosmos-based.',
    funding: '$14.5M',
    investors: 'Binance Labs, Delphi',
    hypeScore: 84,
    rewardTier: '$$$',
    rewardEst: '$200–$2,500',
    risk: 'Low',
    status: 'Mainnet — No Token',
    statusColor: '#f59e0b',
    tasks: [
      'Create an Initia wallet and bridge to mainnet',
      'Use Initia Scan and stake INIT tokens',
      'Deploy or interact with Minitia rollups',
      'Complete quests on app.initia.xyz',
      'Hold tokens and maintain consistent activity',
    ],
  },
  {
    name: 'Kaito AI',
    slug: 'kaito-ai',
    chain: 'Ethereum',
    chainColor: '#627EEA',
    logo: 'kaito.ai',
    tagline: 'Web3 intelligence layer — search, analytics, and crypto mindshare.',
    funding: '$10M',
    investors: 'Dragonfly, Spartan',
    hypeScore: 80,
    rewardTier: '$$$',
    rewardEst: '$150–$1,500',
    risk: 'Low',
    status: 'Mainnet — No Token',
    statusColor: '#f59e0b',
    tasks: [
      'Connect X/Twitter to Kaito and build Yapper score',
      'Post quality Web3 content consistently on X',
      'Use Kaito search to find alpha — daily usage tracked',
      'Join Kaito Pro and engage with the community',
      'Refer other creators to build your network score',
    ],
  },
  {
    name: 'Berachain Ecosystem',
    slug: 'berachain-ecosystem',
    chain: 'EVM L1',
    chainColor: '#d97706',
    logo: 'berachain.com',
    tagline: 'BERA launched — but ecosystem tokens (DEX, lending, NFT) still coming.',
    funding: '$142M',
    investors: 'Polychain, Framework',
    hypeScore: 87,
    rewardTier: '$$$',
    rewardEst: '$200–$3,000',
    risk: 'Low',
    status: 'Mainnet Live',
    statusColor: '#7CF5C0',
    tasks: [
      'Use BEX (Berachain DEX) — add liquidity in BGT vaults',
      'Borrow on BEND (Berachain lending)',
      'Mint HONEY stablecoin and farm yield',
      'Use Kodiak, Infrared, and other native dApps',
      'Hold BGT and delegate to validators for extra rewards',
    ],
  },
  {
    name: 'Eclipse',
    slug: 'eclipse',
    chain: 'Solana SVM L2',
    chainColor: '#9945FF',
    logo: 'eclipse.xyz',
    tagline: 'Solana VM running as Ethereum L2. Best of both chains.',
    funding: '$65M',
    investors: 'Placeholder, Hack VC',
    hypeScore: 83,
    rewardTier: '$$$',
    rewardEst: '$200–$2,000',
    risk: 'Medium',
    status: 'Mainnet — No Token',
    statusColor: '#f59e0b',
    tasks: [
      'Bridge ETH to Eclipse mainnet via official bridge',
      'Use Invariant (DEX) and other Eclipse dApps',
      'Complete daily transactions — volume matters',
      'Participate in Eclipse ecosystem campaigns',
      'Join Eclipse Discord and get early user roles',
    ],
  },
  {
    name: 'Zora',
    slug: 'zora',
    chain: 'Base / OP Stack',
    chainColor: '#0052FF',
    logo: 'zora.co',
    tagline: 'NFT protocol and creator network. Massive Base ecosystem presence.',
    funding: '$60M',
    investors: 'Haun Ventures, Coinbase Ventures',
    hypeScore: 78,
    rewardTier: '$$',
    rewardEst: '$100–$800',
    risk: 'Low',
    status: 'Mainnet — No Token',
    statusColor: '#f59e0b',
    tasks: [
      'Mint free NFTs on zora.co every week',
      'Create and publish a coin or post on Zora',
      'Collect at least 20 different NFTs on Zora network',
      'Refer others to Zora — referral tracking on-chain',
      'Use Zora on mobile app for bonus activity',
    ],
  },
];

const CHAINS = ['All', 'EVM', 'Ethereum L2', 'Solana', 'Cosmos SDK', 'ZK L2', 'Move L2', 'EVM L1', 'Base / OP Stack'];

function HypeBar({ score }: { score: number }) {
  const color = score >= 90 ? '#7CF5C0' : score >= 80 ? '#f59e0b' : '#4f8ef7';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 99, overflow: 'hidden' }}>
        <div style={{ width: `${score}%`, height: '100%', background: color, borderRadius: 99 }} />
      </div>
      <span style={{ fontSize: 12, fontWeight: 800, color, minWidth: 28 }}>{score}</span>
    </div>
  );
}

export default function UpcomingPage() {
  const totalFunding = '$1.2B+';

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Upcoming Crypto Airdrops 2026 — Tokenless Projects',
        description: 'Curated list of the best tokenless crypto projects to farm for upcoming airdrops in 2026',
        url: 'https://www.3alamiyweb3.com/upcoming',
        numberOfItems: PROJECTS.length,
        itemListElement: PROJECTS.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: `${p.name} Potential Airdrop`,
          description: p.tagline,
          url: `https://www.3alamiyweb3.com/upcoming`,
        })),
      })}} />

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .up { min-height: 100vh; background: #060A12; font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif; color: #D8DAE5; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:none} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }

        /* HERO */
        .up-hero { padding: 48px 24px 40px; border-bottom: 1px solid rgba(255,255,255,0.05); position: relative; overflow: hidden; }
        .up-hero::before { content:''; position:absolute; top:0; left:0; right:0; height:280px; background:radial-gradient(ellipse 70% 60% at 30% 0%, rgba(124,245,192,0.06) 0%, transparent 70%); pointer-events:none; }
        .up-hero-inner { max-width: 1100px; margin: 0 auto; position: relative; }
        .up-bc { display:flex; align-items:center; gap:6px; font-size:11px; color:rgba(255,255,255,0.28); margin-bottom:24px; }
        .up-bc a { color:rgba(255,255,255,0.38); text-decoration:none; }
        .up-bc a:hover { color:#7CF5C0; }
        .up-eyebrow { font-size:10px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:#7CF5C0; margin-bottom:10px; display:flex; align-items:center; gap:6px; }
        .up-dot { width:6px; height:6px; border-radius:50%; background:#7CF5C0; animation:pulse 1.8s infinite; }
        .up-h1 { font-size: clamp(26px, 4vw, 44px); font-weight: 900; letter-spacing: -0.04em; color: #fff; line-height: 1.1; margin-bottom: 12px; }
        .up-h1 em { font-style:normal; color:#7CF5C0; }
        .up-sub { font-size:14px; color:rgba(255,255,255,0.38); max-width:580px; line-height:1.6; margin-bottom:28px; }
        .up-stats { display:flex; gap:32px; flex-wrap:wrap; }
        .up-stat { }
        .up-stat-num { font-size:22px; font-weight:900; color:#fff; letter-spacing:-0.03em; }
        .up-stat-lbl { font-size:10px; font-weight:600; text-transform:uppercase; letter-spacing:0.08em; color:rgba(255,255,255,0.28); margin-top:2px; }

        /* FILTER */
        .up-filter-wrap { max-width:1100px; margin:0 auto; padding:20px 24px 0; }
        .up-filter-label { font-size:10px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:rgba(255,255,255,0.22); margin-bottom:10px; }
        .up-filters { display:flex; gap:6px; flex-wrap:wrap; }
        .up-filter-note { font-size:11px; color:rgba(255,255,255,0.2); margin-top:8px; }

        /* GRID */
        .up-body { max-width:1100px; margin:0 auto; padding:28px 24px 80px; }
        .up-grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(320px, 1fr)); gap:14px; }

        /* CARD */
        .up-card { background:rgba(255,255,255,0.025); border:1px solid rgba(255,255,255,0.06); border-radius:16px; padding:20px; display:flex; flex-direction:column; gap:14px; animation:fadeUp 0.4s ease both; transition:border-color 0.2s, background 0.2s; }
        .up-card:hover { border-color:rgba(255,255,255,0.12); background:rgba(255,255,255,0.04); }

        .up-card-top { display:flex; align-items:center; gap:12px; }
        .up-card-icon { width:44px; height:44px; border-radius:12px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.08); display:flex; align-items:center; justify-content:center; flex-shrink:0; overflow:hidden; padding:6px; }
        .up-card-meta { flex:1; min-width:0; }
        .up-card-name { font-size:15px; font-weight:900; color:#fff; letter-spacing:-0.02em; }
        .up-card-chain { font-size:10px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; color:rgba(255,255,255,0.3); margin-top:2px; }
        .up-card-status { font-size:9px; font-weight:800; letter-spacing:0.05em; text-transform:uppercase; padding:3px 8px; border-radius:99px; white-space:nowrap; flex-shrink:0; }

        .up-tagline { font-size:12px; color:rgba(255,255,255,0.5); line-height:1.5; }

        .up-scores { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
        .up-score-box { background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); border-radius:10px; padding:10px 12px; }
        .up-score-lbl { font-size:9px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:rgba(255,255,255,0.25); margin-bottom:4px; }
        .up-score-val { font-size:16px; font-weight:900; color:#fff; letter-spacing:-0.02em; }
        .up-score-sub { font-size:10px; color:rgba(255,255,255,0.3); margin-top:1px; }

        .up-hype { }
        .up-hype-lbl { font-size:9px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:rgba(255,255,255,0.25); margin-bottom:6px; }

        .up-tasks { background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05); border-radius:10px; padding:12px 14px; }
        .up-tasks-lbl { font-size:9px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; color:rgba(255,255,255,0.22); margin-bottom:8px; }
        .up-task { display:flex; align-items:flex-start; gap:8px; font-size:11.5px; color:rgba(255,255,255,0.55); line-height:1.4; margin-bottom:6px; }
        .up-task:last-child { margin-bottom:0; }
        .up-task-num { font-size:9px; font-weight:800; color:rgba(255,255,255,0.2); background:rgba(255,255,255,0.06); border-radius:50%; width:16px; height:16px; display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:1px; }

        .up-footer-card { display:flex; justify-content:space-between; align-items:center; font-size:11px; color:rgba(255,255,255,0.25); }
        .up-guide-link { font-size:11px; font-weight:700; color:#7CF5C0; text-decoration:none; display:flex; align-items:center; gap:4px; }
        .up-guide-link:hover { color:#a7f3d0; }

        /* BOTTOM CTA */
        .up-cta { background:rgba(124,245,192,0.04); border:1px solid rgba(124,245,192,0.1); border-radius:16px; padding:32px; text-align:center; margin-top:48px; }
        .up-cta h2 { font-size:20px; font-weight:900; color:#fff; margin-bottom:8px; letter-spacing:-0.03em; }
        .up-cta p { font-size:13px; color:rgba(255,255,255,0.4); margin-bottom:20px; }
        .up-cta-btns { display:flex; gap:10px; justify-content:center; flex-wrap:wrap; }
        .up-btn-primary { background:#7CF5C0; color:#060A12; font-size:12px; font-weight:800; padding:10px 20px; border-radius:8px; text-decoration:none; }
        .up-btn-secondary { background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:rgba(255,255,255,0.7); font-size:12px; font-weight:700; padding:10px 20px; border-radius:8px; text-decoration:none; }

        @media(max-width:640px){
          .up-stats { gap:20px; }
          .up-grid { grid-template-columns:1fr; }
          .up-scores { grid-template-columns:1fr 1fr; }
        }
      `}</style>

      <div className="up">
        {/* HERO */}
        <div className="up-hero">
          <div className="up-hero-inner">
            <nav className="up-bc">
              <Link href="/">Home</Link>
              <span>›</span>
              <span style={{color:'rgba(255,255,255,0.5)'}}>Upcoming Airdrops</span>
            </nav>
            <div className="up-eyebrow">
              <span className="up-dot" />
              Updated June 2026
            </div>
            <h1 className="up-h1">
              Upcoming Crypto Airdrops 2026<br />
              <em>Tokenless Projects to Farm Now</em>
            </h1>
            <p className="up-sub">
              {PROJECTS.length} curated projects with no token yet — each backed by serious VC funding. 
              Farm them now before the snapshot. Updated weekly with new tasks.
            </p>
            <div className="up-stats">
              <div className="up-stat">
                <div className="up-stat-num">{PROJECTS.length}</div>
                <div className="up-stat-lbl">Active Projects</div>
              </div>
              <div className="up-stat">
                <div className="up-stat-num">{totalFunding}</div>
                <div className="up-stat-lbl">Total VC Funding</div>
              </div>
              <div className="up-stat">
                <div className="up-stat-num">{PROJECTS.filter(p => p.risk === 'Low').length}</div>
                <div className="up-stat-lbl">Low Risk Picks</div>
              </div>
              <div className="up-stat">
                <div className="up-stat-num">{PROJECTS.filter(p => p.hypeScore >= 85).length}</div>
                <div className="up-stat-lbl">High Hype Score</div>
              </div>
            </div>
          </div>
        </div>

        {/* FILTER NOTE */}
        <div className="up-filter-wrap">
          <p className="up-filter-note">
            💡 Sorted by Hype Score — highest expected reward potential first. 
            Hype Score = VC funding × community size × tokenless duration × task complexity.
          </p>
        </div>

        {/* GRID */}
        <div className="up-body">
          <div className="up-grid">
            {PROJECTS.sort((a, b) => b.hypeScore - a.hypeScore).map((p, i) => (
              <div
                key={p.slug}
                className="up-card"
                style={{ animationDelay: `${Math.min(i * 0.05, 0.4)}s` }}
              >
                {/* TOP */}
                <div className="up-card-top">
                  <div className="up-card-icon">
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${p.logo}&sz=64`}
                    alt={p.name}
                    width={32}
                    height={32}
                    style={{ borderRadius: 6, objectFit: 'cover' }}
                    onError={(e) => { (e.target as HTMLImageElement).style.display='none'; }}
                  />
                </div>
                  <div className="up-card-meta">
                    <div className="up-card-name">{p.name}</div>
                    <div className="up-card-chain" style={{ color: p.chainColor }}>{p.chain}</div>
                  </div>
                  <span
                    className="up-card-status"
                    style={{ background: `${p.statusColor}12`, color: p.statusColor, border: `1px solid ${p.statusColor}30` }}
                  >
                    {p.status}
                  </span>
                </div>

                {/* TAGLINE */}
                <p className="up-tagline">{p.tagline}</p>

                {/* SCORES */}
                <div className="up-scores">
                  <div className="up-score-box">
                    <div className="up-score-lbl">VC Raised</div>
                    <div className="up-score-val">{p.funding}</div>
                    <div className="up-score-sub">{p.investors}</div>
                  </div>
                  <div className="up-score-box">
                    <div className="up-score-lbl">Est. Reward</div>
                    <div className="up-score-val" style={{ fontSize: 13 }}>{p.rewardEst}</div>
                    <div className="up-score-sub">Risk: {p.risk}</div>
                  </div>
                </div>

                {/* HYPE SCORE */}
                <div className="up-hype">
                  <div className="up-hype-lbl">Hype Score</div>
                  <HypeBar score={p.hypeScore} />
                </div>

                {/* TASKS */}
                <div className="up-tasks">
                  <div className="up-tasks-lbl">⚡ What to do right now</div>
                  {p.tasks.map((t, ti) => (
                    <div key={ti} className="up-task">
                      <span className="up-task-num">{ti + 1}</span>
                      <span>{t}</span>
                    </div>
                  ))}
                </div>

                {/* FOOTER */}
                <div className="up-footer-card">
                  <span>Reward tier: {p.rewardTier}</span>
                  <Link href="/airdrops" className="up-guide-link">
                    All Airdrops →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM CTA */}
          <div className="up-cta">
            <h2>Track All 129+ Active Airdrops</h2>
            <p>Browse confirmed airdrops with step-by-step guides, wallet requirements, and eligibility tips.</p>
            <div className="up-cta-btns">
              <Link href="/airdrops" className="up-btn-primary">View All Airdrops →</Link>
              <Link href="/learn" className="up-btn-secondary">Read Farming Guides</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
