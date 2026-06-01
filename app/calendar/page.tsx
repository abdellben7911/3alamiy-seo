import { Metadata } from "next";
import Link from "next/link";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

async function getAllAirdrops() {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/airdrops?select=*&order=created_at.desc`, {
    headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
    next: { revalidate: 3600 },
  });
  if (!res.ok) return [];
  return res.json();
}

export const metadata: Metadata = {
  title: "Crypto Airdrop Calendar 2026 — Active & Upcoming Airdrops | 3alamiy Web3",
  description:
    "Track all active and upcoming crypto airdrops in 2026. Filter by category, difficulty, and cost. Never miss a drop — updated daily.",
  alternates: {
    canonical: "https://www.3alamiyweb3.com/calendar",
  },
  openGraph: {
    title: "Crypto Airdrop Calendar 2026 — Active & Upcoming Airdrops",
    description: "Track all active and upcoming crypto airdrops in 2026. Filter by category, difficulty, and cost. Never miss a drop.",
    url: "https://www.3alamiyweb3.com/calendar",
    siteName: "3alamiy Web3",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Airdrop Calendar 2026",
    description: "Track all active and upcoming crypto airdrops in 2026. Never miss a drop.",
  },
};

const categoryColors: Record<string, { color: string; bg: string; border: string }> = {
  DeFi:           { color: "#7CF5C0", bg: "rgba(124,245,192,0.08)", border: "rgba(124,245,192,0.18)" },
  AI:             { color: "#c084fc", bg: "rgba(192,132,252,0.08)", border: "rgba(192,132,252,0.18)" },
  RWA:            { color: "#f59e0b", bg: "rgba(245,158,11,0.08)",  border: "rgba(245,158,11,0.18)" },
  Gaming:         { color: "#818cf8", bg: "rgba(129,140,248,0.08)", border: "rgba(129,140,248,0.18)" },
  DePIN:          { color: "#06b6d4", bg: "rgba(6,182,212,0.08)",   border: "rgba(6,182,212,0.18)" },
  SocialFi:       { color: "#60a5fa", bg: "rgba(96,165,250,0.08)",  border: "rgba(96,165,250,0.18)" },
  Infrastructure: { color: "#818cf8", bg: "rgba(129,140,248,0.08)", border: "rgba(129,140,248,0.18)" },
  Quest:          { color: "#f59e0b", bg: "rgba(245,158,11,0.08)",  border: "rgba(245,158,11,0.18)" },
  Browser:        { color: "#06b6d4", bg: "rgba(6,182,212,0.08)",   border: "rgba(6,182,212,0.18)" },
  Layer1:         { color: "#c084fc", bg: "rgba(192,132,252,0.08)", border: "rgba(192,132,252,0.18)" },
  Layer2:         { color: "#818cf8", bg: "rgba(129,140,248,0.08)", border: "rgba(129,140,248,0.18)" },
};

const diffColor: Record<string, string> = {
  Easy: "#7CF5C0",
  Medium: "#f59e0b",
  Hard: "#f87171",
};

const costColor: Record<string, string> = {
  Free: "#7CF5C0",
  Low: "#f59e0b",
  Paid: "#f87171",
};

export default async function CalendarPage() {
  const airdrops = await getAllAirdrops();
  const active = airdrops.filter((a: any) => a.status === "Active");
  const ended = airdrops.filter((a: any) => a.status === "Ended");

  const categories = [...new Set(active.map((a: any) => a.category).filter(Boolean))] as string[];
  const newThisWeek = active.slice(0, 8);
  const freeAirdrops = active.filter((a: any) => a.cost === "Free");
  const easyAirdrops = active.filter((a: any) => a.difficulty === "Easy");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Crypto Airdrop Calendar 2026",
    description: "Active and upcoming crypto airdrops tracked by 3alamiy Web3",
    url: "https://www.3alamiyweb3.com/calendar",
    numberOfItems: active.length,
    itemListElement: active.slice(0, 10).map((a: any, i: number) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${a.name} Airdrop`,
      url: `https://www.3alamiyweb3.com/airdrops/${a.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main style={{ background: "#060A12", minHeight: "100vh", color: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 20px 80px" }}>

          {/* Breadcrumb */}
          <nav style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", marginBottom: 32, display: "flex", alignItems: "center", gap: 8 }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span style={{ color: "rgba(255,255,255,0.45)" }}>Airdrop Calendar</span>
          </nav>

          {/* Header */}
          <div style={{ marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <span style={{
                fontSize: 11, fontWeight: 600, letterSpacing: "0.08em",
                background: "rgba(124,245,192,0.1)", color: "#7CF5C0",
                border: "1px solid rgba(124,245,192,0.18)",
                padding: "3px 10px", borderRadius: 99, textTransform: "uppercase"
              }}>Updated Daily</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.25)" }}>
                {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </span>
            </div>
            <h1 style={{ fontFamily: "var(--font-space)", fontSize: "clamp(26px, 5vw, 40px)", fontWeight: 700, lineHeight: 1.15, marginBottom: 14, color: "#fff" }}>
              Crypto Airdrop Calendar{" "}
              <span style={{ color: "#7CF5C0" }}>2026</span>
            </h1>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: 600, margin: 0 }}>
              All active and upcoming crypto airdrops in one place — with step-by-step guides, difficulty ratings, and scam warnings. Never miss a drop.
            </p>
          </div>

          {/* Stats strip */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1,
            background: "rgba(255,255,255,0.06)", borderRadius: 14, overflow: "hidden",
            marginBottom: 48, border: "1px solid rgba(255,255,255,0.06)"
          }}>
            {[
              { label: "Active Airdrops", value: active.length, color: "#7CF5C0" },
              { label: "Free to Join", value: freeAirdrops.length, color: "#7CF5C0" },
              { label: "Easy Difficulty", value: easyAirdrops.length, color: "#7CF5C0" },
              { label: "Categories", value: categories.length, color: "#c084fc" },
            ].map((s) => (
              <div key={s.label} style={{ background: "#0D1221", padding: "20px 16px", textAlign: "center" }}>
                <div style={{ fontSize: 26, fontWeight: 700, color: s.color, fontFamily: "var(--font-space)", marginBottom: 4 }}>{s.value}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* New This Week */}
          <section style={{ marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#7CF5C0", boxShadow: "0 0 8px rgba(124,245,192,0.6)", display: "inline-block" }} />
                <h2 style={{ fontFamily: "var(--font-space)", fontSize: 20, fontWeight: 700, color: "#fff", margin: 0 }}>Recently Added</h2>
              </div>
              <Link href="/airdrops" style={{ fontSize: 12, color: "#7CF5C0", textDecoration: "none", fontWeight: 600 }}>View all →</Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12 }}>
              {newThisWeek.map((a: any) => {
                const cat = categoryColors[a.category] || { color: "#7CF5C0", bg: "rgba(124,245,192,0.06)", border: "rgba(124,245,192,0.12)" };
                return (
                  <Link key={a.slug} href={`/airdrops/${a.slug}`} style={{ textDecoration: "none" }}>
                    <div style={{
                      background: "#0D1221", border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 14, padding: "16px", transition: "border-color 0.15s",
                      display: "flex", flexDirection: "column", gap: 12, height: "100%"
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        {a.logo
                          ? <img src={a.logo} alt={a.name} width={36} height={36} style={{ borderRadius: 10, border: "1px solid rgba(255,255,255,0.07)", flexShrink: 0 }} />
                          : <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.05)", flexShrink: 0 }} />
                        }
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 2 }}>{a.name}</div>
                          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)" }}>{a.blockchain}</div>
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 99, background: cat.bg, color: cat.color, border: `1px solid ${cat.border}` }}>{a.category}</span>
                        <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 99, background: "rgba(255,255,255,0.04)", color: diffColor[a.difficulty] || "#fff", border: "1px solid rgba(255,255,255,0.06)" }}>{a.difficulty}</span>
                        <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 99, background: "rgba(255,255,255,0.04)", color: costColor[a.cost] || "#fff", border: "1px solid rgba(255,255,255,0.06)" }}>{a.cost}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* By Category */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontFamily: "var(--font-space)", fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 20 }}>Browse by Category</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {categories.map((cat) => {
                const catAirdrops = active.filter((a: any) => a.category === cat);
                const style = categoryColors[cat] || { color: "#7CF5C0", bg: "rgba(124,245,192,0.06)", border: "rgba(124,245,192,0.12)" };
                return (
                  <div key={cat}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: style.color, background: style.bg, border: `1px solid ${style.border}`, padding: "3px 10px", borderRadius: 99 }}>{cat}</span>
                        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>{catAirdrops.length} active</span>
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10 }}>
                      {catAirdrops.map((a: any) => (
                        <Link key={a.slug} href={`/airdrops/${a.slug}`} style={{ textDecoration: "none" }}>
                          <div style={{
                            background: "#0D1221", border: "1px solid rgba(255,255,255,0.06)",
                            borderRadius: 12, padding: "14px 16px",
                            display: "flex", alignItems: "center", gap: 10
                          }}>
                            {a.logo
                              ? <img src={a.logo} alt={a.name} width={32} height={32} style={{ borderRadius: 8, border: "1px solid rgba(255,255,255,0.07)", flexShrink: 0 }} />
                              : <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,0.05)", flexShrink: 0 }} />
                            }
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ fontSize: 13, fontWeight: 600, color: "#fff", marginBottom: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{a.name}</div>
                              <div style={{ display: "flex", gap: 6 }}>
                                <span style={{ fontSize: 10, color: diffColor[a.difficulty] || "#fff", fontWeight: 600 }}>{a.difficulty}</span>
                                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.2)" }}>·</span>
                                <span style={{ fontSize: 10, color: costColor[a.cost] || "#fff", fontWeight: 600 }}>{a.cost}</span>
                              </div>
                            </div>
                            <span style={{ fontSize: 10, color: "#7CF5C0", fontWeight: 600, flexShrink: 0 }}>→</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Quick filters */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={{ fontFamily: "var(--font-space)", fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 20 }}>Quick Filters</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
              {[
                { label: "Free Airdrops", desc: `${freeAirdrops.length} active — no investment needed`, href: "/airdrops?cost=Free", color: "#7CF5C0" },
                { label: "Easy Difficulty", desc: `${easyAirdrops.length} active — beginner friendly`, href: "/airdrops?difficulty=Easy", color: "#7CF5C0" },
                { label: "All Active Airdrops", desc: `${active.length} total — updated daily`, href: "/airdrops", color: "#c084fc" },
              ].map((item) => (
                <Link key={item.label} href={item.href} style={{ textDecoration: "none" }}>
                  <div style={{
                    background: "#0D1221", border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 14, padding: "20px", display: "flex", alignItems: "center", justifyContent: "space-between"
                  }}>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: item.color, marginBottom: 4 }}>{item.label}</div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>{item.desc}</div>
                    </div>
                    <span style={{ fontSize: 18, color: item.color }}>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Ended recently */}
          {ended.length > 0 && (
            <section style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-space)", fontSize: 18, fontWeight: 700, color: "rgba(255,255,255,0.35)", marginBottom: 14 }}>Recently Ended</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 8 }}>
                {ended.slice(0, 6).map((a: any) => (
                  <Link key={a.slug} href={`/airdrops/${a.slug}`} style={{ textDecoration: "none" }}>
                    <div style={{
                      background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)",
                      borderRadius: 10, padding: "12px 14px", display: "flex", alignItems: "center", gap: 8, opacity: 0.5
                    }}>
                      {a.logo && <img src={a.logo} alt={a.name} width={24} height={24} style={{ borderRadius: 6, flexShrink: 0 }} />}
                      <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>{a.name}</span>
                      <span style={{ fontSize: 10, color: "#f87171", marginLeft: "auto", fontWeight: 600 }}>Ended</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <div style={{
            background: "rgba(124,245,192,0.06)", border: "1px solid rgba(124,245,192,0.18)",
            borderRadius: 16, padding: "40px 32px", textAlign: "center"
          }}>
            <h2 style={{ fontFamily: "var(--font-space)", fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 12 }}>
              Never Miss a Drop
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, lineHeight: 1.7, maxWidth: 440, margin: "0 auto 24px" }}>
              Join our Telegram for daily airdrop alerts — new opportunities posted every day before they go viral.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#7CF5C0", color: "#060A12",
                fontWeight: 700, fontSize: 14, padding: "12px 24px", borderRadius: 99, textDecoration: "none"
              }}>
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                Join Telegram
              </a>
              <Link href="/airdrops" style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.7)",
                fontWeight: 600, fontSize: 14, padding: "12px 24px", borderRadius: 99, textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.1)"
              }}>
                Browse All Airdrops →
              </Link>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
