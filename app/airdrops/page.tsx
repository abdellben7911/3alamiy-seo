import Link from 'next/link';
import type { Metadata } from 'next';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const metadata: Metadata = {
  title: 'All Crypto Airdrops 2026 — Free Step-by-Step Guides | 3alamiy Web3',
  description: 'Browse 94+ verified crypto airdrops in 2026. Filter by blockchain, difficulty, and cost. Free step-by-step guides for Ethereum, Solana, Arbitrum and more.',
  keywords: 'crypto airdrops 2026, free airdrops, ethereum airdrop, solana airdrop, testnet airdrop, airdrop list',
  alternates: { canonical: 'https://www.3alamiyweb3.com/airdrops' },
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
  const easyCount = airdrops.filter((a: any) => a.difficulty === 'Easy').length;
  const featuredAirdrops = airdrops
    .filter((a: any) => a.featured === true && a.status === 'Active')
    .slice(0, 3)
    .concat(
      airdrops
        .filter((a: any) => a.status === 'Active' && a.cost === 'Free')
        .slice(0, 3)
    )
    .filter((a: any, i: number, arr: any[]) => arr.findIndex((x: any) => x.slug === a.slug) === i)
    .slice(0, 3);
  const featuredChains = ['Ethereum', 'Solana', 'Arbitrum', 'Base', 'ZKSync', 'Monad', 'Sui'];

  // Category counts
  const categories = [...new Set(airdrops.map((a: any) => a.category).filter(Boolean))];

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
        .al {
          min-height: 100vh;
          background: #080C14;
          font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif;
          color: #D8DAE5;
        }
        @keyframes pulse { 0%,100%{opacity:1;box-shadow:0 0 6px rgba(124,245,192,0.6);} 50%{opacity:0.4;box-shadow:0 0 12px rgba(124,245,192,0.2);} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(12px);} to{opacity:1;transform:translateY(0);} }

        /* ── HERO ── */
        .al-hero {
          position: relative;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding: 44px 28px 0;
          overflow: hidden;
        }
        .al-hero-glow {
          position: absolute; top: 0; left: 0; right: 0; height: 300px;
          background: radial-gradient(ellipse 60% 50% at 20% 0%, rgba(124,245,192,0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .al-hero-inner { max-width: 1200px; margin: 0 auto; position: relative; }
        .al-bc { display: flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 500; color: rgba(255,255,255,0.28); margin-bottom: 28px; }
        .al-bc a { color: rgba(255,255,255,0.38); text-decoration: none; transition: color 0.15s; }
        .al-bc a:hover { color: rgba(255,255,255,0.65); }
        .al-bc-cur { color: #7CF5C0; }
        .al-hero-top { display: flex; align-items: flex-end; justify-content: space-between; flex-wrap: wrap; gap: 20px; margin-bottom: 28px; }
        .al-eyebrow { font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.25); margin: 0 0 8px; }
        .al-h1 { font-weight: 700; font-size: 34px; letter-spacing: -0.03em; color: #fff; line-height: 1.1; margin: 0 0 8px; }
        .al-h1 em { font-style: normal; color: #7CF5C0; }
        .al-hero-sub { font-size: 13.5px; color: rgba(255,255,255,0.35); font-weight: 400; margin: 0; }

        /* ── STATS BAR ── */
        .al-stats-bar {
          display: grid; grid-template-columns: repeat(5, 1fr);
          border-top: 1px solid rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          background: rgba(255,255,255,0.01);
          margin: 0 -28px;
        }
        .al-stat-item {
          padding: 16px 20px; text-align: center;
          border-right: 1px solid rgba(255,255,255,0.05);
        }
        .al-stat-item:last-child { border-right: none; }
        .al-stat-num { font-size: 22px; font-weight: 900; letter-spacing: -0.04em; line-height: 1; margin-bottom: 3px; }
        .al-stat-lbl { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.09em; color: rgba(255,255,255,0.2); }

        /* ── FILTER TABS ── */
        .al-filter-wrap {
          padding: 16px 0 0;
          display: flex; flex-direction: column; gap: 10px;
        }
        .al-filter-row { display: flex; gap: 6px; flex-wrap: wrap; }
        .al-pill {
          background: transparent; border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.35); padding: 6px 14px; border-radius: 100px;
          font-size: 11px; font-weight: 600; letter-spacing: 0.01em;
          text-decoration: none; white-space: nowrap;
          font-family: var(--font-space), system-ui, sans-serif;
          transition: all 0.15s; cursor: pointer; display: flex; align-items: center; gap: 5px;
        }
        .al-pill:hover { border-color: rgba(255,255,255,0.15); color: rgba(255,255,255,0.65); }
        .al-pill.on { background: rgba(124,245,192,0.08); border-color: rgba(124,245,192,0.22); color: #7CF5C0; }
        .al-pill-count {
          background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.3);
          font-size: 9px; font-weight: 800; padding: 1px 6px; border-radius: 99px;
        }
        .al-pill.on .al-pill-count { background: rgba(124,245,192,0.15); color: #7CF5C0; }

        /* ── MAIN ── */
        .al-main { max-width: 1200px; margin: 0 auto; padding: 28px 28px 80px; }

        /* ── WHAT'S NEW STRIP ── */
        .al-whats-new {
          background: rgba(124,245,192,0.03); border: 1px solid rgba(124,245,192,0.1);
          border-radius: 14px; padding: 14px 18px; margin-bottom: 24px;
          display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
        }
        .al-wn-label {
          display: flex; align-items: center; gap: 6px;
          font-size: 10px; font-weight: 800; text-transform: uppercase;
          letter-spacing: 0.08em; color: #7CF5C0; flex-shrink: 0;
        }
        .al-wn-dot { width: 5px; height: 5px; border-radius: 50%; background: #7CF5C0; animation: pulse 1.8s infinite; }
        .al-wn-items { display: flex; gap: 8px; flex-wrap: wrap; flex: 1; }
        .al-wn-item {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 8px; padding: 4px 10px;
          font-size: 11px; color: rgba(255,255,255,0.4); font-weight: 500;
          text-decoration: none; transition: border-color 0.15s;
        }
        .al-wn-item:hover { border-color: rgba(124,245,192,0.2); color: rgba(255,255,255,0.7); }
        .al-wn-item strong { color: rgba(255,255,255,0.7); }

        /* ── FEATURED ── */
        .al-feat-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; margin-bottom: 32px; }
        .al-feat-card {
          background: linear-gradient(135deg,#0D1A14,#0C1628);
          border: 1px solid rgba(124,245,192,0.2); border-radius: 16px;
          padding: 20px; text-decoration: none; color: #fff;
          display: flex; flex-direction: column; gap: 10px;
          position: relative; overflow: hidden;
          transition: border-color 0.15s, transform 0.15s;
        }
        .al-feat-card:hover { border-color: rgba(124,245,192,0.4); transform: translateY(-2px); }
        .al-feat-card::before { content:''; position:absolute; top:0; left:0; right:0; height:1px; background: linear-gradient(90deg,transparent,rgba(124,245,192,0.4) 50%,transparent); }
        .al-feat-lbl { position:absolute; top:12px; right:12px; background:rgba(124,245,192,0.1); border:1px solid rgba(124,245,192,0.2); color:#7CF5C0; font-size:9px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; padding:3px 9px; border-radius:99px; }
        .al-feat-id { display:flex; align-items:center; gap:12px; padding-right:80px; }
        .al-feat-logo { width:42px; height:42px; border-radius:12px; object-fit:cover; border:1px solid rgba(255,255,255,0.1); flex-shrink:0; }
        .al-feat-logo-fb { width:42px; height:42px; border-radius:12px; flex-shrink:0; background:linear-gradient(135deg,#111827,#1a2540); display:flex; align-items:center; justify-content:center; font-weight:700; font-size:16px; color:rgba(255,255,255,0.2); border:1px solid rgba(255,255,255,0.07); }
        .al-feat-name { font-weight:600; font-size:14px; letter-spacing:-0.01em; color:#fff; margin-bottom:2px; }
        .al-feat-chain { font-size:10px; font-weight:600; text-transform:uppercase; letter-spacing:0.07em; color:rgba(255,255,255,0.3); }
        .al-feat-desc { font-size:12px; color:rgba(255,255,255,0.35); line-height:1.65; margin:0; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
        .al-feat-pills { display:flex; gap:6px; flex-wrap:wrap; }
        .al-feat-pill { font-size:10px; font-weight:600; padding:3px 10px; border-radius:99px; }
        .al-feat-foot { display:flex; align-items:center; justify-content:space-between; padding-top:10px; border-top:1px solid rgba(255,255,255,0.06); margin-top:auto; }
        .al-feat-cta { font-size:12px; font-weight:600; color:#7CF5C0; display:flex; align-items:center; gap:4px; }
        .al-feat-time { font-size:10px; color:rgba(255,255,255,0.25); font-weight:500; }
        .al-feat-hdr { display:flex; align-items:center; justify-content:space-between; margin-bottom:14px; flex-wrap:wrap; gap:8px; }
        .al-feat-hdr-title { font-weight:700; font-size:17px; letter-spacing:-0.02em; color:#fff; display:flex; align-items:center; gap:8px; }
        .al-feat-hdr-sub { font-size:11px; color:rgba(255,255,255,0.28); margin-top:2px; }
        .al-feat-hdr-btn { font-size:11px; color:#7CF5C0; font-weight:600; text-decoration:none; background:rgba(124,245,192,0.07); border:1px solid rgba(124,245,192,0.18); padding:6px 13px; border-radius:8px; white-space:nowrap; }

        /* ── ALL AIRDROPS HEADER ── */
        .al-list-hdr {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 16px; flex-wrap: wrap; gap: 12px;
        }
        .al-list-title { font-size: 17px; font-weight: 800; letter-spacing: -0.02em; color: #fff; display: flex; align-items: center; gap: 8px; }
        .al-list-count { font-size: 12px; color: rgba(255,255,255,0.25); background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); padding: 3px 10px; border-radius: 99px; }
        .al-sort-btn { font-size: 11px; color: rgba(255,255,255,0.35); background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); padding: 7px 14px; border-radius: 8px; cursor: pointer; font-family: inherit; display: flex; align-items: center; gap: 5px; transition: all 0.15s; }
        .al-sort-btn:hover { background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.6); }

        /* ── GRID ── */
        .al-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }

        /* ── CARD ── */
        .al-card {
          background: #0D1221; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px; padding: 18px; text-decoration: none; color: #D8DAE5;
          display: flex; flex-direction: column; gap: 13px;
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
          position: relative; overflow: hidden;
          animation: fadeUp 0.4s ease both;
        }
        .al-card::after {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(124,245,192,0) 50%, transparent);
          transition: background 0.3s;
        }
        .al-card:hover { border-color: rgba(124,245,192,0.18); transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0,0,0,0.3); }
        .al-card:hover::after { background: linear-gradient(90deg, transparent, rgba(124,245,192,0.25) 50%, transparent); }

        /* Card top */
        .al-card-top { display: flex; align-items: center; justify-content: space-between; }
        .al-badges { display: flex; gap: 5px; align-items: center; }
        .al-badge { font-size: 9px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; padding: 3px 9px; border-radius: 100px; }
        .b-verified { background: rgba(143,168,255,0.08); color: #8FA8FF; border: 1px solid rgba(143,168,255,0.18); }
        .b-active   { background: rgba(124,245,192,0.08); color: #7CF5C0; border: 1px solid rgba(124,245,192,0.18); }
        .b-ended    { background: rgba(100,100,120,0.08); color: #6b7280; border: 1px solid rgba(100,100,120,0.16); }
        .b-new      { background: rgba(251,191,36,0.1); color: #fbbf24; border: 1px solid rgba(251,191,36,0.2); }
        .al-save-btn { width: 28px; height: 28px; border-radius: 8px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background 0.15s; flex-shrink: 0; }
        .al-save-btn:hover { background: rgba(255,255,255,0.06); }
        .al-save-btn svg { width: 12px; height: 12px; }

        /* Identity */
        .al-identity { display: flex; align-items: center; gap: 12px; }
        .al-logo { width: 44px; height: 44px; border-radius: 12px; object-fit: cover; flex-shrink: 0; border: 1px solid rgba(255,255,255,0.07); }
        .al-logo-fb { width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0; background: linear-gradient(135deg, #111827, #1a2540); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 17px; color: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.06); }
        .al-name { font-weight: 600; font-size: 14px; letter-spacing: -0.015em; color: #fff; margin: 0 0 3px; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
        .al-chain { font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.07em; color: rgba(255,255,255,0.25); }

        /* Desc */
        .al-desc { font-size: 12.5px; color: rgba(255,255,255,0.35); line-height: 1.65; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin: 0; }

        /* Meta row */
        .al-meta { display: flex; gap: 0; background: rgba(255,255,255,0.02); border-radius: 10px; overflow: hidden; }
        .al-meta-item { flex: 1; display: flex; flex-direction: column; gap: 3px; padding: 10px 12px; border-right: 1px solid rgba(255,255,255,0.04); }
        .al-meta-item:last-child { border-right: none; }
        .al-meta-lbl { font-size: 9px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.09em; color: rgba(255,255,255,0.2); }
        .al-meta-val { font-size: 12px; font-weight: 700; letter-spacing: -0.01em; }

        /* Tags */
        .al-tags { display: flex; gap: 5px; flex-wrap: wrap; }
        .al-tag { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); color: rgba(255,255,255,0.3); padding: 3px 9px; border-radius: 7px; font-size: 10px; font-weight: 500; }

        /* Footer */
        .al-card-foot { display: flex; align-items: center; justify-content: space-between; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.04); margin-top: auto; }
        .al-cta { display: flex; align-items: center; gap: 5px; font-size: 12px; font-weight: 600; color: #7CF5C0; letter-spacing: -0.01em; }
        .al-cta svg { transition: transform 0.15s; }
        .al-card:hover .al-cta svg { transform: translateX(3px); }
        .al-steps-badge { font-size: 10px; font-weight: 600; color: rgba(255,255,255,0.25); background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); padding: 3px 9px; border-radius: 7px; }

        /* Rating badge */
        .al-rating { font-size: 9px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; padding: 2px 8px; border-radius: 99px; }
        .r-strong { background: rgba(124,245,192,0.08); color: #7CF5C0; border: 1px solid rgba(124,245,192,0.18); }
        .r-normal { background: rgba(251,191,36,0.08); color: #fbbf24; border: 1px solid rgba(251,191,36,0.18); }
        .r-weak   { background: rgba(100,100,120,0.08); color: #6b7280; border: 1px solid rgba(100,100,120,0.16); }

        /* Empty */
        .al-empty { grid-column: 1/-1; text-align: center; padding: 64px 24px; color: rgba(255,255,255,0.2); font-size: 14px; }

        /* Live activity */
        .al-live {
          background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05);
          border-radius: 14px; padding: 14px 20px; margin-bottom: 24px;
          display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
        }
        .al-live-label { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: rgba(255,255,255,0.3); display: flex; align-items: center; gap: 6px; flex-shrink: 0; }
        .al-live-dot { width: 5px; height: 5px; border-radius: 50%; background: #f43f5e; animation: pulse 1.5s infinite; }
        .al-live-stat { font-size: 12px; color: rgba(255,255,255,0.4); display: flex; align-items: center; gap: 5px; }
        .al-live-stat strong { color: #fff; font-weight: 700; }

        /* Responsive */
        @media (max-width: 1024px) { .al-grid { grid-template-columns: repeat(2, 1fr); } .al-stats-bar { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 768px) { .al-feat-grid { grid-template-columns: 1fr; } }
        @media (max-width: 640px) {
          .al-hero { padding: 32px 16px 0; }
          .al-main { padding: 20px 16px 60px; }
          .al-grid { grid-template-columns: 1fr; }
          .al-stats-bar { grid-template-columns: repeat(2, 1fr); margin: 0 -16px; }
          .al-h1 { font-size: 26px; }
          .al-hero-top { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <div className="al">

        {/* ── HERO ── */}
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
                { num: blockchains.length, label: 'Blockchains', color: '#f59e0b' },
              ].map((s, i) => (
                <div key={s.label} className="al-stat-item">
                  <div className="al-stat-num" style={{ color: s.color }}>{s.num}+</div>
                  <div className="al-stat-lbl">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Filters */}
            <div className="al-filter-wrap">
              <div className="al-filter-row">
                <Link href="/airdrops" className="al-pill on">
                  All <span className="al-pill-count">{airdrops.length}</span>
                </Link>
                <Link href="/airdrops?status=active" className="al-pill">
                  🟢 Active <span className="al-pill-count">{activeCount}</span>
                </Link>
                <Link href="/airdrops?cost=free" className="al-pill">
                  Free <span className="al-pill-count">{freeCount}</span>
                </Link>
                <Link href="/airdrops?difficulty=easy" className="al-pill">
                  Easy <span className="al-pill-count">{easyCount}</span>
                </Link>
                <Link href="/airdrops?status=ended" className="al-pill">
                  End / Claim
                </Link>
              </div>
              <div className="al-filter-row">
                {featuredChains.map(chain => (
                  <Link key={chain} href={`/airdrops?blockchain=${chain.toLowerCase()}`} className="al-pill">{chain}</Link>
                ))}
                {categories.slice(0, 5).map((cat: any) => (
                  <Link key={cat} href={`/airdrops?category=${cat.toLowerCase()}`} className="al-pill">{cat}</Link>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── MAIN ── */}
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

          {/* Live Activity */}
          <div className="al-live">
            <div className="al-live-label">
              <span className="al-live-dot" />
              Live
            </div>
            <div className="al-live-stat"><strong>{activeCount}</strong> active airdrops right now</div>
            <div className="al-live-dot" style={{ background: 'rgba(255,255,255,0.1)', animation: 'none' }} />
            <div className="al-live-stat"><strong>{freeCount}</strong> free to join — no investment needed</div>
            <div className="al-live-dot" style={{ background: 'rgba(255,255,255,0.1)', animation: 'none' }} />
            <div className="al-live-stat">Updated <strong>daily</strong> by our team</div>
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
                  return (
                    <Link key={a.slug} href={`/airdrops/${a.slug}`} className="al-feat-card">
                      <span className="al-feat-lbl">{a.featured_label || 'HOT PICK'}</span>
                      <div className="al-feat-id">
                        {a.logo ? <img src={a.logo} alt={a.name} className="al-feat-logo" width={42} height={42} /> : <div className="al-feat-logo-fb">{a.name?.[0]}</div>}
                        <div>
                          <div className="al-feat-name">{a.name}</div>
                          <div className="al-feat-chain">{a.blockchain}</div>
                        </div>
                      </div>
                      <p className="al-feat-desc">{a.description}</p>
                      <div className="al-feat-pills">
                        <span className="al-feat-pill" style={{ color: diffColor(a.difficulty), background: `${diffColor(a.difficulty)}12`, border: `1px solid ${diffColor(a.difficulty)}25` }}>{a.difficulty}</span>
                        <span className="al-feat-pill" style={{ color: costColor(a.cost), background: `${costColor(a.cost)}12`, border: `1px solid ${costColor(a.cost)}25` }}>{a.cost}</span>
                        <span className="al-feat-pill" style={{ color:'#7CF5C0', background:'rgba(124,245,192,0.08)', border:'1px solid rgba(124,245,192,0.18)' }}>{reward}</span>
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

          {/* All Airdrops Header */}
          <div className="al-list-hdr">
            <div className="al-list-title">
              All Airdrops
              <span className="al-list-count">{airdrops.length} total</span>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button className="al-sort-btn">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="16" y2="12"/><line x1="3" y1="18" x2="11" y2="18"/></svg>
                Newest First
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="al-grid">
            {airdrops.length === 0 ? (
              <div className="al-empty">No airdrops found.</div>
            ) : airdrops.map((a: any, idx: number) => {
              const steps = Array.isArray(a.guide_steps) ? a.guide_steps : Array.isArray(a.guideSteps) ? a.guideSteps : [];
              const reward = a.reward_min && a.reward_max ? `$${a.reward_min}–$${a.reward_max}` : a.reward_min ? `$${a.reward_min}+` : 'TBA';
              const tags: string[] = Array.isArray(a.tags) ? a.tags : [];
              const isNew = idx < 6;

              // Simple rating based on cost and difficulty
              const rating = a.cost === 'Free' && a.difficulty === 'Easy' ? 'Strong' : a.difficulty === 'Hard' ? 'Weak' : 'Normal';

              return (
                <Link key={a.slug} href={`/airdrops/${a.slug}`} className="al-card" style={{ animationDelay: `${Math.min(idx * 0.03, 0.3)}s` }}>
                  <div className="al-card-top">
                    <div className="al-badges">
                      <span className="al-badge b-verified">Verified</span>
                      <span className={`al-badge ${a.status === 'Active' ? 'b-active' : 'b-ended'}`}>{a.status}</span>
                      {isNew && <span className="al-badge b-new">New</span>}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span className={`al-rating ${rating === 'Strong' ? 'r-strong' : rating === 'Weak' ? 'r-weak' : 'r-normal'}`}>{rating}</span>
                      <div className="al-save-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                      </div>
                    </div>
                  </div>

                  <div className="al-identity">
                    {a.logo ? <img src={a.logo} alt={a.name} className="al-logo" width={44} height={44} /> : <div className="al-logo-fb">{a.name?.[0]}</div>}
                    <div style={{ minWidth: 0 }}>
                      <h2 className="al-name">{a.name}</h2>
                      <span className="al-chain">{a.blockchain}</span>
                    </div>
                  </div>

                  <p className="al-desc">{a.description}</p>

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

                  {tags.length > 0 && (
                    <div className="al-tags">
                      {tags.slice(0, 3).map((tag: string) => (
                        <span key={tag} className="al-tag">{tag}</span>
                      ))}
                    </div>
                  )}

                  <div className="al-card-foot">
                    <span className="al-cta">
                      View Guide
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </span>
                    {steps.length > 0 && <span className="al-steps-badge">{steps.length} steps</span>}
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
