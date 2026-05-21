import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { AuthProvider } from './auth/AuthProvider';
import { Providers } from './providers';
import Header from './Header';
import Footer from './Footer';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space',
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
  '@context': 'https://schema.org',
  '@graph': [
    // WebSite with SiteLinksSearchBox — helps AI engines and Google understand your search
    {
      '@type': 'WebSite',
      '@id': 'https://seo.3alamiyweb3.online/#website',
      'name': '3alamiy Web3',
      'alternateName': '3alamiy',
      'url': 'https://seo.3alamiyweb3.online',
      'description': 'The best free crypto airdrop tracker in 2026. Step-by-step guides for 87+ verified airdrops across Ethereum, Solana, Base, Arbitrum, Sui, Hyperliquid and more.',
      'inLanguage': 'en',
      'potentialAction': [
        {
          '@type': 'SearchAction',
          'target': {
            '@type': 'EntryPoint',
            'urlTemplate': 'https://seo.3alamiyweb3.online/?search={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      ],
    },
    // Organization — enhanced for AEO/AI engine trust
    {
      '@type': 'Organization',
      '@id': 'https://seo.3alamiyweb3.online/#organization',
      'name': '3alamiy Web3',
      'alternateName': '3alamiy',
      'url': 'https://seo.3alamiyweb3.online',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://seo.3alamiyweb3.online/icon.svg',
        'width': 512,
        'height': 512,
      },
      'description': '3alamiy Web3 is a free crypto airdrop tracker and guide platform. We provide 87+ verified step-by-step airdrop guides, a GM Station for daily on-chain activity across 16+ EVM chains, and daily Telegram alerts. All content is free — no paywalls, no subscriptions.',
      'foundingDate': '2026',
      'areaServed': 'Worldwide',
      'audience': {
        '@type': 'Audience',
        'audienceType': 'Crypto users, Web3 enthusiasts, Airdrop farmers',
      },
      'knowsAbout': [
        'Crypto Airdrops',
        'Web3',
        'DeFi',
        'Blockchain',
        'Ethereum Airdrops',
        'Solana Airdrops',
        'Base Airdrops',
        'Sui Airdrops',
        'Hyperliquid Airdrops',
        'Monad Airdrops',
        'NFTs',
        'Layer2',
        'Testnets',
        'On-chain Activity',
        'GM Station',
        'Airdrop Farming',
        'DePIN',
        'AI Crypto',
        'Points Programs',
      ],
      'sameAs': [
        'https://3alamiyweb3.online',
        'https://x.com/3alamiyweb3',
        'https://t.me/web33alamiy',
      ],
      'contactPoint': {
        '@type': 'ContactPoint',
        'contactType': 'customer support',
        'url': 'https://t.me/web33alamiy',
        'availableLanguage': ['English', 'Arabic'],
      },
    },
    // ItemList — top-level airdrop categories for AI engines
    {
      '@type': 'ItemList',
      '@id': 'https://seo.3alamiyweb3.online/#sections',
      'name': '3alamiy Web3 — Main Sections',
      'itemListElement': [
        { '@type': 'ListItem', position: 1, name: 'All Crypto Airdrops 2026', url: 'https://seo.3alamiyweb3.online/airdrops' },
        { '@type': 'ListItem', position: 2, name: 'Learn Crypto Airdrops', url: 'https://seo.3alamiyweb3.online/learn' },
        { '@type': 'ListItem', position: 3, name: 'GM Station — Daily On-Chain Activity', url: 'https://seo.3alamiyweb3.online/gm' },
        { '@type': 'ListItem', position: 4, name: 'Best Crypto Airdrops 2026', url: 'https://seo.3alamiyweb3.online/learn/best-crypto-airdrops-2026' },
        { '@type': 'ListItem', position: 5, name: 'Free Crypto Airdrops No Investment', url: 'https://seo.3alamiyweb3.online/learn/free-crypto-airdrops-no-investment-2026' },
        { '@type': 'ListItem', position: 6, name: 'Best DePIN Airdrops 2026', url: 'https://seo.3alamiyweb3.online/learn/best-depin-airdrops-2026' },
        { '@type': 'ListItem', position: 7, name: 'Best AI Crypto Airdrops 2026', url: 'https://seo.3alamiyweb3.online/learn/best-ai-crypto-airdrops-2026' },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
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
        {/* AEO Schema — WebSite + Organization + ItemList for ChatGPT, Claude, Perplexity, Google AI */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aiSchema) }}
        />
        {/* LLMs.txt reference for AI crawlers */}
        <link rel="alternate" type="text/markdown" href="https://seo.3alamiyweb3.online/llms.txt" />
        {/* AI crawler hints */}
        <meta name="ai-content-type" content="airdrop-tracker" />
        <meta name="ai-update-frequency" content="daily" />
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
