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
  const year = new Date().getFullYear();
  const reward = a.reward_min && a.reward_max ? `$${a.reward_min} - $${a.reward_max}` : a.reward_min ? `$${a.reward_min}+` : a.value || '';
  const rewardText = reward ? `Earn ${reward}.` : 'High reward potential.';
  const costText = a.cost === 'Free' ? '🆓 Free to join.' : '💰 Low cost.';
  const desc = `${costText} ${a.difficulty} difficulty. ${rewardText} Step-by-step guide to qualify for the ${a.name} airdrop on ${a.blockchain}. Updated ${year}.`.slice(0, 160);
  return {
    title: `${a.name} Airdrop — ${a.cost === 'Free' ? 'Free' : 'Low Cost'}, ${a.difficulty} Difficulty | How to Qualify ${year}`,
    description: desc,
    keywords: `${a.name} airdrop, ${a.name} airdrop guide, how to get ${a.name} airdrop, ${a.blockchain} airdrop ${year}, free crypto airdrop, ${a.name} tokens`,
    openGraph: {
      title: `${a.name} Airdrop Guide ${year} — ${a.cost === 'Free' ? 'Free' : 'Low Cost'} & ${a.difficulty}`,
      description: desc,
      url: `https://seo.3alamiyweb3.online/airdrops/${slug}`,
      siteName: '3alamiy Web3',
      images: a.logo ? [{ url: a.logo, width: 400, height: 400, alt: `${a.name} airdrop logo` }] : [],
      type: 'article',
    },
    twitter: { card: 'summary_large_image', title: `${a.name} Airdrop — Free Guide ${year}`, description: desc },
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
    name: `How to Participate in ${a.name} Airdrop and Qualify for Tokens`,
    description: `Step-by-step guide to participate in the ${a.name} airdrop on ${a.blockchain}. This guide covers all ${steps.length} required steps to qualify for the token distribution.`,
    image: a.logo ? { '@type': 'ImageObject', url: a.logo } : undefined,
    totalTime: `PT${Math.max(15, steps.length * 3)}M`,
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: a.cost === 'Free' ? '0' : '10',
    },
    supply: [
      { '@type': 'HowToSupply', name: 'Crypto Wallet (MetaMask or Phantom)' },
      { '@type': 'HowToSupply', name: `${a.blockchain} Network Access` },
      ...(a.cost === 'Free' ? [] : [{ '@type': 'HowToSupply', name: 'Small amount of crypto for gas fees' }]),
    ],
    tool: [
      { '@type': 'HowToTool', name: '3alamiy Web3 Airdrop Tracker' },
      { '@type': 'HowToTool', name: 'Web3 Wallet' },
    ],
    step: steps.map((s: string, i: number) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s,
      text: `${s}. This is step ${i + 1} of ${steps.length} to qualify for the ${a.name} airdrop.`,
      url: `https://seo.3alamiyweb3.online/airdrops/${a.slug}#guide`,
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What is ${a.name} airdrop?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${a.name} is a ${a.status.toLowerCase()} crypto airdrop on the ${a.blockchain} blockchain. ${a.description} It is ${a.cost === 'Free' ? 'free' : 'paid'} to participate and rated ${a.difficulty} difficulty.`,
        },
      },
      {
        '@type': 'Question',
        name: `Is ${a.name} airdrop legit?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes, ${a.name} is a verified ${a.blockchain} project tracked by 3alamiy Web3. The airdrop is currently ${a.status.toLowerCase()}. Always use the official links provided in our guide and never share your seed phrase with anyone.`,
        },
      },
      {
        '@type': 'Question',
        name: `How much can I earn from ${a.name} airdrop?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The estimated reward for the ${a.name} airdrop is ${reward}. Actual rewards depend on your activity level, consistency, and eligibility criteria set by the project. Early participants typically receive larger allocations.`,
        },
      },
      {
        '@type': 'Question',
        name: `Is the ${a.name} airdrop free?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: a.cost === 'Free'
            ? `Yes, the ${a.name} airdrop is completely free to participate in. No investment is required — just complete the ${steps.length} steps in our guide.`
            : `The ${a.name} airdrop requires some on-chain transactions which may involve small gas fees on the ${a.blockchain} network.`,
        },
      },
      {
        '@type': 'Question',
        name: `How long does it take to complete the ${a.name} airdrop?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Completing the ${a.name} airdrop guide takes approximately ${Math.max(15, steps.length * 3)} minutes. The difficulty level is ${a.difficulty} and there are ${steps.length} steps to complete.`,
        },
      },
      {
        '@type': 'Question',
        name: `What wallet do I need for ${a.name} airdrop?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `For the ${a.name} airdrop on ${a.blockchain}, you will need a compatible Web3 wallet. MetaMask works for most EVM-compatible chains. For Solana-based airdrops, Phantom wallet is recommended. Make sure to use the official wallet and never share your seed phrase.`,
        },
      },
      {
        '@type': 'Question',
        name: `When will ${a.name} airdrop tokens be distributed?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The ${a.name} airdrop token distribution date has not been officially announced yet. We recommend completing all participation steps now to maximize your eligibility. Follow 3alamiy Web3 for the latest updates on the ${a.name} airdrop timeline.`,
        },
      },
    ],
  };

  // BreadcrumbList schema for better navigation signals
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo.3alamiyweb3.online' },
      { '@type': 'ListItem', position: 2, name: 'Airdrops', item: 'https://seo.3alamiyweb3.online/airdrops' },
      { '@type': 'ListItem', position: 3, name: `${a.name} Airdrop`, item: `https://seo.3alamiyweb3.online/airdrops/${a.slug}` },
    ],
  };

  // Article schema for content freshness signals
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${a.name} Airdrop Guide ${year}: How to Participate and Earn Free Tokens`,
    description: a.description,
    image: a.logo || '',
    datePublished: a.created_at || new Date().toISOString(),
    dateModified: new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: '3alamiy Web3',
      url: 'https://seo.3alamiyweb3.online',
    },
    publisher: {
      '@type': 'Organization',
      name: '3alamiy Web3',
      url: 'https://seo.3alamiyweb3.online',
      logo: { '@type': 'ImageObject', url: 'https://3alamiyweb3.online/logo.png' },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://seo.3alamiyweb3.online/airdrops/${a.slug}`,
    },
    keywords: `${a.name} airdrop, ${a.blockchain} airdrop, free crypto airdrop 2026, ${tags.join(', ')}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
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

        <main className="main-pad" style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 24px 80px' }}>

          {/* Breadcrumbs */}
          <nav aria-label="breadcrumb" style={{ marginBottom: '16px', fontSize: '13px', color: '#52525b' }}>
            <a href="https://seo.3alamiyweb3.online" style={{ color: '#6366f1', textDecoration: 'none' }}>Home</a>
            <span style={{ margin: '0 8px' }}>›</span>
            <a href="https://seo.3alamiyweb3.online/airdrops" style={{ color: '#6366f1', textDecoration: 'none' }}>Airdrops</a>
            <span style={{ margin: '0 8px' }}>›</span>
            <span>{a.name}</span>
          </nav>

          {/* Quick Answer Block — for Google AI Overviews + ChatGPT citations */}
          <div style={{ background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '14px', padding: '16px 20px', marginBottom: '28px', borderLeft: '3px solid #6366f1' }}>
            <p style={{ fontSize: '11px', fontWeight: '800', color: '#6366f1', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 6px' }}>⚡ Quick Answer</p>
            <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: '#fff' }}>{a.name}</strong> is a {a.status === 'Active' ? 'live' : a.status.toLowerCase()} crypto airdrop on the <strong style={{ color: '#fff' }}>{a.blockchain}</strong> blockchain. It is <strong style={{ color: '#fff' }}>{a.cost}</strong> to participate and rated <strong style={{ color: '#fff' }}>{a.difficulty}</strong> difficulty. Users can complete {steps.length} steps to qualify for the token distribution. {a.reward_min ? `Estimated reward: $${a.reward_min}${a.reward_max ? ` - $${a.reward_max}` : '+'}.` : 'Reward amount is to be announced.'}
            </p>
          </div>

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
                <h2 style={{ fontSize: '20px', fontWeight: '800', margin: '0 0 14px' }}>What is {a.name} Airdrop?</h2>
                <p style={{ fontSize: '15px', color: '#a1a1aa', lineHeight: 1.8, margin: '0 0 14px' }}>{a.description}</p>
                <p style={{ fontSize: '15px', color: '#a1a1aa', lineHeight: 1.8, margin: 0 }}>
                  The {a.name} airdrop is currently <strong style={{ color: '#10b981' }}>{a.status}</strong> on the {a.blockchain} blockchain.
                  Difficulty is rated <strong style={{ color: '#fff' }}>{a.difficulty}</strong> and participation is <strong style={{ color: costColor }}>{a.cost}</strong>.
                  {reward !== 'TBA' ? ` Estimated reward: ${reward}.` : ''}
                </p>
              </section>

              {/* Guide */}
              <ParticipationGuide steps={steps} airdropName={a.name} />

              {/* CTA Banner — after guide steps */}
              <section style={{ margin: '8px 0 24px' }}>
                <div style={{ background: 'linear-gradient(135deg, #0d1117, #0f1520)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '16px', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 6px #10b981' }} />
                      <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#10b981' }}>All steps done?</span>
                    </div>
                    <p style={{ fontSize: '15px', fontWeight: '800', color: '#fff', margin: '0 0 4px' }}>Don't miss the next airdrop</p>
                    <p style={{ fontSize: '13px', color: '#71717a', margin: 0 }}>Get instant alerts when new airdrops drop. Free, no spam.</p>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: '#fff', padding: '11px 20px', borderRadius: '10px', textDecoration: 'none', fontSize: '13px', fontWeight: '800', boxShadow: '0 4px 14px rgba(99,102,241,0.3)', whiteSpace: 'nowrap' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                      Join Telegram
                    </a>
                    <a href="/airdrops"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'transparent', color: '#a1a1aa', padding: '11px 20px', borderRadius: '10px', textDecoration: 'none', fontSize: '13px', fontWeight: '700', border: '1px solid #1a1f2e', whiteSpace: 'nowrap' }}>
                      More Airdrops →
                    </a>
                  </div>
                </div>
              </section>

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
                <h2 style={{ fontSize: '22px', fontWeight: '900', margin: '0 0 18px' }}>Frequently Asked Questions About {a.name}</h2>
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
                <h2 style={{ fontSize: '18px', fontWeight: '800', margin: '0 0 14px' }}>📚 Want to Learn More About Crypto Airdrops?</h2>
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
                  <h2 style={{ fontSize: '20px', fontWeight: '800', margin: '0 0 16px' }}>What Other {a.blockchain} Airdrops Are Available?</h2>
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
              {/* Similar Rewards Widget */}
              <div style={{ background: '#0d1117', border: '1px solid #18181b', borderRadius: '16px', padding: '20px', marginBottom: '14px', textAlign: 'center' }}>
                <p style={{ fontSize: '10px', fontWeight: '800', color: '#52525b', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 10px' }}>SIMILAR REWARDS <span style={{ background: '#1a1f2e', color: '#52525b', fontSize: '9px', padding: '2px 6px', borderRadius: '99px', marginLeft: '4px' }}>ⓘ</span></p>
                <p style={{ fontSize: '32px', fontWeight: '900', color: '#10b981', margin: '0 0 6px', letterSpacing: '-0.02em' }}>
                  {a.reward_min && a.reward_max
                    ? `$${a.reward_min >= 1000 ? (a.reward_min/1000).toFixed(0)+'K' : a.reward_min}–$${a.reward_max >= 1000 ? (a.reward_max/1000).toFixed(0)+'K' : a.reward_max}`
                    : a.reward_min
                    ? `$${a.reward_min >= 1000 ? (a.reward_min/1000).toFixed(0)+'K' : a.reward_min}+`
                    : a.difficulty === 'Easy' ? '$50–$500'
                    : a.difficulty === 'Medium' ? '$200–$2K'
                    : '$500–$5K'}
                </p>
                <p style={{ fontSize: '12px', color: '#52525b', margin: 0 }}>past similar projects</p>
              </div>

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


      </div>
    </>
  );
}
