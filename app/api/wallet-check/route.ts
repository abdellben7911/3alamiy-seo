import { NextRequest, NextResponse } from 'next/server';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const COVALENT_KEY = process.env.COVALENT_API_KEY || '';
const HELIUS_KEY = process.env.HELIUS_API_KEY || '';
const ETHERSCAN_KEY = process.env.ETHERSCAN_API_KEY || '';

// Covalent chain IDs — one API key covers all
const COVALENT_CHAINS = [
  { id: 1,        name: 'Ethereum',  dbNames: ['Ethereum', 'ETH'] },
  { id: 42161,    name: 'Arbitrum',  dbNames: ['Arbitrum', 'Arbitrum One'] },
  { id: 8453,     name: 'Base',      dbNames: ['Base'] },
  { id: 10,       name: 'Optimism',  dbNames: ['Optimism', 'OP'] },
  { id: 137,      name: 'Polygon',   dbNames: ['Polygon', 'MATIC'] },
  { id: 56,       name: 'BNB Chain', dbNames: ['BNB Chain', 'BSC', 'BNB'] },
  { id: 324,      name: 'zkSync',    dbNames: ['zkSync', 'zkSync Era'] },
  { id: 59144,    name: 'Linea',     dbNames: ['Linea'] },
];

// Etherscan-family fallbacks (used when Covalent key is missing)
const ETHERSCAN_CHAINS = [
  { name: 'Ethereum',  api: 'https://api.etherscan.io/api',             dbNames: ['Ethereum','ETH'] },
  { name: 'Arbitrum',  api: 'https://api.arbiscan.io/api',              dbNames: ['Arbitrum','Arbitrum One'] },
  { name: 'Base',      api: 'https://api.basescan.org/api',             dbNames: ['Base'] },
  { name: 'Optimism',  api: 'https://api-optimistic.etherscan.io/api',  dbNames: ['Optimism','OP'] },
  { name: 'Polygon',   api: 'https://api.polygonscan.com/api',          dbNames: ['Polygon','MATIC'] },
  { name: 'BNB Chain', api: 'https://api.bscscan.com/api',              dbNames: ['BNB Chain','BSC','BNB'] },
  { name: 'zkSync',    api: 'https://api.era.zksync.network/api',       dbNames: ['zkSync','zkSync Era'] },
  { name: 'Linea',     api: 'https://api.lineascan.build/api',          dbNames: ['Linea'] },
];

type Activity = { firstTxTimestamp: number; txCount: number; active: boolean };
type ChainResult = { name: string; dbNames: string[]; activity: Activity };

// ── Covalent: fetch all chains in parallel with a single API key ──
async function getCovalentActivity(address: string): Promise<ChainResult[]> {
  const results = await Promise.allSettled(
    COVALENT_CHAINS.map(async chain => {
      const url = `https://api.covalenthq.com/v1/${chain.id}/address/${address}/transactions_v3/?key=${COVALENT_KEY}&page-size=1000&no-logs=true`;
      const res = await fetch(url, { next: { revalidate: 300 } });
      if (!res.ok) return null;
      const data = await res.json();
      const items: any[] = data?.data?.items ?? [];
      if (!items.length) return null;
      // Covalent returns newest first
      const oldest = items[items.length - 1];
      const ts = new Date(oldest.block_signed_at).getTime();
      return { name: chain.name, dbNames: chain.dbNames, activity: { firstTxTimestamp: ts, txCount: items.length, active: true } };
    })
  );
  return results
    .filter((r): r is PromiseFulfilledResult<ChainResult | null> => r.status === 'fulfilled' && r.value !== null)
    .map(r => r.value!);
}

// ── Etherscan fallback (one chain at a time, slower) ──
async function getEtherscanActivity(address: string, chainApi: string): Promise<Activity | null> {
  try {
    const url = `${chainApi}?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&page=1&offset=100&apikey=${ETHERSCAN_KEY}`;
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) return null;
    const data = await res.json();
    if (data.status !== '1' || !Array.isArray(data.result) || !data.result.length) return null;
    return {
      firstTxTimestamp: parseInt(data.result[0].timeStamp) * 1000,
      txCount: data.result.length,
      active: true,
    };
  } catch { return null; }
}

async function getEtherscanAllChains(address: string): Promise<ChainResult[]> {
  const results = await Promise.allSettled(
    ETHERSCAN_CHAINS.map(async chain => {
      const activity = await getEtherscanActivity(address, chain.api);
      if (!activity) return null;
      return { name: chain.name, dbNames: chain.dbNames, activity };
    })
  );
  return results
    .filter((r): r is PromiseFulfilledResult<ChainResult | null> => r.status === 'fulfilled' && r.value !== null)
    .map(r => r.value!);
}

// ── Solana via Helius ──
async function getSolanaActivity(address: string): Promise<Activity | null> {
  if (!HELIUS_KEY) return null;
  try {
    const url = `https://api.helius.xyz/v0/addresses/${address}/transactions?api-key=${HELIUS_KEY}&limit=100`;
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) return null;
    const data = await res.json();
    if (!Array.isArray(data) || !data.length) return null;
    const oldest = data[data.length - 1];
    return {
      firstTxTimestamp: (oldest.timestamp || 0) * 1000,
      txCount: data.length,
      active: true,
    };
  } catch { return null; }
}

async function checkSubscription(address: string): Promise<boolean> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/subscriptions?wallet_address=eq.${address.toLowerCase()}&status=eq.active&select=id`,
      { headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` } }
    );
    if (!res.ok) return false;
    const data = await res.json();
    return data.length > 0;
  } catch { return false; }
}

