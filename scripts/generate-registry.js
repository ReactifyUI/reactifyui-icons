/**
 * generate-registry.js
 * Generates a registry.json file listing all icon components.
 * Used for docs, previews, search, metadata, tooling.
 */

import fs from "fs-extra"
import path from "path"
import fg from "fast-glob"
import { logInfo, logSuccess } from "./helpers.js"

const ICONS_DIR = path.resolve("src/react/icons")
const SVG_DIR = path.resolve("private-svgs");
const OUTPUT_PATH = path.resolve("src/data/registry.json")

async function generateRegistry() {
    logInfo("Generating icon registry...")

    const iconFiles = await fg("*.tsx", { cwd: ICONS_DIR })
    const svgFiles = await fg("*.svg", { cwd: SVG_DIR });

    // Map svg filenames → component names
    const svgMap = {};
    for (const svg of svgFiles) {
        const base = svg.replace(".svg", "");
        const componentName = base
            .split(/[-_ ]+/)
            .map((s) => s[0].toUpperCase() + s.slice(1))
            .join("");

        svgMap[componentName] = svg;
    }

    if (iconFiles.length === 0) {
        throw new Error("No generated icons found. Run generate-icons first.")
    }

    const registry = {}

    for (const file of iconFiles) {
        const name = file.replace(".tsx", "")

        registry[name] = {
            name,
            import: `reactifyui-icons/${name}`,
            importNamed: `reactifyui-icons`,
            component: name,
            filePath: `src/react/icons/${file}`,
            category: "general",
            tags: [],
            originalSvg: svgMap[name] || null
        }
    }

    await fs.outputJson(OUTPUT_PATH, registry, { spaces: 2 })

    logSuccess(`Registry generated successfully → ${OUTPUT_PATH}`)
    logSuccess(`Total icons: ${iconFiles.length}`)
}

generateRegistry().catch(err => {
    console.error("❌ Error generating registry:", err)
    process.exit(1)
})
