export const metadata = {
  title: "Privacy Policy — 3alamiy Web3",
  description:
    "Privacy Policy for 3alamiy Web3 — learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#060A12] text-gray-200 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#7CF5C0] mb-3">
            Legal
          </span>
          <h1 className="text-4xl font-bold text-white mb-3">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">
            Last updated: <span className="text-[#7CF5C0]">June 2, 2026</span>
          </p>
        </div>

        {/* Intro */}
        <p className="text-gray-300 leading-relaxed mb-10">
          Welcome to <strong className="text-white">3alamiy Web3</strong> (
          <a
            href="https://www.3alamiyweb3.com"
            className="text-[#7CF5C0] hover:underline"
          >
            www.3alamiyweb3.com
          </a>
          ). We are committed to protecting your privacy. This Privacy Policy
          explains what information we collect, how we use it, and your rights
          regarding that information.
        </p>

        <div className="space-y-10">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-[#7CF5C0]">01.</span> Information We Collect
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              We may collect the following types of information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed ml-2">
              <li>
                <strong className="text-white">Email address</strong> — when you
                subscribe to our newsletter.
              </li>
              <li>
                <strong className="text-white">Wallet address</strong> — when
                you connect your Web3 wallet via the GM Station feature
                (read-only, we never request signatures for funds).
              </li>
              <li>
                <strong className="text-white">Usage data</strong> — pages
                visited, time spent, and interactions, collected anonymously via
                Google Analytics.
              </li>
              <li>
                <strong className="text-white">Cookies</strong> — small files
                stored in your browser to improve your experience and serve
                relevant ads.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-[#7CF5C0]">02.</span> How We Use Your
              Information
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed ml-2">
              <li>To send you airdrop updates and newsletters (email only).</li>
              <li>
                To personalize your experience (favorites, recommendations).
              </li>
              <li>To analyze site performance and improve our content.</li>
              <li>
                To display relevant advertisements via Google AdSense.
              </li>
              <li>To prevent fraud and ensure site security.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-[#7CF5C0]">03.</span> Google AdSense &
              Cookies
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We use <strong className="text-white">Google AdSense</strong> to
              display advertisements. Google may use cookies and web beacons to
              serve ads based on your prior visits to our website or other
              websites. You can opt out of personalized advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                className="text-[#7CF5C0] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Ads Settings
              </a>
              . For more information, see{" "}
              <a
                href="https://policies.google.com/technologies/ads"
                className="text-[#7CF5C0] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google's advertising policies
              </a>
              .
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-[#7CF5C0]">04.</span> Google Analytics
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We use <strong className="text-white">Google Analytics</strong> to
              understand how visitors interact with our site. This data is
              collected anonymously and does not personally identify you. You can
              opt out using the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                className="text-[#7CF5C0] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-[#7CF5C0]">05.</span> Third-Party Services
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our site may contain links to third-party websites (airdrop
              projects, exchanges, etc.). We are not responsible for the privacy
              practices of those sites. We encourage you to read their privacy
              policies before providing any personal information.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-[#7CF5C0]">06.</span> Data Storage & Security
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Your data (email, favorites) is stored securely in{" "}
              <strong className="text-white">Supabase</strong>, a secure
              cloud database. We implement industry-standard measures to protect
              your data from unauthorized access. However, no method of
              transmission over the internet is 100% secure.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-[#7CF5C0]">07.</span> Your Rights
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed ml-2">
              <li>
                <strong className="text-white">Unsubscribe</strong> — you can
                unsubscribe from our newsletter at any time.
              </li>
              <li>
                <strong className="text-white">Data deletion</strong> — you can
                request deletion of your account and data by contacting us.
              </li>
              <li>
                <strong className="text-white">Access</strong> — you can request
                a copy of the data we hold about you.
              </li>
            </ul>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-[#7CF5C0]">08.</span> Children's Privacy
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our site is not directed at children under 13. We do not
              knowingly collect personal information from children. If you
              believe a child has provided us with personal data, please contact
              us and we will delete it.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-[#7CF5C0]">09.</span> Changes to This Policy
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will
              notify you of significant changes by updating the date at the top
              of this page. Continued use of the site after changes constitutes
              acceptance of the updated policy.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-[#7CF5C0]">10.</span> Contact Us
            </h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about this Privacy Policy, please
              contact us via our Telegram channel:{" "}
              <a
                href="https://t.me/web33alamiy"
                className="text-[#7CF5C0] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                t.me/web33alamiy
              </a>{" "}
              or email us at{" "}
              <a
                href="mailto:contact@3alamiyweb3.com"
                className="text-[#7CF5C0] hover:underline"
              >
                contact@3alamiyweb3.com
              </a>
              .
            </p>
          </section>
        </div>

        {/* Footer note */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} 3alamiy Web3 · All rights reserved
        </div>
      </div>
    </main>
  );
}
