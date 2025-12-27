import React from "react"
import type { IconProps } from "../utils/iconTypes"
import { useIconContext } from "./IconProvider"
import {
    resolveColor,
    resolveSize,
    resolveStrokeWidth,
    resolveOpacity,
    resolvePreset,
    resolveTheme,
    resolveWeight,
    resolveTransform,
    buildTransformStyle,
    resolveAnimation,
    resolveIconAnimation,
    resolveStrokeProps,
    resolveFillProps,
    resolveStatePreset
} from "../utils/iconConfig"
import { toPx } from "../utils/helpers"
import { normalizeSvgChildren } from "../utils/normalizeSvgChildren"
import { ensureIconAnimations } from "../utils/ensureIconAnimation"

/**
 * IconBase
 * Core wrapper for ALL icons in the library.
 * Handles:
 * - sizing
 * - colors
 * - weights
 * - strokeWidth
 * - opacity
 * - stroke/fill control
 * - ARIA roles
 * - accessibility (title/desc)
 * - theming defaults via IconProvider
 * - className + styling
 * - transform
 * - transformOrigin
 */

export const IconBase = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {

    const ctx = useIconContext()

    const basePreset = resolvePreset(props.preset, ctx.presets)
    const statePreset = resolveStatePreset(props.state, ctx.states)

    const preset = {
        ...basePreset,
        ...statePreset
    }

    const theme = resolveTheme(props, preset, ctx)
    const weight = resolveWeight(props, preset, ctx)
    const size = resolveSize(props, preset, ctx)
    const strokeWidth = resolveStrokeWidth(props, preset, ctx, weight, theme)
    const color = resolveColor(props, preset, ctx, theme)
    const opacity = resolveOpacity(theme)

    const transform = resolveTransform(props, preset, ctx)
    const transformStyle = buildTransformStyle(transform)

    const strokeProps = resolveStrokeProps(props, preset, ctx)

    const fillProps = resolveFillProps(props, preset, ctx)


    const {
        decorative = !props.title,
        animate,
        title,
        desc,
        children,
        className,
        ...rest
    } = props

    ensureIconAnimations()
    const animationStyle = resolveIconAnimation(animate)

    return (
        <svg
            ref={ref}
            width={toPx(size)}
            height={toPx(size)}
            stroke={color}
            strokeWidth={strokeWidth}
            opacity={opacity}
            viewBox="0 0 24 24"
            className={`rui-animate ${className ?? ""}`}
            role={decorative ? undefined : "img"}
            aria-hidden={decorative}
            {...strokeProps}
            {...fillProps}
            style={{
                transform: transformStyle,
                transformOrigin: transform.transformOrigin,
                ...animationStyle,
                ...props.style
            }}
            {...rest}
        >
            {title && <title>{title}</title>}
            {desc && <desc>{desc}</desc>}
            {normalizeSvgChildren(children)}
        </svg>
    )
})

IconBase.displayName = "IconBase"

export default IconBase