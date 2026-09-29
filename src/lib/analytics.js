// ============================================================
//  ANALYTICS
//  Envía los datos de localización a dataLayer (Google Tag Manager),
//  gtag (GA4) y al Pixel de Meta si están instalados en la página.
// ============================================================
export function track(event, params) {
  const payload = { event, ...params };
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
    if (typeof window.gtag === 'function') window.gtag('event', event, params);
    if (typeof window.fbq === 'function') window.fbq('trackCustom', event, params);
  } catch { /* nunca romper la página por analytics */ }
  if (window.location.search.includes('debug_pricing')) console.log('[pricing]', payload);
}
