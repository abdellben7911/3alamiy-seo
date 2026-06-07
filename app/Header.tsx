'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AuthButton from './auth/AuthButton';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    {
      label: 'Airdrops',
      href: '/airdrops',
      badge: 'HOT',
      badgeColor: '#f43f5e',
      badgeBg: 'rgba(244,63,94,0.12)',
    },
    {
      label: 'Learn',
      href: '/learn',
      badge: 'NEW',
      badgeColor: '#7CF5C0',
      badgeBg: 'rgba(124,245,192,0.1)',
    },
    {
      label: 'Wallet Checker',
      href: '/wallet-checker',
      badge: 'PRO',
      badgeColor: '#f59e0b',
      badgeBg: 'rgba(245,158,11,0.12)',
    },
    {
      label: 'GM Station',
      href: '/gm',
      badge: 'GM',
      badgeColor: '#fff',
      badgeBg: 'rgba(99,102,241,0.5)',
    },
    {
      label: 'Go Pro',
      href: '/pro',
      badge: '$3',
      badgeColor: '#7CF5C0',
      badgeBg: 'rgba(124,245,192,0.1)',
    },
    {
      label: 'Contact',
      href: '/contact',
      badge: null,
      badgeColor: null,
      badgeBg: null,
    },
  ];

  return (
    <>
      <style>{`
        .hdr {
          position: sticky; top: 0; z-index: 50;
          height: 58px;
          background: ${scrolled ? 'rgba(6,9,16,0.97)' : 'rgba(6,9,16,0.85)'};
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid ${scrolled ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.05)'};
          transition: background 0.2s, border-color 0.2s;
          font-family: var(--font-space),'Space Grotesk',system-ui,sans-serif;
        }
        .hdr-inner {
          max-width: 1160px; margin: 0 auto;
          padding: 0 20px; height: 100%;
          display: flex; align-items: center;
          justify-content: space-between; gap: 8px;
        }

        /* Logo */
        .hdr-logo {
          display: flex; align-items: center; gap: 8px;
          text-decoration: none; flex-shrink: 0;
        }
        .hdr-logo-mark {
          width: 30px; height: 30px; border-radius: 8px;
          display: block;
        }
        .hdr-logo-name {
          font-weight: 800; font-size: 14.5px;
          letter-spacing: -0.03em; color: #fff;
          line-height: 1;
        }
        .hdr-logo-name span {
          color: #7CF5C0;
        }

        /* Nav */
        .hdr-nav {
          display: flex; align-items: center; gap: 1px;
          flex: 1; justify-content: center;
        }
        .hdr-link {
          display: inline-flex; align-items: center; gap: 5px;
          color: rgba(255,255,255,0.42); text-decoration: none;
          font-size: 13px; font-weight: 600;
          padding: 5px 10px; border-radius: 8px;
          transition: color 0.15s, background 0.15s;
          white-space: nowrap; letter-spacing: -0.01em;
          position: relative;
        }
        .hdr-link:hover {
          color: rgba(255,255,255,0.88);
          background: rgba(255,255,255,0.05);
        }
        .hdr-badge {
          font-size: 8px; font-weight: 800;
          letter-spacing: 0.07em; text-transform: uppercase;
          padding: 2px 5px; border-radius: 4px;
          line-height: 1.4;
        }

        /* Right */
        .hdr-right {
          display: flex; align-items: center; gap: 8px; flex-shrink: 0;
        }
        .hdr-list-btn {
          display: inline-flex; align-items: center; gap: 5px;
          background: rgba(124,245,192,0.07);
          border: 1px solid rgba(124,245,192,0.18);
          color: #7CF5C0; font-size: 12px; font-weight: 700;
          padding: 6px 12px; border-radius: 8px;
          text-decoration: none; white-space: nowrap;
          letter-spacing: -0.01em;
          font-family: inherit;
          transition: background 0.15s, border-color 0.15s;
        }
        .hdr-list-btn:hover {
          background: rgba(124,245,192,0.13);
          border-color: rgba(124,245,192,0.32);
        }
        .hdr-sep {
          width: 1px; height: 18px;
          background: rgba(255,255,255,0.07);
          flex-shrink: 0;
        }

        /* Hamburger */
        .hdr-burger {
          display: none;
          flex-direction: column; gap: 4.5px;
          cursor: pointer; padding: 7px;
          border-radius: 8px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          transition: background 0.15s;
        }
        .hdr-burger:hover { background: rgba(255,255,255,0.08); }
        .hdr-burger span {
          width: 17px; height: 1.5px;
          background: rgba(255,255,255,0.55);
          border-radius: 99px; display: block;
          transition: transform 0.2s, opacity 0.2s;
        }

        /* Mobile drawer */
        .hdr-drawer {
          display: none;
          position: fixed; inset: 58px 0 0 0;
          background: rgba(6,9,16,0.99);
          backdrop-filter: blur(20px);
          z-index: 49; padding: 12px 16px 24px;
          flex-direction: column; gap: 2px;
          border-top: 1px solid rgba(255,255,255,0.06);
          font-family: var(--font-space),system-ui,sans-serif;
        }
        .hdr-drawer.open { display: flex; }
        .hdr-drawer-link {
          display: flex; align-items: center; gap: 10px;
          color: rgba(255,255,255,0.45); text-decoration: none;
          font-size: 14px; font-weight: 600;
          padding: 12px 14px; border-radius: 10px;
          transition: all 0.15s; letter-spacing: -0.01em;
        }
        .hdr-drawer-link:hover {
          color: #fff; background: rgba(255,255,255,0.04);
        }
        .hdr-drawer-cta {
          display: flex; align-items: center; gap: 8px;
          background: rgba(124,245,192,0.06);
          border: 1px solid rgba(124,245,192,0.16);
          color: #7CF5C0; font-size: 13px; font-weight: 700;
          padding: 13px 14px; border-radius: 10px;
          text-decoration: none; margin-top: 8px;
          font-family: inherit; transition: background 0.15s;
        }
        .hdr-drawer-cta:hover { background: rgba(124,245,192,0.1); }
        .hdr-drawer-divider {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.05);
          margin: 10px 0;
        }

        @media (max-width: 900px) {
          .hdr-list-btn { display: none !important; }
          .hdr-sep { display: none !important; }
        }
        @media (max-width: 768px) {
          .hdr-nav { display: none !important; }
          .hdr-auth-desktop { display: none !important; }
          .hdr-burger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hdr-burger { display: none !important; }
          .hdr-drawer { display: none !important; }
        }
      `}</style>

      <header className="hdr">
        <div className="hdr-inner">

          {/* Logo */}
          <Link href="/" className="hdr-logo">
            <img src="/icon.svg" alt="3alamiy Web3" width={30} height={30} className="hdr-logo-mark" />
            <span className="hdr-logo-name">
              3alamiy <span>Web3</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hdr-nav">
            {navItems.map(item => (
              <Link key={item.label} href={item.href} className="hdr-link">
                {item.label}
                {item.badge && (
                  <span className="hdr-badge" style={{ color: item.badgeColor!, background: item.badgeBg! }}>
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hdr-right">
            <a
              href="https://t.me/web33alamiy"
              target="_blank"
              rel="noopener noreferrer"
              className="hdr-list-btn"
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
              List Project
            </a>

            <div className="hdr-sep" />

            <div className="hdr-auth-desktop">
              <AuthButton />
            </div>

            {/* Hamburger */}
            <button
              className="hdr-burger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span style={{ transform: menuOpen ? 'rotate(45deg) translate(4px,4px)' : 'none' }} />
              <span style={{ opacity: menuOpen ? 0 : 1 }} />
              <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(4px,-4px)' : 'none' }} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`hdr-drawer${menuOpen ? ' open' : ''}`}>
        {navItems.map(item => (
          <Link
            key={item.label}
            href={item.href}
            className="hdr-drawer-link"
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
            {item.badge && (
              <span className="hdr-badge" style={{ color: item.badgeColor!, background: item.badgeBg! }}>
                {item.badge}
              </span>
            )}
          </Link>
        ))}

        <hr className="hdr-drawer-divider" />

        <a
          href="https://t.me/web33alamiy"
          target="_blank"
          rel="noopener noreferrer"
          className="hdr-drawer-cta"
          onClick={() => setMenuOpen(false)}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          List Your Project
        </a>

        <div style={{ paddingTop: 4 }}>
          <AuthButton />
        </div>
      </div>
    </>
  );
}
