# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Bonkers-UI is a React component library (design system) used internally at bonkers.ie. It is published to npm as `bonkers-ui` and consumed by other projects. The source is developed in Storybook; the build output is a tree-shakeable ES module library.

## Commands

```bash
bun i                  # install with frozen lockfile
bun dev                # run Storybook at http://localhost:6006
bun build              # tsc + vite build → dist/
bun lint               # eslint --fix on src/**/*.{ts,tsx}
bun lint:style         # prettier check on src/**/*.{css,scss}
bun typecheck          # tsc --noEmit
bun pack               # build + postbuild + npm pack (local testing)
```

Publishing is automated via `publish.ts` (requires `NPM_AUTH_TOKEN`). CI runs linting on PRs targeting `develop` or `master`.

## Architecture

### Build output

Vite builds in **library mode** (ES only). Each component is a separate entry point (via glob over `src/components/*/*.{ts,tsx}`), so consumers get per-component code splitting and tree-shaking. CSS Modules per component are injected inline by `vite-plugin-lib-inject-css`. Type declarations are emitted by `vite-plugin-dts`.

`postbuild.ts` copies `package.json`, `bonkers.css`, `eslint.config.mjs`, `README.md`, and `LICENCE` into `dist/` before packing.

### Theming

All design tokens (spacing, colors, font sizes) are CSS custom properties defined in `bonkers.css` (imported via `@import "tailwindcss"` at the top). Tailwind v4 consumes these variables directly — there is no `tailwind.config.ts`. Consuming projects must add:

```css
@import 'bonkers-ui/theme';
@source "../node_modules/bonkers-ui";
```

### Component structure

Each component lives in `src/components/<ComponentName>/` with:
- `<ComponentName>.tsx` — main component
- `_types.ts` — enums and types exported alongside the component
- `<ComponentName>.module.css` — scoped CSS (if needed)
- `index.ts` — re-exports component + types
- `<ComponentName>.stories.tsx` — Storybook stories

`src/index.ts` barrel-exports everything for the `import ... from 'bonkers-ui'` path. Per-component imports use the `bonkers-ui/<ComponentName>` subpath export.

### Shared types

`src/_types/` contains library-wide enums used across components:
- `colors.ts` — `EColors` enum (CSS variable references like `--color-primary-600`)
- `sizing.ts` — `ESize` enum (named spacing tokens: `XS = "xs"`, `SM = "sm"`, etc.)
- `align.ts` — alignment enum

These are exported via the `bonkers-ui/types/*` subpath.

### Polymorphic pattern (UiButton)

`UiButton` uses a `tag` prop for polymorphic rendering (`<UiButton tag="a" href="...">`) via `PolymorphicProps<T extends React.ElementType>`. This is the pattern to follow for any component that should render as different HTML elements.

### Styling conventions

- Tailwind utility classes via `cx()` (classnames) for all dynamic styling
- Class maps (plain objects keyed by enum values) for variant → class lookups — see `typeClasses`, `sizeClasses` in `UiButton.tsx`
- `classnames` (`cx`) is used everywhere for conditional class merging
- No `!important` classes — enforced by ESLint (`better-tailwindcss/no-restricted-classes`)
- Tailwind classes must be single-class-per-line when wrapping (enforced at `printWidth: 140`)

### ESLint rules to be aware of

- Tabs for indentation (not spaces)
- Double quotes
- `object-curly-newline` requires each object property on its own line when ≥1 property
- `max-len: 120` (strings/templates/URLs exempt)
- `@typescript-eslint/no-explicit-any` is a warning, not an error

## Branch and commit conventions

- Base branch: `develop` (not `main`/`master`)
- Branch names: `feature/[name]` or `hotfix/[name]`
- Commit format: `update(filename): message`, `fix(filename): message`, `add(filename): message`
- Merge (not rebase) `develop` into feature branches before creating a PR
- Merge to `master` triggers a patch version bump and npm publish
