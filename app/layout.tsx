import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from './auth/AuthProvider';

export const metadata: Metadata = {
  title: '3alamiy Web3 - Crypto Airdrop Tracker 2026',
  description: 'Track and participate in the best crypto airdrops of 2026.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
