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
  description: '3alamiy Web3 is a crypto airdrop tracker and guide platform helping Web3 users discover, track, and participate in the best crypto airdrops.',
  foundingDate: '2025',
  sameAs: ['https://3alamiyweb3.online', 'https://x.com/3alamiyweb3', 'https://t.me/web33alamiy'],
  contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', url: 'https://t.me/web33alamiy' },
  areaServed: 'Worldwide',
  knowsAbout: ['Crypto Airdrops', 'Web3', 'Blockchain', 'DeFi', 'Cryptocurrency', 'NFTs', 'Layer 2', 'Testnets', 'DePIN'],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '3alamiy Web3',
  url: 'https://seo.3alamiyweb3.online',
  description: 'Crypto airdrop tracker with step-by-step guides for the best airdrops of 2026.',
  potentialAction: { '@type': 'SearchAction', target: 'https://seo.3alamiyweb3.online/?search={search_term_string}', 'query-input': 'required name=search_term_string' },
};

const faqs = [
  { q: 'What is 3alamiy Web3?', a: '3alamiy Web3 is a crypto airdrop tracker and education platform built for the Web3 community. We track active airdrops across every major blockchain and provide detailed step-by-step participation guides.' },
  { q: 'Is 3alamiy Web3 free to use?', a: 'Yes, completely free. All airdrop guides, learn articles, and tracking features are available at no cost — no paywalls, no subscriptions.' },
  { q: 'How often is 3alamiy Web3 updated?', a: 'We add 2–3 new airdrop guides every day. Each airdrop is manually reviewed and verified before publishing.' },
  { q: 'What blockchains does 3alamiy Web3 cover?', a: 'We cover airdrops across Ethereum, Solana, Arbitrum, Optimism, Base, ZKSync, Starknet, and dozens more Layer 1 and Layer 2 networks.' },
  { q: 'How do I stay updated on new airdrops?', a: 'Join our Telegram community at t.me/web33alamiy for daily airdrop alerts. You can also create a free account to save favorites and get personalized recommendations.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const chains = ['Ethereum', 'Solana', 'Arbitrum', 'Optimism', 'Base', 'ZKSync', 'Starknet', 'Polygon', 'Avalanche', 'BNB Chain', 'Cosmos', 'Sui', 'Aptos', 'TON', 'Monad'];

const howItems = [
  { num: '01', title: 'We Find Airdrops', desc: 'Our team monitors blockchain ecosystems, VC investments, testnet launches, and project announcements daily to identify high-potential airdrops early.' },
  { num: '02', title: 'We Verify Legitimacy', desc: 'Every airdrop is manually reviewed before publishing. We check team credibility, funding, smart contract activity, and community signals.' },
  { num: '03', title: 'We Write Step-by-Step Guides', desc: 'Our guides walk you through every participation step clearly — no technical knowledge required. Each includes a difficulty rating, time estimate, and reward potential.' },
  { num: '04', title: 'We Update Daily', desc: 'Airdrop status changes fast. We update guides every day to reflect the latest requirements, deadlines, and reward changes.' },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <style>{`
        .ab * { box-sizing: border-box; }
        .ab {
          min-height: 100vh;
          background: #080C14;
          font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif;
          color: #D8DAE5;
        }

        /* Hero */
        .ab-hero {
          position: relative; text-align: center;
          padding: 72px 24px 56px;
          max-width: 720px; margin: 0 auto;
        }
        .ab-hero-glow {
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 600px; height: 360px; pointer-events: none;
          background: radial-gradient(ellipse at top, rgba(124,245,192,0.065) 0%, transparent 65%);
        }
        .ab-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(124,245,192,0.07); border: 1px solid rgba(124,245,192,0.16);
          color: #7CF5C0; font-size: 10px; font-weight: 600;
          letter-spacing: 0.07em; text-transform: uppercase;
          padding: 5px 14px; border-radius: 100px; margin-bottom: 20px;
          position: relative;
        }
        .ab-badge-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #7CF5C0; box-shadow: 0 0 6px rgba(124,245,192,0.7);
          animation: abdot 2s ease-in-out infinite;
        }
        @keyframes abdot { 0%,100%{opacity:1} 50%{opacity:.35} }
        .ab-h1 {
          font-weight: 700; font-size: 44px; letter-spacing: -0.03em;
          color: #fff; line-height: 1.1; margin: 0 0 16px; position: relative;
        }
        .ab-h1 em { font-style: normal; color: #7CF5C0; }
        .ab-hero-p {
          font-size: 15px; font-weight: 400; color: rgba(255,255,255,0.38);
          line-height: 1.8; max-width: 480px; margin: 0 auto; position: relative;
        }

        /* Stats strip */
        .ab-strip-wrap { max-width: 860px; margin: 0 auto; padding: 0 24px 56px; }
        .ab-strip {
          display: grid; grid-template-columns: repeat(4, 1fr);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 18px; overflow: hidden;
          background: rgba(255,255,255,0.015);
        }
        .ab-strip-cell {
          padding: 22px 14px; text-align: center;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .ab-strip-cell:last-child { border-right: none; }
        .ab-sval {
          font-weight: 700; font-size: 24px; letter-spacing: -0.03em;
          color: #7CF5C0; margin-bottom: 4px; line-height: 1;
        }
        .ab-sval.plain { color: #fff; }
        .ab-slbl {
          font-size: 10px; font-weight: 600; text-transform: uppercase;
          letter-spacing: 0.09em; color: rgba(255,255,255,0.24);
        }

        /* Body */
        .ab-body { max-width: 860px; margin: 0 auto; padding: 0 24px 80px; display: flex; flex-direction: column; gap: 12px; }

        /* Cards */
        .ab-card {
          background: #0D1221; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 18px; padding: 26px 28px;
        }
        .ab-eyebrow {
          font-size: 10px; font-weight: 600; text-transform: uppercase;
          letter-spacing: 0.1em; color: rgba(255,255,255,0.24); margin: 0 0 7px;
        }
        .ab-heading {
          font-weight: 700; font-size: 19px; letter-spacing: -0.025em;
          color: #fff; margin: 0 0 14px;
        }
        .ab-para {
          font-size: 13.5px; color: rgba(255,255,255,0.43);
          line-height: 1.8; margin: 0 0 10px;
        }
        .ab-para:last-child { margin-bottom: 0; }

        /* Chain pills */
        .ab-chains { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 14px; }
        .ab-chain {
          background: rgba(143,168,255,0.07); border: 1px solid rgba(143,168,255,0.14);
          color: #8FA8FF; padding: 4px 13px; border-radius: 100px;
          font-size: 11px; font-weight: 600;
        }

        /* How steps */
        .ab-steps { display: flex; flex-direction: column; gap: 16px; }
        .ab-step { display: flex; gap: 16px; align-items: flex-start; }
        .ab-step-num {
          font-size: 10px; font-weight: 700; letter-spacing: 0.05em;
          color: #7CF5C0; background: rgba(124,245,192,0.07);
          border: 1px solid rgba(124,245,192,0.15); border-radius: 8px;
          padding: 5px 9px; flex-shrink: 0; margin-top: 1px;
        }
        .ab-step-title {
          font-weight: 600; font-size: 14px; letter-spacing: -0.01em;
          color: #fff; margin: 0 0 5px;
        }
        .ab-step-desc { font-size: 13px; color: rgba(255,255,255,0.38); margin: 0; line-height: 1.75; }

        /* FAQ */
        .ab-faq { display: flex; flex-direction: column; gap: 8px; }
        .ab-faq-item {
          background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05);
          border-radius: 12px; padding: 15px 17px;
          transition: border-color 0.15s;
        }
        .ab-faq-item:hover { border-color: rgba(124,245,192,0.1); }
        .ab-faq-q { font-weight: 600; font-size: 13.5px; letter-spacing: -0.01em; color: #E2E4EC; margin: 0 0 6px; }
        .ab-faq-a { font-size: 13px; color: rgba(255,255,255,0.38); margin: 0; line-height: 1.75; }

        /* CTA */
        .ab-cta {
          background: linear-gradient(140deg, #0B1C15, #0C1728);
          border: 1px solid rgba(124,245,192,0.13);
          border-radius: 20px; padding: 48px 32px;
          text-align: center; position: relative; overflow: hidden;
        }
        .ab-cta::before {
          content: ''; position: absolute; top: -80px; left: 50%; transform: translateX(-50%);
          width: 440px; height: 320px; pointer-events: none;
          background: radial-gradient(ellipse, rgba(124,245,192,0.055) 0%, transparent 65%);
        }
        .ab-cta-emoji { font-size: 36px; margin-bottom: 14px; position: relative; display: block; }
        .ab-cta-title {
          font-weight: 700; font-size: 26px; letter-spacing: -0.03em;
          color: #fff; margin: 0 0 10px; position: relative;
        }
        .ab-cta-sub {
          font-size: 14px; color: rgba(255,255,255,0.36); line-height: 1.75;
          margin: 0 auto 28px; max-width: 380px; position: relative;
        }
        .ab-cta-btns { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; position: relative; }
        .btn-ab-primary {
          display: inline-flex; align-items: center; gap: 7px;
          background: #7CF5C0; color: #04120A;
          font-family: var(--font-space), system-ui, sans-serif;
          font-weight: 600; font-size: 14px; letter-spacing: -0.01em;
          padding: 12px 24px; border-radius: 12px; text-decoration: none;
          box-shadow: 0 0 24px rgba(124,245,192,0.18);
          transition: opacity 0.15s, transform 0.15s;
        }
        .btn-ab-primary:hover { opacity: 0.88; transform: translateY(-1px); }
        .btn-ab-secondary {
          display: inline-flex; align-items: center; gap: 7px;
          background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.52);
          font-family: var(--font-space), system-ui, sans-serif;
          font-weight: 600; font-size: 14px;
          padding: 12px 22px; border-radius: 12px; text-decoration: none;
          border: 1px solid rgba(255,255,255,0.09);
          transition: background 0.15s, color 0.15s;
        }
        .btn-ab-secondary:hover { background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.8); }

        @media (max-width: 640px) {
          .ab-h1 { font-size: 28px; }
          .ab-hero { padding: 48px 20px 40px; }
          .ab-strip { grid-template-columns: repeat(2, 1fr); }
          .ab-strip-cell:nth-child(2) { border-right: none; }
          .ab-strip-cell:nth-child(1),
          .ab-strip-cell:nth-child(2) { border-bottom: 1px solid rgba(255,255,255,0.06); }
          .ab-card { padding: 20px 18px; }
          .ab-cta { padding: 32px 20px; }
          .ab-cta-title { font-size: 22px; }
          .ab-strip-wrap, .ab-body { padding-left: 16px; padding-right: 16px; }
        }
      `}</style>

      <div className="ab">

        {/* Hero */}
        <div className="ab-hero">
          <div className="ab-hero-glow" />
          <div>
            <span className="ab-badge">
              <span className="ab-badge-dot" />
              Trusted by 2,500+ Web3 Users
            </span>
          </div>
          <h1 className="ab-h1">About <em>3alamiy Web3</em></h1>
          <p className="ab-hero-p">
            The most comprehensive crypto airdrop tracker and guide platform — helping Web3 users find and participate in the best airdrops every day.
          </p>
        </div>

        {/* Stats */}
        <div className="ab-strip-wrap">
          <div className="ab-strip">
            <div className="ab-strip-cell">
              <div className="ab-sval">78+</div>
              <div className="ab-slbl">Airdrop Guides</div>
            </div>
            <div className="ab-strip-cell">
              <div className="ab-sval">24+</div>
              <div className="ab-slbl">Learn Articles</div>
            </div>
            <div className="ab-strip-cell">
              <div className="ab-sval">2,500+</div>
              <div className="ab-slbl">Monthly Users</div>
            </div>
            <div className="ab-strip-cell">
              <div className="ab-sval plain">Daily</div>
              <div className="ab-slbl">Updated</div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="ab-body">

          {/* Mission */}
          <div className="ab-card">
            <p className="ab-eyebrow">Our Mission</p>
            <h2 className="ab-heading">What is 3alamiy Web3?</h2>
            <p className="ab-para">
              3alamiy Web3 is a crypto airdrop tracker and education platform built for the Web3 community. We track hundreds of active airdrops across every major blockchain and provide detailed step-by-step participation guides — so anyone, from beginners to experienced hunters, can qualify for token distributions.
            </p>
            <p className="ab-para">
              Every airdrop on our platform is manually reviewed and verified. We include difficulty ratings, reward estimates, official links, and participation steps — everything you need to make informed decisions about which airdrops are worth your time.
            </p>
          </div>

          {/* Chains */}
          <div className="ab-card">
            <p className="ab-eyebrow">Coverage</p>
            <h2 className="ab-heading">What Blockchains Do We Cover?</h2>
            <p className="ab-para">
              We track airdrops across all major blockchain ecosystems including Ethereum, Solana, Arbitrum, Optimism, Base, ZKSync, Starknet, and dozens of emerging Layer 1 and Layer 2 networks.
            </p>
            <div className="ab-chains">
              {chains.map(c => <span key={c} className="ab-chain">{c}</span>)}
            </div>
          </div>

          {/* How */}
          <div className="ab-card">
            <p className="ab-eyebrow">Process</p>
            <h2 className="ab-heading">How Does 3alamiy Web3 Work?</h2>
            <div className="ab-steps">
              {howItems.map(item => (
                <div key={item.num} className="ab-step">
                  <span className="ab-step-num">{item.num}</span>
                  <div>
                    <p className="ab-step-title">{item.title}</p>
                    <p className="ab-step-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <p className="ab-eyebrow" style={{ marginBottom: '8px' }}>FAQ</p>
            <h2 className="ab-heading">Frequently Asked Questions</h2>
            <div className="ab-faq">
              {faqs.map(faq => (
                <div key={faq.q} className="ab-faq-item">
                  <p className="ab-faq-q">{faq.q}</p>
                  <p className="ab-faq-a">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="ab-cta">
            <span className="ab-cta-emoji">🚀</span>
            <h2 className="ab-cta-title">Start Finding Airdrops Today</h2>
            <p className="ab-cta-sub">Join 2,500+ Web3 users tracking high-potential airdrops on 3alamiy Web3. Free forever.</p>
            <div className="ab-cta-btns">
              <Link href="/airdrops" className="btn-ab-primary">
                Browse Airdrops →
              </Link>
              <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" className="btn-ab-secondary">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 13, height: 13 }}><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                Join Telegram
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
