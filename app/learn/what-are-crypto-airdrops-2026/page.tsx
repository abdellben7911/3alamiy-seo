import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Are Crypto Airdrops? Complete Beginner Guide 2026",
  description: "Crypto airdrops are free token distributions to wallet holders. Learn how airdrops work, how much they pay, and how to qualify — no investment required.",
  alternates: { canonical: "https://www.3alamiyweb3.com/learn/what-are-crypto-airdrops-2026" },
  openGraph: {
    title: "What Are Crypto Airdrops? Complete Beginner Guide 2026",
    description: "Free tokens, no investment. Learn how crypto airdrops work and how to get them in 2026.",
    url: "https://www.3alamiyweb3.com/learn/what-are-crypto-airdrops-2026",
    siteName: "3alamiy Web3", type: "article",
  },
  twitter: { card: "summary_large_image", title: "What Are Crypto Airdrops? 2026 Guide", description: "How crypto airdrops work and how to get free tokens in 2026." },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "What Are Crypto Airdrops? Complete Beginner Guide 2026",
  description: "Crypto airdrops are free token distributions. Learn how they work, how much they pay, and how to qualify in 2026.",
  author: { "@type": "Organization", name: "3alamiy Web3" },
  publisher: { "@type": "Organization", name: "3alamiy Web3", url: "https://www.3alamiyweb3.com" },
  datePublished: "2026-06-17", dateModified: "2026-06-17",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.3alamiyweb3.com/learn/what-are-crypto-airdrops-2026" },
};

const speakableJsonLd = {
  "@context": "https://schema.org", "@type": "WebPage",
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".wa-answer-box", ".wa-faq"] },
  url: "https://www.3alamiyweb3.com/learn/what-are-crypto-airdrops-2026",
};

const faqJsonLd = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are crypto airdrops?",
      acceptedAnswer: { "@type": "Answer", text: "Crypto airdrops are free distributions of tokens to wallet addresses. Projects send free tokens to users who have interacted with their platform, held a specific coin, or completed tasks. Airdrops are used to reward early users, decentralize token ownership, and generate attention for a new project. No purchase is required to receive an airdrop." }
    },
    {
      "@type": "Question",
      name: "How do crypto airdrops work?",
      acceptedAnswer: { "@type": "Answer", text: "A crypto project takes a snapshot of eligible wallet addresses at a specific date and time. Any wallet that meets the eligibility criteria — minimum transaction count, minimum volume, specific on-chain actions — receives a token allocation. The project then opens a claim portal where eligible users can connect their wallet and claim their tokens. Some airdrops are sent directly without requiring a claim." }
    },
    {
      "@type": "Question",
      name: "How much do crypto airdrops pay?",
      acceptedAnswer: { "@type": "Answer", text: "Airdrop payouts vary enormously. Historical examples: Uniswap (UNI) paid $1,400–$12,000 per wallet in 2020. Arbitrum (ARB) paid $500–$10,000 in 2023. Hyperliquid (HYPE) paid an average of $10,000+ per user in 2024 — the largest airdrop in history by total value. Most airdrops pay $50–$500. High-effort farming of the right projects can yield $1,000–$10,000+ per cycle." }
    },
    {
      "@type": "Question",
      name: "Are crypto airdrops free?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Legitimate airdrops are completely free to receive. You never pay to claim an airdrop. However, some airdrop farming strategies require paying gas fees (small transaction fees on the blockchain, typically $0.01–$5 depending on the chain) to interact with protocols. Free-to-farm airdrops like Hyperliquid require no upfront cost at all." }
    },
    {
      "@type": "Question",
      name: "What do I need to receive crypto airdrops?",
      acceptedAnswer: { "@type": "Answer", text: "To receive crypto airdrops you need: (1) A self-custody crypto wallet — MetaMask for Ethereum/EVM chains, Phantom for Solana. (2) A small amount of ETH or SOL for gas fees on some chains. (3) Time to interact with protocols — swapping, bridging, staking, or completing tasks. You do not need to be a technical expert. Most airdrop interactions take 5–30 minutes per week." }
    },
    {
      "@type": "Question",
      name: "What is the difference between a retroactive airdrop and a farming airdrop?",
      acceptedAnswer: { "@type": "Answer", text: "A retroactive airdrop rewards past behavior — users who already interacted with a protocol before a surprise snapshot receive tokens. You cannot farm a retroactive airdrop after the fact. A farming airdrop is one where the project has not yet launched a token but users actively interact with the protocol now in anticipation of a future distribution. Most current opportunities (MetaMask, Phantom, Soneium, Ink) are farming airdrops." }
    },
    {
      "@type": "Question",
      name: "How do I avoid crypto airdrop scams?",
      acceptedAnswer: { "@type": "Answer", text: "Scam airdrops are common. Rules to stay safe: (1) Never connect your wallet to a site that appears in a DM or unsolicited message. (2) Never pay to claim an airdrop — legitimate airdrops are free. (3) Use a dedicated farming wallet with limited funds — never your main savings wallet. (4) Verify any claim site URL against the official project website. (5) Ignore tokens that appear in your wallet that you did not earn — these are dusting attacks designed to steal funds when you try to sell them." }
    },
  ],
};

