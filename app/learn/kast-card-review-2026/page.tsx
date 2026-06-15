import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'KAST Card Review 2026: Up to 3% Cashback + $MOVE Rewards — Is It Worth It?',
  description: 'KAST is the best crypto Visa card in 2026. Up to 3% USDC cashback, 7% APY on idle balances, Pudgy Penguins card designs, and 170+ country support. Full tier breakdown, fees, and verdict.',
  alternates: { canonical: 'https://www.3alamiyweb3.com/learn/kast-card-review-2026' },
  openGraph: {
    title: 'KAST Card Review 2026: Up to 3% Cashback + $MOVE Rewards',
    description: 'Full breakdown of KAST crypto card — tiers, cashback, fees, and how to earn up to $250 per referral.',
    url: 'https://www.3alamiyweb3.com/learn/kast-card-review-2026',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KAST Card Review 2026: Up to 3% Cashback + $MOVE Rewards',
    description: 'Full tier breakdown, fees, and verdict on the most popular crypto Visa card in 2026.',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'KAST Card Review 2026: Up to 3% Cashback + $MOVE Rewards — Is It Worth It?',
  description: 'KAST is a custodial prepaid Visa that converts stablecoins into spendable USD at 150M+ merchants. This review covers all tiers, cashback rates, fees, and whether the premium plans are worth it.',
  datePublished: '2026-06-09',
  dateModified: '2026-06-09',
  author: { '@type': 'Organization', name: '3alamiy Web3', url: 'https://www.3alamiyweb3.com' },
  publisher: { '@type': 'Organization', name: '3alamiy Web3', url: 'https://www.3alamiyweb3.com', logo: { '@type': 'ImageObject', url: 'https://www.3alamiyweb3.com/icon.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.3alamiyweb3.com/learn/kast-card-review-2026' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is KAST card?',
      acceptedAnswer: { '@type': 'Answer', text: 'KAST is a custodial prepaid Visa card powered by stablecoins. You top up with USDC or other stablecoins, and KAST converts them to a USD balance you can spend at any of 150 million+ Visa merchants worldwide, in 170+ countries. It also offers Apple Pay and Google Pay support from day one.' },
    },
    {
      '@type': 'Question',
      name: 'How much cashback does KAST pay?',
      acceptedAnswer: { '@type': 'Answer', text: 'KAST pays stablecoin cashback in USDC: Standard tier gets 1.5% on up to $2,000/month, Premium gets 2% on up to $10,000/month, and Private gets 3% on up to $40,000/month. Additionally, all tiers earn KAST Points (2%–8% depending on tier in Season 5), and eligible spend earns 4% in $MOVE tokens.' },
    },
    {
      '@type': 'Question',
      name: 'Is KAST Standard (free) tier worth it?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, for most users the Standard tier is the best starting point. It is free, gives you 1.5% USDC cashback on up to $2,000/month, 2% KAST Points in Season 5, Apple/Google Pay support, and a virtual card within minutes. The only cost is a 0.5%–1.75% FX fee on non-USD purchases and $1/month inactivity fee after 12 months of no use.' },
    },
    {
      '@type': 'Question',
      name: 'What stablecoins can I use to top up KAST?',
      acceptedAnswer: { '@type': 'Answer', text: 'KAST accepts USDC and other major stablecoins for top-up with 0% fee. ACH transfers cost $2 and FedWire transfers cost $15. Stablecoin top-up is the recommended method — instant, free, and usable directly from your wallet.' },
    },
    {
      '@type': 'Question',
      name: 'What is the KAST referral program?',
      acceptedAnswer: { '@type': 'Answer', text: 'KAST pays up to $250 per referred user who becomes active. An "active user" is anyone who completes $100 in total KAST card spending. There is also a daily Referral Leaderboard with prizes up to $1,000 USDC per day. Affiliates can sign up directly inside the KAST app at kast.xyz.' },
    },
    {
      '@type': 'Question',
      name: 'What are the Pengu Cards?',
      acceptedAnswer: { '@type': 'Answer', text: 'KAST partnered with Pudgy Penguins to offer Pengu-branded card designs. The Pengu Card is the free Standard tier with Pudgy branding, the Pengu Black Card is the metal Premium tier ($1,000/yr), and the Pengu Gold Card is the 24K gold Private tier ($10,000/yr). Economics are identical to the standard tiers — only the design differs.' },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.3alamiyweb3.com' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://www.3alamiyweb3.com/learn' },
    { '@type': 'ListItem', position: 3, name: 'KAST Card Review 2026', item: 'https://www.3alamiyweb3.com/learn/kast-card-review-2026' },
  ],
};

