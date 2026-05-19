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
    { label: 'All',        icon: '⚡', count: airdrops.length },
    { label: 'Free',       icon: '★',  count: airdrops.filter(a => a.cost === 'Free').length },
    { label: 'Paid',       icon: '🗂', count: airdrops.filter(a => a.cost !== 'Free' && a.cost !== 'Ended').length },
    { label: 'End / Claim',icon: '✦',  count: airdrops.filter(a => a.status === 'Ended').length },
  ];

  const filtered = airdrops.filter(a => {
    const matchesTab =
      active === 'All'        ? true :
      active === 'Free'       ? a.cost === 'Free' :
      active === 'Paid'       ? (a.cost !== 'Free' && a.status !== 'Ended') :
      active === 'End / Claim'? a.status === 'Ended' : true;

    const q = search.trim().toLowerCase();
    const matchesSearch = q === '' ? true :
      a.name.toLowerCase().includes(q) ||
      a.blockchain?.toLowerCase().includes(q) ||
      a.description?.toLowerCase().includes(q) ||
      (Array.isArray(a.tags) && a.tags.some((t: string) => t.toLowerCase().includes(q)));

    return matchesTab && matchesSearch;
  });

  const featured   = filtered.filter(a => a.reward_min >= 500).slice(0, 6);
  const newlyAdded = filtered.slice(0, 6);
  const isAll      = active === 'All' && search.trim() === '';

  const BigCard = ({ a }: { a: Airdrop }) => (
    <Link href={`/airdrops/${a.slug}`} style={{
      background: '#0d1117', border: '1px solid #1a1f2e', borderRadius: '16px',
      padding: '20px', cursor: 'pointer', textDecoration: 'none', color: '#fff',
      display: 'flex', flexDirection: 'column', gap: '14px', transition: 'all 0.22s ease',
    }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(99,102,241,0.4)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#1a1f2e'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          <span style={{ background: 'rgba(99,102,241,0.15)', color: '#818cf8', border: '1px solid rgba(99,102,241,0.2)', padding: '2px 8px', borderRadius: '5px', fontSize: '10px', fontWeight: '800' }}>3ALAMIY</span>
          <span style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981', border: '1px solid rgba(16,185,129,0.2)', padding: '2px 8px', borderRadius: '5px', fontSize: '10px', fontWeight: '800' }}>✦ NEW</span>
        </div>
        <button onClick={(e) => { e.preventDefault(); toggleLike(a.slug, a); }} style={{
          background: liked[a.slug] ? 'rgba(239,68,68,0.1)' : 'transparent',
          border: `1px solid ${liked[a.slug] ? 'rgba(239,68,68,0.3)' : '#27272a'}`,
          borderRadius: '8px', width: '32px', height: '32px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', transition: 'all 0.2s',
        }}>
          {liked[a.slug] ? '❤️' : '🤍'}
        </button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {a.logo
          ? <img src={a.logo} alt={a.name} width={44} height={44} style={{ borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)', flexShrink: 0, objectFit: 'cover' }} />
          : <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#1a1f2e', flexShrink: 0 }} />
        }
        <div>
          <h3 style={{ fontSize: '15px', fontWeight: '800', margin: '0 0 2px', color: '#f4f4f5' }}>{a.name}</h3>
          <span style={{ fontSize: '11px', color: '#52525b', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{a.blockchain}</span>
        </div>
      </div>
      <p style={{ fontSize: '13px', color: '#52525b', lineHeight: 1.6, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', margin: 0 } as any}>{a.description}</p>
      <div style={{ display: 'flex', gap: '24px' }}>
        <div>
          <div style={{ fontSize: '10px', color: '#3f3f46', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '3px' }}>⚡ DIFFICULTY</div>
          <div style={{ fontSize: '13px', fontWeight: '700', color: difficultyColor(a.difficulty) }}>{a.difficulty}</div>
        </div>
        <div>
          <div style={{ fontSize: '10px', color: '#3f3f46', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '3px' }}>💰 REWARD</div>
          <div style={{ fontSize: '13px', fontWeight: '700', color: '#10b981' }}>{rewardLabel(a)}</div>
        </div>
      </div>
      {Array.isArray(a.tags) && a.tags.length > 0 && (
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {a.tags.slice(0, 3).map((tag: string) => (
            <span key={tag} style={{ background: '#18181b', border: '1px solid #27272a', color: '#71717a', padding: '3px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: '600' }}>{tag}</span>
          ))}
        </div>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ height: '3px', flex: 1, background: '#1a1f2e', borderRadius: '99px', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: '97%', background: 'linear-gradient(90deg, #6366f1, #818cf8)', borderRadius: '99px' }} />
        </div>
        <span style={{ fontSize: '10px', fontWeight: '800', color: '#818cf8', whiteSpace: 'nowrap' }}>97% WORTH IT</span>
      </div>
    </Link>
  );

  const SmallCard = ({ a }: { a: Airdrop }) => (
    <Link href={`/airdrops/${a.slug}`} style={{
      background: '#0d1117', border: '1px solid #1a1f2e', borderRadius: '14px',
      padding: '14px 16px', textDecoration: 'none', color: '#fff',
      display: 'flex', gap: '12px', alignItems: 'center', transition: 'all 0.2s',
    }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(99,102,241,0.3)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#1a1f2e'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
    >
      {a.logo
        ? <img src={a.logo} alt={a.name} width={38} height={38} style={{ borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)', flexShrink: 0, objectFit: 'cover' }} />
        : <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#1a1f2e', flexShrink: 0 }} />
      }
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
          <h3 style={{ fontSize: '13px', fontWeight: '700', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '130px' }}>{a.name}</h3>
          <span style={{
            background: a.status === 'Active' ? 'rgba(16,185,129,0.1)' : 'rgba(113,113,122,0.1)',
            color: a.status === 'Active' ? '#10b981' : '#71717a',
            padding: '1px 6px', borderRadius: '99px', fontSize: '9px', fontWeight: '700',
            border: `1px solid ${a.status === 'Active' ? 'rgba(16,185,129,0.2)' : 'rgba(113,113,122,0.2)'}`,
            flexShrink: 0, marginLeft: '4px',
          }}>{a.status}</span>
        </div>
        <div style={{ display: 'flex', gap: '4px' }}>
          <span style={{ fontSize: '10px', fontWeight: '700', color: costColor(a.cost), background: `${costColor(a.cost)}12`, padding: '1px 5px', borderRadius: '4px' }}>{a.cost}</span>
          <span style={{ fontSize: '10px', fontWeight: '700', color: difficultyColor(a.difficulty), background: `${difficultyColor(a.difficulty)}12`, padding: '1px 5px', borderRadius: '4px' }}>{a.difficulty}</span>
          {a.blockchain && <span style={{ fontSize: '10px', fontWeight: '700', color: '#818cf8', background: 'rgba(99,102,241,0.08)', padding: '1px 5px', borderRadius: '4px' }}>{a.blockchain}</span>}
        </div>
      </div>
    </Link>
  );

  return (
    <div>
      <style>{`
        .filter-bar-wrap { flex-direction: row; }
        .filter-tabs { flex-wrap: wrap; }
        @media (max-width: 640px) {
          .filter-bar-wrap { flex-direction: column !important; }
          .filter-tabs { display: grid !important; grid-template-columns: repeat(2, 1fr) !important; }
          .filter-tab-btn { justify-content: center !important; }
        }
      `}</style>

      {/* ── Filter bar ── */}
      <div className="filter-bar-wrap" style={{ background: '#0d1117', border: '1px solid #1a1f2e', borderRadius: '14px', padding: '12px 16px', marginBottom: '32px', display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '180px', position: 'relative' }}>
          <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#52525b', fontSize: '13px' }}>🔍</span>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by name, category or blockchain..."
            style={{ width: '100%', background: '#18181b', border: '1px solid #27272a', borderRadius: '10px', padding: '10px 12px 10px 34px', color: '#e4e4e7', fontSize: '13px', outline: 'none', fontFamily: 'inherit' }}
          />
        </div>
        <div className="filter-tabs" style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', width: '100%' }}>
          {tabs.map((tab) => (
            <button key={tab.label} className="filter-tab-btn" onClick={() => setActive(tab.label)} style={{
              display: 'flex', alignItems: 'center', gap: '7px',
              background: active === tab.label ? 'linear-gradient(135deg, #6366f1, #4f46e5)' : '#18181b',
              border: `1px solid ${active === tab.label ? 'transparent' : '#27272a'}`,
              borderRadius: '10px', padding: '8px 14px', cursor: 'pointer',
              boxShadow: active === tab.label ? '0 4px 12px rgba(99,102,241,0.3)' : 'none',
              transition: 'all 0.2s',
            }}>
              <span style={{ fontSize: '12px' }}>{tab.icon}</span>
              <span style={{ fontSize: '13px', fontWeight: '700', color: active === tab.label ? '#fff' : '#71717a' }}>{tab.label}</span>
              <span style={{ background: active === tab.label ? 'rgba(255,255,255,0.2)' : '#27272a', color: active === tab.label ? '#fff' : '#52525b', fontSize: '11px', fontWeight: '700', padding: '1px 7px', borderRadius: '6px', minWidth: '22px', textAlign: 'center' }}>{tab.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Sections only shown on ALL tab ── */}
      {isAll && (
        <>
          {featured.length > 0 && (
            <section style={{ marginBottom: '48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#fff' }}>⭐ Featured Alpha</h2>
                <Link href="/airdrops" style={{ fontSize: '12px', color: '#818cf8', textDecoration: 'none', fontWeight: '600' }}>View all →</Link>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '12px' }}>
                {featured.map(a => <BigCard key={a.slug} a={a} />)}
              </div>
            </section>
          )}

          {/* ✨ Recommended For You — ONLY on All tab */}
          <RecommendedForYou airdrops={airdrops} />

          <section style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#fff' }}>🆕 Newly Added</h2>
              <Link href="/airdrops" style={{ fontSize: '12px', color: '#818cf8', textDecoration: 'none', fontWeight: '600' }}>View all →</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '12px' }}>
              {newlyAdded.map(a => <BigCard key={a.slug} a={a} />)}
            </div>
          </section>
        </>
      )}

      {/* ── Filtered results (all tabs) ── */}
      <section>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#fff', margin: '0 0 2px' }}>
              {active === 'All' ? '🔥 All Active Airdrops' :
               active === 'Free' ? '★ Free Airdrops' :
               active === 'Paid' ? '🗂 Paid Airdrops' : '✦ Ended / Claim'}
            </h2>
            <p style={{ fontSize: '12px', color: '#475569', margin: 0 }}>{filtered.length} airdrops found</p>
          </div>
          <Link href="/airdrops" style={{ background: '#0d1117', color: '#818cf8', padding: '7px 14px', borderRadius: '9px', textDecoration: 'none', fontSize: '12px', fontWeight: '700', border: '1px solid rgba(99,102,241,0.2)' }}>View All →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '10px' }}>
          {filtered
            .filter(a => active === 'End / Claim' ? a.status === 'Ended' : a.status === 'Active')
            .slice(0, isAll ? 12 : filtered.length)
            .map(a => <SmallCard key={a.slug} a={a} />)}
        </div>
      </section>
    </div>
  );
}
