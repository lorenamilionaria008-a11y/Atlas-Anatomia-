// ============================================================
//  LINKS DE CHECKOUT (HOTMART)
//  Pega aquí tus links. Si usas un solo checkout internacional,
//  llena solo "default" en cada plan.
//  Si luego tienes un link distinto por país, agrégalo con su código ISO.
// ============================================================
export const CHECKOUT_LINKS = {
  basico: {
    default: 'https://pay.hotmart.com/TU_CODIGO_BASICO',
    // MX: 'https://pay.hotmart.com/...',
  },
  premium: {
    default: 'https://pay.hotmart.com/TU_CODIGO_PREMIUM',
    // MX: 'https://pay.hotmart.com/...',
  },
};

// Parámetros de la URL de la página que se reenvían al checkout
// (UTMs de tus anuncios, para que Hotmart atribuya las ventas).
export const FORWARD_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'src', 'sck', 'fbclid'];

export function getCheckoutUrl(plan, countryCode) {
  const links = CHECKOUT_LINKS[plan] || {};
  const base = links[countryCode] || links.default || '#';
  if (base === '#') return base;
  try {
    const url = new URL(base);
    const here = new URLSearchParams(window.location.search);
    FORWARD_PARAMS.forEach((k) => {
      if (here.has(k) && !url.searchParams.has(k)) url.searchParams.set(k, here.get(k));
    });
    // "sck" le dice a Hotmart de qué país vino la venta (para tus reportes).
    if (!url.searchParams.has('sck') && countryCode) url.searchParams.set('sck', `lp_${countryCode}`);
    return url.toString();
  } catch {
    return base;
  }
}
