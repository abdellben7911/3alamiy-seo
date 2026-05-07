import Link from "next/link";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

async function getAllAirdrops() {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/airdrops?select=*&order=created_at.desc`, {
    headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` },
    next: { revalidate: 3600 },
  });
  if (!res.ok) return [];
  return res.json();
}

export const metadata = {
  title: 'Crypto Airdrop Tracker 2026 | Free Airdrop Guides | 3alamiy Web3',
  description: 'Find and track the best crypto airdrops in 2026. Step-by-step guides for free and paid airdrops on Ethereum, Solana, Arbitrum and more.',
  keywords: 'crypto airdrop, free airdrop 2026, airdrop tracker, Web3 airdrop, DeFi airdrop guide',
};

export default async function Home() {
  const airdrops = await getAllAirdrops();
  const year = new Date().getFullYear();

  const difficultyColor = (d: string) =>
    d === 'Easy' ? '#10b981' : d === 'Hard' ? '#f43f5e' : '#f59e0b';
  const costColor = (c: string) =>
    c === 'Free' ? '#10b981' : c === 'Paid' ? '#f43f5e' : '#f59e0b';

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', system-ui, sans-serif; }

        .airdrop-card {
          background: #0d1117;
          border: 1px solid #1a1f2e;
          border-radius: 16px;
          padding: 16px;
          cursor: pointer;
          transition: all 0.25s ease;
          text-decoration: none;
          color: #fff;
          display: block;
          position: relative;
          overflow: hidden;
        }
        .airdrop-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(99,102,241,0.04), transparent);
          opacity: 0;
          transition: opacity 0.25s;
        }
        .airdrop-card:hover {
          border-color: rgba(99,102,241,0.35);
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(99,102,241,0.12);
        }
        .airdrop-card:hover::before { opacity: 1; }

        .learn-card {
          background: #0d1117;
          border: 1px solid #1a1f2e;
          border-radius: 14px;
          padding: 18px;
          text-decoration: none;
          color: #fff;
          display: block;
          transition: all 0.2s ease;
        }
        .learn-card:hover {
          border-color: rgba(99,102,241,0.3);
          background: #111827;
          transform: translateY(-1px);
        }

        .filter-pill {
          background: #0d1117;
          border: 1px solid #1a1f2e;
          color: #71717a;
          padding: 6px 14px;
          border-radius: 99px;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
          cursor: pointer;
        }
        .filter-pill:hover, .filter-pill.active {
          border-color: rgba(99,102,241,0.4);
          color: #818cf8;
          background: rgba(99,102,241,0.08);
        }

        .stat-card {
          background: #0d1117;
          border: 1px solid #1a1f2e;
          border-radius: 16px;
          padding: 20px 24px;
          text-align: center;
          flex: 1;
        }

        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .header-inner { padding: 0 16px !important; }
          .hero-section { padding: 40px 16px 36px !important; }
          .hero-title { font-size: 32px !important; line-height: 1.2 !important; }
          .hero-desc { font-size: 14px !important; }
          .hero-buttons { flex-direction: column !important; }
          .stats-row { flex-wrap: wrap !important; gap: 10px !important; padding: 20px 16px !important; }
          .stat-card { min-width: calc(50% - 5px) !important; }
          .main-section { padding: 28px 16px 48px !important; }
          .section-header { flex-direction: column !important; align-items: flex-start !important; gap: 12px !important; }
          .airdrops-grid { grid-template-columns: 1fr !important; }
          .learn-grid { grid-template-columns: 1fr !important; }
          .learn-section { padding: 36px 16px !important; }
          .sign-up-btn { padding: 8px 14px !important; font-size: 13px !important; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .airdrops-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .learn-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      <div style={{ minHeight: '100vh', background: '#060910', color: '#fff' }}>

        {/* Header */}
        <header style={{ borderBottom: '1px solid #1a1f2e', position: 'sticky', top: 0, background: 'rgba(6,9,16,0.92)', backdropFilter: 'blur(12px)', zIndex: 50, height: '62px' }}>
          <div className="header-inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <a href="https://3alamiyweb3.online" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#fff', flexShrink: 0 }}>
              <div style={{ width: '34px', height: '34px', background: 'linear-gradient(135deg, #6366f1, #4f46e5)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', boxShadow: '0 4px 12px rgba(99,102,241,0.3)' }}>🪂</div>
              <span style={{ fontWeight: '800', fontSize: '15px', letterSpacing: '-0.01em' }}>3alamiy Web3</span>
            </a>
            <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
              {['Discover', 'Market', 'Community', 'Learn'].map((label) => (
                <a key={label} href="https://3alamiyweb3.online" style={{ color: label === 'Discover' ? '#e4e4e7' : '#52525b', textDecoration: 'none', fontSize: '14px', fontWeight: '500', transition: 'color 0.2s' }}>{label}</a>
              ))}
            </nav>
            <a href="https://3alamiyweb3.online/profile" className="sign-up-btn" style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: '#fff', padding: '9px 20px', borderRadius: '10px', textDecoration: 'none', fontSize: '13px', fontWeight: '700', flexShrink: 0, boxShadow: '0 4px 12px rgba(99,102,241,0.25)' }}>Sign Up</a>
          </div>
        </header>

        {/* Hero */}
        <section className="hero-section" style={{ textAlign: 'center', padding: '80px 24px 60px', position: 'relative', overflow: 'hidden' }}>
          {/* Background glow */}
          <div style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '400px', background: 'radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '20%', left: '10%', width: '200px', height: '200px', background: 'radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '20%', right: '10%', width: '200px', height: '200px', background: 'radial-gradient(ellipse, rgba(16,185,129,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div style={{ position: 'relative' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '99px', padding: '5px 14px 5px 8px', fontSize: '12px', color: '#818cf8', marginBottom: '24px' }}>
              <span style={{ background: '#10b981', width: '6px', height: '6px', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 6px #10b981' }} />
              🔥 {airdrops.length}+ Active Airdrops Tracked
            </div>

            <h1 className="hero-title" style={{ fontSize: '48px', fontWeight: '900', margin: '0 0 18px', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Best Crypto Airdrops<br />
              <span style={{ background: 'linear-gradient(135deg, #818cf8, #6366f1, #4f46e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Guide {year}</span>
            </h1>

            <p className="hero-desc" style={{ fontSize: '17px', color: '#71717a', maxWidth: '520px', margin: '0 auto 32px', lineHeight: 1.7, fontWeight: '400' }}>
              Step-by-step guides for the most profitable crypto airdrops. Track, participate, and earn free crypto in {year}.
            </p>

            <div className="hero-buttons" style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://3alamiyweb3.online" style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: '#fff', padding: '13px 28px', borderRadius: '12px', textDecoration: 'none', fontWeight: '700', fontSize: '14px', boxShadow: '0 8px 24px rgba(99,102,241,0.3)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                🚀 Open Dashboard
              </a>
              <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', color: '#e4e4e7', padding: '13px 28px', borderRadius: '12px', textDecoration: 'none', fontWeight: '600', fontSize: '14px', border: '1px solid #1a1f2e', display: 'flex', alignItems: 'center', gap: '8px', transition: 'border-color 0.2s' }}>
                ✈️ Join Telegram
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 48px' }}>
          <div className="stats-row" style={{ display: 'flex', gap: '12px' }}>
            {[
              { icon: '🪂', value: `${airdrops.length}+`, label: 'Airdrops Tracked', color: '#818cf8' },
              { icon: '✅', value: `${airdrops.filter((a: any) => a.status === 'Active').length}`, label: 'Active Now', color: '#10b981' },
              { icon: '🆓', value: `${airdrops.filter((a: any) => a.cost === 'Free').length}`, label: 'Free Airdrops', color: '#10b981' },
              { icon: '📈', value: 'Daily', label: 'Updated', color: '#f59e0b' },
            ].map((stat) => (
              <div key={stat.label} className="stat-card">
                <div style={{ fontSize: '22px', marginBottom: '6px' }}>{stat.icon}</div>
                <div style={{ fontSize: '22px', fontWeight: '800', color: stat.color, marginBottom: '2px' }}>{stat.value}</div>
                <div style={{ fontSize: '11px', color: '#52525b', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Airdrops Grid */}
        <main className="main-section" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 80px' }}>

          {/* Section header */}
          <div className="section-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: '800', margin: '0 0 4px', letterSpacing: '-0.01em' }}>All Crypto Airdrops {year}</h2>
              <p style={{ fontSize: '13px', color: '#52525b', margin: 0 }}>Updated daily — {airdrops.length} airdrops with step-by-step guides</p>
            </div>
            <Link href="/airdrops" style={{ background: '#0d1117', color: '#818cf8', padding: '8px 16px', borderRadius: '10px', textDecoration: 'none', fontSize: '12px', fontWeight: '700', border: '1px solid rgba(99,102,241,0.2)', whiteSpace: 'nowrap', flexShrink: 0 }}>
              View All →
            </Link>
          </div>

          {/* Filter pills */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
            {['All', 'Ethereum', 'Solana', 'Arbitrum', 'Base', 'ZKSync', 'Starknet'].map((chain) => (
              <Link key={chain} href={chain === 'All' ? '/airdrops' : `/airdrops?blockchain=${chain.toLowerCase()}`} className="filter-pill">
                {chain}
              </Link>
            ))}
          </div>

          {/* Cards */}
          <div className="airdrops-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '12px' }}>
            {airdrops.map((a: any) => (
              <Link key={a.slug} href={`/airdrops/${a.slug}`} className="airdrop-card">
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  {a.logo ? (
                    <img src={a.logo} alt={a.name} width={48} height={48} style={{ borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)', flexShrink: 0, objectFit: 'cover' }} />
                  ) : (
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#1a1f2e', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>🪂</div>
                  )}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5px' }}>
                      <h3 style={{ fontSize: '14px', fontWeight: '700', margin: 0, color: '#f4f4f5', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '160px' }}>{a.name}</h3>
                      <span style={{
                        background: a.status === 'Active' ? 'rgba(16,185,129,0.1)' : 'rgba(113,113,122,0.1)',
                        color: a.status === 'Active' ? '#10b981' : '#71717a',
                        padding: '2px 8px', borderRadius: '99px', fontSize: '10px', fontWeight: '700', flexShrink: 0, marginLeft: '8px',
                        border: `1px solid ${a.status === 'Active' ? 'rgba(16,185,129,0.2)' : 'rgba(113,113,122,0.2)'}`,
                      }}>{a.status}</span>
                    </div>
                    <p style={{ fontSize: '12px', color: '#52525b', margin: '0 0 10px', lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{a.description}</p>
                    <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '10px', fontWeight: '700', color: costColor(a.cost), background: `${costColor(a.cost)}12`, padding: '3px 7px', borderRadius: '5px', border: `1px solid ${costColor(a.cost)}25` }}>{a.cost}</span>
                      <span style={{ fontSize: '10px', fontWeight: '700', color: difficultyColor(a.difficulty), background: `${difficultyColor(a.difficulty)}12`, padding: '3px 7px', borderRadius: '5px', border: `1px solid ${difficultyColor(a.difficulty)}25` }}>{a.difficulty}</span>
                      {a.blockchain && <span style={{ fontSize: '10px', fontWeight: '700', color: '#818cf8', background: 'rgba(99,102,241,0.08)', padding: '3px 7px', borderRadius: '5px', border: '1px solid rgba(99,102,241,0.15)' }}>{a.blockchain}</span>}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>

        {/* Learn Section */}
        <section className="learn-section" style={{ background: '#080b12', borderTop: '1px solid #1a1f2e', borderBottom: '1px solid #1a1f2e', padding: '56px 24px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <h2 style={{ fontSize: '22px', fontWeight: '800', margin: '0 0 4px', letterSpacing: '-0.01em' }}>Learn About Crypto Airdrops</h2>
                <p style={{ fontSize: '13px', color: '#52525b', margin: 0 }}>Everything you need to know to qualify for the best airdrops</p>
              </div>
              <Link href="/learn" style={{ background: '#0d1117', color: '#818cf8', padding: '8px 16px', borderRadius: '10px', textDecoration: 'none', fontSize: '12px', fontWeight: '700', border: '1px solid rgba(99,102,241,0.2)', whiteSpace: 'nowrap' }}>
                All Articles →
              </Link>
            </div>
            <div className="learn-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '10px' }}>
              {[
                { slug: 'why-crypto-airdrops-are-becoming-harder-to-qualify-for', title: 'Why Crypto Airdrops Are Harder in 2026', desc: 'The golden era of easy airdrops is over. Learn how to adapt.', cat: 'Airdrops' },
                { slug: 'how-to-build-onchain-activity-that-actually-matters', title: 'How to Build Onchain Activity That Matters', desc: 'Quality over quantity — build a wallet narrative that wins airdrops.', cat: 'Onchain' },
                { slug: 'best-free-crypto-airdrops-2026', title: 'Best Free Crypto Airdrops 2026', desc: 'Discover the best free airdrops available right now.', cat: 'Airdrops' },
                { slug: 'how-to-set-up-metamask-for-airdrops', title: 'How to Set Up MetaMask for Airdrops', desc: 'Complete beginner guide to getting started with airdrops.', cat: 'Beginners' },
                { slug: 'what-is-depin-crypto-airdrops', title: 'What is DePIN? Earn Passive Crypto', desc: 'The hottest crypto trend paying users in 2026.', cat: 'Ecosystems' },
                { slug: 'how-to-avoid-crypto-airdrop-scams-2026', title: 'How to Avoid Airdrop Scams', desc: 'Stay safe while hunting for legitimate airdrops.', cat: 'Beginners' },
                { slug: 'top-crypto-airdrop-wallets-2026', title: 'Best Wallets for Crypto Airdrops 2026', desc: 'MetaMask, Rabby, Phantom — which wallet wins airdrops?', cat: 'Beginners' },
                { slug: 'crypto-airdrops-2026-evolution', title: 'How Crypto Airdrops Are Evolving in 2026', desc: 'Strategic, data-driven, utility-focused — the new airdrop era.', cat: 'Airdrops' },
                { slug: 'news-report-the-2-trillion-wipeout', title: 'The $2 Trillion Crypto Wipeout', desc: 'What happened and what it means for airdrop hunters.', cat: 'Market' },
                { slug: 'solanas-institutional-firedancer-era', title: "Solana's Firedancer Era", desc: 'How Firedancer is transforming Solana into institutional-grade infrastructure.', cat: 'Onchain' },
                { slug: 'can-solana-reach-1000-deep-dive', title: 'Can Solana Reach $1,000?', desc: 'A deep dive into SOL fundamentals and future potential.', cat: 'Onchain' },
                { slug: 'nfts-flex-bayc-kidney-moment', title: 'When NFTs Were a Flex: The BAYC Era', desc: 'A look back at the viral NFT bull market culture.', cat: 'Market' },
                { slug: 'how-a-100-domain-became-a-70-million-digital-asset-the-story-behind-ai-com', title: 'How a $100 Domain Became $70 Million', desc: 'The story of AI.com and lessons for Web3 investors.', cat: 'Market' },
              ].map((article) => {
                const catColors: Record<string, string> = { Airdrops: '#818cf8', Onchain: '#34d399', Market: '#fbbf24', Beginners: '#60a5fa', Ecosystems: '#c084fc' };
                return (
                  <Link key={article.slug} href={`/learn/${article.slug}`} className="learn-card">
                    <span style={{ fontSize: '10px', fontWeight: '800', color: catColors[article.cat] || '#818cf8', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>{article.cat}</span>
                    <h3 style={{ fontSize: '13px', fontWeight: '700', margin: '0 0 6px', color: '#f4f4f5', lineHeight: 1.4 }}>{article.title}</h3>
                    <p style={{ fontSize: '12px', color: '#52525b', margin: 0, lineHeight: 1.5 }}>{article.desc}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ background: '#060910', padding: '56px 24px 32px', borderTop: '1px solid #1a1f2e' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: '60px', marginBottom: '48px' }}>
              <div>
                <a href="https://3alamiyweb3.online" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#fff', marginBottom: '14px' }}>
                  <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #6366f1, #4f46e5)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>🪂</div>
                  <span style={{ fontWeight: '800', fontSize: '16px' }}>3alamiy Web3</span>
                </a>
                <p style={{ fontSize: '13px', color: '#3f3f46', lineHeight: 1.7, maxWidth: '260px', margin: '0 0 20px' }}>
                  The world's most comprehensive airdrop tracker and Web3 discovery platform.
                </p>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <a href="https://x.com/3alamiyweb3" target="_blank" rel="noopener noreferrer" style={{ width: '36px', height: '36px', background: '#0d1117', border: '1px solid #1a1f2e', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#71717a', fontSize: '13px', fontWeight: '900' }}>𝕏</a>
                  <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" style={{ width: '36px', height: '36px', background: '#0d1117', border: '1px solid #1a1f2e', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#71717a', fontSize: '15px' }}>✈️</a>
                </div>
              </div>
              <div>
                <p style={{ fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#3f3f46', margin: '0 0 18px' }}>Platform</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[['Airdrops', 'https://3alamiyweb3.online'], ['Market', 'https://3alamiyweb3.online/market'], ['Learn', 'https://3alamiyweb3.online/learn'], ['Community', 'https://3alamiyweb3.online/community']].map(([label, href]) => (
                    <a key={label} href={href} style={{ color: '#52525b', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s' }}>{label}</a>
                  ))}
                </div>
              </div>
              <div>
                <p style={{ fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#3f3f46', margin: '0 0 18px' }}>Support</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[['About Us', 'https://3alamiyweb3.online/about'], ['FAQ', 'https://3alamiyweb3.online/faq'], ['Privacy Policy', 'https://3alamiyweb3.online/privacy'], ['Contact', 'https://t.me/web33alamiy']].map(([label, href]) => (
                    <a key={label} href={href} style={{ color: '#52525b', textDecoration: 'none', fontSize: '13px' }}>{label}</a>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ borderTop: '1px solid #1a1f2e', paddingTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
              <p style={{ fontSize: '12px', color: '#3f3f46', margin: 0 }}>© {year} 3alamiyweb3.online. All rights reserved.</p>
              <div style={{ display: 'flex', gap: '20px' }}>
                <span style={{ fontSize: '12px', color: '#3f3f46' }}>○ Secure Platform</span>
                <span style={{ fontSize: '12px', color: '#3f3f46' }}>⚡ Real-time Data</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
