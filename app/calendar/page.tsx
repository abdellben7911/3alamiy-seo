import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

async function getAllAirdrops() {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/airdrops?select=*&order=created_at.desc`, {
    headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
    next: { revalidate: 86400 },
  });
  if (!res.ok) return [];
  return res.json();
}

export const metadata: Metadata = {
  title: "Crypto Airdrop Calendar 2026 — Active & Upcoming Airdrops | 3alamiy Web3",
  description: "Track all active and upcoming crypto airdrops in 2026. Filter by category, difficulty, and cost. Never miss a drop — updated daily.",
  alternates: { canonical: "https://www.3alamiyweb3.com/calendar" },
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

const diffColor: Record<string, string> = { Easy: "#7CF5C0", Medium: "#f59e0b", Hard: "#f87171" };
const costColor: Record<string, string> = { Free: "#7CF5C0", Low: "#f59e0b", Paid: "#f87171" };

export default async function CalendarPage() {
  const airdrops = await getAllAirdrops();
  const active = airdrops.filter((a: any) => a.status === "Active");
  const ended  = airdrops.filter((a: any) => a.status === "Ended");

  const categories   = [...new Set(active.map((a: any) => a.category).filter(Boolean))] as string[];
  const newThisWeek  = active.slice(0, 8);
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

      <style>{`
        .cal * { box-sizing: border-box; }
        .cal {
          background: #060A12;
          min-height: 100vh;
          color: #fff;
          font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif;
        }
        .cal-wrap { max-width: 1100px; margin: 0 auto; padding: 48px 20px 80px; }

        /* Breadcrumb */
        .cal-bc { font-size: 13px; color: rgba(255,255,255,0.25); margin-bottom: 32px; display: flex; align-items: center; gap: 8px; }
        .cal-bc a { color: rgba(255,255,255,0.25); text-decoration: none; }

        /* Header */
        .cal-header { margin-bottom: 40px; }
        .cal-badge {
          display: inline-flex; align-items: center;
          font-size: 11px; font-weight: 600; letter-spacing: 0.08em;
          background: rgba(124,245,192,0.1); color: #7CF5C0;
          border: 1px solid rgba(124,245,192,0.18);
          padding: 3px 10px; border-radius: 99px; text-transform: uppercase;
          margin-bottom: 14px; margin-right: 10px;
        }
        .cal-date { font-size: 13px; color: rgba(255,255,255,0.25); }
        .cal-h1 {
          font-size: clamp(24px, 5vw, 38px); font-weight: 700;
          line-height: 1.15; margin: 0 0 14px; color: #fff;
        }
        .cal-h1 span { color: #7CF5C0; }
        .cal-sub { font-size: 15px; color: rgba(255,255,255,0.45); line-height: 1.7; max-width: 580px; margin: 0; }

        /* Stats strip */
        .cal-stats {
          display: grid; grid-template-columns: repeat(4, 1fr);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px; overflow: hidden;
          margin-bottom: 48px; gap: 1px;
          background: rgba(255,255,255,0.06);
        }
        .cal-stat {
          background: #0D1221; padding: 18px 12px; text-align: center;
        }
        .cal-stat-val { font-size: 24px; font-weight: 700; color: #7CF5C0; margin-bottom: 4px; }
        .cal-stat-lbl { font-size: 10px; color: rgba(255,255,255,0.25); text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600; }

        /* Section title */
        .cal-section { margin-bottom: 48px; }
        .cal-section-head {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 16px;
        }
        .cal-section-title {
          font-size: 18px; font-weight: 700; color: #fff; margin: 0;
          display: flex; align-items: center; gap: 8px;
        }
        .cal-live-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #7CF5C0; box-shadow: 0 0 8px rgba(124,245,192,0.6);
          display: inline-block;
          animation: livepulse 2s ease-in-out infinite;
        }
        @keyframes livepulse { 0%,100%{opacity:1} 50%{opacity:.3} }
        .cal-view-all { font-size: 12px; color: #7CF5C0; text-decoration: none; font-weight: 600; }

        /* Airdrop cards grid */
        .cal-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
        .cal-card {
          background: #0D1221; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px; padding: 14px; text-decoration: none;
          display: flex; flex-direction: column; gap: 10px;
          transition: border-color 0.15s;
        }
        .cal-card:hover { border-color: rgba(124,245,192,0.2); }
        .cal-card-top { display: flex; align-items: center; gap: 10px; }
        .cal-card-logo {
          width: 36px; height: 36px; border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.07); flex-shrink: 0; object-fit: cover;
        }
        .cal-card-logo-fb {
          width: 36px; height: 36px; border-radius: 10px;
          background: rgba(255,255,255,0.05); flex-shrink: 0;
        }
        .cal-card-name { font-size: 13px; font-weight: 700; color: #fff; margin-bottom: 2px; }
        .cal-card-chain { font-size: 10px; color: rgba(255,255,255,0.3); }
        .cal-card-tags { display: flex; gap: 5px; flex-wrap: wrap; }
        .cal-tag {
          font-size: 10px; font-weight: 600; padding: 2px 7px;
          border-radius: 99px; border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.04);
        }

        /* Category rows */
        .cal-cat-section { margin-bottom: 28px; }
        .cal-cat-head { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; }
        .cal-cat-badge {
          font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 99px;
        }
        .cal-cat-count { font-size: 12px; color: rgba(255,255,255,0.25); }
        .cal-cat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
        .cal-cat-card {
          background: #0D1221; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 10px; padding: 12px 14px;
          display: flex; align-items: center; gap: 10px;
          text-decoration: none; transition: border-color 0.15s;
        }
        .cal-cat-card:hover { border-color: rgba(255,255,255,0.12); }
        .cal-cat-logo { width: 28px; height: 28px; border-radius: 7px; border: 1px solid rgba(255,255,255,0.07); flex-shrink: 0; object-fit: cover; }
        .cal-cat-logo-fb { width: 28px; height: 28px; border-radius: 7px; background: rgba(255,255,255,0.05); flex-shrink: 0; }
        .cal-cat-name { font-size: 12px; font-weight: 600; color: #fff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; flex: 1; min-width: 0; }
        .cal-cat-meta { display: flex; gap: 4px; margin-top: 2px; }
        .cal-cat-arrow { font-size: 10px; color: #7CF5C0; font-weight: 600; flex-shrink: 0; }

        /* Quick filters */
        .cal-filters { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 48px; }
        .cal-filter {
          background: #0D1221; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px; padding: 18px 20px;
          display: flex; align-items: center; justify-content: space-between;
          text-decoration: none; transition: border-color 0.15s;
        }
        .cal-filter:hover { border-color: rgba(124,245,192,0.2); }
        .cal-filter-title { font-size: 14px; font-weight: 700; margin-bottom: 3px; }
        .cal-filter-sub { font-size: 11px; color: rgba(255,255,255,0.35); }
        .cal-filter-arrow { font-size: 18px; }

        /* Ended */
        .cal-ended-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 8px; }
        .cal-ended-card {
          background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04);
          border-radius: 10px; padding: 10px 14px;
          display: flex; align-items: center; gap: 8px;
          text-decoration: none; opacity: 0.5;
        }
        .cal-ended-logo { width: 22px; height: 22px; border-radius: 5px; flex-shrink: 0; object-fit: cover; }
        .cal-ended-name { font-size: 12px; color: rgba(255,255,255,0.4); font-weight: 500; flex: 1; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .cal-ended-badge { font-size: 10px; color: #f87171; font-weight: 600; flex-shrink: 0; }

        /* CTA */
        .cal-cta {
          background: rgba(124,245,192,0.06); border: 1px solid rgba(124,245,192,0.18);
          border-radius: 16px; padding: 40px 28px; text-align: center;
        }
        .cal-cta-title { font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 10px; }
        .cal-cta-sub { font-size: 14px; color: rgba(255,255,255,0.45); line-height: 1.7; max-width: 420px; margin: 0 auto 24px; }
        .cal-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .cal-btn-green {
          display: inline-flex; align-items: center; gap: 8px;
          background: #7CF5C0; color: #060A12;
          font-weight: 700; font-size: 14px; padding: 12px 24px;
          border-radius: 99px; text-decoration: none;
        }
        .cal-btn-ghost {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.7);
          font-weight: 600; font-size: 14px; padding: 12px 24px;
          border-radius: 99px; text-decoration: none;
          border: 1px solid rgba(255,255,255,0.1);
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .cal-wrap { padding: 32px 16px 64px; }
          .cal-stats { grid-template-columns: repeat(2, 1fr); }
          .cal-grid { grid-template-columns: repeat(2, 1fr); }
          .cal-cat-grid { grid-template-columns: repeat(2, 1fr); }
          .cal-filters { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .cal-grid { grid-template-columns: 1fr 1fr; gap: 8px; }
          .cal-cat-grid { grid-template-columns: 1fr 1fr; gap: 6px; }
          .cal-stat-val { font-size: 20px; }
          .cal-cta { padding: 28px 16px; }
          .cal-cta-btns { flex-direction: column; align-items: center; }
          .cal-btn-green, .cal-btn-ghost { width: 100%; justify-content: center; }
        }
      `}</style>

      <main className="cal">
        <div className="cal-wrap">

          {/* Breadcrumb */}
          <nav className="cal-bc">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: "rgba(255,255,255,0.45)" }}>Airdrop Calendar</span>
          </nav>

          {/* Header */}
          <div className="cal-header">
            <div>
              <span className="cal-badge">Updated Daily</span>
              <span className="cal-date">{new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            </div>
            <h1 className="cal-h1">Crypto Airdrop Calendar <span>2026</span></h1>
            <p className="cal-sub">All active and upcoming crypto airdrops in one place — with step-by-step guides, difficulty ratings, and scam warnings. Never miss a drop.</p>
          </div>

          {/* Stats */}
          <div className="cal-stats">
            {[
              { label: "Active Airdrops", value: active.length },
              { label: "Free to Join", value: freeAirdrops.length },
              { label: "Easy Difficulty", value: easyAirdrops.length },
              { label: "Categories", value: categories.length },
            ].map((s) => (
              <div key={s.label} className="cal-stat">
                <div className="cal-stat-val">{s.value}</div>
                <div className="cal-stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Recently Added */}
          <section className="cal-section">
            <div className="cal-section-head">
              <h2 className="cal-section-title">
                <span className="cal-live-dot" /> Recently Added
              </h2>
              <Link href="/airdrops" className="cal-view-all">View all →</Link>
            </div>
            <div className="cal-grid">
              {newThisWeek.map((a: any) => {
                const cat = categoryColors[a.category] || { color: "#7CF5C0", bg: "rgba(124,245,192,0.06)", border: "rgba(124,245,192,0.12)" };
                return (
                  <Link key={a.slug} href={`/airdrops/${a.slug}`} className="cal-card">
                    <div className="cal-card-top">
                      {a.logo
                        ? <Image src={a.logo} alt={a.name} width={36} height={36} className="cal-card-logo" />
                        : <div className="cal-card-logo-fb" />
                      }
                      <div>
                        <div className="cal-card-name">{a.name}</div>
                        <div className="cal-card-chain">{a.blockchain}</div>
                      </div>
                    </div>
                    <div className="cal-card-tags">
                      <span className="cal-tag" style={{ color: cat.color, background: cat.bg, borderColor: cat.border }}>{a.category}</span>
                      <span className="cal-tag" style={{ color: diffColor[a.difficulty] || "#fff" }}>{a.difficulty}</span>
                      <span className="cal-tag" style={{ color: costColor[a.cost] || "#fff" }}>{a.cost}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* By Category */}
          <section className="cal-section">
            <h2 className="cal-section-title" style={{ marginBottom: 24 }}>Browse by Category</h2>
            {categories.map((cat) => {
              const catAirdrops = active.filter((a: any) => a.category === cat);
              const style = categoryColors[cat] || { color: "#7CF5C0", bg: "rgba(124,245,192,0.06)", border: "rgba(124,245,192,0.12)" };
              return (
                <div key={cat} className="cal-cat-section">
                  <div className="cal-cat-head">
                    <span className="cal-cat-badge" style={{ color: style.color, background: style.bg, border: `1px solid ${style.border}` }}>{cat}</span>
                    <span className="cal-cat-count">{catAirdrops.length} active</span>
                  </div>
                  <div className="cal-cat-grid">
                    {catAirdrops.map((a: any) => (
                      <Link key={a.slug} href={`/airdrops/${a.slug}`} className="cal-cat-card">
                        {a.logo
                          ? <Image src={a.logo} alt={a.name} width={28} height={28} className="cal-cat-logo" />
                          : <div className="cal-cat-logo-fb" />
                        }
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div className="cal-cat-name">{a.name}</div>
                          <div className="cal-cat-meta">
                            <span style={{ fontSize: 10, color: diffColor[a.difficulty] || "#fff", fontWeight: 600 }}>{a.difficulty}</span>
                            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.2)" }}>·</span>
                            <span style={{ fontSize: 10, color: costColor[a.cost] || "#fff", fontWeight: 600 }}>{a.cost}</span>
                          </div>
                        </div>
                        <span className="cal-cat-arrow">→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </section>

          {/* Quick Filters */}
          <section className="cal-section">
            <h2 className="cal-section-title" style={{ marginBottom: 16 }}>Quick Filters</h2>
            <div className="cal-filters">
              {[
                { label: "Free Airdrops", desc: `${freeAirdrops.length} active — no investment needed`, href: "/airdrops?cost=Free", color: "#7CF5C0" },
                { label: "Easy Difficulty", desc: `${easyAirdrops.length} active — beginner friendly`, href: "/airdrops?difficulty=Easy", color: "#7CF5C0" },
                { label: "All Active Airdrops", desc: `${active.length} total — updated daily`, href: "/airdrops", color: "#c084fc" },
              ].map((item) => (
                <Link key={item.label} href={item.href} className="cal-filter">
                  <div>
                    <div className="cal-filter-title" style={{ color: item.color }}>{item.label}</div>
                    <div className="cal-filter-sub">{item.desc}</div>
                  </div>
                  <span className="cal-filter-arrow" style={{ color: item.color }}>→</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Ended */}
          {ended.length > 0 && (
            <section className="cal-section">
              <h2 className="cal-section-title" style={{ color: "rgba(255,255,255,0.35)", marginBottom: 14 }}>Recently Ended</h2>
              <div className="cal-ended-grid">
                {ended.slice(0, 6).map((a: any) => (
                  <Link key={a.slug} href={`/airdrops/${a.slug}`} className="cal-ended-card">
                    {a.logo && <Image src={a.logo} alt={a.name} width={22} height={22} className="cal-ended-logo" />}
                    <span className="cal-ended-name">{a.name}</span>
                    <span className="cal-ended-badge">Ended</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <div className="cal-cta">
            <h2 className="cal-cta-title">Never Miss a Drop</h2>
            <p className="cal-cta-sub">Join our Telegram for daily airdrop alerts — new opportunities posted every day before they go viral.</p>
            <div className="cal-cta-btns">
              <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" className="cal-btn-green">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                Join Telegram
              </a>
              <Link href="/airdrops" className="cal-btn-ghost">Browse All Airdrops →</Link>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
