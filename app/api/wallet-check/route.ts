import { NextRequest, NextResponse } from 'next/server';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const ETHERSCAN_KEY = process.env.ETHERSCAN_API_KEY || '';
const HELIUS_KEY = process.env.HELIUS_API_KEY || '';

// EVM chain configs
const EVM_CHAINS = [
  { id: 'ethereum',  name: 'Ethereum',  api: 'https://api.etherscan.io/api',          dbNames: ['Ethereum','ETH'] },
  { id: 'arbitrum',  name: 'Arbitrum',  api: 'https://api.arbiscan.io/api',           dbNames: ['Arbitrum','Arbitrum One'] },
  { id: 'base',      name: 'Base',      api: 'https://api.basescan.org/api',          dbNames: ['Base'] },
  { id: 'optimism',  name: 'Optimism',  api: 'https://api-optimistic.etherscan.io/api', dbNames: ['Optimism','OP'] },
  { id: 'polygon',   name: 'Polygon',   api: 'https://api.polygonscan.com/api',       dbNames: ['Polygon','MATIC'] },
  { id: 'bsc',       name: 'BNB Chain', api: 'https://api.bscscan.com/api',           dbNames: ['BNB Chain','BSC','BNB'] },
  { id: 'zksync',    name: 'zkSync',    api: 'https://api.era.zksync.network/api',    dbNames: ['zkSync','zkSync Era'] },
  { id: 'linea',     name: 'Linea',     api: 'https://api.lineascan.build/api',       dbNames: ['Linea'] },
];

async function getEvmActivity(address: string, chainApi: string) {
  try {
    const url = `${chainApi}?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&offset=1&page=1&apikey=${ETHERSCAN_KEY}`;
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) return null;
    const data = await res.json();
    if (data.status !== '1' || !data.result?.length) return null;
    const firstTx = data.result[0];

    // Get total tx count
    const countUrl = `${chainApi}?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${ETHERSCAN_KEY}`;
    const countRes = await fetch(countUrl, { next: { revalidate: 300 } });
    const countData = await countRes.json();
    const txCount = Array.isArray(countData.result) ? countData.result.length : 1;

    return {
      firstTxTimestamp: parseInt(firstTx.timeStamp) * 1000,
      txCount,
      active: true,
    };
  } catch {
    return null;
  }
}

async function getSolanaActivity(address: string) {
  if (!HELIUS_KEY) return null;
  try {
    const url = `https://api.helius.xyz/v0/addresses/${address}/transactions?api-key=${HELIUS_KEY}&limit=10`;
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) return null;
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) return null;
    return {
      firstTxTimestamp: data[data.length - 1]?.timestamp * 1000 || Date.now(),
      txCount: data.length,
      active: true,
    };
  } catch {
    return null;
  }
}

async function checkSubscription(address: string): Promise<boolean> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/subscriptions?wallet_address=eq.${address.toLowerCase()}&status=eq.active&select=id`,
      {
        headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` },
      }
    );
    if (!res.ok) return false;
    const data = await res.json();
    return data.length > 0;
  } catch {
    return false;
  }
}

