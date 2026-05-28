import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer | 3alamiy Web3',
  description: 'Read the disclaimer for 3alamiy Web3. Crypto airdrops involve risk. This site provides educational content only — not financial advice.',
  alternates: { canonical: 'https://www.3alamiyweb3.com/disclaimer' },
};

export default function DisclaimerPage() {
  return (
    <>
      <style>{`
        .disc-wrap {
          min-height: 100vh;
          background: #060A12;
          font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif;
          padding: 80px 24px 120px;
        }
        .disc-inner {
          max-width: 720px;
          margin: 0 auto;
        }
        .disc-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(124,245,192,0.06);
          border: 1px solid rgba(124,245,192,0.15);
          border-radius: 8px;
          padding: 5px 12px;
          font-size: 11px;
          font-weight: 600;
          color: #7CF5C0;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .disc-title {
          font-size: clamp(28px, 5vw, 42px);
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.03em;
          line-height: 1.15;
          margin: 0 0 14px;
        }
        .disc-updated {
          font-size: 13px;
          color: rgba(255,255,255,0.25);
          margin: 0 0 48px;
        }
        .disc-divider {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.06);
          margin: 0 0 48px;
        }
        .disc-section {
          margin-bottom: 40px;
        }
        .disc-section h2 {
          font-size: 16px;
          font-weight: 600;
          color: #fff;
          margin: 0 0 12px;
          letter-spacing: -0.01em;
        }
        .disc-section p {
          font-size: 14px;
          color: rgba(255,255,255,0.45);
          line-height: 1.85;
          margin: 0 0 12px;
        }
        .disc-section p:last-child { margin-bottom: 0; }
        .disc-section ul {
          padding-left: 18px;
          margin: 8px 0 0;
        }
        .disc-section ul li {
          font-size: 14px;
          color: rgba(255,255,255,0.45);
          line-height: 1.85;
          margin-bottom: 6px;
        }
        .disc-highlight {
          background: rgba(124,245,192,0.05);
          border: 1px solid rgba(124,245,192,0.12);
          border-left: 3px solid rgba(124,245,192,0.4);
          border-radius: 8px;
          padding: 16px 20px;
          margin-bottom: 40px;
        }
        .disc-highlight p {
          font-size: 14px;
          color: rgba(255,255,255,0.55);
          line-height: 1.8;
          margin: 0;
        }
        .disc-highlight strong {
          color: #7CF5C0;
          font-weight: 600;
        }
        .disc-footer-links {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 48px;
          padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .disc-footer-links a {
          font-size: 13px;
          color: rgba(255,255,255,0.3);
          text-decoration: none;
          transition: color 0.15s;
        }
        .disc-footer-links a:hover { color: rgba(255,255,255,0.7); }
      `}</style>

      <div className="disc-wrap">
        <div className="disc-inner">

          <div className="disc-badge">📋 Legal</div>
          <h1 className="disc-title">Disclaimer</h1>
          <p className="disc-updated">Last updated: May 28, 2026</p>

          <hr className="disc-divider" />

          <div className="disc-highlight">
            <p>
              <strong>Not financial advice.</strong> Everything on 3alamiy Web3 is for educational and informational purposes only. We do not recommend buying, selling, or holding any cryptocurrency or token. Always do your own research.
            </p>
          </div>

          <div className="disc-section">
            <h2>1. No financial advice</h2>
            <p>
              The content published on 3alamiy Web3 — including airdrop guides, project listings, learn articles, and GM Station — does not constitute financial, investment, legal, or tax advice. Nothing on this site should be interpreted as a recommendation to participate in any airdrop, token sale, or crypto project.
            </p>
            <p>
              Crypto markets are highly volatile. The value of any token can drop to zero. You are solely responsible for your own financial decisions.
            </p>
          </div>

          <div className="disc-section">
            <h2>2. Airdrop risk</h2>
            <p>Participating in crypto airdrops carries real risks, including but not limited to:</p>
            <ul>
              <li>Smart contract exploits or rug pulls</li>
              <li>Phishing attacks and scam projects</li>
              <li>Loss of gas fees with no token reward</li>
              <li>Regulatory uncertainty in your jurisdiction</li>
              <li>Tax obligations on received tokens</li>
            </ul>
            <p>
              We list projects based on publicly available information. Listing on 3alamiy Web3 is not an endorsement or guarantee of legitimacy.
            </p>
          </div>

          <div className="disc-section">
            <h2>3. Accuracy of information</h2>
            <p>
              We strive to keep airdrop guides and project details accurate and up to date. However, the crypto space moves fast. Deadlines change, projects get cancelled, and eligibility criteria shift without notice.
            </p>
            <p>
              Always verify information directly on the official project website before taking any action.
            </p>
          </div>

          <div className="disc-section">
            <h2>4. Third-party links</h2>
            <p>
              Our site links to external websites, official project pages, and social channels. We have no control over their content and accept no responsibility for anything on third-party sites. Visiting external links is at your own risk.
            </p>
          </div>

          <div className="disc-section">
            <h2>5. Affiliate & referral disclosure</h2>
            <p>
              Some links on 3alamiy Web3 may be referral or affiliate links. If you use them, we may receive a small commission at no extra cost to you. This does not influence which projects we cover or how we rank them.
            </p>
          </div>

          <div className="disc-section">
            <h2>6. No guarantees</h2>
            <p>
              We make no guarantees about the completeness, reliability, or availability of any information on this site. The site is provided "as is" without warranties of any kind.
            </p>
          </div>

          <div className="disc-section">
            <h2>7. Contact</h2>
            <p>
              If you have questions about this disclaimer, reach out at{' '}
              <a href="mailto:contact@3alamiyweb3.com" style={{ color: '#7CF5C0', textDecoration: 'none' }}>
                contact@3alamiyweb3.com
              </a>
            </p>
          </div>

          <div className="disc-footer-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/">← Back to home</Link>
          </div>

        </div>
      </div>
    </>
  );
}
