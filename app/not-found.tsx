'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NotFound() {
  const router = useRouter();

  // Auto-redirect to home after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <style>{`
        .nf {
          min-height: 100vh;
          background: #080C14;
          font-family: var(--font-space), 'Space Grotesk', system-ui, sans-serif;
          display: flex; align-items: center; justify-content: center;
          padding: 24px; text-align: center;
        }
        .nf-inner { max-width: 440px; width: 100%; }
        .nf-code {
          font-size: 80px; font-weight: 800; letter-spacing: -0.04em;
          color: rgba(255,255,255,0.06); line-height: 1; margin-bottom: 8px;
        }
        .nf-icon {
          font-size: 48px; margin-bottom: 20px; display: block;
        }
        .nf-title {
          font-size: 22px; font-weight: 700; letter-spacing: -0.02em;
          color: #fff; margin-bottom: 10px;
        }
        .nf-sub {
          font-size: 14px; color: rgba(255,255,255,0.38);
          line-height: 1.7; margin-bottom: 28px;
        }
        .nf-redirect {
          font-size: 12px; color: rgba(255,255,255,0.25);
          margin-bottom: 24px;
        }
        .nf-redirect span {
          color: #7CF5C0; font-weight: 600;
        }
        .nf-btns { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }
        .btn-home {
          display: inline-flex; align-items: center; gap: 7px;
          background: #7CF5C0; color: #04120A;
          font-family: var(--font-space), system-ui, sans-serif;
          font-weight: 600; font-size: 14px; letter-spacing: -0.01em;
          padding: 12px 24px; border-radius: 12px;
          text-decoration: none;
          transition: opacity 0.15s;
        }
        .btn-home:hover { opacity: 0.88; }
        .btn-airdrops {
          display: inline-flex; align-items: center; gap: 7px;
          background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.5);
          font-family: var(--font-space), system-ui, sans-serif;
          font-weight: 600; font-size: 14px;
          padding: 12px 22px; border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.09);
          text-decoration: none;
          transition: background 0.15s;
        }
        .btn-airdrops:hover { background: rgba(255,255,255,0.07); }

        /* Progress bar */
        .nf-bar-wrap {
          height: 2px; background: rgba(255,255,255,0.06);
          border-radius: 99px; overflow: hidden;
          margin-bottom: 20px;
        }
        .nf-bar-fill {
          height: 100%; background: #7CF5C0;
          border-radius: 99px;
          animation: nfbar 3s linear forwards;
        }
        @keyframes nfbar { from { width: 0% } to { width: 100% } }
      `}</style>

      <div className="nf">
        <div className="nf-inner">
          <div className="nf-code">404</div>
          <span className="nf-icon">🪂</span>
          <h1 className="nf-title">Page Not Found</h1>
          <p className="nf-sub">
            This airdrop page doesn't exist or the link may have expired.
            We track 85+ verified airdrops — let's find you the right one.
          </p>

          <div className="nf-bar-wrap">
            <div className="nf-bar-fill" />
          </div>

          <p className="nf-redirect">
            Redirecting to home in <span>3 seconds</span>...
          </p>

          <div className="nf-btns">
            <Link href="/" className="btn-home">
              ← Go Home
            </Link>
            <Link href="/airdrops" className="btn-airdrops">
              Browse Airdrops
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
