import Link from 'next/link';
import type { Metadata } from 'next';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const metadata: Metadata = {
  title: 'All Crypto Airdrops 2026 — Free Step-by-Step Guides | 3alamiy Web3',
  description: 'Browse 70+ verified crypto airdrops in 2026. Filter by blockchain, difficulty, and cost. Free step-by-step guides for Ethereum, Solana, Arbitrum and more.',
  keywords: 'crypto airdrops 2026, free airdrops, ethereum airdrop, solana airdrop, testnet airdrop, airdrop list',
  alternates: { canonical: 'https://seo.3alamiyweb3.online/airdrops' },
};

async function getAllAirdrops() {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/airdrops?select=*&order=created_at.desc`, {
    headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` },
    next: { revalidate: 3600 },
  });
  if (!res.ok) return [];
  return res.json();
}

export default async function AirdropsPage() {
  const airdrops = await getAllAirdrops();

  const difficultyColor = (d: string) =>
    d === 'Easy' ? '#10b981' : d === 'Hard' ? '#f43f5e' : '#f59e0b';
  const costColor = (c: string) =>
    c === 'Free' ? '#10b981' : c === 'Paid' ? '#f43f5e' : '#f59e0b';

  const blockchains = [...new Set(airdrops.map((a: any) => a.blockchain).filter(Boolean))];
  const activeCount = airdrops.filter((a: any) => a.status === 'Active').length;
  const freeCount = airdrops.filter((a: any) => a.cost === 'Free').length;

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .airdrop-card {
          background: #0d1117;
          border: 1px solid #1a1f2e;
          border-radius: 16px;
          padding: 20px;
          text-decoration: none;
          color: #fff;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: all 0.22s ease;
        }
        .airdrop-card:hover {
          border-color: rgba(99,102,241,0.4);
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.3);
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
          white-space: nowrap;
        }
        .filter-pill:hover {
          border-color: rgba(99,102,241,0.4);
          color: #818cf8;
          background: rgba(99,102,241,0.08);
        }
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .header-inner { padding: 0 16px !important; }
          .main-content { padding: 24px 16px 60px !important; }
          .cards-grid { grid-template-columns: 1fr !important; }
          .stats-row { flex-wrap: wrap !important; }
          .stat-item { min-width: calc(50% - 6px) !important; }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      <div style={{ minHeight: '100vh', background: '#060910', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#fff' }}>

        {/* Header */}
        <header style={{ borderBottom: '1px solid #1a1f2e', position: 'sticky', top: 0, background: 'rgba(6,9,16,0.95)', backdropFilter: 'blur(12px)', zIndex: 50, height: '62px' }}>
          <div className="header-inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#fff' }}>
              <div style={{ width: '34px', height: '34px', background: 'linear-gradient(135deg, #6366f1, #4f46e5)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', boxShadow: '0 4px 12px rgba(99,102,241,0.3)' }}>🪂</div>
              <span style={{ fontWeight: '800', fontSize: '15px', letterSpacing: '-0.01em' }}>3alamiy Web3</span>
            </Link>
            <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
              <Link href="/" style={{ color: '#71717a', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Home</Link>
              <Link href="/airdrops" style={{ color: '#fff', textDecoration: 'none', fontSize: '14px', fontWeight: '700' }}>Airdrops</Link>
              <Link href="/learn/how-to-find-airdrops-before-everyone-else" style={{ color: '#71717a', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Learn</Link>
              <Link href="/about" style={{ color: '#71717a', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>About</Link>
            </nav>
            <a href="https://3alamiyweb3.online" style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: '#fff', padding: '9px 20px', borderRadius: '10px', textDecoration: 'none', fontSize: '13px', fontWeight: '700', boxShadow: '0 4px 12px rgba(99,102,241,0.25)' }}>Open App</a>
          </div>
        </header>

        <main className="main-content" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px 80px' }}>

          {/* Breadcrumb */}
          <nav style={{ fontSize: '13px', color: '#52525b', marginBottom: '24px' }}>
            <Link href="/" style={{ color: '#6366f1', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span>All Airdrops</span>
          </nav>

          {/* Page header */}
          <div style={{ marginBottom: '32px' }}>
            <h1 style={{ fontSize: '32px', fontWeight: '900', margin: '0 0 10px', letterSpacing: '-0.02em' }}>
              All Crypto Airdrops 2026
            </h1>
            <p style={{ fontSize: '15px', color: '#71717a', margin: 0 }}>
              {airdrops.length}+ verified airdrops with step-by-step guides. Updated daily.
            </p>
          </div>

          {/* Stats */}
          <div className="stats-row" style={{ display: 'flex', gap: '12px', marginBottom: '28px' }}>
            {[
              { value: `${airdrops.length}+`, label: 'Total Airdrops', color: '#818cf8' },
              { value: `${activeCount}`, label: 'Active Now', color: '#10b981' },
              { value: `${freeCount}`, label: 'Free Airdrops', color: '#10b981' },
              { value: `${blockchains.length}`, label: 'Blockchains', color: '#f59e0b' },
            ].map(stat => (
              <div key={stat.label} className="stat-item" style={{ background: '#0d1117', border: '1px solid #1a1f2e', borderRadius: '12px', padding: '14px 18px', flex: 1, textAlign: 'center' }}>
                <div style={{ fontSize: '18px', fontWeight: '800', color: stat.color, marginBottom: '2px' }}>{stat.value}</div>
                <div style={{ fontSize: '11px', color: '#52525b', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
            <Link href="/airdrops" className="filter-pill" style={{ background: 'rgba(99,102,241,0.1)', borderColor: 'rgba(99,102,241,0.3)', color: '#818cf8' }}>All</Link>
            <Link href="/airdrops?cost=free" className="filter-pill">🆓 Free</Link>
            <Link href="/airdrops?difficulty=easy" className="filter-pill">⚡ Easy</Link>
            {['Ethereum', 'Solana', 'Arbitrum', 'Base', 'ZKSync'].map(chain => (
              <Link key={chain} href={`/airdrops?blockchain=${chain.toLowerCase()}`} className="filter-pill">{chain}</Link>
            ))}
          </div>

          {/* Schema */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'Best Crypto Airdrops 2026',
              description: 'Complete list of verified crypto airdrops with step-by-step guides',
              numberOfItems: airdrops.length,
              itemListElement: airdrops.slice(0, 10).map((a: any, i: number) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: `${a.name} Airdrop`,
                url: `https://seo.3alamiyweb3.online/airdrops/${a.slug}`,
              })),
            })
          }} />

          {/* Cards Grid */}
          <div className="cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            {airdrops.map((a: any) => (
              <Link key={a.slug} href={`/airdrops/${a.slug}`} className="airdrop-card">
                {/* Top row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <span style={{ background: 'rgba(99,102,241,0.15)', color: '#818cf8', border: '1px solid rgba(99,102,241,0.2)', padding: '2px 8px', borderRadius: '5px', fontSize: '10px', fontWeight: '800' }}>3ALAMIY</span>
                    <span style={{ background: a.status === 'Active' ? 'rgba(16,185,129,0.1)' : 'rgba(113,113,122,0.1)', color: a.status === 'Active' ? '#10b981' : '#71717a', border: `1px solid ${a.status === 'Active' ? 'rgba(16,185,129,0.2)' : 'rgba(113,113,122,0.2)'}`, padding: '2px 8px', borderRadius: '5px', fontSize: '10px', fontWeight: '800' }}>{a.status}</span>
                  </div>
                  <span style={{ fontSize: '16px', color: '#3f3f46' }}>♡</span>
                </div>

                {/* Logo + name */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {a.logo ? (
                    <img src={a.logo} alt={a.name} width={44} height={44} style={{ borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)', flexShrink: 0, objectFit: 'cover' }} />
                  ) : (
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#1a1f2e', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>🪂</div>
                  )}
                  <div>
                    <h2 style={{ fontSize: '14px', fontWeight: '800', margin: '0 0 2px', color: '#f4f4f5' }}>{a.name}</h2>
                    <span style={{ fontSize: '11px', color: '#52525b', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{a.blockchain}</span>
                  </div>
                </div>

                {/* Description */}
                <p style={{ fontSize: '13px', color: '#52525b', lineHeight: 1.6, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' } as any}>{a.description}</p>

                {/* Stats */}
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div>
                    <div style={{ fontSize: '10px', color: '#3f3f46', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '3px' }}>⚡ DIFFICULTY</div>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: difficultyColor(a.difficulty) }}>{a.difficulty}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '10px', color: '#3f3f46', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '3px' }}>💰 REWARD</div>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: '#10b981' }}>
                      {a.reward_min && a.reward_max ? `$${a.reward_min} - $${a.reward_max}` : a.reward_min ? `$${a.reward_min}+` : 'High'}
                    </div>
                  </div>
                </div>

                {/* Tags */}
                {Array.isArray(a.tags) && a.tags.length > 0 && (
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {a.tags.slice(0, 3).map((tag: string) => (
                      <span key={tag} style={{ background: '#18181b', border: '1px solid #27272a', color: '#71717a', padding: '3px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: '600' }}>{tag}</span>
                    ))}
                  </div>
                )}

                {/* Worth it bar */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ height: '3px', flex: 1, background: '#1a1f2e', borderRadius: '99px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: '97%', background: 'linear-gradient(90deg, #6366f1, #818cf8)', borderRadius: '99px' }} />
                  </div>
                  <span style={{ fontSize: '10px', fontWeight: '800', color: '#818cf8', whiteSpace: 'nowrap' }}>97% WORTH IT</span>
                </div>
              </Link>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer style={{ background: '#060910', borderTop: '1px solid #1a1f2e', padding: '32px 24px', textAlign: 'center' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <p style={{ fontSize: '13px', color: '#3f3f46', margin: '0 0 12px' }}>
              © {new Date().getFullYear()} 3alamiyweb3.online — All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/" style={{ color: '#52525b', textDecoration: 'none', fontSize: '12px' }}>Home</Link>
              <Link href="/about" style={{ color: '#52525b', textDecoration: 'none', fontSize: '12px' }}>About</Link>
              <a href="https://t.me/web33alamiy" style={{ color: '#52525b', textDecoration: 'none', fontSize: '12px' }}>Telegram</a>
              <a href="https://3alamiyweb3.online" style={{ color: '#52525b', textDecoration: 'none', fontSize: '12px' }}>Main Site</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
