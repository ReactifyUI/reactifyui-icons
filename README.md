<div align="center">

<img src="./Reactifyui-logo.png" alt="ReactifyUI Icons" width="110" />

<h1>ReactifyUI Icons</h1>

**Modern, beautiful & fully customizable React icon library**

1,696 icons · Tree-shakeable · TypeScript native · Zero CSS · MIT licensed

[![npm version](https://img.shields.io/npm/v/reactifyui-icons?color=4f46e5&label=npm)](https://www.npmjs.com/package/reactifyui-icons)
[![license](https://img.shields.io/badge/license-MIT-22c55e)](./LICENSE)
[![typescript](https://img.shields.io/badge/TypeScript-ready-3178c6)](https://www.typescriptlang.org/)
[![tree-shakeable](https://img.shields.io/badge/tree--shakeable-yes-f59e0b)](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking)

</div>

---

## Overview

ReactifyUI Icons is a production-grade React icon library with **1,696 SVG icons** across 60+ categories. Every icon is a standalone, tree-shakeable React component — your bundler only includes the icons you actually import. Styling is controlled entirely through props with no external CSS required.

Built for modern apps, design systems, dashboards, and SaaS products.

---

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [All Props](#all-props)
- [IconProvider — Global Defaults](#iconprovider--global-defaults)
- [Themes](#themes)
- [Weights](#weights)
- [Animations](#animations)
- [Transforms](#transforms)
- [Presets & States](#presets--states)
- [DynamicIcon — Runtime Loading](#dynamicicon--runtime-loading)
- [Accessibility](#accessibility)
- [Tree Shaking](#tree-shaking)
- [TypeScript](#typescript)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

```bash
npm install reactifyui-icons
# or
yarn add reactifyui-icons
# or
pnpm add reactifyui-icons
```

**Peer dependencies** — React 19+ is required:

```bash
npm install react react-dom
```

---

## Quick Start

```tsx
import { Home, Search, ArrowLeft } from 'reactifyui-icons'

export default function App() {
  return (
    <nav>
      <Home size={24} color="#4f46e5" />
      <Search size={20} weight="bold" />
      <ArrowLeft size={24} theme="muted" />
    </nav>
  )
}
```

That's it. No setup, no stylesheet, no configuration needed.

---

## All Props

Every icon in the library accepts the same set of props.

### Size & Color

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `number \| string` | `24` | Width and height of the icon |
| `color` | `string` | `currentColor` | Icon color — any valid CSS color |
| `strokeWidth` | `number` | `1.5` | SVG stroke width |

```tsx
<Home size={32} color="#4f46e5" strokeWidth={2} />
```

### Design System

| Prop | Type | Default | Description |
|---|---|---|---|
| `theme` | `IconTheme` | `"default"` | Named theme token (see [Themes](#themes)) |
| `weight` | `IconWeight` | `"regular"` | Stroke weight preset (see [Weights](#weights)) |
| `preset` | `string` | — | Named preset defined in `IconProvider` |
| `state` | `IconState` | `"default"` | State preset (`active`, `disabled`, etc.) |

```tsx
<Home theme="primary" weight="bold" />
```

### Transforms

| Prop | Type | Default | Description |
|---|---|---|---|
| `rotate` | `number` | `0` | Rotation in degrees |
| `flip` | `"horizontal" \| "vertical" \| "both"` | — | Mirror the icon |
| `scale` | `number` | `1` | Scale factor |
| `translate` | `{ x?: number, y?: number }` | — | Offset in px |
| `transformOrigin` | `string` | `"center"` | CSS transform origin |

```tsx
<ArrowLeft rotate={180} />         // now points right
<Home flip="horizontal" />
<Search scale={1.2} />
```

### Animation

| Prop | Type | Description |
|---|---|---|
| `animate` | `IconAnimation` | Animation config object (see [Animations](#animations)) |

### Accessibility

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | — | Injects `<title>` inside the SVG for screen readers |
| `desc` | `string` | — | Injects `<desc>` for extended description |
| `decorative` | `boolean` | `true` | When `true`, sets `aria-hidden` and removes `role="img"` |

### SVG Pass-through

All standard `SVGAttributes` are supported — `className`, `style`, `onClick`, `strokeLinecap`, `strokeLinejoin`, `fill`, `fillOpacity`, and more. Anything you'd put on an `<svg>` element works here.

---

## IconProvider — Global Defaults

Wrap your app (or a section of it) with `IconProvider` to set defaults for all icons inside. Per-icon props always override the provider.

```tsx
import { IconProvider } from 'reactifyui-icons'

<IconProvider value={{ size: 20, theme: 'sidebar', strokeWidth: 1.5 }}>
  {/* All icons inside use these defaults */}
  <App />
</IconProvider>
```

### All provider options

```tsx
<IconProvider
  value={{
    size: 24,
    color: '#111827',
    strokeWidth: 1.5,
    theme: 'default',
    weight: 'regular',
    rotate: 0,
    flip: undefined,
    scale: 1,
    translate: { x: 0, y: 0 },
    animate: undefined,
    presets: { ... },
    states: { ... },
  }}
>
  <App />
</IconProvider>
```

---

## Themes

Themes are named design tokens that set color, opacity, and optionally strokeWidth in one prop.

```tsx
<Home theme="primary" />
<AlertCircle theme="danger" />
<Bell theme="muted" />
```

### Available themes

| Category | Themes |
|---|---|
| Core | `default` `light` `dark` `muted` `subtle` `inverted` |
| Brand | `primary` `secondary` `accent` `brand` `highlight` |
| Semantic | `success` `warning` `danger` `info` `neutral` |
| Action | `active` `inactive` `selected` `disabled` `hover` |
| Context | `navbar` `sidebar` `toolbar` `footer` `overlay` |
| Personality | `calm` `soft` `bold` `energetic` `elegant` |

---

## Weights

Weights control stroke width using a semantic scale.

```tsx
<Home weight="thin" />
<Home weight="light" />
<Home weight="regular" />   {/* default */}
<Home weight="bold" />
<Home weight="heavy" />
```

| Weight | Stroke Width |
|---|---|
| `thin` | 0.75 |
| `light` | 1 |
| `regular` | 1.5 |
| `bold` | 2 |
| `heavy` | 2.5 |

---

## Animations

Pass an `animate` object to any icon to apply a CSS animation. No external CSS needed — keyframes are injected once at runtime.

```tsx
<Loader animate={{ type: 'spin' }} />

<Bell animate={{ type: 'shake', duration: 0.5, iterationCount: 3 }} />

<Heart animate={{ type: 'pulse', duration: 1.2, timingFunction: 'ease-in-out' }} />
```

### `IconAnimation` type

```ts
interface IconAnimation {
  type: IconAnimationType        // required
  duration?: number              // seconds, default 1
  delay?: number                 // seconds, default 0
  iterationCount?: number | 'infinite'   // default 'infinite'
  timingFunction?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out'
}
```

### Available animation types

| Type | Description |
|---|---|
| `spin` | Continuous clockwise rotation |
| `spinReverse` | Continuous counter-clockwise rotation |
| `progress` | Partial rotation loop (loading indicator) |
| `pulse` | Scale in/out pulse |
| `ping` | Ripple/ping effect |
| `bounce` | Vertical bounce |
| `shake` | Horizontal shake |
| `wiggle` | Rotation wiggle |
| `float` | Gentle vertical float |
| `fade` | Opacity fade in/out |
| `slideUp` | Slide up and fade in |
| `slideDown` | Slide down and fade in |

You can also set a global animation via `IconProvider`:

```tsx
<IconProvider value={{ animate: { type: 'spin', duration: 2 } }}>
  <Loader />
  <Spinner />
</IconProvider>
```

---

## Transforms

Transforms compose cleanly and can be set globally or per-icon.

```tsx
{/* Rotate 90 degrees */}
<ArrowUp rotate={90} />

{/* Flip horizontally */}
<ArrowLeft flip="horizontal" />

{/* Scale up */}
<Star scale={1.5} />

{/* Offset position */}
<Dot translate={{ x: 4, y: -2 }} />

{/* Combine */}
<Arrow rotate={45} flip="vertical" scale={1.2} />
```

---

## Presets & States

Define reusable style configs in `IconProvider` and reference them by name.

### Presets

```tsx
<IconProvider
  value={{
    presets: {
      brand: { color: '#4f46e5', weight: 'bold' },
      danger: { theme: 'danger', size: 20 },
      nav: { size: 22, theme: 'sidebar' },
    }
  }}
>
  <Home preset="nav" />
  <AlertCircle preset="danger" />
  <Logo preset="brand" />
</IconProvider>
```

### States

States are preset overrides tied to interaction or status. They follow the same format as presets.

```tsx
<IconProvider
  value={{
    states: {
      active:   { color: '#4f46e5', weight: 'bold' },
      inactive: { color: '#9ca3af', weight: 'light' },
      disabled: { color: '#d1d5db', opacity: 0.5 },
      selected: { color: '#4f46e5', strokeWidth: 2.5 },
    }
  }}
>
  <Home state="active" />
  <Search state="inactive" />
  <Lock state="disabled" />
</IconProvider>
```

---

## DynamicIcon — Runtime Loading

When you need to load an icon by name at runtime (icon pickers, CMS-driven UIs, user preferences), use `DynamicIcon`. It uses `React.lazy` + `Suspense` under the hood so each icon is only fetched when it's first rendered.

```tsx
import { DynamicIcon } from 'reactifyui-icons/dynamic'

<DynamicIcon name="Home" size={24} />

{/* With a loading fallback */}
<DynamicIcon name="Home" size={24} fallback={<Skeleton />} />
```

The `name` prop accepts the PascalCase component name of any icon in the library. All standard icon props work the same way.

> Note: `DynamicIcon` loads icons lazily — don't use it for icons you always know at build time. Use static imports instead for better performance.

---

## Accessibility

By default, icons are treated as decorative (`aria-hidden="true"`, no `role`). To make an icon meaningful to screen readers, provide a `title`:

```tsx
{/* Decorative — hidden from screen readers */}
<Home />

{/* Meaningful — announced as "Go to homepage" */}
<Home title="Go to homepage" />

{/* With extended description */}
<AlertCircle
  title="Warning"
  desc="Your session is about to expire"
/>

{/* Explicitly decorative even with a visible label nearby */}
<Home decorative />
```

When a `title` or `aria-label` is provided, `role="img"` is automatically applied.

---

## Tree Shaking

ReactifyUI Icons is fully tree-shakeable. Each icon is compiled to its own module in `dist/icons/`, and the package declares `"sideEffects": false`.

```tsx
// ✅ Only Home and Search end up in your bundle
import { Home, Search } from 'reactifyui-icons'

// ✅ Direct import — same result, explicit path
import HomeDefault from 'reactifyui-icons/icons/HomeDefault'
```

With any modern bundler (Vite, webpack 5, Rollup, esbuild) unused icons are eliminated at build time.

---

## TypeScript

All types are exported from the main package entry.

```ts
import type {
  IconProps,       // all icon props
  IconTheme,       // theme string union
  IconWeight,      // weight string union
  IconAnimation,   // animation config
  IconPreset,      // preset config shape
  IconContextValue // IconProvider value shape
} from 'reactifyui-icons'
```

---

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a pull request.

---

## License

MIT — free to use in personal and commercial projects. See [LICENSE](./LICENSE) for details.

<div align="center">

Made with ❤️ by the [ReactifyUI Team](https://github.com/ReactifyUI)

</div>
