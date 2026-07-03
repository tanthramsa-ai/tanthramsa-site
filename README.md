# LendersHub marketing site

A static 4-page site (Home, Features, Pricing, Contact) — plain HTML/CSS/JS,
no build step, deploys to Vercel as-is.

## 1. Before you deploy — quick edits

- **Contact form**: open `contact.html`, find `FORM_ENDPOINT` near the
  bottom of the file, and replace `YOUR_FORM_ID` with a real form ID from
  [formspree.io](https://formspree.io) (free tier is fine — sign up, create
  a form, point it at your email). Until you do this the form will show a
  friendly "not connected yet" message instead of failing silently.
- **Emails**: replace `sales@lendershub.example` and
  `support@lendershub.example` in `contact.html` with your real addresses.
- **App link**: the "Sign in" link in the footer of every page points to
  `https://app.yourdomain.com` — replace `yourdomain.com` with your actual
  domain once you know it (see subdomain setup below).
- **Pricing**: the numbers on `pricing.html` are placeholders — swap in
  your real tiers before launch.

## 2. Deploy to Vercel

1. Push this folder to a GitHub repo (or drag-and-drop the folder into the
   Vercel dashboard under "Add New → Project").
2. In Vercel, "Add New Project" → import the repo.
3. Framework preset: choose **Other** (it's a static site, no build command
   needed). Leave the output/root directory as the project root.
4. Click **Deploy**. You'll get a live `*.vercel.app` URL immediately.

## 3. Connect your GoDaddy domain

**In Vercel:**
1. Open your project → **Settings → Domains**.
2. Add your root domain (e.g. `lendershub.com`) and `www.lendershub.com`.
   Vercel will show you the DNS records it needs — typically:
   - An `A` record for the root domain pointing to `76.76.21.21`
   - A `CNAME` record for `www` pointing to `cname.vercel-dns.com`

**In GoDaddy:**
1. Go to **My Products → DNS** for your domain.
2. Add/edit the records Vercel gave you (delete GoDaddy's default parked
   A record first if one exists).
3. DNS changes usually propagate within minutes to a few hours.

Vercel auto-issues an SSL certificate once the domain resolves — no extra
steps needed.

## 4. Point the app subdomain at your application

Since your application (the actual product, not this marketing site) will
live on a subdomain like `app.lendershub.com`:

1. Deploy the application as its **own Vercel project** (separate from this
   marketing site).
2. In that project's **Settings → Domains**, add `app.lendershub.com`.
3. Vercel will give you a `CNAME` record for `app` → `cname.vercel-dns.com`.
4. Add that `CNAME` record in GoDaddy DNS the same way as above.

This keeps the marketing site (`lendershub.com`) and the product
(`app.lendershub.com`) as two independent Vercel deployments sharing one
domain — you can update and redeploy either without touching the other.

## 5. Local preview

No build tools required. Either:
- Open `index.html` directly in a browser, or
- Run a tiny local server so relative paths behave exactly like production:
  ```
  npx serve .
  ```
