

/**
 * Convert filename → PascalCase component name.
 * "home.svg" → "Home"
 * "arrow-left.svg" → "ArrowLeft"
 * "user_profile.svg" → "UserProfile"
 */
export function toComponentName(filename) {
    return filename
        .replace(/\.svg$/i, "")
        .split(/[-_ ]+/)
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join("")
}

/**
 * Ensures SVG markup does not contain width/height.
 * We always control size via props.
 */
export function stripSvgSizeAttributes(svg) {
    return svg
        .replace(/\s+width="[^"]*"/gi, "")
        .replace(/\s+height="[^"]*"/gi, "")
        .trim()
}

/**
 * Extracts inner SVG content (paths, groups, etc.)
 * <svg> ... </svg>
 */
export function extractSvgContent(svg) {
    return svg
        .replace(/<svg[^>]*>/i, "")
        .replace(/<\/svg>/i, "")
        .trim()
}

// Extract inner SVG content using REGEX (most stable method)
export function extractInnerSvg(jsx) {
    const match = jsx.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
    return match ? match[1].trim() : "";
}

/**
 * Used for logging generator results in a consistent format.
 */
export function logInfo(msg) {
    console.log(`🔹 ${msg}`)
}

export function logSuccess(msg) {
    console.log(`✅ ${msg}`)
}

export function logError(msg) {
    console.error(`❌ ${msg}`)
}

