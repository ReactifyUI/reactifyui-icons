import * as React from "react"
import type { IconTheme } from "./iconThemes"
import type { IconWeight } from "./iconWeights"
import type { IconAnimation } from "./iconAnimation"
import type { IconState } from "./iconState"

type SvgFillProps = Pick<
    React.SVGAttributes<SVGSVGElement>,
    "fill" | "fillOpacity" | "fillRule" | "paintOrder"
>

type SvgStrokeProps = Pick<
    React.SVGAttributes<SVGSVGElement>,
    | "strokeLinecap"
    | "strokeLinejoin"
    | "strokeMiterlimit"
    | "strokeDasharray"
    | "strokeDashoffset"
    | "strokeOpacity"
    | "vectorEffect"
    | "shapeRendering"
>

/**
 * Controls how an icon is flipped along an axis.
 *
 * - `"horizontal"` — mirrors left↔right
 * - `"vertical"` — mirrors top↔bottom
 * - `"both"` — mirrors both axes (equivalent to `rotate(180deg)`)
 */
export type IconFlip = "horizontal" | "vertical" | "both"

/**
 * Pixel offset applied to the icon via CSS `translate()`.
 *
 * @example
 * ```tsx
 * <Icon translate={{ x: 4, y: -2 }} />
 * ```
 */
export interface IconTranslate {
    /** Horizontal offset in pixels. */
    x?: number
    /** Vertical offset in pixels. */
    y?: number
}

/**
 * All props accepted by every ReactifyUI icon component.
 *
 * Extends the full `React.SVGAttributes<SVGSVGElement>` so any valid SVG
 * attribute (`onClick`, `className`, `strokeLinecap`, etc.) also works.
 *
 * **Prop resolution order** (highest priority first):
 * 1. Icon-level prop
 * 2. Active preset (`preset` prop → looked up in `IconProvider.presets`)
 * 3. Active state (`state` prop → looked up in `IconProvider.states`)
 * 4. `IconProvider` context defaults
 * 5. Library defaults (`size: 24`, `strokeWidth: 1.5`, `theme: "default"`)
 *
 * @example
 * ```tsx
 * <Home size={32} color="#4f46e5" weight="bold" theme="primary" />
 *
 * <Bell animate={{ type: 'shake', duration: 0.5 }} />
 *
 * <ArrowLeft rotate={180} />
 *
 * <AlertCircle theme="danger" title="Error" decorative={false} />
 * ```
 */
