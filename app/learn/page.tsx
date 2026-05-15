import Link from 'next/link';

export const metadata = {
  title: 'Learn — Crypto Airdrop Guides 2026 | 3alamiy Web3',
  description: 'Free crypto airdrop guides, strategies, and tutorials. Learn how to find, farm, and qualify for the best airdrops in 2026.',
  alternates: { canonical: 'https://seo.3alamiyweb3.online/learn' },
};

const articles = [
  { slug: 'best-crypto-airdrops-2026', title: 'Best Crypto Airdrops 2026', desc: 'The complete list of the best free crypto airdrops in 2026. Updated daily.', cat: 'Airdrops', emoji: '🪂', date: 'May 15, 2026', readTime: '8 min' },
  { slug: 'best-airdrop-farming-platforms-2026', title: 'Best Airdrop Farming Platforms 2026', desc: 'ZNS vs Galxe vs Layer3 vs 3alamiy — honest comparison of the top platforms.', cat: 'Comparison', emoji: '⚔️', date: 'May 10, 2026', readTime: '7 min' },
  { slug: 'best-solana-airdrops-2026', title: 'Best Solana Airdrops 2026', desc: 'Top Solana ecosystem airdrops you can farm right now. Free guides included.', cat: 'Ecosystems', emoji: '◎', date: 'May 8, 2026', readTime: '6 min' },
  { slug: 'discord-role-airdrops-guide-2026', title: 'Discord Role Airdrops 2026', desc: 'Plasma OG = $20K. Boundless = $10K+. How to grind roles for massive rewards.', cat: 'Strategy', emoji: '💬', date: 'May 5, 2026', readTime: '6 min' },
  { slug: 'how-to-find-airdrops-before-everyone-else', title: 'Find Airdrops Before Everyone Else', desc: 'The exact system top hunters use to find airdrops early and maximize rewards.', cat: 'Strategy', emoji: '🎯', date: 'May 3, 2026', readTime: '8 min' },
  { slug: 'how-to-build-onchain-activity-that-actually-matters', title: 'Build Onchain Activity That Matters', desc: 'Quality over quantity — build a real wallet narrative that qualifies for airdrops.', cat: 'Onchain', emoji: '⛓️', date: 'Apr 28, 2026', readTime: '7 min' },
  { slug: 'best-free-crypto-airdrops-2026', title: 'Best Free Crypto Airdrops 2026', desc: 'Discover the best airdrops with zero investment required. Start farming today.', cat: 'Airdrops', emoji: '🆓', date: 'Apr 25, 2026', readTime: '5 min' },
  { slug: 'how-to-avoid-crypto-airdrop-scams-2026', title: 'How to Avoid Airdrop Scams', desc: 'Stay safe while hunting for legitimate airdrops. Red flags and best practices.', cat: 'Beginners', emoji: '🛡️', date: 'Apr 20, 2026', readTime: '5 min' },
  { slug: 'best-ethereum-airdrops-2026', title: 'Best Ethereum Airdrops 2026', desc: 'Top ETH ecosystem airdrops across L2s, DeFi, and restaking protocols.', cat: 'Ecosystems', emoji: '⟠', date: 'Apr 18, 2026', readTime: '7 min' },
  { slug: 'how-to-use-arbitrum-for-airdrops', title: 'How to Use Arbitrum for Airdrops', desc: 'The #1 chain for airdrop farming. Step-by-step guide for beginners.', cat: 'Beginners', emoji: '🔵', date: 'Apr 15, 2026', readTime: '6 min' },
  { slug: 'testnet-airdrop-guide-2026', title: 'Testnet Airdrop Guide 2026', desc: 'How to farm testnets for free and qualify for mainnet token launches.', cat: 'Strategy', emoji: '🧪', date: 'Apr 10, 2026', readTime: '7 min' },
  { slug: 'defi-airdrop-farming-guide-2026', title: 'DeFi Airdrop Farming Guide 2026', desc: 'Liquidity provision, lending, and swapping strategies for DeFi airdrops.', cat: 'DeFi', emoji: '💰', date: 'Apr 5, 2026', readTime: '8 min' },
  { slug: 'how-to-farm-multiple-airdrops-at-once', title: 'Farm Multiple Airdrops at Once', desc: 'Manage 10+ airdrop campaigns simultaneously without missing any tasks.', cat: 'Strategy', emoji: '🎰', date: 'Apr 1, 2026', readTime: '6 min' },
  { slug: 'crypto-wallet-setup-for-airdrops', title: 'Crypto Wallet Setup for Airdrops', desc: 'The best wallet setup for airdrop farming — security and organization tips.', cat: 'Beginners', emoji: '👜', date: 'Mar 28, 2026', readTime: '5 min' },
  { slug: 'nft-airdrop-guide-2026', title: 'NFT Airdrop Guide 2026', desc: 'How NFT holders get rewarded with token airdrops. Best NFT projects to hold.', cat: 'NFT', emoji: '🎨', date: 'Mar 25, 2026', readTime: '6 min' },
  { slug: 'layer2-airdrop-guide-2026', title: 'Layer 2 Airdrop Guide 2026', desc: 'Bridge, swap, and interact on L2s to qualify for upcoming token launches.', cat: 'Onchain', emoji: '⚡', date: 'Mar 20, 2026', readTime: '7 min' },
  { slug: 'how-to-use-galxe-for-airdrops', title: 'How to Use Galxe for Airdrops', desc: 'Complete Galxe quests to earn OATs, points, and qualify for token rewards.', cat: 'Platforms', emoji: '🌌', date: 'Mar 15, 2026', readTime: '5 min' },
  { slug: 'monad-airdrop-guide-2026', title: 'Monad Airdrop Guide 2026', desc: 'Everything you need to know about farming the Monad ecosystem early.', cat: 'Ecosystems', emoji: '🟣', date: 'Mar 10, 2026', readTime: '6 min' },
];

