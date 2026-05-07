'use client';

import { useState } from 'react';
import { useAuth } from './AuthProvider';
import LoginModal from './LoginModal';

export default function AuthButton() {
  const { user, loading, signOut } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  if (loading) return (
    <div style={{ width: '80px', height: '36px', background: '#18181b', borderRadius: '10px', border: '1px solid #27272a' }} />
  );

  if (user) return (
    <div style={{ position: 'relative' }}>
      <button onClick={() => setShowMenu(!showMenu)} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#18181b', border: '1px solid #27272a', borderRadius: '10px', padding: '7px 12px', cursor: 'pointer', color: '#fff', fontFamily: 'inherit' }}>
        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '800', color: '#fff', flexShrink: 0 }}>
          {user.email?.[0].toUpperCase()}
        </div>
        <span style={{ fontSize: '13px', fontWeight: '600', maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {user.email?.split('@')[0]}
        </span>
        <span style={{ fontSize: '10px', color: '#52525b' }}>▾</span>
      </button>

      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} style={{ position: 'fixed', inset: 0, zIndex: 40 }} />
          <div style={{ position: 'absolute', right: 0, top: 'calc(100% + 8px)', background: '#0d1117', border: '1px solid #1a1f2e', borderRadius: '12px', padding: '8px', minWidth: '180px', zIndex: 50, boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
            <div style={{ padding: '8px 12px 12px', borderBottom: '1px solid #1a1f2e', marginBottom: '8px' }}>
              <p style={{ fontSize: '11px', color: '#52525b', margin: '0 0 2px' }}>Signed in as</p>
              <p style={{ fontSize: '12px', color: '#a1a1aa', margin: 0, fontWeight: '600', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.email}</p>
            </div>
            <button onClick={() => { signOut(); setShowMenu(false); }} style={{ width: '100%', background: 'transparent', border: 'none', color: '#f43f5e', fontSize: '13px', fontWeight: '600', cursor: 'pointer', padding: '8px 12px', borderRadius: '8px', textAlign: 'left', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: '8px' }}>
              🚪 Sign Out
            </button>
          </div>
        </>
      )}
    </div>
  );

  return (
    <>
      <button onClick={() => setShowModal(true)} style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: '#fff', padding: '9px 20px', borderRadius: '10px', border: 'none', fontSize: '13px', fontWeight: '700', cursor: 'pointer', flexShrink: 0, boxShadow: '0 4px 12px rgba(99,102,241,0.25)', fontFamily: 'inherit' }}>
        Sign In
      </button>
      {showModal && <LoginModal onClose={() => setShowModal(false)} />}
    </>
  );
}
