# kaspergissel.dk

Personal portfolio built with Next.js App Router + TypeScript + Tailwind and exported as a fully static site for Cloudflare Pages.

## Runtime constraints (static export)

- `output: 'export'` and `trailingSlash: true` are enabled in `next.config.ts`.
- No API routes, server actions, middleware, dynamic server rendering, database, or auth.
- Deploy artifact is generated in `/out`.

## Query filtering spec (projects)

Project filtering uses query params on both `/projects` and `/projects/:category`:

- `tag`: optional, must be a known tag from `src/data/tags.ts`.
- `year`: optional, must be a valid completion year from project data (`completedAt`).
- `sort`: optional, allowed values are `newest` or `oldest`.

Validation and fallback rules:

- Invalid or unknown values are ignored.
- Default state is `sort=newest` with no explicit `sort` param in URL.
- Canonical/clean URLs are the base path without query params.
- Unknown categories route to `notFound()`.

## Local development

Requires Node 20.

```bash
npm install
npm run dev
```

## Build (static export)

```bash
npm run build
```

Static output is written to `out/`.

## Cloudflare Pages settings

- Build command: `npm run build`
- Build output directory: `out`
- Node version: `20`