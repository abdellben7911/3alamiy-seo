import type { Metadata } from 'next';
import { Syne, DM_Sans } from 'next/font/google';
import './globals.css';
import { AuthProvider } from './auth/AuthProvider';
import { Providers } from './providers';
import Header from './Header';
import Footer from './Footer';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm',
  display: 'swap',
});

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

const aiSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://seo.3alamiyweb3.online/#website",
      "name": "3alamiy Web3",
      "url": "https://seo.3alamiyweb3.online",
      "description": "The best free crypto airdrop tracker in 2026. Step-by-step guides for 67+ verified airdrops across Ethereum, Solana, Base, Arbitrum, Monad and more.",
      "inLanguage": "en",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://seo.3alamiyweb3.online/?search={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://seo.3alamiyweb3.online/#organization",
      "name": "3alamiy Web3",
      "url": "https://seo.3alamiyweb3.online",
      "logo": "https://seo.3alamiyweb3.online/icon.svg",
      "description": "Free crypto airdrop tracker with step-by-step guides, GM Station for daily on-chain activity across 16+ EVM chains, and daily Telegram alerts. 67+ verified airdrops updated daily.",
      "foundingDate": "2026",
      "areaServed": "Worldwide",
      "knowsAbout": [
        "Crypto Airdrops",
        "Web3",
        "DeFi",
        "Blockchain",
        "Ethereum Airdrops",
        "Solana Airdrops",
        "Base Airdrops",
        "Monad Airdrops",
        "NFTs",
        "Layer2",
        "Testnets",
        "On-chain Activity",
        "GM Station",
        "Airdrop Farming"
      ],
      "sameAs": [
        "https://3alamiyweb3.online",
        "https://x.com/3alamiyweb3",
        "https://t.me/web33alamiy"
      ]
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3151798675292980"
          crossOrigin="anonymous"
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0LJ1FPG63X" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0LJ1FPG63X');
        `}} />
        {/* AI Schema — WebSite + Organization for ChatGPT, Claude, Perplexity */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aiSchema) }}
        />
        {/* LLMs.txt reference for AI crawlers */}
        <link rel="alternate" type="text/markdown" href="https://seo.3alamiyweb3.online/llms.txt" />
      </head>
      <body>
        <Providers>
          <AuthProvider>
            <Header />
            {children}
            <Footer />
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
