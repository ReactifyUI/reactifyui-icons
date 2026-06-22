import React, { createContext, useContext } from "react"
import type { IconContextValue } from "../utils/iconTypes"
import { IconTheme } from "../utils/iconThemes"

const defaultContext: IconContextValue = {
    size: 24,
    strokeWidth: 1,
    theme: "default" as IconTheme,
}

const IconContext = createContext<IconContextValue>(defaultContext)

/**
 * Global defaults provider for ReactifyUI Icons.
 *
 * Wrap your app (or any subtree) with `IconProvider` to set default values
 * for every icon inside it. Per-icon props always take priority over the
 * provider defaults.
 *
 * **Prop resolution order** (highest priority first):
 * 1. Icon-level prop
 * 2. Active preset / state preset
 * 3. `IconProvider` context
 * 4. Library defaults
 *
 * @example
 * ```tsx
 * // Basic global defaults
 * <IconProvider value={{ size: 20, theme: 'sidebar', strokeWidth: 1.5 }}>
 *   <App />
 * </IconProvider>
 *
 * // With named presets and states
 * <IconProvider value={{
 *   presets: {
 *     brand: { color: '#4f46e5', weight: 'bold' },
 *     nav:   { size: 22, theme: 'sidebar' },
 *   },
 *   states: {
 *     active:   { color: '#4f46e5', weight: 'bold' },
 *     disabled: { color: '#CED4DA', opacity: 0.5 },
 *   },
 * }}>
 *   <Home preset="nav" />
 *   <Bell state="active" />
 * </IconProvider>
 * ```
 */
export const IconProvider = ({
    children,
    value,
}: {
    children: React.ReactNode
    /** Global icon defaults. All fields are optional. */
    value?: IconContextValue
}) => {
    return (
        <IconContext.Provider value={value || defaultContext}>
            {children}
        </IconContext.Provider>
    )
}

/** @internal Used by IconBase to read the nearest IconProvider context. */
export const useIconContext = () => useContext(IconContext)

export default IconProvider
