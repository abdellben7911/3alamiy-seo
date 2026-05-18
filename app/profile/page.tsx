'use client';

import { useEffect, useState } from 'react';
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
  const supabase = createClient();

  useEffect(() => {
    if (!user) return;
    supabase.from('favorites').select('*').eq('user_id', user.id).order('created_at', { ascending: false }).then(({ data }) => { if (data) setFavorites(data); });
    fetch(`${SUPABASE_URL}/rest/v1/airdrops?select=*`, { headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` } }).then(r => r.json()).then(data => { setAirdrops(data); setLoadingFavs(false); });
  }, [user]);

  const difficultyColor = (d: string) => d === 'Easy' ? '#10b981' : d === 'Hard' ? '#f43f5e' : '#f59e0b';
  const rewardLabel = (a: AirdropDetail) => a.reward_min && a.reward_max ? `$${a.reward_min}–$${a.reward_max}` : a.reward_min ? `$${a.reward_min}+` : 'TBA';
  const removeFavorite = async (slug: string) => { await supabase.from('favorites').delete().eq('user_id', user!.id).eq('airdrop_slug', slug); setFavorites(prev => prev.filter(f => f.airdrop_slug !== slug)); };

  const likedAirdrops = favorites.map(fav => airdrops.find(a => a.slug === fav.airdrop_slug)).filter(Boolean) as AirdropDetail[];
  const freeCount = likedAirdrops.filter(a => a.cost === 'Free').length;
  const activeCount = likedAirdrops.filter(a => a.status === 'Active').length;
  const chains = [...new Set(likedAirdrops.map(a => a.blockchain).filter(Boolean))];

  if (loading) return <div style={{ minHeight:'100vh', background:'#060910', display:'flex', alignItems:'center', justifyContent:'center' }}><div style={{ color:'#52525b', fontSize:'14px' }}>Loading...</div></div>;

  if (!user) return (
    <div style={{ minHeight:'100vh', background:'#060910', fontFamily:'system-ui,sans-serif', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ textAlign:'center', padding:'32px' }}>
        <div style={{ width:'60px', height:'60px', borderRadius:'16px', background:'#1a1f2e', margin:'0 auto 20px', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#52525b" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </div>
        <h1 style={{ fontSize:'22px', fontWeight:800, color:'#fff', margin:'0 0 8px' }}>Sign in to view your profile</h1>
        <p style={{ color:'#71717a', fontSize:'14px', margin:'0 0 24px' }}>Save and track your favorite airdrops</p>
        <Link href="/" style={{ background:'linear-gradient(135deg,#6366f1,#4f46e5)', color:'#fff', padding:'12px 24px', borderRadius:'12px', textDecoration:'none', fontWeight:700, fontSize:'14px' }}>Back to Home →</Link>
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        *{box-sizing:border-box;}
        .pr{min-height:100vh;background:#060910;font-family:system-ui,-apple-system,sans-serif;color:#fff;}
        .ph{background:#060910;border-bottom:1px solid #1a1f2e;padding:28px 24px;position:relative;overflow:hidden;}
        .ph-glow{position:absolute;top:-60px;left:0;width:400px;height:300px;background:radial-gradient(ellipse,rgba(99,102,241,0.07) 0%,transparent 65%);pointer-events:none;}
        .ph-inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;}
        .av{width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,#6366f1,#8b5cf6);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:900;color:#fff;flex-shrink:0;box-shadow:0 6px 20px rgba(99,102,241,0.3);}
        .sb{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;max-width:1200px;margin:0 auto;padding:16px 24px;border-bottom:1px solid #1a1f2e;}
        .sbox{background:#0d1117;border:1px solid #1a1f2e;border-radius:14px;padding:14px;text-align:center;position:relative;overflow:hidden;}
        .sbox::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;}
        .sbox.r::before{background:linear-gradient(90deg,#f43f5e,#fb923c);}
        .sbox.g::before{background:linear-gradient(90deg,#10b981,#34d399);}
        .sbox.p::before{background:linear-gradient(90deg,#6366f1,#818cf8);}
        .sv{font-size:22px;font-weight:900;margin-bottom:3px;}
        .sl{font-size:9px;color:#3f3f46;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;}
        .layout{display:grid;grid-template-columns:300px 1fr;max-width:1200px;margin:0 auto;}
        .sdbar{padding:18px 20px;border-right:1px solid #1a1f2e;display:flex;flex-direction:column;gap:10px;position:sticky;top:62px;height:fit-content;}
        .mcol{padding:18px 24px;}
        .sc{background:#0d1117;border:1px solid #1a1f2e;border-radius:14px;padding:16px;}
        .clbl{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:0.12em;color:#3f3f46;margin:0 0 10px;}
        .cpill{background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.2);color:#818cf8;padding:4px 10px;border-radius:99px;font-size:11px;font-weight:700;}
        .qlink{display:flex;align-items:center;justify-content:space-between;padding:9px 12px;background:#060910;border:1px solid #1a1f2e;border-radius:10px;text-decoration:none;color:#71717a;font-size:12px;font-weight:700;transition:all 0.2s;margin-bottom:5px;}
        .qlink:hover{color:#a1a1aa;border-color:#2a2f3e;}
        .fcard{background:#0d1117;border:1px solid #1a1f2e;border-radius:16px;padding:16px;display:flex;flex-direction:column;gap:11px;position:relative;transition:border-color 0.2s;}
        .fcard:hover{border-color:rgba(99,102,241,0.2);}
        .rbtn{position:absolute;top:12px;right:12px;background:rgba(239,68,68,0.06);border:1px solid rgba(239,68,68,0.15);border-radius:8px;width:26px;height:26px;cursor:pointer;color:#f43f5e;display:flex;align-items:center;justify-content:center;transition:all 0.2s;}
        .rbtn:hover{background:rgba(239,68,68,0.15);}
        .mrow{display:flex;gap:16px;}
        .mi .ml{font-size:9px;color:#3f3f46;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:2px;}
        .mi .mv{font-size:12px;font-weight:800;}
        .tag{background:#060910;border:1px solid #1a1f2e;color:#52525b;padding:3px 8px;border-radius:5px;font-size:10px;font-weight:600;}
        .vbtn{display:flex;align-items:center;justify-content:center;gap:5px;background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.2);color:#818cf8;padding:9px;border-radius:10px;text-decoration:none;font-size:12px;font-weight:800;transition:all 0.2s;}
        .vbtn:hover{background:rgba(99,102,241,0.15);color:#fff;}
        .sh{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;}
        .es{text-align:center;padding:48px 24px;background:#0d1117;border:1px solid #1a1f2e;border-radius:16px;}
        @media(max-width:900px){.layout{grid-template-columns:1fr;}.sdbar{position:static;border-right:none;border-bottom:1px solid #1a1f2e;}.sb{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:500px){.sb{grid-template-columns:1fr 1fr;}.ph-inner{flex-direction:column;align-items:flex-start;}}
      `}</style>

      <div className="pr">
        {/* Hero */}
        <div className="ph">
          <div className="ph-glow" />
          <div className="ph-inner">
            <div style={{ display:'flex', alignItems:'center', gap:'16px' }}>
              <div className="av">{user.email?.[0].toUpperCase()}</div>
              <div>
                <p style={{ fontSize:'9px', fontWeight:800, textTransform:'uppercase', letterSpacing:'0.12em', color:'#3f3f46', margin:'0 0 3px' }}>Dashboard</p>
                <h1 style={{ fontSize:'20px', fontWeight:900, margin:'0 0 3px', letterSpacing:'-0.02em' }}>My Profile</h1>
                <p style={{ fontSize:'12px', color:'#52525b', margin:0 }}>{user.email}</p>
              </div>
            </div>
            <div style={{ display:'flex', gap:'8px' }}>
              <Link href="/" style={{ background:'#0d1117', border:'1px solid #1a1f2e', color:'#71717a', padding:'8px 14px', borderRadius:'10px', textDecoration:'none', fontSize:'12px', fontWeight:700, display:'flex', alignItems:'center', gap:'5px' }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>Back
              </Link>
              <button onClick={signOut} style={{ background:'rgba(244,63,94,0.08)', border:'1px solid rgba(244,63,94,0.2)', color:'#f43f5e', padding:'8px 14px', borderRadius:'10px', cursor:'pointer', fontSize:'12px', fontWeight:700, fontFamily:'inherit' }}>Sign Out</button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="sb">
          {[
            { val:favorites.length, lbl:'Saved Airdrops', color:'#f43f5e', cls:'r' },
            { val:activeCount, lbl:'Active', color:'#10b981', cls:'g' },
            { val:freeCount, lbl:'Free Airdrops', color:'#10b981', cls:'g' },
            { val:chains.length, lbl:'Blockchains', color:'#818cf8', cls:'p' },
          ].map(s => (
            <div key={s.lbl} className={`sbox ${s.cls}`}>
              <div className="sv" style={{ color:s.color }}>{s.val}</div>
              <div className="sl">{s.lbl}</div>
            </div>
          ))}
        </div>

        {/* Layout */}
        <div className="layout">
          {/* Sidebar */}
          <div className="sdbar">
            <DailyCheckIn userId={user.id} />

            {chains.length > 0 && (
              <div className="sc">
                <p className="clbl">Blockchain Interests</p>
                <div style={{ display:'flex', gap:'6px', flexWrap:'wrap' }}>
                  {chains.map(c => <span key={c} className="cpill">{c}</span>)}
                </div>
              </div>
            )}

            <div className="sc">
              <p className="clbl">Quick Links</p>
              {[{ label:'Browse Airdrops', href:'/airdrops' }, { label:'GM Station', href:'/gm' }, { label:'Learn Guides', href:'/learn' }].map(l => (
                <Link key={l.href} href={l.href} className="qlink">
                  {l.label}
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Main */}
          <div className="mcol">
            <div className="sh">
              <div>
                <p style={{ fontSize:'9px', fontWeight:800, textTransform:'uppercase', letterSpacing:'0.12em', color:'#3f3f46', margin:'0 0 3px' }}>Collection</p>
                <h2 style={{ fontSize:'16px', fontWeight:800, color:'#fff', margin:0 }}>Saved Airdrops</h2>
              </div>
              <span style={{ fontSize:'11px', color:'#3f3f46', background:'#0d1117', border:'1px solid #1a1f2e', padding:'4px 12px', borderRadius:'99px' }}>{favorites.length} saved</span>
            </div>

            {loadingFavs ? (
              <div style={{ textAlign:'center', padding:'56px', color:'#3f3f46', fontSize:'13px' }}>Loading...</div>
            ) : likedAirdrops.length === 0 ? (
              <div className="es">
                <div style={{ width:'40px', height:'40px', borderRadius:'12px', background:'#1a1f2e', margin:'0 auto 14px', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#52525b" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </div>
                <h3 style={{ fontSize:'15px', fontWeight:700, margin:'0 0 8px', color:'#fff' }}>No saved airdrops yet</h3>
                <p style={{ fontSize:'13px', color:'#52525b', margin:'0 0 20px' }}>Click the heart on any airdrop to save it here</p>
                <Link href="/" style={{ background:'linear-gradient(135deg,#6366f1,#4f46e5)', color:'#fff', padding:'10px 20px', borderRadius:'10px', textDecoration:'none', fontSize:'13px', fontWeight:700 }}>Browse Airdrops →</Link>
              </div>
            ) : (
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:'10px' }}>
                {likedAirdrops.map(a => (
                  <div key={a.slug} className="fcard">
                    <button className="rbtn" onClick={() => removeFavorite(a.slug)}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                    <Link href={`/airdrops/${a.slug}`} style={{ display:'flex', alignItems:'center', gap:'11px', textDecoration:'none', color:'#fff' }}>
                      {a.logo
                        ? <img src={a.logo} alt={a.name} width={42} height={42} style={{ borderRadius:'11px', border:'1px solid rgba(255,255,255,0.06)', flexShrink:0, objectFit:'cover' }} />
                        : <div style={{ width:'42px', height:'42px', borderRadius:'11px', background:'#1a1f2e', flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'17px', fontWeight:900, color:'#52525b' }}>{a.name?.[0]}</div>
                      }
                      <div>
                        <div style={{ fontSize:'13px', fontWeight:800, color:'#f4f4f5', marginBottom:'2px' }}>{a.name}</div>
                        <div style={{ fontSize:'9px', color:'#52525b', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.06em' }}>{a.blockchain}</div>
                      </div>
                    </Link>
                    <p style={{ fontSize:'12px', color:'#52525b', lineHeight:1.6, margin:0, display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden' } as any}>{a.description}</p>
                    <div className="mrow">
                      <div className="mi"><div className="ml">Difficulty</div><div className="mv" style={{ color:difficultyColor(a.difficulty) }}>{a.difficulty}</div></div>
                      <div className="mi"><div className="ml">Reward</div><div className="mv" style={{ color:'#10b981' }}>{rewardLabel(a)}</div></div>
                      <div className="mi"><div className="ml">Status</div><div className="mv" style={{ color:a.status==='Active'?'#10b981':'#71717a' }}>{a.status}</div></div>
                    </div>
                    {Array.isArray(a.tags) && a.tags.length > 0 && (
                      <div style={{ display:'flex', gap:'4px', flexWrap:'wrap' }}>
                        {a.tags.slice(0,3).map((t:string) => <span key={t} className="tag">{t}</span>)}
                      </div>
                    )}
                    <Link href={`/airdrops/${a.slug}`} className="vbtn">
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
