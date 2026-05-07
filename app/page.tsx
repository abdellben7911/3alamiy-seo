import Link from "next/link";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

async function getAllAirdrops() {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/airdrops?select=*&order=created_at.desc`, {
    headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` },
    next: { revalidate: 3600 },
  });
  if (!res.ok) return [];
  return res.json();
}

export const metadata = {
  title: 'Crypto Airdrop Tracker 2026 | Free Airdrop Guides | 3alamiy Web3',
  description: 'Find and track the best crypto airdrops in 2026. Step-by-step guides for free and paid airdrops on Ethereum, Solana, Arbitrum and more.',
  keywords: 'crypto airdrop, free airdrop 2026, airdrop tracker, Web3 airdrop, DeFi airdrop guide',
};

export default async function Home() {
  const airdrops = await getAllAirdrops();
  const year = new Date().getFullYear();

  const difficultyColor = (d: string) =>
    d === 'Easy' ? '#10b981' : d === 'Hard' ? '#f43f5e' : '#f59e0b';
  const costColor = (c: string) =>
    c === 'Free' ? '#10b981' : c === 'Paid' ? '#f43f5e' : '#f59e0b';

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .header-inner { padding: 0 16px !important; }
          .hero-section { padding: 40px 16px 36px !important; }
          .hero-title { font-size: 30px !important; }
          .hero-desc { font-size: 14px !important; }
          .hero-buttons { flex-direction: column !important; }
          .hero-buttons a { text-align: center !important; }
          .stats-section { gap: 16px !important; padding: 24px 16px !important; }
          .main-section { padding: 28px 16px 48px !important; }
          .section-header { flex-direction: column !important; align-items: flex-start !important; }
          .airdrops-grid { grid-template-columns: 1fr !important; }
          .learn-grid { grid-template-columns: 1fr !important; }
          .learn-section { padding: 36px 16px !important; }
          .sign-up-btn { padding: 8px 14px !important; font-size: 13px !important; }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .airdrops-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .learn-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      <div style={{ minHeight: '100vh', background: '#030712', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#fff' }}>

        {/* Header */}
        <header style={{ borderBottom: '1px solid #18181b', position: 'sticky', top: 0, background: '#0a0a0f', zIndex: 50, height: '60px' }}>
          <div className="header-inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <a href="https://3alamiyweb3.online" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: '#fff', flexShrink: 0 }}>
              <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #6366f1, #4f46e5)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>🪂</div>
              <span style={{ fontWeight: '800', fontSize: '15px' }}>3alamiy Web3</span>
            </a>
            <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              {['Discover', 'Market', 'Community', 'Learn'].map((label) => (
                <a key={label} href="https://3alamiyweb3.online" style={{ color: '#71717a', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>{label}</a>
              ))}
            </nav>
            <a href="https://3alamiyweb3.online/profile" className="sign-up-btn" style={{ background: '#6366f1', color: '#fff', padding: '9px 18px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', fontWeight: '700', flexShrink: 0, whiteSpace: 'nowrap' }}>Sign Up</a>
          </div>
        </header>

        {/* Hero */}
        <section className="hero-section" style={{ textAlign: 'center', padding: '64px 24px 48px', background: 'radial-gradient(ellipse at top, #1e1b4b 0%, #030712 70%)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '99px', padding: '5px 14px', fontSize: '12px', color: '#818cf8', marginBottom: '20px' }}>
            🔥 {airdrops.length}+ Active Airdrops Tracked
          </div>
          <h1 className="hero-title" style={{ fontSize: '44px', fontWeight: '900', margin: '0 0 16px', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Best Crypto Airdrops<br />
            <span style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Guide {year}</span>
          </h1>
          <p className="hero-desc" style={{ fontSize: '16px', color: '#a1a1aa', maxWidth: '560px', margin: '0 auto 28px', lineHeight: 1.7 }}>
            Step-by-step guides for the most profitable crypto airdrops. Track, participate, and earn free crypto in {year}.
          </p>
          <div className="hero-buttons" style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://3alamiyweb3.online" style={{ background: '#6366f1', color: '#fff', padding: '13px 24px', borderRadius: '12px', textDecoration: 'none', fontWeight: '800', fontSize: '15px' }}>
              🚀 Open Dashboard
            </a>
            <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" style={{ background: '#18181b', color: '#fff', padding: '13px 24px', borderRadius: '12px', textDecoration: 'none', fontWeight: '800', fontSize: '15px', border: '1px solid #27272a' }}>
              ✈️ Join Telegram
            </a>
          </div>
        </section>

        {/* Stats */}
        <section className="stats-section" style={{ display: 'flex', justifyContent: 'center', gap: '32px', padding: '32px 24px', borderBottom: '1px solid #18181b', flexWrap: 'wrap' }}>
          {[
            ['🪂', `${airdrops.length}+`, 'Airdrops Tracked'],
            ['✅', `${airdrops.filter((a: any) => a.status === 'Active').length}`, 'Active Now'],
            ['🆓', `${airdrops.filter((a: any) => a.cost === 'Free').length}`, 'Free Airdrops'],
            ['📈', 'Daily', 'Updated'],
          ].map(([icon, value, label]) => (
            <div key={label as string} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '22px', fontWeight: '900', color: '#fff' }}>{icon} {value}</div>
              <div style={{ fontSize: '12px', color: '#71717a', marginTop: '4px' }}>{label}</div>
            </div>
          ))}
        </section>

        {/* Airdrops Grid */}
        <main className="main-section" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px 60px' }}>
          <div className="section-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', gap: '12px' }}>
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: '900', margin: '0 0 4px' }}>All Crypto Airdrops {year}</h2>
              <p style={{ fontSize: '13px', color: '#71717a', margin: 0 }}>Updated daily — {airdrops.length} airdrops with step-by-step guides</p>
            </div>
            <Link href="/airdrops" style={{ background: '#18181b', color: '#a1a1aa', padding: '8px 14px', borderRadius: '10px', textDecoration: 'none', fontSize: '12px', fontWeight: '700', border: '1px solid #27272a', whiteSpace: 'nowrap', flexShrink: 0 }}>
              View All →
            </Link>
          </div>

          {/* Blockchain filter links — SEO internal linking */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
            {['All', 'Ethereum', 'Solana', 'Arbitrum', 'Base', 'ZKSync', 'Starknet'].map((chain) => (
              <Link key={chain} href={chain === 'All' ? '/airdrops' : `/airdrops?blockchain=${chain.toLowerCase()}`} style={{ background: '#0d1117', border: '1px solid #27272a', color: '#a1a1aa', padding: '5px 12px', borderRadius: '99px', fontSize: '12px', fontWeight: '600', textDecoration: 'none' }}>
                {chain}
              </Link>
            ))}
          </div>

          <div className="airdrops-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '10px' }}>
            {airdrops.map((a: any) => (
              <Link key={a.slug} href={`/airdrops/${a.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ background: '#0d1117', border: '1px solid #18181b', borderRadius: '14px', padding: '14px', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    {a.logo && (
                      <img src={a.logo} alt={a.name} width={44} height={44} style={{ borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)', flexShrink: 0, objectFit: 'cover' }} />
                    )}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <h3 style={{ fontSize: '14px', fontWeight: '800', margin: 0, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '150px' }}>{a.name}</h3>
                        <span style={{ background: a.status === 'Active' ? 'rgba(16,185,129,0.1)' : 'rgba(113,113,122,0.1)', color: a.status === 'Active' ? '#10b981' : '#71717a', padding: '2px 7px', borderRadius: '99px', fontSize: '9px', fontWeight: '700', flexShrink: 0, marginLeft: '6px' }}>{a.status}</span>
                      </div>
                      <p style={{ fontSize: '12px', color: '#71717a', margin: '0 0 8px', lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{a.description}</p>
                      <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '10px', fontWeight: '700', color: costColor(a.cost), background: `${costColor(a.cost)}15`, padding: '2px 6px', borderRadius: '4px' }}>{a.cost}</span>
                        <span style={{ fontSize: '10px', fontWeight: '700', color: difficultyColor(a.difficulty), background: `${difficultyColor(a.difficulty)}15`, padding: '2px 6px', borderRadius: '4px' }}>{a.difficulty}</span>
                        {a.blockchain && <span style={{ fontSize: '10px', fontWeight: '700', color: '#818cf8', background: 'rgba(99,102,241,0.1)', padding: '2px 6px', borderRadius: '4px' }}>{a.blockchain}</span>}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>

        {/* Learn Section */}
        <section className="learn-section" style={{ background: '#0a0a0f', borderTop: '1px solid #18181b', padding: '48px 24px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <h2 style={{ fontSize: '22px', fontWeight: '900', margin: '0 0 4px' }}>Learn About Crypto Airdrops</h2>
                <p style={{ fontSize: '13px', color: '#71717a', margin: 0 }}>Everything you need to know to qualify for the best airdrops</p>
              </div>
              <Link href="/learn" style={{ background: '#18181b', color: '#a1a1aa', padding: '8px 14px', borderRadius: '10px', textDecoration: 'none', fontSize: '12px', fontWeight: '700', border: '1px solid #27272a', whiteSpace: 'nowrap' }}>
                All Articles →
              </Link>
            </div>
            <div className="learn-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '10px' }}>
              {[
                { slug: 'why-crypto-airdrops-are-becoming-harder-to-qualify-for', title: 'Why Crypto Airdrops Are Harder in 2026', desc: 'The golden era of easy airdrops is over. Learn how to adapt.' },
                { slug: 'how-to-build-onchain-activity-that-actually-matters', title: 'How to Build Onchain Activity That Matters', desc: 'Quality over quantity — build a wallet narrative that wins airdrops.' },
                { slug: 'best-free-crypto-airdrops-2026', title: 'Best Free Crypto Airdrops 2026', desc: 'Discover the best free airdrops available right now.' },
                { slug: 'how-to-set-up-metamask-for-airdrops', title: 'How to Set Up MetaMask for Airdrops', desc: 'Complete beginner guide to getting started with airdrops.' },
                { slug: 'what-is-depin-crypto-airdrops', title: 'What is DePIN? Earn Passive Crypto', desc: 'The hottest crypto trend paying users in 2026.' },
                { slug: 'how-to-avoid-crypto-airdrop-scams-2026', title: 'How to Avoid Airdrop Scams', desc: 'Stay safe while hunting for legitimate airdrops.' },
                { slug: 'top-crypto-airdrop-wallets-2026', title: 'Best Wallets for Crypto Airdrops 2026', desc: 'MetaMask, Rabby, Phantom — which wallet wins airdrops?' },
                { slug: 'crypto-airdrops-2026-evolution', title: 'How Crypto Airdrops Are Evolving in 2026', desc: 'Strategic, data-driven, utility-focused — the new airdrop era.' },
                { slug: 'news-report-the-2-trillion-wipeout', title: 'The $2 Trillion Crypto Wipeout', desc: 'What happened and what it means for airdrop hunters.' },
                { slug: 'solanas-institutional-firedancer-era', title: "Solana's Firedancer Era", desc: 'How Firedancer is transforming Solana into institutional-grade infrastructure.' },
                { slug: 'can-solana-reach-1000-deep-dive', title: 'Can Solana Reach $1,000?', desc: 'A deep dive into SOL fundamentals and future potential.' },
                { slug: 'nfts-flex-bayc-kidney-moment', title: 'When NFTs Were a Flex: The BAYC Era', desc: 'A look back at the viral NFT bull market culture.' },
                { slug: 'how-a-100-domain-became-a-70-million-digital-asset-the-story-behind-ai-com', title: 'How a $100 Domain Became $70 Million', desc: 'The story of AI.com and lessons for Web3 investors.' },
              ].map((article) => (
                <Link key={article.slug} href={`/learn/${article.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{ background: '#0d1117', border: '1px solid #18181b', borderRadius: '12px', padding: '14px' }}>
                    <h3 style={{ fontSize: '13px', fontWeight: '700', margin: '0 0 5px', color: '#fff' }}>{article.title}</h3>
                    <p style={{ fontSize: '12px', color: '#71717a', margin: 0, lineHeight: 1.5 }}>{article.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ borderTop: '1px solid #18181b', background: '#0a0a0f', padding: '60px 24px 32px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: '60px', marginBottom: '48px' }}>
              <div>
                <a href="https://3alamiyweb3.online" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#fff', marginBottom: '16px' }}>
                  <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #6366f1, #4f46e5)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>🪂</div>
                  <span style={{ fontWeight: '800', fontSize: '16px' }}>3alamiy Web3</span>
                </a>
                <p style={{ fontSize: '14px', color: '#71717a', lineHeight: 1.7, maxWidth: '280px', margin: '0 0 24px' }}>
                  The world's most comprehensive airdrop tracker and Web3 discovery platform. Stay ahead of the curve with verified alpha.
                </p>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <a href="https://x.com/3alamiyweb3" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', background: '#18181b', border: '1px solid #27272a', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#a1a1aa', fontSize: '14px', fontWeight: '900' }}>𝕏</a>
                  <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', background: '#18181b', border: '1px solid #27272a', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#a1a1aa', fontSize: '16px' }}>✈️</a>
                </div>
              </div>
              <div>
                <p style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#52525b', margin: '0 0 20px' }}>Platform</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[['Airdrops', 'https://3alamiyweb3.online'], ['Market', 'https://3alamiyweb3.online/market'], ['Learn', 'https://3alamiyweb3.online/learn'], ['Community', 'https://3alamiyweb3.online/community']].map(([label, href]) => (
                    <a key={label} href={href} style={{ color: '#71717a', textDecoration: 'none', fontSize: '14px' }}>{label}</a>
                  ))}
                </div>
              </div>
              <div>
                <p style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#52525b', margin: '0 0 20px' }}>Support</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[['About Us', 'https://3alamiyweb3.online/about'], ['FAQ', 'https://3alamiyweb3.online/faq'], ['Privacy Policy', 'https://3alamiyweb3.online/privacy'], ['Contact', 'https://t.me/web33alamiy']].map(([label, href]) => (
                    <a key={label} href={href} style={{ color: '#71717a', textDecoration: 'none', fontSize: '14px' }}>{label}</a>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ borderTop: '1px solid #18181b', paddingTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
              <p style={{ fontSize: '13px', color: '#52525b', margin: 0 }}>© {year} 3alamiyweb3.online. All rights reserved.</p>
              <div style={{ display: 'flex', gap: '24px' }}>
                <span style={{ fontSize: '13px', color: '#52525b' }}>○ Secure Platform</span>
                <span style={{ fontSize: '13px', color: '#52525b' }}>⚡ Real-time Data</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
