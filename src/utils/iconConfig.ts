import type { IconProps, IconContextValue, IconFlip, IconPreset } from "./iconTypes"
import { ICON_THEMES, IconTheme } from "./iconThemes"
import { DEFAULT_ICON_WEIGHT, ICON_WEIGHTS, type IconWeight } from "./iconWeights"
import type { IconAnimation } from "./iconAnimation"
import type { IconState } from "./iconState"

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

const DEFAULT_ANIMATION = {
    duration: 1,
    delay: 0,
    iterationCount: "infinite" as const,
    timingFunction: "ease-in-out" as const
}

const ANIMATION_KEYFRAMES: Record<string, string> = {
    spin: "rui-spin",
    spinReverse: "rui-spin-reverse",
    progress: "rui-progress",
    pulse: "rui-pulse",
    ping: "rui-ping",
    bounce: "rui-bounce",
    shake: "rui-shake",
    wiggle: "rui-wiggle",
    float: "rui-float",
    fade: "rui-fade",
    slideUp: "rui-slide-up",
    slideDown: "rui-slide-down"
}

export function resolveStatePreset(
    state: IconState | undefined,
    states: Record<IconState, IconPreset> | undefined
): IconPreset {
    if (!state || state === "default") return {}
    if (!states) return {}
    return states[state] || {}
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

export function resolveWeight(
    props: IconProps,
    preset: any,
    ctx: IconContextValue
): IconWeight {
    return (
        props.weight ??
        preset.weight ??
        ctx.weight ??
        DEFAULT_ICON_WEIGHT
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
    weight: IconWeight,
    theme: IconTheme
) {
    // 1. Explicit local overrides
    if (props.strokeWidth !== undefined) return props.strokeWidth
    if (props.weight !== undefined) return ICON_WEIGHTS[props.weight]
    if (props.theme !== undefined && ICON_THEMES[props.theme]?.strokeWidth !== undefined) {
        return ICON_THEMES[props.theme].strokeWidth
    }

    // 2. Preset overrides
    if (preset.strokeWidth !== undefined) return preset.strokeWidth
    if (preset.weight !== undefined) return ICON_WEIGHTS[preset.weight]
    if (preset.theme !== undefined && ICON_THEMES[preset.theme]?.strokeWidth !== undefined) {
        return ICON_THEMES[preset.theme].strokeWidth
    }

    // 3. Context overrides / Theme default / Fallback
    return (
        ctx.strokeWidth ??
        ICON_THEMES[theme]?.strokeWidth ??
        ICON_WEIGHTS[weight]
    )
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

export function resolveTransform(
    props: IconProps,
    preset: any,
    ctx: IconContextValue
) {
    const rotate =
        props.rotate ?? preset.rotate ?? ctx.rotate ?? 0

    const scale =
        props.scale ?? preset.scale ?? ctx.scale ?? 1

    const flip =
        props.flip ?? preset.flip ?? ctx.flip

    const translate =
        props.translate ?? preset.translate ?? ctx.translate ?? {}

    const transformOrigin =
        props.transformOrigin ??
        preset.transformOrigin ??
        ctx.transformOrigin ??
        "center"

    return {
        rotate,
        scale,
        flip,
        translate,
        transformOrigin
    }
}

export function buildTransformStyle(transform: {
    rotate: number
    scale: number
    flip?: IconFlip
    translate?: { x?: number; y?: number }
}) {
    const transforms: string[] = []

    if (transform.translate?.x || transform.translate?.y) {
        const x = transform.translate.x ?? 0
        const y = transform.translate.y ?? 0
        transforms.push(`translate(${x}px, ${y}px)`)
    }

    if (transform.rotate) {
        transforms.push(`rotate(${transform.rotate}deg)`)
    }

    if (transform.flip) {
        if (transform.flip === "horizontal") transforms.push("scaleX(-1)")
        if (transform.flip === "vertical") transforms.push("scaleY(-1)")
        if (transform.flip === "both") transforms.push("scale(-1)")
    }

    if (transform.scale !== 1) {
        transforms.push(`scale(${transform.scale})`)
    }

    return transforms.length ? transforms.join(" ") : undefined
}


export function resolveAnimation(
    props: any,
    preset: any,
    ctx: any
): IconAnimation | undefined {
    const anim =
        props.animate ??
        preset.animate ??
        ctx.animate

    if (!anim) return undefined

    return {
        ...DEFAULT_ANIMATION,
        ...anim
    }
}

export function resolveIconAnimation(
    animation?: IconAnimation
): React.CSSProperties | undefined {
    if (!animation) return

    const {
        type,
        duration = 1,
        delay = 0,
        iterationCount = "infinite",
        timingFunction = "linear"
    } = animation

    const name = ANIMATION_KEYFRAMES[type]

    return {
        animationName: name,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        animationIterationCount:
            iterationCount === "infinite"
                ? "infinite"
                : String(iterationCount),
        animationTimingFunction: timingFunction,
        transformOrigin: "center"
    }
}

export function resolveStrokeProps(
    props: any,
    preset: any,
    ctx: any
) {
    return {
        strokeLinecap:
            props.strokeLinecap ??
            preset.strokeLinecap ??
            ctx.strokeLinecap,

        strokeLinejoin:
            props.strokeLinejoin ??
            preset.strokeLinejoin ??
            ctx.strokeLinejoin,

        strokeMiterlimit:
            props.strokeMiterlimit ??
            preset.strokeMiterlimit ??
            ctx.strokeMiterlimit,

        strokeDasharray:
            props.strokeDasharray ??
            preset.strokeDasharray ??
            ctx.strokeDasharray,

        strokeDashoffset:
            props.strokeDashoffset ??
            preset.strokeDashoffset ??
            ctx.strokeDashoffset,

        strokeOpacity:
            props.strokeOpacity ??
            preset.strokeOpacity ??
            ctx.strokeOpacity,

        vectorEffect:
            props.vectorEffect ??
            preset.vectorEffect ??
            ctx.vectorEffect,

        shapeRendering:
            props.shapeRendering ??
            preset.shapeRendering ??
            ctx.shapeRendering
    }
}

export function resolveFillProps(
    props: any,
    preset: any,
    ctx: any
) {
    return {
        fill:
            props.fill ??
            preset.fill ??
            ctx.fill,

        fillOpacity:
            props.fillOpacity ??
            preset.fillOpacity ??
            ctx.fillOpacity,

        fillRule:
            props.fillRule ??
            preset.fillRule ??
            ctx.fillRule,

        paintOrder:
            props.paintOrder ??
            preset.paintOrder ??
            ctx.paintOrder
    }
}
