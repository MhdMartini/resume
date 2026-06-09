# Resume / portfolio repo — working notes

Public Astro site for **leverai.tech** (deploys to GitHub Pages on push to `main`).
This repo is **public** — never commit or deploy anything private.

## Layout

- `src/data/site.ts` — all website content (Hero, Skills, Experience, Projects, Recognition, Certifications, Testimonials). Edit here to change the site; the components are content-agnostic.
- `public/resume.md` — **canonical resume source** (single source of truth). Tracked in git.
- `public/resume.pdf` — the downloadable résumé. Generated from `resume.md` manually; regenerate after editing the markdown.
- `knowledge-base/` — **gitignored, private.** Job-search materials: past cover letters and tailored resume variants, used as context to draft new ones. Never move anything from here into `public/` (it would deploy to the live site) and never commit it.

## Editing the resume

The skills and experience live in **both** `public/resume.md` and `src/data/site.ts`. Update both together so the downloadable résumé and the website stay in sync, then regenerate `public/resume.pdf`.

## Cover letters

See `knowledge-base/cover-letters/CLAUDE.md` for voice, positioning, and format rules. Drafts go in that folder as `cover-<company>-<year>.md`.
