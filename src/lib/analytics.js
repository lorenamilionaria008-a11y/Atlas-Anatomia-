// ============================================================
// ANALYTICS + META
// ============================================================
import { trackMeta } from './meta.js';

export function track(event, params = {}) {
  const payload = { event, ...params };
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
    if (typeof window.gtag === 'function') window.gtag('event', event, params);
    if (typeof window.fbq === 'function') window.fbq('trackCustom', event, params);
  } catch { /* nunca romper la página por analytics */ }

  // Eventos estándar de Meta para atribución y Conversions API.
  if (event === 'pricing_localized') trackMeta('ViewContent', { content_name: 'Atlas de Anatomía Humana', content_category: 'digital_product', currency: params.currency, value: Number(params.displayed_price) || 0 });
  if (event === 'checkout_click') trackMeta('InitiateCheckout', { content_name: params.plan === 'premium' ? 'Pack Completo' : 'Pack Básico', content_category: 'digital_product', currency: params.currency });

  if (window.location.search.includes('debug_pricing')) console.log('[pricing]', payload);
}
