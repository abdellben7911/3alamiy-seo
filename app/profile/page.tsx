'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '../auth/AuthProvider';
import { createClient } from '../auth/supabase';
import DailyCheckIn from './DailyCheckIn';

type Favorite = { airdrop_slug: string; airdrop_name: string; airdrop_blockchain: string; airdrop_tags: string[]; created_at: string; };
type AirdropDetail = { slug: string; name: string; description: string; status: string; difficulty: string; cost: string; blockchain: string; logo: string; tags: string[]; reward_min: number; reward_max: number; };

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export default function ProfilePage() {
  const { user, loading, signOut } = useAuth();
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [airdrops, setAirdrops] = useState<AirdropDetail[]>([]);
  const [loadingFavs, setLoadingFavs] = useState(true);
  const [activeTab, setActiveTab] = useState<'saved' | 'active' | 'free'>('saved');
  const supabase = createClient();

  useEffect(() => {
    if (!user) return;
    supabase.from('favorites').select('*').eq('user_id', user.id).order('created_at', { ascending: false }).then(({ data }) => { if (data) setFavorites(data); });
    fetch(`${SUPABASE_URL}/rest/v1/airdrops?select=*`, { headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` } }).then(r => r.json()).then(data => { setAirdrops(data); setLoadingFavs(false); });
  }, [user]);

  const diffColor = (d: string) => d === 'Easy' ? '#7CF5C0' : d === 'Hard' ? '#f43f5e' : '#FFD264';
  const costColor = (c: string) => c === 'Free' ? '#7CF5C0' : '#f43f5e';
  const rewardLabel = (a: AirdropDetail) => a.reward_min && a.reward_max ? `$${a.reward_min}–$${a.reward_max}` : a.reward_min ? `$${a.reward_min}+` : 'TBA';
  const removeFavorite = async (slug: string) => { await supabase.from('favorites').delete().eq('user_id', user!.id).eq('airdrop_slug', slug); setFavorites(prev => prev.filter(f => f.airdrop_slug !== slug)); };

  const likedAirdrops = favorites.map(fav => airdrops.find(a => a.slug === fav.airdrop_slug)).filter(Boolean) as AirdropDetail[];
  const freeCount = likedAirdrops.filter(a => a.cost === 'Free').length;
  const activeCount = likedAirdrops.filter(a => a.status === 'Active').length;
  const chains = [...new Set(likedAirdrops.map(a => a.blockchain).filter(Boolean))];

  const filteredAirdrops = activeTab === 'active'
    ? likedAirdrops.filter(a => a.status === 'Active')
    : activeTab === 'free'
    ? likedAirdrops.filter(a => a.cost === 'Free')
    : likedAirdrops;

  const initials = user?.email?.[0].toUpperCase() || '?';
  const joinDate = user?.created_at ? new Date(user.created_at).toLocaleDateString('en', { month: 'long', year: 'numeric' }) : '';

  if (loading) return (
    <div style={{ minHeight: '100vh', background: '#080C14', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '32px', height: '32px', border: '2px solid rgba(124,245,192,0.2)', borderTopColor: '#7CF5C0', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );

  if (!user) return (
    <div style={{ minHeight: '100vh', background: '#080C14', fontFamily: 'var(--font-space), system-ui, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ textAlign: 'center', maxWidth: '360px' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '20px', background: 'rgba(124,245,192,0.08)', border: '1px solid rgba(124,245,192,0.15)', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7CF5C0" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </div>
        <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', margin: '0 0 10px', letterSpacing: '-0.025em' }}>Sign in to view your profile</h1>
        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '14px', margin: '0 0 28px', lineHeight: 1.6 }}>Save and track your favorite airdrops in one place</p>
        <Link href="/" style={{ background: '#7CF5C0', color: '#04120A', padding: '13px 28px', borderRadius: '12px', textDecoration: 'none', fontWeight: 700, fontSize: '14px', display: 'inline-block' }}>← Back to Home</Link>
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        html, body { overflow-x: hidden; }

        .pf-root {
          min-height: 100vh;
          background: #080C14;
          font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif;
          color: #fff;
        }

        /* Hero */
        .pf-hero {
          position: relative; overflow: hidden;
          padding: 36px 28px 32px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .pf-hero-bg {
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse 600px 300px at 0% 0%, rgba(124,245,192,0.04) 0%, transparent 70%);
        }
        .pf-hero-inner {
          max-width: 1200px; margin: 0 auto; position: relative;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 20px;
        }
        .pf-avatar {
          width: 56px; height: 56px; border-radius: '16px';
          background: linear-gradient(135deg, #0B1C15, #0D2420);
          border: 1px solid rgba(124,245,192,0.25);
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; font-weight: 700; color: #7CF5C0;
          flex-shrink: 0; border-radius: 16px;
          box-shadow: 0 0 20px rgba(124,245,192,0.08);
        }
        .pf-name { font-size: 20px; font-weight: 700; letter-spacing: -0.02em; color: #fff; margin: 0 0 3px; }
        .pf-email { font-size: 12px; color: rgba(255,255,255,0.28); font-weight: 400; }
        .pf-badge {
          font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;
          color: #7CF5C0; background: rgba(124,245,192,0.08);
          border: 1px solid rgba(124,245,192,0.18);
          padding: 3px 10px; border-radius: 99px; margin-bottom: 6px; display: inline-block;
        }
        .pf-actions { display: flex; gap: 8px; }
        .btn-back {
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.5); padding: 9px 16px; border-radius: 10px;
          text-decoration: none; font-size: 12px; font-weight: 600;
          display: flex; align-items: center; gap: 5px; transition: background 0.15s;
          font-family: inherit;
        }
        .btn-back:hover { background: rgba(255,255,255,0.07); }
        .btn-signout {
          background: rgba(244,63,94,0.06); border: 1px solid rgba(244,63,94,0.18);
          color: #f43f5e; padding: 9px 16px; border-radius: 10px;
          cursor: pointer; font-size: 12px; font-weight: 600; font-family: inherit;
          transition: background 0.15s;
        }
        .btn-signout:hover { background: rgba(244,63,94,0.12); }

        /* Stats */
        .pf-stats {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;
          padding: 20px 28px; border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .pf-stat {
          background: #0D1221; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px; padding: 16px 18px; position: relative; overflow: hidden;
        }
        .pf-stat::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
        }
        .pf-stat.green::before { background: linear-gradient(90deg, #7CF5C0, #34d399); }
        .pf-stat.purple::before { background: linear-gradient(90deg, #818cf8, #6366f1); }
        .pf-stat.amber::before { background: linear-gradient(90deg, #FFD264, #f59e0b); }
        .pf-stat-val { font-size: 24px; font-weight: 700; letter-spacing: -0.03em; margin-bottom: 3px; }
        .pf-stat-lbl { font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: rgba(255,255,255,0.25); }

        /* Layout */
        .pf-layout {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 280px 1fr; gap: 0;
          padding: 0 28px 60px;
        }

        /* Sidebar */
        .pf-sidebar { padding: 24px 20px 0 0; display: flex; flex-direction: column; gap: 14px; }
        .pf-sidebar-card {
          background: #0D1221; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px; padding: 18px;
        }
        .pf-sidebar-title {
          font-size: 9px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.1em; color: rgba(255,255,255,0.25); margin: 0 0 12px;
        }
        .pf-chain-pill {
          background: rgba(124,245,192,0.06); border: 1px solid rgba(124,245,192,0.15);
          color: #7CF5C0; padding: 4px 10px; border-radius: 99px;
          font-size: 11px; font-weight: 600;
        }
        .pf-qlink {
          display: flex; align-items: center; justify-content: space-between;
          padding: 10px 12px; background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05); border-radius: 10px;
          text-decoration: none; color: rgba(255,255,255,0.45);
          font-size: 12px; font-weight: 600; margin-bottom: 6px;
          transition: all 0.15s;
        }
        .pf-qlink:last-child { margin-bottom: 0; }
        .pf-qlink:hover { color: rgba(255,255,255,0.75); border-color: rgba(255,255,255,0.1); background: rgba(255,255,255,0.04); }

        /* Main */
        .pf-main { padding: 24px 0 0 24px; border-left: 1px solid rgba(255,255,255,0.05); }

        /* Tabs */
        .pf-tabs { display: flex; gap: 4px; margin-bottom: 20px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 4px; width: fit-content; }
        .pf-tab {
          padding: 7px 16px; border-radius: 9px; font-size: 12px; font-weight: 600;
          cursor: pointer; border: none; background: transparent; color: rgba(255,255,255,0.35);
          font-family: inherit; transition: all 0.15s; white-space: nowrap;
        }
        .pf-tab.active { background: rgba(124,245,192,0.1); color: #7CF5C0; border: 1px solid rgba(124,245,192,0.2); }
        .pf-tab:hover:not(.active) { color: rgba(255,255,255,0.6); }

        /* Grid */
        .pf-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 10px; }

        /* Airdrop card */
        .pf-card {
          background: #0D1221; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px; padding: 16px; position: relative;
          display: flex; flex-direction: column; gap: 10px;
          transition: border-color 0.15s;
        }
        .pf-card:hover { border-color: rgba(124,245,192,0.15); }
        .pf-card-remove {
          position: absolute; top: 12px; right: 12px;
          width: 24px; height: 24px; border-radius: 7px;
          background: rgba(244,63,94,0.06); border: 1px solid rgba(244,63,94,0.15);
          color: #f43f5e; cursor: pointer; display: flex; align-items: center; justify-content: center;
          transition: background 0.15s; font-family: inherit;
        }
        .pf-card-remove:hover { background: rgba(244,63,94,0.15); }
        .pf-card-id { display: flex; align-items: center; gap: 10px; padding-right: 32px; text-decoration: none; color: #fff; }
        .pf-card-logo { width: 40px; height: 40px; border-radius: 12px; object-fit: cover; border: 1px solid rgba(255,255,255,0.07); flex-shrink: 0; }
        .pf-card-logo-fb { width: 40px; height: 40px; border-radius: 12px; background: rgba(255,255,255,0.04); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 16px; color: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.06); flex-shrink: 0; }
        .pf-card-name { font-size: 13px; font-weight: 600; color: #fff; margin-bottom: 2px; letter-spacing: -0.01em; }
        .pf-card-chain { font-size: 10px; color: rgba(255,255,255,0.28); font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; }
        .pf-card-desc { font-size: 12px; color: rgba(255,255,255,0.32); line-height: 1.65; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .pf-card-meta { display: flex; gap: 6px; flex-wrap: wrap; }
        .pf-pill { font-size: 10px; font-weight: 600; padding: 3px 9px; border-radius: 99px; }
        .pf-card-cta {
          display: flex; align-items: center; justify-content: center; gap: 5px;
          background: rgba(124,245,192,0.06); border: 1px solid rgba(124,245,192,0.15);
          color: #7CF5C0; padding: 9px; border-radius: 10px;
          text-decoration: none; font-size: 12px; font-weight: 600;
          transition: background 0.15s; margin-top: auto;
        }
        .pf-card-cta:hover { background: rgba(124,245,192,0.12); }

        /* Empty */
        .pf-empty { text-align: center; padding: 56px 24px; background: #0D1221; border: 1px solid rgba(255,255,255,0.06); border-radius: 20px; }
        .pf-empty-icon { width: 48px; height: 48px; border-radius: 14px; background: rgba(124,245,192,0.06); border: 1px solid rgba(124,245,192,0.12); margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; }

        /* Section header */
        .pf-section-hdr { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; flex-wrap: wrap; gap: 8px; }
        .pf-section-title { font-size: 16px; font-weight: 700; letter-spacing: -0.015em; color: #fff; }
        .pf-count { font-size: 11px; color: rgba(255,255,255,0.25); background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); padding: 4px 12px; border-radius: 99px; font-weight: 600; }

        /* Responsive */
        @media (max-width: 900px) {
          .pf-layout { grid-template-columns: 1fr; padding: 0 16px 48px; }
          .pf-sidebar { padding: 20px 0 0; }
          .pf-main { padding: 20px 0 0; border-left: none; border-top: 1px solid rgba(255,255,255,0.05); }
          .pf-stats { grid-template-columns: repeat(2,1fr); padding: 16px; }
          .pf-hero { padding: 28px 16px; }
        }
        @media (max-width: 480px) {
          .pf-stats { grid-template-columns: 1fr 1fr; }
          .pf-grid { grid-template-columns: 1fr; }
          .pf-hero-inner { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <div className="pf-root">

        {/* Hero */}
        <div className="pf-hero">
          <div className="pf-hero-bg" />
          <div className="pf-hero-inner">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div className="pf-avatar">{initials}</div>
              <div>
                <span className="pf-badge">🪂 Airdrop Farmer</span>
                <h1 className="pf-name">My Profile</h1>
                <p className="pf-email">{user.email} {joinDate && `· Joined ${joinDate}`}</p>
              </div>
            </div>
            <div className="pf-actions">
              <Link href="/" className="btn-back">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
                Back
              </Link>
              <button onClick={signOut} className="btn-signout">Sign Out</button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="pf-stats">
          <div className="pf-stat green">
            <div className="pf-stat-val" style={{ color: '#7CF5C0' }}>{favorites.length}</div>
            <div className="pf-stat-lbl">Saved Airdrops</div>
          </div>
          <div className="pf-stat green">
            <div className="pf-stat-val" style={{ color: '#7CF5C0' }}>{activeCount}</div>
            <div className="pf-stat-lbl">Active</div>
          </div>
          <div className="pf-stat amber">
            <div className="pf-stat-val" style={{ color: '#FFD264' }}>{freeCount}</div>
            <div className="pf-stat-lbl">Free Airdrops</div>
          </div>
          <div className="pf-stat purple">
            <div className="pf-stat-val" style={{ color: '#818cf8' }}>{chains.length}</div>
            <div className="pf-stat-lbl">Blockchains</div>
          </div>
        </div>

        {/* Layout */}
        <div className="pf-layout">

          {/* Sidebar */}
          <div className="pf-sidebar">
            <DailyCheckIn userId={user.id} />

            {chains.length > 0 && (
              <div className="pf-sidebar-card">
                <p className="pf-sidebar-title">Blockchain Interests</p>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {chains.map(c => <span key={c} className="pf-chain-pill">{c}</span>)}
                </div>
              </div>
            )}

            <div className="pf-sidebar-card">
              <p className="pf-sidebar-title">Quick Links</p>
              {[
                { label: '🪂 Browse Airdrops', href: '/airdrops' },
                { label: '👋 GM Station', href: '/gm' },
                { label: '📚 Learn Guides', href: '/learn' },
                { label: '💬 Telegram', href: 'https://t.me/web33alamiy' },
              ].map(l => (
                <Link key={l.href} href={l.href} className="pf-qlink">
                  {l.label}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              ))}
            </div>

            {/* Tip card */}
            <div style={{ background: 'linear-gradient(135deg, #0B1C15, #0C1A13)', border: '1px solid rgba(124,245,192,0.12)', borderRadius: '16px', padding: '18px' }}>
              <p style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#7CF5C0', margin: '0 0 8px' }}>💡 Pro Tip</p>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.38)', lineHeight: 1.7, margin: 0 }}>
                Farm 5-10 airdrops simultaneously for 20 min/day. Consistency beats volume every time.
              </p>
            </div>
          </div>

          {/* Main */}
          <div className="pf-main">
            <div className="pf-section-hdr">
              <h2 className="pf-section-title">Saved Airdrops</h2>
              <span className="pf-count">{filteredAirdrops.length} airdrops</span>
            </div>

            {/* Tabs */}
            <div className="pf-tabs">
              {[
                { key: 'saved', label: `All (${favorites.length})` },
                { key: 'active', label: `Active (${activeCount})` },
                { key: 'free', label: `Free (${freeCount})` },
              ].map(t => (
                <button
                  key={t.key}
                  className={`pf-tab ${activeTab === t.key ? 'active' : ''}`}
                  onClick={() => setActiveTab(t.key as any)}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {loadingFavs ? (
              <div style={{ textAlign: 'center', padding: '56px', color: 'rgba(255,255,255,0.2)', fontSize: '13px' }}>Loading your airdrops...</div>
            ) : filteredAirdrops.length === 0 ? (
              <div className="pf-empty">
                <div className="pf-empty-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7CF5C0" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#fff', margin: '0 0 8px', letterSpacing: '-0.01em' }}>
                  {activeTab === 'saved' ? 'No saved airdrops yet' : `No ${activeTab} airdrops saved`}
                </h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.28)', margin: '0 0 24px', lineHeight: 1.6 }}>
                  Click the ♥ on any airdrop to save it here
                </p>
                <Link href="/airdrops" style={{ background: '#7CF5C0', color: '#04120A', padding: '11px 24px', borderRadius: '11px', textDecoration: 'none', fontWeight: 700, fontSize: '13px', display: 'inline-block' }}>
                  Browse 90+ Airdrops →
                </Link>
              </div>
            ) : (
              <div className="pf-grid">
                {filteredAirdrops.map(a => (
                  <div key={a.slug} className="pf-card">
                    <button className="pf-card-remove" onClick={() => removeFavorite(a.slug)}>
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                    <Link href={`/airdrops/${a.slug}`} className="pf-card-id">
                      {a.logo
                        ? <Image src={a.logo} alt={a.name} className="pf-card-logo" width={40} height={40} />
                        : <div className="pf-card-logo-fb">{a.name?.[0]}</div>
                      }
                      <div>
                        <div className="pf-card-name">{a.name}</div>
                        <div className="pf-card-chain">{a.blockchain}</div>
                      </div>
                    </Link>
                    <p className="pf-card-desc">{a.description}</p>
                    <div className="pf-card-meta">
                      <span className="pf-pill" style={{ color: diffColor(a.difficulty), background: `${diffColor(a.difficulty)}12`, border: `1px solid ${diffColor(a.difficulty)}25` }}>{a.difficulty}</span>
                      <span className="pf-pill" style={{ color: costColor(a.cost), background: `${costColor(a.cost)}12`, border: `1px solid ${costColor(a.cost)}25` }}>{a.cost}</span>
                      <span className="pf-pill" style={{ color: a.status === 'Active' ? '#7CF5C0' : '#71717a', background: a.status === 'Active' ? 'rgba(124,245,192,0.08)' : 'rgba(100,100,120,0.08)', border: `1px solid ${a.status === 'Active' ? 'rgba(124,245,192,0.2)' : 'rgba(100,100,120,0.2)'}` }}>{a.status}</span>
                      <span className="pf-pill" style={{ color: '#7CF5C0', background: 'rgba(124,245,192,0.06)', border: '1px solid rgba(124,245,192,0.15)' }}>{rewardLabel(a)}</span>
                    </div>
                    {Array.isArray(a.tags) && a.tags.length > 0 && (
                      <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                        {a.tags.slice(0, 3).map((t: string) => (
                          <span key={t} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.3)', padding: '2px 8px', borderRadius: '5px', fontSize: '10px', fontWeight: 600 }}>{t}</span>
                        ))}
                      </div>
                    )}
                    <Link href={`/airdrops/${a.slug}`} className="pf-card-cta">
                      View Guide
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
