// ============================================================
//  COMPONENTE DE PRECIO REUTILIZABLE
//  En el HTML solo se marca QUÉ precio va en cada lugar:
//
//   <span data-price="premium" data-kind="price"></span>   → precio actual
//   <span data-price="premium" data-kind="old"></span>     → precio tachado
//   <span data-price="premium" data-kind="savings"></span> → cuánto ahorra
//   <span data-price="premium" data-kind="percent"></span> → % de descuento
//   <span data-price="premium" data-kind="diff" data-vs="basico"></span>
//                                  → diferencia entre dos planes
//   <a data-checkout="premium">…</a>                       → link de Hotmart
//
//  Así nunca hay un número fijo en el HTML y toda la página
//  cambia de moneda al mismo tiempo.
// ============================================================
import { Localization } from './localization.js';
import { resolvePlanPrice, formatMoney } from './currency.js';
import { PLANS } from './config/pricing.js';
import { getCheckoutUrl } from './config/checkout.js';
import { FALLBACK } from './config/countries.js';
import { track } from './analytics.js';

let lastRender = 0;

async function render(state) {
  const ticket = ++lastRender;
  const country = state.country;
  const plans = Object.keys(PLANS);
  const resolved = {};
  for (const p of plans) resolved[p] = await resolvePlanPrice(p, country);
  if (ticket !== lastRender) return; // llegó otro cambio mientras calculaba

  const fmt = (v, r) => formatMoney(Math.round(v * 100) / 100, r.usd ? FALLBACK : country);

  document.querySelectorAll('[data-price]').forEach((el) => {
    const r = resolved[el.dataset.price];
    if (!r) return;
    const kind = el.dataset.kind || 'price';
    let text = '';
    if (kind === 'price') text = fmt(r.price, r);
    else if (kind === 'old') text = r.old ? fmt(r.old, r) : '';
    else if (kind === 'savings') text = r.old ? fmt(r.old - r.price, r) : '';
    else if (kind === 'percent') text = r.old ? `${Math.round((1 - r.price / r.old) * 100)}%` : '';
    else if (kind === 'diff') {
      const other = resolved[el.dataset.vs];
      text = other ? fmt(Math.max(0, r.price - other.price), r) : '';
    }
    if (el.hasAttribute('data-split') && text) {
      // "MX$ 179" → <span class=cur>MX$</span>179 · "$ 32.900 COP" → …<span class=suf>COP</span>
      const m = text.match(/^([^\d]*?)\s*([\d.,\u00a0\u202f ]*\d)\s*(.*)$/);
      el.textContent = '';
      if (m) {
        if (m[1]) { const c = document.createElement('span'); c.className = 'cur'; c.textContent = m[1]; el.append(c); }
        el.append(m[2]);
        if (m[3]) { const c = document.createElement('span'); c.className = 'suf'; c.textContent = m[3]; el.append(c); }
      } else el.textContent = text;
    } else el.textContent = text;
    el.hidden = !text;
  });

  document.querySelectorAll('[data-checkout]').forEach((a) => {
    a.href = getCheckoutUrl(a.dataset.checkout, country.code);
  });

  document.documentElement.classList.remove('pricing-pending');
  document.documentElement.dataset.currency = country.currency;

  track('pricing_localized', {
    detected_country: state.detected || 'unknown',
    selected_country: state.manual || state.detected || 'fallback',
    currency: resolved.premium.usd ? 'USD' : country.currency,
    displayed_price: resolved.premium.price,
    displayed_price_basico: resolved.basico.price,
    base_price_usd: PLANS.premium.basePriceUSD,
    pricing_source: resolved.premium.source,
  });
}

export function initPrices() {
  Localization.subscribe(render);
  // Guardar país y precio al hacer clic en comprar (conversión por país).
  document.addEventListener('click', (e) => {
    const a = e.target.closest('[data-checkout]');
    if (!a) return;
    const s = Localization.state;
    track('checkout_click', {
      plan: a.dataset.checkout,
      detected_country: s.detected || 'unknown',
      selected_country: s.manual || s.detected || 'fallback',
      currency: s.country ? s.country.currency : 'USD',
    });
  });
}
