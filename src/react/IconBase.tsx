import React from "react"
import type { IconProps } from "../utils/iconTypes"
import { useIconContext } from "./IconProvider"
import { resolveColor, resolveSize, resolveStrokeWidth } from "../utils/iconConfig"
import { toPx } from "../utils/helpers"

// Theme → default color mapping (customizable)
const THEME_COLORS: Record<string, string> = {
    light: "#000",
    dark: "#fff"
}

/**
 * IconBase
 * Core wrapper for ALL icons in the library.
 * Handles:
 * - sizing
 * - colors
 * - stroke/fill control
 * - ARIA roles
 * - accessibility (title/desc)
 * - theming defaults via IconProvider
 * - className + styling
 */

export const IconBase = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    const {
        size,
        color,
        strokeWidth,
        decorative = !props.title, // If no title → decorative by default
        title,
        desc,
        className,
        children,
        ...rest
    } = props

    const ctx = useIconContext()

    const finalSize = resolveSize(size, ctx.size)
    const finalColor = resolveColor(color, ctx.color, ctx.theme)
    const finalStrokeWidth = resolveStrokeWidth(strokeWidth, ctx.strokeWidth)
    const finalClassName = className ?? ctx.className

    const ariaProps = decorative
        ? { "aria-hidden": true }
        : { role: "img", "aria-hidden": false }

    return (
        <svg
            ref={ref}
            width={toPx(finalSize)}
            height={toPx(finalSize)}
            stroke={finalColor}
            strokeWidth={finalStrokeWidth}
            fill="none"
            viewBox="0 0 24 24"
            className={finalClassName}
            {...ariaProps}
            {...rest}
        >
            {title && <title>{title}</title>}
            {desc && <desc>{desc}</desc>}
            {children}
        </svg>
    )
})

IconBase.displayName = "IconBase"

export default IconBase