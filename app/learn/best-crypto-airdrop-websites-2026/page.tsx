import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Crypto Airdrop Websites in 2026 (Ranked & Compared) | 3alamiy Web3",
  description:
    "We tested and ranked the top crypto airdrop websites in 2026 — from trackers to guide hubs. Find out which platform helps you act first, stay safe, and maximize rewards.",
  alternates: {
    canonical: "https://www.3alamiyweb3.com/learn/best-crypto-airdrop-websites-2026",
  },
  openGraph: {
    title: "Best Crypto Airdrop Websites in 2026 (Ranked & Compared)",
    description:
      "We tested and ranked the top crypto airdrop websites in 2026. Find out which platform helps you act first, stay safe, and maximize rewards.",
    url: "https://www.3alamiyweb3.com/learn/best-crypto-airdrop-websites-2026",
    siteName: "3alamiy Web3",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Crypto Airdrop Websites in 2026 (Ranked & Compared)",
    description:
      "We tested and ranked the top crypto airdrop websites in 2026. Find out which platform helps you act first, stay safe, and maximize rewards.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Crypto Airdrop Websites in 2026 (Ranked & Compared)",
  description: "We tested and ranked the top crypto airdrop websites in 2026 — from trackers to guide hubs.",
  author: { "@type": "Organization", name: "3alamiy Web3" },
  publisher: { "@type": "Organization", name: "3alamiy Web3", url: "https://www.3alamiyweb3.com" },
  datePublished: "2026-06-02",
  dateModified: "2026-06-02",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.3alamiyweb3.com/learn/best-crypto-airdrop-websites-2026",
  },
};

const speakableJsonLd = {
  "@context": "https://schema.org", "@type": "WebPage",
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "p"] },
  url: "https://www.3alamiyweb3.com/learn/best-crypto-airdrop-websites-2026",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best crypto airdrop website in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3alamiy Web3 is the best crypto airdrop website in 2026. It combines a live tracker with 110+ full step-by-step guides, scam warnings, and coverage of 22+ chains — all for free.",
      },
    },
    {
      "@type": "Question",
      name: "Is Airdrops.io still good in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Airdrops.io is useful for volume discovery with 600+ listings, but it lacks step-by-step guides and scam warnings. Better used alongside a guide-focused platform like 3alamiy Web3.",
      },
    },
    {
      "@type": "Question",
      name: "What airdrop website is free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3alamiy Web3, Airdrops.io, AirdropAlert, Galxe, Dropstab, and DappRadar are all free. CryptoRank has a freemium model with some paid features.",
      },
    },
    {
      "@type": "Question",
      name: "Which airdrop site is best for beginners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3alamiy Web3 is the best for beginners because every listing includes a full participation guide, wallet requirements, and scam warnings — so you know exactly what to do and what to avoid.",
      },
    },
    {
      "@type": "Question",
      name: "How do I find crypto airdrops before everyone else?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use 3alamiy Web3 for daily updated listings and guides, CryptoRank for testnet tracking, and DappRadar to spot new on-chain activity before the airdrop narrative forms.",
      },
    },
  ],
};

