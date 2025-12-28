/**
 * ReactifyUI Icons Generator (clean version)
 * ONLY converts SVGs → React components.
 * DOES NOT generate registry.json anymore.
 */

import fs from "fs-extra"
import path from "path"
import fg from "fast-glob"
import { optimize } from "svgo"
import { transform } from "@svgr/core"
import { toComponentName, logInfo, logSuccess, extractInnerSvg, stripSvgSizeAttributes } from "./helpers.js"
import { normalizeSvg } from "./normalizeSvg.js"

const RAW_SVG_DIR = path.resolve("private-svgs")
const OUTPUT_DIR = path.resolve("src/react/icons")


function wrapWithIconBase(componentName, jsxContent) {
    return `
import React from "react";
import IconBase from "../IconBase";

const ${componentName} = (props: import("../../utils/iconTypes").IconProps) => {
  return (
    <IconBase {...props}>
      ${jsxContent}
    </IconBase>
  );
};

export default ${componentName};
`
}

async function generateIcons() {
    logInfo("Generating React icon components...")

    const files = await fg("**/*.svg", { cwd: RAW_SVG_DIR })

    if (files.length === 0) {
        console.error("❌ No SVG files found.")
        process.exit(1)
    }

    await fs.emptyDir(OUTPUT_DIR)

    for (const file of files) {
        const fullPath = path.join(RAW_SVG_DIR, file)
        let svg = await fs.readFile(fullPath, "utf8")

        // Remove inline width/height
        svg = stripSvgSizeAttributes(svg)

        svg = normalizeSvg(svg)

        // Optimize SVG (SVGO handles dimension removal)
        const optimizedSvg = optimize(svg, {
            multipass: true,
            plugins: [
                "removeComments",
                "removeMetadata",
                "removeDimensions",
                { name: "convertColors", params: { currentColor: true } }
            ]
        }).data

        const componentName = toComponentName(file)

        // Transform SVG → JSX
        const jsxConverted = await transform(
            optimizedSvg,
            {
                plugins: ["@svgr/plugin-jsx"],
                jsxRuntime: "automatic",
                expandProps: false
            },
            { componentName }
        )

        // Extract children manually using regex
        const innerContent = extractInnerSvg(jsxConverted);

        // Wrap with IconBase
        const finalComponent = wrapWithIconBase(componentName, innerContent)

        // Save to src/react/icons
        await fs.outputFile(
            path.join(OUTPUT_DIR, `${componentName}.tsx`),
            finalComponent
        )
    }

    logSuccess(`Icons generated → ${OUTPUT_DIR}`)
}

generateIcons().catch(err => {
    console.error("❌ Error generating icons:", err)
    process.exit(1)
})
