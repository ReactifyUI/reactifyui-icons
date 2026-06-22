/**
 * Named design-token theme for ReactifyUI Icons.
 *
 * Each theme maps to a color, and optionally an opacity and strokeWidth.
 * Themes are grouped by purpose:
 *
 * - **Core** — `default` `light` `dark` `muted` `subtle` `inverted`
 * - **Brand** — `primary` `secondary` `accent` `brand` `highlight`
 * - **Semantic** — `success` `warning` `danger` `info` `neutral`
 * - **Action** — `active` `inactive` `selected` `disabled` `hover`
 * - **Context** — `navbar` `sidebar` `toolbar` `footer` `overlay`
 * - **Personality** — `calm` `soft` `bold` `energetic` `elegant`
 *
 * @example
 * ```tsx
 * <AlertCircle theme="danger" />
 * <CheckCircle theme="success" />
 * <Bell theme="sidebar" />
 *
 * // Set globally
 * <IconProvider value={{ theme: 'primary' }}>
 *   <App />
 * </IconProvider>
 * ```
 */
export type IconTheme =
    // Core
    | "default"   // currentColor — inherits from CSS
    | "light"     // #000000
    | "dark"      // #FFFFFF
    | "muted"     // #6C757D at 0.8 opacity
    | "subtle"    // #ADB5BD at 0.6 opacity
    | "inverted"  // #FFFFFF

    // Brand
    | "primary"   // #0D6EFD
    | "secondary" // #6C757D
    | "accent"    // #6610F2
    | "brand"     // #4F46E5
    | "highlight" // #F59E0B

    // Semantic
    | "success"   // #1BA97C
    | "warning"   // #F4B400
    | "danger"    // #DC3545
    | "info"      // #0DCAF0
    | "neutral"   // #495057

    // Action
    | "active"    // #0D6EFD
    | "inactive"  // #ADB5BD
    | "selected"  // #4F46E5, strokeWidth: 2.5
    | "disabled"  // #CED4DA at 0.5 opacity
    | "hover"     // #343A40

    // Context
    | "navbar"    // #FFFFFF
    | "sidebar"   // #6C757D
    | "toolbar"   // #343A40
    | "footer"    // #ADB5BD
    | "overlay"   // #FFFFFF at 0.85 opacity

    // Personality
    | "calm"      // #5EEAD4
    | "soft"      // #E9D5FF
    | "bold"      // #111827, strokeWidth: 2.5
    | "energetic" // #F97316
    | "elegant"   // #334155

/** The resolved color, opacity and optional strokeWidth for a given theme. */
export interface IconThemeToken {
    /** CSS color value */
    color: string
    /** Optional opacity (0–1) */
    opacity?: number
    /** Optional stroke-width override */
    strokeWidth?: number
}

/**
 * The full map of theme names → their token values.
 * Used internally by `IconBase` to resolve color, opacity, and strokeWidth.
 */
export const ICON_THEMES: Record<IconTheme, IconThemeToken> = {
    default:   { color: "currentColor" },
    light:     { color: "#000000" },
    dark:      { color: "#FFFFFF" },
    muted:     { color: "#6C757D", opacity: 0.8 },
    subtle:    { color: "#ADB5BD", opacity: 0.6 },
    inverted:  { color: "#FFFFFF" },
    primary:   { color: "#0D6EFD" },
    secondary: { color: "#6C757D" },
    accent:    { color: "#6610F2" },
    brand:     { color: "#4F46E5" },
    highlight: { color: "#F59E0B" },
    success:   { color: "#1BA97C" },
    warning:   { color: "#F4B400" },
    danger:    { color: "#DC3545" },
    info:      { color: "#0DCAF0" },
    neutral:   { color: "#495057" },
    active:    { color: "#0D6EFD" },
    inactive:  { color: "#ADB5BD" },
    selected:  { color: "#4F46E5", strokeWidth: 2.5 },
    disabled:  { color: "#CED4DA", opacity: 0.5 },
    hover:     { color: "#343A40" },
    navbar:    { color: "#FFFFFF" },
    sidebar:   { color: "#6C757D" },
    toolbar:   { color: "#343A40" },
    footer:    { color: "#ADB5BD" },
    overlay:   { color: "#FFFFFF", opacity: 0.85 },
    calm:      { color: "#5EEAD4" },
    soft:      { color: "#E9D5FF" },
    bold:      { color: "#111827", strokeWidth: 2.5 },
    energetic: { color: "#F97316" },
    elegant:   { color: "#334155" },
}
