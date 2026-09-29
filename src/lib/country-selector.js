// ============================================================
//  SELECTOR DISCRETO DE PAÍS / MONEDA
//  <div data-country-selector></div> en cualquier lugar de la página.
// ============================================================
import { Localization } from './localization.js';
import { COUNTRIES, FALLBACK } from './config/countries.js';
import { track } from './analytics.js';

export function initCountrySelectors() {
  const opts = [
    ...Object.entries(COUNTRIES)
      .sort((a, b) => a[1].name.localeCompare(b[1].name, 'es'))
      .map(([code, c]) => ({ code, ...c })),
    { ...FALLBACK },
  ];

  document.querySelectorAll('[data-country-selector]').forEach((host) => {
    const label = document.createElement('label');
    label.className = 'country-selector';
    label.innerHTML = '<span class="cs-sr">País y moneda</span>';
    const select = document.createElement('select');
    select.setAttribute('aria-label', 'País y moneda');
    opts.forEach((c) => {
      const o = document.createElement('option');
      o.value = c.code;
      o.textContent = `${c.flag} ${c.name} · ${c.currency}`;
      select.appendChild(o);
    });
    select.addEventListener('change', () => {
      Localization.setCountry(select.value);
      track('country_manual_select', { selected_country: select.value, detected_country: Localization.state.detected || 'unknown' });
    });
    label.appendChild(select);
    host.appendChild(label);
    Localization.subscribe((s) => { select.value = s.country.code; });
  });
}
