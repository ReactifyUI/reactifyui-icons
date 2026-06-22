import React, { Suspense } from "react"
import { dynamicMap } from "./dynamicMap"
import type { IconProps } from "../utils/iconTypes"

export interface DynamicIconProps extends IconProps {
    /**
     * The PascalCase name of the icon to load.
     * Must match a valid icon component name from the library
     * (e.g. `"Home"`, `"ArrowLeft"`, `"SearchDefault"`).
     *
     * @example
     * ```tsx
     * <DynamicIcon name="Home" />
     * <DynamicIcon name="AlertCircle" theme="danger" />
     * ```
     */
    name: string

    /**
     * Content to render while the icon is loading.
     * Passed directly to React `<Suspense fallback={...}>`.
     * @default null
     */
    fallback?: React.ReactNode
}

/**
 * Runtime icon loader that resolves icons by name string.
 *
 * Uses `React.lazy` + `<Suspense>` under the hood — each icon is only
 * fetched when it first renders, enabling code-splitting. Ideal for
 * icon pickers, CMS-driven UIs, or any situation where the icon name
 * is determined at runtime rather than at build time.
 *
 * For icons you know at build time, prefer static imports:
 * ```tsx
 * import { Home } from 'reactifyui-icons'
 * ```
 *
 * @example
 * ```tsx
 * import { DynamicIcon } from 'reactifyui-icons/dynamic'
 *
 * // Basic
 * <DynamicIcon name="Home" size={24} />
 *
 * // With loading fallback and all standard icon props
 * <DynamicIcon
 *   name="AlertCircle"
 *   theme="danger"
 *   size={20}
 *   fallback={<span style={{ width: 20, height: 20 }} />}
 * />
 * ```
 */
export const DynamicIcon = React.forwardRef<SVGSVGElement, DynamicIconProps>(
    ({ name, fallback = null, ...props }, ref) => {
        const LazyIcon = dynamicMap[name] as any

        if (!LazyIcon) {
            console.warn(
                `[ReactifyUI Icons] DynamicIcon: "${name}" is not a valid icon name.`
            )
            return <>{fallback}</>
        }

        return (
            <Suspense fallback={fallback}>
                <LazyIcon ref={ref} {...props} />
            </Suspense>
        )
    }
)

DynamicIcon.displayName = "DynamicIcon"

export default DynamicIcon