async function getAirdrops() {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/airdrops?select=slug,name,logo,blockchain,status,difficulty,cost,description,created_at&order=created_at.desc`,
      {
        headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

function isValidEthAddress(addr: string) {
  return /^0x[0-9a-fA-F]{40}$/.test(addr);
}

function isValidSolAddress(addr: string) {
  return /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(addr) && !addr.startsWith('0x');
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const address = searchParams.get('address')?.trim() || '';

  if (!address) {
    return NextResponse.json({ error: 'Address required' }, { status: 400 });
  }

  const isEvm = isValidEthAddress(address);
  const isSol = !isEvm && isValidSolAddress(address);

  if (!isEvm && !isSol) {
    return NextResponse.json({ error: 'Invalid wallet address' }, { status: 400 });
  }

  // Check subscription
  const isPro = await checkSubscription(address);

  type ActivityResult = { firstTxTimestamp: number; txCount: number; active: boolean };
  type ChainResult = { chain: typeof EVM_CHAINS[0]; activity: ActivityResult };

  // Scan chains + fetch airdrops in parallel
  let chainResults: ChainResult[] = [];
  let solActivityResult: ActivityResult | null = null;

  const [airdrops, chainScanResult] = await Promise.all([
    getAirdrops(),
    isEvm
      ? Promise.all(EVM_CHAINS.map(async chain => {
          const activity = await getEvmActivity(address, chain.api);
          return activity ? { chain, activity } : null;
        }))
      : getSolanaActivity(address),
  ]);

  if (isEvm && Array.isArray(chainScanResult)) {
    chainResults = (chainScanResult as (ChainResult | null)[]).filter((r): r is ChainResult => r !== null);
  } else if (!isEvm) {
    solActivityResult = chainScanResult as ActivityResult | null;
  }

  // Build active chain names
  const activeChainNames = new Set<string>();
  chainResults.forEach(({ chain }) => {
    chain.dbNames.forEach(n => activeChainNames.add(n));
  });
  if (solActivityResult) {
    ['Solana', 'SOL'].forEach(n => activeChainNames.add(n));
  }

  // Find earliest tx across all chains
  const allTimestamps = [
    ...chainResults.map(c => c.activity.firstTxTimestamp),
    ...(solActivityResult ? [solActivityResult.firstTxTimestamp] : []),
  ].filter(Boolean);
  const firstTx = allTimestamps.length ? Math.min(...allTimestamps) : null;

  // Total txs
  const totalTxs = chainResults.reduce((sum, c) => sum + c.activity.txCount, 0)
    + (solActivityResult?.txCount || 0);

  // alias for rest of file
  const solActivity = solActivityResult;

  // Wallet age
  const ageMs = firstTx ? Date.now() - firstTx : null;
  const ageDays = ageMs ? Math.floor(ageMs / 86400000) : null;
  const ageYears = ageDays ? (ageDays / 365).toFixed(1) : null;

  // Match airdrops to active chains
  const eligibilityResults = airdrops.map((a: any) => {
    const onChain = activeChainNames.has(a.blockchain) ||
      [...activeChainNames].some(c => c.toLowerCase() === a.blockchain?.toLowerCase());

    const airdropDate = new Date(a.created_at).getTime();
    const isActive = a.status === 'Active';
    const walletExistedBefore = firstTx ? firstTx < airdropDate : false;

    let status: 'eligible' | 'missed' | 'active' | 'unknown';
    if (isActive && onChain) status = 'eligible';
    else if (!isActive && onChain && walletExistedBefore) status = 'missed';
    else if (isActive && !onChain) status = 'active';
    else status = 'unknown';

    return {
      slug: a.slug,
      name: a.name,
      logo: a.logo,
      blockchain: a.blockchain,
      status: a.status,
      difficulty: a.difficulty,
      cost: a.cost,
      description: a.description?.slice(0, 100),
      eligibility: status,
    };
  });

  const eligible = eligibilityResults.filter((a: any) => a.eligibility === 'eligible');
  const missed = eligibilityResults.filter((a: any) => a.eligibility === 'missed');
  const active = eligibilityResults.filter((a: any) => a.eligibility === 'active');

  const summary = {
    address,
    addressType: isEvm ? 'EVM' : 'Solana',
    activeChains: chainResults.map(c => c.chain.name).concat(solActivity ? ['Solana'] : []),
    totalTxs,
    walletAge: ageYears ? `${ageYears} years` : 'New wallet',
    ageDays,
    firstActivity: firstTx ? new Date(firstTx).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Unknown',
    score: Math.min(100, Math.floor(
      (chainResults.length * 15) +
      (totalTxs > 100 ? 20 : totalTxs / 5) +
      (ageDays ? Math.min(20, ageDays / 30) : 0) +
      (eligible.length * 5)
    )),
  };

  // Free tier: only summary + first 3 eligible (no missed details)
  if (!isPro) {
    return NextResponse.json({
      isPro: false,
      summary,
      preview: {
        eligible: eligible.slice(0, 3),
        eligibleCount: eligible.length,
        missedCount: missed.length,
        activeCount: active.length,
      },
    });
  }

  // Pro tier: full results
  return NextResponse.json({
    isPro: true,
    summary,
    results: {
      eligible,
      missed,
      active,
      all: eligibilityResults,
    },
    stats: {
      eligibleCount: eligible.length,
      missedCount: missed.length,
      activeCount: active.length,
      totalChecked: airdrops.length,
    },
  });
}
