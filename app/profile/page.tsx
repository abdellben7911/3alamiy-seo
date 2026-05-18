'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../auth/AuthProvider';
import { createClient } from '../auth/supabase';
import DailyCheckIn from './DailyCheckIn';

type Favorite = {
  airdrop_slug: string;
  airdrop_name: string;
  airdrop_blockchain: string;
  airdrop_tags: string[];
  created_at: string;
};

type AirdropDetail = {
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

    supabase.from('favorites').select('*').eq('user_id', user.id).order('created_at', { ascending: false })
      .then(({ data }) => {
        if (data) setFavorites(data);
      });

    fetch(`${SUPABASE_URL}/rest/v1/airdrops?select=*`, {
      headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` }
    }).then(r => r.json()).then(data => {
      setAirdrops(data);
      setLoadingFavs(false);
    });
  }, [user]);

  const difficultyColor = (d: string) =>
    d === 'Easy' ? '#10b981' : d === 'Hard' ? '#f43f5e' : '#f59e0b';
  const rewardLabel = (a: AirdropDetail) =>
    a.reward_min && a.reward_max ? `$${a.reward_min} - $${a.reward_max}` : a.reward_min ? `$${a.reward_min}+` : 'High';

  const removeFavorite = async (slug: string) => {
    await supabase.from('favorites').delete().eq('user_id', user!.id).eq('airdrop_slug', slug);
    setFavorites(prev => prev.filter(f => f.airdrop_slug !== slug));
  };

  const likedAirdrops = favorites.map(fav =>
    airdrops.find(a => a.slug === fav.airdrop_slug)
  ).filter(Boolean) as AirdropDetail[];

  const freeCount = likedAirdrops.filter(a => a.cost === 'Free').length;
  const activeCount = likedAirdrops.filter(a => a.status === 'Active').length;
  const chains = [...new Set(likedAirdrops.map(a => a.blockchain).filter(Boolean))];

  if (loading) return (
    <div style={{ minHeight: '100vh', background: '#060910', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ color: '#52525b', fontSize: '14px' }}>Loading...</div>
    </div>
  );

  if (!user) return (
    <div style={{ minHeight: '100vh', background: '#060910', fontFamily: 'system-ui, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', padding: '32px' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔒</div>
        <h1 style={{ fontSize: '22px', fontWeight: '800', color: '#fff', margin: '0 0 12px' }}>Sign in to view your profile</h1>
        <p style={{ color: '#71717a', fontSize: '14px', margin: '0 0 24px' }}>Save and track your favorite airdrops</p>
        <Link href="/" style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: '#fff', padding: '12px 24px', borderRadius: '12px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', background: '#060910', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#fff' }}>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px 80px' }}>

        {/* Back + Sign out */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '36px' }}>
          <Link href="/" style={{ color: '#71717a', textDecoration: 'none', fontSize: '13px', fontWeight: '600' }}>← Back to Airdrops</Link>
          <button onClick={signOut} style={{ background: '#18181b', border: '1px solid #27272a', color: '#f43f5e', padding: '8px 14px', borderRadius: '9px', cursor: 'pointer', fontSize: '12px', fontWeight: '700', fontFamily: 'inherit' }}>
            🚪 Sign Out
          </button>
        </div>

        {/* Profile header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '36px', flexWrap: 'wrap' }}>
          <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: '900', color: '#fff', flexShrink: 0, boxShadow: '0 8px 24px rgba(99,102,241,0.3)' }}>
            {user.email?.[0].toUpperCase()}
          </div>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '900', margin: '0 0 4px', letterSpacing: '-0.02em' }}>My Profile</h1>
            <p style={{ fontSize: '14px', color: '#71717a', margin: 0 }}>{user.email}</p>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '12px', marginBottom: '40px' }}>
          {[
            { icon: '❤', value: favorites.length, label: 'Saved Airdrops', color: '#f43f5e' },
            { icon: '✅', value: activeCount, label: 'Active', color: '#10b981' },
            { icon: '🆓', value: freeCount, label: 'Free Airdrops', color: '#10b981' },
            { icon: '⛓️', value: chains.length, label: 'Blockchains', color: '#818cf8' },
          ].map(stat => (
            <div key={stat.label} style={{ background: '#0d1117', border: '1px solid #1a1f2e', borderRadius: '14px', padding: '18px', textAlign: 'center' }}>
              <div style={{ fontSize: '22px', marginBottom: '6px' }}>{stat.icon}</div>
              <div style={{ fontSize: '22px', fontWeight: '800', color: stat.color, marginBottom: '2px' }}>{stat.value}</div>
              <div style={{ fontSize: '11px', color: '#52525b', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Blockchain interests */}
        {chains.length > 0 && (
          <div style={{ marginBottom: '32px' }}>
            <p style={{ fontSize: '12px', color: '#52525b', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 10px' }}>Your Blockchain Interests</p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {chains.map(chain => (
                <span key={chain} style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', color: '#818cf8', padding: '5px 12px', borderRadius: '99px', fontSize: '12px', fontWeight: '700' }}>
                  {chain}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Daily Check-In */}
        <DailyCheckIn userId={user.id} />

        {/* Saved airdrops */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '800', margin: 0 }}>❤️ Saved Airdrops</h2>
            <span style={{ fontSize: '12px', color: '#52525b' }}>{favorites.length} saved</span>
          </div>

          {loadingFavs ? (
            <div style={{ textAlign: 'center', padding: '60px', color: '#52525b' }}>Loading your favorites...</div>
          ) : likedAirdrops.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px', background: '#0d1117', border: '1px solid #1a1f2e', borderRadius: '16px' }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>🪂</div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', margin: '0 0 8px', color: '#fff' }}>No saved airdrops yet</h3>
              <p style={{ fontSize: '13px', color: '#52525b', margin: '0 0 20px' }}>Click the ❤️ button on any airdrop to save it here</p>
              <Link href="/" style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: '#fff', padding: '10px 20px', borderRadius: '10px', textDecoration: 'none', fontSize: '13px', fontWeight: '700' }}>
                Browse Airdrops →
              </Link>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '12px' }}>
              {likedAirdrops.map((a) => (
                <div key={a.slug} style={{ background: '#0d1117', border: '1px solid #1a1f2e', borderRadius: '16px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px', position: 'relative' }}>
                  <button onClick={() => removeFavorite(a.slug)} style={{ position: 'absolute', top: '14px', right: '14px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', width: '28px', height: '28px', cursor: 'pointer', color: '#f43f5e', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} title="Remove from favorites">
                    ✕
                  </button>

                  <Link href={`/airdrops/${a.slug}`} style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: '#fff' }}>
                    {a.logo ? (
                      <img src={a.logo} alt={a.name} width={44} height={44} style={{ borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)', flexShrink: 0, objectFit: 'cover' }} />
                    ) : (
                      <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#1a1f2e', flexShrink: 0 }} />
                    )}
                    <div>
                      <h3 style={{ fontSize: '15px', fontWeight: '800', margin: '0 0 2px', color: '#f4f4f5' }}>{a.name}</h3>
                      <span style={{ fontSize: '11px', color: '#52525b', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{a.blockchain}</span>
                    </div>
                  </Link>

                  <p style={{ fontSize: '13px', color: '#52525b', lineHeight: 1.6, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' } as any}>{a.description}</p>

                  <div style={{ display: 'flex', gap: '20px' }}>
                    <div>
                      <div style={{ fontSize: '10px', color: '#3f3f46', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '3px' }}>⚡ DIFFICULTY</div>
                      <div style={{ fontSize: '13px', fontWeight: '700', color: difficultyColor(a.difficulty) }}>{a.difficulty}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '10px', color: '#3f3f46', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '3px' }}>💰 REWARD</div>
                      <div style={{ fontSize: '13px', fontWeight: '700', color: '#10b981' }}>{rewardLabel(a)}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '10px', color: '#3f3f46', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '3px' }}>📊 STATUS</div>
                      <div style={{ fontSize: '13px', fontWeight: '700', color: a.status === 'Active' ? '#10b981' : '#71717a' }}>{a.status}</div>
                    </div>
                  </div>

                  {Array.isArray(a.tags) && a.tags.length > 0 && (
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {a.tags.slice(0, 3).map((tag: string) => (
                        <span key={tag} style={{ background: '#18181b', border: '1px solid #27272a', color: '#71717a', padding: '3px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: '600' }}>{tag}</span>
                      ))}
                    </div>
                  )}

                  <Link href={`/airdrops/${a.slug}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', color: '#818cf8', padding: '10px', borderRadius: '10px', textDecoration: 'none', fontSize: '13px', fontWeight: '700' }}>
                    View Guide →
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
