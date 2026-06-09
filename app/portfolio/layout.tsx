import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Portfolio — 3alamiy Web3',
  robots: { index: false, follow: false },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
