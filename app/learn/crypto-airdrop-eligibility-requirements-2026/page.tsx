import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Crypto Airdrop Eligibility Requirements 2026 — How to Qualify | 3alamiy Web3",
  description:
    "Learn exactly what you need to qualify for crypto airdrops in 2026 — wallet setup, on-chain activity, eligibility criteria, and common disqualifiers to avoid.",
  alternates: {
    canonical: "https://www.3alamiyweb3.com/learn/crypto-airdrop-eligibility-requirements-2026",
  },
  openGraph: {
    title: "Crypto Airdrop Eligibility Requirements 2026 — How to Qualify",
    description:
      "Learn exactly what you need to qualify for crypto airdrops in 2026 — wallet setup, on-chain activity, eligibility criteria, and common disqualifiers to avoid.",
    url: "https://www.3alamiyweb3.com/learn/crypto-airdrop-eligibility-requirements-2026",
    siteName: "3alamiy Web3",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Airdrop Eligibility Requirements 2026 — How to Qualify",
    description: "Learn exactly what you need to qualify for crypto airdrops in 2026.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Crypto Airdrop Eligibility Requirements 2026 — How to Qualify",
  description: "Learn exactly what you need to qualify for crypto airdrops in 2026.",
  author: { "@type": "Organization", name: "3alamiy Web3" },
  publisher: { "@type": "Organization", name: "3alamiy Web3", url: "https://www.3alamiyweb3.com" },
  datePublished: "2026-06-02",
  dateModified: "2026-06-08",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.3alamiyweb3.com/learn/crypto-airdrop-eligibility-requirements-2026",
  },
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", ".req-intro"] },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Meet Crypto Airdrop Eligibility Requirements in 2026",
  description: "Step-by-step guide to making your wallet eligible for the maximum number of crypto airdrops.",
  totalTime: "PT3M",
  step: [
    { "@type": "HowToStep", position: 1, name: "Set up a self-custody wallet", text: "Install MetaMask for EVM chains, Phantom for Solana, and Sui Wallet for Sui. Never use a centralized exchange wallet — you will not receive airdrop tokens." },
    { "@type": "HowToStep", position: 2, name: "Build on-chain history over 3+ months", text: "Retroactive airdrops reward wallets with genuine long-term activity. Start transacting early — swap tokens, use DeFi protocols, bridge across chains." },
    { "@type": "HowToStep", position: 3, name: "Use only one wallet per airdrop", text: "Sybil filtering is the #1 disqualifier. Never use multiple wallets for the same project. Use a single dedicated farming wallet per ecosystem." },
    { "@type": "HowToStep", position: 4, name: "Complete every required task", text: "Follow social accounts, join Discord, verify your wallet in official campaigns. Partially completed task lists are often automatically disqualified." },
    { "@type": "HowToStep", position: 5, name: "Avoid VPNs and geographic violations", text: "Many airdrops restrict certain countries. Using a VPN to fake your location typically results in permanent disqualification when detected on-chain." },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.3alamiyweb3.com" },
    { "@type": "ListItem", position: 2, name: "Learn", item: "https://www.3alamiyweb3.com/learn" },
    { "@type": "ListItem", position: 3, name: "Airdrop Eligibility Requirements 2026", item: "https://www.3alamiyweb3.com/learn/crypto-airdrop-eligibility-requirements-2026" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the basic requirements to qualify for a crypto airdrop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most airdrops require a compatible wallet, some on-chain activity on the target blockchain, and completion of specific tasks like following social accounts, joining Discord, or using the protocol. Requirements vary by project.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need KYC to receive crypto airdrops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most DeFi and testnet airdrops do not require KYC. However, centralized projects or those targeting regulated markets may require identity verification before distributing tokens.",
      },
    },
    {
      "@type": "Question",
      name: "Can I qualify for airdrops with a new wallet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends. Some airdrops reward any wallet that completes tasks during the campaign. Retroactive airdrops usually require at least 3-6 months of genuine on-chain history. New wallets rarely qualify for retroactive drops.",
      },
    },
    {
      "@type": "Question",
      name: "What disqualifies you from a crypto airdrop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common disqualifiers include using a VPN to fake location, using multiple wallets for the same airdrop (Sybil), incomplete task completion, being in a restricted country, and having a wallet with no genuine transaction history.",
      },
    },
    {
      "@type": "Question",
      name: "How much on-chain activity do I need to qualify?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no universal minimum. Projects typically look for consistent activity over time — regular transactions, protocol interactions, and genuine usage patterns. One-time activity right before a snapshot rarely qualifies.",
      },
    },
  ],
};

