'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from './auth/AuthProvider';
import { createClient } from './auth/supabase';

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

const STORAGE_KEY = '3alamiy_liked_airdrops';

export function useLikes() {
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const { user } = useAuth();
  const supabase = createClient();

  useEffect(() => {
    if (user) {
      supabase.from('favorites').select('airdrop_slug').eq('user_id', user.id)
        .then(({ data }) => {
          if (data) {
            const likedMap: Record<string, boolean> = {};
            data.forEach(row => { likedMap[row.airdrop_slug] = true; });
            setLiked(likedMap);
          }
        });
    } else {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) setLiked(JSON.parse(stored));
      } catch {}
    }
  }, [user]);

  const toggleLike = async (slug: string, airdrop: Airdrop) => {
    const isLiked = liked[slug];
    const next = { ...liked, [slug]: !isLiked };
    setLiked(next);

    if (user) {
      if (!isLiked) {
        await supabase.from('favorites').upsert({
          user_id: user.id,
          airdrop_slug: slug,
          airdrop_name: airdrop.name,
          airdrop_blockchain: airdrop.blockchain,
          airdrop_tags: airdrop.tags,
        });
      } else {
        await supabase.from('favorites').delete()
          .eq('user_id', user.id).eq('airdrop_slug', slug);
      }
    } else {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        const metaKey = `3alamiy_meta_${slug}`;
        if (!isLiked) {
          localStorage.setItem(metaKey, JSON.stringify({
            blockchain: airdrop.blockchain,
            tags: airdrop.tags,
            slug: airdrop.slug,
          }));
        }
      } catch {}
    }
  };

  const likedCount = Object.values(liked).filter(Boolean).length;
  return { liked, toggleLike, likedCount };
}

function getLikedMetadata(): { blockchain: string; tags: string[] }[] {
  const meta: { blockchain: string; tags: string[] }[] = [];
  try {
    const likedRaw = localStorage.getItem(STORAGE_KEY);
    if (!likedRaw) return [];
    const liked = JSON.parse(likedRaw);
    Object.entries(liked).forEach(([slug, isLiked]) => {
      if (isLiked) {
        const metaRaw = localStorage.getItem(`3alamiy_meta_${slug}`);
        if (metaRaw) meta.push(JSON.parse(metaRaw));
      }
    });
  } catch {}
  return meta;
}

// Fisher-Yates shuffle
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getRecommended(airdrops: Airdrop[], likedSlugs: string[]): Airdrop[] {
  const meta = getLikedMetadata();

  // If no likes yet — return random active airdrops as suggestions
  if (meta.length === 0) {
    const active = airdrops.filter(a => a.status === 'Active');
    return shuffle(active).slice(0, 6);
  }

  const blockchainCount: Record<string, number> = {};
  const tagCount: Record<string, number> = {};

  meta.forEach(m => {
    if (m.blockchain) blockchainCount[m.blockchain] = (blockchainCount[m.blockchain] || 0) + 1;
    if (Array.isArray(m.tags)) {
      m.tags.forEach(t => { tagCount[t] = (tagCount[t] || 0) + 1; });
    }
  });

  // Score airdrops
  const scored = airdrops
    .filter(a => !likedSlugs.includes(a.slug) && a.status === 'Active')
    .map(a => {
      let score = 0;
      if (a.blockchain && blockchainCount[a.blockchain]) score += blockchainCount[a.blockchain] * 3;
      if (Array.isArray(a.tags)) {
        a.tags.forEach(t => { if (tagCount[t]) score += tagCount[t] * 2; });
      }
      // Add small random noise so order changes each visit
      score += Math.random() * 0.5;
      return { ...a, score };
    })
    .sort((a, b) => b.score - a.score);

  // Top scored picks
  const topScored = scored.filter(a => a.score > 0.5).slice(0, 9);

  // Shuffle top picks and take 6 — always different order
  return shuffle(topScored).slice(0, 6);
}

