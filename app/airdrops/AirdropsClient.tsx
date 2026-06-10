'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PER_PAGE = 12;

function timeLabel(n: number): string {
  if (n <= 3) return '5 min';
  if (n <= 6) return '10 min';
  if (n <= 10) return '15 min';
  if (n <= 15) return '20 min';
  return '30 min';
}

function seededJoined(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = ((hash << 5) - hash) + slug.charCodeAt(i);
    hash |= 0;
  }
  const base = Math.abs(hash) % 1800 + 200;
  return base;
}

function formatJoined(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return `${n}`;
}

const DIFF_STYLE: Record<string, { color: string; dot: string }> = {
  Easy:   { color: '#7CF5C0', dot: '#7CF5C0' },
  Medium: { color: '#f59e0b', dot: '#f59e0b' },
  Hard:   { color: '#f87171', dot: '#f87171' },
};

const COST_STYLE: Record<string, { color: string }> = {
  Free:   { color: '#7CF5C0' },
  Low:    { color: '#f59e0b' },
  Paid:   { color: '#f87171' },
};

const FILTERS = [
  { label: 'All', key: 'all' },
  { label: 'Active', key: 'active' },
  { label: 'Free', key: 'free' },
  { label: 'Easy', key: 'easy' },
  { label: 'Medium', key: 'medium' },
  { label: 'Confirmed', key: 'confirmed' },
  { label: 'Ended', key: 'ended' },
];