const requirements = [
  {
    icon: "💼",
    title: "Compatible Wallet",
    color: "#7CF5C0",
    desc: "Every airdrop requires a self-custody wallet. MetaMask covers most EVM chains. Phantom for Solana. Sui Wallet for Sui. Martian for Aptos. Never use a centralized exchange wallet — you won't receive airdrop tokens.",
    tips: [
      "Use MetaMask for Ethereum, Arbitrum, Base, Optimism, zkSync, Polygon",
      "Use Phantom for Solana airdrops",
      "Use Sui Wallet or Suiet for Sui ecosystem",
      "Always keep your seed phrase offline — never in a photo or cloud storage",
    ],
  },
  {
    icon: "⛓️",
    title: "On-Chain Activity",
    color: "#c084fc",
    desc: "Projects snapshot wallet activity to identify genuine users. Wallets with no transaction history almost never qualify. The older and more active your wallet, the better your chances.",
    tips: [
      "Bridge assets across chains regularly",
      "Swap tokens on DEXs at least monthly",
      "Interact with protocols — lending, staking, liquidity",
      "Aim for 6+ months of consistent activity before retroactive snapshots",
    ],
  },
  {
    icon: "✅",
    title: "Task Completion",
    color: "#60a5fa",
    desc: "Most active airdrops require completing specific actions — social follows, Discord roles, testnet transactions, or protocol usage. Every incomplete task reduces your eligibility score.",
    tips: [
      "Follow official X/Twitter accounts",
      "Join and stay active in the project Discord",
      "Complete all testnet transactions listed in the guide",
      "Check for bonus tasks — these often have the highest weight",
    ],
  },
  {
    icon: "🌍",
    title: "Geographic Eligibility",
    color: "#f59e0b",
    desc: "Some projects restrict airdrops in certain countries due to regulations — most commonly the US, UK, and sanctioned countries. Always check the project's terms before spending time on participation.",
    tips: [
      "Read the official eligibility terms before starting",
      "Do not use a VPN to fake your location — projects detect this",
      "If restricted, look for projects specifically targeting your region",
      "Moroccan, African, and MENA users are eligible for most DeFi airdrops",
    ],
  },
  {
    icon: "🚫",
    title: "Sybil Resistance",
    color: "#f87171",
    desc: "Sybil farming — using multiple wallets to multiply airdrop allocations — is the fastest way to get disqualified. Projects use on-chain analysis to detect and ban Sybil wallets. One genuine wallet beats ten fake ones every time.",
    tips: [
      "Use one wallet per airdrop campaign",
      "Do not send funds between your own wallets during a campaign",
      "Avoid identical transaction patterns across wallets",
      "Genuine activity always outperforms Sybil farming",
    ],
  },
];

