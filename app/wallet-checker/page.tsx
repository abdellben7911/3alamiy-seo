'use client';

import { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

type WalletSummary = {
  address: string;
  addressType: string;
  activeChains: string[];
  totalTxs: number;
  walletAge: string;
  ageDays: number | null;
  firstActivity: string;
  score: number;
};

type AirdropResult = {
  slug: string;
  name: string;
  logo: string;
  blockchain: string;
  status: string;
  difficulty: string;
  link: string | null;
  hasChecker: boolean;
  eligibility: 'eligible' | 'missed' | 'active' | 'unknown';
};

type CheckResult = {
  isPro: boolean;
  isTrial?: boolean;
  summary: WalletSummary;
  preview?: { eligibleCount: number; missedCount: number; activeCount: number; estimatedValue?: number; items?: { name: string; logo: string; blockchain: string; tag: string; color: string }[] };
  results?: { eligible: AirdropResult[]; missed: AirdropResult[]; active: AirdropResult[] };
  stats?: { eligibleCount: number; missedCount: number; activeCount: number; totalChecked: number };
};

function ScoreRing({ score }: { score: number }) {
  const r = 44;
  const c = 2 * Math.PI * r;
  const filled = (score / 100) * c;
  const color = score >= 70 ? '#7CF5C0' : score >= 40 ? '#f59e0b' : '#f87171';
  const label = score >= 70 ? 'Excellent' : score >= 40 ? 'Average' : 'Low';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <svg width="110" height="110" viewBox="0 0 110 110">
        <circle cx="55" cy="55" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
        <circle cx="55" cy="55" r={r} fill="none" stroke={color} strokeWidth="8"
          strokeDasharray={`${filled} ${c}`} strokeLinecap="round"
          transform="rotate(-90 55 55)"
          style={{ transition: 'stroke-dasharray 1.4s cubic-bezier(0.4,0,0.2,1)', filter: `drop-shadow(0 0 8px ${color}60)` }} />
        <text x="55" y="50" textAnchor="middle" fill={color} fontSize="26" fontWeight="900" fontFamily="Space Grotesk,system-ui">{score}</text>
        <text x="55" y="65" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="9" fontWeight="700" fontFamily="Space Grotesk,system-ui" letterSpacing="1.5">SCORE</text>
      </svg>
      <span style={{ fontSize: 10, fontWeight: 800, color, background: `${color}12`, border: `1px solid ${color}25`, padding: '2px 10px', borderRadius: 99, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</span>
    </div>
  );
}

function AirdropRow({ a }: { a: AirdropResult }) {
  const cfg = {
    eligible: { color: '#7CF5C0', bg: 'rgba(124,245,192,0.06)', border: 'rgba(124,245,192,0.18)', label: 'Eligible' },
    missed:   { color: '#f87171', bg: 'rgba(248,113,113,0.06)', border: 'rgba(248,113,113,0.18)', label: 'Missed' },
    active:   { color: '#818cf8', bg: 'rgba(99,102,241,0.06)',  border: 'rgba(99,102,241,0.18)',  label: 'Can Join' },
    unknown:  { color: 'rgba(255,255,255,0.25)', bg: 'rgba(255,255,255,0.02)', border: 'rgba(255,255,255,0.07)', label: 'Unknown' },
  }[a.eligibility] || { color: 'rgba(255,255,255,0.25)', bg: 'rgba(255,255,255,0.02)', border: 'rgba(255,255,255,0.07)', label: '—' };

  const href = a.link || `/airdrops/${a.slug}`;
  const isExternal = !!a.link;

  return (
    <a href={href} target={isExternal ? '_blank' : '_self'} rel={isExternal ? 'noopener noreferrer' : undefined}
      style={{ display: 'flex', alignItems: 'center', gap: 14, background: cfg.bg, border: `1px solid ${cfg.border}`, borderRadius: 13, padding: '13px 18px', textDecoration: 'none', color: '#fff', transition: 'transform 0.12s' }}>
      {a.logo
        ? <Image src={a.logo} alt={a.name} width={36} height={36} style={{ borderRadius: 9, objectFit: 'cover', flexShrink: 0 }} />
        : <div style={{ width: 36, height: 36, borderRadius: 9, background: '#1a2540', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 800, color: 'rgba(255,255,255,0.2)', flexShrink: 0 }}>{a.name?.[0]}</div>
      }
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginBottom: 2 }}>{a.name}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em' }}>{a.blockchain}</span>
          {a.hasChecker && (
            <span style={{ fontSize: 9, fontWeight: 700, color: '#7CF5C0', background: 'rgba(124,245,192,0.1)', border: '1px solid rgba(124,245,192,0.25)', padding: '1px 6px', borderRadius: 99, letterSpacing: '0.05em' }}>CHECKER</span>
          )}
        </div>
      </div>
      <span style={{ fontSize: 10, fontWeight: 800, color: cfg.color, background: `${cfg.color}15`, border: `1px solid ${cfg.border}`, padding: '3px 10px', borderRadius: 99, flexShrink: 0 }}>{cfg.label}</span>
    </a>
  );
}

function getFavicon(url: string): string {
  try {
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
  } catch {
    return '';
  }
}

