import type { Metadata } from 'next';
import ProPageClient from './ProPageClient';

export const metadata: Metadata = {
  title: 'Go Pro — 3alamiy Web3 | Unlock Every Airdrop',
  description: 'Get full access to every airdrop opportunity, wallet eligibility checks, and missed airdrop history. Pay with crypto — 3 USDC/month.',
  openGraph: {
    title: 'Go Pro — 3alamiy Web3',
    description: 'Unlock 125+ airdrops, multi-chain wallet checker, and missed airdrop history.',
  },
};

export default function ProPage() {
  return <ProPageClient />;
}
