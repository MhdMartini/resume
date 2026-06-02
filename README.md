# Mohamed Martini — Portfolio

A fast, static portfolio for [leverai.tech](https://leverai.tech) — built with [Astro](https://astro.build).
Swiss-editorial design, light/dark themes, zero client framework (just a little vanilla JS for scroll
reveals, metric count-up, and the theme toggle).

## Stack

- **Astro 5** — static output, ships almost no JavaScript
- Scoped component CSS + design tokens (`src/styles/global.css`) — no Tailwind/runtime CSS
- Fonts: Clash Display / Cabinet Grotesk / Satoshi (Fontshare) + JetBrains Mono (Google)
- `@astrojs/sitemap` for SEO

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
npm run preview    # serve the production build
```

## Editing content

**All copy lives in [`src/data/site.ts`](src/data/site.ts)** — profile, links, hero metrics, the
project list (with `shipped` / `progress` / `rnd` status badges), experience timeline, education, and
skills. The components are content-agnostic, so edit that one file to update the site.

Other assets:

- `public/resume.pdf` — the downloadable résumé (replace this file to update it)
- `public/og.png` — social-share / link-preview image (1200×630)
- `public/logo.png` — favicon
- `public/CNAME` — custom domain (`leverai.tech`)

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with Astro and deploys to
GitHub Pages. **One-time setup:** in the repo's **Settings → Pages**, set **Source = GitHub Actions**.

### Pointing leverai.tech here

`leverai.tech` is currently the custom domain of another GitHub Pages site (the `leverai/leverai`
repo). A domain can only be attached to one Pages site at a time, so to serve this site at the apex:

1. In **`leverai/leverai` → Settings → Pages**, clear its **Custom domain** field and Save (and
   optionally delete the `public/CNAME` _file_ in that repo so its next deploy doesn't re-claim the
   domain) so it releases `leverai.tech`.
2. In **this repo → Settings → Pages**, set **Source = GitHub Actions**, then set
   **Custom domain = `leverai.tech`** and enable **Enforce HTTPS**. (The `public/CNAME` _file_ here
   already pins it.)

> **Do not change your DNS.** The whole handoff is in GitHub repo settings — no registrar changes.
> Both the old and new sites are GitHub Pages, which routes by domain name regardless of which
> repo/account owns it, so your existing apex `A` records and `www` record keep working as-is.
> Note: the repo file named `CNAME` (`public/CNAME`) is **not** a DNS record — it's a GitHub Pages
> marker that just contains the domain name. Leave your DNS CNAME record at your provider alone.
