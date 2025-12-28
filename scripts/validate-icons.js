/**
 * validate-icons.js
 * Soft validation for raw SVGs.
 * Ensures SVGs are SAFE and STRUCTURALLY VALID.
 * Styling normalization happens later.
 */

import fs from "fs-extra"
import path from "path"
import fg from "fast-glob"
import { logError, logSuccess, logInfo } from "./helpers.js"
import { optimize } from "svgo"

const RAW_SVG_DIR = path.resolve("private-svgs")

// ❌ Blocked SVG tags (security / incompatibility)
const BLOCKED_TAGS = [
    "script",
    "style",
    "foreignObject",
    "image",
    "use"
]

// ❌ Blocked attributes (runtime / CSS / events)
const BLOCKED_ATTRIBUTES = [
    "class",
    "id",
    "onclick",
    "onload",
    "onmouseover",
    "onmouseenter",
    "onmouseleave"
]

// ✅ Allowed filename pattern
const VALID_FILENAME_REGEX = /^[a-z0-9\-_.]+\.svg$/

async function validateSvgContent(svg, file) {

    try {
        optimize(svg, { multipass: false })
    } catch (err) {
        throw new Error(
            `Invalid SVG syntax in ${file}: ${err.reason || err.message}`
        )
    }

    // 1. SVG must not be empty
    if (!svg.trim()) {
        throw new Error(`Empty SVG content in ${file}`)
    }

    // 2. Must contain <svg>
    if (!svg.includes("<svg")) {
        throw new Error(`Missing <svg> root in ${file}`)
    }

    // 3. Must contain viewBox (required for scaling)
    if (!svg.includes("viewBox=")) {
        throw new Error(`Missing viewBox in ${file}`)
    }

    // 4. Block unsafe tags
    for (const tag of BLOCKED_TAGS) {
        const regex = new RegExp(`<${tag}\\b`, "i")
        if (regex.test(svg)) {
            throw new Error(`Blocked SVG tag <${tag}> found in ${file}`)
        }
    }

    // 5. Block unsafe attributes
    for (const attr of BLOCKED_ATTRIBUTES) {
        const regex = new RegExp(`\\s${attr}=`, "i")
        if (regex.test(svg)) {
            throw new Error(`Blocked SVG attribute "${attr}" found in ${file}`)
        }
    }

    // 6. Must contain at least one drawable element
    if (!svg.match(/<(path|circle|rect|polygon|polyline|line|g)\b/i)) {
        throw new Error(`No drawable SVG shapes found in ${file}`)
    }

    return true
}

async function validateFilenames(files) {
    for (const file of files) {
        if (!VALID_FILENAME_REGEX.test(file)) {
            throw new Error(
                `Invalid SVG filename "${file}". Use lowercase, numbers, hyphens. Example: user-profile.svg`
            )
        }
    }
}

async function runValidation() {
    logInfo("Validating raw SVGs (soft validation)...")

    const files = await fg("**/*.svg", { cwd: RAW_SVG_DIR })

    if (files.length === 0) {
        logError("No SVGs found in private-svgs/. Cannot continue.")
        process.exit(1)
    }

    await validateFilenames(files)

    for (const file of files) {
        const fullPath = path.join(RAW_SVG_DIR, file)
        const svg = await fs.readFile(fullPath, "utf8")

        try {
            await validateSvgContent(svg, file)
        } catch (err) {
            logError(`❌ ${err.message}`)
            process.exit(1)
        }
    }

    logSuccess(`All ${files.length} SVGs passed validation ✔`)
}

runValidation().catch(err => {
    logError(err)
    process.exit(1)
})