// {addr} is replaced with the wallet address when available
const MANUAL_LINKS = [
  { name: 'MegaETH Rewards',  url: 'https://terminal.megaeth.com/' },
  { name: 'Offerbook',        url: 'https://offerbook.jup.ag/raindrop' },
  { name: 'Limitless S3',     url: 'https://limitless.exchange/claim' },
  { name: 'Dreamcash Rewards',url: 'https://dreamcash.xyz/share?code=IBBVMA' },
  { name: 'Gaea',             url: 'https://airdrop.aigaea.net/' },
  { name: 'PRJX Cashdrop',    url: 'https://prjx.com/cashdrop' },
  { name: 'Nexus',            url: 'https://app.nexus.xyz/mainnet' },
  { name: 'Citrea',           url: 'https://citrea.xyz/airdrop' },
  { name: 'Plume Nest PNP',   url: 'https://claim-pnp.nest.credit/' },
  { name: 'Ethena S5',        url: 'https://tokenmanager.coinbase.com/airdrop/ethena/season5' },
  { name: 'Kaio',             url: 'https://claim.kaio.xyz/' },
  { name: 'Arbitrum DRIP',    url: 'https://arbitrumdrip.com/users/{addr}' },
  { name: 'Solstice',         url: 'https://app.solstice.finance/earn-flares' },
  { name: 'Billions',         url: 'https://community.billions.network/' },
  { name: 'USD AI',           url: 'https://app.usd.ai/chip' },
  { name: 'Fluent',           url: 'https://claim.fluent.xyz/' },
  { name: 'Genius',           url: 'https://tradegenius.com/airdrop' },
  { name: 'Horizen',          url: 'https://zenrise.horizen.io/claimpage' },
  { name: 'Aligned',          url: 'https://community.alignedlayer.com/' },
  { name: 'Backpack',         url: 'https://backpack.exchange/bp-claim' },
  { name: 'Shape',            url: 'https://claim.shape.network/' },
  { name: 'Perle',            url: 'https://register.perle.xyz/' },
  { name: 'Based',            url: 'https://basedfoundation.com/check' },
  { name: 'Avantis S2',       url: 'https://foundation.avantisfi.com/airdrop' },
  { name: 'Opinion',          url: 'https://opinion.foundation/claim' },
  { name: 'Paradex',          url: 'https://app.paradex.trade/' },
  { name: 'Huma S3',          url: 'https://claim.huma.finance/' },
  { name: 'Huma S4',          url: 'https://claim.huma.finance/check' },
  { name: 'DSCVR',            url: 'https://dscvr.one/airdrop-hub' },
  { name: 'OneFootball',      url: 'https://fanpass.onefootball.com/claim-details' },
  { name: 'Plume Claim',      url: 'https://claim-pp.plume.org' },
  { name: 'OpenMind',         url: 'https://eligible.fabric.foundation/' },
  { name: 'Echelon',          url: 'https://app.ethena.fi/delegation' },
  { name: 'Toki',             url: 'https://toki.finance/claims' },
  { name: 'Rainbow',          url: 'https://rainbow.me/points' },
  { name: 'YO',               url: 'https://app.yo.xyz/claim' },
  { name: 'Warden',           url: 'https://airdrop.wardenprotocol.org/' },
  { name: 'Arcium',           url: 'https://rtg.arcium.com/' },
  { name: 'Moonbirds',        url: 'https://claim.moonbirds.com/' },
  { name: 'Droplets',         url: 'https://droplets.drop.money/' },
  { name: 'Fight',            url: 'https://airdrop.fight.foundation/' },
  { name: 'EthGas',           url: 'https://ethgasfoundation.org/token/' },
  { name: 'Rails',            url: 'https://walletchecker.rails.xyz/?address={addr}' },
  { name: 'RollX',            url: 'https://app.rollx.trade/airdrop' },
  { name: 'HeyElsa',          url: 'https://app.heyelsa.ai/airdrop' },
  { name: 'Owlto',            url: 'https://claim.owlto.finance/' },
  { name: 'Aster S4',         url: 'https://asterdex.com/en/airdrop' },
  { name: 'Fogo',             url: 'https://claim.fogo.io/' },
  { name: 'Zama',             url: 'https://claim.zama.org/' },
  { name: 'Zetarium',         url: 'https://airdrop.zetarium.world/' },
  { name: 'Yunks',            url: 'https://airdrop.yunks.xyz/' },
  { name: 'Mezo',             url: 'https://mezo.org/rewards' },
  { name: 'Brevis',           url: 'https://claim.brevis.network/' },
  { name: 'Espresso',         url: 'https://claim.espresso.foundation/' },
  { name: 'ZkPass',           url: 'https://airdrop.zkpass.org/' },
  { name: 'Magma',            url: 'https://app.magmafinance.io/airdrop' },
  { name: 'Almanak',          url: 'https://app.almanak.co/claim' },
  { name: 'Infrared',         url: 'https://infrared.finance/airdrop' },
  { name: 'RateX',            url: 'https://claim.rate-x.io/' },
  { name: 'Theoriq',          url: 'https://claim.theoriq.ai/' },
  { name: 'Stable',           url: 'https://app.merkl.xyz/users/{addr}' },
  { name: 'Power Protocol',   url: 'https://staking.powerprotocol.xyz/staking' },
  { name: 'ConsumerFi',       url: 'https://consumerfi.ai/app/checker' },
  { name: 'Kyo',              url: 'https://app.kyo.finance/airdrop-checker' },
  { name: 'Superform',        url: 'https://claim.superformfoundation.org/' },
  { name: 'Cysic',            url: 'https://register.cysicfoundation.org/' },
  { name: 'Aster S3',         url: 'https://asterdex.com/en/airdrop' },
  { name: 'Reveel',           url: 'https://www.revapay.ai/airdrop' },
  { name: 'Paintswap',        url: 'https://airdrop.paintswap.io/' },
  { name: 'Tari',             url: 'https://airdrop.tari.com/' },
  { name: 'GaiAI',            url: 'https://gaiai.io/stage/airdrop' },
  { name: 'Talus',            url: 'https://launch.talus.foundation/' },
  { name: 'Coti',             url: 'https://earn.coti.io/dashboard' },
  { name: 'Polynomial',       url: 'https://polynomial.fi/en/mainnet/earn/leaderboard' },
  { name: 'Peaq S2',          url: 'https://claim.peaq.xyz/' },
  { name: 'SoSoValue',        url: 'https://ssi.sosovalue.com/en/reward' },
  { name: 'Ten',              url: 'https://airdrop.ten.xyz/' },
  { name: 'Madness',          url: 'https://portal.madness.finance/' },
  { name: 'Bob',              url: 'https://claim.gobob.xyz/' },
  { name: 'Irys',             url: 'https://claim.irys.xyz/' },
  { name: 'Debridge S2',      url: 'https://debridge.foundation/checker?address={addr}' },
  { name: 'Sapien',           url: 'https://app.sapien.io/t/airdrop' },
  { name: 'GAIB',             url: 'https://gaibfoundation.org/claim' },
  { name: 'Rayls',            url: 'https://tokenclaims.rayls.com/' },
  { name: 'Goat Network',     url: 'https://airdrops.goat.network/' },
  { name: 'Theo',             url: 'https://claim.kaito.ai/reward-station/theo' },
  { name: 'Monami',           url: 'https://claim.monami.network/' },
  { name: 'Harmonix',         url: 'https://claim.harmonix.fi/' },
  { name: 'Sentient',         url: 'https://claim.sentient.xyz/' },
  { name: 'Aethon',           url: 'https://aethonswap.com/claim' },
  { name: 'Fishing Frenzy',   url: 'https://checker.fishingfrenzy.co/?address={addr}' },
  { name: 'Acurast',          url: 'https://hub.acurast.com/airdrop' },
  { name: 'Pieverse',         url: 'https://www.pieverse.io/airdrops' },
  { name: 'Hybra Finance',    url: 'https://www.hybra.finance/airdrop' },
  { name: 'Play Solana',      url: 'https://genesis.playsolana.com/claim' },
  { name: 'Ramses',           url: 'https://ramses.xyz/airdrop' },
  { name: 'Anichess',         url: 'https://anichess.com/checkmate-claim' },
  { name: 'Beamable',         url: 'https://claim.beamable.network/' },
  { name: 'MacroStrategy',    url: 'https://macrostrategy.tech/airdrop' },
  { name: 'Capx AI',          url: 'https://app.capx.ai/' },
  { name: 'Allora',           url: 'https://prime.allora.foundation/' },
  { name: 'Aria',             url: 'https://app.ariaprotocol.xyz/airdrop' },
  { name: 'Ethena',           url: 'https://ethena.liquifi.finance/' },
  { name: 'Intuition',        url: 'https://airdrop.intuition.systems/' },
  { name: 'Meganet',          url: 'https://claim.meganet.app/' },
  { name: 'Folks Finance',    url: 'https://claim.folks.finance/' },
  { name: 'GoKite AI',        url: 'https://kite.foundation/claim' },
  { name: 'MMT Finance',      url: 'https://airdrop.mmt.finance/' },
  { name: 'Printr',           url: 'https://app.printr.money/airdrop-checker' },
  { name: 'Ika',              url: 'https://claim.ika.xyz/' },
  { name: 'Noble',            url: 'https://points.noble.xyz/claim' },
  { name: 'Monad',            url: 'https://claim.monad.xyz/' },
  { name: 'Aster S2',         url: 'https://asterdex.com/en/airdrop/allocation' },
  { name: 'Novastro',         url: 'https://airdrop.novastro.xyz/' },
  { name: 'Tea',              url: 'https://app.tea-fi.com/eligibility' },
  { name: 'Common',           url: 'https://common.xyz/wallet/{addr}' },
  { name: 'Orochi',           url: 'https://tge.orochi.network/' },
  { name: 'aPriori',          url: 'https://claim.apr.io/ethereum' },
  { name: 'Cygnus',           url: 'https://airdrop.cygnus.finance/' },
  { name: 'Limitless',        url: 'https://limitless.exchange/claim' },
  { name: 'Babylon',          url: 'https://airdrop.babylon.foundation/' },
  { name: 'PlayAI',           url: 'https://hub.playai.network/claim' },
  { name: 'Turtle',           url: 'https://claims.turtle.xyz/' },
  { name: 'Phi',              url: 'https://claim.phi.box/' },
  { name: 'Meteora',          url: 'https://met.meteora.ag/' },
  { name: '0G',               url: 'https://airdrop.0gfoundation.ai/' },
  { name: 'GRVT',             url: 'https://grvt.io/exchange/reward-portal?season=1' },
  { name: 'Yei Finance',      url: 'https://claim.yei.finance/' },
  { name: 'Enso',             url: 'https://drop.enso.build/claim' },
  { name: 'Lab',              url: 'https://lab.pro/wallet-connect' },
  { name: 'Caldera',          url: 'https://claim.caldera.foundation/' },
  { name: 'Netrun',           url: 'https://app.netrun.xyz/airdrop' },
  { name: 'SpiceNet',         url: 'https://portal.spicenet.io' },
  { name: 'Re',               url: 'https://app.re.xyz/re' },
  { name: 'Ethereal',         url: 'https://app.sablier.com/airdrops' },
  { name: 'Collector Crypt',  url: 'https://claim.collectorcrypt.com' },
  { name: 'Sign',             url: 'https://claim.tokentable.xyz/airdrop' },
  { name: 'o1 Exchange',      url: 'https://o1.exchange/base/airdrop' },
];

