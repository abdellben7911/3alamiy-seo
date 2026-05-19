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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>✨</div>
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#fff', margin: 0 }}>Recommended For You</h2>
            <p style={{ fontSize: '11px', color: '#52525b', margin: 0 }}>
              {likedCount >= 2 ? `Based on your ${likedCount} liked airdrops` : 'Fresh picks updated every visit'}
            </p>
          </div>
        </div>
        <span style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', color: '#818cf8', padding: '3px 10px', borderRadius: '99px', fontSize: '11px', fontWeight: '700' }}>
          AI Picks 🎯
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '12px' }}>
        {recommended.map((a) => (
          <div key={a.slug} style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-8px', left: '16px', zIndex: 10, background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#fff', fontSize: '9px', fontWeight: '800', padding: '2px 8px', borderRadius: '99px', letterSpacing: '0.05em' }}>
              ✨ RECOMMENDED
            </div>
            <Link href={`/airdrops/${a.slug}`} style={{
              background: '#0d1117',
              border: '1px solid rgba(99,102,241,0.25)',
              borderRadius: '16px', padding: '20px',
              textDecoration: 'none', color: '#fff',
              display: 'flex', flexDirection: 'column', gap: '14px',
              boxShadow: '0 0 0 1px rgba(99,102,241,0.05), 0 4px 20px rgba(99,102,241,0.08)',
              transition: 'all 0.22s ease',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(99,102,241,0.5)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(99,102,241,0.25)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ background: 'rgba(99,102,241,0.15)', color: '#818cf8', border: '1px solid rgba(99,102,241,0.2)', padding: '2px 8px', borderRadius: '5px', fontSize: '10px', fontWeight: '800' }}>3ALAMIY</span>
                  <span style={{ background: a.status === 'Active' ? 'rgba(16,185,129,0.1)' : 'rgba(113,113,122,0.1)', color: a.status === 'Active' ? '#10b981' : '#71717a', border: `1px solid ${a.status === 'Active' ? 'rgba(16,185,129,0.2)' : 'rgba(113,113,122,0.2)'}`, padding: '2px 8px', borderRadius: '5px', fontSize: '10px', fontWeight: '800' }}>{a.status}</span>
                </div>
                <button onClick={(e) => { e.preventDefault(); toggleLike(a.slug, a); }} style={{
                  background: liked[a.slug] ? 'rgba(239,68,68,0.1)' : 'transparent',
                  border: `1px solid ${liked[a.slug] ? 'rgba(239,68,68,0.3)' : '#27272a'}`,
                  borderRadius: '8px', width: '32px', height: '32px', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '14px', transition: 'all 0.2s',
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
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
