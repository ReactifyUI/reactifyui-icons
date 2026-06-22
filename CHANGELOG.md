# Changelog

All notable changes to **reactifyui-icons** are documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) and the [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) format.

---

## [1.1.0] — 2026-06-22

### ⚡ Performance

- **36% SVG path size reduction** — upgraded SVGO optimisation pipeline with additional plugins: `mergePaths`, `convertPathData`, `convertTransform`, `removeUselessDefs`, `removeEmptyAttrs`, `removeEmptyContainers`, `cleanupNumericValues` (2 decimal precision)
- **Package size: 3.9 MB → 2.8 MB** (28% smaller compressed tarball)
- All 1,696 icon components regenerated with optimised SVG paths — no visual changes

### 📖 Documentation

- Added JSDoc hover tooltips to all public API types and components
  - `IconProps` — every prop documented with types, defaults, and usage examples
  - `IconTheme` — all 30+ theme tokens with color values
  - `IconWeight` — stroke-width values per weight
  - `IconAnimation` / `IconAnimationType` — all 12 animation types with examples
  - `IconProvider` — full usage examples for presets, states, and global defaults
  - `DynamicIcon` — when to use vs static imports, fallback usage, full example
  - `IconPreset`, `IconContextValue`, `IconFlip`, `IconTranslate` — all documented

### 🌐 Docs Site

- Launched documentation website at `https://reactifyui.github.io/reactifyui-icons/`
- Searchable icon browser with 1,696 icons — click to copy import statement
- Full API reference, theme tokens, weights, animations, quick start examples
- Auto-deploys via GitHub Actions on push to `dev`

---

## [1.0.0] — 2024-06-21

> 🎉 First stable production release of ReactifyUI Icons.

### ✨ Added

#### Icon Library
- **1,696 production-ready SVG icons** across 60+ categories including arrows, navigation, layout, communication, media, commerce, and more
- Full outline and filled icon variants with consistent visual weight
- All icons normalized to `currentColor` for seamless color inheritance

#### Core Components
- **`IconBase`** — the single SVG rendering layer used by all icons; handles all visual, accessibility, and animation concerns in one place
- **`IconProvider`** — React context provider for setting global icon defaults (size, color, strokeWidth, theme, weight, animation) across an entire app
- **`DynamicIcon`** — runtime icon loader using `React.lazy` + `<Suspense>` for code-split icon rendering by name string

#### Theming System
- **30+ named theme tokens**: `default`, `light`, `dark`, `muted`, `subtle`, `inverted`, `primary`, `secondary`, `accent`, `brand`, `highlight`, `success`, `warning`, `danger`, `info`, `neutral`, `active`, `inactive`, `selected`, `disabled`, `hover`, `navbar`, `sidebar`, `toolbar`, `footer`, `overlay`, `calm`, `soft`, `bold`, `energetic`, `elegant`
- Each theme token maps to a color, optional opacity, and optional strokeWidth

#### Weight System
- **5 stroke-weight presets**: `thin` (0.75), `light` (1), `regular` (1.5), `bold` (2), `heavy` (2.5)
- Weights can be set globally via `IconProvider` or per-icon via the `weight` prop

#### Animation System
- **12 CSS keyframe animation types**: `spin`, `spinReverse`, `progress`, `pulse`, `ping`, `bounce`, `shake`, `wiggle`, `float`, `fade`, `slideUp`, `slideDown`
- Configurable `duration`, `delay`, `iterationCount`, and `timingFunction` per animation
- Keyframes injected once at runtime via `ensureIconAnimations()` — zero external CSS files required

#### Transform System
- Per-icon transform props: `rotate`, `flip` (`horizontal` | `vertical` | `both`), `scale`, `translate` (`x`, `y`)
- `transformOrigin` control
- All transforms composable and overridable via `IconProvider` context

