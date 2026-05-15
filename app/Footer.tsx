import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: '1px solid #1a1f2e',
      background: '#060910',
      padding: '60px 24px 32px',
      marginTop: '80px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '48px',
          marginBottom: '48px',
        }}>

          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#fff', marginBottom: '16px' }}>
              <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #6366f1, #4f46e5)', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px' }}>🪂</div>
              <span style={{ fontWeight: 800, fontSize: '15px', letterSpacing: '-0.01em' }}>3alamiy Web3</span>
            </Link>
            <p style={{ fontSize: '13px', color: '#52525b', lineHeight: 1.75, maxWidth: '240px', margin: '0 0 20px' }}>
              The best free crypto airdrop tracker in 2026. Step-by-step guides updated daily.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <a href="https://x.com/3alamiyweb3" target="_blank" rel="noopener noreferrer"
                style={{ width: '32px', height: '32px', background: '#0d1117', border: '1px solid #1a1f2e', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#71717a', fontSize: '13px', fontWeight: 900, textDecoration: 'none' }}>𝕏</a>
              <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer"
                style={{ width: '32px', height: '32px', background: '#0d1117', border: '1px solid #1a1f2e', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#71717a', textDecoration: 'none' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
              <a href="https://3alamiyweb3.online" target="_blank" rel="noopener noreferrer"
                style={{ width: '32px', height: '32px', background: '#0d1117', border: '1px solid #1a1f2e', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#71717a', textDecoration: 'none' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <p style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#3f3f46', margin: '0 0 16px' }}>Platform</p>
            {[
              ['Airdrops', '/airdrops'],
              ['GM Station', '/gm'],
              ['Learn', '/learn/how-to-find-airdrops-before-everyone-else'],
              ['About', '/about'],
              ['Profile', '/profile'],
            ].map(([label, href]) => (
              <Link key={href} href={href} style={{ display: 'block', color: '#52525b', textDecoration: 'none', fontSize: '13px', marginBottom: '10px' }}>{label}</Link>
            ))}
          </div>

          {/* Community */}
          <div>
            <p style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#3f3f46', margin: '0 0 16px' }}>Community</p>
            {[
              ['Telegram', 'https://t.me/web33alamiy'],
              ['Twitter / X', 'https://x.com/3alamiyweb3'],
              ['Main App', 'https://3alamiyweb3.online'],
            ].map(([label, href]) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: '#52525b', textDecoration: 'none', fontSize: '13px', marginBottom: '10px' }}>{label}</a>
            ))}
          </div>

          {/* Legal */}
          <div>
            <p style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#3f3f46', margin: '0 0 16px' }}>Legal</p>
            <Link href="/privacy" style={{ display: 'block', color: '#52525b', textDecoration: 'none', fontSize: '13px', marginBottom: '10px' }}>Privacy Policy</Link>
            <Link href="/privacy#disclaimer" style={{ display: 'block', color: '#52525b', textDecoration: 'none', fontSize: '13px', marginBottom: '10px' }}>Disclaimer</Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid #1a1f2e', paddingTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontSize: '12px', color: '#3f3f46', margin: 0 }}>© {year} 3alamiyweb3.online — All rights reserved.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <span style={{ fontSize: '12px', color: '#3f3f46' }}>🔒 Secure</span>
            <span style={{ fontSize: '12px', color: '#3f3f46' }}>⚡ Daily Updates</span>
            <Link href="/privacy" style={{ fontSize: '12px', color: '#3f3f46', textDecoration: 'none' }}>Privacy Policy</Link>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 480px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