const eligibilityTypes = [
  {
    type: "Retroactive",
    color: "#7CF5C0",
    bg: "rgba(124,245,192,0.06)",
    border: "rgba(124,245,192,0.18)",
    desc: "Rewards users who already used a protocol before the airdrop was announced. You cannot retroactively qualify — you either used it or you didn't.",
    requirement: "3–12 months of prior usage",
    example: "Uniswap, dYdX, Arbitrum",
  },
  {
    type: "Testnet",
    color: "#c084fc",
    bg: "rgba(192,132,252,0.06)",
    border: "rgba(192,132,252,0.18)",
    desc: "Rewards users who tested the protocol before mainnet launch. Requires completing specific testnet tasks — transactions, bridging, swapping on the test network.",
    requirement: "Complete testnet tasks during the campaign window",
    example: "Most Layer 1 and Layer 2 launches",
  },
  {
    type: "Active Campaign",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.06)",
    border: "rgba(96,165,250,0.18)",
    desc: "Live campaigns where you complete tasks to earn points or tokens. Requirements are clearly listed. Easiest to qualify for — just follow the guide.",
    requirement: "Complete all listed tasks before the deadline",
    example: "Galxe campaigns, points programs",
  },
  {
    type: "Holder / NFT",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.06)",
    border: "rgba(245,158,11,0.18)",
    desc: "Rewards holders of a specific token, NFT, or DAO membership. You need to hold the qualifying asset in your wallet at the time of the snapshot.",
    requirement: "Hold qualifying asset before snapshot date",
    example: "Discord role airdrops, NFT holder drops",
  },
];

const checklist = [
  { item: "Self-custody wallet set up and funded", critical: true },
  { item: "Wallet has 3+ months of on-chain activity", critical: true },
  { item: "Connected to the correct blockchain network", critical: true },
  { item: "All required tasks completed", critical: true },
  { item: "Not using a VPN", critical: true },
  { item: "Only one wallet used per campaign", critical: true },
  { item: "Discord joined and active", critical: false },
  { item: "Twitter/X followed and engaged", critical: false },
  { item: "Email submitted if required", critical: false },
  { item: "Checked geographic eligibility", critical: false },
];