export interface IconProps
    extends React.SVGAttributes<SVGSVGElement>,
    SvgStrokeProps,
    SvgFillProps {

    /**
     * Width and height of the icon in pixels.
     * Accepts a number (px) or any valid CSS size string.
     * @default 24
     */
    size?: number | string

    /** Additional CSS class name applied to the `<svg>` element. */
    className?: string

    /**
     * Icon color. Accepts any valid CSS color value.
     * Overrides the theme color when set explicitly.
     * @default "currentColor"
     */
    color?: string

    /**
     * SVG stroke width. Overrides the `weight` prop when set explicitly.
     * @default 1.5
     */
    strokeWidth?: number

    /**
     * Named design-token theme. Sets color, and optionally opacity and
     * strokeWidth, from a predefined palette of 30+ tokens.
     *
     * @default "default"
     * @see {@link IconTheme} for all available values
     *
     * @example
     * ```tsx
     * <AlertCircle theme="danger" />
     * <CheckCircle theme="success" />
     * <Bell theme="sidebar" />
     * ```
     */
    theme?: IconTheme

    /**
     * Semantic stroke-weight preset.
     * Maps to a specific `stroke-width` value: `thin=0.75` `light=1`
     * `regular=1.5` `bold=2` `heavy=2.5`.
     *
     * @default "regular"
     *
     * @example
     * ```tsx
     * <Home weight="bold" />
     * <Search weight="thin" />
     * ```
     */
    weight?: IconWeight

    /**
     * Named preset defined in `IconProvider.presets`.
     * Merges all props from the matching preset, overridable by local props.
     *
     * @example
     * ```tsx
     * <IconProvider value={{ presets: { brand: { color: '#4f46e5', weight: 'bold' } } }}>
     *   <Home preset="brand" />
     * </IconProvider>
     * ```
     */
    preset?: string

    /**
     * Interaction or status state. Looks up the matching entry in
     * `IconProvider.states` and applies it as a preset.
     *
     * @example
     * ```tsx
     * <Home state="active" />
     * <Lock state="disabled" />
     * ```
     */
    state?: IconState

    /**
     * Rotation in degrees applied via CSS `rotate()`.
     * @default 0
     *
     * @example
     * ```tsx
     * // Turn ArrowUp into ArrowDown
     * <ArrowUp rotate={180} />
     * ```
     */
    rotate?: number

    /**
     * Mirror the icon along one or both axes.
     *
     * @example
     * ```tsx
     * <ArrowLeft flip="horizontal" /> // now points right
     * ```
     */
    flip?: IconFlip

    /**
     * Scale factor applied via CSS `scale()`.
     * @default 1
     */
    scale?: number

    /**
     * Pixel offset in x/y applied via CSS `translate()`.
     *
     * @example
     * ```tsx
     * <Dot translate={{ x: 4, y: -2 }} />
     * ```
     */
    translate?: IconTranslate

    /**
     * CSS `transform-origin` for rotate and scale transforms.
     * @default "center"
     */
    transformOrigin?: string

    /**
     * CSS animation configuration. Keyframes are injected once at runtime —
     * no external stylesheet needed.
     *
     * @example
     * ```tsx
     * <Loader animate={{ type: 'spin' }} />
     * <Bell animate={{ type: 'shake', duration: 0.5, iterationCount: 3 }} />
     * ```
     */
    animate?: IconAnimation

    /**
     * When `true`, the icon is treated as decorative:
     * - `aria-hidden="true"` is applied
     * - `role="img"` is removed
     *
     * Set to `false` and provide a `title` for meaningful icons.
     * @default true (when no `title` or `aria-label` is present)
     */
    decorative?: boolean

    /**
     * Accessible label injected as a `<title>` element inside the SVG.
     * Automatically sets `role="img"` when provided.
     *
     * @example
     * ```tsx
     * <Home title="Go to homepage" decorative={false} />
     * ```
     */
    title?: string

    /**
     * Extended accessible description injected as a `<desc>` element.
     *
     * @example
     * ```tsx
     * <AlertCircle title="Warning" desc="Your session is about to expire" />
     * ```
     */
    desc?: string
}

/**
 * Reusable named style configuration for icons.
 * Define presets in `IconProvider` and reference them by name via the `preset` prop.
 *
 * @example
 * ```tsx
 * <IconProvider value={{
 *   presets: {
 *     nav: { size: 22, theme: 'sidebar' },
 *     danger: { theme: 'danger', weight: 'bold' },
 *   }
 * }}>
 *   <Home preset="nav" />
 *   <AlertCircle preset="danger" />
 * </IconProvider>
 * ```
 */
export interface IconPreset extends SvgStrokeProps, SvgFillProps {
    size?: number | string
    color?: string
    strokeWidth?: number
    theme?: IconTheme
    weight?: IconWeight
    rotate?: number
    flip?: IconFlip
    scale?: number
    translate?: IconTranslate
    transformOrigin?: string
    animate?: IconAnimation
}

/**
 * Shape of the value passed to `IconProvider`.
 * All properties become global defaults for every icon inside the provider.
 *
 * @example
 * ```tsx
 * <IconProvider value={{
 *   size: 20,
 *   theme: 'sidebar',
 *   strokeWidth: 1.5,
 *   presets: { brand: { color: '#4f46e5' } },
 *   states: { active: { color: '#4f46e5', weight: 'bold' } },
 * }}>
 *   <App />
 * </IconProvider>
 * ```
 */
export interface IconContextValue extends SvgStrokeProps, SvgFillProps {
    size?: number | string
    color?: string
    strokeWidth?: number
    theme?: IconTheme
    weight?: IconWeight
    rotate?: number
    flip?: IconFlip
    scale?: number
    translate?: IconTranslate
    transformOrigin?: string
    animate?: IconAnimation
    /** Named preset map. Reference a preset with `<Icon preset="name" />`. */
    presets?: Record<string, IconPreset>
    /** State preset map. Reference a state with `<Icon state="active" />`. */
    states?: Record<IconState, IconPreset>
}
