import Link from 'next/link';

export const metadata = {
  title: 'Learn — Crypto Airdrop Guides 2026 | 3alamiy Web3',
  description: 'Free crypto airdrop guides, strategies, and tutorials. Learn how to find, farm, and qualify for the best airdrops in 2026.',
  alternates: { canonical: 'https://seo.3alamiyweb3.online/learn' },
};

const articles = [
  { slug: 'best-crypto-airdrops-2026', title: 'Best Crypto Airdrops 2026', desc: 'The complete list of the best free crypto airdrops in 2026. Updated daily.', cat: 'Airdrops', date: 'May 15, 2026', readTime: '8 min', featured: true },
  { slug: 'best-airdrop-farming-platforms-2026', title: 'Best Airdrop Farming Platforms 2026', desc: 'ZNS vs Galxe vs Layer3 vs 3alamiy — honest comparison of the top platforms.', cat: 'Comparison', date: 'May 10, 2026', readTime: '7 min', featured: true },
  { slug: 'best-solana-airdrops-2026', title: 'Best Solana Airdrops 2026', desc: 'Top Solana ecosystem airdrops you can farm right now. Free guides included.', cat: 'Ecosystems', date: 'May 8, 2026', readTime: '6 min', featured: false },
  { slug: 'discord-role-airdrops-guide-2026', title: 'Discord Role Airdrops 2026', desc: 'Plasma OG = $20K. Boundless = $10K+. How to grind roles for massive rewards.', cat: 'Strategy', date: 'May 5, 2026', readTime: '6 min', featured: false },
  { slug: 'how-to-find-airdrops-before-everyone-else', title: 'Find Airdrops Before Everyone Else', desc: 'The exact system top hunters use to find airdrops early and maximize rewards.', cat: 'Strategy', date: 'May 3, 2026', readTime: '8 min', featured: true },
  { slug: 'how-to-build-onchain-activity-that-actually-matters', title: 'Build Onchain Activity That Matters', desc: 'Quality over quantity — build a real wallet narrative that qualifies for airdrops.', cat: 'Onchain', date: 'Apr 28, 2026', readTime: '7 min', featured: false },
  { slug: 'best-free-crypto-airdrops-2026', title: 'Best Free Crypto Airdrops 2026', desc: 'Discover the best airdrops with zero investment required. Start farming today.', cat: 'Airdrops', date: 'Apr 25, 2026', readTime: '5 min', featured: false },
  { slug: 'how-to-avoid-crypto-airdrop-scams-2026', title: 'How to Avoid Airdrop Scams', desc: 'Stay safe while hunting for legitimate airdrops. Red flags and best practices.', cat: 'Beginners', date: 'Apr 20, 2026', readTime: '5 min', featured: false },
  { slug: 'best-ethereum-airdrops-2026', title: 'Best Ethereum Airdrops 2026', desc: 'Top ETH ecosystem airdrops across L2s, DeFi, and restaking protocols.', cat: 'Ecosystems', date: 'Apr 18, 2026', readTime: '7 min', featured: false },
  { slug: 'how-to-use-arbitrum-for-airdrops', title: 'How to Use Arbitrum for Airdrops', desc: 'The #1 chain for airdrop farming. Step-by-step guide for beginners.', cat: 'Beginners', date: 'Apr 15, 2026', readTime: '6 min', featured: false },
  { slug: 'testnet-airdrop-guide-2026', title: 'Testnet Airdrop Guide 2026', desc: 'How to farm testnets for free and qualify for mainnet token launches.', cat: 'Strategy', date: 'Apr 10, 2026', readTime: '7 min', featured: false },
  { slug: 'defi-airdrop-farming-guide-2026', title: 'DeFi Airdrop Farming Guide 2026', desc: 'Liquidity provision, lending, and swapping strategies for DeFi airdrops.', cat: 'DeFi', date: 'Apr 5, 2026', readTime: '8 min', featured: false },
  { slug: 'how-to-farm-multiple-airdrops-at-once', title: 'Farm Multiple Airdrops at Once', desc: 'Manage 10+ airdrop campaigns simultaneously without missing any tasks.', cat: 'Strategy', date: 'Apr 1, 2026', readTime: '6 min', featured: false },
  { slug: 'crypto-wallet-setup-for-airdrops', title: 'Crypto Wallet Setup for Airdrops', desc: 'The best wallet setup for airdrop farming — security and organization tips.', cat: 'Beginners', date: 'Mar 28, 2026', readTime: '5 min', featured: false },
  { slug: 'nft-airdrop-guide-2026', title: 'NFT Airdrop Guide 2026', desc: 'How NFT holders get rewarded with token airdrops. Best NFT projects to hold.', cat: 'NFT', date: 'Mar 25, 2026', readTime: '6 min', featured: false },
  { slug: 'layer2-airdrop-guide-2026', title: 'Layer 2 Airdrop Guide 2026', desc: 'Bridge, swap, and interact on L2s to qualify for upcoming token launches.', cat: 'Onchain', date: 'Mar 20, 2026', readTime: '7 min', featured: false },
  { slug: 'how-to-use-galxe-for-airdrops', title: 'How to Use Galxe for Airdrops', desc: 'Complete Galxe quests to earn OATs, points, and qualify for token rewards.', cat: 'Platforms', date: 'Mar 15, 2026', readTime: '5 min', featured: false },
  { slug: 'monad-airdrop-guide-2026', title: 'Monad Airdrop Guide 2026', desc: 'Everything you need to know about farming the Monad ecosystem early.', cat: 'Ecosystems', date: 'Mar 10, 2026', readTime: '6 min', featured: false },
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

export default function LearnPage() {
  const featured = articles.filter(a => a.featured);
  const rest = articles.filter(a => !a.featured);

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        .learn-page { min-height: 100vh; background: #060910; color: #fff; font-family: system-ui, -apple-system, sans-serif; }

        /* Hero */
        .learn-hero { padding: 64px 24px 48px; border-bottom: 1px solid #1a1f2e; position: relative; overflow: hidden; }
        .learn-hero-glow { position: absolute; top: -100px; left: 50%; transform: translateX(-50%); width: 700px; height: 500px; background: radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 65%); pointer-events: none; }

        /* Featured */
        .featured-grid { display: grid; grid-template-columns: 1.6fr 1fr; gap: 16px; margin-bottom: 16px; }
        .featured-card-main { background: #0d1117; border: 1px solid #1a1f2e; border-radius: 20px; padding: 32px; text-decoration: none; color: #fff; display: flex; flex-direction: column; justify-content: flex-end; min-height: 260px; position: relative; overflow: hidden; transition: all 0.25s; }
        .featured-card-main::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(99,102,241,0.06) 0%, transparent 60%); pointer-events: none; }
        .featured-card-main:hover { border-color: rgba(99,102,241,0.35); transform: translateY(-2px); box-shadow: 0 12px 40px rgba(0,0,0,0.4); }
        .featured-side { display: flex; flex-direction: column; gap: 16px; }
        .featured-card-side { background: #0d1117; border: 1px solid #1a1f2e; border-radius: 20px; padding: 24px; text-decoration: none; color: #fff; display: flex; flex-direction: column; gap: 10px; flex: 1; position: relative; overflow: hidden; transition: all 0.25s; }
        .featured-card-side:hover { border-color: rgba(99,102,241,0.35); transform: translateY(-2px); box-shadow: 0 12px 40px rgba(0,0,0,0.4); }

        /* Regular grid */
        .articles-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .article-card { background: #0d1117; border: 1px solid #1a1f2e; border-radius: 16px; padding: 22px; text-decoration: none; color: #fff; display: flex; flex-direction: column; gap: 10px; transition: all 0.2s; }
        .article-card:hover { border-color: rgba(99,102,241,0.25); background: #0f1420; transform: translateY(-1px); }

        /* Arrow icon */
        .arrow { width: 32px; height: 32px; border: 1px solid #1a1f2e; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #3f3f46; transition: all 0.2s; flex-shrink: 0; }
        .featured-card-main:hover .arrow,
        .featured-card-side:hover .arrow,
        .article-card:hover .arrow { border-color: rgba(99,102,241,0.3); color: #818cf8; }

        /* Cat badge */
        .cat-badge { display: inline-flex; padding: 3px 10px; border-radius: 99px; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; width: fit-content; }

        /* Number */
        .article-num { font-size: 11px; font-weight: 800; color: #1a1f2e; font-variant-numeric: tabular-nums; }

        @media (max-width: 1024px) {
          .featured-grid { grid-template-columns: 1fr; }
          .featured-side { flex-direction: row; }
          .articles-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .learn-hero { padding: 40px 16px 32px; }
          .featured-side { flex-direction: column; }
          .articles-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="learn-page">

        {/* Hero */}
        <section className="learn-hero">
          <div className="learn-hero-glow" />
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#52525b', margin: '0 0 12px' }}>Knowledge Base</p>
                <h1 style={{ fontSize: '40px', fontWeight: 900, margin: '0 0 12px', letterSpacing: '-0.03em', lineHeight: 1.05, color: '#fff' }}>
                  Guides & Strategies
                </h1>
                <p style={{ fontSize: '15px', color: '#71717a', margin: 0, maxWidth: '460px', lineHeight: 1.7 }}>
                  Everything you need to find, farm, and qualify for the best crypto airdrops in 2026.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '32px' }}>
                {[
                  [String(articles.length), 'Articles'],
                  ['Free', 'Always'],
                  ['Daily', 'Updated'],
                ].map(([val, lbl]) => (
                  <div key={lbl} style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '22px', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{val}</div>
                    <div style={{ fontSize: '10px', color: '#3f3f46', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px 80px' }}>

          {/* Featured section */}
          <div style={{ marginBottom: '48px' }}>
            <p style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#3f3f46', margin: '0 0 16px' }}>Featured</p>
            <div className="featured-grid">
              {/* Main featured */}
              <Link href={`/learn/${featured[0].slug}`} className="featured-card-main">
                <div style={{ position: 'absolute', top: '24px', right: '24px' }}>
                  <span className="cat-badge" style={{ background: `${catColors[featured[0].cat]}15`, color: catColors[featured[0].cat], border: `1px solid ${catColors[featured[0].cat]}25` }}>{featured[0].cat}</span>
                </div>
                <div>
                  <h2 style={{ fontSize: '22px', fontWeight: 900, margin: '0 0 10px', letterSpacing: '-0.02em', lineHeight: 1.2, color: '#fff' }}>{featured[0].title}</h2>
                  <p style={{ fontSize: '14px', color: '#71717a', margin: '0 0 20px', lineHeight: 1.6 }}>{featured[0].desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', gap: '16px' }}>
                      <span style={{ fontSize: '11px', color: '#3f3f46' }}>{featured[0].date}</span>
                      <span style={{ fontSize: '11px', color: '#3f3f46' }}>{featured[0].readTime} read</span>
                    </div>
                    <div className="arrow">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Side featured */}
              <div className="featured-side">
                {featured.slice(1).map((a) => (
                  <Link key={a.slug} href={`/learn/${a.slug}`} className="featured-card-side">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                      <span className="cat-badge" style={{ background: `${catColors[a.cat]}15`, color: catColors[a.cat], border: `1px solid ${catColors[a.cat]}25` }}>{a.cat}</span>
                      <div className="arrow">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </div>
                    </div>
                    <h2 style={{ fontSize: '15px', fontWeight: 800, margin: 0, lineHeight: 1.4, color: '#f4f4f5' }}>{a.title}</h2>
                    <p style={{ fontSize: '13px', color: '#52525b', margin: 0, lineHeight: 1.5 }}>{a.desc}</p>
                    <span style={{ fontSize: '11px', color: '#3f3f46', marginTop: 'auto' }}>{a.readTime} read · {a.date}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #1a1f2e 20%, #1a1f2e 80%, transparent)', marginBottom: '40px' }} />

          {/* All articles */}
          <div>
            <p style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#3f3f46', margin: '0 0 16px' }}>All Articles — {articles.length} guides</p>
            <div className="articles-grid">
              {rest.map((a, i) => (
                <Link key={a.slug} href={`/learn/${a.slug}`} className="article-card">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span className="cat-badge" style={{ background: `${catColors[a.cat]}12`, color: catColors[a.cat], border: `1px solid ${catColors[a.cat]}20` }}>{a.cat}</span>
                    <div className="arrow">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                  </div>
                  <h2 style={{ fontSize: '14px', fontWeight: 800, color: '#f4f4f5', margin: 0, lineHeight: 1.4 }}>{a.title}</h2>
                  <p style={{ fontSize: '12px', color: '#52525b', margin: 0, lineHeight: 1.6 }}>{a.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '10px', borderTop: '1px solid #1a1f2e' }}>
                    <span style={{ fontSize: '11px', color: '#3f3f46' }}>{a.date}</span>
                    <span style={{ fontSize: '11px', color: '#3f3f46' }}>{a.readTime} read</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
