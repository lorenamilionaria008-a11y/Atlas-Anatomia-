// ============================================================
//  LOCALIZATION PROVIDER
//  Detecta el país UNA sola vez, guarda el estado global y avisa
//  a todos los componentes de precio cuando cambia.
//  Prioridad: 1) elección manual  2) país detectado  3) USD
// ============================================================
import { getCountry } from './config/countries.js';

const MANUAL_KEY = 'lp_country_manual';   // localStorage (persiste)
const DETECT_KEY = 'lp_country_detected'; // sessionStorage (por sesión)

// Servicios de geolocalización por IP (sin GPS, sin permisos).
// Servicios públicos gratuitos (si el primero falla, se usa el segundo).
const GEO_SOURCES = [
  { url: 'https://api.country.is/',     pick: (d) => d.country,      timeout: 1200 },
  { url: 'https://ipapi.co/json/',      pick: (d) => d.country_code, timeout: 1200 },
];

const state = { detected: null, manual: null, country: null, ready: false };
const listeners = new Set();

function safeGet(store, k) { try { return store.getItem(k); } catch { return null; } }
function safeSet(store, k, v) { try { store.setItem(k, v); } catch {} }

async function detectCountry() {
  const cached = safeGet(sessionStorage, DETECT_KEY);
  if (cached) return cached === 'XX' ? null : cached;
  for (const src of GEO_SOURCES) {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), src.timeout);
    try {
      const r = await fetch(src.url, { signal: ctrl.signal, cache: 'no-store' });
      if (!r.ok) continue;
      const code = (src.pick(await r.json()) || '').toUpperCase();
      if (/^[A-Z]{2}$/.test(code) && code !== 'XX') {
        safeSet(sessionStorage, DETECT_KEY, code);
        return code;
      }
    } catch { /* probar siguiente fuente */ }
    finally { clearTimeout(t); }
  }
  safeSet(sessionStorage, DETECT_KEY, 'XX');
  return null;
}

function emit() { listeners.forEach((fn) => fn(state)); }

export const Localization = {
  get state() { return state; },
  subscribe(fn) { listeners.add(fn); if (state.ready) fn(state); return () => listeners.delete(fn); },

  async init() {
    state.manual = safeGet(localStorage, MANUAL_KEY);
    // Si hay elección manual, no hace falta esperar a la red para mostrar precios.
    const detectPromise = detectCountry().then((c) => { state.detected = c; });
    if (!state.manual) await detectPromise;
    state.country = getCountry(state.manual || state.detected);
    state.ready = true;
    emit();
    // Cuando termine la detección en segundo plano, solo actualiza el dato para analytics.
    detectPromise.then(() => emit());
  },

  setCountry(code) {
    state.manual = code;
    safeSet(localStorage, MANUAL_KEY, code);
    state.country = getCountry(code);
    emit();
  },
};
