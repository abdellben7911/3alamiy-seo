const airdrops: Record<string, any> = {
  'megaeth-points-season1': { name: 'MegaETH Points Program', logo: 'https://pbs.twimg.com/profile_images/1861751545790070784/KvlxTzAq_400x400.jpg', description: 'MegaETH is the real-time blockchain. Where crypto applications leverage extreme performance to reach their full potential.', blockchain: 'ETH', status: 'Active', value: '$600 - $2600', difficulty: 'Easy', cost: 'Paid', tags: ['on-chain', 'Building', 'Points'], guideSteps: ['Connect your EVM wallet', 'Set up your profile', 'Click the "?" icons to explore apps', 'Using those apps earns you points', 'Complete KYC to claim rewards'], links: { website: 'https://terminal.megaeth.com/', X: 'https://x.com/megaeth' }, votes: { worthIt: 842, notWorthIt: 21 }, rate: 4.8 },
  'konnex': { name: 'Konnex', logo: 'https://pbs.twimg.com/profile_images/1966336118351343621/9BgNeekU_400x400.jpg', description: 'Building the GDP of autonomous systems. Turning robot labor into on-chain liquidity.', blockchain: 'ETH', status: 'Active', value: '$250 - $600', difficulty: 'Easy', cost: 'Free', tags: ['on-chain', 'Building', 'High Tier'], guideSteps: ['Connect your EVM Wallet and X account', 'Follow and Join Discord and Telegram', 'Claim 60 points', 'Complete Testnet Tasks daily for 50 points', 'Create a post about Konnex for social tasks'], links: { website: 'https://hub.konnex.world/points?referral_code=0S7VVFYP', X: 'https://x.com/konnex_world' }, votes: { worthIt: 624, notWorthIt: 12 }, rate: 4.7 },
  'arkham': { name: 'Arkham', logo: 'https://pbs.twimg.com/profile_images/1956761926190424064/tGeJ9m40_400x400.jpg', description: 'Cryptocurrency Exchange & Blockchain Analytics Platform.', blockchain: 'ETH', status: 'Active', value: '$500 - $2500', difficulty: 'Medium', cost: 'Paid', tags: ['Trade', 'Building', 'High Tier'], guideSteps: ['Join Arkham and register an account', 'Deposit funds', 'Complete missions', 'Use the new swap function'], links: { website: 'https://arkm.com/register?ref=a8e33f75-fac5-444b-afc6-937d7e4c2443', X: 'https://x.com/arkham' }, votes: { worthIt: 139, notWorthIt: 8 }, rate: 4.7 },
  'robinhood-chain': { name: 'Robinhood Chain', logo: 'https://pbs.twimg.com/profile_images/1844399977482813442/1fTlYz2c_400x400.png', description: 'RobinhoodApp launched a new chain on Arbitrum.', blockchain: 'Arbitrum', status: 'Active', value: '$100 - $250', difficulty: 'Easy', cost: 'Free', tags: ['testnet', 'Building', 'High Tier'], guideSteps: ['Add chain and get faucet', 'Deploy smart contract', 'Complete Phase 1 Testnet', 'Visit Superboard and complete tasks'], links: { faucet: 'https://faucet.testnet.chain.robinhood.com/', X: 'https://x.com/RobinhoodApp' }, votes: { worthIt: 78, notWorthIt: 8 }, rate: 4.7 },
  'abstract': { name: 'Abstract', logo: 'https://pbs.twimg.com/profile_images/1947751080705630208/0OQFUJxI_400x400.jpg', description: 'The blockchain leading the next generation of consumer crypto.', blockchain: 'Ethereum', status: 'Active', value: '$400 - $800', difficulty: 'Medium', cost: 'Paid', tags: ['Restaking', 'Infrastructure', 'High Tier'], guideSteps: ['Connect Your Metamask', 'Complete All Social Tasks', 'Use apps to get XP', 'Stay updated'], links: { website: 'https://portal.abs.xyz/rewards', twitter: 'https://x.com/AbstractChain' }, votes: { worthIt: 450, notWorthIt: 28 }, rate: 4.9 },
  'sosovalue': { name: 'SoSoValue', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbRuxT3RfaI2gUl7OVXo9KX9iXoBwhTWoYg&s', description: 'Investors centric crypto investment powerhouse providing AI-driven market analysis.', blockchain: 'Ethereum', status: 'Active', value: '$150 - $450', difficulty: 'Easy', cost: 'Free', tags: ['Free Airdrop', 'ETH', 'Restaking'], guideSteps: ['Register with your email', 'Click on your Exp points', 'Complete All Social Tasks', 'Connect Your Twitter & Google'], links: { website: 'https://sosovalue.com/join/DM122R5C', twitter: 'https://x.com/SoSoValueCrypto' }, votes: { worthIt: 125, notWorthIt: 12 }, rate: 4.8 },
  'arc-testnet': { name: 'ARC Testnet', logo: 'https://pbs.twimg.com/profile_images/1955238194443849732/sHyVRItm_400x400.jpg', description: 'Building the Internet Financial Platform powered by USDC, Arc, and Circle.', blockchain: 'Ethereum', status: 'Active', value: '$300 - $750', difficulty: 'Medium', cost: 'Free', tags: ['Financial', 'Building', 'High Tier'], guideSteps: ['Configure Network: Add Arc Testnet to your wallet', 'Get Faucet: Claim test USDC and ETH', 'Deposit Assets via the Arc Bridge', 'Mint ARC ID on the domain portal', 'Swap tokens on the testnet exchange', 'Add assets to the ARC/USDC pool'], links: { website: 'https://faucet.circle.com/', twitter: 'https://x.com/arc' }, votes: { worthIt: 210, notWorthIt: 15 }, rate: 4.8 },
  'polymarket': { name: 'PolyMarket', logo: 'https://pbs.twimg.com/profile_images/2005664281002491904/bz2ZO_nU_400x400.jpg', description: "The World's Largest Prediction Market. Trade politics, news, culture, sports & tech.", blockchain: 'Polygon', status: 'Active', value: '$450 - $800', difficulty: 'Hard', cost: 'Paid', tags: ['Financial', 'Building', 'High Tier'], guideSteps: ['Login and select an event', 'Deposit $USDC (Polygon) or use non-crypto deposit methods', 'Place some bets!'], links: { website: 'https://polymarket.com/', twitter: 'https://x.com/Polymarket' }, votes: { worthIt: 1240, notWorthIt: 65 }, rate: 4.9 },
  'SkaleNetwork': { name: 'Skale Network', logo: 'https://pbs.twimg.com/profile_images/1511058435261009925/cpm25NwI_400x400.png', description: 'The privacy and performance focused blockchain.', blockchain: 'Polygon', status: 'Active', value: '$250 - $700', difficulty: 'Hard', cost: 'Free', tags: ['Financial', 'Building', 'High Tier'], guideSteps: ['Connect With Your Wallet', 'Complete All Tasks', 'Do daily check in', 'Claim Points'], links: { website: 'https://loyalty.skale.space/loyalty?referral_code=ZFKIP4LE', twitter: 'https://x.com/SkaleNetwork' }, votes: { worthIt: 312, notWorthIt: 14 }, rate: 4.7 },
  'zetarium-testnet': { name: 'Zetarium Testnet', logo: 'https://pbs.twimg.com/profile_images/1959681988131987456/Xy64LxZp_400x400.jpg', description: 'Building the GDP of autonomous systems.', blockchain: 'BNB', status: 'Active', value: '$150 - $350', difficulty: 'Easy', cost: 'Free', tags: ['Financial', 'Building', 'High Tier'], guideSteps: ['Connect X account and Connect wallet', 'Complete daily onchain GM Claim', 'Go to tasks and Claim testnet faucet', 'Complete social tasks & rank up the LB'], links: { website: 'https://airdrop.zetarium.world/?ref=9d057e72', twitter: 'https://x.com/Zetarium_' }, votes: { worthIt: 156, notWorthIt: 8 }, rate: 4.6 },
  'veera': { name: 'Veera', logo: 'https://pbs.twimg.com/profile_images/2008405086868049920/W8T4wpWD_400x400.jpg', description: 'Your global neobank, built onchain - earn, invest, borrow & spend.', blockchain: 'Ethereum', status: 'Active', value: '$200 - $480', difficulty: 'Easy', cost: 'Free', tags: ['Financial', 'Building', 'High Tier'], guideSteps: ['Connect X account and Connect wallet', 'Do Daily checkin', 'Complete each quests to Earn Xps and rank up', 'Done'], links: { website: 'https://hub.veerarewards.com/loyalty?referral_code=02ZPF9R3', twitter: 'https://x.com/On_Veera' }, votes: { worthIt: 245, notWorthIt: 12 }, rate: 4.7 },
  'mocaverse': { name: 'Mocaverse', logo: 'https://pbs.twimg.com/profile_images/2006908697608597506/t5RxQly7_400x400.jpg', description: "Building the world's largest chain-agnostic decentralized identity network.", blockchain: 'Moca', status: 'Active', value: '$300 - $650', difficulty: 'Easy', cost: 'Free', tags: ['Financial', 'Building', 'High Tier'], guideSteps: ["Connect X account and Connect wallet", "Go to proofs and complete verifications", "Complete each quests to Earn Xps and rank up", "Done"], links: { website: 'https://app.moca.network/r/UB2PPC', twitter: 'https://x.com/Moca_Network' }, votes: { worthIt: 842, notWorthIt: 34 }, rate: 4.9 },
  'dango': { name: 'Dango', logo: 'https://pbs.twimg.com/profile_images/1940431337912971264/h2G3EAC1_400x400.jpg', description: 'The one app for everything DeFi.', blockchain: 'Ethereum', status: 'Active', value: '$150 - $420', difficulty: 'Easy', cost: 'Free', tags: ['Financial', 'Building', 'High Tier'], guideSteps: ['Connect wallet', 'Deposit ETH/USDC on Mainnet', 'Start trading pairs', 'Make swaps in convert'], links: { website: 'https://dango.exchange/', twitter: 'https://x.com/dango' }, votes: { worthIt: 128, notWorthIt: 45 }, rate: 4.5 },
  'pip-world': { name: 'PIP WORLD', logo: 'https://pbs.twimg.com/profile_images/1900490544804982784/ej9P73hK_400x400.jpg', description: 'Igniting a new era of intelligent investing, the first AI lab to seamlessly blend.', blockchain: 'Ethereum', status: 'Active', value: '$350 - $420', difficulty: 'Easy', cost: 'Free', tags: ['Financial', 'Building', 'High Tier'], guideSteps: ['Register with email or wallet', 'After that you will receive $100k', 'Choose your Agent/Team', 'Complete all social tasks', 'Check in daily to maintain streaks'], links: { website: 'https://mm.pip.world?ref=did:privy:cmkxrzqkf028iji0ch01n3let', twitter: 'https://x.com/pip_world' }, votes: { worthIt: 315, notWorthIt: 18 }, rate: 4.8 },
  'fhenix': { name: 'Fhenix', logo: 'https://pbs.twimg.com/profile_images/2007922948863406080/Z_CFhhvg_400x400.jpg', description: 'Starting with Private DeFi.', blockchain: 'Ethereum', status: 'Active', value: '$130 - $230', difficulty: 'Easy', cost: 'Free', tags: ['Financial', 'Building', 'High Tier'], guideSteps: ['Connect your wallet', 'Request USDC on Sepolia', 'Encrypt ETH on Fhenix', 'Head to shieldedmode', 'Add confidentiality and deploy token'], links: { website: 'https://test.redact.money/', shieldedmode: 'https://shieldedmode.fhenix.io/', twitter: 'https://x.com/fhenix' }, votes: { worthIt: 562, notWorthIt: 21 }, rate: 4.7 },
  'goldfish': { name: 'Goldfish', logo: 'https://pbs.twimg.com/profile_images/2002059690834845696/jSwhz4s__400x400.jpg', description: 'Safe-harbor gold-backed digital asset for crypto-native investors.', blockchain: 'Ethereum', status: 'Active', value: '$350 - $450', difficulty: 'Easy', cost: 'Free', tags: ['Financial', 'Building', 'High Tier'], guideSteps: ['Connect your wallet', 'Link Twitter (X) & Discord', 'Complete all available quests', 'Points update within 2 hours'], links: { website: 'https://leaderboard.goldfishgold.com?ref=GqFIN4YX', twitter: 'https://x.com/goldfishggbr' }, votes: { worthIt: 184, notWorthIt: 9 }, rate: 4.6 },
  'datahaven': { name: 'DataHaven', logo: 'https://pbs.twimg.com/profile_images/1883674775190388736/9YuEYF8-_400x400.jpg', description: 'AI-first decentralized storage built for you on Ethereum.', blockchain: 'Ethereum', status: 'Active', value: '$200 - $290', difficulty: 'Easy', cost: 'Free', tags: ['AI', 'Building', 'High Tier'], guideSteps: ['Connect your wallet', 'Get faucet', 'Create a bucket (public or private)', 'Upload image & full field on your bucket', 'Check your activity'], links: { website: 'https://datahaven.app/testnet', faucet: 'https://apps.datahaven.xyz/testnet/faucet' }, votes: { worthIt: 142, notWorthIt: 6 }, rate: 4.5 },
  'inkonchain': { name: 'inkonchain', logo: 'https://pbs.twimg.com/profile_images/2006977311938138112/67CmhPDe_400x400.jpg', description: 'Ink the future Unleashed by Kraken. Built on the Superchain.', blockchain: 'Ethereum', status: 'Active', value: '$300 - $790', difficulty: 'Easy', cost: 'Free', tags: ['AI', 'Building', 'High Tier'], guideSteps: ['Available for everyone', 'Especially for early / active INK users', 'Mint on OpenSea', 'Done'], links: { website: 'https://inkonchain.com/', mint: 'https://opensea.io/collection/fresh-ink-opensea-x-ink/overview', twitter: 'https://x.com/inkonchain' }, votes: { worthIt: 89, notWorthIt: 4 }, rate: 4.4 },
  'rivrdex': { name: 'RivrDEX', logo: 'https://pbs.twimg.com/profile_images/1996769255602143232/ar3eXvkM_400x400.jpg', description: 'Next-gen decentralized exchange for seamless token swaps and high-speed trading.', blockchain: 'ETH', status: 'Active', value: '$230 - $280', difficulty: 'Medium', cost: 'Free', tags: ['AI', 'Building', 'High Tier'], guideSteps: ['Join Discord', 'Visit Guild and get the roles', 'Complete the tasks on Galxe', 'Swap tokens and add liquidity'], links: { Discord: 'https://discord.com/invite/rivrdex/', Guild: 'https://guild.xyz/rivrdex', twitter: 'https://x.com/Rivr_DEX' }, votes: { worthIt: 67, notWorthIt: 11 }, rate: 4.5 },
  'republic-testnet': { name: 'Republic Testnet', logo: 'https://pbs.twimg.com/profile_images/1973508413666574337/lfLtj2x-_400x400.jpg', description: 'Layer 1 blockchain backed by compute.', blockchain: 'Republic', status: 'Active', value: '$300 - $560', difficulty: 'Medium', cost: 'Free', tags: ['finance', 'Building', 'High Tier'], guideSteps: ['Go to the website and Click on Login', 'Continue with X (Twitter)', 'Enter Referral code: 785A24', 'Connect Discord and EVM and X', 'Claim Faucet daily'], links: { website: 'https://points.republicai.io/?ref=785A24', faucet: 'https://points.republicai.io/faucet', twitter: 'https://x.com/republicfdn' }, votes: { worthIt: 38, notWorthIt: 2 }, rate: 4.8 },
  'miden-testnet': { name: 'Miden Testnet', logo: 'https://pbs.twimg.com/profile_images/1916961429946499073/_4nWxF8L_400x400.png', description: 'Practical privacy for the future of finance.', blockchain: 'ETH', status: 'Active', value: '$480 - $600', difficulty: 'Hard', cost: 'Free', tags: ['finance', 'Building', 'High Tier'], guideSteps: ['Install Miden wallet extension for chrome', 'Request faucet', 'Register your Miden Name', 'Trade on ZoroSwap', 'Use Dome (Private Transfers)', 'Complete the Playground Tutorial'], links: { faucet: 'https://faucet.testnet.miden.io/', ZoroSwap: 'https://app.zoroswap.com/', X: 'https://x.com/0xMiden' }, votes: { worthIt: 54, notWorthIt: 3 }, rate: 4.9 },
  'D3inc': { name: 'D3inc', logo: 'https://pbs.twimg.com/profile_images/1882307971889442816/9ZQCOJ-g_400x400.jpg', description: "Tokenizing the Internet's 370M+ domains. Accelerating the DomainFi economy.", blockchain: 'ETH', status: 'Active', value: '$350 - $420', difficulty: 'Medium', cost: 'Paid', tags: ['finance', 'Building', 'High Tier'], guideSteps: ['Go to their website', 'Bridge funds to the Doma chain', 'Start doing swaps and LP', 'Complete Galxe quests'], links: { website: 'https://app.doma.xyz/', Galxe: 'https://app.galxe.com/quest/D3', X: 'https://x.com/D3inc' }, votes: { worthIt: 87, notWorthIt: 12 }, rate: 4.7 },
  'LAM': { name: '$LAM', logo: 'https://pbs.twimg.com/profile_images/1993647821992701952/1UJZFUhu_400x400.jpg', description: "The future of AI shouldn't be owned by big tech, it should be owned by all of us.", blockchain: 'ETH', status: 'Active', value: '$50 - $250', difficulty: 'Easy', cost: 'Free', tags: ['AI', 'Building', 'High Tier'], guideSteps: ['Create an account (email or Gmail)', 'Enter referral code: ALAMIY', 'Download the extension', 'Toggle start and choose train in background', 'Browse normally to earn points automatically'], links: { website: 'https://join.actionmodel.com/ALAMIY', X: 'https://x.com/ActionModelAI' }, votes: { worthIt: 79, notWorthIt: 6 }, rate: 4.8 },
  'BlockSt': { name: 'BlockSt', logo: 'https://pbs.twimg.com/profile_images/1966336118351343621/9BgNeekU_400x400.jpg', description: 'Unified Liquidity Layer for Tokenized Assets. Multi-assets. Cross Leverage.', blockchain: 'ETH', status: 'Active', value: '$150 - $300', difficulty: 'Easy', cost: 'Free', tags: ['AI', 'Building', 'High Tier'], guideSteps: ['Visit website and Connect wallet & add Email', 'Enter referral code: ALAMIY', 'Daily check-in: +10 BSD', 'Supply & Borrow Daily', 'Collect maximum BSD tokens'], links: { website: 'https://blockstreet.money/dashboard?invite_code=LYUbQB', X: 'https://x.com/BlockSt_HQ' }, votes: { worthIt: 87, notWorthIt: 13 }, rate: 4.7 },
  'megaeth-mainnet': { name: 'MegaETH (Mainnet)', logo: 'https://pbs.twimg.com/profile_images/1861751545790070784/KvlxTzAq_400x400.jpg', description: 'MegaETH is the real-time blockchain.', blockchain: 'ETH', status: 'Active', value: '$900 - $1500', difficulty: 'Medium', cost: 'Paid', tags: ['Blockchain', 'Building', 'High Tier'], guideSteps: ['Bridge Assets via LayerZero', 'Swap, Earn & Test LPs on Prism', 'Swap & Test LPs on Kumbaya', 'Monitor MegaETH Trenches', 'Track Your Mainnet Activity on MTRKR'], links: { LayerZero: 'https://stargate.finance/', Prism: 'https://prismfi.cc?ref=K9Z2XAAF', X: 'https://x.com/megaeth' }, votes: { worthIt: 187, notWorthIt: 13 }, rate: 4.8 },
  'outcome-airdrop': { name: 'Outcome Airdrop', logo: 'https://pbs.twimg.com/profile_images/1867277511584841728/d2ojRVxU_400x400.jpg', description: 'Outcome is an All-in-One Prediction market for Real world and Digital assets.', blockchain: 'ETH', status: 'Active', value: '$100 - $300', difficulty: 'Easy', cost: 'Free', tags: ['Prediction market', 'Building', 'High Tier'], guideSteps: ['Go to the Faucet tab and claim test tokens', 'Request up to 10K test USDT0 every 24 hours', 'Visit the Markets tab and select an event', 'Click on your preferred outcome and Buy', 'Place bets on other events every day'], links: { website: 'https://testnet.outcome.xyz/events', X: 'https://x.com/Outcomexyz' }, votes: { worthIt: 68, notWorthIt: 7 }, rate: 4.6 },
};

export async function generateStaticParams() {
  return Object.keys(airdrops).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = airdrops[slug];
  if (!a) return { title: 'Airdrop Not Found | 3alamiy Web3' };
  return {
    title: `${a.name} Airdrop Guide 2026 | 3alamiy Web3`,
    description: `${a.description} Reward: ${a.value}. Difficulty: ${a.difficulty}. Full step-by-step guide on 3alamiy Web3.`,
  };
}

export default async function AirdropPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = airdrops[slug];

  if (!a) {
    return (
      <div style={{ minHeight: '100vh', background: '#030712', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ textAlign: 'center', color: '#fff' }}>
          <h1 style={{ fontSize: '24px', marginBottom: '16px' }}>Airdrop not found</h1>
          <a href="https://3alamiyweb3.online" style={{ color: '#6366f1', textDecoration: 'none' }}>← Back to Dashboard</a>
        </div>
      </div>
    );
  }

  const worthIt = Number(a.votes?.worthIt || 0);
  const notWorthIt = Number(a.votes?.notWorthIt || 0);
  const total = worthIt + notWorthIt;
  const worthPercent = total ? Math.round((worthIt / total) * 100) : 0;

  const costLabel = a.cost === 'Paid' ? 'Mainnet (Paid)' : a.cost === 'Low' ? 'Mainnet (Low)' : 'Testnet (Free)';
  const costColor = a.cost === 'Paid' ? '#f43f5e' : a.cost === 'Low' ? '#f59e0b' : '#10b981';

  return (
    <div style={{ minHeight: '100vh', background: '#030712', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#fff' }}>
      {/* Header */}
      <header style={{ borderBottom: '1px solid #18181b', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, background: '#0a0a0f', zIndex: 50, height: '64px' }}>
        {/* Logo */}
        <a href="https://3alamiyweb3.online" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#fff' }}>
          <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #6366f1, #4f46e5)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>🪂</div>
          <span style={{ fontWeight: '800', fontSize: '16px', letterSpacing: '-0.01em' }}>3alamiy Web3</span>
        </a>
        {/* Nav links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {[['Discover', '/'], ['Market', '/'], ['Community', '/'], ['Learn', '/']].map(([label, href], i) => (
            <a key={label} href={`https://3alamiyweb3.online`} style={{ color: i === 0 ? '#fff' : '#71717a', textDecoration: 'none', fontSize: '15px', fontWeight: i === 0 ? '700' : '500' }}>{label}</a>
          ))}
        </nav>
        {/* Sign Up */}
        <a href="https://3alamiyweb3.online" style={{ background: '#6366f1', color: '#fff', padding: '10px 22px', borderRadius: '12px', textDecoration: 'none', fontSize: '14px', fontWeight: '700' }}>Sign Up</a>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px 80px' }}>
        {/* Back button */}
        <a href="https://3alamiyweb3.online" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#71717a', textDecoration: 'none', fontSize: '14px', fontWeight: '700', marginBottom: '48px', padding: '8px 14px', background: '#18181b', borderRadius: '12px', border: '1px solid #27272a' }}>
          ← Dashboard
        </a>

        {/* 2-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '40px', alignItems: 'start' }}>

          {/* LEFT COLUMN */}
          <div>
            {/* Hero */}
            <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', marginBottom: '48px' }}>
              {/* Logo + vote */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flexShrink: 0 }}>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', inset: '-8px', background: 'rgba(99,102,241,0.1)', borderRadius: '50%', filter: 'blur(20px)' }} />
                  <img src={a.logo} alt={a.name} width={128} height={128} style={{ borderRadius: '32px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 25px 50px rgba(0,0,0,0.5)', position: 'relative' }} />
                </div>
                {/* Compact vote card */}
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '12px', width: '128px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <div>
                      <div style={{ fontSize: '20px', fontWeight: '900', color: '#6366f1' }}>{worthPercent}%</div>
                      <div style={{ fontSize: '8px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#71717a', marginTop: '2px' }}>Worth it</div>
                    </div>
                    <div style={{ fontSize: '9px', fontWeight: '700', color: '#52525b' }}>{total}</div>
                  </div>
                  <div style={{ height: '3px', background: '#27272a', borderRadius: '99px', overflow: 'hidden', marginBottom: '10px' }}>
                    <div style={{ height: '100%', width: `${worthPercent}%`, background: '#6366f1', borderRadius: '99px' }} />
                  </div>
                  <a href="https://3alamiyweb3.online" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', padding: '6px', borderRadius: '8px', background: 'rgba(16,185,129,0.1)', color: '#10b981', textDecoration: 'none', fontSize: '9px', fontWeight: '900', marginBottom: '6px' }}>👍 Vote</a>
                  <a href="https://3alamiyweb3.online" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', padding: '6px', borderRadius: '8px', background: 'rgba(244,63,94,0.1)', color: '#f43f5e', textDecoration: 'none', fontSize: '9px', fontWeight: '900' }}>👎 Skip</a>
                </div>
              </div>

              {/* Content */}
              <div style={{ flex: 1, paddingTop: '4px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                  <span style={{ background: 'rgba(99,102,241,0.1)', color: '#818cf8', border: '1px solid rgba(99,102,241,0.2)', padding: '3px 10px', borderRadius: '99px', fontSize: '9px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{a.blockchain}</span>
                  <span style={{ background: a.status === 'Active' ? 'rgba(16,185,129,0.1)' : 'rgba(113,113,122,0.1)', color: a.status === 'Active' ? '#10b981' : '#71717a', border: `1px solid ${a.status === 'Active' ? 'rgba(16,185,129,0.2)' : 'rgba(113,113,122,0.2)'}`, padding: '3px 10px', borderRadius: '99px', fontSize: '9px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{a.status}</span>
                  <span style={{ background: `${costColor}15`, color: costColor, border: `1px solid ${costColor}30`, padding: '3px 10px', borderRadius: '99px', fontSize: '9px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{costLabel}</span>
                </div>

                <h1 style={{ fontSize: '48px', fontWeight: '900', margin: '0 0 16px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>{a.name}</h1>
                <p style={{ fontSize: '16px', color: '#a1a1aa', lineHeight: 1.7, margin: '0 0 24px', fontWeight: '500' }}>{a.description}</p>

                <a href="#guide" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#6366f1', color: '#fff', padding: '14px 28px', borderRadius: '16px', textDecoration: 'none', fontWeight: '900', fontSize: '14px', boxShadow: '0 20px 40px rgba(99,102,241,0.25)' }}>
                  Start Guide →
                </a>
              </div>
            </div>

            {/* Guide */}
            <div id="guide">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid #18181b' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ padding: '8px', background: 'rgba(16,185,129,0.1)', borderRadius: '12px', color: '#10b981', fontSize: '18px' }}>✓</div>
                  <div>
                    <h2 style={{ fontSize: '22px', fontWeight: '900', margin: 0 }}>Participation Guide</h2>
                    <p style={{ fontSize: '10px', color: '#71717a', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '4px 0 0' }}>Step 0 of {a.guideSteps.length} Finished</p>
                  </div>
                </div>
                <div style={{ width: '160px', height: '10px', background: '#18181b', borderRadius: '99px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '0%', background: '#10b981' }} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {a.guideSteps.map((step: string, idx: number) => (
                  <div key={idx} style={{ display: 'flex', gap: '20px', padding: '20px 24px', borderRadius: '24px', border: '1px solid #27272a', background: '#0d1117', cursor: 'pointer' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: '900', fontSize: '16px', background: '#18181b', color: '#71717a', border: '1px solid #27272a' }}>{idx + 1}</div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '16px', fontWeight: '700', margin: '0 0 4px', color: '#fff', lineHeight: 1.4 }}>{step}</p>
                      <p style={{ fontSize: '12px', color: '#52525b', margin: 0, fontStyle: 'italic' }}>Why it matters: Crucial interaction for snapshot eligibility and wallet ranking.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Sticky Sidebar */}
          <aside style={{ position: 'sticky', top: '80px' }}>
            {/* Quick Stats */}
            <div style={{ background: '#0d1117', border: '1px solid #18181b', borderRadius: '32px', padding: '32px', marginBottom: '16px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, padding: '16px', opacity: 0.05, fontSize: '100px' }}>⚡</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                <div style={{ padding: '8px', background: 'rgba(99,102,241,0.1)', borderRadius: '12px', fontSize: '18px' }}>📊</div>
                <h3 style={{ fontSize: '20px', fontWeight: '900', margin: 0 }}>Quick Stats</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[['⏱ Est. Time', '15 - 20 Mins', '#fff'], ['⚡ Gas Profile', costLabel, costColor], ['🛡 Confidence', 'High Tier', '#10b981'], ['👥 Difficulty', a.difficulty, '#fff']].map(([label, value, color]) => (
                  <div key={label as string} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#52525b' }}>{label}</span>
                    <span style={{ fontSize: '14px', fontWeight: '700', color: color as string }}>{value}</span>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: '1px solid #18181b', marginTop: '28px', paddingTop: '28px' }}>
                <p style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#52525b', marginBottom: '16px' }}>Official Channels</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {Object.entries(a.links).map(([key, url]) => (
                    <a key={key} href={url as string} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px', background: '#18181b', borderRadius: '16px', border: '1px solid #27272a', textDecoration: 'none', color: '#e4e4e7' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ padding: '6px', background: '#0d1117', borderRadius: '8px', fontSize: '12px' }}>{key === 'X' || key === 'twitter' ? '𝕏' : '🌐'}</div>
                        <span style={{ fontSize: '14px', fontWeight: '700', textTransform: 'capitalize' }}>{key}</span>
                      </div>
                      <span style={{ fontSize: '12px', color: '#52525b' }}>↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Need Help */}
            <div style={{ background: 'linear-gradient(135deg, #4f46e5, #4338ca)', borderRadius: '32px', padding: '32px', marginBottom: '16px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', bottom: '-16px', right: '-16px', opacity: 0.1, fontSize: '120px' }}>🚀</div>
              <h4 style={{ fontSize: '20px', fontWeight: '900', margin: '0 0 8px' }}>Need Help?</h4>
              <p style={{ color: 'rgba(199,210,254,0.8)', fontSize: '14px', lineHeight: 1.6, margin: '0 0 24px' }}>Join our inner circle for real-time alerts and community-driven guides.</p>
              <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#fff', color: '#4f46e5', padding: '14px', borderRadius: '16px', textDecoration: 'none', fontWeight: '900', fontSize: '14px' }}>
                ✈️ Join Telegram
              </a>
            </div>

            {/* Requirements */}
            <div style={{ background: '#0d1117', border: '1px solid #18181b', borderRadius: '32px', padding: '32px' }}>
              <p style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#52525b', margin: '0 0 24px' }}>Requirements</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[['👛', 'EVM Wallet'], ['𝕏', 'X Account'], ['💬', 'Discord']].map(([icon, label]) => (
                  <div key={label as string} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', fontWeight: '700', color: '#d4d4d8' }}>
                    <span style={{ color: '#6366f1' }}>{icon}</span> {label}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
