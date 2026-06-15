import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Crypto Airdrops for Indonesians 2026 — Free Guides | 3alamiy Web3",
  description: "The best crypto airdrops accessible from Indonesia in 2026. Free, no investment required. Step-by-step guides for Indonesian users — fund via GoPay, OVO, or Indodax.",
  alternates: { canonical: "https://www.3alamiyweb3.com/learn/best-crypto-airdrops-indonesia-2026" },
  openGraph: {
    title: "Best Crypto Airdrops for Indonesians 2026 — Free Guides",
    description: "The best crypto airdrops accessible from Indonesia in 2026. Free, no investment required.",
    url: "https://www.3alamiyweb3.com/learn/best-crypto-airdrops-indonesia-2026",
    siteName: "3alamiy Web3",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Best Crypto Airdrops for Indonesians 2026", description: "Free crypto airdrops accessible from Indonesia. No investment required." },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "Best Crypto Airdrops for Indonesians 2026 — Free Guides",
  description: "The best crypto airdrops accessible from Indonesia in 2026. Free, no investment required.",
  author: { "@type": "Organization", name: "3alamiy Web3" },
  publisher: { "@type": "Organization", name: "3alamiy Web3", url: "https://www.3alamiyweb3.com" },
  datePublished: "2026-06-12", dateModified: "2026-06-12",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.3alamiyweb3.com/learn/best-crypto-airdrops-indonesia-2026" },
  areaServed: { "@type": "Country", name: "Indonesia", sameAs: "https://en.wikipedia.org/wiki/Indonesia" },
  about: { "@type": "Thing", name: "Crypto Airdrops in Indonesia 2026" },
};

const speakableJsonLd = {
  "@context": "https://schema.org", "@type": "WebPage",
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".id-answer-box", ".id-faq", ".id-faqs"] },
  url: "https://www.3alamiyweb3.com/learn/best-crypto-airdrops-indonesia-2026",
};

const faqJsonLd = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Can Indonesians participate in crypto airdrops in 2026?", acceptedAnswer: { "@type": "Answer", text: "Yes. Indonesians can participate in most crypto airdrops in 2026. DeFi protocol airdrops, testnet airdrops, and social task airdrops are fully accessible from Indonesia. Crypto is regulated in Indonesia as a commodity by the OJK (Otoritas Jasa Keuangan) and Bappebti. You need a self-custody wallet like MetaMask or Phantom — not an exchange wallet — to receive airdrop tokens." } },
    { "@type": "Question", name: "Is crypto legal in Indonesia?", acceptedAnswer: { "@type": "Answer", text: "Yes. Crypto is legal in Indonesia as a commodity (aset kripto) regulated by Bappebti (now under OJK). Indonesian residents can buy, sell, and hold crypto legally through registered exchanges like Indodax, Tokocrypto, and Pintu. Crypto cannot be used as a payment method, but trading and DeFi participation are legal." } },
    { "@type": "Question", name: "What wallet should Indonesians use for airdrops?", acceptedAnswer: { "@type": "Answer", text: "For EVM chains (Ethereum, Base, Arbitrum): use MetaMask from metamask.io. For Solana: use Phantom from phantom.com. Never use your Indodax, Tokocrypto, or Pintu exchange wallet — exchange wallets cannot receive airdrop tokens directly." } },
    { "@type": "Question", name: "How can Indonesians buy ETH for airdrop farming?", acceptedAnswer: { "@type": "Answer", text: "Buy ETH on Indodax, Tokocrypto, or Pintu using bank transfer (BCA, Mandiri, BNI) or GoPay/OVO. Buy the equivalent of Rp 75,000–200,000 worth of ETH, then withdraw to your MetaMask wallet. Many airdrops are completely free — testnet and social task airdrops require no ETH at all." } },
    { "@type": "Question", name: "Do Indonesians pay tax on crypto airdrops?", acceptedAnswer: { "@type": "Answer", text: "Yes. Indonesia imposes a 0.1% income tax and 0.11% VAT on crypto transactions under PMK 68/2022. Airdrop tokens received may be treated as income. Consult a local tax consultant (konsultan pajak) for personal advice. Keep records of tokens received and their IDR value at receipt for your annual SPT tax return." } },
    { "@type": "Question", name: "Why is Indonesia a strong market for crypto airdrops?", acceptedAnswer: { "@type": "Answer", text: "Indonesia ranks #5 globally in crypto adoption (Chainalysis 2025). With 275 million people, Southeast Asia's largest economy, and one of the world's highest rates of DeFi and P2E gaming participation, Indonesia has a massive crypto-active population. Indonesian users are underrepresented on many DeFi protocols — meaning lower competition for airdrop allocations." } },
  ],
};