const TIERS = [
  {
    name: 'Standard',
    price: 'Free',
    cashback: '1.5% USDC',
    limit: '$2K/mo',
    points: '2% KAST Points',
    move: '4% $MOVE',
    apy: '5% APY',
    metal: false,
    color: '#4f8ef7',
    best: 'Best for new users',
  },
  {
    name: 'Premium',
    price: '$1,000/yr',
    cashback: '2% USDC',
    limit: '$10K/mo',
    points: '5% KAST Points',
    move: '4% $MOVE',
    apy: '6% APY',
    metal: true,
    color: '#a78bfa',
    best: 'Best for regular spenders',
  },
  {
    name: 'Private',
    price: '$10,000/yr',
    cashback: '3% USDC',
    limit: '$40K/mo',
    points: '8% KAST Points',
    move: '4% $MOVE',
    apy: '7% APY',
    metal: true,
    color: '#f59e0b',
    best: 'Best for high-volume users',
  },
];

const speakableJsonLd = {
  "@context": "https://schema.org", "@type": "WebPage",
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".kst-faq", ".kst-faqs"] },
  url: "https://www.3alamiyweb3.com/learn/kast-card-review-2026",
};

export default function KastCardReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <style>{`
        .kc-wrap { min-height:100vh; background:#060A12; font-family:var(--font-space),'Space Grotesk',system-ui,sans-serif; color:#fff; }
        .kc-hero { background:linear-gradient(180deg,rgba(79,142,247,0.07) 0%,transparent 100%); border-bottom:1px solid rgba(255,255,255,0.06); padding:52px 24px 44px; }
        .kc-inner { max-width:780px; margin:0 auto; }
        .kc-breadcrumb { display:flex; align-items:center; gap:6px; font-size:12px; color:rgba(255,255,255,0.28); margin-bottom:24px; flex-wrap:wrap; }
        .kc-breadcrumb a { color:rgba(255,255,255,0.28); text-decoration:none; }
        .kc-badge { display:inline-flex; align-items:center; gap:6px; background:rgba(79,142,247,0.1); border:1px solid rgba(79,142,247,0.3); color:#4f8ef7; padding:4px 12px; border-radius:99px; font-size:10px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:18px; }
        .kc-h1 { font-size:clamp(26px,4vw,42px); font-weight:900; letter-spacing:-0.04em; line-height:1.1; margin:0 0 18px; }
        .kc-h1 span { color:#4f8ef7; }
        .kc-meta { display:flex; gap:16px; flex-wrap:wrap; margin-bottom:20px; font-size:12px; color:rgba(255,255,255,0.35); }
        .kc-summary { font-size:17px; line-height:1.65; color:rgba(255,255,255,0.72); margin:0; }

        .kc-body { padding:40px 24px 80px; }
        .kc-section { margin-bottom:48px; }
        .kc-h2 { font-size:22px; font-weight:800; letter-spacing:-0.02em; margin:0 0 16px; }
        .kc-h2 span { color:#4f8ef7; }
        .kc-p { font-size:15px; line-height:1.7; color:rgba(255,255,255,0.68); margin:0 0 14px; }

        /* Verdict badge */
        .kc-verdict { display:flex; align-items:center; gap:12px; background:rgba(79,142,247,0.08); border:1px solid rgba(79,142,247,0.2); border-radius:14px; padding:18px 20px; margin-bottom:32px; }
        .kc-verdict-score { font-size:36px; font-weight:900; color:#4f8ef7; line-height:1; }
        .kc-verdict-text { }
        .kc-verdict-title { font-size:14px; font-weight:800; margin:0 0 2px; }
        .kc-verdict-sub { font-size:12px; color:rgba(255,255,255,0.4); margin:0; }

        /* Card visual */
        .kc-card-visual { width:100%; max-width:360px; margin:0 auto 32px; aspect-ratio:1.586; border-radius:18px; background:linear-gradient(135deg,#1a2a4a 0%,#0d1830 50%,#162040 100%); border:1px solid rgba(79,142,247,0.25); padding:24px; display:flex; flex-direction:column; justify-content:space-between; position:relative; overflow:hidden; box-shadow:0 20px 60px rgba(0,0,0,0.5); }
        .kc-card-visual::before { content:''; position:absolute; top:-40%; right:-20%; width:200px; height:200px; background:radial-gradient(circle,rgba(79,142,247,0.25) 0%,transparent 70%); border-radius:50%; }
        .kc-card-chip { width:40px; height:30px; background:linear-gradient(135deg,#f59e0b,#d97706); border-radius:6px; }
        .kc-card-visa { font-size:22px; font-weight:900; color:rgba(255,255,255,0.9); letter-spacing:0.02em; font-style:italic; }
        .kc-card-num { font-size:15px; font-weight:600; letter-spacing:0.2em; color:rgba(255,255,255,0.7); }
        .kc-card-footer { display:flex; justify-content:space-between; align-items:flex-end; }
        .kc-card-label { font-size:9px; color:rgba(255,255,255,0.35); letter-spacing:0.08em; text-transform:uppercase; }
        .kc-card-val { font-size:13px; font-weight:700; color:rgba(255,255,255,0.8); }
        .kc-card-glow { position:absolute; bottom:-30px; left:-30px; width:120px; height:120px; background:radial-gradient(circle,rgba(79,142,247,0.2) 0%,transparent 70%); border-radius:50%; }

        /* Tier cards */
        .kc-tiers { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:16px; margin-bottom:32px; }
        .kc-tier { border-radius:16px; padding:20px; border:1px solid rgba(255,255,255,0.08); background:rgba(255,255,255,0.02); }
        .kc-tier-name { font-size:13px; font-weight:800; letter-spacing:0.04em; text-transform:uppercase; margin:0 0 4px; }
        .kc-tier-price { font-size:22px; font-weight:900; margin:0 0 14px; }
        .kc-tier-row { display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px solid rgba(255,255,255,0.05); font-size:12px; }
        .kc-tier-row:last-child { border-bottom:none; }
        .kc-tier-key { color:rgba(255,255,255,0.38); }
        .kc-tier-val { font-weight:700; color:rgba(255,255,255,0.88); }
        .kc-tier-badge { font-size:10px; font-weight:700; padding:2px 8px; border-radius:99px; margin-top:10px; display:inline-block; }
        .kc-tier-best { font-size:11px; color:rgba(255,255,255,0.35); margin-top:8px; }

        /* Pros/cons */
        .kc-pc { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:32px; }
        .kc-pros { background:rgba(16,185,129,0.05); border:1px solid rgba(16,185,129,0.15); border-radius:14px; padding:18px; }
        .kc-cons { background:rgba(239,68,68,0.05); border:1px solid rgba(239,68,68,0.15); border-radius:14px; padding:18px; }
        .kc-pc-title { font-size:12px; font-weight:800; letter-spacing:0.06em; text-transform:uppercase; margin:0 0 12px; }
        .kc-pros .kc-pc-title { color:#10b981; }
        .kc-cons .kc-pc-title { color:#ef4444; }
        .kc-pc-item { font-size:13px; color:rgba(255,255,255,0.68); margin-bottom:8px; display:flex; gap:8px; line-height:1.5; }
        .kc-pc-dot { flex-shrink:0; margin-top:3px; }

        /* Fee table */
        .kc-table { width:100%; border-collapse:collapse; font-size:13px; margin-bottom:24px; }
        .kc-table th { text-align:left; padding:10px 12px; font-size:11px; font-weight:700; letter-spacing:0.05em; text-transform:uppercase; color:rgba(255,255,255,0.3); border-bottom:1px solid rgba(255,255,255,0.07); }
        .kc-table td { padding:11px 12px; border-bottom:1px solid rgba(255,255,255,0.04); color:rgba(255,255,255,0.72); vertical-align:top; }
        .kc-table tr:last-child td { border-bottom:none; }
        .kc-table .kc-fee-name { color:rgba(255,255,255,0.88); font-weight:600; }

        /* Affiliate CTA */
        .kc-aff { background:linear-gradient(135deg,rgba(79,142,247,0.1) 0%,rgba(79,142,247,0.05) 100%); border:1px solid rgba(79,142,247,0.25); border-radius:20px; padding:28px 24px; text-align:center; margin:40px 0; }
        .kc-aff-tag { font-size:10px; font-weight:800; letter-spacing:0.1em; text-transform:uppercase; color:rgba(79,142,247,0.7); margin:0 0 8px; }
        .kc-aff-h { font-size:20px; font-weight:900; margin:0 0 8px; }
        .kc-aff-sub { font-size:14px; color:rgba(255,255,255,0.5); margin:0 0 20px; }
        .kc-aff-btn { display:inline-flex; align-items:center; gap:8px; background:#4f8ef7; color:#fff; font-size:14px; font-weight:800; padding:14px 28px; border-radius:12px; text-decoration:none; }
        .kc-aff-btn:hover { background:#3b7de8; }
        .kc-aff-note { font-size:11px; color:rgba(255,255,255,0.25); margin:12px 0 0; }

        /* FAQ */
        .kc-faq { display:flex; flex-direction:column; gap:12px; }
        .kc-faq-item { background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); border-radius:12px; padding:16px 18px; }
        .kc-faq-q { font-size:14px; font-weight:700; margin:0 0 8px; }
        .kc-faq-a { font-size:13px; color:rgba(255,255,255,0.58); margin:0; line-height:1.65; }

        /* Exchange CTA */
        .kc-exc { background:rgba(255,255,255,0.03); border:1px solid rgba(124,245,192,0.12); border-radius:16px; padding:20px 24px; margin-bottom:32px; text-align:center; }
        .kc-exc-label { font-size:11px; font-weight:800; color:rgba(124,245,192,0.6); text-transform:uppercase; letter-spacing:0.08em; margin:0 0 12px; }
        .kc-exc-links { display:flex; gap:10px; justify-content:center; flex-wrap:wrap; margin-bottom:10px; }
        .kc-exc-btn { display:inline-flex; align-items:center; gap:7px; padding:11px 20px; border-radius:10px; font-size:13px; font-weight:700; text-decoration:none; }
        .kc-exc-gate { background:rgba(0,100,220,0.12); border:1px solid rgba(0,100,220,0.25); color:#5b9bf8; }
        .kc-exc-binance { background:rgba(243,186,47,0.1); border:1px solid rgba(243,186,47,0.25); color:#f3ba2f; }
        .kc-exc-bybit { background:rgba(255,130,0,0.1); border:1px solid rgba(255,130,0,0.25); color:#ff8200; }
        .kc-exc-note { font-size:11px; color:rgba(255,255,255,0.25); margin:0; }

        .kc-divider { border:none; border-top:1px solid rgba(255,255,255,0.05); margin:40px 0; }

        /* Related */
        .kc-related { background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); border-radius:16px; padding:24px; }
        .kc-related-title { font-size:13px; font-weight:700; color:rgba(255,255,255,0.4); text-transform:uppercase; letter-spacing:0.06em; margin:0 0 14px; }
        .kc-related-links { display:flex; flex-direction:column; gap:10px; }
        .kc-related-link { display:flex; justify-content:space-between; align-items:center; text-decoration:none; color:rgba(255,255,255,0.78); font-size:14px; font-weight:600; padding:8px 0; border-bottom:1px solid rgba(255,255,255,0.04); }
        .kc-related-link:last-child { border-bottom:none; }
        .kc-related-link:hover { color:#4f8ef7; }
        .kc-related-arr { font-size:12px; opacity:0.4; }

        @media(max-width:600px) {
          .kc-pc { grid-template-columns:1fr; }
          .kc-tiers { grid-template-columns:1fr; }
        }
      `}</style>

      <div className="kc-wrap">
        {/* HERO */}
        <div className="kc-hero">
          <div className="kc-inner">
            <nav className="kc-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>›</span>
              <Link href="/learn">Learn</Link>
              <span>›</span>
              <span>KAST Card Review 2026</span>
            </nav>

            <div className="kc-badge">💳 Crypto Card Review</div>

            <h1 className="kc-h1">
              KAST Card Review 2026: Up to <span>3% USDC Cashback</span> + $MOVE Rewards
            </h1>

            <div className="kc-meta">
              <span>📅 June 9, 2026</span>
              <span>⏱ 8 min read</span>
              <span>✅ Verified by 3alamiy</span>
            </div>

            <p className="kc-summary">
              KAST is the most feature-rich crypto Visa card in 2026 — 10 card designs, real USDC cashback,
              up to 7% APY on idle balances, and $MOVE token rewards. We break down every tier, fee, and
              reward so you know exactly what you&apos;re getting.
            </p>
          </div>
        </div>

        {/* BODY */}
        <div className="kc-body">
          <div className="kc-inner">

            {/* Verdict */}
            <div className="kc-verdict">
              <div className="kc-verdict-score">9.1</div>
              <div className="kc-verdict-text">
                <p className="kc-verdict-title">3alamiy Verdict: Best Free Crypto Card in 2026</p>
                <p className="kc-verdict-sub">Free Standard tier beats most paid crypto cards. Premium and Private worth it at high spend volumes.</p>
              </div>
            </div>

            {/* Card Visual */}
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <div className="kc-card-visual">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div className="kc-card-chip" />
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em' }}>KAST</div>
                </div>
                <div className="kc-card-num">•••• •••• •••• 3K4ST</div>
                <div className="kc-card-footer">
                  <div>
                    <div className="kc-card-label">Card Holder</div>
                    <div className="kc-card-val">YOUR NAME</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="kc-card-label">Expires</div>
                    <div className="kc-card-val">12/28</div>
                  </div>
                  <div className="kc-card-visa">VISA</div>
                </div>
                <div className="kc-card-glow" />
              </div>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.28)', marginTop: 8 }}>
                Available in 10 designs incl. Pudgy Penguins Pengu collection
              </p>
            </div>

            {/* What is KAST */}
            <div className="kc-section">
              <h2 className="kc-h2">What is <span>KAST</span>?</h2>
              <p className="kc-p">
                KAST is a global money app powered by stablecoins. You deposit USDC or other stablecoins,
                and KAST instantly converts them to a spendable USD balance on your Visa card. No bank account
                required. Works at 150 million+ Visa merchants in 170+ countries.
              </p>
              <p className="kc-p">
                Beyond just spending, KAST earns you real USDC cashback on every purchase, KAST Points (which
                convert to the KAST token at TGE), and $MOVE token rewards on eligible spend. Your idle
                balance also earns up to 7% APY — more than most savings accounts.
              </p>
              <p className="kc-p">
                The virtual card goes live within minutes of approval. Apple Pay and Google Pay work from day one.
              </p>
            </div>

            {/* Tiers */}
            <div className="kc-section">
              <h2 className="kc-h2">Card <span>Tiers</span> Compared</h2>
              <div className="kc-tiers">
                {TIERS.map(t => (
                  <div key={t.name} className="kc-tier" style={{ borderColor: `${t.color}30` }}>
                    <div className="kc-tier-name" style={{ color: t.color }}>{t.name}</div>
                    <div className="kc-tier-price">{t.price}</div>
                    <div className="kc-tier-row">
                      <span className="kc-tier-key">USDC cashback</span>
                      <span className="kc-tier-val">{t.cashback}</span>
                    </div>
                    <div className="kc-tier-row">
                      <span className="kc-tier-key">Spend cap</span>
                      <span className="kc-tier-val">{t.limit}</span>
                    </div>
                    <div className="kc-tier-row">
                      <span className="kc-tier-key">KAST Points</span>
                      <span className="kc-tier-val">{t.points}</span>
                    </div>
                    <div className="kc-tier-row">
                      <span className="kc-tier-key">$MOVE rewards</span>
                      <span className="kc-tier-val">{t.move}</span>
                    </div>
                    <div className="kc-tier-row">
                      <span className="kc-tier-key">Idle APY</span>
                      <span className="kc-tier-val">{t.apy}</span>
                    </div>
                    <div className="kc-tier-row">
                      <span className="kc-tier-key">Physical card</span>
                      <span className="kc-tier-val">{t.metal ? '✅ Metal' : '✅ Plastic'}</span>
                    </div>
                    <div className="kc-tier-best" style={{ color: t.color }}>{t.best}</div>
                  </div>
                ))}
              </div>
              <p className="kc-p" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
                * Pengu Card variants (Pudgy Penguins co-branded) have identical economics — only the design differs.
              </p>
            </div>

            {/* Pros and Cons */}
            <div className="kc-section">
              <h2 className="kc-h2">Pros &amp; <span>Cons</span></h2>
              <div className="kc-pc">
                <div className="kc-pros">
                  <p className="kc-pc-title">✅ Pros</p>
                  <div className="kc-pc-item"><span className="kc-pc-dot">+</span><span>Free Standard tier beats most paid crypto cards</span></div>
                  <div className="kc-pc-item"><span className="kc-pc-dot">+</span><span>Real USDC cashback — not just points</span></div>
                  <div className="kc-pc-item"><span className="kc-pc-dot">+</span><span>Up to 7% APY on idle balance</span></div>
                  <div className="kc-pc-item"><span className="kc-pc-dot">+</span><span>Apple Pay + Google Pay from day one</span></div>
                  <div className="kc-pc-item"><span className="kc-pc-dot">+</span><span>0% stablecoin top-up fee</span></div>
                  <div className="kc-pc-item"><span className="kc-pc-dot">+</span><span>$MOVE token rewards on top</span></div>
                  <div className="kc-pc-item"><span className="kc-pc-dot">+</span><span>10 card designs including Pudgy Penguins</span></div>
                  <div className="kc-pc-item"><span className="kc-pc-dot">+</span><span>170+ countries, 150M+ merchants</span></div>
                </div>
                <div className="kc-cons">
                  <p className="kc-pc-title">❌ Cons</p>
                  <div className="kc-pc-item"><span className="kc-pc-dot">−</span><span>FX fee of 0.5%–1.75% on non-USD purchases</span></div>
                  <div className="kc-pc-item"><span className="kc-pc-dot">−</span><span>ATM fee: $3 + 2% (not great for cash users)</span></div>
                  <div className="kc-pc-item"><span className="kc-pc-dot">−</span><span>$1/month inactivity fee after 12 months</span></div>
                  <div className="kc-pc-item"><span className="kc-pc-dot">−</span><span>Custodial — you don&apos;t control private keys</span></div>
                  <div className="kc-pc-item"><span className="kc-pc-dot">−</span><span>Premium tier ($1K/yr) is expensive for casual users</span></div>
                  <div className="kc-pc-item"><span className="kc-pc-dot">−</span><span>ACH top-up costs $2, FedWire costs $15</span></div>
                </div>
              </div>
            </div>

            {/* Fee Table */}
            <div className="kc-section">
              <h2 className="kc-h2">Full <span>Fee</span> Breakdown</h2>
              <table className="kc-table">
                <thead>
                  <tr>
                    <th>Fee</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="kc-fee-name">Annual fee (Standard)</td><td>Free</td></tr>
                  <tr><td className="kc-fee-name">Annual fee (Premium)</td><td>$1,000/yr</td></tr>
                  <tr><td className="kc-fee-name">Annual fee (Private)</td><td>$10,000/yr</td></tr>
                  <tr><td className="kc-fee-name">Stablecoin top-up</td><td>0%</td></tr>
                  <tr><td className="kc-fee-name">ACH top-up</td><td>$2</td></tr>
                  <tr><td className="kc-fee-name">FedWire top-up</td><td>$15</td></tr>
                  <tr><td className="kc-fee-name">FX fee</td><td>0.5%–1.75%</td></tr>
                  <tr><td className="kc-fee-name">ATM withdrawal</td><td>$3 + 2% + operator fees</td></tr>
                  <tr><td className="kc-fee-name">Inactivity fee</td><td>$1/month (after 12 months)</td></tr>
                  <tr><td className="kc-fee-name">Declined transaction</td><td>$0.50</td></tr>
                </tbody>
              </table>
              <p className="kc-p" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
                Always top up with stablecoins to avoid fees. Use your card monthly to avoid the inactivity charge.
              </p>
            </div>

            {/* Get USDC CTA */}
            <div className="kc-exc">
              <p className="kc-exc-label">💰 Buy USDC to top up KAST</p>
              <div className="kc-exc-links">
                <a href="https://www.gate.com/share/xwvca1ha" target="_blank" rel="noopener noreferrer sponsored" className="kc-exc-btn kc-exc-gate">Gate.io →</a>
                <a href="https://www.binance.com/referral/earn-together/refer2earn-usdc/claim?hl=en&ref=GRO_28502_0JWES&utm_source=referral_entrance" target="_blank" rel="noopener noreferrer sponsored" className="kc-exc-btn kc-exc-binance">Binance →</a>
              </div>
              <p className="kc-exc-note">Buy USDC with 0% stablecoin top-up fee on KAST · Instant activation</p>
            </div>

            {/* Referral */}
            <div className="kc-section">
              <h2 className="kc-h2">KAST <span>Referral</span> Program — Up to $250 Per User</h2>
              <p className="kc-p">
                KAST has one of the best crypto referral programs right now. For every person you refer who
                becomes active (spends $100 on their card), you earn <strong>up to $250 in USDC</strong> commission —
                paid instantly.
              </p>
              <p className="kc-p">
                There&apos;s also a daily Referral Leaderboard where top referrers share <strong>$1,000 USDC in daily prizes</strong>.
                KAST points from referrals convert to the KAST token at the Q2 2026 TGE event.
              </p>
              <p className="kc-p">
                You can sign up as an affiliate directly inside the KAST app — no separate platform, no waiting
                for approval. It&apos;s one of the few crypto card programs that pays in real USDC, not just points.
              </p>
            </div>

            {/* Main CTA */}
            <div className="kc-aff">
              <p className="kc-aff-tag">💳 Get your KAST card</p>
              <h3 className="kc-aff-h">Start with the Free Tier — Upgrade Anytime</h3>
              <p className="kc-aff-sub">Virtual card live in minutes · Apple &amp; Google Pay · 0% top-up fee</p>
              <a
                href="https://www.kast.xyz/?ref=3alamiy"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="kc-aff-btn"
              >
                Get KAST Card Free →
              </a>
              <p className="kc-aff-note">Standard tier is free forever. No credit check required.</p>
            </div>

            {/* FAQ */}
            <div className="kc-section">
              <h2 className="kc-h2">Frequently Asked <span>Questions</span></h2>
              <div className="kc-faq">
                <div className="kc-faq-item">
                  <p className="kc-faq-q">What is KAST card?</p>
                  <p className="kc-faq-a">KAST is a custodial prepaid Visa card powered by stablecoins. You top up with USDC, spend at 150M+ merchants in 170+ countries, and earn USDC cashback on every purchase. Virtual card goes live within minutes.</p>
                </div>
                <div className="kc-faq-item">
                  <p className="kc-faq-q">How much cashback does KAST pay?</p>
                  <p className="kc-faq-a">Standard (free): 1.5% USDC on up to $2K/month. Premium ($1K/yr): 2% on up to $10K/month. Private ($10K/yr): 3% on up to $40K/month. All tiers also earn KAST Points and 4% in $MOVE tokens on eligible spend.</p>
                </div>
                <div className="kc-faq-item">
                  <p className="kc-faq-q">Is the free Standard tier worth it?</p>
                  <p className="kc-faq-a">Yes. The free tier gives 1.5% USDC cashback on $2K/month, 5% APY on idle balance, Apple/Google Pay, and 0% stablecoin top-up. It outperforms most paid crypto cards. Just avoid the $1/month inactivity fee by spending monthly.</p>
                </div>
                <div className="kc-faq-item">
                  <p className="kc-faq-q">What are the Pengu Cards?</p>
                  <p className="kc-faq-a">KAST partnered with Pudgy Penguins for Pengu-branded card designs: Pengu Card (free tier), Pengu Black Card (metal, Premium $1K/yr), and Pengu Gold Card (24K gold, Private $10K/yr). Same economics — just exclusive designs.</p>
                </div>
                <div className="kc-faq-item">
                  <p className="kc-faq-q">How does the KAST referral program work?</p>
                  <p className="kc-faq-a">Refer someone who spends $100+ on their KAST card and earn up to $250 USDC commission. Sign up as an affiliate directly inside the KAST app. There&apos;s also a daily leaderboard with $1,000 USDC in prizes.</p>
                </div>
                <div className="kc-faq-item">
                  <p className="kc-faq-q">What countries does KAST support?</p>
                  <p className="kc-faq-a">KAST is available in 170+ countries and works at any of 150 million Visa merchants worldwide. Some country restrictions may apply — check kast.xyz for the latest supported regions.</p>
                </div>
              </div>
            </div>

            <hr className="kc-divider" />

            {/* Related */}
            <div className="kc-related">
              <p className="kc-related-title">Related Guides</p>
              <div className="kc-related-links">
                <Link href="/learn/top-crypto-cards-by-volume-may-2026" className="kc-related-link">
                  <span>Top 10 Crypto Cards by Volume — May 2026</span>
                  <span className="kc-related-arr">→</span>
                </Link>
                <Link href="/learn/top-25-airdrop-picks-2026" className="kc-related-link">
                  <span>Top 25 Airdrop Picks for 2026</span>
                  <span className="kc-related-arr">→</span>
                </Link>
                <Link href="/learn/best-crypto-airdrops-2026" className="kc-related-link">
                  <span>Best Crypto Airdrops 2026</span>
                  <span className="kc-related-arr">→</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
