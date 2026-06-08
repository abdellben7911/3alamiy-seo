'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('consent', 'update', {
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        analytics_storage: 'granted',
      });
    }
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('consent', 'update', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied',
      });
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      <style>{`
        .ck-banner {
          position: fixed; bottom: 0; left: 0; right: 0; z-index: 999;
          background: #0D1221;
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 16px 20px;
          font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif;
          animation: ckslide 0.3s ease;
        }
        @keyframes ckslide { from { transform: translateY(100%); } to { transform: translateY(0); } }
        .ck-inner {
          max-width: 1100px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; flex-wrap: wrap;
        }
        .ck-text {
          font-size: 13px; color: rgba(255,255,255,0.45);
          line-height: 1.6; flex: 1; min-width: 200px;
        }
        .ck-text strong { color: #fff; }
        .ck-text a { color: #7CF5C0; text-decoration: none; }
        .ck-btns { display: flex; gap: 8px; flex-shrink: 0; }
        .ck-accept {
          background: #7CF5C0; color: #060A12;
          font-size: 12px; font-weight: 700;
          padding: 8px 18px; border-radius: 99px;
          border: none; cursor: pointer;
          font-family: var(--font-space), system-ui, sans-serif;
          white-space: nowrap;
        }
        .ck-decline {
          background: rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.4);
          font-size: 12px; font-weight: 600;
          padding: 8px 18px; border-radius: 99px;
          border: 1px solid rgba(255,255,255,0.08);
          cursor: pointer;
          font-family: var(--font-space), system-ui, sans-serif;
          white-space: nowrap;
        }
        .ck-decline:hover { color: rgba(255,255,255,0.7); }
        @media (max-width: 600px) {
          .ck-inner { flex-direction: column; align-items: flex-start; }
          .ck-btns { width: 100%; }
          .ck-accept, .ck-decline { flex: 1; text-align: center; }
        }
      `}</style>

      <div className="ck-banner" role="dialog" aria-label="Cookie consent">
        <div className="ck-inner">
          <p className="ck-text">
            <strong>We use cookies</strong> — including Google AdSense and Analytics — to improve your experience and show relevant ads.
            By clicking <strong>Accept</strong>, you consent to our use of cookies.{" "}
            <Link href="/privacy">Learn more</Link>
          </p>
          <div className="ck-btns">
            <button className="ck-decline" onClick={decline}>Decline</button>
            <button className="ck-accept" onClick={accept}>Accept All</button>
          </div>
        </div>
      </div>
    </>
  );
}
