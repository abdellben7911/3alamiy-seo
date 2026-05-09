import { NextResponse } from 'next/server';

const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID!;
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const INDEXNOW_KEY = '7f060f9ccc224ebcb4d4e4f69391377f';
const HOST = 'seo.3alamiyweb3.online';

async function sendTelegramMessage(message: string) {
  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'HTML',
      disable_web_page_preview: false,
    }),
  });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  try {
    // Fetch all airdrops
    const res = await fetch(`${SUPABASE_URL}/rest/v1/airdrops?select=*&order=created_at.desc`, {
      headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` },
    });
    const airdrops = await res.json();

    // If specific slug provided → notify Telegram
    if (slug) {
      const a = airdrops.find((x: any) => x.slug === slug);
      if (a) {
        const diffEmoji = a.difficulty === 'Easy' ? '🟢' : a.difficulty === 'Medium' ? '🟡' : '🔴';
        const costEmoji = a.cost === 'Free' ? '🆓' : '💰';
        const reward = a.reward_min && a.reward_max
          ? `$${a.reward_min} - $${a.reward_max}`
          : a.reward_min ? `$${a.reward_min}+` : 'TBA';
        const tags = Array.isArray(a.tags) ? a.tags.map((t: string) => `#${t}`).join(' ') : '';

        const message = `
🪂 <b>New Airdrop Alert!</b>

<b>${a.name}</b>
${a.description}

${costEmoji} <b>Cost:</b> ${a.cost}
${diffEmoji} <b>Difficulty:</b> ${a.difficulty}
💰 <b>Reward:</b> ${reward}
⛓ <b>Blockchain:</b> ${a.blockchain}
📊 <b>Status:</b> ${a.status}

📖 <b>Step-by-step guide:</b>
<a href="https://seo.3alamiyweb3.online/airdrops/${a.slug}">View Full Guide →</a>

${tags}

🔔 <i>Follow @alamiyweb3_bot for daily airdrop alerts</i>
`.trim();

        await sendTelegramMessage(message);
      }
    }

    // Ping IndexNow with all URLs
    const learnSlugs = [
      'discord-role-airdrops-guide-2026',
      'best-no-kyc-crypto-airdrops-2026',
      'best-low-gas-crypto-airdrops-2026',
      'how-to-find-airdrops-before-everyone-else',
      'why-crypto-airdrops-are-becoming-harder-to-qualify-for',
      'how-to-build-onchain-activity-that-actually-matters',
      'best-free-crypto-airdrops-2026',
      'how-to-set-up-metamask-for-airdrops',
      'what-is-depin-crypto-airdrops',
      'how-to-avoid-crypto-airdrop-scams-2026',
      'top-crypto-airdrop-wallets-2026',
      'crypto-airdrops-2026-evolution',
      'news-report-the-2-trillion-wipeout',
      'solanas-institutional-firedancer-era',
      'can-solana-reach-1000-deep-dive',
      'nfts-flex-bayc-kidney-moment',
      'how-a-100-domain-became-a-70-million-digital-asset-the-story-behind-ai-com',
    ];

    const allUrls = [
      `https://${HOST}/`,
      `https://${HOST}/about`,
      ...airdrops.map((a: any) => `https://${HOST}/airdrops/${a.slug}`),
      ...learnSlugs.map(s => `https://${HOST}/learn/${s}`),
    ];

    const pingResponse = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
        urlList: allUrls,
      }),
    });

    return NextResponse.json({
      success: true,
      urlsSubmitted: allUrls.length,
      indexNowStatus: pingResponse.status,
      telegramNotified: !!slug,
      message: `✅ Pinged ${allUrls.length} URLs${slug ? ` + notified Telegram about ${slug}` : ''}`,
    });

  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
