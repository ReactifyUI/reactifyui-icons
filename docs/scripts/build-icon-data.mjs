/**
 * build-icon-data.mjs
 * 1. Reads all SVGs from ../private-svgs/, normalises them,
 *    detects categories, writes public/icons-data.json
 * 2. Reads the logo PNG and writes it as a base64 data URL
 *    into .env.local so Next.js can use it via NEXT_PUBLIC_LOGO_URL
 *    with zero path dependency (works on any basePath/GitHub Pages)
 */

import fs from "fs-extra"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SVG_DIR   = path.resolve(__dirname, "../../private-svgs")
const LOGO_PATH = path.resolve(__dirname, "../../Reactifyui-logo.png")
const OUT       = path.resolve(__dirname, "../public/icons-data.json")
const ENV_FILE  = path.resolve(__dirname, "../.env.local")

// ── Category detection ──────────────────────────────────────────────────────
const CATEGORY_MAP = [
  [/^arrow|^back|^forward|^chevron|^caret|^next|^skip/, "Arrows"],
  [/^home|^menu|^sidebar|^layout|^dashboard|^redirect/, "Navigation"],
  [/^search|^filter|^zoom/, "Search"],
  [/^user|^profile|^logout/, "Users"],
  [/^mail|^chat|^phone|^notification|^support/, "Communication"],
  [/^folder|^document|^file|^archive|^copy|^paste|^cut|^save|^import|^export|^upload/, "Files"],
  [/^media|^play/, "Media"],
  [/^calendar/, "Calendar"],
  [/^settings|^system|^control|^toggle/, "Settings"],
  [/^edit|^delete|^redo|^undo|^restore|^refresh|^drag/, "Editing"],
  [/^column|^split|^collapse|^expand|^maximize|^minimize|^list|^grid/, "Layout"],
  [/^location|^pin|^unpin|^map/, "Location"],
  [/^bank|^card|^wallet|^transaction|^investment|^cod|^netbanking|^upi/, "Finance"],
  [/^lock|^unlock|^password/, "Security"],
  [/^printer/, "Devices"],
  [/^share/, "Social"],
]

function getCategory(slug) {
  for (const [pattern, cat] of CATEGORY_MAP) {
    if (pattern.test(slug)) return cat
  }
  return "Misc"
}

function toComponentName(filename) {
  return filename
    .replace(/\.svg$/i, "")
    .split(/[-_ ]+/)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("")
}

function normaliseSvg(raw) {
  return raw
    .replace(/<svg([^>]*)>/i, (_, attrs) => {
      const cleaned = attrs
        .replace(/\s+width="[^"]*"/gi, "")
        .replace(/\s+height="[^"]*"/gi, "")
      return `<svg${cleaned}>`
    })
    .replace(/\sstyle="[^"]*"/gi, "")
    .replace(/\sclass="[^"]*"/gi, "")
    .replace(/\sid="[^"]*"/gi, "")
    .replace(/\sdata-[^=]*="[^"]*"/gi, "")
    .replace(/\s(stroke-width|stroke-linecap|stroke-linejoin|stroke-miterlimit|stroke-opacity|fill-opacity)="[^"]*"/gi, "")
    .replace(/\sfill="(?!none)([^"]*)"/gi, ' fill="currentColor"')
    .replace(/\sstroke="(?!none)([^"]*)"/gi, ' stroke="currentColor"')
    .replace(/\scolor="[^"]*"/gi, "")
    .replace(/>\s+</g, "><")
    .replace(/\s{2,}/g, " ")
    .trim()
}

async function buildLogoEnv() {
  // If .env.local already has NEXT_PUBLIC_LOGO_URL and we're on CI, skip
  if (process.env.CI && await fs.pathExists(ENV_FILE)) {
    const existing = await fs.readFile(ENV_FILE, "utf8")
    if (existing.includes("NEXT_PUBLIC_LOGO_URL=")) {
      console.log("✅ Logo env already set — skipping (CI mode)")
      return
    }
  }

  if (!(await fs.pathExists(LOGO_PATH))) {
    console.warn("⚠️  Logo not found at", LOGO_PATH, "— skipping logo env")
    return
  }

  const buf = await fs.readFile(LOGO_PATH)
  const dataUrl = "data:image/png;base64," + buf.toString("base64")

  // Write or update .env.local
  let envContent = ""
  if (await fs.pathExists(ENV_FILE)) {
    envContent = await fs.readFile(ENV_FILE, "utf8")
    // Remove any existing NEXT_PUBLIC_LOGO_URL line
    envContent = envContent.replace(/^NEXT_PUBLIC_LOGO_URL=.*$/m, "").trim()
    envContent += "\n"
  }
  envContent += `NEXT_PUBLIC_LOGO_URL=${dataUrl}\n`
  await fs.writeFile(ENV_FILE, envContent, "utf8")
  console.log(`✅ Logo embedded as base64 data URL → .env.local (${(buf.length / 1024).toFixed(1)} KB)`)
}

async function buildIconData() {
  console.log("🔹 Building icon data for docs...")

  // Skip if on CI and file already exists
  if (process.env.CI && await fs.pathExists(OUT)) {
    console.log("✅ icons-data.json already exists — skipping generation (CI mode)")
    return
  }

  if (!(await fs.pathExists(SVG_DIR))) {
    if (await fs.pathExists(OUT)) {
      console.log("✅ private-svgs not found but icons-data.json exists — using committed data")
      return
    }
    console.error("❌ private-svgs/ not found at", SVG_DIR)
    process.exit(1)
  }

  const files = (await fs.readdir(SVG_DIR))
    .filter((f) => f.endsWith(".svg"))
    .sort()

  const icons = []
  for (const file of files) {
    const raw = await fs.readFile(path.join(SVG_DIR, file), "utf8")
    const svg = normaliseSvg(raw)
    const vbMatch = svg.match(/viewBox="([^"]+)"/)
    const slug = file.replace(/\.svg$/i, "")
    icons.push({
      name: toComponentName(file),
      slug,
      category: getCategory(slug),
      viewBox: vbMatch ? vbMatch[1] : "0 0 24 24",
      svg,
    })
  }

  const categories = [
    "All",
    ...new Set(icons.map((i) => i.category)).values(),
  ].sort((a, b) => (a === "All" ? -1 : b === "All" ? 1 : a.localeCompare(b)))

  await fs.ensureDir(path.dirname(OUT))
  await fs.writeJson(OUT, { icons, categories }, { spaces: 0 })
  console.log(`✅ ${icons.length} icons, ${categories.length - 1} categories → public/icons-data.json`)
}

async function run() {
  await buildIconData()
  await buildLogoEnv()
}

run().catch((err) => {
  console.error("❌", err.message)
  process.exit(1)
})
