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
      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: translate(-50%, -48%) scale(0.96); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes backdropIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .lm-backdrop {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.75);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 100;
          animation: backdropIn 0.2s ease both;
        }
        .lm-wrap {
          position: fixed; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          z-index: 101; width: 100%;
          max-width: 400px; padding: 0 16px;
          animation: modalIn 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        .lm-card {
          background: #0A0F1A;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(124,245,192,0.04);
        }
        .lm-glow {
          position: absolute; top: -80px; left: 50%;
          transform: translateX(-50%);
          width: 300px; height: 200px;
          background: radial-gradient(ellipse, rgba(99,102,241,0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        .lm-close {
          position: absolute; top: 14px; right: 14px;
          width: 30px; height: 30px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px; cursor: pointer;
          color: rgba(255,255,255,0.4); font-size: 17px;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.15s; z-index: 2;
          font-family: inherit;
        }
        .lm-close:hover {
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.8);
        }
        .lm-header {
          padding: 36px 28px 0;
          text-align: center;
          position: relative; z-index: 1;
        }
        .lm-icon {
          width: 56px; height: 56px;
          background: linear-gradient(135deg, rgba(99,102,241,0.2), rgba(99,102,241,0.08));
          border: 1px solid rgba(99,102,241,0.3);
          border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          font-size: 26px; margin: 0 auto 18px;
          box-shadow: 0 8px 24px rgba(99,102,241,0.15);
        }
        .lm-title {
          font-size: 20px; font-weight: 900;
          color: #fff; margin: 0 0 8px;
          letter-spacing: -0.03em;
          font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif;
        }
        .lm-subtitle {
          font-size: 13px; color: rgba(255,255,255,0.35);
          margin: 0; line-height: 1.6;
          font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif;
        }
        .lm-benefits {
          margin: 20px 28px 0;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 14px; overflow: hidden;
        }
        .lm-benefit {
          display: flex; align-items: center; gap: 12px;
          padding: 11px 16px;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif;
        }
        .lm-benefit:last-child { border-bottom: none; }
        .lm-benefit-icon {
          width: 28px; height: 28px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; flex-shrink: 0;
        }
        .lm-benefit-text {
          font-size: 12px; font-weight: 600;
          color: rgba(255,255,255,0.45);
        }
        .lm-form { padding: 20px 28px 28px; }
        .lm-label {
          font-size: 10px; font-weight: 800;
          text-transform: uppercase; letter-spacing: 0.1em;
          color: rgba(255,255,255,0.25);
          display: block; margin-bottom: 8px;
          font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif;
        }
        .lm-input-wrap { position: relative; margin-bottom: 10px; }
        .lm-input-icon {
          position: absolute; left: 14px; top: 50%;
          transform: translateY(-50%);
          color: rgba(255,255,255,0.2);
          pointer-events: none;
        }
        .lm-input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 13px 16px 13px 42px;
          color: #fff; font-size: 14px;
          outline: none;
          font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif;
          box-sizing: border-box;
          transition: border-color 0.15s, background 0.15s;
        }
        .lm-input:focus {
          border-color: rgba(99,102,241,0.4);
          background: rgba(99,102,241,0.04);
        }
        .lm-input::placeholder { color: rgba(255,255,255,0.2); }
        .lm-error {
          font-size: 12px; color: #f43f5e;
          margin: 6px 0 0; display: flex; align-items: center; gap: 5px;
          font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif;
        }
        .lm-btn {
          width: 100%; margin-top: 12px;
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          color: #fff; border: none;
          border-radius: 12px; padding: 14px;
          font-size: 14px; font-weight: 800;
          cursor: pointer;
          font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif;
          box-shadow: 0 8px 24px rgba(99,102,241,0.3);
          transition: transform 0.15s, box-shadow 0.15s, opacity 0.15s;
          display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .lm-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 12px 32px rgba(99,102,241,0.4);
        }
        .lm-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
        .lm-hint {
          text-align: center; margin-top: 12px;
          font-size: 11px; color: rgba(255,255,255,0.2);
          font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif;
          display: flex; align-items: center; justify-content: center; gap: 5px;
        }

        /* Success state */
        .lm-success {
          padding: 40px 28px;
          text-align: center;
          position: relative; z-index: 1;
        }
        .lm-success-icon {
          width: 64px; height: 64px;
          background: rgba(16,185,129,0.1);
          border: 1px solid rgba(16,185,129,0.2);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 28px; margin: 0 auto 20px;
          animation: pulse 2s infinite;
        }
        .lm-success-title {
          font-size: 22px; font-weight: 900;
          color: #fff; margin: 0 0 10px;
          letter-spacing: -0.03em;
          font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif;
        }
        .lm-success-text {
          font-size: 14px; color: rgba(255,255,255,0.4);
          line-height: 1.7; margin: 0 0 20px;
          font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif;
        }
        .lm-success-box {
          background: rgba(16,185,129,0.06);
          border: 1px solid rgba(16,185,129,0.15);
          border-radius: 12px; padding: 14px;
          margin-bottom: 20px;
          font-size: 12px; color: rgba(255,255,255,0.3);
          font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif;
          line-height: 1.6;
        }
        .lm-close-btn {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.5);
          border-radius: 12px; padding: 12px 28px;
          font-size: 13px; font-weight: 700;
          cursor: pointer;
          font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif;
          transition: all 0.15s;
        }
        .lm-close-btn:hover {
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.8);
        }
      `}</style>

      <div className="lm-backdrop" onClick={onClose} />

      <div className="lm-wrap">
        <div className="lm-card">
          <div className="lm-glow" />
          <button className="lm-close" onClick={onClose}>×</button>

          {!sent ? (
            <>
              <div className="lm-header">
                <div className="lm-icon">🪂</div>
                <h2 className="lm-title">Welcome to 3alamiy Web3</h2>
                <p className="lm-subtitle">Sign in to track airdrops and get daily alerts</p>
              </div>

              <div className="lm-benefits">
                {[
                  { icon: '❤️', text: 'Save favorites across all devices', bg: 'rgba(244,63,94,0.1)' },
                  { icon: '✨', text: 'Get personalized airdrop recommendations', bg: 'rgba(99,102,241,0.1)' },
                  { icon: '🔔', text: 'Never miss high-value airdrops', bg: 'rgba(245,158,11,0.1)' },
                ].map((b) => (
                  <div key={b.text} className="lm-benefit">
                    <div className="lm-benefit-icon" style={{ background: b.bg }}>{b.icon}</div>
                    <span className="lm-benefit-text">{b.text}</span>
                  </div>
                ))}
              </div>

              <div className="lm-form">
                <label className="lm-label">Email Address</label>
                <div className="lm-input-wrap">
                  <span className="lm-input-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </span>
                  <input
                    className="lm-input"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                    placeholder="you@example.com"
                    autoFocus
                  />
                </div>
                {error && (
                  <p className="lm-error">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    {error}
                  </p>
                )}
                <button className="lm-btn" onClick={handleSubmit} disabled={loading}>
                  {loading ? (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 1s linear infinite' }}>
                        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                      Send Magic Link
                    </>
                  )}
                </button>
                <p className="lm-hint">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  No password needed · One click to sign in
                </p>
              </div>
            </>
          ) : (
            <div className="lm-success">
              <div className="lm-success-icon">✉️</div>
              <h2 className="lm-success-title">Check your inbox!</h2>
              <p className="lm-success-text">
                We sent a magic link to<br />
                <strong style={{ color: '#818cf8' }}>{email}</strong>
              </p>
              <div className="lm-success-box">
                ⏱️ Link expires in 1 hour · Check spam if you don't see it
              </div>
              <button className="lm-close-btn" onClick={onClose}>Done</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
