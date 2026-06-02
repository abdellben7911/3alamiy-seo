'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

const diffColor = (d: string) => d === 'Easy' ? '#7CF5C0' : d === 'Hard' ? '#f43f5e' : '#FFD264';
const costColor = (c: string) => c === 'Free' ? '#7CF5C0' : c === 'Paid' ? '#f43f5e' : '#FFD264';

function timeLabel(steps: any[]): string {
  const n = steps?.length || 0;
  if (n <= 3) return '5 min';
  if (n <= 6) return '10 min';
  if (n <= 10) return '15 min';
  if (n <= 15) return '20 min';
  return '30 min';
}

const FILTERS = [
  { label: 'All', key: 'all' },
  { label: '🟢 Active', key: 'active' },
  { label: 'Free', key: 'free' },
  { label: 'Easy', key: 'easy' },
  { label: 'Medium', key: 'medium' },
  { label: 'Confirmed Drop', key: 'confirmed' },
  { label: 'Ended', key: 'ended' },
];

export default function AirdropsClient({ airdrops }: { airdrops: any[] }) {
  const [active, setActive] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    let result = airdrops;

    // Search
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter((a: any) =>
        a.name?.toLowerCase().includes(q) ||
        a.blockchain?.toLowerCase().includes(q) ||
        a.category?.toLowerCase().includes(q) ||
        (Array.isArray(a.tags) && a.tags.some((t: string) => t.toLowerCase().includes(q)))
      );
    }

    // Filter
    switch (active) {
      case 'active': return result.filter((a: any) => a.status === 'Active');
      case 'free': return result.filter((a: any) => a.cost === 'Free');
      case 'easy': return result.filter((a: any) => a.difficulty === 'Easy');
      case 'medium': return result.filter((a: any) => a.difficulty === 'Medium');
      case 'confirmed': return result.filter((a: any) =>
        Array.isArray(a.tags) && a.tags.some((t: string) => t.toLowerCase().includes('confirmed'))
      );
      case 'ended': return result.filter((a: any) => a.status === 'Ended' || a.status === 'Claim');
      default: return result;
    }
  }, [airdrops, active, search]);

  const counts: Record<string, number> = {
    all: airdrops.length,
    active: airdrops.filter((a: any) => a.status === 'Active').length,
    free: airdrops.filter((a: any) => a.cost === 'Free').length,
    easy: airdrops.filter((a: any) => a.difficulty === 'Easy').length,
    medium: airdrops.filter((a: any) => a.difficulty === 'Medium').length,
    confirmed: airdrops.filter((a: any) => Array.isArray(a.tags) && a.tags.some((t: string) => t.toLowerCase().includes('confirmed'))).length,
    ended: airdrops.filter((a: any) => a.status === 'Ended' || a.status === 'Claim').length,
  };

  return (
    <>
      <style>{`
        .ac * { box-sizing: border-box; }

        /* Filter bar */
        .ac-filter-bar {
          display: flex; align-items: center; justify-content: space-between;
          gap: 12px; margin-bottom: 20px; flex-wrap: wrap;
        }
        .ac-pills { display: flex; gap: 6px; flex-wrap: wrap; }
        .ac-pill {
          background: transparent; border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.35); padding: 7px 14px; border-radius: 99px;
          font-size: 12px; font-weight: 600; letter-spacing: 0.01em;
          cursor: pointer; display: flex; align-items: center; gap: 5px;
          font-family: var(--font-space), system-ui, sans-serif;
          transition: all 0.15s; white-space: nowrap;
        }
        .ac-pill:hover { border-color: rgba(255,255,255,0.15); color: rgba(255,255,255,0.65); }
        .ac-pill.on { background: rgba(124,245,192,0.08); border-color: rgba(124,245,192,0.22); color: #7CF5C0; }
        .ac-count { font-size: 10px; background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.3); padding: 1px 6px; border-radius: 99px; }
        .ac-pill.on .ac-count { background: rgba(124,245,192,0.15); color: #7CF5C0; }

        /* Search */
        .ac-search {
          display: flex; align-items: center; gap: 8px;
          background: #0D1221; border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px; padding: 7px 14px;
          min-width: 200px;
        }
        .ac-search:focus-within { border-color: rgba(124,245,192,0.2); }
        .ac-search svg { color: rgba(255,255,255,0.2); flex-shrink: 0; }
        .ac-search input {
          background: none; border: none; outline: none; color: #fff;
          font-size: 12px; font-family: var(--font-space), system-ui, sans-serif;
          width: 100%;
        }
        .ac-search input::placeholder { color: rgba(255,255,255,0.2); }

        /* Results header */
        .ac-results-hdr {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 16px; flex-wrap: wrap; gap: 8px;
        }
        .ac-results-title { font-size: 16px; font-weight: 800; color: #fff; display: flex; align-items: center; gap: 8px; }
        .ac-results-count { font-size: 12px; color: rgba(255,255,255,0.25); background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); padding: 3px 10px; border-radius: 99px; }

        /* Grid */
        .ac-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }

        /* Card */
        .ac-card {
          background: #0D1221; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px; padding: 18px; text-decoration: none; color: #D8DAE5;
          display: flex; flex-direction: column; gap: 12px;
          transition: border-color 0.2s, transform 0.15s;
          position: relative; overflow: hidden;
        }
        .ac-card::after { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(124,245,192,0) 50%, transparent); transition: background 0.3s; }
        .ac-card:hover { border-color: rgba(124,245,192,0.2); transform: translateY(-2px); }
        .ac-card:hover::after { background: linear-gradient(90deg, transparent, rgba(124,245,192,0.25) 50%, transparent); }

        /* Card top badges */
        .ac-card-top { display: flex; align-items: center; justify-content: space-between; }
        .ac-badges { display: flex; gap: 5px; align-items: center; }
        .ac-badge { font-size: 9px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; padding: 3px 9px; border-radius: 100px; }
        .b-verified { background: rgba(143,168,255,0.08); color: #8FA8FF; border: 1px solid rgba(143,168,255,0.18); }
        .b-active { background: rgba(124,245,192,0.08); color: #7CF5C0; border: 1px solid rgba(124,245,192,0.18); }
        .b-ended { background: rgba(100,100,120,0.08); color: #6b7280; border: 1px solid rgba(100,100,120,0.16); }
        .b-new { background: rgba(251,191,36,0.1); color: #fbbf24; border: 1px solid rgba(251,191,36,0.2); }
        .ac-rating { font-size: 9px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; padding: 2px 8px; border-radius: 99px; }
        .r-strong { background: rgba(124,245,192,0.08); color: #7CF5C0; border: 1px solid rgba(124,245,192,0.18); }
        .r-normal { background: rgba(251,191,36,0.08); color: #fbbf24; border: 1px solid rgba(251,191,36,0.18); }
        .r-weak { background: rgba(100,100,120,0.08); color: #6b7280; border: 1px solid rgba(100,100,120,0.16); }

        /* Identity */
        .ac-identity { display: flex; align-items: center; gap: 12px; }
        .ac-logo { width: 44px; height: 44px; border-radius: 12px; object-fit: cover; flex-shrink: 0; border: 1px solid rgba(255,255,255,0.07); }
        .ac-logo-fb { width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0; background: linear-gradient(135deg, #111827, #1a2540); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 17px; color: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.06); }
        .ac-name { font-weight: 600; font-size: 14px; letter-spacing: -0.015em; color: #fff; margin: 0 0 3px; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
        .ac-chain { font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.07em; color: rgba(255,255,255,0.25); }

        /* Desc */
        .ac-desc { font-size: 12.5px; color: rgba(255,255,255,0.35); line-height: 1.65; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin: 0; }

        /* Meta */
        .ac-meta { display: flex; gap: 0; background: rgba(255,255,255,0.02); border-radius: 10px; overflow: hidden; }
        .ac-meta-item { flex: 1; display: flex; flex-direction: column; gap: 3px; padding: 10px 12px; border-right: 1px solid rgba(255,255,255,0.04); }
        .ac-meta-item:last-child { border-right: none; }
        .ac-meta-lbl { font-size: 9px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.09em; color: rgba(255,255,255,0.2); }
        .ac-meta-val { font-size: 12px; font-weight: 700; letter-spacing: -0.01em; }

        /* Tags */
        .ac-tags { display: flex; gap: 5px; flex-wrap: wrap; }
        .ac-tag { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); color: rgba(255,255,255,0.3); padding: 3px 9px; border-radius: 7px; font-size: 10px; font-weight: 500; }

        /* Footer */
        .ac-card-foot { display: flex; align-items: center; justify-content: space-between; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.04); margin-top: auto; }
        .ac-cta { display: flex; align-items: center; gap: 5px; font-size: 12px; font-weight: 600; color: #7CF5C0; }
        .ac-steps-badge { font-size: 10px; font-weight: 600; color: rgba(255,255,255,0.25); background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); padding: 3px 9px; border-radius: 7px; }

        /* Empty */
        .ac-empty { grid-column: 1/-1; text-align: center; padding: 64px 24px; color: rgba(255,255,255,0.2); font-size: 14px; }

        @media (max-width: 1024px) { .ac-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) {
          .ac-grid { grid-template-columns: 1fr; }
          .ac-filter-bar { flex-direction: column; align-items: flex-start; }
          .ac-search { width: 100%; }
        }
      `}</style>

      <div className="ac">

        {/* Filter bar */}
        <div className="ac-filter-bar">
          <div className="ac-pills">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                className={`ac-pill${active === f.key ? ' on' : ''}`}
                onClick={() => setActive(f.key)}
              >
                {f.label}
                {counts[f.key] > 0 && <span className="ac-count">{counts[f.key]}</span>}
              </button>
            ))}
          </div>
          <div className="ac-search">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search airdrops..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button onClick={() => setSearch('')} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.3)', cursor: 'pointer', padding: 0, fontSize: 14, lineHeight: 1 }}>×</button>
            )}
          </div>
        </div>

        {/* Results header */}
        <div className="ac-results-hdr">
          <div className="ac-results-title">
            {active === 'all' ? 'All Airdrops' : FILTERS.find(f => f.key === active)?.label}
            <span className="ac-results-count">{filtered.length} found</span>
          </div>
        </div>

        {/* Grid */}
        <div className="ac-grid">
          {filtered.length === 0 ? (
            <div className="ac-empty">
              No airdrops found{search ? ` for "${search}"` : ''}.
              {search && <> <button onClick={() => setSearch('')} style={{ color: '#7CF5C0', background: 'none', border: 'none', cursor: 'pointer', fontSize: 14 }}>Clear search</button></>}
            </div>
          ) : filtered.map((a: any, idx: number) => {
            const steps = Array.isArray(a.guide_steps) ? a.guide_steps : [];
            const reward = a.reward_min && a.reward_max ? `$${a.reward_min}–$${a.reward_max}` : a.reward_min ? `$${a.reward_min}+` : 'TBA';
            const tags: string[] = Array.isArray(a.tags) ? a.tags : [];
            const isNew = idx < 6;
            const rating = a.cost === 'Free' && a.difficulty === 'Easy' ? 'Strong' : a.difficulty === 'Hard' ? 'Weak' : 'Normal';

            return (
              <Link key={a.slug} href={`/airdrops/${a.slug}`} className="ac-card">
                <div className="ac-card-top">
                  <div className="ac-badges">
                    <span className="ac-badge b-verified">Verified</span>
                    <span className={`ac-badge ${a.status === 'Active' ? 'b-active' : 'b-ended'}`}>{a.status}</span>
                    {isNew && <span className="ac-badge b-new">New</span>}
                  </div>
                  <span className={`ac-rating ${rating === 'Strong' ? 'r-strong' : rating === 'Weak' ? 'r-weak' : 'r-normal'}`}>{rating}</span>
                </div>

                <div className="ac-identity">
                  {a.logo
                    ? <img src={a.logo} alt={a.name} className="ac-logo" width={44} height={44} />
                    : <div className="ac-logo-fb">{a.name?.[0]}</div>
                  }
                  <div style={{ minWidth: 0 }}>
                    <h2 className="ac-name">{a.name}</h2>
                    <span className="ac-chain">{a.blockchain}</span>
                  </div>
                </div>

                <p className="ac-desc">{a.description}</p>

                <div className="ac-meta">
                  <div className="ac-meta-item">
                    <span className="ac-meta-lbl">Difficulty</span>
                    <span className="ac-meta-val" style={{ color: diffColor(a.difficulty) }}>{a.difficulty}</span>
                  </div>
                  <div className="ac-meta-item">
                    <span className="ac-meta-lbl">Cost</span>
                    <span className="ac-meta-val" style={{ color: costColor(a.cost) }}>{a.cost}</span>
                  </div>
                  <div className="ac-meta-item">
                    <span className="ac-meta-lbl">Reward</span>
                    <span className="ac-meta-val" style={{ color: '#7CF5C0' }}>{reward}</span>
                  </div>
                </div>

                {tags.length > 0 && (
                  <div className="ac-tags">
                    {tags.slice(0, 3).map((tag: string) => (
                      <span key={tag} className="ac-tag">{tag}</span>
                    ))}
                  </div>
                )}

                <div className="ac-card-foot">
                  <span className="ac-cta">
                    View Guide
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                  {steps.length > 0 && <span className="ac-steps-badge">{steps.length} steps · {timeLabel(steps)}</span>}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
