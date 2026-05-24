'use client';

import { useState, useEffect } from 'react';

export default function StickyBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed in this session
    if (sessionStorage.getItem('stickybar_dismissed')) return;

    // Show after 8 seconds or after scrolling 400px
    const timer = setTimeout(() => setVisible(true), 8000);

    const handleScroll = () => {
      if (window.scrollY > 400) setVisible(true);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const dismiss = () => {
    setDismissed(true);
    sessionStorage.setItem('stickybar_dismissed', '1');
    setTimeout(() => setVisible(false), 300);
  };

  if (!visible && !dismissed) return null;

  return (
    <>
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideDown {
          from { transform: translateY(0); opacity: 1; }
          to { transform: translateY(100%); opacity: 0; }
        }
        .sticky-bar {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 999;
          animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;
          width: calc(100% - 48px);
          max-width: 560px;
        }
        .sticky-bar.dismissing {
          animation: slideDown 0.3s ease both;
        }
        .sticky-inner {
          background: rgba(13, 18, 33, 0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(124, 245, 192, 0.15);
          border-radius: 16px;
          padding: 14px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(124,245,192,0.05);
          flex-wrap: wrap;
        }
        .sticky-text {
          font-size: 13px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.6);
          font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif;
          flex: 1;
          white-space: nowrap;
          letter-spacing: -0.01em;
        }
        .sticky-text span {
          color: #7CF5C0;
          font-weight: 700;
        }
        .sticky-btns {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }
        .sticky-btn-tg {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          padding: 9px 16px;
          border-radius: 10px;
          text-decoration: none;
          font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif;
          transition: transform 0.15s, box-shadow 0.15s;
          box-shadow: 0 4px 14px rgba(99,102,241,0.3);
          white-space: nowrap;
        }
        .sticky-btn-tg:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(99,102,241,0.4);
        }
        .sticky-btn-email {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.6);
          font-size: 12px;
          font-weight: 700;
          padding: 9px 16px;
          border-radius: 10px;
          cursor: pointer;
          font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif;
          transition: background 0.15s, border-color 0.15s, color 0.15s;
          white-space: nowrap;
          text-decoration: none;
        }
        .sticky-btn-email:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.18);
          color: #fff;
        }
        .sticky-close {
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.25);
          cursor: pointer;
          font-size: 16px;
          padding: 4px;
          line-height: 1;
          flex-shrink: 0;
          transition: color 0.15s;
          font-family: inherit;
        }
        .sticky-close:hover { color: rgba(255,255,255,0.6); }

        @media (max-width: 500px) {
          .sticky-bar { bottom: 16px; width: calc(100% - 32px); }
          .sticky-text { font-size: 12px; width: 100%; }
          .sticky-btns { width: 100%; justify-content: stretch; }
          .sticky-btn-tg, .sticky-btn-email { flex: 1; justify-content: center; }
        }
      `}</style>

      <div className={`sticky-bar ${dismissed ? 'dismissing' : ''}`}>
        <div className="sticky-inner">
          <span className="sticky-text">
            Don't miss the next drop <span>→</span>
          </span>
          <div className="sticky-btns">
            <a
              href="https://t.me/web33alamiy"
              target="_blank"
              rel="noopener noreferrer"
              className="sticky-btn-tg"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
              </svg>
              Telegram
            </a>
            <a href="#newsletter" className="sticky-btn-email" onClick={(e) => { e.preventDefault(); dismiss(); const el = document.getElementById('newsletter'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Email
            </a>
          </div>
          <button className="sticky-close" onClick={dismiss} aria-label="Dismiss">×</button>
        </div>
      </div>
    </>
  );
}
