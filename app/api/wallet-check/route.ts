import { NextRequest, NextResponse } from 'next/server';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const COVALENT_KEY = process.env.COVALENT_API_KEY || '';
const HELIUS_KEY = process.env.HELIUS_API_KEY || '';
const ETHERSCAN_KEY = process.env.ETHERSCAN_API_KEY || '';

// ── Real airdrop checker URLs (sourced from Watchoor) ──
// Keys are lowercase project name substrings — matched against airdrop.name
// {addr} is replaced with the wallet address where supported
const CHECKER_URLS: Record<string, string> = {
  're':               'https://app.re.xyz/re',
  'wagyu':            'https://www.wagyu.xyz/airdrop-max',
  'cedomis':          'https://airdrop.cedomis.xyz/',
  'megaeth':          'https://terminal.megaeth.com/',
  'offerbook':        'https://offerbook.jup.ag/raindrop',
  'limitless':        'https://limitless.exchange/claim',
  'gaea':             'https://airdrop.aigaea.net/',
  'nexus':            'https://app.nexus.xyz/mainnet',
  'citrea':           'https://citrea.xyz/airdrop',
  'plume':            'https://claim-pnp.nest.credit/',
  'ethena':           'https://ethena.liquifi.finance/',
  'kaio':             'https://claim.kaio.xyz/',
  'arbitrum drip':    'https://arbitrumdrip.com/users/',
  'solstice':         'https://app.solstice.finance/earn-flares',
  'billions':         'https://community.billions.network/',
  'fluent':           'https://claim.fluent.xyz/',
  'genius':           'https://tradegenius.com/airdrop',
  'horizen':          'https://zenrise.horizen.io/claimpage',
  'aligned':          'https://community.alignedlayer.com/',
  'backpack':         'https://backpack.exchange/bp-claim',
  'shape':            'https://shape-mainnet.hub.caldera.xyz/',
  'ionet':            'https://cloud.io.net/worker/rewards/worker-rewards',
  'gearbox':          'https://gearbox.foundation/check/',
  'goldfinch':        'https://app.goldfinch.finance/gfi',
  'openmind':         'https://eligible.fabric.foundation/',
  'echelon':          'https://app.ethena.fi/delegation',
  'toki':             'https://toki.finance/claims',
  'rainbow':          'https://rainbow.me/points',
  'yo':               'https://app.yo.xyz/claim',
  'warden':           'https://airdrop.wardenprotocol.org/',
  'arcium':           'https://rtg.arcium.com/',
  'moonbirds':        'https://claim.moonbirds.com/',
  'rails':            'https://walletchecker.rails.xyz/',
  'rollx':            'https://app.rollx.trade/airdrop',
  'heyelsa':          'https://app.heyelsa.ai/airdrop',
  'owlto':            'https://claim.owlto.finance/',
  'fogo':             'https://claim.fogo.io/',
  'zama':             'https://claim.zama.org/',
  'zetarium':         'https://airdrop.zetarium.world/',
  'mezo':             'https://mezo.org/rewards',
  'brevis':           'https://claim.brevis.network/',
  'espresso':         'https://stake.espresso.network/',
  'zkpass':           'https://airdrop.zkpass.org/',
  'magma':            'https://app.magmafinance.io/airdrop',
  'almanak':          'https://app.almanak.co/claim',
  'infrared':         'https://infrared.finance/airdrop',
  'rate':             'https://claim.ratex.trade/',
  'consumerfi':       'https://consumerfi.ai/app/checker',
  'kyo':              'https://app.kyo.finance/airdrop-checker',
  'superform':        'https://claim.superformfoundation.org/',
  'cysic':            'https://register.cysicfoundation.org/',
  'paintswap':        'https://airdrop.paintswap.io/',
  'tari':             'https://airdrop.tari.com/',
  'talus':            'https://launch.talus.foundation/',
  'coti':             'https://earn.coti.io/dashboard',
  'polynomial':       'https://polynomial.fi/en/mainnet/earn/leaderboard',
  'peaq':             'https://claim.peaq.xyz/',
  'sosovalue':        'https://ssi.sosovalue.com/en/reward',
  'ten':              'https://airdrop.ten.xyz/',
  'bob':              'https://claim.gobob.xyz/',
  'irys':             'https://claim.irys.xyz/',
  'debridge':         'https://debridge.foundation/checker',
  'sapien':           'https://app.sapien.io/t/airdrop',
  'gaib':             'https://airdrop.gaibfoundation.org/',
  'goat':             'https://airdrops.goat.network/',
  'theo':             'https://claim.kaito.ai/reward-station/theo',
  'monami':           'https://claim.monami.network/',
  'hybra':            'https://www.hybra.finance/airdrop',
  'ramses':           'https://www.ramses.xyz/airdrop',
  'beamable':         'https://claim.beamable.network/',
  'allora':           'https://prime.allora.foundation/',
  'aria':             'https://app.ariaprotocol.xyz/airdrop',
  'intuition':        'https://airdrop.intuition.systems/',
  'meganet':          'https://claim.meganet.app/',
  'folks':            'https://claim.folks.finance/',
  'gokite':           'https://kite.foundation/claim',
  'mmt':              'https://airdrop.mmt.finance/',
  'printr':           'https://app.printr.money/airdrop-checker',
  'ika':              'https://claim.ika.xyz/',
  'noble':            'https://points.noble.xyz/claim',
  'monad':            'https://claim.monad.xyz/',
  'novastro':         'https://airdrop.novastro.xyz/',
  'tea':              'https://app.tea-fi.com/eligibility',
  'orochi':           'https://tge.orochi.network/',
  'babylon':          'https://airdrop.babylon.foundation/',
  'playai':           'https://hub.playai.network/claim',
  'turtle':           'https://claims.turtle.xyz/',
  'phi':              'https://claim.phi.box/',
  'meteora':          'https://met.meteora.ag/',
  '0g':               'https://airdrop.0gfoundation.ai/',
  'grvt':             'https://grvt.io/exchange/reward-portal',
  'yei':              'https://claim.yei.finance/',
  'enso':             'https://drop.enso.build/claim',
  'caldera':          'https://claim.caldera.foundation/',
  'hyperliquid':      'https://app.hyperliquid.xyz/drip',
  'kaito':            'https://claim.kaito.ai/',
  'layerzero':        'https://www.layerzero.foundation/eligibility',
  'zksync':           'https://claim.zksync.io/',
  'starknet':         'https://provisions.starknet.io/',
  'scroll':           'https://scroll.io/developer-nft/check-eligibility',
  'linea':            'https://linea.build/campaign',
  'wormhole':         'https://wormhole.com/claim',
  'jupiter':          'https://jup.ag/airdrop',
  'drift':            'https://drift.trade/airdrop',
  'tensor':           'https://tensor.trade/airdrop',
  'pyth':             'https://pyth.network/airdrop',
  'dydx':             'https://dydx.trade/portfolio/overview',
  'polymarket':       'https://polymarket.com/',
  'metamask':         'https://portfolio.metamask.io/',
  'phantom':          'https://phantom.com/',
  'uniswap':          'https://app.uniswap.org/',
  'aave':             'https://app.aave.com/',
};

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

