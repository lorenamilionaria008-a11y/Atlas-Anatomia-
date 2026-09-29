// ============================================================
//  PAÍSES Y MONEDAS
//  Para agregar un país: copia una línea y cambia código ISO,
//  moneda, locale, bandera y nombre. No hay que tocar nada más.
//  decimals: cuántos decimales se muestran en esa moneda.
// ============================================================
export const COUNTRIES = {
  MX: { name: 'México',               currency: 'MXN', locale: 'es-MX', flag: '🇲🇽', decimals: 0 },
  CO: { name: 'Colombia',             currency: 'COP', locale: 'es-CO', flag: '🇨🇴', decimals: 0 },
  CL: { name: 'Chile',                currency: 'CLP', locale: 'es-CL', flag: '🇨🇱', decimals: 0 },
  PE: { name: 'Perú',                 currency: 'PEN', locale: 'es-PE', flag: '🇵🇪', decimals: 0 },
  AR: { name: 'Argentina',            currency: 'ARS', locale: 'es-AR', flag: '🇦🇷', decimals: 0 },
  BR: { name: 'Brasil',               currency: 'BRL', locale: 'pt-BR', flag: '🇧🇷', decimals: 2 },
  UY: { name: 'Uruguay',              currency: 'UYU', locale: 'es-UY', flag: '🇺🇾', decimals: 0 },
  PY: { name: 'Paraguay',             currency: 'PYG', locale: 'es-PY', flag: '🇵🇾', decimals: 0 },
  BO: { name: 'Bolivia',              currency: 'BOB', locale: 'es-BO', flag: '🇧🇴', decimals: 0 },
  EC: { name: 'Ecuador',              currency: 'USD', locale: 'es-EC', flag: '🇪🇨', decimals: 2 },
  PA: { name: 'Panamá',               currency: 'USD', locale: 'es-PA', flag: '🇵🇦', decimals: 2 },
  CR: { name: 'Costa Rica',           currency: 'CRC', locale: 'es-CR', flag: '🇨🇷', decimals: 0 },
  GT: { name: 'Guatemala',            currency: 'GTQ', locale: 'es-GT', flag: '🇬🇹', decimals: 0 },
  HN: { name: 'Honduras',             currency: 'HNL', locale: 'es-HN', flag: '🇭🇳', decimals: 0 },
  NI: { name: 'Nicaragua',            currency: 'NIO', locale: 'es-NI', flag: '🇳🇮', decimals: 0 },
  DO: { name: 'República Dominicana', currency: 'DOP', locale: 'es-DO', flag: '🇩🇴', decimals: 0 },
};

// País "comodín" cuando no se detecta o no está configurado.
export const FALLBACK = { code: 'US', name: 'Otro país (USD)', currency: 'USD', locale: 'en-US', flag: '🌎', decimals: 2 };

export function getCountry(code) {
  if (code && COUNTRIES[code]) return { code, ...COUNTRIES[code] };
  return { ...FALLBACK };
}
