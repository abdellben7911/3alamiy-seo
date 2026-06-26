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
      `${SUPABASE_URL}/rest/v1/airdrops?select=slug,name,logo,blockchain,status,difficulty,cost,description,created_at&order=created_at.desc`,
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
  'M