export default function RecommendedForYou({ airdrops }: { airdrops: Airdrop[] }) {
  const { liked, toggleLike, likedCount } = useLikes();
  const [recommended, setRecommended] = useState<Airdrop[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    const likedSlugs = Object.entries(liked).filter(([, v]) => v).map(([k]) => k);
    const recs = getRecommended(airdrops, likedSlugs);
    setRecommended(recs);
  }, [liked, airdrops, mounted]);

  const difficultyColor = (d: string) =>
    d === 'Easy' ? '#10b981' : d === 'Hard' ? '#f43f5e' : '#f59e0b';
  const rewardLabel = (a: Airdrop) =>
    a.reward_min && a.reward_max ? `$${a.reward_min} - $${a.reward_max}` : a.reward_min ? `$${a.reward_min}+` : 'High';

  if (!mounted || recommended.length === 0) return null;

  return (
    <section style={{ marginBottom: '48px' }}>
      <style>{`
        .rfy-hdr { display:flex; align-items:center; justify-content:space-between; margin-bottom:20px; flex-wrap:wrap; gap:12px; }
        .rfy-hdr-left { display:flex; align-items:center; gap:10px; }
        .rfy-icon { width:30px; height:30px; background:rgba(124,245,192,0.08); border:1px solid rgba(124,245,192,0.18); border-radius:8px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .rfy-title { font-size:17px; font-weight:700; color:#fff; margin:0; letter-spacing:-0.02em; }
        .rfy-sub { font-size:11px; color:rgba(255,255,255,0.28); margin:2px 0 0; font-weight:500; }
        .rfy-badge { background:rgba(124,245,192,0.06); border:1px solid rgba(124,245,192,0.15); color:#7CF5C0; padding:4px 12px; border-radius:99px; font-size:10px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; display:flex; align-items:center; gap:5px; }
        .rfy-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:12px; }
        .rfy-wrap { position:relative; }
        .rfy-rec-tag { position:absolute; top:-1px; left:14px; z-index:10; background:rgba(124,245,192,0.1); border:1px solid rgba(124,245,192,0.2); color:#7CF5C0; font-size:9px; font-weight:700; padding:2px 10px; border-radius:99px; letter-spacing:0.07em; text-transform:uppercase; }
        .rfy-card { background:#0D1221; border:1px solid rgba(255,255,255,0.06); border-radius:16px; padding:18px; text-decoration:none; color:#fff; display:flex; flex-direction:column; gap:12px; transition:border-color 0.18s,transform 0.18s,box-shadow 0.18s; }
        .rfy-card:hover { border-color:rgba(124,245,192,0.2); transform:translateY(-2px); box-shadow:0 8px 32px rgba(0,0,0,0.25); }
        .rfy-top { display:flex; align-items:center; justify-content:space-between; }
        .rfy-badges { display:flex; gap:5px; }
        .rfy-b { font-size:9px; font-weight:700; letter-spacing:0.05em; text-transform:uppercase; padding:2px 8px; border-radius:5px; }
        .rfy-b-brand { background:rgba(124,245,192,0.08); color:#7CF5C0; border:1px solid rgba(124,245,192,0.18); }
        .rfy-b-active { background:rgba(124,245,192,0.06); color:#7CF5C0; border:1px solid rgba(124,245,192,0.14); }
        .rfy-b-ended { background:rgba(100,100,120,0.08); color:#6b7280; border:1px solid rgba(100,100,120,0.18); }
        .rfy-like { width:30px; height:30px; border-radius:8px; border:1px solid rgba(255,255,255,0.08); background:transparent; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:all 0.15s; flex-shrink:0; }
        .rfy-like:hover { background:rgba(244,63,94,0.08); border-color:rgba(244,63,94,0.25); }
        .rfy-like-on { background:rgba(244,63,94,0.08); border-color:rgba(244,63,94,0.25); }
        .rfy-id { display:flex; align-items:center; gap:10px; }
        .rfy-logo { width:40px; height:40px; border-radius:10px; border:1px solid rgba(255,255,255,0.07); object-fit:cover; flex-shrink:0; }
        .rfy-logo-fb { width:40px; height:40px; border-radius:10px; background:#1a2540; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:15px; font-weight:700; color:rgba(255,255,255,0.2); }
        .rfy-name { font-size:14px; font-weight:700; color:#fff; margin:0 0 2px; letter-spacing:-0.01em; }
        .rfy-chain { font-size:10px; color:rgba(255,255,255,0.25); font-weight:600; text-transform:uppercase; letter-spacing:0.07em; }
        .rfy-desc { font-size:12px; color:rgba(255,255,255,0.32); line-height:1.65; overflow:hidden; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; margin:0; }
        .rfy-meta { display:flex; gap:20px; }
        .rfy-meta-lbl { font-size:9px; color:rgba(255,255,255,0.22); font-weight:700; text-transform:uppercase; letter-spacing:0.07em; margin-bottom:3px; }
        .rfy-meta-val { font-size:12px; font-weight:700; }
        .rfy-tags { display:flex; gap:5px; flex-wrap:wrap; }
        .rfy-tag { background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.07); color:rgba(255,255,255,0.28); padding:2px 9px; border-radius:6px; font-size:10px; font-weight:600; }
      `}</style>

      <div className="rfy-hdr">
        <div className="rfy-hdr-left">
          <div className="rfy-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7CF5C0" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          </div>
          <div>
            <h2 className="rfy-title">Recommended For You</h2>
            <p className="rfy-sub">
              {likedCount >= 2 ? `Based on your ${likedCount} saved airdrops` : 'Fresh picks updated every visit'}
            </p>
          </div>
        </div>
        <div className="rfy-badge">
          <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          AI Picks
        </div>
      </div>

      <div className="rfy-grid">
        {recommended.map((a) => (
          <div key={a.slug} className="rfy-wrap">
            <span className="rfy-rec-tag">Recommended</span>
            <Link href={`/airdrops/${a.slug}`} className="rfy-card">
              <div className="rfy-top">
                <div className="rfy-badges">
                  <span className="rfy-b rfy-b-brand">3alamiy</span>
                  <span className={`rfy-b ${a.status === 'Active' ? 'rfy-b-active' : 'rfy-b-ended'}`}>{a.status}</span>
                </div>
                <button onClick={(e) => { e.preventDefault(); toggleLike(a.slug, a); }}
                  className={`rfy-like ${liked[a.slug] ? 'rfy-like-on' : ''}`}>
                  <svg width="13" height="13" viewBox="0 0 24 24"
                    fill={liked[a.slug] ? '#f87171' : 'none'}
                    stroke={liked[a.slug] ? '#f87171' : 'rgba(255,255,255,0.35)'}
                    strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
              </div>

              <div className="rfy-id">
                {a.logo
                  ? <img src={a.logo} alt={a.name} width={40} height={40} className="rfy-logo" />
                  : <div className="rfy-logo-fb">{a.name?.[0]}</div>
                }
                <div>
                  <div className="rfy-name">{a.name}</div>
                  <div className="rfy-chain">{a.blockchain}</div>
                </div>
              </div>

              <p className="rfy-desc">{a.description}</p>

              <div className="rfy-meta">
                <div>
                  <div className="rfy-meta-lbl">Difficulty</div>
                  <div className="rfy-meta-val" style={{ color: difficultyColor(a.difficulty) }}>{a.difficulty}</div>
                </div>
                <div>
                  <div className="rfy-meta-lbl">Reward</div>
                  <div className="rfy-meta-val" style={{ color: '#7CF5C0' }}>{rewardLabel(a)}</div>
                </div>
              </div>

              {Array.isArray(a.tags) && a.tags.length > 0 && (
                <div className="rfy-tags">
                  {a.tags.slice(0, 3).map((tag: string) => (
                    <span key={tag} className="rfy-tag">{tag}</span>
                  ))}
                </div>
              )}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
