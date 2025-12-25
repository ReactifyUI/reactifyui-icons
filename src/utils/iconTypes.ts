import type { IconTheme } from "./iconThemes"
import type { export IconWeight } from "./iconWeights"


export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
    /**
     * Icon size (default comes from IconProvider → 24px)
     * Can be a number (treated as px) or string (e.g. "1.5rem").
     */
    size?: number | string

    /**
     * Icon stroke/fill color.
     * Accepts any valid CSS color or CSS variable.
     * Defaults to: currentColor or IconProvider color.
     */
    color?: string

    /**
     * Stroke width for outline icons.
     * Default → 2
     */
    strokeWidth?: number

    /** ReactifyUI theme name */
    theme?: IconTheme

    weight?: IconWeight

    /** Preset name from IconProvider */
    preset?: string
    /**
     * Accessibility:
     * If the icon is decorative (common), aria-hidden=true is applied.
     * If title is present, decorative=false automatically.
     */
    decorative?: boolean

    /**
     * A11y: Adds <title>
     */
    title?: string

    /**
     * A11y: Adds <desc>
     */
    desc?: string

    /**
     * Custom classes passed to <svg>.
     */
    className?: string
}

export interface IconPreset {
    size?: number | string
    color?: string
    strokeWidth?: number
    theme?: IconTheme
    weight?: IconWeight
}

/**
 * Icon context values (used by IconProvider)
 */
export interface IconContextValue {
    size?: number | string
    color?: string
    strokeWidth?: number
    theme?: IconTheme
    weight?: IconWeight
    presets?: Record<string, IconPreset>
    className?: string
}
