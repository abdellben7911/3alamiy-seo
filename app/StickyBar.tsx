'use client';

import { useState, useEffect } from 'react';

export default function StickyBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show after 8 seconds or 40% scroll
    const timer = setTimeout(() => {
      if (!dismissed) setVisible(true);
    }, 8000);

    const onScroll = () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (pct > 0.4 && !dismissed) setVisible(true);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { clearTimeout(timer); window.removeEventListener('scroll', onScroll); };
  }, [dismissed]);

  const dismiss = () => { setDismissed(true); setVisible(false); };

  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes sb-slide { from { transform: translateY(100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

        .sb-bar {
          position: fixed; bottom: 0; left: 0; right: 0; z-index: 9999;
          padding: 12px 16px;
          background: rgba(6, 10, 18, 0.96);
          backdrop-filter: blur(16px);
          border-top: 1px solid rgba(124,245,192,0.15);
          animation: sb-slide 0.35s cubic-bezier(0.16,1,0.3,1) forwards;
          box-shadow: 0 -8px 40px rgba(0,0,0,0.5);
        }

        .sb-inner {
          max-width: 680px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          gap: 12px;
        }

        .sb-text {
          font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.7);
          font-family: var(--font-space), system-ui, sans-serif;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
          flex-shrink: 1;
        }
        .sb-text span { color: #7CF5C0; }

        .sb-actions { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }

        .sb-btn {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 9px 16px; border-radius: 10px;
          font-size: 12px; font-weight: 700;
          text-decoration: none; white-space: nowrap;
          font-family: var(--font-space), system-ui, sans-serif;
          transition: opacity 0.15s, transform 0.15s;
          border: none; cursor: pointer;
        }
        .sb-btn:hover { opacity: 0.88; transform: translateY(-1px); }
        .sb-btn:active { transform: translateY(0); }

        .sb-tg {
          background: #229ED9; color: #fff;
        }
        .sb-email {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12) !important;
          color: rgba(255,255,255,0.7);
        }

        .sb-close {
          background: none; border: none; cursor: pointer;
          color: rgba(255,255,255,0.25); font-size: 18px; line-height: 1;
          padding: 4px; transition: color 0.15s; flex-shrink: 0;
          font-family: system-ui;
        }
        .sb-close:hover { color: rgba(255,255,255,0.6); }

        /* Mobile */
        @media (max-width: 500px) {
          .sb-bar { padding: 10px 14px 14px; }
          .sb-text { font-size: 12px; }
          .sb-btn { padding: 8px 13px; font-size: 11px; }
          .sb-btn svg { display: none; }
        }
      `}</style>

      <div className="sb-bar" role="banner">
        <div className="sb-inner">
          <span className="sb-text">
            Don't miss the next <span>airdrop →</span>
          </span>
          <div className="sb-actions">
            <a
              href="https://t.me/web33alamiy"
              target="_blank"
              rel="noopener noreferrer"
              className="sb-btn sb-tg"
              onClick={dismiss}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
              </svg>
              Telegram
            </a>
            <a
              href="/learn/best-crypto-airdrops-this-week"
              className="sb-btn sb-email"
              onClick={dismiss}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Weekly Picks
            </a>
            <button className="sb-close" onClick={dismiss} aria-label="Dismiss">×</button>
          </div>
        </div>
      </div>
    </>
  );
}
