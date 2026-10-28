# ImplementPrototypeUI-svelte

SvelteKit 3 + Svelte 5 (runes) + Tailwind CSS v4 + TypeScript 6 strict reimplementation of the React/Vite prototype in `../ImplementPrototypeUI` (same folder name, sibling). Static SPA: `@sveltejs/adapter-static` with `fallback: 'index.html'`, `ssr = false`, `prerender = false` (see `src/routes/+layout.ts`).

This app is self-contained: it has its own `package.json` and `bun.lock` in `web/` (the repo's root workspace entries for `backend`/`frontend` no longer exist).

## Commands

Bun-only repo (no pnpm/npm). Run `bun install` from `web/`. Requires **Bun >= 1.4.2** — Bun 1.3.9 has a `worker_threads` race (postMessage followed by `process.exit` in a worker drops the parent's exit event; [oven-sh/bun#14144](https://github.com/oven-sh/bun/issues/14144)) that makes `vite build` exit 0 silently in the middle of the pipeline (no `manifest.js`, stale `build/`).

- `bun run dev` — dev server (default port 5173)
- `bun run build` — production build to `build/` (verify the log ends with `Wrote site to "build"` + `✔ done`)
- `bun run preview` — serve `build/` (SPA fallback works for every route)
- `bun run check` — `svelte-kit sync` + `svelte-check` (must stay 0 errors / 0 warnings)
- `bun run db:push` — `drizzle-kit push` against Turso (reads `TURSO_*` from `.env`)
- `bun run lint` / `bun run format` — Prettier check / write (required before finishing)

`bunfig.toml` sets `[run] bun = true`, so scripts and CLIs run under the Bun runtime instead of Node shebangs.

## Configuration (SvelteKit 3)

- **No `svelte.config.ts`** — kit 3 rejects it (`kit/config_file_unsupported`). Config is inline in `vite.config.ts` via `sveltekit({ compilerOptions, adapter })`.
- **`tsconfig.json` extends `"$app/tsconfig"`** (kit 3's preset: `paths: {}`, `types`, `noEmit`, `allowImportingTsExtensions`). Do not set `paths` for aliases. `compilerOptions.types` **replaces** the inherited array, so it must list both: `["$app/types", "bun"]` (the `bun` entry gives `bun:sqlite` / `Bun` global types to `src/lib/backend`).
- **Env vars live in `src/env.ts`** (`defineEnvVars` from `@sveltejs/kit/env`) and are read as `$app/env/private` — kit 3 removed `$env/dynamic/private`. Bun does not forward its auto-loaded `.env` to child processes (`vite`), so `process.env` is not reliable inside the dev/build server; `drizzle.config.ts` is the exception (drizzle-kit loads `.env` itself).
- **Path aliases live in `package.json` `imports`** (Node subpath imports, no `kit.alias`):
  - `#lib` → `./src/lib/index.ts`; `#lib/*` → `./src/lib/*`
  - `#backend/modules/*` → `./src/lib/backend/modules/*`
  - `#backend/database/*` → `./src/lib/backend/modules/database/*` (folds the old `@database/*` alias in)
  - `#db` → `./src/lib/server/db/index.ts`; `#db/*` → `./src/lib/server/db/*` (Drizzle/Turso; better-auth reads it)
- Import specifiers **must include the file extension** (`.ts`, `.svelte`) — TS 6 resolves subpath imports only with an explicit extension; directory imports need `/index.ts`. `rewriteRelativeImportExtensions` must stay off (it makes TS2877 an error on non-relative `.ts` imports).

## Project structure

- `src/routes/+layout.svelte` — wraps the app in `.commerce-app`
- `src/routes/layout.css` — Tailwind import, Geist/Inter/Roboto `@font-face`, responsive overrides keyed on `data-name` (35 rules) and two `data-node-id`s. Do not delete `data-name` attributes from markup while these rules exist.
- `src/routes/<path>/+page.svelte` — one route per prototype screen (24 files; `/products` switches 4 catalog variants on `?view` / `?sidebar` / `?banner` query params, mirroring `getRoute` in the React `App.tsx`)
- `src/lib/frontend/pages/` — `ProductGridBanner|ProductGridSidebar|ProductListBanner|ProductListSidebar.svelte` used by `/products`
- `src/lib/frontend/components/` — `SiteHeader.svelte` (home header variant, used on every page; props: `announcementCount`), `SiteFooter.svelte` (prop `features` — true only on home, `/products/phone`, `/products/shirt`), `MegaMenu.svelte`, `AccountSidebar.svelte` (only `/components` showcase)
- `src/lib/frontend/components/ui/` — `Plus`, `Minus`, `Radio`, `Rating`, `Avatar`, `InputNumber`, `Pagination`
- `src/lib/frontend/shellAssets.ts` — header/footer asset paths
- `src/lib/frontend/modules/landing/` — landing-page sections (`HeroSection`, `BrandsSection`, …)
- `src/lib/backend/` — better-auth config + hand-rolled `bun:sqlite` app tables (type-checked by `bun run check`)
- `src/lib/server/db/` — Drizzle + Turso/libsql client and schema (better-auth tables; env comes from `src/env.ts` via `$app/env/private`); `bun run db:push` syncs it
- `tools/convert.mjs` — JSX → Svelte converter (full-page and `--snippet` modes); strips `data-node-id`, keeps `data-name`, strips embedded `Header`/`Footer` sections
- `tools/rewire.mjs` — CLI to wire real handlers: `button` / `buttonall` (div → `<button onclick={() => goto(path)}>`), `span`, `p`, `row` (nav rows → `<a>`), `tab` (`data-name="Tab item|0N"` → `<a>`)
- `static/assets/` — 406 SVGs (+ PNG paths referenced as in the original, some intentionally missing/broken like the React app)

## Conventions

- **Imports**: use `#lib/...` for app frontend code (e.g. `#lib/frontend/components/SiteHeader.svelte`), `#backend/...` for backend code, and `#db` for the Drizzle instance. `src/lib/server/**` is SvelteKit's server-only guard. No `#lib`, `@backend`, or `@database` specifiers remain.
- Idiomatic interactivity: real `<a href>` / `<button onclick>` (+ `goto` from `$app/navigation` for JS navigation). No global click delegation (the React app's `handlePageClick` label table in `App.tsx:1881-1942` is the acceptance checklist for what is wired, and which accidental skips are intentional: headings, radio option labels, stepper step labels in ReturnsRefunds, "Save changes" on checkout).
- Every page renders `<SiteHeader />` right after its root div and `<SiteFooter />` (possibly `features`) right before the root close.
- `data-node-id` is stripped everywhere except two elements on `/products/phone` (`I1:21686;31919:11168/11169`) which `layout.css` still needs for the mobile PDP layout.
- Prettier formats everything; keep double quotes where the source has apostrophes.

## Verification

`bun run check` (0/0), `bun run lint`, `bun run build` (log must end with `✔ done` — a silent mid-pipeline exit means Bun is < 1.4.2), then `bun run preview` and smoke-test all routes (all must return 200 via the SPA fallback; `/account` and `/checkout` are intentionally 404 — they have no `+page.svelte`, only subroutes). Compare interaction wiring against the React app on port 8443 (`../ImplementPrototypeUI`).

Auth endpoints (`/api/auth/*`, served by better-auth through `src/hooks.server.ts`) only exist under `bun run dev`: the static adapter ships no server runtime, so `bun run preview` serves the SPA shell only and production auth requires switching to `adapter-node` (follow-up).
