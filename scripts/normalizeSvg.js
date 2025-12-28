import { optimize } from "svgo"

export function normalizeSvg(svg) {
    const result = optimize(svg, {
        multipass: false,
        plugins: [
            {
                name: "preset-default",
                params: {
                    overrides: {
                        removeViewBox: false
                    }
                }
            },

            /**
             * Strip all explicit styling safely (AST-based)
             * Geometry is preserved, styling is removed.
             */
            {
                name: "stripExplicitStyles",
                type: "visitor",
                fn: () => ({
                    element: {
                        enter(node) {
                            if (!node.attributes) return

                            delete node.attributes.fill
                            delete node.attributes.stroke
                            delete node.attributes["stroke-width"]
                            delete node.attributes["stroke-linecap"]
                            delete node.attributes["stroke-linejoin"]
                            delete node.attributes.opacity
                        }
                    }
                })
            }
        ]
    })

    return result.data
}
