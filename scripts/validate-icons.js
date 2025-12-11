/**
 * validate-icons.js
 * Ensures input SVGs meet required standards BEFORE generation.
 * Prevents broken icons from entering the system.
 */

import fs from "fs-extra"
import path from "path"
import fg from "fast-glob"
import { logError, logSuccess, logInfo } from "./helpers.js"

const RAW_SVG_DIR = path.resolve("private-svgs")

// Forbidden attributes inside raw SVGs
const FORBIDDEN_ATTRIBUTES = [
    "width=",
    "height=",
    "fill=",
    "stroke=",
    "style="
]

// Allowed filename pattern: no spaces, no uppercase, no symbols
const VALID_FILENAME_REGEX = /^[a-z0-9\-_.]+\.svg$/

async function validateSvgContent(svg, file) {
    // 1. Content must not be empty
    if (!svg.trim()) {
        throw new Error(`Empty SVG content in ${file}`)
    }

    // 2. Must contain a viewBox
    if (!svg.includes("viewBox=")) {
        throw new Error(`Missing viewBox in ${file}`)
    }

    // 3. Forbidden attributes inside SVG
    for (const attr of FORBIDDEN_ATTRIBUTES) {
        if (svg.includes(attr)) {
            throw new Error(
                `Forbidden attribute "${attr}" found in ${file}. Remove inline attributes.`
            )
        }
    }

    // 4. Must contain at least one path / shape
    if (!svg.match(/<(path|circle|rect|polygon|polyline|line|g)\b/)) {
        throw new Error(`No drawable shapes found in ${file}`)
    }

    return true
}

async function validateFilenames(files) {
    for (const file of files) {
        if (!VALID_FILENAME_REGEX.test(file)) {
            throw new Error(
                `Invalid SVG filename "${file}". Use lowercase + hyphens only. Example: user-profile.svg`
            )
        }
    }
}

async function runValidation() {
    logInfo("Validating raw SVGs...")

    const files = await fg("**/*.svg", { cwd: RAW_SVG_DIR })

    if (files.length === 0) {
        logError("No SVGs found in private-svgs/. Cannot continue.")
        process.exit(1)
    }

    // Validate filenames
    await validateFilenames(files)

    // Validate content of each SVG
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
