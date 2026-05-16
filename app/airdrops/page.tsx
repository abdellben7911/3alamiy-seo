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

  const blockchains = [...new Set(airdrops.map((a: any) => a.blockchain).filter(Boolean))];
  const activeCount = airdrops.filter((a: any) => a.status === 'Active').length;
  const freeCount = airdrops.filter((a: any) => a.cost === 'Free').length;

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .page-root { min-height: 100vh; background: #060910; font-family: system-ui, -apple-system, sans-serif; color: #fff; }

        /* Hero */
        .hero { padding: 48px 24px 0; border-bottom: 1px solid #1a1f2e; }
        .hero-inner { max-width: 1200px; margin: 0 auto; }
        .hero-top { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 24px; flex-wrap: wrap; gap: 16px; }
        .stats-row { display: flex; gap: 32px; flex-wrap: wrap; }
        .stat-item { text-align: right; }
        .stat-val { font-size: 22px; font-weight: 900; color: #fff; letter-spacing: -0.02em; }
        .stat-lbl { font-size: 10px; color: #3f3f46; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }

        /* Filter bar */
        .filter-bar { display: flex; gap: 6px; flex-wrap: wrap; padding: 16px 0; overflow-x: auto; }
        .filter-pill { background: transparent; border: 1px solid #1a1f2e; color: #52525b; padding: 6px 14px; border-radius: 99px; font-size: 11px; font-weight: 700; text-decoration: none; transition: all 0.2s; white-space: nowrap; }
        .filter-pill:hover { border-color: #2a2f3e; color: #a1a1aa; }
        .filter-pill.active { background: rgba(99,102,241,0.1); border-color: rgba(99,102,241,0.3); color: #818cf8; }

        /* Main */
        .main { max-width: 1200px; margin: 0 auto; padding: 28px 24px 80px; }

        /* Cards grid */
        .cards-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }

        /* Card */
        .airdrop-card { background: #0d1117; border: 1px solid #1a1f2e; border-radius: 16px; padding: 18px; text-decoration: none; color: #fff; display: flex; flex-direction: column; gap: 14px; transition: all 0.2s; position: relative; overflow: hidden; }
        .airdrop-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(99,102,241,0) 50%, transparent); transition: background 0.3s; }
        .airdrop-card:hover { border-color: rgba(99,102,241,0.25); transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0,0,0,0.3); }
        .airdrop-card:hover::before { background: linear-gradient(90deg, transparent, rgba(99,102,241,0.4) 50%, transparent); }

        /* Card top row */
        .card-top { display: flex; align-items: center; justify-content: space-between; }
        .badge-row { display: flex; gap: 5px; }
        .badge { padding: 2px 8px; border-radius: 5px; font-size: 9px; font-weight: 800; letter-spacing: 0.04em; text-transform: uppercase; }
        .badge-active { background: rgba(16,185,129,0.1); color: #10b981; border: 1px solid rgba(16,185,129,0.2); }
        .badge-inactive { background: rgba(113,113,122,0.1); color: #71717a; border: 1px solid rgba(113,113,122,0.2); }
        .badge-verified { background: rgba(99,102,241,0.1); color: #818cf8; border: 1px solid rgba(99,102,241,0.2); }

        /* Card identity */
        .card-identity { display: flex; align-items: center; gap: 12px; }
        .card-logo { width: 44px; height: 44px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.06); object-fit: cover; flex-shrink: 0; }
        .card-logo-fallback { width: 44px; height: 44px; border-radius: 12px; background: #1a1f2e; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 900; }
        .card-name { font-size: 14px; font-weight: 800; color: #f4f4f5; margin: 0 0 3px; letter-spacing: -0.01em; }
        .card-chain { font-size: 10px; color: #52525b; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; }

        /* Card desc */
        .card-desc { font-size: 12px; color: #52525b; line-height: 1.6; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }

        /* Card meta */
        .card-meta { display: flex; gap: 16px; }
        .meta-item { display: flex; flex-direction: column; gap: 2px; }
        .meta-label { font-size: 9px; color: #3f3f46; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }
        .meta-value { font-size: 12px; font-weight: 800; }

        /* Tags */
        .card-tags { display: flex; gap: 5px; flex-wrap: wrap; }
        .card-tag { background: #060910; border: 1px solid #1a1f2e; color: #3f3f46; padding: 3px 8px; border-radius: 5px; font-size: 10px; font-weight: 600; }

        /* Bottom row */
        .card-bottom { display: flex; align-items: center; justify-content: space-between; margin-top: auto; padding-top: 12px; border-top: 1px solid #0d1117; }
        .card-cta { font-size: 11px; font-weight: 800; color: #818cf8; display: flex; align-items: center; gap: 4px; }
        .worth-bar { display: flex; align-items: center; gap: 6px; }
        .bar-track { height: 2px; width: 48px; background: #1a1f2e; border-radius: 99px; overflow: hidden; }
        .bar-fill { height: 100%; background: linear-gradient(90deg, #6366f1, #818cf8); border-radius: 99px; }
        .bar-label { font-size: 9px; font-weight: 800; color: #52525b; letter-spacing: 0.04em; }

        @media (max-width: 1024px) { .cards-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) {
          .hero { padding: 32px 16px 0; }
          .main { padding: 20px 16px 60px; }
          .cards-grid { grid-template-columns: 1fr; }
          .hero-top { flex-direction: column; align-items: flex-start; }
          .stats-row { gap: 20px; }
          .stat-item { text-align: left; }
        }
      `}</style>

      <div className="page-root">

        {/* Hero */}
        <section className="hero">
          <div className="hero-inner">
            {/* Breadcrumb */}
            <nav style={{ fontSize: '11px', color: '#3f3f46', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Link href="/" style={{ color: '#52525b', textDecoration: 'none' }}>Home</Link>
              <span>›</span>
              <span style={{ color: '#818cf8' }}>Airdrops</span>
            </nav>

            <div className="hero-top">
              <div>
                <p style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#3f3f46', margin: '0 0 10px' }}>Verified Guides</p>
                <h1 style={{ fontSize: '36px', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 8px' }}>
                  All Crypto Airdrops
                </h1>
                <p style={{ fontSize: '14px', color: '#71717a', margin: 0 }}>
                  {airdrops.length}+ verified airdrops with step-by-step guides. Updated daily.
                </p>
              </div>
              <div className="stats-row">
                {[
                  { val: `${airdrops.length}+`, lbl: 'Total' },
                  { val: `${activeCount}`, lbl: 'Active' },
                  { val: `${freeCount}`, lbl: 'Free' },
                  { val: `${blockchains.length}`, lbl: 'Chains' },
                ].map(s => (
                  <div key={s.lbl} className="stat-item">
                    <div className="stat-val">{s.val}</div>
                    <div className="stat-lbl">{s.lbl}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Filter bar */}
            <div className="filter-bar">
              <Link href="/airdrops" className="filter-pill active">All</Link>
              <Link href="/airdrops?cost=free" className="filter-pill">Free</Link>
              <Link href="/airdrops?difficulty=easy" className="filter-pill">Easy</Link>
              {['Ethereum', 'Solana', 'Arbitrum', 'Base', 'ZKSync', 'Monad'].map(chain => (
                <Link key={chain} href={`/airdrops?blockchain=${chain.toLowerCase()}`} className="filter-pill">{chain}</Link>
              ))}
            </div>
          </div>
        </section>

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

        {/* Cards */}
        <div className="main">
          <div className="cards-grid">
            {airdrops.map((a: any) => (
              <Link key={a.slug} href={`/airdrops/${a.slug}`} className="airdrop-card">

                {/* Top */}
                <div className="card-top">
                  <div className="badge-row">
                    <span className="badge badge-verified">Verified</span>
                    <span className={`badge ${a.status === 'Active' ? 'badge-active' : 'badge-inactive'}`}>{a.status}</span>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a1f2e" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </div>

                {/* Identity */}
                <div className="card-identity">
                  {a.logo ? (
                    <img src={a.logo} alt={a.name} className="card-logo" />
                  ) : (
                    <div className="card-logo-fallback" style={{ color: '#52525b' }}>{a.name?.[0]}</div>
                  )}
                  <div>
                    <h2 className="card-name">{a.name}</h2>
                    <span className="card-chain">{a.blockchain}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="card-desc">{a.description}</p>

                {/* Meta */}
                <div className="card-meta">
                  <div className="meta-item">
                    <span className="meta-label">Difficulty</span>
                    <span className="meta-value" style={{ color: difficultyColor(a.difficulty) }}>{a.difficulty}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Cost</span>
                    <span className="meta-value" style={{ color: a.cost === 'Free' ? '#10b981' : '#f59e0b' }}>{a.cost}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Reward</span>
                    <span className="meta-value" style={{ color: '#10b981' }}>
                      {a.reward_min && a.reward_max ? `$${a.reward_min}–$${a.reward_max}` : a.reward_min ? `$${a.reward_min}+` : 'TBA'}
                    </span>
                  </div>
                </div>

                {/* Tags */}
                {Array.isArray(a.tags) && a.tags.length > 0 && (
                  <div className="card-tags">
                    {a.tags.slice(0, 3).map((tag: string) => (
                      <span key={tag} className="card-tag">{tag}</span>
                    ))}
                  </div>
                )}

                {/* Bottom */}
                <div className="card-bottom">
                  <span className="card-cta">
                    View Guide
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                  <div className="worth-bar">
                    <div className="bar-track"><div className="bar-fill" style={{ width: '97%' }} /></div>
                    <span className="bar-label">97% WORTH</span>
                  </div>
                </div>

              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