const airdropTypes = [
  { name: "Retroactive Airdrop", desc: "Rewards past behavior. Project takes a surprise snapshot. Example: Uniswap (UNI) rewarded everyone who had ever used Uniswap before Sept 2020. You cannot prepare for these.", color: "#7CF5C0" },
  { name: "Farming Airdrop", desc: "Project hints at a future token. Users interact now to build eligibility. Example: MetaMask, Phantom, Soneium — all tokenless, all farming now. This is where most opportunity is.", color: "#f6851b" },
  { name: "Task Airdrop", desc: "Complete specific tasks (follow on X, join Discord, complete quests on Galxe/Zealy) to earn points or tokens. Lower value but easier to access. Example: many Galxe campaigns.", color: "#a78bfa" },
  { name: "Holder Airdrop", desc: "Hold a specific token or NFT to receive a new token. Example: early Ethereum holders received ETH2 staking rewards. Requires capital investment.", color: "#00b4ff" },
];

const topAirdrops = [
  { name: "Hyperliquid S2", status: "Points live", cost: "Free", avg: "$10,000+ S1 avg", slug: "hyperliquid-guide", color: "#7CF5C0" },
  { name: "MetaMask", status: "No token yet", cost: "Low gas", avg: "Unknown — massive", slug: "metamask-airdrop-guide-2026", color: "#f6851b" },
  { name: "Phantom Wallet", status: "No token yet", cost: "Free", avg: "Unknown — $109M raised", slug: "phantom-airdrop-guide-2026", color: "#ab9ff2" },
  { name: "Soneium (Sony)", status: "No token yet", cost: "Low gas", avg: "Unknown — Sony-backed", slug: "soneium-airdrop-guide-2026", color: "#00b4ff" },
];

const KAST_URL = "https://app.kast.xyz/referral/M9F7SPDV";
const REDOT_URL = "https://url.hk/i/en/xjrxm";

