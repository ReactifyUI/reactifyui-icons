import * as React from "react"

const BLOCKED_SVG_PROPS = new Set([
    "fill",
    "stroke",
    "strokeWidth",
    "opacity",
    "style",
    "color"
])

export function normalizeSvgChildren(
    children: React.ReactNode
): React.ReactNode {
    return React.Children.map(children, child => {
        if (!React.isValidElement(child)) return child

        const props = child.props as Record<string, any>
        const cleanedProps: Record<string, any> = {}

        for (const key in props) {
            if (!BLOCKED_SVG_PROPS.has(key)) {
                cleanedProps[key] = props[key]
            }
        }

        // Recursively normalize <g> children
        if (props.children) {
            cleanedProps.children = normalizeSvgChildren(
                props.children
            )
        }

        return React.cloneElement(child, cleanedProps)
    })
}
