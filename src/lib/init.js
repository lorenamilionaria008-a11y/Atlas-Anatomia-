// ============================================================
//  Arranque de la página: precios por país, selector de país,
//  preguntas frecuentes, carrusel, barra superior y contador.
// ============================================================
import { Localization } from './localization.js';
import { initPrices } from './price.js';
import { initCountrySelectors } from './country-selector.js';
import { OFFER } from './config/offer.js';
import { initMeta } from './meta.js';

let started = false;

export function initPage() {
  if (started) return; // evita doble arranque (React StrictMode)
  started = true;

  initMeta();
  initPrices();
  initCountrySelectors();
  Localization.init();

  // Preguntas frecuentes (abrir / cerrar)
  document.querySelectorAll('.faq-item button').forEach((b) => {
    b.addEventListener('click', () => {
      const item = b.closest('.faq-item');
      const open = item.classList.toggle('open');
      b.setAttribute('aria-expanded', String(open));
    });
  });

  // Carrusel infinito: duplica las páginas para que el movimiento no se corte.
  document.querySelectorAll('.m-track').forEach((t) => {
    [...t.children].forEach((img) => {
      const c = img.cloneNode();
      c.alt = '';
      c.setAttribute('aria-hidden', 'true');
      t.append(c);
    });
  });

  // Barra roja: texto + fecha definida por la oferta.
  const txt = document.getElementById('topbar-text');
  if (txt && OFFER.topbarText) txt.textContent = OFFER.topbarText;

  const d = document.getElementById('topbar-date');
  if (d && OFFER.topbarDate) d.textContent = OFFER.topbarDate;

  // Contador hasta la medianoche (hora del visitante). Reinicia cada día.
  const el = (id) => document.getElementById(id);
  const pad = (n) => String(n).padStart(2, '0');
  const tick = () => {
    const n = new Date();
    const midnight = new Date(n.getFullYear(), n.getMonth(), n.getDate() + 1).getTime();
    const s = Math.max(0, Math.floor((midnight - n.getTime()) / 1000));
    if (!el('cd-h')) return;
    el('cd-h').textContent = pad(Math.floor(s / 3600));
    el('cd-m').textContent = pad(Math.floor(s / 60) % 60);
    el('cd-s').textContent = pad(s % 60);
  };
  setInterval(tick, 1000);
  tick();

  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
}