export default function WhatAreCryptoAirdrops2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <style>{`
        .wa *{box-sizing:border-box}.wa{background:#060A12;min-height:100vh;color:#fff;font-family:var(--font-space),'Space Grotesk',system-ui,sans-serif}
        .wa-wrap{max-width:800px;margin:0 auto;padding:48px 20px 80px}
        .wa-bc{font-size:13px;color:rgba(255,255,255,0.25);margin-bottom:32px;display:flex;align-items:center;gap:8px;flex-wrap:wrap}
        .wa-bc a{color:rgba(255,255,255,0.25);text-decoration:none}
        .wa-badge{font-size:11px;font-weight:600;letter-spacing:0.08em;padding:3px 10px;border-radius:99px;text-transform:uppercase;margin-right:8px}
        .wa-h1{font-size:clamp(24px,5vw,36px);font-weight:700;line-height:1.2;margin:16px 0;color:#fff}
        .wa-h1 span{color:#7CF5C0}
        .wa-sub{font-size:16px;color:rgba(255,255,255,0.45);line-height:1.7;margin-bottom:12px}
        .wa-meta{font-size:13px;color:rgba(255,255,255,0.25);margin-bottom:16px}
        .wa-meta span{color:rgba(255,255,255,0.45)}
        .wa-answer-box{background:rgba(124,245,192,0.05);border:1px solid rgba(124,245,192,0.18);border-radius:14px;padding:24px 28px;margin:32px 0}
        .wa-answer-box h2{font-size:16px;font-weight:700;color:#fff;margin-bottom:12px}
        .wa-answer-box p{font-size:14px;color:rgba(255,255,255,0.6);line-height:1.7;margin:0}
        .wa-divider{border:none;border-top:1px solid rgba(255,255,255,0.06);margin:36px 0}
        .wa-section-title{font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.25);margin-bottom:20px}
        .wa-prose{font-size:14px;color:rgba(255,255,255,0.55);line-height:1.8;margin-bottom:20px}
        .wa-prose strong{color:rgba(255,255,255,0.85);font-weight:700}
        .wa-type-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;margin-bottom:8px}
        .wa-type{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:16px 18px}
        .wa-type-name{font-size:13px;font-weight:700;margin-bottom:6px}
        .wa-type-desc{font-size:12px;color:rgba(255,255,255,0.4);line-height:1.5}
        .wa-airdrop-table{width:100%;border-collapse:collapse;margin-bottom:8px}
        .wa-airdrop-table th{font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:rgba(255,255,255,0.25);text-align:left;padding:8px 12px;border-bottom:1px solid rgba(255,255,255,0.06)}
        .wa-airdrop-table td{font-size:13px;padding:12px;border-bottom:1px solid rgba(255,255,255,0.04);vertical-align:middle}
        .wa-airdrop-table tr:last-child td{border-bottom:none}
        .wa-airdrop-table a{color:#7CF5C0;text-decoration:none;font-weight:600;font-size:12px}
        .wa-pill{font-size:10px;font-weight:700;padding:2px 8px;border-radius:99px}
        .wa-faq{margin-top:8px}
        .wa-faq-item{border-bottom:1px solid rgba(255,255,255,0.06);padding:18px 0}
        .wa-faq-item:last-child{border-bottom:none}
        .wa-faq-q{font-size:14px;font-weight:700;color:#fff;margin-bottom:8px}
        .wa-faq-a{font-size:13px;color:rgba(255,255,255,0.45);line-height:1.7}
        .wa-card-dual-box{display:flex;gap:10px;margin-bottom:32px;flex-wrap:wrap}
        .wa-card-btn{flex:1;min-width:140px;display:flex;align-items:center;justify-content:space-between;gap:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:14px 16px;text-decoration:none;transition:border-color .2s}
        .wa-card-btn:hover{border-color:rgba(255,255,255,0.25)}
        .wa-card-tag{font-size:9px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.3);margin-bottom:3px}
        .wa-card-name{font-size:13px;font-weight:700;color:#fff}
        .wa-card-perk{font-size:11px;color:rgba(255,255,255,0.4);margin-top:1px}
        .wa-card-arrow{font-size:14px;color:rgba(255,255,255,0.25);flex-shrink:0}
        .wa-cta-box{background:rgba(124,245,192,0.04);border:1px solid rgba(124,245,192,0.12);border-radius:16px;padding:32px;text-align:center;margin-top:48px}
        .wa-cta-box h2{font-size:18px;font-weight:700;color:#fff;margin-bottom:8px}
        .wa-cta-box p{font-size:14px;color:rgba(255,255,255,0.4);margin-bottom:20px}
        .wa-cta-btns{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}
        .wa-btn-primary{background:#7CF5C0;color:#060A12;font-size:13px;font-weight:700;padding:10px 22px;border-radius:8px;text-decoration:none}
        .wa-btn-secondary{background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:rgba(255,255,255,0.7);font-size:13px;font-weight:600;padding:10px 22px;border-radius:8px;text-decoration:none}
        @media(max-width:640px){.wa-wrap{padding:28px 16px 60px}.wa-type-grid{grid-template-columns:1fr}.wa-cta-btns{flex-direction:column}.wa-card-dual-box{flex-direction:column}}
      `}</style>

      <div className="wa">
        <div className="wa-wrap">

          <nav className="wa-bc">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/learn">Learn</Link>
            <span>›</span>
            <span>What Are Crypto Airdrops 2026</span>
          </nav>

          <div>
            <span className="wa-badge" style={{ background: "rgba(124,245,192,0.08)", color: "#7CF5C0", border: "1px solid rgba(124,245,192,0.2)" }}>Beginner Guide</span>
            <span className="wa-badge" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.1)" }}>Updated June 2026</span>
          </div>

          <h1 className="wa-h1">
            What Are <span>Crypto Airdrops</span>?<br />Complete Beginner Guide 2026
          </h1>
          <p className="wa-sub">
            Crypto airdrops are free token distributions to wallet holders. No investment required. Here is how they work, how much they pay, and exactly how to get them.
          </p>
          <p className="wa-meta">
            <span>6 min read</span> · <span>Updated June 17, 2026</span>
          </p>

          <div className="wa-answer-box">
            <h2>What is a crypto airdrop?</h2>
            <p>
              A crypto airdrop is when a blockchain project sends free tokens to wallet addresses that meet certain criteria — past usage, holding a related token, or completing tasks. Projects use airdrops to reward early users and distribute token ownership broadly. You never pay to receive a legitimate airdrop. The largest airdrop in history was Hyperliquid (HYPE) in 2024 — the average recipient received over $10,000 in free tokens.
            </p>
          </div>

          <hr className="wa-divider" />

          <p className="wa-section-title">How Airdrops Work — The Simple Version</p>
          <p className="wa-prose">
            A project launches with no token. Users interact with it — trading, swapping, staking, bridging. At some point, the project takes a <strong>snapshot</strong>: a record of every wallet that interacted, and how much. They then create a token and distribute it to those wallets based on their activity history. More activity = more tokens. The snapshot is often announced retroactively — meaning you did not know it was happening.
          </p>
          <p className="wa-prose">
            The modern approach is <strong>farming</strong>: you interact with protocols that have no token yet, betting that they will eventually airdrop one. This is what makes sites like this one valuable — we track which tokenless projects are worth farming before the snapshot.
          </p>

          <hr className="wa-divider" />

          <p className="wa-section-title">4 Types of Crypto Airdrops</p>
          <div className="wa-type-grid">
            {airdropTypes.map((t, i) => (
              <div key={i} className="wa-type">
                <div className="wa-type-name" style={{ color: t.color }}>{t.name}</div>
                <div className="wa-type-desc">{t.desc}</div>
              </div>
            ))}
          </div>

          <hr className="wa-divider" />

          <p className="wa-section-title">Best Airdrops to Farm Right Now</p>
          <table className="wa-airdrop-table">
            <thead>
              <tr>
                <th>Project</th>
                <th>Status</th>
                <th>Cost</th>
                <th>Est. Reward</th>
                <th>Guide</th>
              </tr>
            </thead>
            <tbody>
              {topAirdrops.map((a) => (
                <tr key={a.slug}>
                  <td style={{ color: '#fff', fontWeight: 700 }}>{a.name}</td>
                  <td><span className="wa-pill" style={{ background: `${a.color}15`, color: a.color, border: `1px solid ${a.color}30` }}>{a.status}</span></td>
                  <td style={{ color: 'rgba(255,255,255,0.5)' }}>{a.cost}</td>
                  <td style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>{a.avg}</td>
                  <td><Link href={`/learn/${a.slug}`}>Guide →</Link></td>
                </tr>
              ))}
            </tbody>
          </table>

          <hr className="wa-divider" />

          <p className="wa-section-title">Spend Your Airdrop Rewards</p>
          <div className="wa-card-dual-box">
            <a href={KAST_URL} target="_blank" rel="noopener noreferrer sponsored" className="wa-card-btn">
              <div>
                <div className="wa-card-tag">Crypto Card</div>
                <div className="wa-card-name">KAST Card</div>
                <div className="wa-card-perk">Up to 12% cashback</div>
              </div>
              <span className="wa-card-arrow">→</span>
            </a>
            <a href={REDOT_URL} target="_blank" rel="noopener noreferrer sponsored" className="wa-card-btn">
              <div>
                <div className="wa-card-tag">Crypto Card</div>
                <div className="wa-card-name">RedotPay Card</div>
                <div className="wa-card-perk">$445M volume · 6% cashback</div>
              </div>
              <span className="wa-card-arrow">→</span>
            </a>
          </div>

          <hr className="wa-divider" />

          <p className="wa-section-title">FAQ — Crypto Airdrops Explained</p>
          <div className="wa-faq">
            {faqJsonLd.mainEntity.map((item, i) => (
              <div key={i} className="wa-faq-item">
                <div className="wa-faq-q">{item.name}</div>
                <div className="wa-faq-a">{item.acceptedAnswer.text}</div>
              </div>
            ))}
          </div>

          <hr className="wa-divider" />

          <div className="wa-cta-box">
            <h2>Ready to Start Farming?</h2>
            <p>Browse step-by-step guides for every major airdrop opportunity in 2026 — all free, no investment required.</p>
            <div className="wa-cta-btns">
              <Link href="/airdrops" className="wa-btn-primary">View All Airdrops →</Link>
              <Link href="/learn" className="wa-btn-secondary">Read Farming Guides</Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
