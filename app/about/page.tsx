import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About 3alamiy Web3 — Crypto Airdrop Tracker & Guide Platform',
  description: '3alamiy Web3 is a leading crypto airdrop tracker helping 2,500+ Web3 users discover, track, and participate in the best crypto airdrops of 2026. Free step-by-step guides for every airdrop.',
  keywords: 'about 3alamiy web3, crypto airdrop tracker, airdrop guide platform, web3 community',
  alternates: { canonical: 'https://seo.3alamiyweb3.online/about' },
  openGraph: {
    title: 'About 3alamiy Web3 — Crypto Airdrop Tracker',
    description: '3alamiy Web3 is a leading crypto airdrop tracker helping Web3 users discover and participate in the best airdrops of 2026.',
    url: 'https://seo.3alamiyweb3.online/about',
    siteName: '3alamiy Web3',
    type: 'website',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '3alamiy Web3',
  alternateName: '3alamiy',
  url: 'https://seo.3alamiyweb3.online',
  logo: 'https://3alamiyweb3.online/logo.png',
  description: '3alamiy Web3 is a crypto airdrop tracker and guide platform helping Web3 users discover, track, and participate in the best crypto airdrops. We provide step-by-step guides, difficulty ratings, reward estimates, and daily updates.',
  foundingDate: '2025',
  sameAs: [
    'https://3alamiyweb3.online',
    'https://x.com/3alamiyweb3',
    'https://t.me/web33alamiy',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    url: 'https://t.me/web33alamiy',
  },
  areaServed: 'Worldwide',
  knowsAbout: [
    'Crypto Airdrops',
    'Web3',
    'Blockchain',
    'DeFi',
    'Cryptocurrency',
    'NFTs',
    'Layer 2',
    'Testnets',
    'DePIN',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '3alamiy Web3',
  url: 'https://seo.3alamiyweb3.online',
  description: 'Crypto airdrop tracker with step-by-step guides for the best airdrops of 2026.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://seo.3alamiyweb3.online/?search={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const stats = [
  { icon: '🪂', value: '65+', label: 'Airdrop Guides' },
  { icon: '📚', value: '14', label: 'Learn Articles' },
  { icon: '👥', value: '2,500+', label: 'Monthly Users' },
  { icon: '📅', value: 'Daily', label: 'Updated' },
];

const faqs = [
  {
    q: 'What is 3alamiy Web3?',
    a: '3alamiy Web3 is a crypto airdrop tracker and guide platform. We help Web3 users discover the best crypto airdrops, understand how to participate, and track their progress with step-by-step guides.',
  },
  {
    q: 'Is 3alamiy Web3 free to use?',
    a: 'Yes, 3alamiy Web3 is completely free to use. All airdrop guides, learn articles, and tracking features are available at no cost.',
  },
  {
    q: 'How often is 3alamiy Web3 updated?',
    a: 'We add 2-3 new airdrop guides every day. Our team reviews and verifies each airdrop before publishing to ensure accuracy and legitimacy.',
  },
  {
    q: 'What blockchains does 3alamiy Web3 cover?',
    a: 'We cover airdrops across all major blockchains including Ethereum, Solana, Arbitrum, Optimism, Base, ZKSync, Starknet, and many more Layer 1 and Layer 2 networks.',
  },
  {
    q: 'How do I stay updated on new airdrops?',
    a: 'Join our Telegram community at t.me/web33alamiy for daily airdrop alerts. You can also create a free account on 3alamiy Web3 to save favorites and get personalized recommendations.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ minHeight: '100vh', background: '#060910', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#fff' }}>

        <main style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 24px 80px' }}>

          {/* Hero */}
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6366f1, #4f46e5)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', margin: '0 auto 20px', boxShadow: '0 12px 32px rgba(99,102,241,0.3)' }}>🪂</div>
            <h1 style={{ fontSize: '40px', fontWeight: '900', margin: '0 0 16px', letterSpacing: '-0.03em', lineHeight: 1.1 }}>About 3alamiy Web3</h1>
            <p style={{ fontSize: '17px', color: '#71717a', lineHeight: 1.7, maxWidth: '540px', margin: '0 auto' }}>
              The most comprehensive crypto airdrop tracker and guide platform, helping Web3 users find and participate in the best airdrops every day.
            </p>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '56px' }}>
            {stats.map(stat => (
              <div key={stat.label} style={{ background: '#0d1117', border: '1px solid #1a1f2e', borderRadius: '14px', padding: '20px', textAlign: 'center' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{stat.icon}</div>
                <div style={{ fontSize: '22px', fontWeight: '900', color: '#818cf8', marginBottom: '4px' }}>{stat.value}</div>
                <div style={{ fontSize: '11px', color: '#52525b', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Mission */}
          <section style={{ background: '#0d1117', border: '1px solid #1a1f2e', borderRadius: '20px', padding: '32px', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: '800', margin: '0 0 16px' }}>What is 3alamiy Web3?</h2>
            <p style={{ fontSize: '15px', color: '#a1a1aa', lineHeight: 1.8, margin: '0 0 16px' }}>
              3alamiy Web3 is a crypto airdrop tracker and education platform built for the Web3 community. We track hundreds of active airdrops across every major blockchain and provide detailed step-by-step participation guides so anyone — from beginners to experienced hunters — can qualify for token distributions.
            </p>
            <p style={{ fontSize: '15px', color: '#a1a1aa', lineHeight: 1.8, margin: 0 }}>
              Every airdrop on our platform is manually reviewed and verified. We include difficulty ratings, reward estimates, official links, and participation steps — everything you need to make informed decisions about which airdrops are worth your time.
            </p>
          </section>

          {/* What we cover */}
          <section style={{ background: '#0d1117', border: '1px solid #1a1f2e', borderRadius: '20px', padding: '32px', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: '800', margin: '0 0 16px' }}>What Blockchains Does 3alamiy Web3 Cover?</h2>
            <p style={{ fontSize: '15px', color: '#a1a1aa', lineHeight: 1.8, margin: '0 0 20px' }}>
              We track airdrops across all major blockchain ecosystems including Ethereum, Solana, Arbitrum, Optimism, Base, ZKSync, Starknet, and dozens of emerging Layer 1 and Layer 2 networks.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Ethereum', 'Solana', 'Arbitrum', 'Optimism', 'Base', 'ZKSync', 'Starknet', 'Polygon', 'Avalanche', 'BNB Chain', 'Cosmos', 'Sui', 'Aptos', 'TON'].map(chain => (
                <span key={chain} style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', color: '#818cf8', padding: '5px 12px', borderRadius: '99px', fontSize: '12px', fontWeight: '700' }}>{chain}</span>
              ))}
            </div>
          </section>

          {/* How we work */}
          <section style={{ background: '#0d1117', border: '1px solid #1a1f2e', borderRadius: '20px', padding: '32px', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: '800', margin: '0 0 16px' }}>How Does 3alamiy Web3 Work?</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { icon: '🔍', title: 'We Find Airdrops', desc: 'Our team monitors blockchain ecosystems, VC investments, testnet launches, and project announcements daily to identify high-potential airdrops early.' },
                { icon: '✅', title: 'We Verify Legitimacy', desc: 'Every airdrop is manually reviewed before publishing. We check team credibility, funding, smart contract activity, and community signals.' },
                { icon: '📝', title: 'We Write Step-by-Step Guides', desc: 'Our guides walk you through every step of participation clearly — no technical knowledge required. Each guide includes difficulty rating, time estimate, and reward potential.' },
                { icon: '🔄', title: 'We Update Daily', desc: 'Airdrop status changes fast. We update guides daily to reflect the latest requirements, deadlines, and reward changes.' },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <h3 style={{ fontSize: '15px', fontWeight: '700', margin: '0 0 4px', color: '#fff' }}>{item.title}</h3>
                    <p style={{ fontSize: '13px', color: '#71717a', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: '800', margin: '0 0 20px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {faqs.map((faq) => (
                <div key={faq.q} style={{ background: '#0d1117', border: '1px solid #1a1f2e', borderRadius: '14px', padding: '20px' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: '700', margin: '0 0 8px', color: '#fff' }}>{faq.q}</h3>
                  <p style={{ fontSize: '13px', color: '#71717a', margin: 0, lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div style={{ background: 'linear-gradient(135deg, #1e1b4b, #0f0f1a)', border: '1px solid #4c1d95', borderRadius: '20px', padding: '40px', textAlign: 'center' }}>
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>🪂</div>
            <h2 style={{ fontSize: '22px', fontWeight: '900', margin: '0 0 8px' }}>Start Finding Airdrops Today</h2>
            <p style={{ color: '#9ca3af', fontSize: '15px', margin: '0 0 24px', lineHeight: 1.6 }}>Join 2,500+ Web3 users tracking high-potential airdrops on 3alamiy Web3.</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/" style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: '#fff', padding: '12px 24px', borderRadius: '12px', textDecoration: 'none', fontWeight: '700', fontSize: '14px', boxShadow: '0 8px 24px rgba(99,102,241,0.3)' }}>
                Browse Airdrops →
              </Link>
              <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', color: '#e4e4e7', padding: '12px 24px', borderRadius: '12px', textDecoration: 'none', fontWeight: '600', fontSize: '14px', border: '1px solid #1a1f2e' }}>
                ✈️ Join Telegram
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
