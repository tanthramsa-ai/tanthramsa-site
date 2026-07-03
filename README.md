# LendersHub marketing site

The public marketing site for LendersHub, the lending operations platform
built by Tanthramsa. Single-page site — the nav (Home, Features, Pricing,
Contact) scrolls to sections on the same page rather than loading separate
pages, covering the product pitch, feature breakdown, subscription tiers,
and a demo-request contact form.

## Tech stack

- **Plain HTML/CSS/JS** — no framework, no build step, no dependencies —
  everything lives in a single `index.html`
- **Fonts** — [Inter](https://fonts.google.com/specimen/Inter) for body and
  headings, [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono)
  for ledger-style data (prices, tags, tickers)
- **Styling** — a single `css/style.css` design-token stylesheet (CSS custom
  properties for color/type/spacing), no CSS framework
- **Interactivity** — `js/main.js` handles the footer year, the ledger
  ticker, the mobile nav toggle, the pricing monthly/yearly switch, and a
  scroll-spy that highlights the active nav link as you scroll
- **Hosting** — deploys as a static site (e.g. Vercel), independent of the
  LendersHub application itself
