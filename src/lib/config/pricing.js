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

// Tasas de respaldo (28/09/2026, open.er-api.com) por si todas las APIs fallan.
// Solo se usan para mostrar algo coherente; el checkout define el precio final.
export const STATIC_RATES = {
  MXN: 17.7355, COP: 3334.28, CLP: 962.26, PEN: 3.3929, ARS: 1523.97,
  BRL: 5.1895, UYU: 40.063, PYG: 5923.87, BOB: 12.2333, CRC: 452.98,
  GTQ: 7.6347, HNL: 26.831, NIO: 36.795, DOP: 59.459,
};
