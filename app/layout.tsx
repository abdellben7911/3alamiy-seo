import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3alamiy Web3 | Crypto Airdrop Tracker",
  description: "The ultimate dashboard for tracking the most profitable crypto airdrops and Web3 alpha.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}