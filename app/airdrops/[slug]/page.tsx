import { notFound } from 'next/navigation';
import ParticipationGuide from './ParticipationGuide';

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

async function getAirdropBySlug(slug: string) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/airdrops?slug=eq.${slug}&select=*`, {
    headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` },
    next: { revalidate: 3600 },
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data[0] || null;
}

export async function generateStaticParams() {
  const airdrops = await getAllAirdrops();
  return airdrops.map((a: any) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = await getAirdropBySlug(slug);
  if (!a) return { title: 'Airdrop Not Found | 3alamiy Web3' };
  const reward = a.reward_min && a.reward_max ? `$${a.reward_min} - $${a.reward_max}` : a.value || '';
  const desc = `${a.description} ${reward ? `Potential reward: ${reward}.` : ''} Difficulty: ${a.difficulty}. Free step-by-step guide for ${new Date().getFullYear()}.`.slice(0, 160);
  return {
    title: `${a.name.replace(/\s*airdrop\s*/gi, ' ').trim()} Airdrop Guide ${new Date().getFullYear()} | How to Qualify | 3alamiy Web3`,
    description: desc,
    keywords: `${a.name}, ${a.name} airdrop, ${a.blockchain} airdrop, crypto airdrop ${new Date().getFullYear()}, free crypto, ${a.name} guide`,
    openGraph: {
      title: `${a.name} Airdrop Guide ${new Date().getFullYear()}`,
      description: desc,
      url: `https://seo.3alamiyweb3.online/airdrops/${slug}`,
      siteName: '3alamiy Web3',
      images: a.logo ? [{ url: a.logo, width: 400, height: 400, alt: `${a.name} logo` }] : [],
      type: 'article',
    },
    twitter: { card: 'summary_large_image', title: `${a.name} Airdrop Guide ${new Date().getFullYear()}`, description: desc },
    alternates: { canonical: `https://seo.3alamiyweb3.online/airdrops/${slug}` },
  };
}

export default async function AirdropPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [a, allAirdrops] = await Promise.all([getAirdropBySlug(slug), getAllAirdrops()]);
  if (!a) notFound();

  const steps: string[] = Array.isArray(a.guide_steps) ? a.guide_steps : Array.isArray(a.guideSteps) ? a.guideSteps : [];
  const tags: string[] = Array.isArray(a.tags) ? a.tags : [];
  const links: Record<string, string> = (a.links && typeof a.links === 'object' && !Array.isArray(a.links)) ? a.links : {};
  const costLabel = a.cost === 'Paid' ? 'Mainnet (Paid)' : a.cost === 'Low' ? 'Mainnet (Low)' : 'Testnet (Free)';
  const costColor = a.cost === 'Paid' ? '#f43f5e' : a.cost === 'Low' ? '#f59e0b' : '#10b981';
  const reward = a.reward_min && a.reward_max ? `$${a.reward_min} - $${a.reward_max}` : a.value || 'TBA';
  const relatedAirdrops = allAirdrops.filter((x: any) => x.slug !== slug && x.blockchain === a.blockchain).slice(0, 3);
  const year = new Date().getFullYear();

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Qualify for ${a.name} Airdrop ${year}`,
    description: a.description,
    image: a.logo || '',
    totalTime: 'PT20M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: a.cost === 'Free' ? '0' : '10' },
    step: steps.map((s: string, i: number) => ({ '@type': 'HowToStep', position: i + 1, name: s, text: s })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: `Is ${a.name} airdrop legit?`, acceptedAnswer: { '@type': 'Answer', text: `Yes, ${a.name} is a verified ${a.blockchain} project with an active airdrop campaign. Always use official links only.` } },
      { '@type': 'Question', name: `How much can I earn from ${a.name} airdrop?`, acceptedAnswer: { '@type': 'Answer', text: `The estimated reward for ${a.name} airdrop is ${reward}. Actual rewards depend on your activity level and eligibility.` } },
      { '@type': 'Question', name: `Is the ${a.name} airdrop free?`, acceptedAnswer: { '@type': 'Answer', text: a.cost === 'Free' ? `Yes, the ${a.name} airdrop is completely free to participate in.` : `The ${a.name} airdrop requires some on-chain transactions which may involve gas fees.` } },
      { '@type': 'Question', name: `How long does the ${a.name} airdrop take?`, acceptedAnswer: { '@type': 'Answer', text: `Completing the ${a.name} airdrop guide takes approximately 15-20 minutes. Difficulty level is ${a.difficulty}.` } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <style>{`
        * { box-sizing: border-box; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .header-inner { padding: 0 16px !important; }
          .page-grid { grid-template-columns: 1fr !important; }
          .sidebar { position: static !important; }
          .hero-flex { flex-direction: column !important; }
          .hero-img { width: 72px !important; height: 72px !important; }
          .hero-title { font-size: 26px !important; }
          .related-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .main-pad { padding: 24px 16px 48px !important; }
          .breadcrumb { padding: 16px 16px 0 !important; }
          .sign-up-btn { padding: 8px 14px !important; font-size: 13px !important; }
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
                <a key={label} href="https://3alamiyweb3.online" style={{ color: label === 'Discover' ? '#fff' : '#71717a', textDecoration: 'none', fontSize: '14px', fontWeight: label === 'Discover' ? '700' : '500' }}>{label}</a>
              ))}
            </nav>
            <a href="https://3alamiyweb3.online/profile" className="sign-up-btn" style={{ background: '#6366f1', color: '#fff', padding: '9px 18px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', fontWeight: '700', flexShrink: 0, whiteSpace: 'nowrap' }}>Sign Up</a>
          </div>
        </header>

        <main className="main-pad" style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 24px 80px' }}>

          {/* Breadcrumbs */}
          <nav aria-label="breadcrumb" style={{ marginBottom: '28px', fontSize: '13px', color: '#52525b' }}>
            <a href="https://seo.3alamiyweb3.online" style={{ color: '#6366f1', textDecoration: 'none' }}>Home</a>
            <span style={{ margin: '0 8px' }}>›</span>
            <a href="https://seo.3alamiyweb3.online/airdrops" style={{ color: '#6366f1', textDecoration: 'none' }}>Airdrops</a>
            <span style={{ margin: '0 8px' }}>›</span>
            <span>{a.name}</span>
          </nav>

          <div className="page-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '32px', alignItems: 'start' }}>
            {/* LEFT */}
            <div>
              {/* Hero */}
              <div className="hero-flex" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', marginBottom: '32px' }}>
                {a.logo && <img className="hero-img" src={a.logo} alt={`${a.name} logo`} width={96} height={96} style={{ borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', flexShrink: 0 }} />}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                    <span style={{ background: 'rgba(99,102,241,0.1)', color: '#818cf8', border: '1px solid rgba(99,102,241,0.2)', padding: '3px 10px', borderRadius: '99px', fontSize: '11px', fontWeight: '700' }}>{a.blockchain}</span>
                    <span style={{ background: a.status === 'Active' ? 'rgba(16,185,129,0.1)' : 'rgba(113,113,122,0.1)', color: a.status === 'Active' ? '#10b981' : '#71717a', border: `1px solid ${a.status === 'Active' ? 'rgba(16,185,129,0.2)' : 'rgba(113,113,122,0.2)'}`, padding: '3px 10px', borderRadius: '99px', fontSize: '11px', fontWeight: '700' }}>{a.status}</span>
                    <span style={{ background: `${costColor}15`, color: costColor, border: `1px solid ${costColor}30`, padding: '3px 10px', borderRadius: '99px', fontSize: '11px', fontWeight: '700' }}>{costLabel}</span>
                  </div>
                  <h1 className="hero-title" style={{ fontSize: '30px', fontWeight: '900', margin: '0 0 12px', letterSpacing: '-0.02em', lineHeight: 1.15 }}>{a.name.replace(/\s*airdrop\s*/gi, ' ').trim()} Airdrop Guide {year}</h1>
                  <p style={{ fontSize: '16px', color: '#a1a1aa', lineHeight: 1.7, margin: '0 0 20px' }}>{a.description}</p>
                  <a href="#guide" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#6366f1', color: '#fff', padding: '12px 24px', borderRadius: '14px', textDecoration: 'none', fontWeight: '800', fontSize: '14px' }}>Start Guide →</a>
                </div>
              </div>

              {/* What is section */}
              <section style={{ background: '#0d1117', border: '1px solid #18181b', borderRadius: '20px', padding: '24px', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '800', margin: '0 0 14px' }}>What is {a.name}?</h2>
                <p style={{ fontSize: '15px', color: '#a1a1aa', lineHeight: 1.8, margin: '0 0 14px' }}>{a.description}</p>
                <p style={{ fontSize: '15px', color: '#a1a1aa', lineHeight: 1.8, margin: 0 }}>
                  The {a.name} airdrop is currently <strong style={{ color: '#10b981' }}>{a.status}</strong> on the {a.blockchain} blockchain.
                  Difficulty is rated <strong style={{ color: '#fff' }}>{a.difficulty}</strong> and participation is <strong style={{ color: costColor }}>{a.cost}</strong>.
                  {reward !== 'TBA' ? ` Estimated reward: ${reward}.` : ''}
                </p>
              </section>

              {/* Guide */}
              <ParticipationGuide steps={steps} airdropName={a.name} />

              {/* Tags */}
              {tags.length > 0 && (
                <section style={{ marginBottom: '24px' }}>
                  <h2 style={{ fontSize: '11px', fontWeight: '700', margin: '0 0 12px', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Categories</h2>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {tags.map((tag: string) => (
                      <span key={tag} style={{ background: '#18181b', color: '#a1a1aa', padding: '6px 14px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', border: '1px solid #27272a' }}>{tag}</span>
                    ))}
                  </div>
                </section>
              )}

              {/* FAQ */}
              <section style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: '900', margin: '0 0 18px' }}>Frequently Asked Questions</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    { q: `Is ${a.name} airdrop legit?`, a: `Yes, ${a.name} is a verified ${a.blockchain} project. Always use official links and never share your private keys.` },
                    { q: `How much can I earn from the ${a.name} airdrop?`, a: `The estimated reward is ${reward}. Actual rewards depend on your on-chain activity and eligibility.` },
                    { q: `Is the ${a.name} airdrop free?`, a: a.cost === 'Free' ? `Yes, completely free — no investment required.` : `Small gas fees may apply for on-chain transactions.` },
                    { q: `How long does it take to complete?`, a: `Approximately 15-20 minutes. Difficulty is rated ${a.difficulty}.` },
                  ].map((faq, i) => (
                    <div key={i} style={{ background: '#0d1117', border: '1px solid #18181b', borderRadius: '14px', padding: '18px' }}>
                      <h3 style={{ fontSize: '15px', fontWeight: '700', margin: '0 0 8px', color: '#fff' }}>{faq.q}</h3>
                      <p style={{ fontSize: '14px', color: '#a1a1aa', margin: 0, lineHeight: 1.7 }}>{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Related Learn Articles */}
              <section style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: '800', margin: '0 0 14px' }}>📚 Learn More</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { slug: 'how-to-set-up-metamask-for-airdrops', title: 'How to Set Up MetaMask for Airdrops' },
                    { slug: 'how-to-avoid-crypto-airdrop-scams-2026', title: 'How to Avoid Airdrop Scams' },
                    { slug: 'how-to-build-onchain-activity-that-actually-matters', title: 'How to Build Onchain Activity That Matters' },
                    { slug: 'top-crypto-airdrop-wallets-2026', title: 'Best Wallets for Crypto Airdrops 2026' },
                    ...(a.cost === 'Free'
                      ? [{ slug: 'best-free-crypto-airdrops-2026', title: 'Best Free Crypto Airdrops 2026' }]
                      : []),
                    ...(a.category === 'DePIN' || (a.tags && a.tags.includes('DePIN'))
                      ? [{ slug: 'what-is-depin-crypto-airdrops', title: 'What is DePIN? Earn Passive Crypto' }]
                      : []),
                  ].slice(0, 4).map((article) => (
                    <a key={article.slug} href={`/learn/${article.slug}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px', background: '#0d1117', border: '1px solid #18181b', borderRadius: '10px', textDecoration: 'none', color: '#a1a1aa', fontSize: '13px', fontWeight: '600' }}>
                      <span>→ {article.title}</span>
                    </a>
                  ))}
                </div>
              </section>

              {/* Related */}
              {relatedAirdrops.length > 0 && (
                <section>
                  <h2 style={{ fontSize: '20px', fontWeight: '800', margin: '0 0 16px' }}>More {a.blockchain} Airdrops</h2>
                  <div className="related-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                    {relatedAirdrops.map((r: any) => (
                      <a key={r.slug} href={`/airdrops/${r.slug}`} style={{ background: '#0d1117', border: '1px solid #18181b', borderRadius: '14px', padding: '16px', textDecoration: 'none', color: '#fff', display: 'block' }}>
                        {r.logo && <img src={r.logo} alt={r.name} width={36} height={36} style={{ borderRadius: '8px', marginBottom: '10px' }} />}
                        <div style={{ fontSize: '13px', fontWeight: '700', marginBottom: '4px' }}>{r.name}</div>
                        <div style={{ fontSize: '11px', color: '#71717a' }}>{r.difficulty} · {r.blockchain}</div>
                      </a>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* SIDEBAR */}
            <aside className="sidebar" style={{ position: 'sticky', top: '80px' }}>
              <div style={{ background: '#0d1117', border: '1px solid #18181b', borderRadius: '24px', padding: '24px', marginBottom: '14px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '800', margin: '0 0 20px' }}>📊 Quick Stats</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    ['⏱ Est. Time', '15 - 20 Mins', '#fff'],
                    ['💰 Reward', reward, '#10b981'],
                    ['⚡ Gas', costLabel, costColor],
                    ['👥 Difficulty', a.difficulty, '#fff'],
                    ['🔗 Blockchain', a.blockchain, '#818cf8'],
                  ].map(([label, value, color]) => (
                    <div key={label as string} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#52525b' }}>{label}</span>
                      <span style={{ fontSize: '13px', fontWeight: '700', color: color as string }}>{value}</span>
                    </div>
                  ))}
                </div>
                {Object.keys(links).length > 0 && (
                  <div style={{ borderTop: '1px solid #18181b', marginTop: '20px', paddingTop: '20px' }}>
                    <p style={{ fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', color: '#52525b', marginBottom: '10px' }}>Official Links</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {Object.entries(links).map(([key, url]) => (
                        <a key={key} href={url as string} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', background: '#18181b', borderRadius: '10px', border: '1px solid #27272a', textDecoration: 'none', color: '#e4e4e7' }}>
                          <span style={{ fontSize: '13px', fontWeight: '600', textTransform: 'capitalize' }}>{key === 'X' || key === 'twitter' ? '𝕏 ' : '🌐 '}{key}</span>
                          <span style={{ fontSize: '11px', color: '#52525b' }}>↗</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div style={{ background: 'linear-gradient(135deg, #4f46e5, #4338ca)', borderRadius: '24px', padding: '24px', marginBottom: '14px' }}>
                <h4 style={{ fontSize: '17px', fontWeight: '800', margin: '0 0 8px' }}>Need Help?</h4>
                <p style={{ color: 'rgba(199,210,254,0.8)', fontSize: '13px', lineHeight: 1.6, margin: '0 0 18px' }}>Join our community for real-time airdrop alerts.</p>
                <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#fff', color: '#4f46e5', padding: '12px', borderRadius: '12px', textDecoration: 'none', fontWeight: '800', fontSize: '14px' }}>✈️ Join Telegram</a>
              </div>
              <div style={{ background: '#0d1117', border: '1px solid #18181b', borderRadius: '14px', padding: '14px', textAlign: 'center', marginBottom: '14px' }}>
                <a href="https://seo.3alamiyweb3.online" style={{ display: 'block', color: '#6366f1', textDecoration: 'none', fontWeight: '700', fontSize: '14px', marginBottom: '6px' }}>
                  🪂 Browse All Airdrops →
                </a>
                <p style={{ fontSize: '11px', color: '#52525b', margin: 0 }}>{`${allAirdrops.length}+ guides available`}</p>
              </div>
              <div style={{ background: '#0d1117', border: '1px solid #18181b', borderRadius: '14px', padding: '14px', textAlign: 'center' }}>
                <p style={{ fontSize: '12px', color: '#52525b', margin: 0 }}>Last updated: <span style={{ color: '#71717a', fontWeight: '600' }}>{new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span></p>
              </div>
            </aside>
          </div>
        </main>

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