const airdrops = [
  { name: "Hyperliquid (HYPE)", slug: "hyperliquid-guide", category: "DEX / Perps", cost: "Free", difficulty: "Easy", time: "10 min/day", raise: "No VC — community funded", why: "Trade perpetuals on Hyperliquid. Season 2 points live. Season 1 paid average users $10,000+. No KYC. Fully accessible from Indonesia. Highest upside free airdrop available in 2026.", country: "Fully accessible from Indonesia", color: "#7CF5C0" },
  { name: "MetaMask Airdrop", slug: "metamask-airdrop-guide-2026", category: "Wallet", cost: "Free", difficulty: "Easy", time: "5 min/day", raise: "$686M raised", why: "30M+ users, no token yet. Indonesian MetaMask users are growing rapidly from P2E gaming. Use MetaMask Portfolio, swap, and bridge daily. A future MASK token would be one of the largest airdrops ever.", country: "Fully accessible from Indonesia", color: "#f6851b" },
  { name: "Phantom Airdrop", slug: "phantom-airdrop-guide-2026", category: "Wallet", cost: "Free", difficulty: "Easy", time: "5 min/day", raise: "$109M raised", why: "Phantom Wallet — no token yet. Swap on Jupiter, use Phantom bridge. Indonesian Solana users are growing fast. $109M raised from Paradigm and a16z.", country: "Fully accessible from Indonesia", color: "#ab9ff2" },
  { name: "Soneium (Sony L2)", slug: "soneium-airdrop-guide-2026", category: "Layer 2", cost: "Free / Low", difficulty: "Medium", time: "30 min/week", raise: "Sony-backed", why: "Sony Group's Ethereum L2. No token yet. Sony has a massive presence in Indonesia — PlayStation, Sony Music. Bridge ETH, use DeFi apps weekly to build history.", country: "Fully accessible from Indonesia", color: "#00b4ff" },
  { name: "Galxe (G)", slug: "galxe-airdrop-guide-2026", category: "Social Tasks", cost: "Free", difficulty: "Easy", time: "10 min/day", raise: "$36M raised", why: "Complete on-chain quests for hundreds of projects at once. Indonesian crypto communities are highly active on Galxe. Already has a live G token — earn immediately with zero investment.", country: "Fully accessible from Indonesia", color: "#7CF5C0" },
  { name: "Ink by Kraken", slug: "ink-by-kraken-airdrop-guide-2026", category: "Layer 2", cost: "Low", difficulty: "Medium", time: "45 min/week", raise: "Kraken-backed", why: "Kraken's Ethereum L2 — no token yet. Bridge ETH, trade on Velodrome, supply on Aave. Low user count vs. Base or Optimism — Indonesian early farmers have a strong upside position.", country: "Fully accessible from Indonesia", color: "#8b5cf6" },
];

