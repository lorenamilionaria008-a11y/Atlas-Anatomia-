# Atlas de Anatomía Humana — página de vendas (versão Lovable)

Projeto React + Vite + Tailwind, pronto para importar no Lovable pelo GitHub.

## O que editar

| O quê | Arquivo |
|---|---|
| Links do checkout da Hotmart | `src/lib/config/checkout.js` |
| Preço em dólar de cada plano (US$ 5 e US$ 15) | `src/lib/config/pricing.js` → `PLANS` |
| Preço fixo de algum país (opcional) | `src/lib/config/pricing.js` → `MANUAL_PRICES` |
| Países e moedas | `src/lib/config/countries.js` |
| Texto da barra vermelha | `src/lib/config/offer.js` |
| Textos e seções da página | `src/App.tsx` |
| Visual (cores, tamanhos, animações) | `src/index.css` |
| Imagens | `public/assets/img/` |

Os preços nunca ficam escritos no `App.tsx`: cada lugar tem `data-price="basico"` ou `data-price="premium"`, e o sistema em `src/lib/` preenche de acordo com o país do visitante (detectado pelo IP) e a cotação do dólar do dia.

## Rodar no computador (opcional)

```
npm install
npm run dev
```
