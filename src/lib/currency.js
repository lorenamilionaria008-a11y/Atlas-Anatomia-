// ============================================================
//  FORMATO DE MONEDA + CONVERSIÓN + CÁLCULO DE PRECIOS
// ============================================================
import { PLANS, MANUAL_PRICES, CONVERSION, STATIC_RATES } from './config/pricing.js';

const RATES_KEY = 'lp_rates_v1';
let ratesPromise = null;

// ---------- Formato ----------
const fmtCache = new Map();
export function formatMoney(amount, country) {
  // Valores enteros sin ",00" (US$ 10 en vez de US$ 10.00).
  if (country.decimals && Number.isInteger(amount)) country = { ...country, decimals: 0 };
  const key = `${country.locale}|${country.currency}|${country.decimals}`;
  if (!fmtCache.has(key)) {
    fmtCache.set(key, new Intl.NumberFormat(country.locale, {
      style: 'currency',
      currency: country.currency,
      currencyDisplay: 'symbol',
      minimumFractionDigits: country.decimals,
      maximumFractionDigits: country.decimals,
    }));
  }
  let out = fmtCache.get(key).format(amount);
  // Aclarar monedas que usan "$" solo, para que no se confundan con USD.
  if (country.currency === 'USD') out = out.replace(/^(US)?\$\s?/, 'US$ ');
  else if (/^\$/.test(out.trim()) && !out.includes(country.currency)) {
    if (country.currency === 'MXN') out = out.replace(/^\$\s?/, 'MX$ ');
    else out = `${out} ${country.currency}`;
  }
  return out.replace(/ /g, ' ');
}

// ---------- Tasas de cambio (con caché) ----------
function readCachedRates() {
  try {
    const raw = localStorage.getItem(RATES_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (Date.now() - data.ts > CONVERSION.cacheHours * 3600 * 1000) return null;
    return data.rates;
  } catch { return null; }
}

async function fetchJSON(url, ms = 2500) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try {
    const r = await fetch(url, { signal: ctrl.signal });
    if (!r.ok) throw new Error(r.status);
    return await r.json();
  } finally { clearTimeout(t); }
}

export function loadRates() {
  if (ratesPromise) return ratesPromise;
  ratesPromise = (async () => {
    const cached = readCachedRates();
    if (cached) return cached;
    for (const url of [CONVERSION.ratesEndpoint, CONVERSION.publicFallback]) {
      if (!url) continue;
      try {
        const data = await fetchJSON(url);
        const rates = data.rates || data.conversion_rates;
        if (rates && rates.MXN) {
          try { localStorage.setItem(RATES_KEY, JSON.stringify({ ts: Date.now(), rates })); } catch {}
          return rates;
        }
      } catch { /* sigue con el siguiente */ }
    }
    return { ...STATIC_RATES };
  })();
  return ratesPromise;
}

// ---------- Redondeo comercial ----------
function roundPsych(value, decimals) {
  if (!CONVERSION.psychologicalRounding) return decimals ? Math.round(value * 100) / 100 : Math.round(value);
  if (decimals) return Math.max(0.99, Math.ceil(value) - 0.1);        // 9.90, 14.90…
  if (value < 100) return Math.ceil(value);                             // 35, 52
  const mag = Math.pow(10, Math.floor(Math.log10(value)) - 1);         // 177 → 179 · 33 069 → 33 900
  return Math.ceil(value / mag) * mag - (mag >= 10 ? mag / 10 : 1);
}

// ---------- Cálculo del precio de un plan ----------
// Devuelve { price, old, currency, source }
export async function resolvePlanPrice(plan, country) {
  const base = PLANS[plan];
  const manual = MANUAL_PRICES[country.code] && MANUAL_PRICES[country.code][plan];
  if (manual && manual.price > 0) {
    return { price: manual.price, old: manual.old || null, source: 'manual_local_price' };
  }
  if (country.currency === 'USD' || !CONVERSION.enabled) {
    return { price: base.basePriceUSD, old: base.oldPriceUSD, source: 'default_usd', usd: true };
  }
  const rates = await loadRates();
  const rate = rates[country.currency];
  if (!rate) {
    return { price: base.basePriceUSD, old: base.oldPriceUSD, source: 'default_usd', usd: true };
  }
  return {
    price: roundPsych(base.basePriceUSD * rate, country.decimals),
    old: roundPsych(base.oldPriceUSD * rate, country.decimals),
    source: 'currency_conversion',
  };
}