async function getAirdrops() {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/airdrops?select=slug,name,logo,blockchain,status,difficulty,cost,description,created_at&order=created_at.desc`,
      { headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` }, next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    return res.json();
  } catch { return []; }
}

function isEthAddress(addr: string) { return /^0x[0-9a-fA-F]{40}$/.test(addr); }
function isSolAddress(addr: string)  { return /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(addr) && !addr.startsWith('0x'); }

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const address = searchParams.get('address')?.trim() || '';

  if (!address) return NextResponse.json({ error: 'Address required' }, { status: 400 });

  const isEvm = isEthAddress(address);
  const isSol = !isEvm && isSolAddress(address);
  if (!isEvm && !isSol) return NextResponse.json({ error: 'Invalid wallet address' }, { status: 400 });

  const [isPro, airdrops] = await Promise.all([checkSubscription(address), getAirdrops()]);

  // ── Scan chains ──
  let evmChains: ChainResult[] = [];
  let solActivity: Activity | null = null;

  if (isEvm) {
    // Prefer Covalent (one key, all chains), fallback to Etherscan
    if (COVALENT_KEY) {
      evmChains = await getCovalentActivity(address);
    } else {
      evmChains = await getEtherscanAllChains(address);
    }
  } else {
    solActivity = await getSolanaActivity(address);
  }

  // ── Build active chain name set ──
  const activeChainNames = new Set<string>();
  evmChains.forEach(c => c.dbNames.forEach(n => activeChainNames.add(n)));
  if (solActivity) ['Solana', 'SOL'].forEach(n => activeChainNames.add(n));

  // ── Wallet metrics ──
  const timestamps = [
    ...evmChains.map(c => c.activity.firstTxTimestamp),
    ...(solActivity ? [solActivity.firstTxTimestamp] : []),
  ].filter(Boolean);
  const firstTx = timestamps.length ? Math.min(...timestamps) : null;
  const totalTxs = evmChains.reduce((s, c) => s + c.activity.txCount, 0) + (solActivity?.txCount ?? 0);
  const ageDays = firstTx ? Math.floor((Date.now() - firstTx) / 86400000) : null;
  const ageYears = ageDays ? (ageDays / 365).toFixed(1) : null;

  // ── Airdrop eligibility logic ──
  // Eligibility is based on:
  // 1. Is wallet active on the airdrop's chain?
  // 2. Did wallet exist before the airdrop snapshot date?
  // 3. Is the airdrop still active vs ended?

  const now = Date.now();

  const eligibilityResults = (airdrops as any[]).map(a => {
    const airdropChain = a.blockchain?.trim();
    const onChain = airdropChain ? (
      activeChainNames.has(airdropChain) ||
      [...activeChainNames].some(n => n.toLowerCase() === airdropChain.toLowerCase())
    ) : false;

    const airdropDate = a.created_at ? new Date(a.created_at).getTime() : now;
    const isActive = a.status === 'Active';
    const walletPredatesAirdrop = firstTx ? firstTx < airdropDate : false;

    let eligibility: 'eligible' | 'missed' | 'active' | 'unknown';
    if (isActive && onChain)                              eligibility = 'eligible';   // live airdrop, wallet on chain → go claim
    else if (!isActive && onChain && walletPredatesAirdrop) eligibility = 'missed';    // ended, was on chain, existed before → missed
    else if (isActive && !onChain)                        eligibility = 'active';     // live but wallet not on that chain → can join
    else                                                  eligibility = 'unknown';

    return {
      slug: a.slug, name: a.name, logo: a.logo,
      blockchain: a.blockchain, status: a.status,
      difficulty: a.difficulty, cost: a.cost,
      description: a.description?.slice(0, 120),
      eligibility,
    };
  });

  const eligible = eligibilityResults.filter(a => a.eligibility === 'eligible');
  const missed   = eligibilityResults.filter(a => a.eligibility === 'missed');
  const active   = eligibilityResults.filter(a => a.eligibility === 'active');

  // ── Score (0–100) ──
  const chainScore  = Math.min(30, evmChains.length * 5 + (solActivity ? 5 : 0));
  const txScore     = Math.min(25, totalTxs > 500 ? 25 : totalTxs > 100 ? 18 : totalTxs > 20 ? 12 : totalTxs > 5 ? 7 : totalTxs > 0 ? 3 : 0);
  const ageScore    = ageDays ? Math.min(25, Math.floor(ageDays / 30) * 2) : 0;
  const eligScore   = Math.min(20, eligible.length * 4);
  const score = Math.min(100, chainScore + txScore + ageScore + eligScore);

  const noActivity = evmChains.length === 0 && !solActivity;

  const summary = {
    address,
    addressType: isEvm ? 'EVM' : 'Solana',
    activeChains: evmChains.map(c => c.name).concat(solActivity ? ['Solana'] : []),
    totalTxs,
    walletAge: ageYears ? `${ageYears} yrs` : ageDays ? `${ageDays} days` : 'No activity',
    ageDays,
    firstActivity: firstTx ? new Date(firstTx).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'No activity',
    score,
    noActivity,
  };

  if (!isPro) {
    return NextResponse.json({
      isPro: false,
      summary,
      preview: {
        eligibleCount: eligible.length,
        missedCount:   missed.length,
        activeCount:   active.length,
      },
    });
  }

  return NextResponse.json({
    isPro: true,
    summary,
    results: { eligible, missed, active, all: eligibilityResults },
    stats: {
      eligibleCount: eligible.length,
      missedCount:   missed.length,
      activeCount:   active.length,
      totalChecked:  airdrops.length,
    },
  });
}
