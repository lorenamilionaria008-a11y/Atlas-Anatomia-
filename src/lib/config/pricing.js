// ============================================================
//  CONFIGURACIÓN CENTRAL DE PRECIOS
//  Cambia aquí los precios. NUNCA escribas precios directo en el HTML.
// ============================================================

// Precio base de cada plan, en USD (referencia interna).
export const PLANS = {
  basico: {
    basePriceUSD: 5,      // precio de venta
    oldPriceUSD: 29,      // precio "antes" (tachado)
  },
  premium: {
    basePriceUSD: 15,
    oldPriceUSD: 49,
  },
};

// ------------------------------------------------------------
//  PRECIOS MANUALES POR PAÍS (tienen prioridad sobre la conversión)
//  Pon aquí EXACTAMENTE el valor que muestra el checkout de Hotmart
//  para cada país, así la página y el checkout siempre coinciden.
//  Si un país no aparece aquí, se usa la conversión automática.
//
// ------------------------------------------------------------
export const MANUAL_PRICES = {
  // Vacío = todos los países usan el tipo de cambio del día (se actualiza solo).
  // Si quieres fijar un precio exacto para un país, agrégalo así:
  // MX: { basico: { price: 89, old: 519 }, premium: { price: 269, old: 869 } },
};

// ------------------------------------------------------------
//  CONVERSIÓN AUTOMÁTICA (para países sin precio manual)
// ------------------------------------------------------------
export const CONVERSION = {
  enabled: true,
  // Tipo de cambio del día desde una API pública gratuita (sin clave).
  ratesEndpoint: null,
  publicFallback: 'https://open.er-api.com/v6/latest/USD',
  cacheHours: 12,          // cada cuánto se renuevan las tasas en el navegador
  // Redondeo "comercial": termina en 9 / 90 / 900 según la moneda.
  psychologicalRounding: true,
};

// Tasas de respaldo actualizadas el 11/10/2026 desde open.er-api.com.
// Se usan solo si la consulta de cambio en vivo falla. Los precios base siguen
// siendo USD 5 (Pack Básico) y USD 15 (Pack Completo).
export const STATIC_RATES = {
  MXN: 18.304854,
  COP: 3236.681829,
  CLP: 978.602338,
  PEN: 3.442249,
  ARS: 1515.8766,
  BRL: 5.010865,
  UYU: 40.053467,
  PYG: 5817.559533,
  BOB: 11.950434,
  CRC: 455.5843,
  GTQ: 7.632683,
  HNL: 26.81248,
  NIO: 36.755327,
  DOP: 60.523185,
};
