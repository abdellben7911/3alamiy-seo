import Link from "next/link";

const airdrops = [
  { slug: "arbitrum", name: "Arbitrum", roi: "High", status: "Active", category: "Layer 2" },
  { slug: "optimism", name: "Optimism", roi: "High", status: "Active", category: "Layer 2" },
  { slug: "zksync", name: "zkSync", roi: "Medium", status: "Active", category: "Layer 2" },
  { slug: "starknet", name: "Starknet", roi: "Medium", status: "Upcoming", category: "Layer 2" },
  { slug: "linea", name: "Linea", roi: "Low", status: "Active", category: "Layer 2" },
  { slug: "scroll", name: "Scroll", roi: "Medium", status: "Active", category: "Layer 2" },
];

export default function Home() {
  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 20px" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "8px" }}>
        🪂 3alamiy Web3 — Airdrop Tracker
      </h1>
      <p style={{ color: "#666", marginBottom: "40px" }}>
        Track the most profitable crypto airdrops and Web3 alpha
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
        {airdrops.map((a) => (
          <Link key={a.slug} href={`/airdrops/${a.slug}`} style={{ textDecoration: "none" }}>
            <div style={{ border: "1px solid #e5e7eb", borderRadius: "12px", padding: "24px", background: "#fff", cursor: "pointer" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#111" }}>{a.name}</h2>
                <span style={{ background: a.status === "Active" ? "#dcfce7" : "#fef9c3", color: a.status === "Active" ? "#166534" : "#854d0e", padding: "4px 10px", borderRadius: "20px", fontSize: "12px" }}>
                  {a.status}
                </span>
              </div>
              <p style={{ color: "#666", fontSize: "14px", marginBottom: "8px" }}>Category: {a.category}</p>
              <p style={{ color: "#666", fontSize: "14px" }}>ROI Potential: <strong style={{ color: a.roi === "High" ? "#16a34a" : a.roi === "Medium" ? "#d97706" : "#6b7280" }}>{a.roi}</strong></p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}