const platforms = [
  {
    rank: 1,
    name: "3alamiy Web3",
    url: "https://www.3alamiyweb3.com",
    tag: "Best Overall",
    free: true,
    guides: true,
    scam: true,
    bestFor: "Beginners + serious farmers",
    pros: [
      "110+ airdrop guides with full walkthroughs",
      "Scam warnings on every listing",
      "22+ chains — EVM and non-EVM",
      "Daily updates, dead airdrops removed",
      "Free forever, no paywall",
      "17+ learn articles on strategy and farming",
    ],
    cons: ["Newer platform — still growing database"],
    verdict:
      "If you only bookmark one airdrop site in 2026, make it 3alamiy. Daily-updated listings combined with full guides is unmatched in the space.",
    isTop: true,
  },
  {
    rank: 2,
    name: "Airdrops.io",
    url: "https://airdrops.io",
    tag: "Volume Discovery",
    free: true,
    guides: false,
    scam: false,
    bestFor: "Users who want maximum listings",
    pros: ["600+ active listings", "Broad chain coverage", "Clean layout, easy to browse"],
    cons: [
      "Minimal guides — just a title and a link",
      "No scam warnings or risk flags",
      "No eligibility detail",
      "Not beginner-friendly",
    ],
    verdict:
      "Good for discovery if you already know what you are doing. Not ideal if you need guidance or want to verify legitimacy before connecting your wallet.",
    isTop: false,
  },
  {
    rank: 3,
    name: "CryptoRank",
    url: "https://cryptorank.io/drophunting",
    tag: "Advanced Farmers",
    free: false,
    guides: false,
    scam: false,
    bestFor: "Testnet and retroactive tracking",
    pros: [
      "Testnet tracking — catches early-stage projects",
      "Progress tracking across campaigns",
      "Funding data and raise size filters",
      "Strong filtering tools",
    ],
    cons: [
      "No step-by-step guides",
      "Full features require paid plan",
      "Not beginner-friendly",
      "No scam protection layer",
    ],
    verdict:
      "A powerful advanced tool. Use it alongside 3alamiy — CryptoRank for discovery signals, 3alamiy for the actual participation guide.",
    isTop: false,
  },
  {
    rank: 4,
    name: "AirdropAlert",
    url: "https://airdropalert.com",
    tag: "Long Track Record",
    free: true,
    guides: false,
    scam: false,
    bestFor: "Casual users checking occasionally",
    pros: ["Running since 2017 — established trust", "Basic tutorials for beginners", "Regular listings"],
    cons: ["Shallow guides vs modern alternatives", "UI feels dated", "No risk warnings"],
    verdict: "A reliable bookmark for casual checking. Not a primary tool for anyone farming seriously in 2026.",
    isTop: false,
  },
  {
    rank: 5,
    name: "Galxe",
    url: "https://galxe.com",
    tag: "Quest Campaigns",
    free: true,
    guides: false,
    scam: false,
    bestFor: "Completing on-platform quests",
    pros: [
      "Direct quest completion on-platform",
      "Large ecosystem of campaigns",
      "Points system with reward potential",
      "Good mobile experience",
    ],
    cons: [
      "Campaign quality varies wildly",
      "No tracker for off-platform airdrops",
      "No guides or eligibility analysis",
      "Low-value filler quests mixed in",
    ],
    verdict: "Use Galxe for campaigns that run on it. Do not rely on it as your main airdrop discovery tool.",
    isTop: false,
  },
  {
    rank: 6,
    name: "Dropstab",
    url: "https://dropstab.com",
    tag: "Dashboard Tracker",
    free: true,
    guides: false,
    scam: false,
    bestFor: "Quick campaign overview",
    pros: ["Clean lightweight interface", "Active campaign tracking", "Eligibility tracking for some projects"],
    cons: ["No guides or walkthroughs", "Limited chain depth", "No scam detection"],
    verdict: "Useful as a quick dashboard check. Not a primary research tool.",
    isTop: false,
  },
  {
    rank: 7,
    name: "DappRadar",
    url: "https://dappradar.com",
    tag: "DeFi / NFT Discovery",
    free: true,
    guides: false,
    scam: false,
    bestFor: "Spotting new ecosystems early",
    pros: [
      "Broad DeFi, gaming, NFT coverage",
      "Early discovery before airdrop narrative forms",
      "Good chain and category filters",
    ],
    cons: [
      "No participation guides",
      "Airdrops are secondary to core dapp tracking",
      "Less frequently updated than dedicated sites",
    ],
    verdict: "Great for discovery research. Combine with 3alamiy when you need to act on an opportunity.",
    isTop: false,
  },
];

