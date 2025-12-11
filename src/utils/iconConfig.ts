import type { IconProps, IconContextValue } from "./iconTypes"

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
    theme: "light"
}

/**
 * Mapping themes → default colors.
 * Can be extended or replaced by the developer.
 */
export const THEME_COLOR_MAP: Record<string, string> = {
    light: "#000",
    dark: "#fff"
}

/**
 * Resolve final size:
 * 1. icon local prop
 * 2. context value (IconProvider)
 * 3. fallback from DEFAULT_ICON_CONFIG
 */
export function resolveSize(
    local: IconProps["size"],
    ctx: IconContextValue["size"]
) {
    return local ?? ctx ?? DEFAULT_ICON_CONFIG.size
}

/**
 * Resolve final stroke width.
 */
export function resolveStrokeWidth(
    local: IconProps["strokeWidth"],
    ctx: IconContextValue["strokeWidth"]
) {
    return local ?? ctx ?? DEFAULT_ICON_CONFIG.strokeWidth
}

/**
 * Resolve final color with theme support.
 */
export function resolveColor(
    local: IconProps["color"],
    ctxColor: IconContextValue["color"],
    ctxTheme: IconContextValue["theme"]
) {
    // 1. Icon-level override
    if (local) return local

    // 2. Provider-level color override
    if (ctxColor) return ctxColor

    // 3. Theme-based default
    if (ctxTheme) {
        const mapped = THEME_COLOR_MAP[ctxTheme]
        if (mapped) return mapped
    }

    // 4. Fallback → "currentColor"
    return "#000"
}