const catColors: Record<string, string> = {
  Airdrops: '#f59e0b',
  Strategy: '#818cf8',
  Onchain: '#34d399',
  Comparison: '#f43f5e',
  Beginners: '#60a5fa',
  Ecosystems: '#c084fc',
  DeFi: '#10b981',
  NFT: '#fb923c',
  Platforms: '#06b6d4',
};

const categories = ['All', ...Array.from(new Set(articles.map(a => a.cat)))];

export default function LearnPage() {
  return (
    <>
      <style>{`
        .learn-index { min-height: 100vh; background: #060910; color: #fff; font-family: system-ui, -apple-system, sans-serif; }
        .learn-hero { padding: 56px 24px 40px; background: #060910; border-bottom: 1px solid #1a1f2e; position: relative; overflow: hidden; }
        .learn-hero-glow { position: absolute; top: -80px; left: 50%; transform: translateX(-50%); width: 600px; height: 400px; background: radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 65%); pointer-events: none; }
        .learn-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .learn-card { background: #0d1117; border: 1px solid #1a1f2e; border-radius: 16px; padding: 22px; text-decoration: none; color: #fff; display: flex; flex-direction: column; gap: 10px; transition: all 0.2s; }
        .learn-card:hover { border-color: rgba(99,102,241,0.3); background: #0f1520; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.3); }
        .cat-badge { display: inline-flex; padding: 3px 10px; border-radius: 99px; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; width: fit-content; }
        @media (max-width: 1024px) { .learn-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .learn-grid { grid-template-columns: 1fr; } .learn-hero { padding: 40px 16px 32px; } }
      `}</style>

      <div className="learn-index">

        {/* Hero */}
        <section className="learn-hero">
          <div className="learn-hero-glow" />
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', color: '#818cf8', padding: '4px 12px', borderRadius: '99px', fontSize: '11px', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '16px' }}>
              📚 Learn
            </div>
            <h1 style={{ fontSize: '36px', fontWeight: 900, margin: '0 0 12px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Airdrop Guides & Strategies
            </h1>
            <p style={{ fontSize: '15px', color: '#71717a', margin: '0 0 24px', maxWidth: '500px', lineHeight: 1.7 }}>
              Everything you need to find, farm, and qualify for the best crypto airdrops in 2026.
            </p>
            {/* Stats */}
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              {[
                [`${articles.length}+`, 'Articles'],
                ['Free', 'Always'],
                ['Daily', 'Updated'],
              ].map(([val, lbl]) => (
                <div key={lbl}>
                  <div style={{ fontSize: '20px', fontWeight: 900, color: '#818cf8' }}>{val}</div>
                  <div style={{ fontSize: '11px', color: '#52525b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Articles grid */}
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px 80px' }}>

          {/* Category pills */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
            {categories.map(cat => (
              <span key={cat} style={{ padding: '5px 14px', borderRadius: '99px', fontSize: '12px', fontWeight: 700, background: cat === 'All' ? 'rgba(99,102,241,0.15)' : '#0d1117', border: `1px solid ${cat === 'All' ? 'rgba(99,102,241,0.3)' : '#1a1f2e'}`, color: cat === 'All' ? '#818cf8' : '#52525b', cursor: 'default' }}>
                {cat}
              </span>
            ))}
          </div>

          <div className="learn-grid">
            {articles.map((a) => (
              <Link key={a.slug} href={`/learn/${a.slug}`} className="learn-card">
                <div style={{ fontSize: '28px' }}>{a.emoji}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="cat-badge" style={{ background: `${catColors[a.cat]}18`, color: catColors[a.cat] || '#818cf8', border: `1px solid ${catColors[a.cat]}30` }}>{a.cat}</span>
                  <span style={{ fontSize: '11px', color: '#3f3f46' }}>{a.readTime} read</span>
                </div>
                <h2 style={{ fontSize: '15px', fontWeight: 800, color: '#f4f4f5', margin: 0, lineHeight: 1.4 }}>{a.title}</h2>
                <p style={{ fontSize: '13px', color: '#52525b', margin: 0, lineHeight: 1.6 }}>{a.desc}</p>
                <div style={{ fontSize: '11px', color: '#3f3f46', marginTop: 'auto', paddingTop: '8px', borderTop: '1px solid #1a1f2e' }}>{a.date}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
