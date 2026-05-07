'use client';

import { useState } from 'react';
import { useAuth } from './AuthProvider';

export default function LoginModal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { signInWithMagicLink } = useAuth();

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setLoading(true);
    setError('');
    const { error } = await signInWithMagicLink(email);
    setLoading(false);
    if (error) {
      setError('Something went wrong. Please try again.');
    } else {
      setSent(true);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)', zIndex: 100 }} />

      {/* Modal */}
      <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 101, width: '100%', maxWidth: '420px', padding: '0 16px' }}>
        <div style={{ background: '#0d1117', border: '1px solid #1a1f2e', borderRadius: '20px', padding: '32px', position: 'relative' }}>

          {/* Close button */}
          <button onClick={onClose} style={{ position: 'absolute', top: '16px', right: '16px', background: '#18181b', border: '1px solid #27272a', borderRadius: '8px', width: '32px', height: '32px', cursor: 'pointer', color: '#71717a', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>

          {!sent ? (
            <>
              {/* Header */}
              <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                <div style={{ width: '52px', height: '52px', background: 'linear-gradient(135deg, #6366f1, #4f46e5)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', margin: '0 auto 16px', boxShadow: '0 8px 24px rgba(99,102,241,0.3)' }}>🪂</div>
                <h2 style={{ fontSize: '22px', fontWeight: '900', margin: '0 0 8px', color: '#fff', letterSpacing: '-0.02em' }}>Welcome to 3alamiy Web3</h2>
                <p style={{ fontSize: '14px', color: '#71717a', margin: 0, lineHeight: 1.6 }}>Sign in to save your favorite airdrops and get personalized recommendations</p>
              </div>

              {/* Benefits */}
              <div style={{ background: '#111827', border: '1px solid #1a1f2e', borderRadius: '12px', padding: '16px', marginBottom: '24px' }}>
                {[
                  { icon: '❤️', text: 'Save favorites across all devices' },
                  { icon: '✨', text: 'Get personalized airdrop recommendations' },
                  { icon: '🔔', text: 'Never miss high-value airdrops' },
                ].map((b) => (
                  <div key={b.text} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '6px 0' }}>
                    <span style={{ fontSize: '16px' }}>{b.icon}</span>
                    <span style={{ fontSize: '13px', color: '#a1a1aa', fontWeight: '500' }}>{b.text}</span>
                  </div>
                ))}
              </div>

              {/* Email input */}
              <div style={{ marginBottom: '12px' }}>
                <label style={{ fontSize: '12px', fontWeight: '700', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                  placeholder="you@example.com"
                  style={{ width: '100%', background: '#18181b', border: '1px solid #27272a', borderRadius: '12px', padding: '12px 16px', color: '#fff', fontSize: '14px', outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' }}
                />
                {error && <p style={{ fontSize: '12px', color: '#f43f5e', margin: '8px 0 0' }}>{error}</p>}
              </div>

              {/* Submit button */}
              <button onClick={handleSubmit} disabled={loading} style={{ width: '100%', background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: '#fff', border: 'none', borderRadius: '12px', padding: '13px', fontSize: '14px', fontWeight: '700', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1, boxShadow: '0 8px 24px rgba(99,102,241,0.3)', fontFamily: 'inherit' }}>
                {loading ? 'Sending...' : '✉️ Send Magic Link'}
              </button>

              <p style={{ textAlign: 'center', fontSize: '12px', color: '#52525b', marginTop: '16px', marginBottom: 0 }}>No password needed. One click to sign in. 🪄</p>
            </>
          ) : (
            /* Success state */
            <div style={{ textAlign: 'center', padding: '16px 0' }}>
              <div style={{ fontSize: '52px', marginBottom: '16px' }}>✉️</div>
              <h2 style={{ fontSize: '22px', fontWeight: '900', margin: '0 0 12px', color: '#fff' }}>Check your email!</h2>
              <p style={{ fontSize: '14px', color: '#71717a', lineHeight: 1.7, margin: '0 0 24px' }}>
                We sent a magic link to <strong style={{ color: '#818cf8' }}>{email}</strong>. Click the link to sign in instantly.
              </p>
              <div style={{ background: '#111827', border: '1px solid #1a1f2e', borderRadius: '12px', padding: '14px', marginBottom: '24px' }}>
                <p style={{ fontSize: '12px', color: '#52525b', margin: 0 }}>⏱️ Link expires in 1 hour. Check your spam folder if you don't see it.</p>
              </div>
              <button onClick={onClose} style={{ background: '#18181b', border: '1px solid #27272a', color: '#a1a1aa', borderRadius: '12px', padding: '12px 24px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', fontFamily: 'inherit' }}>
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
