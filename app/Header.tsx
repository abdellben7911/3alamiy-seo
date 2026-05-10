'use client';

import { useState } from 'react';
import Link from 'next/link';
import AuthButton from './auth/AuthButton';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Airdrops', href: '/airdrops', badge: 'Hot', badgeColor: '#f43f5e', badgeBg: 'rgba(244,63,94,0.15)' },
    { label: 'Learn', href: '/learn/how-to-find-airdrops-before-everyone-else', badge: 'New', badgeColor: '#10b981', badgeBg: 'rgba(16,185,129,0.15)' },
    { label: 'GM Station', href: '/gm', badge: 'GM', badgeColor: '#000', badgeBg: '#818cf8' },
    { label: 'About', href: '/about', badge: null, badgeColor: null, badgeBg: null },
  ];

  return (
    <>
      <style>{`
        .nav-item {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #a1a1aa;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          padding: 6px 10px;
          border-radius: 8px;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .nav-item:hover { color: #fff; background: rgba(255,255,255,0.05); }
        .badge {
          font-size: 9px;
          font-weight: 800;
          padding: 2px 6px;
          border-radius: 99px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .mobile-menu {
          display: none;
          position: fixed;
          inset: 62px 0 0 0;
          background: rgba(6,9,16,0.98);
          backdrop-filter: blur(12px);
          z-index: 49;
          padding: 20px 24px;
          flex-direction: column;
          gap: 8px;
          border-top: 1px solid #1a1f2e;
        }
        .mobile-menu.open { display: flex; }
        .mobile-nav-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #a1a1aa;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          padding: 14px 16px;
          border-radius: 12px;
          transition: all 0.2s;
          border: 1px solid transparent;
        }
        .mobile-nav-item:hover { color: #fff; background: rgba(255,255,255,0.05); border-color: #1a1f2e; }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          background: #0d1117;
          border: 1px solid #1a1f2e;
        }
        .hamburger span { width: 20px; height: 2px; background: #a1a1aa; border-radius: 99px; transition: all 0.2s; display: block; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          .auth-btn-desktop { display: none !important; }
        }
        @media (min-width: 769px) {
          .hamburger { display: none !important; }
          .mobile-menu { display: none !important; }
        }
      `}</style>

      <header style={{ borderBottom: '1px solid #1a1f2e', position: 'sticky', top: 0, background: 'rgba(6,9,16,0.95)', backdropFilter: 'blur(12px)', zIndex: 50, height: '62px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#fff', flexShrink: 0 }}>
            <div style={{ width: '34px', height: '34px', background: 'linear-gradient(135deg, #6366f1, #4f46e5)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', boxShadow: '0 4px 12px rgba(99,102,241,0.3)' }}>🪂</div>
            <span style={{ fontWeight: '800', fontSize: '15px', letterSpacing: '-0.01em' }}>3alamiy Web3</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '4px', flex: 1, justifyContent: 'center' }}>
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="nav-item">
                {item.label}
                {item.badge && (
                  <span className="badge" style={{ color: item.badgeColor!, background: item.badgeBg! }}>
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Auth */}
          <div className="auth-btn-desktop" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <AuthButton />
          </div>

          {/* Hamburger */}
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <Link key={item.label} href={item.href} className="mobile-nav-item" onClick={() => setMenuOpen(false)}>
            {item.label}
            {item.badge && (
              <span className="badge" style={{ color: item.badgeColor!, background: item.badgeBg! }}>
                {item.badge}
              </span>
            )}
          </Link>
        ))}
        <div style={{ borderTop: '1px solid #1a1f2e', paddingTop: '16px', marginTop: '8px' }}>
          <AuthButton />
        </div>
      </div>
    </>
  );
}
