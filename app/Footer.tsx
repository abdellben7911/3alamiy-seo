'use client';

import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  const platformLinks = [
    { label: 'Airdrops', href: '/airdrops' },
    { label: 'GM Station', href: '/gm' },
    { label: 'Learn', href: '/learn/how-to-find-airdrops-before-everyone-else' },
    { label: 'About', href: '/about' },
    { label: 'Profile', href: '/profile' },
  ];

  const communityLinks = [
    { label: 'Telegram', href: 'https://t.me/web33alamiy', external: true },
    { label: 'Twitter / X', href: 'https://x.com/3alamiyweb3', external: true },
    { label: 'Main App', href: 'https://3alamiyweb3.online', external: true },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Disclaimer', href: '/privacy#disclaimer' },
    { label: 'Contact', href: '/contact' },
    { label: 'About', href: '/about' },
  ];

  return (
    <>
      <style>{`
        .ft {
          background: #060A12;
          border-top: 1px solid rgba(255,255,255,0.06);
          font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif;
        }

        /* Top CTA strip */
        .ft-strip {
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding: 28px 28px;
        }
        .ft-strip-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; flex-wrap: wrap;
        }
        .ft-strip-left { display: flex; align-items: center; gap: 12px; }
        .ft-strip-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #7CF5C0; box-shadow: 0 0 8px rgba(124,245,192,0.6);
          animation: ftdot 2s ease-in-out infinite; flex-shrink: 0;
        }
        @keyframes ftdot { 0%,100%{opacity:1} 50%{opacity:.3} }
        .ft-strip-text { font-size: 13px; font-weight: 500; color: rgba(255,255,255,0.45); }
        .ft-strip-text strong { color: #fff; font-weight: 600; }
        .ft-strip-btn {
          display: inline-flex; align-items: center; gap: 7px;
          background: rgba(124,245,192,0.08); color: #7CF5C0;
          border: 1px solid rgba(124,245,192,0.18); border-radius: 10px;
          padding: 9px 18px; font-size: 12px; font-weight: 600;
          text-decoration: none; white-space: nowrap;
          font-family: var(--font-space), system-ui, sans-serif;
          transition: background 0.15s;
        }
        .ft-strip-btn:hover { background: rgba(124,245,192,0.13); }
        .ft-strip-btn svg { width: 13px; height: 13px; }

        /* Main */
        .ft-main {
          max-width: 1200px; margin: 0 auto;
          padding: 48px 28px 40px;
          display: grid;
          grid-template-columns: 2.2fr 1fr 1fr 1fr;
          gap: 48px;
        }

        /* Brand col */
        .ft-brand-logo {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none; color: #fff; margin-bottom: 14px;
        }
        .ft-brand-icon {
          width: 34px; height: 34px; border-radius: 10px;
          background: linear-gradient(135deg, #0D2A1A, #0A2030);
          border: 1px solid rgba(124,245,192,0.2);
          display: flex; align-items: center; justify-content: center;
          font-size: 16px; flex-shrink: 0;
        }
        .ft-brand-name {
          font-weight: 700; font-size: 15px; letter-spacing: -0.02em; color: #fff;
        }
        .ft-brand-desc {
          font-size: 13px; color: rgba(255,255,255,0.3); line-height: 1.75;
          max-width: 210px; margin: 0 0 22px; font-weight: 400;
        }

        /* Socials */
        .ft-socials { display: flex; gap: 7px; }
        .ft-social {
          width: 32px; height: 32px; border-radius: 9px;
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.35); text-decoration: none;
          font-size: 12px; font-weight: 700;
          transition: background 0.15s, border-color 0.15s, color 0.15s;
        }
        .ft-social:hover { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.14); color: rgba(255,255,255,0.75); }
        .ft-social svg { width: 13px; height: 13px; }

        /* Link cols */
        .ft-col-label {
          font-size: 10px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.1em; color: rgba(255,255,255,0.22);
          margin: 0 0 16px; display: block;
        }
        .ft-link {
          display: block; color: rgba(255,255,255,0.38); text-decoration: none;
          font-size: 13px; font-weight: 500; margin-bottom: 11px;
          transition: color 0.15s;
        }
        .ft-link:last-child { margin-bottom: 0; }
        .ft-link:hover { color: rgba(255,255,255,0.75); }

        /* Bottom bar */
        .ft-bottom {
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 20px 28px;
        }
        .ft-bottom-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          gap: 12px; flex-wrap: wrap;
        }
        .ft-copy {
          font-size: 11px; font-weight: 500;
          color: rgba(255,255,255,0.2); margin: 0;
        }
        .ft-bottom-right { display: flex; align-items: center; gap: 18px; flex-wrap: wrap; }
        .ft-badge {
          display: flex; align-items: center; gap: 5px;
          font-size: 11px; font-weight: 500; color: rgba(255,255,255,0.2);
        }
        .ft-badge svg { width: 10px; height: 10px; opacity: 0.5; }
        .ft-privacy {
          font-size: 11px; font-weight: 500;
          color: rgba(255,255,255,0.2); text-decoration: none;
          transition: color 0.15s;
        }
        .ft-privacy:hover { color: rgba(255,255,255,0.5); }

        /* ── Mobile ── */
        @media (max-width: 900px) {
          .ft-main { grid-template-columns: 1fr 1fr; gap: 36px; }
          .ft-brand { grid-column: 1 / -1; }
          .ft-brand-desc { max-width: 100%; }
        }
        @media (max-width: 560px) {
          .ft-strip { padding: 20px 16px; }
          .ft-strip-text { font-size: 12px; }
          .ft-main { grid-template-columns: 1fr 1fr; gap: 28px; padding: 36px 16px 32px; }
          .ft-bottom { padding: 16px; }
          .ft-bottom-inner { flex-direction: column; align-items: flex-start; gap: 10px; }
          .ft-bottom-right { gap: 12px; }
        }
        @media (max-width: 380px) {
          .ft-main { grid-template-columns: 1fr; }
        }
      `}</style>

      <footer className="ft">

        {/* Top CTA strip */}
        <div className="ft-strip">
          <div className="ft-strip-inner">
            <div className="ft-strip-left">
              <div className="ft-strip-dot" />
              <p className="ft-strip-text">
                <strong>New airdrops added daily</strong> — get instant alerts on Telegram
              </p>
            </div>
            <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" className="ft-strip-btn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Join Telegram
            </a>
          </div>
        </div>

        {/* Main grid */}
        <div className="ft-main">

          {/* Brand */}
          <div className="ft-brand">
            <Link href="/" className="ft-brand-logo">
              <div className="ft-brand-icon">🪂</div>
              <span className="ft-brand-name">3alamiy Web3</span>
            </Link>
            <p className="ft-brand-desc">
              The best free crypto airdrop tracker in 2026. Step-by-step guides updated daily.
            </p>
            <div className="ft-socials">
              <a href="https://x.com/3alamiyweb3" target="_blank" rel="noopener noreferrer" className="ft-social" aria-label="X / Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
              </a>
              <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" className="ft-social" aria-label="Telegram">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.277-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
              <a href="https://3alamiyweb3.online" target="_blank" rel="noopener noreferrer" className="ft-social" aria-label="Website">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <span className="ft-col-label">Platform</span>
            {platformLinks.map(l => (
              <Link key={l.href} href={l.href} className="ft-link">{l.label}</Link>
            ))}
          </div>

          {/* Community */}
          <div>
            <span className="ft-col-label">Community</span>
            {communityLinks.map(l => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="ft-link">{l.label}</a>
            ))}
          </div>

          {/* Legal */}
          <div>
            <span className="ft-col-label">Legal</span>
            {legalLinks.map(l => (
              <Link key={l.href} href={l.href} className="ft-link">{l.label}</Link>
            ))}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="ft-bottom">
          <div className="ft-bottom-inner">
            <p className="ft-copy">© {year} 3alamiyweb3.online — All rights reserved.</p>
            <div className="ft-bottom-right">
              <span className="ft-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                Secure
              </span>
              <span className="ft-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                Daily Updates
              </span>
              <Link href="/privacy" className="ft-privacy">Privacy Policy</Link>
            </div>
          </div>
        </div>

      </footer>
    </>
  );
}
