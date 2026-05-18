import Link from 'next/link';
import type { Metadata } from 'next';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const metadata: Metadata = {
  title: 'All Crypto Airdrops 2026 — Free Step-by-Step Guides | 3alamiy Web3',
  description: 'Browse 80+ verified crypto airdrops in 2026. Filter by blockchain, difficulty, and cost. Free step-by-step guides for Ethereum, Solana, Arbitrum and more.',
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

  const diffColor = (d: string) =>
    d === 'Easy' ? '#7CF5C0' : d === 'Hard' ? '#f43f5e' : '#FFD264';
  const costColor = (c: string) =>
    c === 'Free' ? '#7CF5C0' : c === 'Paid' ? '#f43f5e' : '#FFD264';

  const blockchains = [...new Set(airdrops.map((a: any) => a.blockchain).filter(Boolean))];
  const activeCount = airdrops.filter((a: any) => a.status === 'Active').length;
  const freeCount = airdrops.filter((a: any) => a.cost === 'Free').length;

  const featuredChains = ['Ethereum', 'Solana', 'Arbitrum', 'Base', 'ZKSync', 'Monad'];

  return (
    <>
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

      <style>{`
        .al * { box-sizing: border-box; }
        .al {
          min-height: 100vh;
          background: #080C14;
          font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif;
          color: #D8DAE5;
        }

        /* ── Hero ── */
        .al-hero {
          position: relative;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding: 44px 28px 0;
        }
        .al-hero-glow {
          position: absolute; top: 0; left: 0; right: 0; height: 300px;
          background: radial-gradient(ellipse 60% 50% at 20% 0%, rgba(124,245,192,0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .al-hero-inner { max-width: 1200px; margin: 0 auto; position: relative; }

        /* Breadcrumb */
        .al-bc {
          display: flex; align-items: center; gap: 6px;
          font-size: 11px; font-weight: 500; color: rgba(255,255,255,0.28);
          margin-bottom: 28px;
        }
        .al-bc a { color: rgba(255,255,255,0.38); text-decoration: none; transition: color 0.15s; }
        .al-bc a:hover { color: rgba(255,255,255,0.65); }
        .al-bc-cur { color: #7CF5C0; }

        /* Hero top row */
        .al-hero-top {
          display: flex; align-items: flex-end; justify-content: space-between;
          flex-wrap: wrap; gap: 20px; margin-bottom: 28px;
        }
        .al-eyebrow {
          font-size: 10px; font-weight: 600; text-transform: uppercase;
          letter-spacing: 0.1em; color: rgba(255,255,255,0.25); margin: 0 0 8px;
        }
        .al-h1 {
          font-weight: 700; font-size: 34px; letter-spacing: -0.03em;
          color: #fff; line-height: 1.1; margin: 0 0 8px;
        }
        .al-h1 em { font-style: normal; color: #7CF5C0; }
        .al-hero-sub { font-size: 13.5px; color: rgba(255,255,255,0.35); font-weight: 400; margin: 0; }

        /* Stats */
        .al-stats { display: flex; gap: 28px; flex-wrap: wrap; }
        .al-stat { text-align: right; }
        .al-stat-val {
          font-weight: 700; font-size: 22px; letter-spacing: -0.03em;
          color: #fff; line-height: 1; margin-bottom: 3px;
        }
        .al-stat-val.green { color: #7CF5C0; }
        .al-stat-lbl {
          font-size: 9px; font-weight: 600; text-transform: uppercase;
          letter-spacing: 0.09em; color: rgba(255,255,255,0.22);
        }

        /* Filter bar */
        .al-filters {
          display: flex; gap: 6px; flex-wrap: wrap;
          padding: 16px 0 0;
        }
        .al-pill {
          background: transparent; border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.35); padding: 6px 15px; border-radius: 100px;
          font-size: 11px; font-weight: 600; letter-spacing: 0.01em;
          text-decoration: none; white-space: nowrap;
          font-family: var(--font-space), system-ui, sans-serif;
          transition: all 0.15s; cursor: pointer;
        }
        .al-pill:hover { border-color: rgba(255,255,255,0.15); color: rgba(255,255,255,0.65); }
        .al-pill.on {
          background: rgba(124,245,192,0.08); border-color: rgba(124,245,192,0.22);
          color: #7CF5C0;
        }

        /* ── Main grid ── */
        .al-main { max-width: 1200px; margin: 0 auto; padding: 28px 28px 80px; }

        .al-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;
        }

        /* ── Card ── */
        .al-card {
          background: #0D1221; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px; padding: 18px; text-decoration: none; color: #D8DAE5;
          display: flex; flex-direction: column; gap: 13px;
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
          position: relative; overflow: hidden;
        }
        .al-card::after {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(124,245,192,0) 50%, transparent);
          transition: background 0.3s;
        }
        .al-card:hover {
          border-color: rgba(124,245,192,0.15);
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.25);
        }
        .al-card:hover::after {
          background: linear-gradient(90deg, transparent, rgba(124,245,192,0.3) 50%, transparent);
        }

        /* Card — top badges */
        .al-card-top { display: flex; align-items: center; justify-content: space-between; }
        .al-badges { display: flex; gap: 5px; }
        .al-badge {
          font-size: 9px; font-weight: 700; letter-spacing: 0.05em;
          text-transform: uppercase; padding: 3px 9px; border-radius: 100px;
        }
        .b-verified { background: rgba(143,168,255,0.08); color: #8FA8FF; border: 1px solid rgba(143,168,255,0.18); }
        .b-active   { background: rgba(124,245,192,0.08); color: #7CF5C0; border: 1px solid rgba(124,245,192,0.18); }
        .b-ended    { background: rgba(100,100,120,0.08); color: #6b7280; border: 1px solid rgba(100,100,120,0.16); }
        .al-save-btn {
          width: 28px; height: 28px; border-radius: 8px;
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: background 0.15s; flex-shrink: 0;
        }
        .al-save-btn:hover { background: rgba(255,255,255,0.06); }
        .al-save-btn svg { width: 12px; height: 12px; }

        /* Card — identity */
        .al-identity { display: flex; align-items: center; gap: 12px; }
        .al-logo {
          width: 44px; height: 44px; border-radius: 12px;
          object-fit: cover; flex-shrink: 0;
          border: 1px solid rgba(255,255,255,0.07);
        }
        .al-logo-fb {
          width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;
          background: linear-gradient(135deg, #111827, #1a2540);
          display: flex; align-items: center; justify-content: center;
          font-weight: 700; font-size: 17px; color: rgba(255,255,255,0.2);
          border: 1px solid rgba(255,255,255,0.06);
        }
        .al-name {
          font-weight: 600; font-size: 14px; letter-spacing: -0.015em;
          color: #fff; margin: 0 0 3px;
          display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden;
        }
        .al-chain {
          font-size: 10px; font-weight: 600; text-transform: uppercase;
          letter-spacing: 0.07em; color: rgba(255,255,255,0.25);
        }

        /* Card — desc */
        .al-desc {
          font-size: 12.5px; color: rgba(255,255,255,0.35); line-height: 1.65;
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
          margin: 0;
        }

        /* Card — meta row */
        .al-meta { display: flex; gap: 0; }
        .al-meta-item {
          flex: 1; display: flex; flex-direction: column; gap: 3px;
          padding-right: 12px; border-right: 1px solid rgba(255,255,255,0.04);
        }
        .al-meta-item:last-child { border-right: none; padding-right: 0; padding-left: 12px; flex: none; }
        .al-meta-item:first-child { padding-left: 0; }
        .al-meta-lbl {
          font-size: 9px; font-weight: 600; text-transform: uppercase;
          letter-spacing: 0.09em; color: rgba(255,255,255,0.22);
        }
        .al-meta-val { font-size: 12px; font-weight: 600; letter-spacing: -0.01em; }

        /* Card — tags */
        .al-tags { display: flex; gap: 5px; flex-wrap: wrap; }
        .al-tag {
          background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06);
          color: rgba(255,255,255,0.3); padding: 3px 9px; border-radius: 7px;
          font-size: 10px; font-weight: 500;
        }

        /* Card — footer */
        .al-card-foot {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.04);
          margin-top: auto;
        }
        .al-cta {
          display: flex; align-items: center; gap: 5px;
          font-size: 12px; font-weight: 600; color: #7CF5C0;
          letter-spacing: -0.01em;
        }
        .al-cta svg { transition: transform 0.15s; }
        .al-card:hover .al-cta svg { transform: translateX(3px); }
        .al-steps-badge {
          font-size: 10px; font-weight: 600; color: rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);
          padding: 3px 9px; border-radius: 7px;
        }

        /* Empty */
        .al-empty {
          grid-column: 1/-1; text-align: center; padding: 64px 24px;
          color: rgba(255,255,255,0.2); font-size: 14px;
        }

        /* Responsive */
        @media (max-width: 1024px) { .al-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) {
          .al-hero { padding: 32px 16px 0; }
          .al-main { padding: 20px 16px 60px; }
          .al-grid { grid-template-columns: 1fr; }
          .al-hero-top { flex-direction: column; align-items: flex-start; }
          .al-stats { gap: 16px; }
          .al-stat { text-align: left; }
          .al-h1 { font-size: 26px; }
        }
      `}</style>

      <div className="al">

        {/* Hero */}
        <section className="al-hero">
          <div className="al-hero-glow" />
          <div className="al-hero-inner">

            {/* Breadcrumb */}
            <nav className="al-bc">
              <Link href="/">Home</Link>
              <span>›</span>
              <span className="al-bc-cur">Airdrops</span>
            </nav>

            <div className="al-hero-top">
              <div>
                <p className="al-eyebrow">Verified Guides</p>
                <h1 className="al-h1">All Crypto <em>Airdrops</em></h1>
                <p className="al-hero-sub">{airdrops.length}+ verified airdrops with step-by-step guides. Updated daily.</p>
              </div>
              <div className="al-stats">
                {[
                  { val: `${airdrops.length}+`, lbl: 'Total', green: false },
                  { val: `${activeCount}`, lbl: 'Active', green: true },
                  { val: `${freeCount}`, lbl: 'Free', green: true },
                  { val: `${blockchains.length}`, lbl: 'Chains', green: false },
                ].map(s => (
                  <div key={s.lbl} className="al-stat">
                    <div className={`al-stat-val${s.green ? ' green' : ''}`}>{s.val}</div>
                    <div className="al-stat-lbl">{s.lbl}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Filters */}
            <div className="al-filters">
              <Link href="/airdrops" className="al-pill on">All</Link>
              <Link href="/airdrops?cost=free" className="al-pill">Free</Link>
              <Link href="/airdrops?difficulty=easy" className="al-pill">Easy</Link>
              {featuredChains.map(chain => (
                <Link key={chain} href={`/airdrops?blockchain=${chain.toLowerCase()}`} className="al-pill">{chain}</Link>
              ))}
            </div>

          </div>
        </section>

        {/* Cards */}
        <div className="al-main">
          <div className="al-grid">
            {airdrops.length === 0 ? (
              <div className="al-empty">No airdrops found.</div>
            ) : airdrops.map((a: any) => {
              const steps = Array.isArray(a.guide_steps) ? a.guide_steps : Array.isArray(a.guideSteps) ? a.guideSteps : [];
              const reward = a.reward_min && a.reward_max
                ? `$${a.reward_min}–$${a.reward_max}`
                : a.reward_min ? `$${a.reward_min}+` : 'TBA';
              const tags: string[] = Array.isArray(a.tags) ? a.tags : [];

              return (
                <Link key={a.slug} href={`/airdrops/${a.slug}`} className="al-card">

                  {/* Top */}
                  <div className="al-card-top">
                    <div className="al-badges">
                      <span className="al-badge b-verified">Verified</span>
                      <span className={`al-badge ${a.status === 'Active' ? 'b-active' : 'b-ended'}`}>{a.status}</span>
                    </div>
                    <div className="al-save-btn" onClick={e => e.preventDefault()}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Identity */}
                  <div className="al-identity">
                    {a.logo
                      ? <img src={a.logo} alt={a.name} className="al-logo" width={44} height={44} />
                      : <div className="al-logo-fb">{a.name?.[0]}</div>
                    }
                    <div style={{ minWidth: 0 }}>
                      <h2 className="al-name">{a.name}</h2>
                      <span className="al-chain">{a.blockchain}</span>
                    </div>
                  </div>

                  {/* Desc */}
                  <p className="al-desc">{a.description}</p>

                  {/* Meta */}
                  <div className="al-meta">
                    <div className="al-meta-item">
                      <span className="al-meta-lbl">Difficulty</span>
                      <span className="al-meta-val" style={{ color: diffColor(a.difficulty) }}>{a.difficulty}</span>
                    </div>
                    <div className="al-meta-item">
                      <span className="al-meta-lbl">Cost</span>
                      <span className="al-meta-val" style={{ color: costColor(a.cost) }}>{a.cost}</span>
                    </div>
                    <div className="al-meta-item">
                      <span className="al-meta-lbl">Reward</span>
                      <span className="al-meta-val" style={{ color: '#7CF5C0' }}>{reward}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  {tags.length > 0 && (
                    <div className="al-tags">
                      {tags.slice(0, 3).map((tag: string) => (
                        <span key={tag} className="al-tag">{tag}</span>
                      ))}
                    </div>
                  )}

                  {/* Footer */}
                  <div className="al-card-foot">
                    <span className="al-cta">
                      View Guide
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </span>
                    {steps.length > 0 && (
                      <span className="al-steps-badge">{steps.length} steps</span>
                    )}
                  </div>

                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
