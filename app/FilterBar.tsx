'use client';

import { useState } from 'react';
import Link from 'next/link';
import RecommendedForYou, { useLikes } from './RecommendedForYou';

type Airdrop = {
  slug: string;
  name: string;
  description: string;
  status: string;
  difficulty: string;
  cost: string;
  blockchain: string;
  logo: string;
  tags: string[];
  reward_min: number;
  reward_max: number;
};

export default function FilterBar({ airdrops }: { airdrops: Airdrop[] }) {
  const [active, setActive] = useState('All');
  const [search, setSearch] = useState('');
  const { liked, toggleLike } = useLikes();

  const difficultyColor = (d: string) =>
    d === 'Easy' ? '#10b981' : d === 'Hard' ? '#f43f5e' : '#f59e0b';
  const costColor = (c: string) =>
    c === 'Free' ? '#10b981' : c === 'Paid' ? '#f43f5e' : '#f59e0b';
  const rewardLabel = (a: Airdrop) =>
    a.reward_min && a.reward_max ? `$${a.reward_min} - $${a.reward_max}` : a.reward_min ? `$${a.reward_min}+` : 'High';

  const tabs = [
    { label: 'All', count: airdrops.length },
    { label: 'Active', count: airdrops.filter(a => a.status === 'Active').length },
    { label: 'Free', count: airdrops.filter(a => a.cost === 'Free').length },
    { label: 'Easy', count: airdrops.filter(a => a.difficulty === 'Easy').length },
    { label: 'End / Claim', count: airdrops.filter(a => a.status === 'Ended').length },
  ];

  const filtered = airdrops.filter(a => {
    const matchesTab =
      active === 'All'         ? true :
      active === 'Active'      ? a.status === 'Active' :
      active === 'Free'        ? a.cost === 'Free' :
      active === 'Easy'        ? a.difficulty === 'Easy' :
      active === 'End / Claim' ? a.status === 'Ended' : true;

    const q = search.trim().toLowerCase();
    const matchesSearch = q === '' ? true :
      a.name.toLowerCase().includes(q) ||
      a.blockchain?.toLowerCase().includes(q) ||
      a.description?.toLowerCase().includes(q) ||
      (Array.isArray(a.tags) && a.tags.some((t: string) => t.toLowerCase().includes(q)));

    return matchesTab && matchesSearch;
  });

  const newlyAdded = filtered.slice(0, 6);
  const isAll = active === 'All' && search.trim() === '';

  return (
    <div>
      <style>{`
        /* ── Filter bar ── */
        .fb-wrap { background:#0D1221; border:1px solid rgba(255,255,255,0.06); border-radius:14px; padding:14px 16px; margin-bottom:32px; display:flex; flex-direction:column; gap:12px; }
        .fb-search-wrap { position:relative; }
        .fb-search-icon { position:absolute; left:12px; top:50%; transform:translateY(-50%); color:rgba(255,255,255,0.2); pointer-events:none; }
        .fb-search { width:100%; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:10px; padding:10px 12px 10px 36px; color:#fff; font-size:13px; outline:none; font-family:var(--font-space),system-ui,sans-serif; transition:border-color 0.15s; }
        .fb-search::placeholder { color:rgba(255,255,255,0.2); }
        .fb-search:focus { border-color:rgba(124,245,192,0.25); }
        .fb-tabs { display:flex; gap:6px; flex-wrap:wrap; }
        .fb-tab { display:flex; align-items:center; gap:6px; background:transparent; border:1px solid rgba(255,255,255,0.08); border-radius:99px; padding:6px 14px; cursor:pointer; transition:all 0.15s; font-family:var(--font-space),system-ui,sans-serif; }
        .fb-tab:hover { border-color:rgba(255,255,255,0.15); }
        .fb-tab.on { background:rgba(124,245,192,0.08); border-color:rgba(124,245,192,0.22); }
        .fb-tab-label { font-size:12px; font-weight:600; color:rgba(255,255,255,0.38); }
        .fb-tab.on .fb-tab-label { color:#7CF5C0; }
        .fb-tab-count { font-size:10px; font-weight:700; color:rgba(255,255,255,0.2); background:rgba(255,255,255,0.05); padding:1px 7px; border-radius:99px; }
        .fb-tab.on .fb-tab-count { color:#7CF5C0; background:rgba(124,245,192,0.12); }

        /* ── Section headers ── */
        .fb-sec-hdr { display:flex; align-items:center; justify-content:space-between; margin-bottom:16px; flex-wrap:wrap; gap:8px; }
        .fb-sec-title { font-size:16px; font-weight:700; color:#fff; margin:0; letter-spacing:-0.02em; display:flex; align-items:center; gap:8px; }
        .fb-sec-dot { width:6px; height:6px; border-radius:50%; background:#7CF5C0; box-shadow:0 0 6px rgba(124,245,192,0.5); flex-shrink:0; }
        .fb-sec-sub { font-size:12px; color:rgba(255,255,255,0.25); margin:3px 0 0; }
        .fb-view-all { font-size:12px; font-weight:700; color:#7CF5C0; text-decoration:none; display:flex; align-items:center; gap:4px; transition:gap 0.15s; white-space:nowrap; }
        .fb-view-all:hover { gap:8px; }

        /* ── Big card ── */
        .fb-grid-big { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; margin-bottom:48px; }
        .fb-big { background:#0D1221; border:1px solid rgba(255,255,255,0.06); border-radius:16px; padding:18px; text-decoration:none; color:#fff; display:flex; flex-direction:column; gap:11px; transition:border-color 0.18s,transform 0.18s,box-shadow 0.18s; }
        .fb-big:hover { border-color:rgba(124,245,192,0.2); transform:translateY(-2px); box-shadow:0 8px 32px rgba(0,0,0,0.25); }
        .fb-big-top { display:flex; align-items:center; justify-content:space-between; }
        .fb-big-badges { display:flex; gap:5px; flex-wrap:wrap; }
        .fb-bb { font-size:9px; font-weight:700; letter-spacing:0.05em; text-transform:uppercase; padding:2px 8px; border-radius:5px; }
        .fb-bb-brand { background:rgba(124,245,192,0.08); color:#7CF5C0; border:1px solid rgba(124,245,192,0.18); }
        .fb-bb-new { background:rgba(99,102,241,0.08); color:#818cf8; border:1px solid rgba(99,102,241,0.18); }
        .fb-bb-active { background:rgba(124,245,192,0.06); color:#7CF5C0; border:1px solid rgba(124,245,192,0.14); }
        .fb-bb-ended { background:rgba(100,100,120,0.08); color:#6b7280; border:1px solid rgba(100,100,120,0.18); }
        .fb-like { width:28px; height:28px; border-radius:7px; border:1px solid rgba(255,255,255,0.08); background:transparent; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:all 0.15s; flex-shrink:0; }
        .fb-like:hover { background:rgba(244,63,94,0.08); border-color:rgba(244,63,94,0.25); }
        .fb-like-on { background:rgba(244,63,94,0.08); border-color:rgba(244,63,94,0.25); }
        .fb-big-id { display:flex; align-items:center; gap:10px; }
        .fb-logo { width:40px; height:40px; border-radius:10px; border:1px solid rgba(255,255,255,0.07); object-fit:cover; flex-shrink:0; }
        .fb-logo-fb { width:40px; height:40px; border-radius:10px; background:#1a2540; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:15px; font-weight:700; color:rgba(255,255,255,0.2); }
        .fb-big-name { font-size:14px; font-weight:700; color:#fff; margin:0 0 2px; letter-spacing:-0.01em; }
        .fb-big-chain { font-size:10px; color:rgba(255,255,255,0.25); font-weight:600; text-transform:uppercase; letter-spacing:0.07em; }
        .fb-big-desc { font-size:12px; color:rgba(255,255,255,0.32); line-height:1.65; overflow:hidden; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; margin:0; flex:1; }
        .fb-big-meta { display:flex; gap:16px; }
        .fb-meta-lbl { font-size:9px; color:rgba(255,255,255,0.22); font-weight:700; text-transform:uppercase; letter-spacing:0.07em; margin-bottom:3px; }
        .fb-meta-val { font-size:12px; font-weight:700; }
        .fb-big-tags { display:flex; gap:5px; flex-wrap:wrap; }
        .fb-tag { background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.07); color:rgba(255,255,255,0.28); padding:2px 8px; border-radius:6px; font-size:10px; font-weight:600; }

        /* ── Small card ── */
        .fb-grid-small { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; }
        .fb-small { background:#0D1221; border:1px solid rgba(255,255,255,0.06); border-radius:12px; padding:14px; text-decoration:none; color:#fff; display:flex; gap:10px; align-items:center; transition:border-color 0.15s,transform 0.15s; }
        .fb-small:hover { border-color:rgba(124,245,192,0.18); transform:translateY(-1px); }
        .fb-sm-logo { width:36px; height:36px; border-radius:9px; border:1px solid rgba(255,255,255,0.07); object-fit:cover; flex-shrink:0; }
        .fb-sm-logo-fb { width:36px; height:36px; border-radius:9px; background:#1a2540; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:13px; font-weight:700; color:rgba(255,255,255,0.2); }
        .fb-sm-body { flex:1; min-width:0; }
        .fb-sm-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:5px; gap:4px; }
        .fb-sm-name { font-size:13px; font-weight:700; color:#fff; margin:0; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .fb-sm-status { font-size:9px; font-weight:700; padding:1px 6px; border-radius:99px; flex-shrink:0; }
        .fb-sm-pills { display:flex; gap:4px; flex-wrap:wrap; }
        .fb-pill { font-size:10px; font-weight:600; padding:1px 6px; border-radius:4px; }

        /* ── Empty state ── */
        .fb-empty { text-align:center; padding:48px 24px; color:rgba(255,255,255,0.25); font-size:14px; }

        /* ── Mobile ── */
        @media (max-width:900px) {
          .fb-grid-big { grid-template-columns:repeat(2,1fr); }
          .fb-grid-small { grid-template-columns:repeat(2,1fr); }
        }
        @media (max-width:560px) {
          .fb-grid-big { grid-template-columns:1fr; }
          .fb-grid-small { grid-template-columns:1fr; }
          .fb-tabs { display:grid; grid-template-columns:repeat(2,1fr); }
          .fb-tab { justify-content:center; }
        }
      `}</style>

      {/* Filter bar */}
      <div className="fb-wrap">
        <div className="fb-search-wrap">
          <span className="fb-search-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          </span>
          <input className="fb-search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name, chain, or category..." />
        </div>
        <div className="fb-tabs">
          {tabs.map(tab => (
            <button key={tab.label} className={`fb-tab${active === tab.label ? ' on' : ''}`} onClick={() => setActive(tab.label)}>
              <span className="fb-tab-label">{tab.label}</span>
              <span className="fb-tab-count">{tab.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Recommended — only on All tab */}
      {isAll && <RecommendedForYou airdrops={airdrops} />}

      {/* Newly Added — only on All tab */}
      {isAll && newlyAdded.length > 0 && (
        <section style={{ marginBottom: '48px' }}>
          <div className="fb-sec-hdr">
            <div>
              <div className="fb-sec-title">
                <span className="fb-sec-dot" />
                Newly Added
              </div>
              <div className="fb-sec-sub">{newlyAdded.length} fresh airdrops</div>
            </div>
            <Link href="/airdrops" className="fb-view-all">View all →</Link>
          </div>
          <div className="fb-grid-big">
            {newlyAdded.map((a, idx) => (
              <Link key={a.slug} href={`/airdrops/${a.slug}`} className="fb-big">
                <div className="fb-big-top">
                  <div className="fb-big-badges">
                    <span className="fb-bb fb-bb-brand">3alamiy</span>
                    <span className="fb-bb fb-bb-new">New</span>
                  </div>
                  <button className={`fb-like${liked[a.slug] ? ' fb-like-on' : ''}`}
                    onClick={e => { e.preventDefault(); toggleLike(a.slug, a); }}>
                    <svg width="12" height="12" viewBox="0 0 24 24"
                      fill={liked[a.slug] ? '#f87171' : 'none'}
                      stroke={liked[a.slug] ? '#f87171' : 'rgba(255,255,255,0.35)'}
                      strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  </button>
                </div>
                <div className="fb-big-id">
                  {a.logo ? <img src={a.logo} alt={a.name} width={40} height={40} className="fb-logo" /> : <div className="fb-logo-fb">{a.name?.[0]}</div>}
                  <div>
                    <div className="fb-big-name">{a.name}</div>
                    <div className="fb-big-chain">{a.blockchain}</div>
                  </div>
                </div>
                <p className="fb-big-desc">{a.description}</p>
                <div className="fb-big-meta">
                  <div>
                    <div className="fb-meta-lbl">Difficulty</div>
                    <div className="fb-meta-val" style={{ color: difficultyColor(a.difficulty) }}>{a.difficulty}</div>
                  </div>
                  <div>
                    <div className="fb-meta-lbl">Reward</div>
                    <div className="fb-meta-val" style={{ color: '#7CF5C0' }}>{rewardLabel(a)}</div>
                  </div>
                </div>
                {Array.isArray(a.tags) && a.tags.length > 0 && (
                  <div className="fb-big-tags">
                    {a.tags.slice(0, 3).map(tag => <span key={tag} className="fb-tag">{tag}</span>)}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Filtered results */}
      <section>
        <div className="fb-sec-hdr">
          <div>
            <div className="fb-sec-title">
              {active === 'All' ? 'All Airdrops' :
               active === 'Active' ? 'Active Airdrops' :
               active === 'Free' ? 'Free Airdrops' :
               active === 'Easy' ? 'Easy Airdrops' : 'Ended / Claim'}
            </div>
            <div className="fb-sec-sub">{filtered.length} airdrops found</div>
          </div>
        </div>
        {filtered.length === 0 ? (
          <div className="fb-empty">No airdrops found for "{search}"</div>
        ) : (
          <div className="fb-grid-small">
            {filtered
              .filter(a => active === 'End / Claim' ? a.status === 'Ended' : a.status !== 'Ended')
              .slice(0, isAll ? 18 : filtered.length)
              .map(a => (
                <Link key={a.slug} href={`/airdrops/${a.slug}`} className="fb-small">
                  {a.logo ? <img src={a.logo} alt={a.name} width={36} height={36} className="fb-sm-logo" /> : <div className="fb-sm-logo-fb">{a.name?.[0]}</div>}
                  <div className="fb-sm-body">
                    <div className="fb-sm-top">
                      <span className="fb-sm-name">{a.name}</span>
                      <span className="fb-sm-status" style={{
                        background: a.status === 'Active' ? 'rgba(124,245,192,0.08)' : 'rgba(100,100,120,0.08)',
                        color: a.status === 'Active' ? '#7CF5C0' : '#6b7280',
                        border: `1px solid ${a.status === 'Active' ? 'rgba(124,245,192,0.18)' : 'rgba(100,100,120,0.18)'}`,
                      }}>{a.status}</span>
                    </div>
                    <div className="fb-sm-pills">
                      <span className="fb-pill" style={{ color: costColor(a.cost), background: `${costColor(a.cost)}14` }}>{a.cost}</span>
                      <span className="fb-pill" style={{ color: difficultyColor(a.difficulty), background: `${difficultyColor(a.difficulty)}14` }}>{a.difficulty}</span>
                      {a.blockchain && <span className="fb-pill" style={{ color: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.04)' }}>{a.blockchain}</span>}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        )}
      </section>
    </div>
  );
}
