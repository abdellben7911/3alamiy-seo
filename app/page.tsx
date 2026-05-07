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
  const rewardLabel = (a: any) =>
    a.reward_min && a.reward_max ? `$${a.reward_min} - $${a.reward_max}` : a.reward_min ? `$${a.reward_min}+` : 'High';

  const featured = airdrops.filter((a: any) => a.reward_min >= 500).slice(0, 6);
  const newlyAdded = airdrops.slice(0, 6);
  const allActive = airdrops.filter((a: any) => a.status === 'Active');

  const BigCard = ({ a }: { a: any }) => (
    <Link href={`/airdrops/${a.slug}`} className="airdrop-card" style={{ textDecoration: 'none' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          <span style={{ background: 'rgba(99,102,241,0.15)', color: '#818cf8', border: '1px solid rgba(99,102,241,0.2)', padding: '2px 8px', borderRadius: '5px', fontSize: '10px', fontWeight: '800' }}>3ALAMIY</span>
          <span style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981', border: '1px solid rgba(16,185,129,0.2)', padding: '2px 8px', borderRadius: '5px', fontSize: '10px', fontWeight: '800' }}>✦ NEW</span>
        </div>
        <span style={{ fontSize: '16px', color: '#3f3f46' }}>♡</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {a.logo ? (
          <img src={a.logo} alt={a.name} width={44} height={44} style={{ borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)', flexShrink: 0, objectFit: 'cover' }} />
        ) : (
          <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#1a1f2e', flexShrink: 0 }} />
        )}
        <div>
          <h3 style={{ fontSize: '15px', fontWeight: '800', margin: '0 0 2px', color: '#f4f4f5' }}>{a.name}</h3>
          <span style={{ fontSize: '11px', color: '#52525b', fontWeight: '600', textTransform: 'uppercase' as const, letterSpacing: '0.05em' }}>{a.blockchain}</span>
        </div>
      </div>
      <p style={{ fontSize: '13px', color: '#52525b', lineHeight: 1.6, display: '-webkit-box' as any, WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as any, overflow: 'hidden', margin: 0 }}>{a.description}</p>
      <div style={{ display: 'flex', gap: '24px' }}>
        <div>
          <div style={{ fontSize: '10px', color: '#3f3f46', fontWeight: '700', textTransform: 'uppercase' as const, letterSpacing: '0.06em', marginBottom: '3px' }}>⚡ DIFFICULTY</div>
          <div style={{ fontSize: '13px', fontWeight: '700', color: difficultyColor(a.difficulty) }}>{a.difficulty}</div>
        </div>
        <div>
          <div style={{ fontSize: '10px', color: '#3f3f46', fontWeight: '700', textTransform: 'uppercase' as const, letterSpacing: '0.06em', marginBottom: '3px' }}>💰 REWARD</div>
          <div style={{ fontSize: '13px', fontWeight: '700', color: '#10b981' }}>{rewardLabel(a)}</div>
        </div>
      </div>
      {Array.isArray(a.tags) && a.tags.length > 0 && (
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' as const }}>
          {a.tags.slice(0, 3).map((tag: string) => (
            <span key={tag} style={{ background: '#18181b', border: '1px solid #27272a', color: '#71717a', padding: '3px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: '600' }}>{tag}</span>
          ))}
        </div>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ height: '3px', flex: 1, background: '#1a1f2e', borderRadius: '99px', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: '97%', background: 'linear-gradient(90deg, #6366f1, #818cf8)', borderRadius: '99px' }} />
        </div>
        <span style={{ fontSize: '10px', fontWeight: '800', color: '#818cf8', whiteSpace: 'nowrap' as const }}>97% WORTH IT</span>
      </div>
    </Link>
  );

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .airdrop-card {
          background: #0d1117;
          border: 1px solid #1a1f2e;
          border-radius: 16px;
          padding: 20px;
          cursor: pointer;
          transition: all 0.22s ease;
          text-decoration: none;
          color: #fff;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .airdrop-card:hover {
          border-color: rgba(99,102,241,0.4);
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.3);
        }
        .small-card {
          background: #0d1117;
          border: 1px solid #1a1f2e;
          border-radius: 14px;
          padding: 14px 16px;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
          color: #fff;
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .small-card:hover {
          border-color: rgba(99,102,241,0.3);
          transform: translateY(-1px);
        }
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
        .learn-card:hover { border-color: rgba(99,102,241,0.3); background: #111827; }
        .filter-pill {
          background: #0d1117; border: 1px solid #1a1f2e; color: #71717a;
          padding: 6px 14px; border-radius: 99px; font-size: 12px; font-weight: 600;
          text-decoration: none; transition: all 0.2s; white-space: nowrap;
        }
        .filter-pill:hover { border-color: rgba(99,102,241,0.4); color: #818cf8; background: rgba(99,102,241,0.08); }
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .header-inner { padding: 0 16px !important; }
          .hero-section { padding: 36px 16px 28px !important; }
          .hero-title { font-size: 28px !important; }
          .hero-buttons { flex-direction: column !important; }
          .stats-row { flex-wrap: wrap !important; }
          .stat-item { min-width: calc(50% - 6px) !important; }
          .content-pad { padding: 0 16px 60px !important; }
          .big-grid { grid-template-columns: 1fr !important; }
          .small-grid { grid-template-columns: 1fr !important; }
          .learn-grid { grid-template-columns: 1fr !important; }
          .learn-section { padding: 36px 16px !important; }
          .sign-up-btn { padding: 8px 14px !important; font-size: 13px !important; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .big-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .small-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .learn-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      <div style={{ minHeight: '100vh', background: '#060910', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#fff' }}>

        {/* Header */}
        <header style={{ borderBottom: '1px solid #1a1f2e', position: 'sticky', top: 0, background: 'rgba(6,9,16,0.95)', backdropFilter: 'blur(12px)', zIndex: 50, height: '62px' }}>
          <div className="header-inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <a href="https://3alamiyweb3.online" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#fff', flexShrink: 0 }}>
              <div style={{ width: '34px', height: '34px', background: 'linear-gradient(135deg, #6366f1, #4f46e5)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', boxShadow: '0 4px 12px rgba(99,102,241,0.3)' }}>🪂</div>
              <span style={{ fontWeight: '800', fontSize: '15px', letterSpacing: '-0.01em' }}>3alamiy Web3</span>
            </a>
            <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
              {['Discover', 'Market', 'Community', 'Learn'].map((label) => (
                <a key={label} href="https://3alamiyweb3.online" style={{ color: label === 'Discover' ? '#e4e4e7' : '#52525b', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>{label}</a>
              ))}
            </nav>
            <a href="https://3alamiyweb3.online/profile" className="sign-up-btn" style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: '#fff', padding: '9px 20px', borderRadius: '10px', textDecoration: 'none', fontSize: '13px', fontWeight: '700', flexShrink: 0, boxShadow: '0 4px 12px rgba(99,102,241,0.25)' }}>Sign Up</a>
          </div>
        </header>

        {/* Hero */}
        <section className="hero-section" style={{ padding: '60px 24px 40px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '400px', background: 'radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '99px', padding: '5px 14px 5px 8px', fontSize: '12px', color: '#818cf8', marginBottom: '20px' }}>
              <span style={{ background: '#10b981', width: '6px', height: '6px', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 6px #10b981' }} />
              🔥 {airdrops.length}+ Active Airdrops Tracked
            </div>
            <h1 className="hero-title" style={{ fontSize: '44px', fontWeight: '900', margin: '0 0 14px', letterSpacing: '-0.03em', lineHeight: 1.1, maxWidth: '600px' }}>
              Find Legit Airdrops<br />
              <span style={{ background: 'linear-gradient(135deg, #818cf8, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Before Everyone Else</span>
            </h1>
            <p style={{ fontSize: '16px', color: '#71717a', maxWidth: '460px', margin: '0 0 28px', lineHeight: 1.7 }}>
              Track, analyze, and qualify for high-potential Web3 airdrops before they go mainstream.
            </p>
            <div className="hero-buttons" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="https://3alamiyweb3.online" style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: '#fff', padding: '12px 24px', borderRadius: '12px', textDecoration: 'none', fontWeight: '700', fontSize: '14px', boxShadow: '0 8px 24px rgba(99,102,241,0.3)' }}>🚀 Open Dashboard</a>
              <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', color: '#e4e4e7', padding: '12px 24px', borderRadius: '12px', textDecoration: 'none', fontWeight: '600', fontSize: '14px', border: '1px solid #1a1f2e' }}>✈️ Join Telegram</a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 40px' }}>
          <div className="stats-row" style={{ display: 'flex', gap: '12px' }}>
            {[
              { value: `${airdrops.length}+`, label: 'Airdrops Tracked', color: '#818cf8' },
              { value: `${allActive.length}`, label: 'Active Now', color: '#10b981' },
              { value: `${airdrops.filter((a: any) => a.cost === 'Free').length}`, label: 'Free Airdrops', color: '#10b981' },
              { value: 'Daily', label: 'Updated', color: '#f59e0b' },
            ].map((stat) => (
              <div key={stat.label} className="stat-item" style={{ background: '#0d1117', border: '1px solid #1a1f2e', borderRadius: '14px', padding: '16px 20px', flex: 1, textAlign: 'center' }}>
                <div style={{ fontSize: '20px', fontWeight: '800', color: stat.color, marginBottom: '2px' }}>{stat.value}</div>
                <div style={{ fontSize: '11px', color: '#52525b', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="content-pad" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 80px' }}>

          {/* Filter bar */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '32px', flexWrap: 'wrap', alignItems: 'center' }}>
            {/* Search */}
            <div style={{ position: 'relative', flex: 1, minWidth: '200px', maxWidth: '380px' }}>
              <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#52525b', fontSize: '14px' }}>🔍</span>
              <input disabled placeholder="Search by name, category or blockchain..." style={{ width: '100%', background: '#0d1117', border: '1px solid #1a1f2e', borderRadius: '12px', padding: '11px 14px 11px 40px', color: '#71717a', fontSize: '13px', outline: 'none', fontFamily: 'inherit' }} />
            </div>
            {/* Filter tabs */}
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {[
                { label: 'All', count: airdrops.length, icon: '⚡', active: true },
                { label: 'Free', count: airdrops.filter((a: any) => a.cost === 'Free').length, icon: '★', active: false },
                { label: 'Paid', count: airdrops.filter((a: any) => a.cost === 'Paid').length, icon: '🗂', active: false },
                { label: 'End / Claim', count: airdrops.filter((a: any) => a.status === 'Ended').length, icon: '✦', active: false },
              ].map((tab) => (
                <div key={tab.label} style={{
                  display: 'flex', alignItems: 'center', gap: '7px',
                  background: tab.active ? 'linear-gradient(135deg, #6366f1, #4f46e5)' : '#0d1117',
                  border: `1px solid ${tab.active ? 'transparent' : '#1a1f2e'}`,
                  borderRadius: '10px', padding: '8px 14px', cursor: 'pointer',
                  boxShadow: tab.active ? '0 4px 12px rgba(99,102,241,0.3)' : 'none',
                }}>
                  <span style={{ fontSize: '12px', opacity: 0.8 }}>{tab.icon}</span>
                  <span style={{ fontSize: '13px', fontWeight: '700', color: tab.active ? '#fff' : '#71717a' }}>{tab.label}</span>
                  <span style={{ background: tab.active ? 'rgba(255,255,255,0.2)' : '#18181b', color: tab.active ? '#fff' : '#52525b', fontSize: '11px', fontWeight: '700', padding: '1px 7px', borderRadius: '6px', minWidth: '22px', textAlign: 'center' }}>{tab.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ⭐ Featured Alpha */}
          {featured.length > 0 && (
            <section style={{ marginBottom: '48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: '800' }}>⭐ Featured Alpha</h2>
                <Link href="/airdrops" style={{ fontSize: '12px', color: '#818cf8', textDecoration: 'none', fontWeight: '600' }}>View all →</Link>
              </div>
              <div className="big-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                {featured.map((a: any) => <BigCard key={a.slug} a={a} />)}
              </div>
            </section>
          )}

          {/* 🆕 Newly Added */}
          <section style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: '800' }}>🆕 Newly Added</h2>
              <Link href="/airdrops" style={{ fontSize: '12px', color: '#818cf8', textDecoration: 'none', fontWeight: '600' }}>View all →</Link>
            </div>
            <div className="big-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
              {newlyAdded.map((a: any) => <BigCard key={a.slug} a={a} />)}
            </div>
          </section>

          {/* All Active */}
          <section>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: '800' }}>🔥 All Active Airdrops {year}</h2>
              <Link href="/airdrops" style={{ background: '#0d1117', color: '#818cf8', padding: '7px 14px', borderRadius: '9px', textDecoration: 'none', fontSize: '12px', fontWeight: '700', border: '1px solid rgba(99,102,241,0.2)' }}>View All →</Link>
            </div>
            <div className="small-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
              {allActive.slice(0, 12).map((a: any) => (
                <Link key={a.slug} href={`/airdrops/${a.slug}`} className="small-card">
                  {a.logo ? (
                    <img src={a.logo} alt={a.name} width={38} height={38} style={{ borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)', flexShrink: 0, objectFit: 'cover' }} />
                  ) : (
                    <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#1a1f2e', flexShrink: 0 }} />
                  )}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3px' }}>
                      <h3 style={{ fontSize: '13px', fontWeight: '700', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '130px' }}>{a.name}</h3>
                      <span style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981', padding: '1px 6px', borderRadius: '99px', fontSize: '9px', fontWeight: '700', border: '1px solid rgba(16,185,129,0.2)', flexShrink: 0, marginLeft: '4px' }}>{a.status}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      <span style={{ fontSize: '10px', fontWeight: '700', color: costColor(a.cost), background: `${costColor(a.cost)}12`, padding: '1px 5px', borderRadius: '4px' }}>{a.cost}</span>
                      <span style={{ fontSize: '10px', fontWeight: '700', color: difficultyColor(a.difficulty), background: `${difficultyColor(a.difficulty)}12`, padding: '1px 5px', borderRadius: '4px' }}>{a.difficulty}</span>
                      {a.blockchain && <span style={{ fontSize: '10px', fontWeight: '700', color: '#818cf8', background: 'rgba(99,102,241,0.08)', padding: '1px 5px', borderRadius: '4px' }}>{a.blockchain}</span>}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Learn Section */}
        <section className="learn-section" style={{ background: '#080b12', borderTop: '1px solid #1a1f2e', borderBottom: '1px solid #1a1f2e', padding: '56px 24px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <h2 style={{ fontSize: '18px', fontWeight: '800', margin: '0 0 4px' }}>📚 Learn About Crypto Airdrops</h2>
                <p style={{ fontSize: '13px', color: '#52525b', margin: 0 }}>Everything you need to know to qualify for the best airdrops</p>
              </div>
              <Link href="/learn" style={{ background: '#0d1117', color: '#818cf8', padding: '7px 14px', borderRadius: '9px', textDecoration: 'none', fontSize: '12px', fontWeight: '700', border: '1px solid rgba(99,102,241,0.2)' }}>All Articles →</Link>
            </div>
            <div className="learn-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '10px' }}>
              {[
                { slug: 'why-crypto-airdrops-are-becoming-harder-to-qualify-for', title: 'Why Crypto Airdrops Are Harder in 2026', desc: 'The golden era of easy airdrops is over.', cat: 'Airdrops' },
                { slug: 'how-to-build-onchain-activity-that-actually-matters', title: 'How to Build Onchain Activity That Matters', desc: 'Quality over quantity — build a wallet narrative.', cat: 'Onchain' },
                { slug: 'best-free-crypto-airdrops-2026', title: 'Best Free Crypto Airdrops 2026', desc: 'Discover the best free airdrops right now.', cat: 'Airdrops' },
                { slug: 'how-to-set-up-metamask-for-airdrops', title: 'How to Set Up MetaMask for Airdrops', desc: 'Complete beginner guide to getting started.', cat: 'Beginners' },
                { slug: 'what-is-depin-crypto-airdrops', title: 'What is DePIN? Earn Passive Crypto', desc: 'The hottest crypto trend paying users in 2026.', cat: 'Ecosystems' },
                { slug: 'how-to-avoid-crypto-airdrop-scams-2026', title: 'How to Avoid Airdrop Scams', desc: 'Stay safe while hunting for legitimate airdrops.', cat: 'Beginners' },
                { slug: 'top-crypto-airdrop-wallets-2026', title: 'Best Wallets for Crypto Airdrops 2026', desc: 'MetaMask, Rabby, Phantom — which wins?', cat: 'Beginners' },
                { slug: 'crypto-airdrops-2026-evolution', title: 'How Crypto Airdrops Are Evolving in 2026', desc: 'Strategic, data-driven, utility-focused era.', cat: 'Airdrops' },
                { slug: 'news-report-the-2-trillion-wipeout', title: 'The $2 Trillion Crypto Wipeout', desc: 'What happened and what it means for hunters.', cat: 'Market' },
                { slug: 'solanas-institutional-firedancer-era', title: "Solana's Firedancer Era", desc: 'Transforming Solana into institutional infrastructure.', cat: 'Onchain' },
                { slug: 'can-solana-reach-1000-deep-dive', title: 'Can Solana Reach $1,000?', desc: 'A deep dive into SOL future potential.', cat: 'Onchain' },
                { slug: 'nfts-flex-bayc-kidney-moment', title: 'When NFTs Were a Flex: The BAYC Era', desc: 'A look back at the viral NFT bull market.', cat: 'Market' },
                { slug: 'how-a-100-domain-became-a-70-million-digital-asset-the-story-behind-ai-com', title: 'How a $100 Domain Became $70 Million', desc: 'The story of AI.com and Web3 lessons.', cat: 'Market' },
              ].map((article) => {
                const catColors: Record<string, string> = { Airdrops: '#818cf8', Onchain: '#34d399', Market: '#fbbf24', Beginners: '#60a5fa', Ecosystems: '#c084fc' };
                return (
                  <Link key={article.slug} href={`/learn/${article.slug}`} className="learn-card">
                    <span style={{ fontSize: '10px', fontWeight: '800', color: catColors[article.cat] || '#818cf8', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '7px' }}>{article.cat}</span>
                    <h3 style={{ fontSize: '13px', fontWeight: '700', margin: '0 0 5px', color: '#f4f4f5', lineHeight: 1.4 }}>{article.title}</h3>
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
            <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: '60px', marginBottom: '40px' }}>
              <div>
                <a href="https://3alamiyweb3.online" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#fff', marginBottom: '14px' }}>
                  <div style={{ width: '34px', height: '34px', background: 'linear-gradient(135deg, #6366f1, #4f46e5)', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>🪂</div>
                  <span style={{ fontWeight: '800', fontSize: '15px' }}>3alamiy Web3</span>
                </a>
                <p style={{ fontSize: '13px', color: '#3f3f46', lineHeight: 1.7, maxWidth: '260px', margin: '0 0 18px' }}>The world's most comprehensive airdrop tracker and Web3 discovery platform.</p>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <a href="https://x.com/3alamiyweb3" target="_blank" rel="noopener noreferrer" style={{ width: '34px', height: '34px', background: '#0d1117', border: '1px solid #1a1f2e', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#71717a', fontSize: '12px', fontWeight: '900' }}>𝕏</a>
                  <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" style={{ width: '34px', height: '34px', background: '#0d1117', border: '1px solid #1a1f2e', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: '14px' }}>✈️</a>
                </div>
              </div>
              <div>
                <p style={{ fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#3f3f46', margin: '0 0 16px' }}>Platform</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[['Airdrops', 'https://3alamiyweb3.online'], ['Market', 'https://3alamiyweb3.online/market'], ['Learn', 'https://3alamiyweb3.online/learn'], ['Community', 'https://3alamiyweb3.online/community']].map(([label, href]) => (
                    <a key={label} href={href} style={{ color: '#52525b', textDecoration: 'none', fontSize: '13px' }}>{label}</a>
                  ))}
                </div>
              </div>
              <div>
                <p style={{ fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#3f3f46', margin: '0 0 16px' }}>Support</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[['About Us', 'https://3alamiyweb3.online/about'], ['FAQ', 'https://3alamiyweb3.online/faq'], ['Privacy Policy', 'https://3alamiyweb3.online/privacy'], ['Contact', 'https://t.me/web33alamiy']].map(([label, href]) => (
                    <a key={label} href={href} style={{ color: '#52525b', textDecoration: 'none', fontSize: '13px' }}>{label}</a>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ borderTop: '1px solid #1a1f2e', paddingTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
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
