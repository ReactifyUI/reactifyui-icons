import type { IconProps, IconContextValue } from "./iconTypes"
import { ICON_THEMES, IconTheme } from "./iconThemes"

/**
 * Default values for all icons.
 * These apply when:
 * - IconProvider does NOT override
 * - Icon component does NOT override
 */

export const DEFAULT_ICON_CONFIG: Required<
    Pick<IconContextValue, "size" | "strokeWidth" | "theme">
> = {
    size: 24,
    strokeWidth: 1,
    theme: "default" as IconTheme
}

export function resolvePreset(
    presetName: string | undefined,
    presets: IconContextValue["presets"]
) {
    if (!presetName || !presets) return {}
    return presets[presetName] || {}
}

export function resolveTheme(
    props: IconProps,
    preset: any,
    ctx: IconContextValue
): IconTheme {
    return (
        props.theme ??
        preset.theme ??
        ctx.theme ??
        DEFAULT_ICON_CONFIG.theme
    )
}

/**
 * Resolve final size:
 * 1. icon local prop
 * 2. context value (IconProvider)
 * 3. fallback from DEFAULT_ICON_CONFIG
 */
export function resolveSize(
    props: IconProps,
    preset: any,
    ctx: IconContextValue
) {
    return props.size ?? preset.size ?? ctx.size ?? DEFAULT_ICON_CONFIG.size
}

/**
 * Resolve final stroke width.
 */
export function resolveStrokeWidth(
    props: IconProps,
    preset: any,
    ctx: IconContextValue,
    theme: IconTheme
) {
    return props.strokeWidth ??
        preset.strokeWidth ??
        ctx.strokeWidth ??
        ICON_THEMES[theme]?.strokeWidth ?? DEFAULT_ICON_CONFIG.strokeWidth
}

/**
 * Resolve final color with theme support.
 */
export function resolveColor(
    props: IconProps,
    preset: any,
    ctx: IconContextValue,
    theme: IconTheme
) {
    return (
        props.color ??
        preset.color ??
        ctx.color ??
        ICON_THEMES[theme]?.color ??
        "currentColor"
    )
}


export function resolveOpacity(theme: IconTheme) {
    return ICON_THEMES[theme]?.opacity ?? 1
}