// Blockscout public APIs — completely free, no API key needed, works on Vercel
const BLOCKSCOUT_CHAINS = [
  { name: 'Ethereum',  api: 'https://eth.blockscout.com',       dbNames: ['Ethereum','ETH'] },
  { name: 'Base',      api: 'https://base.blockscout.com',      dbNames: ['Base'] },
  { name: 'Optimism',  api: 'https://optimism.blockscout.com',  dbNames: ['Optimism','OP'] },
  { name: 'Arbitrum',  api: 'https://arbitrum.blockscout.com',  dbNames: ['Arbitrum','Arbitrum One'] },
  { name: 'Polygon',   api: 'https://polygon.blockscout.com',   dbNames: ['Polygon','MATIC'] },
  { name: 'zkSync',    api: 'https://zksync.blockscout.com',    dbNames: ['zkSync','zkSync Era'] },
  { name: 'Linea',     api: 'https://explorer.linea.build',     dbNames: ['Linea'] },
];

// Official public RPC endpoints — no API key, no rate limit for single calls, always works on Vercel
// eth_getTransactionCount returns the wallet's nonce = number of txs sent from this address
const PUBLIC_RPC_CHAINS = [
  { name: 'Ethereum',  rpc: 'https://cloudflare-eth.com',        dbNames: ['Ethereum','ETH'] },
  { name: 'Base',      rpc: 'https://mainnet.base.org',          dbNames: ['Base'] },
  { name: 'Arbitrum',  rpc: 'https://arb1.arbitrum.io/rpc',      dbNames: ['Arbitrum','Arbitrum One'] },
  { name: 'Optimism',  rpc: 'https://mainnet.optimism.io',       dbNames: ['Optimism','OP'] },
  { name: 'Polygon',   rpc: 'https://polygon-rpc.com',           dbNames: ['Polygon','MATIC'] },
  { name: 'BNB Chain', rpc: 'https://bsc-dataseed.binance.org',  dbNames: ['BNB Chain','BSC','BNB'] },
  { name: 'zkSync',    rpc: 'https://mainnet.era.zksync.io',     dbNames: ['zkSync','zkSync Era'] },
  { name: 'Linea',     rpc: 'https://rpc.linea.build',           dbNames: ['Linea'] },
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
      const res = await fetch(url, { cache: 'no-store' });
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
    // Works with or without an API key (rate-limited without)
    const apikey = ETHERSCAN_KEY ? `&apikey=${ETHERSCAN_KEY}` : '';
    const url = `${chainApi}?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&page=1&offset=100${apikey}`;
    const res = await fetch(url, { cache: 'no-store' });
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

// ── Public RPC: eth_getTransactionCount — most reliable, no API key, official endpoints ──
// Returns nonce (= number of txs sent). If nonce > 0, wallet is active on that chain.
async function getRPCActivity(address: string): Promise<ChainResult[]> {
  const results = await Promise.allSettled(
    PUBLIC_RPC_CHAINS.map(async chain => {
      try {
        const res = await fetch(chain.rpc, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            jsonrpc: '2.0', method: 'eth_getTransactionCount',
            params: [address, 'latest'], id: 1,
          }),
          cache: 'no-store',
        });
        if (!res.ok) return null;
        const data = await res.json();
        const nonce = parseInt(data?.result ?? '0x0', 16);
        if (nonce === 0) return null;
        // No exact first-tx timestamp from nonce — use 2 years ago as conservative estimate
        return {
          name: chain.name, dbNames: chain.dbNames,
          activity: { firstTxTimestamp: Date.now() - 2 * 365 * 86400000, txCount: nonce, active: true },
        };
      } catch { return null; }
    })
  );
  return results
    .filter((r): r is PromiseFulfilledResult<ChainResult | null> => r.status === 'fulfilled' && r.value !== null)
    .map(r => r.value!);
}

