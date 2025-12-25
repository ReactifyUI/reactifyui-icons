export type IconTheme =
    | "default"
    | "light"
    | "dark"
    | "muted"
    | "subtle"
    | "inverted"

    | "primary"
    | "secondary"
    | "accent"
    | "brand"
    | "highlight"

    | "success"
    | "warning"
    | "danger"
    | "info"
    | "neutral"

    | "active"
    | "inactive"
    | "selected"
    | "disabled"
    | "hover"

    | "navbar"
    | "sidebar"
    | "toolbar"
    | "footer"
    | "overlay"

    | "calm"
    | "soft"
    | "bold"
    | "energetic"
    | "elegant"

export interface IconThemeToken {
    color: string
    opacity?: number
    strokeWidth?: number
}

export const ICON_THEMES: Record<IconTheme, IconThemeToken> = {
    // Core
    default: { color: "currentColor" },
    light: { color: "#000000" },
    dark: { color: "#FFFFFF" },
    muted: { color: "#6C757D", opacity: 0.8 },
    subtle: { color: "#ADB5BD", opacity: 0.6 },
    inverted: { color: "#FFFFFF" },

    // Brand
    primary: { color: "#0D6EFD" },
    secondary: { color: "#6C757D" },
    accent: { color: "#6610F2" },
    brand: { color: "#4F46E5" },
    highlight: { color: "#F59E0B" },

    // Semantic
    success: { color: "#1BA97C" },
    warning: { color: "#F4B400" },
    danger: { color: "#DC3545" },
    info: { color: "#0DCAF0" },
    neutral: { color: "#495057" },

    // Action
    active: { color: "#0D6EFD" },
    inactive: { color: "#ADB5BD" },
    selected: { color: "#4F46E5", strokeWidth: 2.5 },
    disabled: { color: "#CED4DA", opacity: 0.5 },
    hover: { color: "#343A40" },

    // Context
    navbar: { color: "#FFFFFF" },
    sidebar: { color: "#6C757D" },
    toolbar: { color: "#343A40" },
    footer: { color: "#ADB5BD" },
    overlay: { color: "#FFFFFF", opacity: 0.85 },

    // Personality
    calm: { color: "#5EEAD4" },
    soft: { color: "#E9D5FF" },
    bold: { color: "#111827", strokeWidth: 2.5 },
    energetic: { color: "#F97316" },
    elegant: { color: "#334155" }
}