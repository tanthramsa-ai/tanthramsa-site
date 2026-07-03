# LendersHub marketing site

The public marketing site for LendersHub, the lending operations platform
built by Tanthramsa. Static 4-page site — Home, Features, Pricing, Contact —
covering the product pitch, feature breakdown, subscription tiers, and a
demo-request contact form.

## Tech stack

- **Plain HTML/CSS/JS** — no framework, no build step, no dependencies
- **Fonts** — [Inter](https://fonts.google.com/specimen/Inter) for body and
  headings, [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono)
  for ledger-style data (prices, tags, tickers)
- **Styling** — a single `css/style.css` design-token stylesheet (CSS custom
  properties for color/type/spacing), no CSS framework
- **Interactivity** — `js/main.js` handles the footer year, the ledger
  ticker, the mobile nav toggle, and the pricing monthly/yearly switch
- **Hosting** — deploys as a static site (e.g. Vercel), independent of the
  LendersHub application itself
