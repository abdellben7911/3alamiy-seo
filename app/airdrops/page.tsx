import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import AirdropsClient from './AirdropsClient';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const metadata: Metadata = {
  title: '110+ Crypto Airdrops 2026 — Free Step-by-Step Guides | Updated Daily | 3alamiy Web3',
  description: 'Browse 110+ active crypto airdrops in 2026. Every listing includes a full participation guide, wallet requirements, scam warnings, and eligibility criteria. Free, updated daily.',
  keywords: 'crypto airdrops 2026, free crypto airdrops, best airdrops 2026, airdrop tracker, ethereum airdrops, solana airdrops, hyperliquid airdrop, free airdrop list 2026',
  alternates: { canonical: 'https://www.3alamiyweb3.com/airdrops' },
  openGraph: {
    title: '110+ Crypto Airdrops 2026 — Free Step-by-Step Guides | Updated Daily',
    description: 'Browse 110+ active crypto airdrops in 2026. Every listing includes a full participation guide, wallet requirements, scam warnings, and eligibility criteria. Free, updated daily.',
    url: 'https://www.3alamiyweb3.com/airdrops',
    siteName: '3alamiy Web3',
    type: 'website',
  },
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

  const activeCount = airdrops.filter((a: any) => a.status === 'Active').length;
  const freeCount = airdrops.filter((a: any) => a.cost === 'Free').length;
  const easyCount = airdrops.filter((a: any) => a.difficulty === 'Easy').length;

  const featuredAirdrops = airdrops
    .filter((a: any) => a.featured === true && a.status === 'Active')
    .slice(0, 3)
    .concat(airdrops.filter((a: any) => a.status === 'Active' && a.cost === 'Free').slice(0, 3))
    .filter((a: any, i: number, arr: any[]) => arr.findIndex((x: any) => x.slug === a.slug) === i)
    .slice(0, 3);

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
            url: `https://www.3alamiyweb3.com/airdrops/${a.slug}`,
          })),
        })
      }} />

      <style>{`
        .al * { box-sizing: border-box; }
        .al { min-height: 100vh; background: #060A12; font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif; color: #D8DAE5; }
        @keyframes pulse { 0%,100%{opacity:1;box-shadow:0 0 6px rgba(124,245,192,0.6);} 50%{opacity:0.4;box-shadow:0 0 12px rgba(124,245,192,0.2);} }

        /* HERO */
        .al-hero { position: relative; border-bottom: 1px solid rgba(255,255,255,0.05); padding: 44px 28px 0; overflow: hidden; }
        .al-hero-glow { position: absolute; top: 0; left: 0; right: 0; height: 300px; background: radial-gradient(ellipse 60% 50% at 20% 0%, rgba(124,245,192,0.05) 0%, transparent 70%); pointer-events: none; }
        .al-hero-inner { max-width: 1200px; margin: 0 auto; position: relative; }
        .al-bc { display: flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 500; color: rgba(255,255,255,0.28); margin-bottom: 28px; }
        .al-bc a { color: rgba(255,255,255,0.38); text-decoration: none; }
        .al-bc-cur { color: #7CF5C0; }
        .al-hero-top { display: flex; align-items: flex-end; justify-content: space-between; flex-wrap: wrap; gap: 20px; margin-bottom: 28px; }
        .al-eyebrow { font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.25); margin: 0 0 8px; }
        .al-h1 { font-weight: 700; font-size: 34px; letter-spacing: -0.03em; color: #fff; line-height: 1.1; margin: 0 0 8px; }
        .al-h1 em { font-style: normal; color: #7CF5C0; }
        .al-hero-sub { font-size: 13.5px; color: rgba(255,255,255,0.35); font-weight: 400; margin: 0 0 10px; }
        .al-hero-intro { font-size: 13px; color: rgba(255,255,255,0.28); line-height: 1.7; margin: 0; max-width: 560px; }

        /* STATS BAR */
        .al-stats-bar { display: grid; grid-template-columns: repeat(5, 1fr); border-top: 1px solid rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.05); background: rgba(255,255,255,0.01); margin: 0 -28px; }
        .al-stat-item { padding: 16px 20px; text-align: center; border-right: 1px solid rgba(255,255,255,0.05); }
        .al-stat-item:last-child { border-right: none; }
        .al-stat-num { font-size: 22px; font-weight: 900; letter-spacing: -0.04em; line-height: 1; margin-bottom: 3px; }
        .al-stat-lbl { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.09em; color: rgba(255,255,255,0.2); }

        /* MAIN */
        .al-main { max-width: 1200px; margin: 0 auto; padding: 28px 28px 80px; }

        /* WHAT'S NEW */
        .al-whats-new { background: rgba(124,245,192,0.03); border: 1px solid rgba(124,245,192,0.1); border-radius: 14px; padding: 14px 18px; margin-bottom: 24px; display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
        .al-wn-label { display: flex; align-items: center; gap: 6px; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: #7CF5C0; flex-shrink: 0; }
        .al-wn-dot { width: 5px; height: 5px; border-radius: 50%; background: #7CF5C0; animation: pulse 1.8s infinite; }
        .al-wn-items { display: flex; gap: 8px; flex-wrap: wrap; flex: 1; }
        .al-wn-item { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 8px; padding: 4px 10px; font-size: 11px; color: rgba(255,255,255,0.4); font-weight: 500; text-decoration: none; }
        .al-wn-item:hover { border-color: rgba(124,245,192,0.2); color: rgba(255,255,255,0.7); }
        .al-wn-item strong { color: rgba(255,255,255,0.7); }

        /* FEATURED */
        .al-feat-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; margin-bottom: 32px; }
        .al-feat-card {
          background: #0B1120;
          border: 1px solid rgba(124,245,192,0.18);
          border-radius: 18px; padding: 0;
          text-decoration: none; color: #fff;
          display: flex; flex-direction: column;
          overflow: hidden; position: relative;
          min-width: 0; min-height: 0;
          transition: border-color 0.25s, transform 0.2s, box-shadow 0.25s;
        }
        .al-feat-card:hover { border-color: rgba(124,245,192,0.4); transform: translateY(-3px); box-shadow: 0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(124,245,192,0.08); }
        .al-feat-card::before { content:''; position:absolute; top:0; left:0; right:0; height:1px; background: linear-gradient(90deg,transparent,rgba(124,245,192,0.5) 50%,transparent); }
        .al-feat-lbl { position:absolute; top:12px; right:12px; background:rgba(124,245,192,0.12); border:1px solid rgba(124,245,192,0.25); color:#7CF5C0; font-size:9px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; padding:3px 10px; border-radius:99px; }
        .al-feat-id { display:flex; align-items:center; gap:10px; padding: 14px 14px 0 14px; min-width:0; overflow:hidden; }
        .al-feat-logo { width:46px; height:46px; border-radius:13px; object-fit:cover; border:1px solid rgba(255,255,255,0.08); flex-shrink:0; }
        .al-feat-logo-fb { width:46px; height:46px; border-radius:13px; flex-shrink:0; background:linear-gradient(135deg,#0f1a2a,#162033); display:flex; align-items:center; justify-content:center; font-weight:800; font-size:18px; color:rgba(255,255,255,0.15); border:1px solid rgba(255,255,255,0.06); }
        .al-feat-name { font-weight:700; font-size:13px; letter-spacing:-0.01em; color:#fff; margin-bottom:3px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .al-feat-chain { font-size:9px; font-weight:700; text-transform:uppercase; letter-spacing:0.09em; color:rgba(255,255,255,0.22); }
        .al-feat-desc { font-size:12px; color:rgba(255,255,255,0.32); line-height:1.65; margin:0; padding:8px 16px 10px; overflow:hidden; }
        .al-feat-meta { display:grid; grid-template-columns:repeat(3,1fr); margin: 0 16px; background:rgba(255,255,255,0.025); border-radius:10px; overflow:hidden; border:1px solid rgba(255,255,255,0.04); }
        .al-feat-meta-cell { padding:9px 10px; display:flex; flex-direction:column; gap:2px; border-right:1px solid rgba(255,255,255,0.04); }
        .al-feat-meta-cell:last-child { border-right:none; }
        .al-feat-meta-lbl { font-size:8px; font-weight:700; text-transform:uppercase; letter-spacing:0.09em; color:rgba(255,255,255,0.18); }
        .al-feat-meta-val { font-size:11px; font-weight:700; }
        .al-feat-foot { display:flex; align-items:center; justify-content:space-between; padding: 12px 16px 14px; border-top:1px solid rgba(255,255,255,0.04); margin-top:auto; }
        .al-feat-cta { font-size:12px; font-weight:700; color:#7CF5C0; display:flex; align-items:center; gap:5px; }
        .al-feat-time { font-size:9px; color:rgba(255,255,255,0.2); font-weight:500; }
        .al-feat-hdr { display:flex; align-items:center; justify-content:space-between; margin-bottom:14px; flex-wrap:wrap; gap:8px; }
        .al-feat-hdr-title { font-weight:700; font-size:17px; letter-spacing:-0.02em; color:#fff; display:flex; align-items:center; gap:8px; }
        .al-feat-hdr-sub { font-size:11px; color:rgba(255,255,255,0.28); margin-top:2px; }
        .al-feat-hdr-btn { font-size:11px; color:#7CF5C0; font-weight:600; text-decoration:none; background:rgba(124,245,192,0.07); border:1px solid rgba(124,245,192,0.18); padding:6px 13px; border-radius:8px; white-space:nowrap; }
        .al-feat-pills { display:none; }

        /* Responsive */
        @media (max-width: 1024px) { .al-stats-bar { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 768px) { .al-feat-grid { grid-template-columns: 1fr; } }
        @media (max-width: 640px) {
          .al-hero { padding: 32px 16px 0; }
          .al-main { padding: 20px 16px 60px; }
          .al-stats-bar { grid-template-columns: repeat(2, 1fr); margin: 0 -16px; }
          .al-h1 { font-size: 26px; }
          .al-hero-top { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <div className="al">

        {/* HERO */}
        <section className="al-hero">
          <div className="al-hero-glow" />
          <div className="al-hero-inner">
            <nav className="al-bc">
              <Link href="/">Home</Link>
              <span>›</span>
              <span className="al-bc-cur">Airdrops</span>
            </nav>
            <div className="al-hero-top">
              <div>
                <p className="al-eyebrow">Verified Guides · Updated Daily</p>
                <h1 className="al-h1">All Crypto <em>Airdrops</em></h1>
                <p className="al-hero-sub">{airdrops.length}+ verified airdrops with step-by-step guides. Always free.</p>
                <p className="al-hero-intro">
                  Every listing includes wallet setup, chain requirements, eligibility criteria, and scam warnings — not just a name and a link.
                  Covers Ethereum, Solana, Hyperliquid, Base, Sui, Monad, and 30+ more chains. Verified and updated daily.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(124,245,192,0.08)', border: '1px solid rgba(124,245,192,0.2)', color: '#7CF5C0', fontSize: '12px', fontWeight: 700, padding: '9px 16px', borderRadius: '10px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/></svg>
                  Get Alerts
                </a>
                <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)', fontSize: '12px', fontWeight: 700, padding: '9px 16px', borderRadius: '10px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                  + List Project
                </a>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="al-stats-bar">
              {[
                { num: airdrops.length, label: 'Total Projects', color: '#fff' },
                { num: activeCount, label: 'Active Airdrops', color: '#7CF5C0' },
                { num: freeCount, label: 'Free to Join', color: '#7CF5C0' },
                { num: easyCount, label: 'Easy Difficulty', color: '#818cf8' },
                { num: 35, label: 'Blockchains', color: '#f59e0b' },
              ].map((s) => (
                <div key={s.label} className="al-stat-item">
                  <div className="al-stat-num" style={{ color: s.color }}>{s.num}+</div>
                  <div className="al-stat-lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MAIN */}
        <div className="al-main">

          {/* What's New */}
          <div className="al-whats-new">
            <div className="al-wn-label">
              <span className="al-wn-dot" />
              What's New
            </div>
            <div className="al-wn-items">
              {airdrops.slice(0, 4).map((a: any) => (
                <Link key={a.slug} href={`/airdrops/${a.slug}`} className="al-wn-item">
                  <strong>{a.name}</strong> — new airdrop
                </Link>
              ))}
            </div>
          </div>

          {/* Featured */}
          {featuredAirdrops.length > 0 && (
            <div style={{ marginBottom: '32px' }}>
              <div className="al-feat-hdr">
                <div>
                  <div className="al-feat-hdr-title">
                    <span style={{ width:'7px', height:'7px', borderRadius:'50%', background:'#7CF5C0', boxShadow:'0 0 8px rgba(124,245,192,0.6)', display:'inline-block', animation:'pulse 1.8s infinite' }} />
                    Featured Airdrops
                  </div>
                  <div className="al-feat-hdr-sub">Hand-picked high-potential opportunities — updated daily</div>
                </div>
                <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" className="al-feat-hdr-btn">+ List Your Project</a>
              </div>
              <div className="al-feat-grid">
                {featuredAirdrops.map((a: any) => {
                  const steps = Array.isArray(a.guide_steps) ? a.guide_steps : [];
                  const reward = a.reward_min && a.reward_max ? `$${a.reward_min}–$${a.reward_max}` : a.reward_min ? `$${a.reward_min}+` : 'TBA';
                  const diffColor = (d: string) => d === 'Easy' ? '#7CF5C0' : d === 'Hard' ? '#f43f5e' : '#FFD264';
                  const costColor = (c: string) => c === 'Free' ? '#7CF5C0' : c === 'Paid' ? '#f43f5e' : '#FFD264';
                  return (
                    <Link key={a.slug} href={`/airdrops/${a.slug}`} className="al-feat-card">
                      <span className="al-feat-lbl">{a.featured_label || 'HOT PICK'}</span>
                      <div className="al-feat-id">
                        {a.logo ? <Image src={a.logo} alt={a.name} className="al-feat-logo" width={46} height={46} /> : <div className="al-feat-logo-fb">{a.name?.[0]}</div>}
                        <div>
                          <div className="al-feat-name">{a.name}</div>
                          <div className="al-feat-chain">{a.blockchain}</div>
                        </div>
                      </div>
                      <p className="al-feat-desc">{(a.description || '').slice(0, 110)}{(a.description || '').length > 110 ? '...' : ''}</p>
                      <div className="al-feat-meta">
                        <div className="al-feat-meta-cell">
                          <span className="al-feat-meta-lbl">Difficulty</span>
                          <span className="al-feat-meta-val" style={{ color: diffColor(a.difficulty) }}>{a.difficulty}</span>
                        </div>
                        <div className="al-feat-meta-cell">
                          <span className="al-feat-meta-lbl">Cost</span>
                          <span className="al-feat-meta-val" style={{ color: costColor(a.cost) }}>{a.cost}</span>
                        </div>
                        <div className="al-feat-meta-cell">
                          <span className="al-feat-meta-lbl">Reward</span>
                          <span className="al-feat-meta-val" style={{ color: '#7CF5C0', fontSize: 10 }}>{reward}</span>
                        </div>
                      </div>
                      <div className="al-feat-foot">
                        <span className="al-feat-cta">Start Guide <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
                        <span className="al-feat-time">{steps.length} steps · {Math.max(15, steps.length * 3)} min</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Client component handles filters + grid */}
          <AirdropsClient airdrops={airdrops} />

          {/* ── Pro upsell banner ── */}
          <div style={{ margin: '48px 0 8px', background: 'linear-gradient(135deg,rgba(124,245,192,0.06) 0%,rgba(99,102,241,0.04) 100%)', border: '1px solid rgba(124,245,192,0.14)', borderRadius: 20, padding: '28px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', fontFamily: "var(--font-space),'Space Grotesk',system-ui,sans-serif" }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(124,245,192,0.1)', border: '1px solid rgba(124,245,192,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7CF5C0" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: 4 }}>
                  Does your wallet qualify for these airdrops?
                </div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.5 }}>
                  Paste any EVM or Solana address — we scan 9 chains and show your full eligibility report.
                </div>
              </div>
            </div>
            <Link href="/wallet-checker" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#7CF5C0,#4ade80)', color: '#060A12', fontSize: 13, fontWeight: 900, padding: '12px 24px', borderRadius: 12, textDecoration: 'none', whiteSpace: 'nowrap', letterSpacing: '-0.01em', boxShadow: '0 4px 20px rgba(124,245,192,0.25)', flexShrink: 0 }}>
              Check My Wallet
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
