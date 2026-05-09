import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from './auth/AuthProvider';
import Header from './Header';

export const metadata: Metadata = {
  title: '3alamiy Web3 - Crypto Airdrop Tracker 2026',
  description: 'Track and participate in the best crypto airdrops of 2026. Free step-by-step guides for Ethereum, Solana, Arbitrum and more.',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
    shortcut: '/icon.svg',
  },
  metadataBase: new URL('https://seo.3alamiyweb3.online'),
  alternates: {
    canonical: 'https://seo.3alamiyweb3.online',
    languages: {
      'en': 'https://seo.3alamiyweb3.online',
      'x-default': 'https://seo.3alamiyweb3.online',
    },
  },
  openGraph: {
    siteName: '3alamiy Web3',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@3alamiyweb3',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* hreflang for global English targeting */}
        <link rel="alternate" hrefLang="en" href="https://seo.3alamiyweb3.online" />
        <link rel="alternate" hrefLang="x-default" href="https://seo.3alamiyweb3.online" />
      </head>
      <body>
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
