'use client';

import { useState } from 'react';
import Link from 'next/link';
import AuthButton from './auth/AuthButton';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Airdrops', href: '/airdrops', badge: 'HOT', badgeColor: '#f43f5e', badgeBg: 'rgba(244,63,94,0.12)' },
    { label: 'Learn',    href: '/learn',    badge: 'NEW', badgeColor: '#7CF5C0', badgeBg: 'rgba(124,245,192,0.1)' },
    { label: 'Wallet Checker', href: '/wallet-checker', badge: 'PRO', badgeColor: '#f59e0b', badgeBg: 'rgba(245,158,11,0.12)' },
    { label: 'GM Station',href: '/gm',     badge: 'GM',  badgeColor: '#fff',    badgeBg: 'rgba(99,102,241,0.5)' },
    { label: 'About',    href: '/about',   badge: null,  badgeColor: null,       badgeBg: null },
    { label: 'Contact',  href: '/contact', badge: null,  badgeColor: null,       badgeBg: null },
  ];

  return (
    <>
      <style>{`
        .hdr-root {
          position: sticky; top: 0; z-index: 50;
          height: 62px;
          background: rgba(6,9,16,0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif;
        }
        .hdr-inner {
          max-width: 1200px; margin: 0 auto;
          padding: 0 24px; height: 100%;
          display: flex; align-items: center;
          justify-content: space-between; gap: 12px;
        }

        /* Logo */
        .hdr-logo {
          display: flex; align-items: center; gap: 9px;
          text-decoration: none; color: #fff; flex-shrink: 0;
        }
        .hdr-logo-icon {
          width: 34px; height: 34px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
        }
        .hdr-logo-name {
          font-weight: 700; font-size: 15px; letter-spacing: -0.02em; color: #fff;
        }

        /* Nav */
        .hdr-nav {
          display: flex; align-items: center; gap: 2px;
          flex: 1; justify-content: center;
        }
        .hdr-nav-item {
          display: flex; align-items: center; gap: 6px;
          color: rgba(255,255,255,0.45); text-decoration: none;
          font-size: 13.5px; font-weight: 500;
          padding: 6px 11px; border-radius: 9px;
          transition: color 0.15s, background 0.15s;
          white-space: nowrap; letter-spacing: -0.01em;
        }
        .hdr-nav-item:hover { color: #fff; background: rgba(255,255,255,0.05); }
        .hdr-badge {
          font-size: 8px; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase; padding: 2px 6px; border-radius: 99px;
        }

        /* Right side */
        .hdr-right {
          display: flex; align-items: center; gap: 8px; flex-shrink: 0;
        }

        /* List Your Project button */
        .hdr-list-btn {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(124,245,192,0.07);
          border: 1px solid rgba(124,245,192,0.2);
          color: #7CF5C0; font-size: 12px; font-weight: 600;
          padding: 7px 13px; border-radius: 9px;
          text-decoration: none; white-space: nowrap;
          letter-spacing: -0.01em;
          font-family: var(--font-space), system-ui, sans-serif;
          transition: background 0.15s, border-color 0.15s;
        }
        .hdr-list-btn:hover { background: rgba(124,245,192,0.13); border-color: rgba(124,245,192,0.35); }
        .hdr-list-btn svg { width: 11px; height: 11px; flex-shrink: 0; }

        /* Divider */
        .hdr-divider {
          width: 1px; height: 20px;
          background: rgba(255,255,255,0.08);
        }

        /* Hamburger */
        .hdr-hamburger {
          display: none; flex-direction: column; gap: 5px;
          cursor: pointer; padding: 7px; border-radius: 8px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .hdr-hamburger span {
          width: 18px; height: 1.5px;
          background: rgba(255,255,255,0.6);
          border-radius: 99px; display: block; transition: all 0.2s;
        }

        /* Mobile menu */
        .hdr-mobile {
          display: none;
          position: fixed; inset: 62px 0 0 0;
          background: rgba(6,9,16,0.98);
          backdrop-filter: blur(16px);
          z-index: 49; padding: 16px 20px;
          flex-direction: column; gap: 6px;
          border-top: 1px solid rgba(255,255,255,0.06);
          font-family: var(--font-space), system-ui, sans-serif;
        }
        .hdr-mobile.open { display: flex; }
        .hdr-mobile-item {
          display: flex; align-items: center; gap: 10px;
          color: rgba(255,255,255,0.5); text-decoration: none;
          font-size: 14px; font-weight: 500;
          padding: 13px 14px; border-radius: 12px;
          transition: all 0.15s;
          border: 1px solid transparent;
          letter-spacing: -0.01em;
        }
        .hdr-mobile-item:hover { color: #fff; background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.07); }
        .hdr-mobile-list {
          display: flex; align-items: center; gap: 9px;
          background: rgba(124,245,192,0.06);
          border: 1px solid rgba(124,245,192,0.18);
          color: #7CF5C0; font-size: 13px; font-weight: 600;
          padding: 13px 14px; border-radius: 12px;
          text-decoration: none; letter-spacing: -0.01em;
          font-family: var(--font-space), system-ui, sans-serif;
          transition: background 0.15s;
        }
        .hdr-mobile-list:hover { background: rgba(124,245,192,0.1); }
        .hdr-mobile-list svg { width: 14px; height: 14px; }

        @media (max-width: 900px) {
          .hdr-list-btn { display: none !important; }
          .hdr-divider { display: none !important; }
        }
        @media (max-width: 768px) {
          .hdr-nav { display: none !important; }
          .hdr-auth-desktop { display: none !important; }
          .hdr-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hdr-hamburger { display: none !important; }
          .hdr-mobile { display: none !important; }
        }
      `}</style>

      <header className="hdr-root">
        <div className="hdr-inner">

          {/* Logo */}
          <Link href="/" className="hdr-logo">
            <img src="/icon.svg" alt="3alamiy Web3" width={32} height={32} style={{ borderRadius: 8, display: 'block' }} />
            <span className="hdr-logo-name">3alamiy Web3</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hdr-nav">
            {navItems.map(item => (
              <Link key={item.label} href={item.href} className="hdr-nav-item">
                {item.label}
                {item.badge && (
                  <span className="hdr-badge" style={{ color: item.badgeColor!, background: item.badgeBg! }}>
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Right */}
          <div className="hdr-right">

            {/* List Your Project */}
            <a
              href="https://t.me/web33alamiy"
              target="_blank"
              rel="noopener noreferrer"
              className="hdr-list-btn"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
              List Your Project
            </a>

            <div className="hdr-divider" />

            {/* Auth */}
            <div className="hdr-auth-desktop">
              <AuthButton />
            </div>

            {/* Hamburger */}
            <button className="hdr-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <span style={{ transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
              <span style={{ opacity: menuOpen ? 0 : 1 }} />
              <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`hdr-mobile ${menuOpen ? 'open' : ''}`}>
        {navItems.map(item => (
          <Link key={item.label} href={item.href} className="hdr-mobile-item" onClick={() => setMenuOpen(false)}>
            {item.label}
            {item.badge && (
              <span className="hdr-badge" style={{ color: item.badgeColor!, background: item.badgeBg! }}>
                {item.badge}
              </span>
            )}
          </Link>
        ))}

        {/* List Your Project in mobile */}
        <a
          href="https://t.me/web33alamiy"
          target="_blank"
          rel="noopener noreferrer"
          className="hdr-mobile-list"
          onClick={() => setMenuOpen(false)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          List Your Project
        </a>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '14px', marginTop: '6px' }}>
          <AuthButton />
        </div>
      </div>
    </>
  );
}
