import Link from "next/link";
import FilterBar from "./FilterBar";

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

function EmailSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) return;
    setStatus('loading');
    try {
      await fetch('https://aahxneihytiogjvcznir.supabase.co/rest/v1/newsletter_subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhaHhuZWloeXRpb2dqdmN6bmlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3OTkzOTUsImV4cCI6MjA4NjM3NTM5NX0.BOcltYn8FrhX-a99JBIs5j5mD-sFnwtzGK1CgswvG_o',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhaHhuZWloeXRpb2dqdmN6bmlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3OTkzOTUsImV4cCI6MjA4NjM3NTM5NX0.BOcltYn8FrhX-a99JBIs5j5mD-sFnwtzGK1CgswvG_o',
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({ email, subscribed_at: new Date().toISOString() }),
      });
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') return (
    <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '14px', padding: '20px', textAlign: 'center' }}>
      <div style={{ fontSize: '28px', marginBottom: '8px' }}>🎉</div>
      <div style={{ fontSize: '16px', fontWeight: 800, color: '#10b981', marginBottom: '4px' }}>You're in!</div>
      <div style={{ fontSize: '13px', color: '#71717a' }}>Check your inbox for daily airdrop alerts.</div>
    </div>
  );

  return (
    <div style={{ display: 'flex', gap: '8px', maxWidth: '480px', margin: '0 auto' }}>
      <input
        type="email"
        placeholder="Enter your email address..."
        value={email}
        onChange={e => setEmail(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleSubmit()}
        style={{ flex: 1, background: '#0d1117', border: '1px solid #1a1f2e', color: '#fff', padding: '14px 18px', borderRadius: '12px', fontSize: '14px', outline: 'none', fontFamily: 'inherit' }}
      />
      <button
        onClick={handleSubmit}
        disabled={status === 'loading'}
        style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: '#fff', border: 'none', padding: '14px 24px', borderRadius: '12px', fontSize: '14px', fontWeight: 800, cursor: status === 'loading' ? 'not-allowed' : 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap', boxShadow: '0 4px 14px rgba(99,102,241,0.3)', opacity: status === 'loading' ? 0.7 : 1 }}
      >
        {status === 'loading' ? '⏳' : '🚀 Get Alerts'}
      </button>
    </div>
  );
}


export const metadata = {
  title: 'Best Crypto Airdrops 2026 — Free Step-by-Step Guides | 3alamiy Web3',
  description: 'Find and track the best free crypto airdrops in 2026. Step-by-step guides for Ethereum, Solana, Arbitrum airdrops. Updated daily. Easy to follow, no experience needed.',
  keywords: 'best crypto airdrops 2026, free crypto airdrop, airdrop tracker, how to get free crypto, ethereum airdrop, solana airdrop',
};

