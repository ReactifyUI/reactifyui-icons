import * as React from "react"

import type { IconTheme } from "./iconThemes"
import type { IconWeight } from "./iconWeights"
import type { IconAnimation } from "./iconAnimation"

/* ------------------------------------------------------------------ */
/* Stroke styling (SVG-native, advanced control)                       */
/* ------------------------------------------------------------------ */

type SvgStrokeProps = Pick<
    React.SVGAttributes<SVGSVGElement>,
    | "strokeLinecap"
    | "strokeLinejoin"
    | "strokeMiterlimit"
    | "strokeDasharray"
    | "strokeDashoffset"
    | "strokeOpacity"
    | "vectorEffect"
    | "shapeRendering"
>

/* ------------------------------------------------------------------ */
/* Transform types                                                     */
/* ------------------------------------------------------------------ */

export type IconFlip = "horizontal" | "vertical" | "both"

export interface IconTranslate {
    x?: number
    y?: number
}

/* ------------------------------------------------------------------ */
/* Icon Props (PUBLIC API)                                             */
/* ------------------------------------------------------------------ */

export interface IconProps
    extends React.SVGAttributes<SVGSVGElement>,
    SvgStrokeProps {
    /* Size & layout */
    size?: number | string
    className?: string

    /* Color & styling */
    color?: string
    strokeWidth?: number

    /* Design system */
    theme?: IconTheme
    weight?: IconWeight
    preset?: string

    /* Transform */
    rotate?: number
    flip?: IconFlip
    scale?: number
    translate?: IconTranslate
    transformOrigin?: string

    /* Animation (grouped) */
    animate?: IconAnimation

    /* Accessibility */
    decorative?: boolean
    title?: string
    desc?: string
}

/* ------------------------------------------------------------------ */
/* Preset Configuration                                                */
/* ------------------------------------------------------------------ */

export interface IconPreset extends SvgStrokeProps {
    /* Size & styling */
    size?: number | string
    color?: string
    strokeWidth?: number

    /* Design system */
    theme?: IconTheme
    weight?: IconWeight

    /* Transform */
    rotate?: number
    flip?: IconFlip
    scale?: number
    translate?: IconTranslate
    transformOrigin?: string

    /* Animation */
    animate?: IconAnimation
}

/* ------------------------------------------------------------------ */
/* IconProvider Context                                                */
/* ------------------------------------------------------------------ */

export interface IconContextValue extends SvgStrokeProps {
    /* Global defaults */
    size?: number | string
    color?: string
    strokeWidth?: number

    /* Design system */
    theme?: IconTheme
    weight?: IconWeight

    /* Transform */
    rotate?: number
    flip?: IconFlip
    scale?: number
    translate?: IconTranslate
    transformOrigin?: string

    /* Animation */
    animate?: IconAnimation

    /* Presets */
    presets?: Record<string, IconPreset>
}