// ── Blockscout public API — free, no key, reliable ──
async function getBlockscoutActivity(address: string): Promise<ChainResult[]> {
  const results = await Promise.allSettled(
    BLOCKSCOUT_CHAINS.map(async chain => {
      try {
        const url = `${chain.api}/api/v2/addresses/${address}/transactions`;
        const res = await fetch(url, { cache: 'no-store', headers: { 'Accept': 'application/json' } });
        if (!res.ok) return null;
        const data = await res.json();
        const items: any[] = data?.items ?? [];
        if (!items.length) return null;
        // Blockscout returns newest first — get oldest for firstTx
        const oldest = items[items.length - 1];
        const ts = oldest?.timestamp ? new Date(oldest.timestamp).getTime() : Date.now();
        return { name: chain.name, dbNames: chain.dbNames, activity: { firstTxTimestamp: ts, txCount: items.length, active: true } };
      } catch { return null; }
    })
  );
  return results
    .filter((r): r is PromiseFulfilledResult<ChainResult | null> => r.status === 'fulfilled' && r.value !== null)
    .map(r => r.value!);
}

// ── Ankr public RPC fallback — free, no key needed ──
async function getAnkrActivity(address: string): Promise<ChainResult[]> {
  try {
    const res = await fetch('https://rpc.ankr.com/multichain', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0', method: 'ankr_getTransactionsByAddress', id: 1,
        params: {
          address,
          blockchain: ['eth', 'arbitrum', 'base', 'optimism', 'polygon', 'bsc', 'zksync_era', 'linea'],
          pageSize: 50,
        },
      }),
      cache: 'no-store',
    });
    if (!res.ok) return [];
    const data = await res.json();
    const txs: any[] = data?.result?.transactions ?? [];
    if (!txs.length) return [];

    const chainMap: Record<string, { dbNames: string[]; txs: any[] }> = {
      eth:       { dbNames: ['Ethereum','ETH'], txs: [] },
      arbitrum:  { dbNames: ['Arbitrum','Arbitrum One'], txs: [] },
      base:      { dbNames: ['Base'], txs: [] },
      optimism:  { dbNames: ['Optimism','OP'], txs: [] },
      polygon:   { dbNames: ['Polygon','MATIC'], txs: [] },
      bsc:       { dbNames: ['BNB Chain','BSC','BNB'], txs: [] },
      zksync_era:{ dbNames: ['zkSync','zkSync Era'], txs: [] },
      linea:     { dbNames: ['Linea'], txs: [] },
    };

    for (const tx of txs) {
      const bc = tx.blockchain;
      if (chainMap[bc]) chainMap[bc].txs.push(tx);
    }

    const results: ChainResult[] = [];
    for (const [, val] of Object.entries(chainMap)) {
      if (!val.txs.length) continue;
      const sorted = [...val.txs].sort((a, b) => (a.timestamp ?? 0) - (b.timestamp ?? 0));
      const ts = (sorted[0].timestamp ?? 0) * 1000;
      results.push({ name: val.dbNames[0], dbNames: val.dbNames, activity: { firstTxTimestamp: ts, txCount: val.txs.length, active: true } });
    }
    return results;
  } catch { return []; }
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
    const res = await fetch(url, { cache: 'no-store' });
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
      `${SUPABASE_URL}/rest/v1/airdrops?select=slug,name,logo,blockchain,status,difficulty,cost,description,links,created_at&order=created_at.desc`,
      { headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` }, next: { revalidate: 86400 } }
    );
    if (!res.ok) return [];
    return res.json();
  } catch { return []; }
}

// Estimated USD value per airdrop — used to show "~$XXX unclaimed" in free preview
// Conservative median is $60 (2024 data); known large drops get specific values
const AIRDROP_VALUES: Record<string, number> = {
  // Large confirmed drops
  'Hyperliquid': 2000, 'MegaETH': 400, 'Backpack': 300, 'Pharos': 250,
  'Arbitrum': 800, 'Optimism': 500, 'zkSync': 200, 'Starknet': 150,
  'Linea': 120, 'Scroll': 100, 'Base': 300,
  // Mid-tier
  'Ethena': 180, 'Pendle': 150, 'Kamino': 120, 'Marginfi': 100,
  'Drift': 200, 'Jupiter': 400, 'Meteora': 180, 'Tensor': 150,
  'Pyth': 200, 'Wormhole': 120, 'LayerZero': 250, 'ZetaChain': 80,
  'Polymarket': 200, 'dYdX': 300, 'Vertex': 120, 'Synthetix': 80,
  'Aevo': 100, 'Paradex': 80, 'Ambient': 80, 'Ekubo': 80,
  'MetaMask': 500, 'Phantom': 300, 'Rainbow': 100,
  // Default for everything else: $60 (2024 median)
};
const DEFAULT_AIRDROP_VALUE = 60;

function estimateAirdropValue(name: string): number {
  if (!name) return DEFAULT_AIRDROP_VALUE;
  const key = Object.keys(AIRDROP_VALUES).find(k => name.toLowerCase().includes(k.toLowerCase()));
  return key ? AIRDROP_VALUES[key] : DEFAULT_AIRDROP_VALUE;
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

  // Trial: activated by giving email (client sends ?trial=1)
  const hasTrial = searchParams.get('trial') === '1';

  const [isProSubscriber, airdrops] = await Promise.all([checkSubscription(address), getAirdrops()]);
  const isPro = isProSubscriber || hasTrial;
  const isTrialActive = hasTrial && !isProSubscriber;

  // ── Scan chains ──
  let evmChains: ChainResult[] = [];
  let solActivity: Activity | null = null;

  if (isEvm) {
    // 1️⃣ Try Covalent (fastest, all chains in one key)
    if (COVALENT_KEY) {
      evmChains = await getCovalentActivity(address);
    }
    // 2️⃣ Try public RPC eth_getTransactionCount — most reliable, official endpoints, no API key
    if (evmChains.length === 0) {
      evmChains = await getRPCActivity(address);
    }
    // 3️⃣ Still empty → try Blockscout (transaction history, free, no key)
    if (evmChains.length === 0) {
      evmChains = await getBlockscoutActivity(address);
    }
    // 4️⃣ Still empty → try Etherscan family
    if (evmChains.length === 0) {
      evmChains = await getEtherscanAllChains(address);
    }
    // 5️⃣ Still empty → try Ankr multichain RPC
    if (evmChains.length === 0) {
      evmChains = await getAnkrActivity(address);
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

    // Find checker URL: match name against CHECKER_URLS keys, then fall back to links field
    const nameLower = (a.name || '').toLowerCase();
    const checkerKey = Object.keys(CHECKER_URLS).find(k => nameLower.includes(k));
    const linksObj: Record<string, string> = (a.links && typeof a.links === 'object' && !Array.isArray(a.links)) ? a.links : {};
    const fallbackLink = linksObj['app'] || linksObj['website'] || linksObj['dapp'] || Object.values(linksObj).find(v => typeof v === 'string' && v.startsWith('http')) || null;
    const link = checkerKey ? CHECKER_URLS[checkerKey] : fallbackLink;

    return {
      slug: a.slug, name: a.name, logo: a.logo,
      blockchain: a.blockchain, status: a.status,
      difficulty: a.difficulty, cost: a.cost,
      description: a.description?.slice(0, 120),
      link,
      hasChecker: !!checkerKey,
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
    // Show 2 real results as teasers — enough to prove value, not enough to skip paying
    const previewItems = [
      ...eligible.slice(0, 2).map(a => ({ name: a.name, logo: a.logo, blockchain: a.blockchain, tag: 'Eligible', color: '#7CF5C0' })),
      ...missed.slice(0, Math.max(0, 2 - Math.min(2, eligible.length))).map(a => ({ name: a.name, logo: a.logo, blockchain: a.blockchain, tag: 'Missed', color: '#f87171' })),
    ].slice(0, 2);

    // Estimate total value of eligible airdrops
    const estimatedValue = eligible.reduce((sum, a) => sum + estimateAirdropValue(a.name), 0);

    return NextResponse.json({
      isPro: false,
      summary,
      preview: {
        eligibleCount:  eligible.length,
        missedCount:    missed.length,
        activeCount:    active.length,
        estimatedValue,
        items: previewItems,
      },
    });
  }

  return NextResponse.json({
    isPro: true,
    isTrial: isTrialActive && !isProSubscriber,
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