export default function CryptoAirdropEligibilityRequirements2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main style={{ background: "#060A12", minHeight: "100vh", color: "#fff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 20px 80px" }}>

          {/* Breadcrumb */}
          <nav style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", marginBottom: 32, display: "flex", alignItems: "center", gap: 8 }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link href="/learn" style={{ color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>Learn</Link>
            <span>/</span>
            <span style={{ color: "rgba(255,255,255,0.45)" }}>Airdrop Eligibility 2026</span>
          </nav>

          {/* Header */}
          <div style={{ marginBottom: 40 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <span style={{
                fontSize: 11, fontWeight: 600, letterSpacing: "0.08em",
                background: "rgba(124,245,192,0.1)", color: "#7CF5C0",
                border: "1px solid rgba(124,245,192,0.18)",
                padding: "3px 10px", borderRadius: 99, textTransform: "uppercase"
              }}>Beginners</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.25)" }}>June 2, 2026 · 7 min read</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-space)", fontSize: "clamp(24px, 5vw, 36px)", fontWeight: 700, lineHeight: 1.2, marginBottom: 16, color: "#fff" }}>
              Crypto Airdrop Eligibility Requirements 2026{" "}
              <span style={{ color: "#7CF5C0" }}>— How to Qualify</span>
            </h1>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: 12 }}>
              Most people miss airdrops not because they were too late — but because they did not meet the eligibility requirements. Here is exactly what projects look for, what disqualifies you, and how to build a wallet that consistently qualifies.
            </p>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.25)" }}>
              By <span style={{ color: "rgba(255,255,255,0.45)" }}>3alamiy Team</span>
            </span>
          </div>

          {/* Quick answer box */}
          <div style={{
            background: "rgba(124,245,192,0.05)", border: "1px solid rgba(124,245,192,0.18)",
            borderRadius: 14, padding: "18px 20px", marginBottom: 48,
            display: "flex", gap: 14, alignItems: "flex-start"
          }}>
            <span style={{ fontSize: 22, flexShrink: 0 }}>⚡</span>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: "#7CF5C0", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 6px" }}>Quick Answer</p>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: 1.7 }}>
                To qualify for most crypto airdrops you need: <strong style={{ color: "#fff" }}>a self-custody wallet</strong>, <strong style={{ color: "#fff" }}>on-chain activity history</strong>, <strong style={{ color: "#fff" }}>completed tasks</strong>, and <strong style={{ color: "#fff" }}>geographic eligibility</strong>. The biggest disqualifier is Sybil detection — using multiple wallets.
              </p>
            </div>
          </div>

          {/* 4 Types of Airdrops */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontFamily: "var(--font-space)", fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 8 }}>
              The 4 Types of Airdrops — and What Each Requires
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
              Eligibility requirements are completely different depending on the type of airdrop. Know which type you are targeting before you start.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
              {eligibilityTypes.map((t) => (
                <div key={t.type} style={{
                  background: t.bg, border: `1px solid ${t.border}`,
                  borderRadius: 14, padding: "18px 20px"
                }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: t.color }}>{t.type}</span>
                    <span style={{ fontSize: 10, color: "rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.05)", padding: "2px 8px", borderRadius: 99 }}>{t.example}</span>
                  </div>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.65, margin: "0 0 10px" }}>{t.desc}</p>
                  <p style={{ fontSize: 11, fontWeight: 600, color: t.color, margin: 0 }}>→ {t.requirement}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 5 Core Requirements */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontFamily: "var(--font-space)", fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 8 }}>
              5 Core Eligibility Requirements
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
              These apply to almost every airdrop in 2026. Meet all five and you are ahead of 90% of participants.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {requirements.map((r, i) => (
                <div key={r.title} style={{
                  background: "#0D1221", border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 16, overflow: "hidden"
                }}>
                  <div style={{ padding: "20px 22px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                      <span style={{
                        width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                        background: `${r.color}15`, border: `1px solid ${r.color}30`,
                        display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16
                      }}>{r.icon}</span>
                      <div>
                        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.25)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>#{i + 1}</span>
                        <h3 style={{ fontFamily: "var(--font-space)", fontSize: 16, fontWeight: 700, color: r.color, margin: 0 }}>{r.title}</h3>
                      </div>
                    </div>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.75, margin: "0 0 14px" }}>{r.desc}</p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                      {r.tips.map((tip) => (
                        <li key={tip} style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", display: "flex", gap: 8, alignItems: "flex-start" }}>
                          <span style={{ color: r.color, flexShrink: 0, marginTop: 1 }}>✓</span>{tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pre-participation checklist */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontFamily: "var(--font-space)", fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 8 }}>
              Pre-Participation Checklist
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
              Run through this before starting any airdrop. Critical items are marked — missing any of these will likely get you disqualified.
            </p>
            <div style={{ background: "#0D1221", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, overflow: "hidden" }}>
              {checklist.map((item, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 14, padding: "14px 20px",
                  borderBottom: i < checklist.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none"
                }}>
                  <span style={{
                    width: 20, height: 20, borderRadius: 6, flexShrink: 0,
                    border: `1.5px solid ${item.critical ? "#7CF5C0" : "rgba(255,255,255,0.15)"}`,
                    background: item.critical ? "rgba(124,245,192,0.08)" : "transparent",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11,
                  }}>
                    {item.critical && <span style={{ color: "#7CF5C0" }}>✓</span>}
                  </span>
                  <span style={{ fontSize: 13, color: item.critical ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.4)", flex: 1 }}>
                    {item.item}
                  </span>
                  {item.critical && (
                    <span style={{ fontSize: 10, fontWeight: 700, color: "#f87171", background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.2)", padding: "2px 8px", borderRadius: 99 }}>
                      Critical
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Common mistakes */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontFamily: "var(--font-space)", fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 20 }}>
              Most Common Disqualifiers
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { mistake: "Sybil farming with multiple wallets", fix: "Use one genuine wallet. Projects use on-chain graph analysis to detect connected wallets." },
                { mistake: "New wallet with no history", fix: "Start building on-chain activity now. Retroactive airdrops need 3–12 months of genuine usage." },
                { mistake: "VPN usage during participation", fix: "Never use a VPN. Projects log IPs and flag VPN users, especially for geographic restrictions." },
                { mistake: "Incomplete task completion", fix: "Complete every single task in the guide — even the ones that seem optional. Partial completion often means zero allocation." },
                { mistake: "Wrong wallet type (exchange wallet)", fix: "Always use a self-custody wallet. Tokens sent to exchange wallets are often unrecoverable." },
                { mistake: "Waiting for the announcement", fix: "By the time an airdrop is announced, the snapshot may have already happened. Start farming before announcements." },
              ].map((item, i) => (
                <div key={i} style={{
                  background: "#0D1221", border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 12, padding: "16px 18px",
                  display: "flex", gap: 14, alignItems: "flex-start"
                }}>
                  <span style={{ color: "#f87171", fontWeight: 700, fontSize: 14, flexShrink: 0, marginTop: 1 }}>✗</span>
                  <div>
                    <p style={{ fontWeight: 600, color: "#fff", fontSize: 13, margin: "0 0 5px" }}>{item.mistake}</p>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, margin: 0, lineHeight: 1.6 }}>
                      <span style={{ color: "#7CF5C0", fontWeight: 600 }}>Fix: </span>{item.fix}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontFamily: "var(--font-space)", fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 20 }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {faqJsonLd.mainEntity.map((faq, i) => (
                <div key={i} style={{
                  background: "#0D1221", border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 12, padding: "18px 20px"
                }}>
                  <h3 style={{ fontWeight: 600, color: "#fff", fontSize: 14, marginBottom: 8 }}>{faq.name}</h3>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, margin: 0, lineHeight: 1.7 }}>{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related articles */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontFamily: "var(--font-space)", fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 16 }}>
              Related Guides
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { slug: "how-to-avoid-crypto-airdrop-scams-2026", title: "How to Avoid Crypto Airdrop Scams 2026" },
                { slug: "how-to-build-onchain-activity-that-actually-matters", title: "How to Build On-Chain Activity That Actually Matters" },
                { slug: "how-to-find-airdrops-before-everyone-else", title: "How to Find Airdrops Before Everyone Else" },
                { slug: "best-crypto-airdrop-websites-2026", title: "Best Crypto Airdrop Websites 2026" },
                { slug: "free-crypto-airdrops-no-investment-2026", title: "Best Free Crypto Airdrops — No Investment Required" },
              ].map((article) => (
                <Link key={article.slug} href={`/learn/${article.slug}`} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  background: "#0D1221", border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 10, padding: "13px 16px", textDecoration: "none",
                  color: "rgba(255,255,255,0.6)", fontSize: 13, fontWeight: 500,
                  transition: "border-color 0.15s"
                }}>
                  <span>{article.title}</span>
                  <span style={{ color: "#7CF5C0", fontSize: 12 }}>→</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <div style={{
            background: "rgba(124,245,192,0.06)", border: "1px solid rgba(124,245,192,0.18)",
            borderRadius: 16, padding: "40px 32px", textAlign: "center"
          }}>
            <h2 style={{ fontFamily: "var(--font-space)", fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 12 }}>
              Ready to Start Qualifying?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, lineHeight: 1.7, maxWidth: 440, margin: "0 auto 28px" }}>
              Browse 110+ verified airdrops on 3alamiy Web3 — each one comes with full eligibility requirements, step-by-step guides, and scam warnings.
            </p>
            <Link href="/airdrops" style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "#7CF5C0", color: "#060A12",
              fontWeight: 700, fontSize: 14, padding: "12px 28px",
              borderRadius: 99, textDecoration: "none"
            }}>
              Browse All Airdrops →
            </Link>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.18)", marginTop: 16 }}>
              Last updated: June 2, 2026 · Reviewed weekly
            </p>
          </div>

        </div>
      </main>
    </>
  );
}