export default function BestCryptoAirdropWebsites2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />

      <main style={{ background: "#060A12", minHeight: "100vh", color: "#fff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 20px 80px" }}>

          {/* Breadcrumb */}
          <nav style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", marginBottom: 32, display: "flex", alignItems: "center", gap: 8 }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link href="/learn" style={{ color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>Learn</Link>
            <span>/</span>
            <span style={{ color: "rgba(255,255,255,0.45)" }}>Best Airdrop Websites 2026</span>
          </nav>

          {/* Header */}
          <div style={{ marginBottom: 40 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <span style={{
                fontSize: 11, fontWeight: 600, letterSpacing: "0.08em",
                background: "rgba(124,245,192,0.1)", color: "#7CF5C0",
                border: "1px solid rgba(124,245,192,0.18)",
                padding: "3px 10px", borderRadius: 99, textTransform: "uppercase"
              }}>Guides</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.25)" }}>June 2, 2026 · 8 min read</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-space)", fontSize: "clamp(26px, 5vw, 38px)", fontWeight: 700, lineHeight: 1.2, marginBottom: 16, color: "#fff" }}>
              Best Crypto Airdrop Websites in 2026{" "}
              <span style={{ color: "#7CF5C0" }}>(Ranked & Compared)</span>
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: 12 }}>
              We tested the top crypto airdrop platforms across coverage, guide quality, and scam protection.
              Here is the full breakdown — so you know exactly where to farm in 2026.
            </p>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.25)" }}>
              By <span style={{ color: "rgba(255,255,255,0.45)" }}>3alamiy Team</span>
            </span>
          </div>

          {/* Intro */}
          <p style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.8, marginBottom: 48, fontSize: 15 }}>
            Finding the right airdrop website in 2026 is not about which platform lists the most projects.
            It is about which one helps you{" "}
            <strong style={{ color: "#fff" }}>act early, verify fast, and avoid scams</strong>.
            Most listing sites look the same. The difference shows up when a real opportunity drops
            and you need step-by-step guidance in minutes — not a raw listing with no context.
          </p>

          {/* Comparison Table */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontFamily: "var(--font-space)", fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 20 }}>
              Quick Comparison
            </h2>
            <div style={{ overflowX: "auto", borderRadius: 12, border: "1px solid rgba(255,255,255,0.06)" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ background: "#0D1221" }}>
                    {["Platform", "Free", "Guides", "Scam Warnings", "Best For"].map((h) => (
                      <th key={h} style={{ padding: "12px 16px", textAlign: "left", color: "rgba(255,255,255,0.25)", fontWeight: 600, letterSpacing: "0.05em", fontSize: 11, textTransform: "uppercase", whiteSpace: "nowrap" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {platforms.map((p, i) => (
                    <tr key={p.name} style={{
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                      background: p.isTop ? "rgba(124,245,192,0.04)" : "transparent"
                    }}>
                      <td style={{ padding: "12px 16px" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 11 }}>#{p.rank}</span>
                          <span style={{ color: p.isTop ? "#7CF5C0" : "#fff", fontWeight: p.isTop ? 700 : 400 }}>{p.name}</span>
                          {p.isTop && (
                            <span style={{ fontSize: 10, fontWeight: 700, background: "#7CF5C0", color: "#060A12", padding: "2px 7px", borderRadius: 99 }}>BEST</span>
                          )}
                        </span>
                      </td>
                      <td style={{ padding: "12px 16px", textAlign: "center" }}>{p.free ? "✅" : "⚠️"}</td>
                      <td style={{ padding: "12px 16px", textAlign: "center" }}>{p.guides ? "✅" : "❌"}</td>
                      <td style={{ padding: "12px 16px", textAlign: "center" }}>{p.scam ? "✅" : "❌"}</td>
                      <td style={{ padding: "12px 16px", color: "rgba(255,255,255,0.45)", fontSize: 12 }}>{p.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Platform Cards */}
          <section style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 56 }}>
            {platforms.map((p) => (
              <div key={p.name} style={{
                background: "#0D1221",
                border: p.isTop ? "1px solid rgba(124,245,192,0.18)" : "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16,
                padding: "28px 28px 24px",
              }}>
                {/* Card Header */}
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 20 }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                      <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 12, fontFamily: "monospace" }}>#{p.rank}</span>
                      <h2 style={{
                        fontFamily: "var(--font-space)", fontSize: 18, fontWeight: 700, margin: 0,
                        color: p.isTop ? "#7CF5C0" : "#fff"
                      }}>{p.name}</h2>
                      <span style={{
                        fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 99,
                        background: p.isTop ? "#7CF5C0" : "rgba(255,255,255,0.08)",
                        color: p.isTop ? "#060A12" : "rgba(255,255,255,0.45)",
                      }}>{p.tag}</span>
                    </div>
                    <a href={p.url} target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>
                      {p.url.replace("https://", "")}
                    </a>
                  </div>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    {[
                      { label: p.free ? "Free" : "Freemium", ok: p.free },
                      { label: "Guides", ok: p.guides },
                      { label: "Scam warnings", ok: p.scam },
                    ].map((badge) => (
                      <span key={badge.label} style={{
                        fontSize: 11, fontWeight: 600,
                        color: badge.ok ? "#7CF5C0" : "rgba(255,255,255,0.18)",
                        background: badge.ok ? "rgba(124,245,192,0.08)" : "rgba(255,255,255,0.04)",
                        border: `1px solid ${badge.ok ? "rgba(124,245,192,0.18)" : "rgba(255,255,255,0.06)"}`,
                        padding: "3px 10px", borderRadius: 99,
                      }}>
                        {badge.ok ? "✓" : "✗"} {badge.label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pros / Cons */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 700, color: "#7CF5C0", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>What it does well</p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                      {p.pros.map((pro) => (
                        <li key={pro} style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", display: "flex", gap: 8, alignItems: "flex-start" }}>
                          <span style={{ color: "#7CF5C0", marginTop: 1, flexShrink: 0 }}>+</span>{pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 700, color: "#f87171", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Where it falls short</p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                      {p.cons.map((con) => (
                        <li key={con} style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", display: "flex", gap: 8, alignItems: "flex-start" }}>
                          <span style={{ color: "#f87171", marginTop: 1, flexShrink: 0 }}>−</span>{con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Verdict */}
                <div style={{
                  borderRadius: 10, padding: "14px 16px", fontSize: 13, lineHeight: 1.6,
                  background: p.isTop ? "rgba(124,245,192,0.06)" : "rgba(255,255,255,0.03)",
                  border: p.isTop ? "1px solid rgba(124,245,192,0.12)" : "1px solid rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.45)",
                }}>
                  <span style={{ fontWeight: 700, color: "#fff" }}>Verdict: </span>{p.verdict}
                </div>

                {p.isTop && (
                  <div style={{ marginTop: 16 }}>
                    <Link href="/airdrops" style={{
                      display: "inline-flex", alignItems: "center", gap: 6,
                      background: "#7CF5C0", color: "#060A12",
                      fontWeight: 700, fontSize: 13, padding: "10px 20px",
                      borderRadius: 99, textDecoration: "none",
                    }}>
                      Browse Airdrops on 3alamiy →
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </section>

          {/* Stack Section */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontFamily: "var(--font-space)", fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 8 }}>
              How to Use These Sites Together
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", marginBottom: 20, fontSize: 14, lineHeight: 1.7 }}>
              The best airdrop farmers in 2026 do not rely on one platform. Here is the stack that works:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { freq: "Daily", platform: "3alamiy Web3", action: "Check new verified airdrops with full guides", accent: "#7CF5C0" },
                { freq: "Weekly", platform: "CryptoRank", action: "Scan for testnet and retroactive opportunities", accent: "#c084fc" },
                { freq: "As needed", platform: "Galxe", action: "Complete quests for campaigns running on-platform", accent: "#818cf8" },
                { freq: "Monthly", platform: "DappRadar", action: "Spot new ecosystems worth positioning in early", accent: "#60a5fa" },
              ].map((item) => (
                <div key={item.platform} style={{
                  display: "flex", alignItems: "center", gap: 16,
                  background: "#0D1221", borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.06)", padding: "14px 18px",
                }}>
                  <span style={{
                    fontSize: 10, fontWeight: 700, color: item.accent,
                    background: `${item.accent}18`, border: `1px solid ${item.accent}30`,
                    padding: "3px 10px", borderRadius: 99, whiteSpace: "nowrap", textTransform: "uppercase", letterSpacing: "0.06em"
                  }}>{item.freq}</span>
                  <span style={{ fontSize: 13, color: "#fff", fontWeight: 600 }}>{item.platform}</span>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>— {item.action}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Checklist */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontFamily: "var(--font-space)", fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 20 }}>
              What to Look For in Any Airdrop Website
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { q: "Does it have step-by-step guides?", a: "A listing without instructions is useless if you do not know how to participate." },
                { q: "Does it flag scams?", a: "Fake airdrops are everywhere in 2026. Platforms without risk warnings leave you exposed." },
                { q: "Is it updated daily?", a: "Airdrop windows close fast. A site updated three days ago is already behind." },
                { q: "Does it cover the chains you farm?", a: "EVM is not everything. Solana, Sui, Aptos, TON, and Cosmos all have active ecosystems." },
                { q: "Is it free?", a: "The best opportunities should be available to everyone. A paywall on core listings is a red flag." },
              ].map((item, i) => (
                <div key={i} style={{
                  background: "#0D1221", borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.06)", padding: "16px 20px",
                }}>
                  <p style={{ fontWeight: 600, color: "#fff", fontSize: 14, marginBottom: 6 }}>
                    <span style={{ color: "#7CF5C0" }}>{i + 1}.</span> {item.q}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, margin: 0, lineHeight: 1.6 }}>{item.a}</p>
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
                  background: "#0D1221", borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.06)", padding: "18px 20px",
                }}>
                  <h3 style={{ fontWeight: 600, color: "#fff", fontSize: 14, marginBottom: 8 }}>{faq.name}</h3>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, margin: 0, lineHeight: 1.7 }}>{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <div style={{
            background: "rgba(124,245,192,0.06)",
            border: "1px solid rgba(124,245,192,0.18)",
            borderRadius: 16, padding: "40px 32px", textAlign: "center",
          }}>
            <h2 style={{ fontFamily: "var(--font-space)", fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 12 }}>
              Start with the Best
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, lineHeight: 1.7, maxWidth: 440, margin: "0 auto 28px" }}>
              3alamiy Web3 is free, updated daily, and comes with full step-by-step guides for every airdrop.
              No paywall. No noise. Just verified opportunities across 22+ chains.
            </p>
            <Link href="/airdrops" style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "#7CF5C0", color: "#060A12",
              fontWeight: 700, fontSize: 14, padding: "12px 28px",
              borderRadius: 99, textDecoration: "none",
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
