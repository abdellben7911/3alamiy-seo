'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AuthButton from './auth/AuthButton';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Airdrops',   href: '/airdrops', badge: 'HOT', badgeColor: '#f43f5e', badgeBg: 'rgba(244,63,94,0.12)' },
    { label: 'Learn',      href: '/learn',    badge: 'NEW', badgeColor: '#7CF5C0', badgeBg: 'rgba(124,245,192,0.1)' },
    { label: 'GM Station', href: '/gm',       badge: null,  badgeColor: null,      badgeBg: null },
  ];

  return (
    <>
      <style>{`
        .hdr {
          position: sticky; top: 0; z-index: 50;
          height: 60px;
          background: ${scrolled ? 'rgba(6,10,18,0.98)' : 'rgba(6,10,18,0.82)'};
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid ${scrolled ? 'rgba(255,255,255,0.09)' : 'rgba(255,255,255,0.05)'};
          transition: background 0.25s, border-color 0.25s;
          font-family: var(--font-space),'Space Grotesk',system-ui,sans-serif;
        }
        .hdr-inner {
          max-width: 1200px; margin: 0 auto;
          padding: 0 24px; height: 100%;
          display: flex; align-items: center;
          justify-content: space-between; gap: 8px;
        }

        /* ── Logo ── */
        .hdr-logo {
          display: flex; align-items: center; gap: 9px;
          text-decoration: none; flex-shrink: 0;
        }
        .hdr-logo-img { width: 28px; height: 28px; border-radius: 7px; display: block; }
        .hdr-logo-text {
          font-size: 15px; font-weight: 800;
          letter-spacing: -0.04em; color: #fff; line-height: 1;
        }
        .hdr-logo-text em { color: #7CF5C0; font-style: normal; }

        /* ── Nav (centred) ── */
        .hdr-nav {
          display: flex; align-items: center; gap: 2px;
          position: absolute; left: 50%; transform: translateX(-50%);
        }
        .hdr-link {
          display: inline-flex; align-items: center; gap: 5px;
          color: rgba(255,255,255,0.40); text-decoration: none;
          font-size: 13px; font-weight: 600; letter-spacing: -0.01em;
          padding: 5px 11px; border-radius: 8px;
          transition: color 0.15s, background 0.15s;
          white-space: nowrap; position: relative;
        }
        .hdr-link:hover { color: rgba(255,255,255,0.85); background: rgba(255,255,255,0.05); }
        .hdr-link.active { color: rgba(255,255,255,0.9); }
        .hdr-link.active::after {
          content: ''; position: absolute; bottom: -1px;
          left: 50%; transform: translateX(-50%);
          width: 16px; height: 2px; border-radius: 99px; background: #7CF5C0;
        }
        .hdr-badge {
          font-size: 8px; font-weight: 800; letter-spacing: 0.07em;
          text-transform: uppercase; padding: 2px 5px; border-radius: 4px; line-height: 1.4;
        }

        /* ── Right ── */
        .hdr-right { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }

        .hdr-list-btn {
          display: inline-flex; align-items: center; gap: 5px;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.09);
          color: rgba(255,255,255,0.5); font-size: 12px; font-weight: 600;
          padding: 7px 13px; border-radius: 9px; text-decoration: none;
          white-space: nowrap; letter-spacing: -0.01em; font-family: inherit;
          transition: all 0.15s;
        }
        .hdr-list-btn:hover { background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.8); }

        .hdr-pro-btn {
          display: inline-flex; align-items: center; gap: 6px;
          background: linear-gradient(135deg,rgba(124,245,192,0.12),rgba(74,222,128,0.07));
          border: 1px solid rgba(124,245,192,0.25);
          color: #7CF5C0; font-size: 12px; font-weight: 700;
          padding: 7px 14px; border-radius: 9px; text-decoration: none;
          white-space: nowrap; letter-spacing: -0.01em; font-family: inherit;
          transition: all 0.15s;
        }
        .hdr-pro-btn:hover {
          background: linear-gradient(135deg,rgba(124,245,192,0.18),rgba(74,222,128,0.12));
          border-color: rgba(124,245,192,0.4); transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(124,245,192,0.1);
        }
        .hdr-pro-price {
          font-size: 9px; font-weight: 800; color: rgba(124,245,192,0.6);
          background: rgba(124,245,192,0.1); padding: 1px 5px; border-radius: 4px;
        }

        .hdr-sep { width: 1px; height: 18px; background: rgba(255,255,255,0.07); flex-shrink: 0; }

        /* ── Burger ── */
        .hdr-burger {
          display: none; flex-direction: column; gap: 5px;
          cursor: pointer; padding: 8px; border-radius: 9px;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
          transition: background 0.15s;
        }
        .hdr-burger:hover { background: rgba(255,255,255,0.08); }
        .hdr-burger span {
          width: 16px; height: 1.5px; background: rgba(255,255,255,0.5);
          border-radius: 99px; display: block; transition: transform 0.2s, opacity 0.2s;
        }

        /* ── Mobile drawer ── */
        .hdr-drawer {
          display: none;
          position: fixed; inset: 60px 0 0 0;
          background: rgba(6,10,18,0.99); backdrop-filter: blur(24px);
          z-index: 49; padding: 8px 12px 24px;
          flex-direction: column; gap: 2px;
          border-top: 1px solid rgba(255,255,255,0.06);
          font-family: var(--font-space),system-ui,sans-serif;
          overflow-y: auto;
        }
        .hdr-drawer.open { display: flex; }
        .hdr-drawer-link {
          display: flex; align-items: center; gap: 10px;
          color: rgba(255,255,255,0.42); text-decoration: none;
          font-size: 14px; font-weight: 600; letter-spacing: -0.01em;
          padding: 12px 14px; border-radius: 10px; transition: all 0.15s;
        }
        .hdr-drawer-link:hover { color: #fff; background: rgba(255,255,255,0.04); }
        .hdr-drawer-divider { border: none; border-top: 1px solid rgba(255,255,255,0.05); margin: 8px 0; }
        .hdr-drawer-pro {
          display: flex; align-items: center; justify-content: space-between;
          background: rgba(124,245,192,0.05); border: 1px solid rgba(124,245,192,0.14);
          color: #7CF5C0; font-size: 13px; font-weight: 700;
          padding: 13px 14px; border-radius: 10px; text-decoration: none;
          margin-top: 4px; font-family: inherit; transition: background 0.15s;
        }
        .hdr-drawer-pro:hover { background: rgba(124,245,192,0.09); }

        @media (max-width: 960px) {
          .hdr-list-btn { display: none !important; }
          .hdr-pro-price { display: none; }
        }
        @media (max-width: 740px) {
          .hdr-nav { display: none !important; }
          .hdr-auth-desktop { display: none !important; }
          .hdr-pro-btn { display: none !important; }
          .hdr-sep { display: none !important; }
          .hdr-burger { display: flex !important; }
        }
        @media (min-width: 741px) {
          .hdr-burger { display: none !important; }
          .hdr-drawer { display: none !important; }
        }
      `}</style>

      <header className="hdr">
        <div className="hdr-inner">

          <Link href="/" className="hdr-logo">
            <img src="/icon.svg" alt="3alamiy Web3" width={28} height={28} className="hdr-logo-img" />
            <span className="hdr-logo-text">3alamiy <em>Web3</em></span>
          </Link>

          <nav className="hdr-nav">
            {navItems.map(item => (
              <Link key={item.label} href={item.href} className={`hdr-link${pathname === item.href ? ' active' : ''}`}>
                {item.label}
                {item.badge && (
                  <span className="hdr-badge" style={{ color: item.badgeColor!, background: item.badgeBg! }}>
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          <div className="hdr-right">
            <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" className="hdr-list-btn">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
              List Project
            </a>
            <div className="hdr-sep" />
            <Link href="/pro" className="hdr-pro-btn">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Go Pro
              <span className="hdr-pro-price">$3/mo</span>
            </Link>
            <div className="hdr-sep" />
            <div className="hdr-auth-desktop"><AuthButton /></div>
            <button className="hdr-burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <span style={{ transform: menuOpen ? 'rotate(45deg) translate(4.5px,4.5px)' : 'none' }} />
              <span style={{ opacity: menuOpen ? 0 : 1 }} />
              <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(4.5px,-4.5px)' : 'none' }} />
            </button>
          </div>

        </div>
      </header>

      <div className={`hdr-drawer${menuOpen ? ' open' : ''}`}>
        {navItems.map(item => (
          <Link key={item.label} href={item.href} className="hdr-drawer-link" onClick={() => setMenuOpen(false)}>
            {item.label}
            {item.badge && (
              <span className="hdr-badge" style={{ color: item.badgeColor!, background: item.badgeBg! }}>{item.badge}</span>
            )}
          </Link>
        ))}
        <Link href="/wallet-checker" className="hdr-drawer-link" onClick={() => setMenuOpen(false)}>
          Wallet Checker
          <span className="hdr-badge" style={{ color: '#f59e0b', background: 'rgba(245,158,11,0.12)' }}>PRO</span>
        </Link>
        <hr className="hdr-drawer-divider" />
        <Link href="/pro" className="hdr-drawer-pro" onClick={() => setMenuOpen(false)}>
          <span>Go Pro — Full Airdrop Report</span>
          <span style={{ fontSize: 14, fontWeight: 900 }}>$3/mo</span>
        </Link>
        <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer"
          className="hdr-drawer-link" onClick={() => setMenuOpen(false)} style={{ marginTop: 4 }}>
          + List Your Project
        </a>
        <div style={{ padding: '4px 14px 0' }}><AuthButton /></div>
      </div>
    </>
  );
}