export default async function Home() {
  const airdrops = await getAllAirdrops();
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .airdrop-card {
          background: #0d1117;
          border: 1px solid #1a1f2e;
          border-radius: 16px;
          padding: 20px;
          cursor: pointer;
          transition: all 0.22s ease;
          text-decoration: none;
          color: #fff;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .airdrop-card:hover {
          border-color: rgba(99,102,241,0.4);
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.3);
        }
        .small-card {
          background: #0d1117;
          border: 1px solid #1a1f2e;
          border-radius: 14px;
          padding: 14px 16px;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
          color: #fff;
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .small-card:hover {
          border-color: rgba(99,102,241,0.3);
          transform: translateY(-1px);
        }
        .learn-card {
          background: #0d1117;
          border: 1px solid #1a1f2e;
          border-radius: 14px;
          padding: 18px;
          text-decoration: none;
          color: #fff;
          display: block;
          transition: all 0.2s ease;
        }
        .learn-card:hover { border-color: rgba(99,102,241,0.3); background: #111827; }
        .filter-pill {
          background: #0d1117; border: 1px solid #1a1f2e; color: #71717a;
          padding: 6px 14px; border-radius: 99px; font-size: 12px; font-weight: 600;
          text-decoration: none; transition: all 0.2s; white-space: nowrap;
        }
        .filter-pill:hover { border-color: rgba(99,102,241,0.4); color: #818cf8; background: rgba(99,102,241,0.08); }
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .header-inner { padding: 0 16px !important; }
          .hero-section { padding: 36px 16px 28px !important; }
          .hero-title { font-size: 28px !important; line-height: 1.15 !important; }
          .hero-buttons { flex-direction: column !important; }
          .hero-buttons a { text-align: center !important; }
          .content-pad { padding: 0 16px 60px !important; }
          .learn-grid { grid-template-columns: 1fr !important; }
          .learn-section { padding: 36px 16px !important; }
          .sign-up-btn { padding: 8px 14px !important; font-size: 13px !important; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>

      <div style={{ minHeight: '100vh', background: '#060910', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#fff' }}>

        {/* Hero */}
        <section className="hero-section" style={{ padding: '60px 24px 40px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '400px', background: 'radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '99px', padding: '5px 14px 5px 8px', fontSize: '12px', color: '#818cf8', marginBottom: '20px' }}>
              <span style={{ background: '#10b981', width: '6px', height: '6px', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 6px #10b981' }} />
              🔥 {airdrops.length}+ Active Airdrops Tracked
            </div>
            <h1 className="hero-title" style={{ fontSize: '44px', fontWeight: '900', margin: '0 0 14px', letterSpacing: '-0.03em', lineHeight: 1.1, maxWidth: '600px' }}>
              Find Legit Airdrops<br />
              <span style={{ background: 'linear-gradient(135deg, #818cf8, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Before Everyone Else</span>
            </h1>
            <p style={{ fontSize: '16px', color: '#71717a', maxWidth: '460px', margin: '0 0 28px', lineHeight: 1.7 }}>
              Track, analyze, and qualify for high-potential Web3 airdrops before they go mainstream.
            </p>
            <div className="hero-buttons" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="https://3alamiyweb3.online" style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: '#fff', padding: '12px 24px', borderRadius: '12px', textDecoration: 'none', fontWeight: '700', fontSize: '14px', boxShadow: '0 8px 24px rgba(99,102,241,0.3)' }}>🚀 Open Dashboard</a>
              <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', color: '#e4e4e7', padding: '12px 24px', borderRadius: '12px', textDecoration: 'none', fontWeight: '600', fontSize: '14px', border: '1px solid #1a1f2e' }}>✈️ Join Telegram</a>
            </div>
          </div>
        </section>

        {/* Main content */}
        <div className="content-pad" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 80px' }}>
          <FilterBar airdrops={airdrops} />
        </div>

        {/* Learn Section */}
        <section className="learn-section" style={{ background: '#080b12', borderTop: '1px solid #1a1f2e', borderBottom: '1px solid #1a1f2e', padding: '56px 24px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <h2 style={{ fontSize: '18px', fontWeight: '800', margin: '0 0 4px' }}>📚 Learn About Crypto Airdrops</h2>
                <p style={{ fontSize: '13px', color: '#52525b', margin: 0 }}>Everything you need to know to qualify for the best airdrops</p>
              </div>
              <Link href="/learn" style={{ background: '#0d1117', color: '#818cf8', padding: '7px 14px', borderRadius: '9px', textDecoration: 'none', fontSize: '12px', fontWeight: '700', border: '1px solid rgba(99,102,241,0.2)' }}>All Articles →</Link>
            </div>
            <div className="learn-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '10px' }}>
              {[
                { slug: 'discord-role-airdrops-guide-2026', title: 'Discord Role Airdrops 2026: Earn $1K-$10K From Free Roles', desc: 'Plasma OG = $20K. Boundless = $10K+. How to grind Discord roles the right way.', cat: 'Airdrops' },
                { slug: 'best-no-kyc-crypto-airdrops-2026', title: 'Best No-KYC Crypto Airdrops 2026', desc: 'Participate with just a wallet — no ID verification required.', cat: 'Airdrops' },
                { slug: 'best-low-gas-crypto-airdrops-2026', title: 'Best Low Gas Crypto Airdrops 2026', desc: 'Maximize returns without burning money on gas fees.', cat: 'Airdrops' },
                { slug: 'how-to-find-airdrops-before-everyone-else', title: 'How to Find Airdrops Before Everyone Else', desc: 'The exact system top hunters use to find airdrops weeks early.', cat: 'Airdrops' },
                { slug: 'why-crypto-airdrops-are-becoming-harder-to-qualify-for', title: 'Why Crypto Airdrops Are Harder in 2026', desc: 'The golden era of easy airdrops is over.', cat: 'Airdrops' },
                { slug: 'how-to-build-onchain-activity-that-actually-matters', title: 'How to Build Onchain Activity That Matters', desc: 'Quality over quantity — build a wallet narrative.', cat: 'Onchain' },
                { slug: 'best-free-crypto-airdrops-2026', title: 'Best Free Crypto Airdrops 2026', desc: 'Discover the best free airdrops right now.', cat: 'Airdrops' },
                { slug: 'how-to-set-up-metamask-for-airdrops', title: 'How to Set Up MetaMask for Airdrops', desc: 'Complete beginner guide to getting started.', cat: 'Beginners' },
                { slug: 'what-is-depin-crypto-airdrops', title: 'What is DePIN? Earn Passive Crypto', desc: 'The hottest crypto trend paying users in 2026.', cat: 'Ecosystems' },
                { slug: 'how-to-avoid-crypto-airdrop-scams-2026', title: 'How to Avoid Airdrop Scams', desc: 'Stay safe while hunting for legitimate airdrops.', cat: 'Beginners' },
                { slug: 'top-crypto-airdrop-wallets-2026', title: 'Best Wallets for Crypto Airdrops 2026', desc: 'MetaMask, Rabby, Phantom — which wins?', cat: 'Beginners' },
                { slug: 'crypto-airdrops-2026-evolution', title: 'How Crypto Airdrops Are Evolving in 2026', desc: 'Strategic, data-driven, utility-focused era.', cat: 'Airdrops' },
                { slug: 'news-report-the-2-trillion-wipeout', title: 'The $2 Trillion Crypto Wipeout', desc: 'What happened and what it means for hunters.', cat: 'Market' },
                { slug: 'solanas-institutional-firedancer-era', title: "Solana's Firedancer Era", desc: 'Transforming Solana into institutional infrastructure.', cat: 'Onchain' },
                { slug: 'can-solana-reach-1000-deep-dive', title: 'Can Solana Reach $1,000?', desc: 'A deep dive into SOL future potential.', cat: 'Onchain' },
                { slug: 'nfts-flex-bayc-kidney-moment', title: 'When NFTs Were a Flex: The BAYC Era', desc: 'A look back at the viral NFT bull market.', cat: 'Market' },
                { slug: 'how-a-100-domain-became-a-70-million-digital-asset-the-story-behind-ai-com', title: 'How a $100 Domain Became $70 Million', desc: 'The story of AI.com and Web3 lessons.', cat: 'Market' },
              ].map((article) => {
                const catColors: Record<string, string> = { Airdrops: '#818cf8', Onchain: '#34d399', Market: '#fbbf24', Beginners: '#60a5fa', Ecosystems: '#c084fc' };
                return (
                  <Link key={article.slug} href={`/learn/${article.slug}`} className="learn-card">
                    <span style={{ fontSize: '10px', fontWeight: '800', color: catColors[article.cat] || '#818cf8', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '7px' }}>{article.cat}</span>
                    <h3 style={{ fontSize: '13px', fontWeight: '700', margin: '0 0 5px', color: '#f4f4f5', lineHeight: 1.4 }}>{article.title}</h3>
                    <p style={{ fontSize: '12px', color: '#52525b', margin: 0, lineHeight: 1.5 }}>{article.desc}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Internal Links — SEO Section */}
        <section style={{ background: '#060910', padding: '48px 24px', borderTop: '1px solid #1a1f2e' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '13px', fontWeight: '800', color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>
              All Crypto Airdrops — {airdrops.length} Guides
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {airdrops.map((a: any) => (
                <Link
                  key={a.slug}
                  href={`/airdrops/${a.slug}`}
                  style={{
                    background: '#0d1117',
                    border: '1px solid #1a1f2e',
                    color: '#71717a',
                    padding: '5px 12px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                >
                  {a.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Email Newsletter Signup */}
        <section style={{ padding: '64px 24px', background: 'linear-gradient(135deg, #0f0c29, #060910, #0f0c29)' }}>
          <div style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', color: '#818cf8', padding: '6px 16px', borderRadius: '99px', fontSize: '12px', fontWeight: 800, marginBottom: '20px', letterSpacing: '0.05em' }}>
              📧 FREE DAILY ALERTS
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: 900, margin: '0 0 12px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Never Miss a New Airdrop
            </h2>
            <p style={{ fontSize: '15px', color: '#71717a', margin: '0 0 32px', lineHeight: 1.7 }}>
              Get the best new airdrops delivered to your inbox every day. Free, no spam, unsubscribe anytime.
            </p>
            <EmailSignup />
            <p style={{ fontSize: '12px', color: '#3f3f46', margin: '16px 0 0' }}>
              Join 500+ Web3 farmers · No spam · Unsubscribe anytime
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ background: '#060910', padding: '56px 24px 32px', borderTop: '1px solid #1a1f2e' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: '60px', marginBottom: '40px' }}>
              <div>
                <a href="https://3alamiyweb3.online" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#fff', marginBottom: '14px' }}>
                  <div style={{ width: '34px', height: '34px', background: 'linear-gradient(135deg, #6366f1, #4f46e5)', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>🪂</div>
                  <span style={{ fontWeight: '800', fontSize: '15px' }}>3alamiy Web3</span>
                </a>
                <p style={{ fontSize: '13px', color: '#3f3f46', lineHeight: 1.7, maxWidth: '260px', margin: '0 0 18px' }}>The world's most comprehensive airdrop tracker and Web3 discovery platform.</p>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <a href="https://x.com/3alamiyweb3" target="_blank" rel="noopener noreferrer" style={{ width: '34px', height: '34px', background: '#0d1117', border: '1px solid #1a1f2e', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#71717a', fontSize: '12px', fontWeight: '900' }}>𝕏</a>
                  <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" style={{ width: '34px', height: '34px', background: '#0d1117', border: '1px solid #1a1f2e', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: '14px' }}>✈️</a>
                </div>
              </div>
              <div>
                <p style={{ fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#3f3f46', margin: '0 0 16px' }}>Platform</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[['Airdrops', 'https://3alamiyweb3.online'], ['Market', 'https://3alamiyweb3.online/market'], ['Learn', 'https://3alamiyweb3.online/learn'], ['Community', 'https://3alamiyweb3.online/community']].map(([label, href]) => (
                    <a key={label} href={href} style={{ color: '#52525b', textDecoration: 'none', fontSize: '13px' }}>{label}</a>
                  ))}
                </div>
              </div>
              <div>
                <p style={{ fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#3f3f46', margin: '0 0 16px' }}>Support</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[['About Us', 'https://3alamiyweb3.online/about'], ['FAQ', 'https://3alamiyweb3.online/faq'], ['Privacy Policy', 'https://3alamiyweb3.online/privacy'], ['Contact', 'https://t.me/web33alamiy']].map(([label, href]) => (
                    <a key={label} href={href} style={{ color: '#52525b', textDecoration: 'none', fontSize: '13px' }}>{label}</a>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ borderTop: '1px solid #1a1f2e', paddingTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
              <p style={{ fontSize: '12px', color: '#3f3f46', margin: 0 }}>© {year} 3alamiyweb3.online. All rights reserved.</p>
              <div style={{ display: 'flex', gap: '20px' }}>
                <span style={{ fontSize: '12px', color: '#3f3f46' }}>○ Secure Platform</span>
                <span style={{ fontSize: '12px', color: '#3f3f46' }}>⚡ Real-time Data</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