const steps = [
  { n: 1, title: "Download MetaMask", desc: "Go to metamask.io — download the extension (Chrome/Brave) or mobile app. Works in Indonesia with no restrictions. Brave browser is popular in Indonesia and integrates smoothly." },
  { n: 2, title: "Create a dedicated airdrop wallet", desc: "Create a new wallet for airdrop farming only. Write your 12-word seed phrase on paper. Never store it digitally. Never share it with anyone, including customer support." },
  { n: 3, title: "Buy ETH via Indodax or Tokocrypto", desc: "Buy ETH on Indodax or Tokocrypto using bank transfer or GoPay/OVO. Buy Rp 75,000–200,000 worth, then withdraw to your MetaMask wallet. This covers gas fees for months of DeFi farming." },
  { n: 4, title: "Download Phantom for Solana", desc: "For Solana airdrops, download Phantom from phantom.com. Buy SOL on Indodax and withdraw to Phantom. Works in Indonesia with no restrictions." },
  { n: 5, title: "Start with free airdrops", desc: "Indonesian P2E veterans already know how wallets work. Apply that knowledge to free testnet airdrops and Galxe quests — same skills, often larger payouts than P2E games." },
];

export default function IndonesiaAirdrops2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />
      <style>{`
        .idn*{box-sizing:border-box}.idn{background:#060A12;min-height:100vh;color:#fff;font-family:var(--font-space),'Space Grotesk',system-ui,sans-serif}
        .idn-wrap{max-width:800px;margin:0 auto;padding:48px 20px 80px}
        .idn-bc{font-size:13px;color:rgba(255,255,255,0.25);margin-bottom:32px;display:flex;align-items:center;gap:8px;flex-wrap:wrap}
        .idn-bc a{color:rgba(255,255,255,0.25);text-decoration:none}
        .idn-badge{font-size:11px;font-weight:600;letter-spacing:0.08em;padding:3px 10px;border-radius:99px;text-transform:uppercase;margin-right:8px}
        .idn-h1{font-size:clamp(24px,5vw,36px);font-weight:700;line-height:1.2;margin:16px 0;color:#fff}
        .idn-h1 span{color:#ef4444}
        .idn-sub{font-size:16px;color:rgba(255,255,255,0.45);line-height:1.7;margin-bottom:12px}
        .idn-meta{font-size:13px;color:rgba(255,255,255,0.25);margin-bottom:16px}
        .idn-meta span{color:rgba(255,255,255,0.45)}
        .idn-byline{display:flex;align-items:center;gap:10px;margin-bottom:40px;padding:12px 16px;background:rgba(239,68,68,0.04);border:1px solid rgba(239,68,68,0.1);border-radius:10px}
        .idn-byline-avatar{width:32px;height:32px;border-radius:50%;background:rgba(239,68,68,0.15);border:1px solid rgba(239,68,68,0.25);display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0}
        .idn-byline-name{font-size:13px;font-weight:700;color:#fff}
        .idn-byline-sub{font-size:11px;color:rgba(255,255,255,0.35)}
        .idn-byline-sub a{color:#ef4444;text-decoration:none}
        .idn-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.06);border-radius:14px;overflow:hidden;margin-bottom:48px}
        .idn-stat{background:#0D1221;padding:18px 16px;text-align:center}
        .idn-stat-val{font-size:22px;font-weight:700;color:#ef4444;margin-bottom:4px}
        .idn-stat-lbl{font-size:11px;color:rgba(255,255,255,0.25);text-transform:uppercase;letter-spacing:0.06em;font-weight:600}
        .idn-section{margin-bottom:52px}
        .idn-h2{font-size:22px;font-weight:700;color:#fff;margin-bottom:12px}
        .idn-p{font-size:15px;color:rgba(255,255,255,0.45);line-height:1.8;margin-bottom:16px}
        .idn-p strong{color:#fff}
        .idn-steps{display:flex;flex-direction:column;gap:10px}
        .idn-step{background:#0D1221;border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:16px 18px;display:flex;gap:14px;align-items:flex-start}
        .idn-step-num{width:28px;height:28px;border-radius:8px;background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.2);color:#ef4444;font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0}
        .idn-step-title{font-size:14px;font-weight:700;color:#fff;margin-bottom:4px}
        .idn-step-desc{font-size:13px;color:rgba(255,255,255,0.4);line-height:1.65}
        .idn-cards{display:flex;flex-direction:column;gap:12px}
        .idn-card{background:#0D1221;border:1px solid rgba(255,255,255,0.06);border-radius:14px;padding:20px;text-decoration:none;color:inherit;display:block;transition:border-color 0.15s}
        .idn-card:hover{border-color:rgba(239,68,68,0.2)}
        .idn-card-name{font-size:16px;font-weight:700;color:#fff;margin-bottom:6px}
        .idn-card-tags{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px}
        .idn-tag{font-size:10px;font-weight:600;padding:2px 8px;border-radius:99px;border:1px solid rgba(255,255,255,0.08);background:rgba(255,255,255,0.04)}
        .idn-card-why{font-size:13px;color:rgba(255,255,255,0.45);line-height:1.7;margin-bottom:10px}
        .idn-card-footer{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px}
        .idn-country{font-size:11px;color:#ef4444;font-weight:600}
        .idn-arrow{font-size:12px;font-weight:700;color:#ef4444}
        .idn-faqs{display:flex;flex-direction:column;gap:10px}
        .idn-faq{background:#0D1221;border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:18px 20px}
        .idn-faq h3{font-weight:600;color:#fff;font-size:14px;margin-bottom:8px}
        .idn-faq p{color:rgba(255,255,255,0.45);font-size:13px;margin:0;line-height:1.7}
        .idn-related{display:flex;flex-direction:column;gap:8px}
        .idn-related-link{display:flex;align-items:center;justify-content:space-between;background:#0D1221;border:1px solid rgba(255,255,255,0.06);border-radius:10px;padding:13px 16px;text-decoration:none;color:rgba(255,255,255,0.6);font-size:13px;font-weight:500}
        .idn-related-link span:last-child{color:#ef4444;font-size:12px}
        .idn-cta-box{background:rgba(239,68,68,0.05);border:1px solid rgba(239,68,68,0.15);border-radius:16px;padding:40px 28px;text-align:center}
        .idn-cta-box h2{font-size:22px;font-weight:700;color:#fff;margin-bottom:10px}
        .idn-cta-box p{font-size:14px;color:rgba(255,255,255,0.45);line-height:1.7;max-width:420px;margin:0 auto 24px}
        .idn-cta-btn{display:inline-flex;align-items:center;gap:6px;background:#ef4444;color:#fff;font-weight:700;font-size:14px;padding:12px 28px;border-radius:99px;text-decoration:none}
        
        .idn-answer-box{background:rgba(239,68,68,0.06);border:1px solid rgba(239,68,68,0.18);border-radius:14px;padding:20px 22px;margin-bottom:40px}
        .idn-answer-label{font-size:11px;font-weight:700;color:#ef4444;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:10px}
        .idn-answer-box p{font-size:14px;color:rgba(255,255,255,0.7);line-height:1.75;margin:0}
        .idn-note{font-size:11px;color:rgba(255,255,255,0.18);margin-top:16px}
        
        .id2-answer-box{background:rgba(239,68,68,0.06);border:1px solid rgba(239,68,68,0.18);border-radius:14px;padding:20px 22px;margin-bottom:40px}
        .id2-answer-label{font-size:11px;font-weight:700;color:#ef4444;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:10px}
        .id2-answer-box p{font-size:14px;color:rgba(255,255,255,0.7);line-height:1.75;margin:0}
        @media(max-width:600px){.idn-wrap{padding:32px 16px 64px}.idn-stat-val{font-size:18px}.idn-cta-box{padding:28px 16px}}
      `}</style>
      <main className="idn">
        <div className="idn-wrap">
          <nav className="idn-bc">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/learn">Learn</Link><span>/</span>
            <span style={{ color: "rgba(255,255,255,0.45)" }}>Crypto Airdrops Indonesia 2026</span>
          </nav>
          <div>
            <span className="idn-badge" style={{ background: "rgba(239,68,68,0.1)", color: "#ef4444", border: "1px solid rgba(239,68,68,0.18)" }}>Indonesia</span>
            <span className="idn-badge" style={{ background: "rgba(96,165,250,0.1)", color: "#60a5fa", border: "1px solid rgba(96,165,250,0.18)" }}>Free Guide</span>
            <h1 className="idn-h1">Best Crypto Airdrops for Indonesians in 2026 <span>— Free, No Investment</span></h1>
            <p className="idn-sub">Indonesia ranks #5 globally in crypto adoption. Here are the best airdrops fully accessible from Indonesia in 2026 — free to join, no KYC required, fund via Indodax or GoPay.</p>
            <p className="idn-meta">By <span>3alamiy Team</span> · June 12, 2026 · 7 min read</p>
            <div className="idn-byline">
              <div className="idn-byline-avatar">W</div>
              <div>
                <div className="idn-byline-name">3alamiy Team</div>
                <div className="idn-byline-sub">Web3 Airdrop Research · <a href="https://www.3alamiyweb3.com">3alamiyweb3.com</a></div>
              </div>
            </div>
          </div>
          </div>
          <div className="idn-answer-box">
            <div className="idn-answer-label">Quick Answer</div>
            <p>The best crypto airdrops in Indonesia 2026 are Hyperliquid, MetaMask, Phantom, Polymarket, Soneium, and Ink by Kraken. All are free, accessible from Indonesia without a VPN, and can be funded via Indodax or Tokocrypto. Indonesia has 270M+ population and is a top-10 global crypto market.</p>
          </div>
          <div className="idn-stats">
            {[{ val: "#5", lbl: "Global Crypto Adoption" }, { val: "275M+", lbl: "Population" }, { val: "Free", lbl: "All Airdrops Below" }].map(s => (
              <div key={s.lbl} className="idn-stat"><div className="idn-stat-val">{s.val}</div><div className="idn-stat-lbl">{s.lbl}</div></div>
            ))}
          </div>
          <section className="idn-section">
            <h2 className="idn-h2">Why Indonesia is a Top Crypto Airdrop Market</h2>
            <p className="idn-p">Indonesia ranks <strong>#5 globally in the Chainalysis Crypto Adoption Index</strong>. With Southeast Asia's largest economy, 275 million people, and one of the world's highest P2E gaming participation rates, Indonesia has a massive, experienced crypto user base.</p>
            <p className="idn-p">Indonesian users pioneered play-to-earn gaming alongside the Philippines — <strong>millions already have self-custody wallets</strong> and understand on-chain transactions. That history is a direct advantage: many airdrop snapshots reward wallets with existing DeFi activity.</p>
            <p className="idn-p">Most DeFi protocols are <strong>fully accessible from Indonesia</strong> without a VPN. Crypto is legal as a commodity (aset kripto) under Bappebti/OJK regulation. All airdrops below have been verified to work from Indonesian IP addresses.</p>
          </section>
          <section className="idn-section">
            <h2 className="idn-h2">How to Get Started in Indonesia — 5 Steps</h2>
            <div className="idn-steps">
              {steps.map(s => (
                <div key={s.n} className="idn-step">
                  <div className="idn-step-num">{s.n}</div>
                  <div><div className="idn-step-title">{s.title}</div><div className="idn-step-desc">{s.desc}</div></div>
                </div>
              ))}
            </div>
          </section>
          <section className="idn-section">
            <h2 className="idn-h2">Best Airdrops Accessible from Indonesia — June 2026</h2>
            <p className="idn-p">All verified to work in Indonesia. Start with the free ones first.</p>
            <div className="idn-cards">
              {airdrops.map(a => (
                <Link key={a.slug} href={`/learn/${a.slug}`} className="idn-card">
                  <div className="idn-card-name">{a.name}</div>
                  <div className="idn-card-tags">
                    <span className="idn-tag" style={{ color: "#ef4444", background: "rgba(239,68,68,0.08)", borderColor: "rgba(239,68,68,0.18)" }}>{a.cost}</span>
                    <span className="idn-tag" style={{ color: a.difficulty === "Easy" ? "#7CF5C0" : "#f59e0b" }}>{a.difficulty}</span>
                    <span className="idn-tag">{a.category}</span>
                    <span className="idn-tag">{a.time}</span>
                    <span className="idn-tag" style={{ color: "rgba(255,255,255,0.4)" }}>{a.raise}</span>
                  </div>
                  <p className="idn-card-why">{a.why}</p>
                  <div className="idn-card-footer">
                    <span className="idn-country">{a.country}</span>
                    <span className="idn-arrow">View Guide →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
          <section className="idn-section">
            <h2 className="idn-h2">Tips for Indonesian Airdrop Farmers</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { tip: "Use GoPay or OVO to fund ETH purchases", desc: "Indodax, Tokocrypto, and Pintu all support GoPay and OVO deposits. Buy Rp 75,000–200,000 worth of ETH, withdraw to MetaMask — enough for months of DeFi gas fees." },
                { tip: "Your P2E experience is a head start", desc: "If you played Axie Infinity, My Neighbor Alice, or any play-to-earn game, you already have the wallet and on-chain skills needed. DeFi airdrop farming pays more consistently." },
                { tip: "Crypto tax in Indonesia is low", desc: "Indonesia charges only 0.1% income tax and 0.11% VAT on crypto transactions — one of the lowest rates in Asia. Keep transaction records for your SPT annual tax return." },
                { tip: "Join Indonesian Web3 communities", desc: "Indonesian crypto communities on Telegram and Discord share early airdrop opportunities. Search for Indonesian communities on Discord servers of major DeFi protocols." },
                { tip: "Consistency beats one-time investments", desc: "10 minutes per day across 5 free airdrops beats one large investment. Indonesia's top farmers spend Rp 0 upfront and earn from protocol activity alone." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#0D1221", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "14px 18px" }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#ef4444", marginBottom: 6 }}>+ {item.tip}</p>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", margin: 0, lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="idn-section">
            <h2 className="idn-h2">Frequently Asked Questions</h2>
            <div className="idn-faqs">
              {faqJsonLd.mainEntity.map((faq, i) => (
                <div key={i} className="idn-faq"><h3>{faq.name}</h3><p>{faq.acceptedAnswer.text}</p></div>
              ))}
            </div>
          </section>
          <section className="idn-section">
            <h2 className="idn-h2" style={{ marginBottom: 16 }}>Related Guides</h2>
            <div className="idn-related">
              {[
                { slug: "metamask-airdrop-guide-2026", title: "MetaMask Airdrop Guide 2026" },
                { slug: "hyperliquid-guide", title: "Hyperliquid Airdrop — HYPE Season 2" },
                { slug: "best-crypto-airdrops-philippines-2026", title: "Best Crypto Airdrops for Filipinos 2026" },
                { slug: "best-crypto-airdrops-india-2026", title: "Best Crypto Airdrops for Indians 2026" },
                { slug: "how-to-get-crypto-airdrops-2026", title: "How to Get Crypto Airdrops in 2026 — Complete Guide" },
              ].map(a => (
                <Link key={a.slug} href={`/learn/${a.slug}`} className="idn-related-link">
                  <span>{a.title}</span><span>→</span>
                </Link>
              ))}
            </div>
          </section>
          <div className="idn-cta-box">
            <h2>Start Farming Airdrops Today</h2>
            <p>Browse 130+ verified airdrops on 3alamiy Web3 — all with full step-by-step guides. Updated daily. Always free.</p>
            <Link href="/airdrops" className="idn-cta-btn">Browse All Airdrops →</Link>
            <p className="idn-note">Last updated: June 12, 2026 · Reviewed weekly</p>
          </div>
        </div>
      </main>
    </>
  );
}
