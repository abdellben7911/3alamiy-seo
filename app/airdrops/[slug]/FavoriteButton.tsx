'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '../../auth/AuthProvider';
import { createClient } from '../../auth/supabase';

interface Props {
  slug: string;
  name: string;
  blockchain: string;
  tags: string[];
}

export default function FavoriteButton({ slug, name, blockchain, tags }: Props) {
  const { user } = useAuth();
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    if (!user) return;
    supabase
      .from('favorites')
      .select('id')
      .eq('user_id', user.id)
      .eq('airdrop_slug', slug)
      .single()
      .then(({ data }) => { if (data) setSaved(true); });
  }, [user, slug]);

  const toggle = async () => {
    if (!user) {
      // Scroll to top to trigger login modal
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setLoading(true);
    if (saved) {
      await supabase.from('favorites').delete().eq('user_id', user.id).eq('airdrop_slug', slug);
      setSaved(false);
    } else {
      await supabase.from('favorites').insert({
        user_id: user.id,
        airdrop_slug: slug,
        airdrop_name: name,
        airdrop_blockchain: blockchain,
        airdrop_tags: tags,
      });
      setSaved(true);
    }
    setLoading(false);
  };

  return (
    <>
      <style>{`
        .fav-btn {
          display: inline-flex; align-items: center; gap: 7px;
          background: ${saved ? 'rgba(244,63,94,0.08)' : 'rgba(255,255,255,0.04)'};
          color: ${saved ? '#f87171' : 'rgba(255,255,255,0.5)'};
          font-family: var(--font-space), system-ui, sans-serif;
          font-size: 13px; font-weight: 500;
          padding: 10px 18px; border-radius: 10px;
          border: 1px solid ${saved ? 'rgba(244,63,94,0.25)' : 'rgba(255,255,255,0.09)'};
          cursor: pointer; transition: all 0.15s;
          white-space: nowrap;
        }
        .fav-btn:hover {
          background: ${saved ? 'rgba(244,63,94,0.14)' : 'rgba(255,255,255,0.07)'};
          border-color: ${saved ? 'rgba(244,63,94,0.35)' : 'rgba(255,255,255,0.15)'};
          color: ${saved ? '#f87171' : 'rgba(255,255,255,0.75)'};
        }
        .fav-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        @keyframes fav-pop { 0%{transform:scale(1)} 50%{transform:scale(1.3)} 100%{transform:scale(1)} }
        .fav-icon-saved { animation: fav-pop 0.3s ease; }
      `}</style>
      <button className="fav-btn" onClick={toggle} disabled={loading} title={saved ? 'Remove from saved' : 'Save to profile'}>
        <svg
          className={saved ? 'fav-icon-saved' : ''}
          width="14" height="14" viewBox="0 0 24 24"
          fill={saved ? '#f87171' : 'none'}
          stroke={saved ? '#f87171' : 'currentColor'}
          strokeWidth="2"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
        {saved ? 'Saved' : 'Save'}
      </button>
    </>
  );
}