#### Preset & State System
- Named **presets** definable in `IconProvider` and referenced per-icon with `preset="name"`
- Named **states** (`active`, `inactive`, `selected`, `disabled`, `hover`, `default`) with full preset overrides per state
- State presets override base presets; base presets override context defaults

#### Advanced SVG Control
- Full SVG stroke props: `strokeLinecap`, `strokeLinejoin`, `strokeMiterlimit`, `strokeDasharray`, `strokeDashoffset`, `strokeOpacity`, `vectorEffect`, `shapeRendering`
- Full SVG fill props: `fill`, `fillOpacity`, `fillRule`, `paintOrder`
- Explicit `stroke` prop on `IconBase` automatically propagates stroke to filled child shapes

#### Accessibility
- `decorative` prop — sets `aria-hidden` and removes `role="img"` for purely decorative icons
- `title` prop — injects `<title>` inside the SVG for screen readers
- `desc` prop — injects `<desc>` for extended descriptions
- Automatic `role="img"` when a `title` or `aria-label` is present

#### Build Pipeline & Tooling
- Automated SVG → React component generation via `scripts/generate-icons.js`
  - SVGO optimization (multipass, removes comments/metadata/dimensions)
  - Aggressive attribute normalization (strips `style`, `class`, `id`, `data-*`, presentation attributes)
  - Outlined icon fix: injects `fill="none"` on stroked shapes missing an explicit fill
  - SVGR converts normalized SVG to JSX; inner content is extracted and wrapped in `IconBase`
- `scripts/validate-icons.js` — pre-build safety validation for all raw SVGs
  - Checks: non-empty, valid `<svg>` root, required `viewBox`, at least one drawable element
  - Blocks: `<script>`, `<style>`, `<foreignObject>`, `<image>`, `<use>` tags
  - Blocks: event handler attributes (`onclick`, `onload`, etc.), `class`, `id`
  - Enforces lowercase + hyphenated filenames
- `scripts/generate-icons-index.js` — auto-generates `src/react/icons/index.ts` with all named exports
- `scripts/generate-lazy-map.js` — auto-generates `src/react/dynamicMap.ts` for `DynamicIcon`
- `scripts/generate-registry.js` — auto-generates `src/data/registry.json` icon metadata for docs/tooling

#### Package & Distribution
- Dual ESM + CJS output via **tsup**
- Full TypeScript declarations (`.d.ts`) for all exports
- Per-icon module output (`dist/icons/IconName.js`) enabling precise tree-shaking
- `"sideEffects": false` for full dead-code elimination support
- Named exports: `import { Home, ArrowLeft } from 'reactifyui-icons'`
- Dynamic entry: `import { DynamicIcon } from 'reactifyui-icons/dynamic'`
- Individual icon entry: `import HomeDefault from 'reactifyui-icons/icons/HomeDefault'`
- Icon registry entry: `import { registry, iconNames } from 'reactifyui-icons'`
- Peer dependencies: React 19+

---

### 🏗️ Internal

- Three-tier prop resolution order throughout: `icon prop → preset → IconProvider context → default`
- `iconConfig.ts` resolver functions (`resolveColor`, `resolveSize`, `resolveStrokeWidth`, `resolveTheme`, `resolveWeight`, `resolveAnimation`, `resolveTransform`, `resolvePreset`, `resolveStatePreset`, `resolveStrokeProps`, `resolveFillProps`)
- `normalizeSvgChildren.ts` for consistent SVG child rendering
- `helpers.ts` shared utilities (`toPx`, etc.)
- Husky + lint-staged pre-commit hooks
- Vitest + Testing Library test setup
- ESLint + Prettier enforced via CI
- Changesets for release management

---

### 📦 Package Info

| Field | Value |
|---|---|
| Package | `reactifyui-icons` |
| Version | `1.0.0` |
| License | MIT |
| React peer dep | `^19.2.1` |
| Bundle | ESM + CJS, tree-shakeable |
| Icons | 1,696 |

---

[1.0.0]: https://github.com/ReactifyUI/reactifyui-icons/releases/tag/v1.0.0
