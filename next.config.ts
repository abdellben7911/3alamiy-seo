import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Allow logos from any HTTPS source (CoinGecko, project sites, Supabase storage, etc.)
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
  },
  async redirects() {
    return [
      // Redirect seo.3alamiyweb3.online → www.3alamiyweb3.com
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'seo.3alamiyweb3.online' }],
        destination: 'https://www.3alamiyweb3.com/:path*',
        permanent: true,
      },
      // Also redirect bare 3alamiyweb3.online → www.3alamiyweb3.com
      {
        source: '/:path*',
        has: [{ type: 'host', value: '3alamiyweb3.online' }],
        destination: 'https://www.3alamiyweb3.com/:path*',
        permanent: true,
      },
      // Redirect non-www to www
      {
        source: '/:path*',
        has: [{ type: 'host', value: '3alamiyweb3.com' }],
        destination: 'https://www.3alamiyweb3.com/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/llms.txt',
        headers: [
          { key: 'Content-Type', value: 'text/markdown; charset=utf-8' },
          { key: 'X-Markdown-Tokens', value: '5000' },
          { key: 'X-Robots-Tag', value: 'noindex' },
          { key: 'Vary', value: 'Accept' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-AEO-Version', value: '1.0' },
          { key: 'Cache-Control', value: 'public, max-age=3600' },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Vary', value: 'Accept' },
        ],
      },
    ];
  },
};

export default nextConfig;