export default function AirdropsClient({ airdrops }: { airdrops: any[] }) {
  const [active, setActive] = useState('all');
  const [chain, setChain] = useState('all');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const chains = useMemo(() => {
    const seen = new Set<string>();
    airdrops.forEach((a: any) => { if (a.blockchain) seen.add(a.blockchain); });
    return ['all', ...Array.from(seen).sort()];
  }, [airdrops]);

  const filtered = useMemo(() => {
    let r = airdrops;
    if (chain !== 'all') {
      r = r.filter((a: any) => a.blockchain === chain);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      r = r.filter((a: any) =>
        a.name?.toLowerCase().includes(q) ||
        a.blockchain?.toLowerCase().includes(q) ||
        a.category?.toLowerCase().includes(q) ||
        (Array.isArray(a.tags) && a.tags.some((t: string) => t.toLowerCase().includes(q)))
      );
    }
    switch (active) {
      case 'active':    return r.filter((a: any) => a.status === 'Active');
      case 'free':      return r.filter((a: any) => a.cost === 'Free');
      case 'easy':      return r.filter((a: any) => a.difficulty === 'Easy');
      case 'medium':    return r.filter((a: any) => a.difficulty === 'Medium');
      case 'confirmed': return r.filter((a: any) => Array.isArray(a.tags) && a.tags.some((t: string) => t.toLowerCase().includes('confirmed')));
      case 'ended':     return r.filter((a: any) => a.status === 'Ended' || a.status === 'Claim');
      default:          return r;
    }
  }, [airdrops, active, chain, search]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const counts: Record<string, number> = {
    all:       airdrops.length,
    active:    airdrops.filter((a: any) => a.status === 'Active').length,
    free:      airdrops.filter((a: any) => a.cost === 'Free').length,
    easy:      airdrops.filter((a: any) => a.difficulty === 'Easy').length,
    medium:    airdrops.filter((a: any) => a.difficulty === 'Medium').length,
    confirmed: airdrops.filter((a: any) => Array.isArray(a.tags) && a.tags.some((t: string) => t.toLowerCase().includes('confirmed'))).length,
    ended:     airdrops.filter((a: any) => a.status === 'Ended' || a.status === 'Claim').length,
  };

  const go = (p: number) => { setPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const setFilter = (k: string) => { setActive(k); setPage(1); };
  const setChainFilter = (c: string) => { setChain(c); setPage(1); };
  const setQ = (v: string) => { setSearch(v); setPage(1); };

  const pageRange = () => {
    const d = 2, range: number[] = [];
    for (let i = Math.max(1, page - d); i <= Math.min(totalPages, page + d); i++) range.push(i);
    return range;
  };

  return (
    <>
      <style>{`
        .ac2 * { box-sizing: border-box; }

        /* ── TOOLBAR ── */
        .ac2-toolbar {
          display: flex; align-items: center; justify-content: space-between;
          gap: 12px; margin-bottom: 24px; flex-wrap: wrap;
        }
        .ac2-pills { display: flex; gap: 5px; flex-wrap: wrap; }
        .ac2-pill {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 6px 13px; border-radius: 99px;
          border: 1px solid rgba(255,255,255,0.07);
          background: transparent;
          color: rgba(255,255,255,0.3);
          font-size: 12px; font-weight: 600;
          cursor: pointer; white-space: nowrap;
          font-family: var(--font-space), system-ui, sans-serif;
          transition: all 0.2s;
        }
        .ac2-pill:hover { color: rgba(255,255,255,0.7); border-color: rgba(255,255,255,0.15); }
        .ac2-pill.on {
          background: rgba(124,245,192,0.1);
          border-color: rgba(124,245,192,0.3);
          color: #7CF5C0;
        }
        .ac2-pill-n {
          font-size: 9px; font-weight: 700;
          background: rgba(255,255,255,0.06);
          color: rgba(255,255,255,0.25);
          padding: 1px 5px; border-radius: 99px;
        }
        .ac2-pill.on .ac2-pill-n { background: rgba(124,245,192,0.15); color: #7CF5C0; }

        /* Search */
        .ac2-search {
          display: flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px; padding: 8px 14px;
          min-width: 220px; transition: border-color 0.2s;
        }
        .ac2-search:focus-within { border-color: rgba(124,245,192,0.25); }
        .ac2-search input {
          background: none; border: none; outline: none;
          color: #fff; font-size: 12px; width: 100%;
          font-family: var(--font-space), system-ui, sans-serif;
        }
        .ac2-search input::placeholder { color: rgba(255,255,255,0.2); }
        .ac2-clear {
          background: none; border: none; color: rgba(255,255,255,0.25);
          cursor: pointer; padding: 0; font-size: 16px; line-height: 1;
          transition: color 0.15s;
        }
        .ac2-clear:hover { color: rgba(255,255,255,0.6); }

        /* Results bar */
        .ac2-bar {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 16px; flex-wrap: wrap; gap: 8px;
        }
        .ac2-bar-left { display: flex; align-items: center; gap: 10px; }
        .ac2-bar-title { font-size: 15px; font-weight: 700; color: #fff; }
        .ac2-bar-count {
          font-size: 11px; color: rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          padding: 2px 9px; border-radius: 99px;
        }
        .ac2-bar-page { font-size: 11px; color: rgba(255,255,255,0.2); }

        /* ── GRID ── */
        .ac2-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 36px;
        }

        /* ── CARD ── */
        .ac2-card {
          background: #0B1120;
          border: 1px solid rgba(255,255,255,0.055);
          border-radius: 18px;
          padding: 0;
          text-decoration: none;
          color: inherit;
          display: flex; flex-direction: column;
          overflow: hidden;
          transition: border-color 0.25s, transform 0.2s, box-shadow 0.25s;
          position: relative;
        }
        .ac2-card:hover {
          border-color: rgba(124,245,192,0.22);
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(124,245,192,0.06);
        }

        /* Card top accent line */
        .ac2-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(124,245,192,0.15) 50%, transparent 100%);
          opacity: 0; transition: opacity 0.25s;
        }
        .ac2-card:hover::before { opacity: 1; }

        /* Card header row */
        .ac2-card-head {
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 16px 0;
        }
        .ac2-status-row { display: flex; align-items: center; gap: 5px; }
        .ac2-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #7CF5C0;
          box-shadow: 0 0 6px rgba(124,245,192,0.8);
          animation: blink 2s ease-in-out infinite;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .ac2-dot.ended { background: #6b7280; box-shadow: none; animation: none; }
        .ac2-status-lbl { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: rgba(255,255,255,0.3); }
        .ac2-rating {
          font-size: 9px; font-weight: 800; text-transform: uppercase;
          letter-spacing: 0.06em; padding: 2px 8px; border-radius: 99px;
        }
        .ac2-rating.strong { background: rgba(124,245,192,0.08); color: #7CF5C0; border: 1px solid rgba(124,245,192,0.18); }
        .ac2-rating.normal { background: rgba(245,158,11,0.08); color: #f59e0b; border: 1px solid rgba(245,158,11,0.18); }
        .ac2-rating.weak   { background: rgba(248,113,113,0.08); color: #f87171; border: 1px solid rgba(248,113,113,0.18); }

        /* Identity */
        .ac2-identity {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 16px 0;
        }
        .ac2-logo {
          width: 46px; height: 46px; border-radius: 13px;
          object-fit: cover; flex-shrink: 0;
          border: 1px solid rgba(255,255,255,0.08);
        }
        .ac2-logo-fb {
          width: 46px; height: 46px; border-radius: 13px;
          flex-shrink: 0; display: flex; align-items: center;
          justify-content: center; font-size: 18px; font-weight: 800;
          color: rgba(255,255,255,0.15);
          background: linear-gradient(135deg, #0f1a2a, #162033);
          border: 1px solid rgba(255,255,255,0.06);
        }
        .ac2-name {
          font-size: 14px; font-weight: 700; color: #fff;
          letter-spacing: -0.01em; margin: 0 0 3px;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .ac2-chain {
          font-size: 9px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.09em; color: rgba(255,255,255,0.22);
        }

        /* Desc */
        .ac2-desc {
          font-size: 12px; color: rgba(255,255,255,0.32);
          line-height: 1.65; margin: 0;
          padding: 10px 16px;
          overflow: hidden;
        }

        /* Meta strip */
        .ac2-meta {
          display: grid; grid-template-columns: repeat(3,1fr);
          margin: 0 16px;
          background: rgba(255,255,255,0.025);
          border-radius: 10px; overflow: hidden;
          border: 1px solid rgba(255,255,255,0.04);
        }
        .ac2-meta-cell {
          padding: 9px 10px;
          display: flex; flex-direction: column; gap: 2px;
          border-right: 1px solid rgba(255,255,255,0.04);
        }
        .ac2-meta-cell:last-child { border-right: none; }
        .ac2-meta-lbl {
          font-size: 8px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.09em; color: rgba(255,255,255,0.18);
        }
        .ac2-meta-val { font-size: 11px; font-weight: 700; }

        /* Tags */
        .ac2-tags {
          display: flex; gap: 5px; flex-wrap: wrap;
          padding: 8px 16px 0;
        }
        .ac2-tag {
          font-size: 9px; font-weight: 600;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          color: rgba(255,255,255,0.28);
          padding: 2px 8px; border-radius: 6px;
        }

        /* Footer */
        .ac2-foot {
          display: flex; align-items: center; justify-content: space-between;
          padding: 12px 16px 14px; margin-top: auto;
          border-top: 1px solid rgba(255,255,255,0.04);
        }
        .ac2-cta {
          display: flex; align-items: center; gap: 5px;
          font-size: 12px; font-weight: 700; color: #7CF5C0;
          letter-spacing: 0.01em;
        }
        .ac2-foot-right {
          display: flex; flex-direction: column; align-items: flex-end; gap: 2px;
        }
        .ac2-joined {
          display: flex; align-items: center; gap: 3px;
          font-size: 10px; font-weight: 600; color: rgba(124,245,192,0.5);
        }
        .ac2-steps {
          font-size: 9px; color: rgba(255,255,255,0.2); font-weight: 500;
        }

        /* Empty */
        .ac2-empty {
          grid-column: 1/-1; text-align: center;
          padding: 72px 24px; color: rgba(255,255,255,0.18);
        }
        .ac2-empty-icon { font-size: 36px; margin-bottom: 12px; }
        .ac2-empty-title { font-size: 16px; font-weight: 700; color: rgba(255,255,255,0.3); margin-bottom: 8px; }
        .ac2-empty-sub { font-size: 13px; }

        /* ── PAGINATION ── */
        .ac2-pag {
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 0; border-top: 1px solid rgba(255,255,255,0.05);
          flex-wrap: wrap; gap: 12px;
        }
        .ac2-pag-info { font-size: 12px; color: rgba(255,255,255,0.2); }
        .ac2-pag-btns { display: flex; gap: 5px; align-items: center; }
        .ac2-pg {
          width: 34px; height: 34px; border-radius: 9px;
          border: 1px solid rgba(255,255,255,0.07);
          background: transparent; color: rgba(255,255,255,0.3);
          font-size: 12px; font-weight: 600; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-space), system-ui, sans-serif;
          transition: all 0.15s;
        }
        .ac2-pg:hover:not(:disabled) { border-color: rgba(124,245,192,0.2); color: #7CF5C0; }
        .ac2-pg.on { background: rgba(124,245,192,0.1); border-color: rgba(124,245,192,0.3); color: #7CF5C0; }
        .ac2-pg:disabled { opacity: 0.25; cursor: not-allowed; }
        .ac2-dots { color: rgba(255,255,255,0.15); font-size: 12px; padding: 0 3px; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) { .ac2-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 640px) {
          .ac2-grid { grid-template-columns: 1fr 1fr; gap: 8px; }
          .ac2-toolbar { flex-direction: column; align-items: flex-start; }
          .ac2-search { width: 100%; min-width: unset; }
          .ac2-pag { flex-direction: column; align-items: center; }
          .ac2-card-head { padding: 12px 12px 0; }
          .ac2-identity { padding: 10px 12px 0; }
          .ac2-desc { padding: 8px 12px; font-size: 11px; }
          .ac2-meta { margin: 0 12px; }
          .ac2-tags { padding: 6px 12px 0; }
          .ac2-foot { padding: 10px 12px 12px; }
          .ac2-logo, .ac2-logo-fb { width: 38px; height: 38px; }
          .ac2-name { font-size: 12px; }
        }
        @media (max-width: 400px) { .ac2-grid { grid-template-columns: 1fr; } }

        /* Chain filter row */
        .ac2-chains {
          display: flex; align-items: center; gap: 6px;
          flex-wrap: wrap; margin-bottom: 20px;
        }
        .ac2-chain-lbl {
          font-size: 10px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.08em; color: rgba(255,255,255,0.2);
          margin-right: 2px; white-space: nowrap;
        }
        .ac2-cpill {
          display: inline-flex; align-items: center; gap: 4px;
          padding: 4px 11px; border-radius: 99px;
          border: 1px solid rgba(255,255,255,0.07);
          background: transparent;
          color: rgba(255,255,255,0.3);
          font-size: 11px; font-weight: 600;
          cursor: pointer; white-space: nowrap;
          font-family: var(--font-space), system-ui, sans-serif;
          transition: all 0.18s;
        }
        .ac2-cpill:hover { color: rgba(255,255,255,0.65); border-color: rgba(255,255,255,0.14); }
        .ac2-cpill.on {
          background: rgba(99,179,237,0.1);
          border-color: rgba(99,179,237,0.28);
          color: #63b3ed;
        }
        .ac2-cpill-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: currentColor; opacity: 0.6;
          flex-shrink: 0;
        }
      `}</style>

      <div className="ac2">

        {/* Toolbar */}
        <div className="ac2-toolbar">
          <div className="ac2-pills">
            {FILTERS.map((f) => (
              <button key={f.key} className={`ac2-pill${active === f.key ? ' on' : ''}`} onClick={() => setFilter(f.key)}>
                {f.label}
                <span className="ac2-pill-n">{counts[f.key]}</span>
              </button>
            ))}
          </div>
          <div className="ac2-search">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input type="text" placeholder="Search airdrops..." value={search} onChange={(e) => setQ(e.target.value)} />
            {search && <button className="ac2-clear" onClick={() => setQ('')}>×</button>}
          </div>
        </div>

        {/* Chain filter */}
        <div className="ac2-chains">
          <span className="ac2-chain-lbl">Chain:</span>
          {chains.map((c) => (
            <button key={c} className={`ac2-cpill${chain === c ? ' on' : ''}`} onClick={() => setChainFilter(c)}>
              {c !== 'all' && <span className="ac2-cpill-dot" />}
              {c === 'all' ? 'All Chains' : c}
            </button>
          ))}
        </div>

        {/* Results bar */}
        <div className="ac2-bar">
          <div className="ac2-bar-left">
            <span className="ac2-bar-title">{active === 'all' ? 'All Airdrops' : FILTERS.find(f => f.key === active)?.label}</span>
            <span className="ac2-bar-count">{filtered.length} found</span>
          </div>
          {totalPages > 1 && <span className="ac2-bar-page">Page {page} of {totalPages}</span>}
        </div>

        {/* Grid */}
        <div className="ac2-grid">
          {paginated.length === 0 ? (
            <div className="ac2-empty">
              <div className="ac2-empty-icon">🔍</div>
              <div className="ac2-empty-title">No airdrops found</div>
              <div className="ac2-empty-sub">
                {search ? `No results for "${search}" — ` : ''}
                <button onClick={() => { setQ(''); setFilter('all'); setChainFilter('all'); }} style={{ color: '#7CF5C0', background: 'none', border: 'none', cursor: 'pointer', fontSize: 'inherit' }}>
                  Clear filters
                </button>
              </div>
            </div>
          ) : paginated.map((a: any) => {
            const steps = Array.isArray(a.guide_steps) ? a.guide_steps : [];
            const reward = a.reward_min && a.reward_max ? `$${a.reward_min}–$${a.reward_max}` : a.reward_min ? `$${a.reward_min}+` : 'TBA';
            const tags: string[] = Array.isArray(a.tags) ? a.tags.slice(0, 3) : [];
            const diff = DIFF_STYLE[a.difficulty] || { color: '#7CF5C0', dot: '#7CF5C0' };
            const cost = COST_STYLE[a.cost] || { color: '#7CF5C0' };
            const isActive = a.status === 'Active';
            const joined = seededJoined(a.slug);
            const isStrong = a.cost === 'Free' && a.difficulty === 'Easy';
            const isWeak = a.difficulty === 'Hard';
            const rating = isStrong ? 'strong' : isWeak ? 'weak' : 'normal';
            const ratingLabel = isStrong ? 'Strong' : isWeak ? 'Weak' : 'Normal';

            return (
              <Link key={a.slug} href={`/airdrops/${a.slug}`} className="ac2-card">

                {/* Head */}
                <div className="ac2-card-head">
                  <div className="ac2-status-row">
                    <span className={`ac2-dot${isActive ? '' : ' ended'}`} />
                    <span className="ac2-status-lbl">{a.status}</span>
                  </div>
                  <span className={`ac2-rating ${rating}`}>{ratingLabel}</span>
                </div>

                {/* Identity */}
                <div className="ac2-identity">
                  {a.logo
                    ? <Image src={a.logo} alt={a.name} className="ac2-logo" width={46} height={46} />
                    : <div className="ac2-logo-fb">{a.name?.[0]}</div>
                  }
                  <div style={{ minWidth: 0 }}>
                    <div className="ac2-name">{a.name}</div>
                    <div className="ac2-chain">{a.blockchain}</div>
                  </div>
                </div>

                {/* Desc */}
                <p className="ac2-desc">{(a.description || '').slice(0, 100)}{(a.description || '').length > 100 ? '...' : ''}</p>

                {/* Meta */}
                <div className="ac2-meta">
                  <div className="ac2-meta-cell">
                    <span className="ac2-meta-lbl">Difficulty</span>
                    <span className="ac2-meta-val" style={{ color: diff.color }}>{a.difficulty}</span>
                  </div>
                  <div className="ac2-meta-cell">
                    <span className="ac2-meta-lbl">Cost</span>
                    <span className="ac2-meta-val" style={{ color: cost.color }}>{a.cost}</span>
                  </div>
                  <div className="ac2-meta-cell">
                    <span className="ac2-meta-lbl">Reward</span>
                    <span className="ac2-meta-val" style={{ color: '#7CF5C0', fontSize: 10 }}>{reward}</span>
                  </div>
                </div>

                {/* Tags */}
                {tags.length > 0 && (
                  <div className="ac2-tags">
                    {tags.map((t: string) => <span key={t} className="ac2-tag">{t}</span>)}
                  </div>
                )}

                {/* Footer */}
                <div className="ac2-foot">
                  <span className="ac2-cta">
                    View Guide
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                  <div className="ac2-foot-right">
                    <span className="ac2-joined">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                      {formatJoined(joined)} joined
                    </span>
                    {steps.length > 0 && (
                      <span className="ac2-steps">{steps.length} steps · {timeLabel(steps.length)}</span>
                    )}
                  </div>
                </div>

              </Link>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="ac2-pag">
            <span className="ac2-pag-info">
              Showing {(page - 1) * PER_PAGE + 1}–{Math.min(page * PER_PAGE, filtered.length)} of {filtered.length}
            </span>
            <div className="ac2-pag-btns">
              <button className="ac2-pg" onClick={() => go(page - 1)} disabled={page === 1}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              {pageRange()[0] > 1 && <>
                <button className="ac2-pg" onClick={() => go(1)}>1</button>
                {pageRange()[0] > 2 && <span className="ac2-dots">···</span>}
              </>}
              {pageRange().map(p => (
                <button key={p} className={`ac2-pg${p === page ? ' on' : ''}`} onClick={() => go(p)}>{p}</button>
              ))}
              {pageRange()[pageRange().length - 1] < totalPages && <>
                {pageRange()[pageRange().length - 1] < totalPages - 1 && <span className="ac2-dots">···</span>}
                <button className="ac2-pg" onClick={() => go(totalPages)}>{totalPages}</button>
              </>}
              <button className="ac2-pg" onClick={() => go(page + 1)} disabled={page === totalPages}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
          </div>
        )}

      </div>
    </>
  );
}