function resolveUrl(template: string, addr: string) {
  return addr ? template.replace('{addr}', addr) : template.replace('/{addr}', '').replace('?address={addr}', '').replace('{addr}', '');
}

const CHAIN_ICONS: Record<string, string> = {
  Ethereum: '⟠', Arbitrum: 'Arb', Base: 'Base', Optimism: 'OP', Polygon: 'POL', 'BNB Chain': 'BNB', zkSync: 'ZK', Linea: 'LNA', Solana: '◎',
};

function WalletCheckerInner() {
  const searchParams = useSearchParams();
  const [input, setInput] = useState(searchParams.get('wallet') || '');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CheckResult | null>(null);
  const [error, setError] = useState('');
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'eligible' | 'missed' | 'active'>('eligible');
  const [showTrialModal, setShowTrialModal] = useState(false);
  const [trialEmail, setTrialEmail] = useState('');
  const [trialLoading, setTrialLoading] = useState(false);
  const [trialError, setTrialError] = useState('');
  const [hasTrial, setHasTrial] = useState(false);

  useEffect(() => {
    setHasTrial(localStorage.getItem('trial_activated') === '1');
  }, []);

  useEffect(() => {
    const wallet = searchParams.get('wallet');
    const success = searchParams.get('success');
    if (success === 'true' && wallet) {
      setInput(wallet);
      setTimeout(() => runCheck(wallet), 500);
    } else if (wallet) {
      runCheck(wallet);
    }
  }, []);

  async function runCheck(addr?: string, withTrial?: boolean) {
    const address = (addr || input).trim();
    if (!address) return;
    setLoading(true); setError(''); setResult(null);
    try {
      const trial = withTrial ?? (localStorage.getItem('trial_activated') === '1');
      const url = `/api/wallet-check?address=${encodeURIComponent(address)}${trial ? '&trial=1' : ''}`;
      const res = await fetch(url);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Check failed');
      setResult(data);
    } catch (e: any) {
      setError(e.message || 'Something went wrong.');
    } finally { setLoading(false); }
  }

  async function activateTrial() {
    if (!trialEmail.includes('@')) { setTrialError('Enter a valid email'); return; }
    setTrialLoading(true); setTrialError('');
    try {
      await fetch('/api/activate-trial', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trialEmail }),
      });
      localStorage.setItem('trial_activated', '1');
      setHasTrial(true);
      setShowTrialModal(false);
      // Re-run the check with trial access
      runCheck(input.trim(), true);
    } catch {
      setTrialError('Something went wrong. Try again.');
    } finally { setTrialLoading(false); }
  }

  async function handleCheckout() {
    if (!result) return;
    setCheckoutLoading(true);
    try {
      const res = await fetch('/api/create-crypto-checkout', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ wallet: result.summary.address }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else throw new Error(data.error || 'Payment failed');
    } catch (e: any) { setError(e.message); }
    finally { setCheckoutLoading(false); }
  }

  const checkedAddress = result?.summary?.address ?? '';
  const noActivity    = (result?.summary as any)?.noActivity ?? false;
  const eligibleCount    = result?.isPro ? result.stats!.eligibleCount : result?.preview?.eligibleCount ?? 0;
  const missedCount      = result?.isPro ? result.stats!.missedCount   : result?.preview?.missedCount   ?? 0;
  const activeCount      = result?.isPro ? result.stats!.activeCount   : result?.preview?.activeCount   ?? 0;
  const estimatedValue   = result?.preview?.estimatedValue ?? 0;
  const fmtValue         = estimatedValue >= 1000 ? `$${(estimatedValue / 1000).toFixed(1)}K` : `$${estimatedValue}`;
  const tabData       = result?.isPro ? (activeTab === 'eligible' ? result.results!.eligible : activeTab === 'missed' ? result.results!.missed : result.results!.active) : [];

  return (
    <div style={{ background: '#060A12', minHeight: '100vh', color: '#fff', fontFamily: "var(--font-space),'Space Grotesk',system-ui,sans-serif" }}>
      <style>{`
        .wc * { box-sizing: border-box; }
        .wc-wrap { max-width: 900px; margin: 0 auto; padding: 0 22px; }
        .wc-wrap-wide { max-width: 1200px; margin: 0 auto; padding: 0 22px; }
        .wc-input { width: 100%; background: transparent; border: none; color: #fff; font-size: 14px; outline: none; font-family: monospace; height: 52px; }
        .wc-input::placeholder { color: rgba(255,255,255,0.18); font-family: var(--font-space),system-ui; font-size: 13px; }
        .wc-btn { background: linear-gradient(135deg,#7CF5C0,#4ade80); color: #060A12; border: none; padding: 0 26px; height: 44px; border-radius: 10px; font-size: 13px; font-weight: 800; cursor: pointer; font-family: inherit; white-space: nowrap; transition: transform 0.15s, box-shadow 0.15s; box-shadow: 0 4px 20px rgba(124,245,192,0.2); flex-shrink: 0; }
        .wc-btn:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 8px 28px rgba(124,245,192,0.32); }
        .wc-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .wc-card { background: #0D1221; border: 1px solid rgba(255,255,255,0.07); border-radius: 18px; }
        .wc-tab { background: transparent; border: 1px solid rgba(255,255,255,0.08); border-radius: 99px; padding: 6px 16px; cursor: pointer; font-family: inherit; font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.3); transition: all 0.15s; display: inline-flex; align-items: center; gap: 7px; }
        .wc-tab.g { background: rgba(124,245,192,0.07); border-color: rgba(124,245,192,0.22); color: #7CF5C0; }
        .wc-tab.r { background: rgba(248,113,113,0.07); border-color: rgba(248,113,113,0.22); color: #f87171; }
        .wc-tab.p { background: rgba(99,102,241,0.07);  border-color: rgba(99,102,241,0.22);  color: #818cf8; }
        .wc-cnt { font-size: 10px; padding: 1px 7px; border-radius: 99px; font-weight: 800; }
        .wc-unlock-btn { background: linear-gradient(135deg,#7CF5C0,#4ade80); color: #060A12; border: none; padding: 18px 40px; border-radius: 14px; font-size: 16px; font-weight: 900; cursor: pointer; font-family: inherit; transition: transform 0.15s, box-shadow 0.15s; box-shadow: 0 8px 32px rgba(124,245,192,0.3); letter-spacing: -0.02em; }
        .wc-unlock-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 14px 44px rgba(124,245,192,0.42); }
        .wc-unlock-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .mc-card {
          display: flex; flex-direction: column; gap: 10px;
          background: #0D1221; border: 1px solid rgba(255,255,255,0.07);
          border-radius: 13px; padding: 14px 14px 12px;
          text-decoration: none; transition: border-color 0.15s, transform 0.12s;
        }
        .mc-card:hover { border-color: rgba(124,245,192,0.22); transform: translateY(-1px); }
        .mc-card:hover .mc-btn { background: rgba(124,245,192,0.12); color: #7CF5C0; }
        .mc-avatar {
          width: 34px; height: 34px; border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; font-weight: 900; flex-shrink: 0;
        }
        .mc-name { font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.75); letter-spacing: -0.01em; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .mc-btn {
          display: flex; align-items: center; justify-content: center; gap: 5px;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.4); font-size: 10px; font-weight: 700;
          padding: 6px 0; border-radius: 7px; letter-spacing: 0.03em;
          text-transform: uppercase; transition: all 0.15s;
        }
        @media (max-width: 600px) { .mc-grid { grid-template-columns: repeat(2,1fr) !important; } }
        .skeleton { background: linear-gradient(90deg,rgba(255,255,255,0.04) 25%,rgba(255,255,255,0.07) 50%,rgba(255,255,255,0.04) 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite; border-radius: 8px; }
        @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
        @media (max-width: 600px) { .wc-summary-row { flex-direction: column !important; } .wc-stat-row { flex-direction: row !important; flex-wrap: wrap; } }
      `}</style>

      <div className="wc">

        {/* ── HERO ── */}
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingTop: 56, paddingBottom: 56 }}>
          <div className="wc-wrap">

            <nav style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', marginBottom: 32, display: 'flex', gap: 8, alignItems: 'center', fontWeight: 500 }}>
              <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
              <span>›</span><span>Wallet Checker</span>
            </nav>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 22 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(124,245,192,0.06)', border: '1px solid rgba(124,245,192,0.16)', color: '#7CF5C0', fontSize: 10, fontWeight: 800, padding: '5px 14px', borderRadius: 99, letterSpacing: '0.09em', textTransform: 'uppercase' }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#7CF5C0', boxShadow: '0 0 6px rgba(124,245,192,0.8)' }} />
                Multi-chain · 9 Networks
              </span>
            </div>

            {/* Free trial badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.25)', borderRadius: 20, padding: '6px 14px', marginBottom: 18 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#fbbf24', boxShadow: '0 0 6px rgba(251,191,36,0.8)', flexShrink: 0 }} />
              <span style={{ fontSize: 12, fontWeight: 800, color: '#fbbf24' }}>30-Day Free Trial — Full access until July 26</span>
            </div>

            <h1 style={{ fontSize: 'clamp(30px,5.5vw,52px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.08, marginBottom: 14 }}>
              Did you miss any<br />
              <span style={{ background: 'linear-gradient(135deg,#7CF5C0,#4ade80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>crypto airdrops?</span>
            </h1>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.35)', lineHeight: 1.8, maxWidth: 480, marginBottom: 36 }}>
              Scan any EVM or Solana wallet against our database of 125+ verified airdrops. See what you qualified for, what you missed, and what you can still claim. Full report free until July 26.
            </p>

            {/* Input */}
            <div style={{ background: '#0D1221', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '16px 20px' }}>
              <div style={{ fontSize: 9, fontWeight: 800, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10 }}>Wallet Address</div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '4px 4px 4px 16px' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2" style={{ flexShrink: 0 }}><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-4 0v2"/></svg>
                <input className="wc-input" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && runCheck()} placeholder="0x... or Solana address" spellCheck={false} />
                <button className="wc-btn" onClick={() => runCheck()} disabled={loading || !input.trim()}>
                  {loading ? 'Scanning…' : 'Check Wallet'}
                </button>
              </div>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.12)', marginTop: 10, letterSpacing: '0.01em' }}>
                Ethereum · Arbitrum · Base · Optimism · Polygon · BNB Chain · zkSync · Linea · Solana
              </p>
            </div>

            {error && (
              <div style={{ marginTop: 14, background: 'rgba(248,113,113,0.06)', border: '1px solid rgba(248,113,113,0.18)', borderRadius: 12, padding: '12px 18px', color: '#f87171', fontSize: 13, display: 'flex', alignItems: 'center', gap: 9 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                {error}
              </div>
            )}
          </div>
        </div>

        {/* ── LOADING ── */}
        {loading && (
          <div className="wc-wrap" style={{ paddingTop: 48, paddingBottom: 48 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 20 }}>
              {[1,2,3].map(i => <div key={i} className="skeleton" style={{ height: 80, borderRadius: 14 }} />)}
            </div>
            {[1,2,3,4,5].map(i => <div key={i} className="skeleton" style={{ height: 62, borderRadius: 13, marginBottom: 9 }} />)}
          </div>
        )}

        {/* ── RESULTS ── */}
        {result && !loading && (<>
          <div className="wc-wrap" style={{ paddingTop: 48, paddingBottom: 48 }}>

            {/* Summary card */}
            <div className="wc-card" style={{ padding: '28px 28px', marginBottom: 20 }}>
              <div className="wc-summary-row" style={{ display: 'flex', gap: 28, alignItems: 'flex-start' }}>

                <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <ScoreRing score={result.summary.score} />
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 13, fontWeight: 700, fontFamily: 'monospace', color: '#fff' }}>
                      {result.summary.address.slice(0,10)}…{result.summary.address.slice(-8)}
                    </span>
                    <span style={{ fontSize: 9, fontWeight: 800, color: '#7CF5C0', background: 'rgba(124,245,192,0.08)', border: '1px solid rgba(124,245,192,0.18)', padding: '2px 9px', borderRadius: 99, letterSpacing: '0.07em' }}>
                      {result.summary.addressType}
                    </span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 16 }}>
                    {[
                      { l: 'Wallet Age',   v: result.summary.walletAge || 'New' },
                      { l: 'Total TXs',    v: result.summary.totalTxs > 0 ? result.summary.totalTxs.toLocaleString() : '0' },
                      { l: 'First Active', v: result.summary.firstActivity || '—' },
                    ].map(({ l, v }) => (
                      <div key={l} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 11, padding: '12px 14px' }}>
                        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.22)', textTransform: 'uppercase', letterSpacing: '0.09em', fontWeight: 700, marginBottom: 5 }}>{l}</div>
                        <div style={{ fontSize: 16, fontWeight: 900, color: '#fff', letterSpacing: '-0.03em' }}>{v}</div>
                      </div>
                    ))}
                  </div>

                  {result.summary.activeChains.length > 0 && (
                    <div>
                      <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.22)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: 8 }}>Active Chains</div>
                      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                        {result.summary.activeChains.map(c => (
                          <span key={c} style={{ fontSize: 11, fontWeight: 600, color: '#7CF5C0', background: 'rgba(124,245,192,0.07)', border: '1px solid rgba(124,245,192,0.15)', padding: '3px 11px', borderRadius: 99 }}>{c}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* ── PRO: full results ── */}
            {result.isPro && (
              <>
                {/* Trial banner */}
                {result.isTrial && (
                  <div style={{ background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.25)', borderRadius: 12, padding: '12px 18px', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontSize: 16 }}>🎁</span>
                    <div>
                      <span style={{ fontSize: 13, fontWeight: 800, color: '#fbbf24' }}>30-Day Free Trial Active</span>
                      <span style={{ fontSize: 12, color: '#64748b', marginLeft: 8 }}>Full access until July 26, 2026 — no payment needed</span>
                    </div>
                  </div>
                )}
                <div style={{ background: 'rgba(124,245,192,0.04)', border: '1px solid rgba(124,245,192,0.14)', borderRadius: 14, padding: '16px 20px', marginBottom: 20 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="#7CF5C0"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    <span style={{ fontSize: 13, fontWeight: 800, color: '#7CF5C0' }}>{result.isTrial ? 'Full Report — Free Trial' : 'Pro Report Unlocked'}</span>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', marginLeft: 'auto' }}>{result.stats!.totalChecked} airdrops scanned</span>
                  </div>
                  <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                    {[
                      { label: 'Eligible', val: result.stats!.eligibleCount, color: '#7CF5C0', desc: 'You qualify — check official site to claim' },
                      { label: 'Missed',   val: result.stats!.missedCount,   color: '#f87171', desc: 'Ended before you could claim' },
                      { label: 'Can Join', val: result.stats!.activeCount,   color: '#818cf8', desc: 'Live now — start farming these' },
                    ].map(s => (
                      <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ fontSize: 20, fontWeight: 900, color: s.color, letterSpacing: '-0.04em' }}>{s.val}</span>
                        <div>
                          <div style={{ fontSize: 11, fontWeight: 700, color: s.color }}>{s.label}</div>
                          <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>{s.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
                  {[
                    { key: 'eligible', cls: 'g', label: 'Eligible',  count: result.stats!.eligibleCount, cntColor: '#7CF5C0', cntBg: 'rgba(124,245,192,0.15)' },
                    { key: 'missed',   cls: 'r', label: 'Missed',    count: result.stats!.missedCount,   cntColor: '#f87171', cntBg: 'rgba(248,113,113,0.15)' },
                    { key: 'active',   cls: 'p', label: 'Can Join',  count: result.stats!.activeCount,   cntColor: '#818cf8', cntBg: 'rgba(99,102,241,0.15)'  },
                  ].map(t => (
                    <button key={t.key} className={`wc-tab${activeTab === t.key ? ` ${t.cls}` : ''}`} onClick={() => setActiveTab(t.key as any)}>
                      {t.label}
                      <span className="wc-cnt" style={{ background: activeTab === t.key ? t.cntBg : 'rgba(255,255,255,0.05)', color: activeTab === t.key ? t.cntColor : 'rgba(255,255,255,0.25)' }}>{t.count}</span>
                    </button>
                  ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {tabData.length > 0
                    ? tabData.map(a => <AirdropRow key={a.slug} a={a} />)
                    : <div style={{ textAlign: 'center', padding: '40px 0', color: 'rgba(255,255,255,0.2)', fontSize: 13 }}>No {activeTab} airdrops found for your chains.</div>
                  }
                </div>

                {activeTab === 'missed' && result.stats!.missedCount > 0 && (
                  <div style={{ background: 'rgba(248,113,113,0.04)', border: '1px solid rgba(248,113,113,0.12)', borderRadius: 14, padding: '22px 24px', marginTop: 20 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#f87171', marginBottom: 6 }}>You missed {result.stats!.missedCount} airdrops</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', lineHeight: 1.7, marginBottom: 16 }}>Don't miss the next one. Join our Telegram for real-time airdrop alerts.</div>
                    <a href="https://t.me/web33alamiy" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(124,245,192,0.07)', border: '1px solid rgba(124,245,192,0.18)', color: '#7CF5C0', fontSize: 12, fontWeight: 700, padding: '10px 18px', borderRadius: 10, textDecoration: 'none' }}>
                      Join Telegram Alerts →
                    </a>
                  </div>
                )}
              </>
            )}

            {/* ── No activity found ── */}
            {noActivity && (
              <div style={{ background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.18)', borderRadius: 16, padding: '28px 28px', marginBottom: 16, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" style={{ flexShrink: 0, marginTop: 2 }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#f59e0b', marginBottom: 6 }}>No on-chain activity found</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.7 }}>
                    This wallet has no transactions on Ethereum, Arbitrum, Base, Optimism, Polygon, BNB Chain, zkSync, Linea, or Solana. Try a different wallet address, or make sure you copied it correctly.
                  </div>
                </div>
              </div>
            )}

            {/* ── FREE: hard paywall (no results shown) ── */}
            {!result.isPro && !noActivity && (
              <div>
                {/* Teaser stat row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 24 }}>
                  {[
                    { val: eligibleCount, label: 'Eligible Airdrops',  color: '#7CF5C0', icon: '✓' },
                    { val: missedCount,   label: 'Missed Airdrops',    color: '#f87171', icon: '✗' },
                    { val: activeCount,   label: 'Can Still Claim',    color: '#818cf8', icon: '→' },
                  ].map(({ val, label, color, icon }) => (
                    <div key={label} style={{ background: '#0D1221', border: `1px solid ${color}20`, borderRadius: 16, padding: '22px 18px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                      <div style={{ position: 'absolute', top: -20, right: -20, width: 80, height: 80, background: `radial-gradient(circle,${color}12 0%,transparent 70%)`, pointerEvents: 'none' }} />
                      <div style={{ fontSize: 36, fontWeight: 900, color, letterSpacing: '-0.05em', lineHeight: 1, marginBottom: 6 }}>{val}</div>
                      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.09em' }}>{label}</div>
                    </div>
                  ))}
                </div>

                {/* Preview: real rows (visible) + blurred rows (locked) */}
                <div style={{ position: 'relative', marginBottom: 8 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                    {/* Real visible rows */}
                    {(result.preview?.items ?? []).map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, background: `${item.color}08`, border: `1px solid ${item.color}25`, borderRadius: 13, padding: '13px 18px' }}>
                        <img src={`https://logo.clearbit.com/${item.logo}`} onError={(e) => { (e.target as HTMLImageElement).style.display='none' }} alt={item.name} style={{ width: 36, height: 36, borderRadius: 9, objectFit: 'cover', flexShrink: 0, background: '#1a2540' }} />
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{item.name}</div>
                          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 2 }}>{item.blockchain}</div>
                        </div>
                        <span style={{ fontSize: 10, fontWeight: 800, color: item.color, background: `${item.color}15`, border: `1px solid ${item.color}30`, padding: '3px 10px', borderRadius: 99, flexShrink: 0 }}>{item.tag}</span>
                      </div>
                    ))}
                    {/* Blurred locked rows */}
                    {[
                      { color: '#7CF5C0', label: 'Eligible' },
                      { color: '#f87171', label: 'Missed'   },
                      { color: '#818cf8', label: 'Can Join' },
                      { color: '#7CF5C0', label: 'Eligible' },
                    ].map((row, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, background: `${row.color}08`, border: `1px solid ${row.color}15`, borderRadius: 13, padding: '13px 18px', filter: 'blur(5px)', userSelect: 'none', pointerEvents: 'none' }}>
                        <div style={{ width: 36, height: 36, borderRadius: 9, background: '#1a2540', flexShrink: 0 }} />
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                          <div style={{ width: `${45 + (i * 7) % 30}%`, height: 11, background: 'rgba(255,255,255,0.08)', borderRadius: 4 }} />
                          <div style={{ width: `${28 + (i * 5) % 20}%`, height: 8, background: 'rgba(255,255,255,0.05)', borderRadius: 4 }} />
                        </div>
                        <span style={{ fontSize: 10, fontWeight: 800, color: row.color, background: `${row.color}15`, border: `1px solid ${row.color}25`, padding: '3px 10px', borderRadius: 99, flexShrink: 0 }}>{row.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Gradient fade over blurred rows */}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 35%, #060A12 72%)', pointerEvents: 'none', borderRadius: 13 }} />
                </div>

                {/* Paywall box */}
                <div style={{ background: '#0D1221', border: '1px solid rgba(124,245,192,0.18)', borderRadius: 20, padding: '44px 36px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)', width: 360, height: 180, background: 'radial-gradient(ellipse,rgba(124,245,192,0.08) 0%,transparent 70%)', pointerEvents: 'none' }} />

                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', color: 'rgba(255,255,255,0.35)', fontSize: 10, fontWeight: 800, padding: '5px 14px', borderRadius: 99, letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: 20 }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    Pro Required
                  </div>

                  {estimatedValue > 0 && (
                    <div style={{ display: 'inline-block', background: 'rgba(124,245,192,0.08)', border: '1px solid rgba(124,245,192,0.2)', borderRadius: 10, padding: '8px 18px', marginBottom: 16 }}>
                      <span style={{ fontSize: 13, fontWeight: 800, color: '#7CF5C0', letterSpacing: '-0.01em' }}>
                        ~{fmtValue} in unclaimed airdrops detected
                      </span>
                    </div>
                  )}
                  <h2 style={{ fontSize: 'clamp(22px,4vw,32px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', marginBottom: 8, lineHeight: 1.2 }}>
                    Your wallet qualifies for <span style={{ color: '#7CF5C0' }}>{eligibleCount} airdrop{eligibleCount !== 1 ? 's' : ''}</span>
                  </h2>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.3)', lineHeight: 1.75, marginBottom: 32, maxWidth: 380, margin: '0 auto 32px' }}>
                    You also missed {missedCount} and can still claim {activeCount} more. Unlock the full report to see every project, claim link, and step-by-step guide.
                  </p>

                  <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 28 }}>
                    {['Full eligibility report', 'Missed airdrop history', 'Live claimable drops', 'All 9 chains'].map(f => (
                      <span key={f} style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', gap: 6 }}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#7CF5C0" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Free trial CTA — email gated */}
                  <button
                    className="wc-unlock-btn"
                    onClick={() => setShowTrialModal(true)}
                    style={{ background: 'linear-gradient(135deg,#7CF5C0,#4ade80)', color: '#060A12', marginBottom: 12 }}
                  >
                    {estimatedValue > 0 ? `Get Free Access — See all ${fmtValue}` : 'Get Free Access — Unlock Full Report'}
                  </button>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', marginBottom: 16 }}>Enter your email to unlock — no payment needed</div>
                  <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 16 }} />
                  <button className="wc-unlock-btn" onClick={handleCheckout} disabled={checkoutLoading} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)', fontSize: 12, padding: '10px 24px' }}>
                    {checkoutLoading ? 'Redirecting…' : 'Skip — Unlock Pro for 5 USDC / month'}
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 20, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', gap: 5 }}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                      BTC · ETH · USDT · SOL accepted
                    </span>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', gap: 5 }}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                      No account · No KYC
                    </span>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', gap: 5 }}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                      Cancel any time
                    </span>
                  </div>

                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: 28, paddingTop: 20 }}>
                    <Link href="/pro" style={{ fontSize: 13, color: '#7CF5C0', textDecoration: 'none', fontWeight: 600 }}>
                      See everything that's included →
                    </Link>
                  </div>
                </div>
              </div>
            )}


          </div>{/* end wc-wrap */}

          {/* ── Manual Checker Links after results ── */}
          <div style={{ padding: '48px 28px 80px', maxWidth: 1280, margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 32 }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', marginBottom: 8 }}>Manual Checker Links</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>Additional airdrop checkers — click to verify eligibility on the official site</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 14 }}>
                {MANUAL_LINKS.map((link) => (
                  <a key={link.name} href={resolveUrl(link.url, checkedAddress)} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', flexDirection: 'column', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: '18px 18px 14px', textDecoration: 'none', color: '#fff', transition: 'border-color 0.15s, background 0.15s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.18)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.055)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'; }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={getFavicon(link.url)} alt={link.name} width={28} height={28}
                          style={{ width: 28, height: 28, objectFit: 'contain', borderRadius: 6 }}
                          onError={(e) => { const el = e.currentTarget; el.style.display = 'none'; const p = el.parentElement; if (p) { p.style.fontSize = '15px'; p.style.fontWeight = '800'; p.style.color = 'rgba(255,255,255,0.4)'; p.textContent = link.name[0]; } }}
                        />
                      </div>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 2 }}>{link.name}</div>
                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>External checker</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 8, padding: '9px 0', fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>
                      Check Eligibility
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>

        </>)}

        {/* ── EMPTY STATE ── */}
        {!result && !loading && !error && (
          <div className="wc-wrap" style={{ paddingTop: 64, paddingBottom: 100 }}>

            {/* How it works */}
            <div style={{ marginBottom: 52 }}>
              <div style={{ fontSize: 10, fontWeight: 800, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 28, textAlign: 'center' }}>How It Works</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 14 }}>
                {[
                  { n: '1', title: 'Paste wallet',     desc: 'Any EVM address or Solana wallet. No sign-up needed.' },
                  { n: '2', title: 'We scan 9 chains', desc: 'We query your on-chain history across all major networks simultaneously.' },
                  { n: '3', title: 'See your score',   desc: 'Get your free airdrop score + chain activity summary instantly.' },
                  { n: '4', title: 'Unlock full report', desc: 'Pay 5 USDC to see every eligible, missed, and live airdrop for your wallet.' },
                ].map(({ n, title, desc }) => (
                  <div key={n} className="wc-card" style={{ padding: '24px 20px' }}>
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(124,245,192,0.08)', border: '1px solid rgba(124,245,192,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 900, color: '#7CF5C0', marginBottom: 14 }}>{n}</div>
                    <div style={{ fontSize: 13, fontWeight: 800, color: '#fff', marginBottom: 7, letterSpacing: '-0.02em' }}>{title}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.28)', lineHeight: 1.7 }}>{desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* What Pro unlocks */}
            <div style={{ background: '#0D1221', border: '1px solid rgba(124,245,192,0.12)', borderRadius: 18, padding: '32px 28px', marginBottom: 40 }}>
              <div style={{ fontSize: 10, fontWeight: 800, color: '#7CF5C0', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 20 }}>Pro Unlocks</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 14 }}>
                {[
                  { t: 'Eligible Airdrops',    d: 'Every airdrop your wallet qualified for across all active chains.' },
                  { t: 'Missed Airdrop History', d: 'See exactly which drops you missed — so you never repeat the mistake.' },
                  { t: 'Live Claimable Drops',  d: 'Active airdrops you can still claim right now, filtered to your chains.' },
                  { t: 'Monthly Re-Scans',      d: 'Your wallet re-checked automatically as new drops launch.' },
                ].map(({ t, d }) => (
                  <div key={t} style={{ display: 'flex', gap: 12 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7CF5C0" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 2 }}><polyline points="20 6 9 17 4 12"/></svg>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{t}</div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.28)', lineHeight: 1.65 }}>{d}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: 24, paddingTop: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                <div>
                  <span style={{ fontSize: 24, fontWeight: 900, color: '#7CF5C0', letterSpacing: '-0.04em' }}>5 USDC</span>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', marginLeft: 8 }}>/ month · any crypto accepted</span>
                </div>
                <Link href="/pro" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(124,245,192,0.07)', border: '1px solid rgba(124,245,192,0.18)', color: '#7CF5C0', fontSize: 13, fontWeight: 700, padding: '10px 20px', borderRadius: 10, textDecoration: 'none' }}>
                  See all benefits →
                </Link>
              </div>
            </div>

            {/* ── Manual Checker Links (Watchoor style) ── */}
            <div style={{ marginBottom: 56, marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', paddingLeft: 'calc(50vw - 50% + 22px)', paddingRight: 'calc(50vw - 50% + 22px)' }}>
              <div style={{ textAlign: 'center', marginBottom: 32 }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', marginBottom: 8 }}>Manual Checker Links</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>Additional airdrop checkers — click to verify eligibility on the official site</div>
              </div>
              <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 14 }}>
                {MANUAL_LINKS.map((link) => (
                  <a key={link.name} href={resolveUrl(link.url, checkedAddress)} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', flexDirection: 'column', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: '18px 18px 14px', textDecoration: 'none', color: '#fff', transition: 'border-color 0.15s, background 0.15s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.18)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.055)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'; }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={getFavicon(link.url)} alt={link.name} width={28} height={28}
                          style={{ width: 28, height: 28, objectFit: 'contain', borderRadius: 6 }}
                          onError={(e) => { const el = e.currentTarget; el.style.display = 'none'; const p = el.parentElement; if (p) { p.style.fontSize = '15px'; p.style.fontWeight = '800'; p.style.color = 'rgba(255,255,255,0.4)'; p.textContent = link.name[0]; } }}
                        />
                      </div>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 2 }}>{link.name}</div>
                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>External checker</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 8, padding: '9px 0', fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>
                      Check Eligibility
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Past airdrops teaser */}
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div style={{ fontSize: 10, fontWeight: 800, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 16 }}>Recent Airdrops We Tracked</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
                {['Arbitrum $ARB', 'zkSync $ZK', 'Scroll $SCR', 'EigenLayer $EIGEN', 'Jito $JTO', 'Starknet $STRK'].map(name => (
                  <span key={name} style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.35)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', padding: '5px 13px', borderRadius: 99 }}>{name}</span>
                ))}
              </div>
            </div>


          </div>
        )}

      </div>

      {/* ── Email trial modal ── */}
      {showTrialModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }} onClick={() => setShowTrialModal(false)}>
          <div style={{ background: '#0D1221', border: '1px solid rgba(124,245,192,0.2)', borderRadius: 20, padding: '40px 36px', maxWidth: 420, width: '100%', textAlign: 'center', position: 'relative' }} onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowTrialModal(false)} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', color: 'rgba(255,255,255,0.3)', cursor: 'pointer', fontSize: 20, lineHeight: 1 }}>×</button>

            <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(124,245,192,0.08)', border: '1px solid rgba(124,245,192,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7CF5C0" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>

            <h3 style={{ fontSize: 22, fontWeight: 900, letterSpacing: '-0.03em', color: '#fff', marginBottom: 8 }}>Get your free full report</h3>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, marginBottom: 28 }}>
              Enter your email to unlock the full wallet report — every eligible airdrop, missed drop, and live claim link. Free, no payment needed.
            </p>

            <input
              type="email"
              placeholder="your@email.com"
              value={trialEmail}
              onChange={e => setTrialEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && activateTrial()}
              style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '14px 16px', color: '#fff', fontSize: 14, outline: 'none', marginBottom: 12, boxSizing: 'border-box' }}
            />

            {trialError && <div style={{ fontSize: 12, color: '#f87171', marginBottom: 10 }}>{trialError}</div>}

            <button
              onClick={activateTrial}
              disabled={trialLoading}
              style={{ width: '100%', background: 'linear-gradient(135deg,#7CF5C0,#4ade80)', color: '#060A12', border: 'none', borderRadius: 12, padding: '14px', fontSize: 14, fontWeight: 800, cursor: trialLoading ? 'wait' : 'pointer', letterSpacing: '-0.01em' }}
            >
              {trialLoading ? 'Activating…' : 'Unlock Free Report'}
            </button>

            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', marginTop: 14 }}>No spam. We send airdrop alerts only.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function WalletCheckerPage() {
  return (
    <Suspense fallback={<div style={{ background: '#060A12', minHeight: '100vh' }} />}>
      <WalletCheckerInner />
    </Suspense>
  );
}
