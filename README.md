# Keval Hirpara — Portfolio

Personal portfolio of **Keval Hirpara**, full-stack developer in Bengaluru and Tech – Operations Manager at Human Archive (YC W26).

Minimal, editorial design with light/dark themes. Sections:

| Route | Contents |
| --- | --- |
| `/` | Hero, about & skills, project index, case studies, playground, contact |
| `/case-studies/[slug]` | Case studies: Auros, Atelier, YouTube Script Agent, AURELIA |
| `/playground` | Interactive experiments: dot field, sort visualizer, BFS pathfinder, kinetic type |

## Stack

Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript · lucide-react · Vercel Analytics

## Getting started

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
pnpm typecheck  # tsc --noEmit
```

## Editing content

All copy lives in **`lib/portfolio.ts`**: profile, links, skills, experience, projects, case studies, and playground entries. Add a project there and it appears in the index; add a case study with a matching `slug` and it gets its own page automatically.

Theme colors and fonts are CSS variables at the top of `app/globals.css`.

## Contact form

Set `NEXT_PUBLIC_WEB3FORMS_KEY` (free key from [web3forms.com](https://web3forms.com)) to deliver messages to your inbox. Without it, the form opens the visitor's email app with the message pre-filled. See `.env.example`.

## Deploying to Vercel

1. Import this repository at [vercel.com/new](https://vercel.com/new) — Next.js is detected automatically, no settings needed.
2. Name the project `keval-hirpara` to get **keval-hirpara.vercel.app** (if that name is free; otherwise rename it later under **Settings → Domains**).
3. Optionally add `NEXT_PUBLIC_WEB3FORMS_KEY` under **Settings → Environment Variables** and redeploy.
