/**
 * ReactifyUI Icons Generator (clean version)
 * ONLY converts SVGs → React components.
 * DOES NOT generate registry.json anymore.
 */

import fs from 'fs-extra'
import path from 'path'
import fg from 'fast-glob'
import { optimize } from 'svgo'
import { transform } from '@svgr/core'
import {
  toComponentName,
  logInfo,
  logSuccess,
  extractInnerSvg,
  stripSvgSizeAttributes
} from './helpers.js'

const RAW_SVG_DIR = path.resolve('private-svgs')
const OUTPUT_DIR = path.resolve('src/react/icons')

function wrapWithIconBase(componentName, jsxContent, viewBox) {
  return `
import React from "react";
import IconBase from "../IconBase";

const ${componentName} = (props: import("../../utils/iconTypes").IconProps) => {
  return (
    <IconBase viewBox="${viewBox}" {...props}>
      ${jsxContent}
    </IconBase>
  );
};

export default ${componentName};
`
}

async function generateIcons() {
  logInfo('Generating React icon components...')

  const files = await fg('**/*.svg', { cwd: RAW_SVG_DIR })

  if (files.length === 0) {
    console.error('❌ No SVG files found.')
    process.exit(1)
  }

  await fs.emptyDir(OUTPUT_DIR)

  for (const file of files) {
    const fullPath = path.join(RAW_SVG_DIR, file)
    let svg = await fs.readFile(fullPath, 'utf8')

    // Remove inline width/height
    svg = stripSvgSizeAttributes(svg)

    // Optimize SVG (SVGO handles dimension removal)
    const optimizedSvg = optimize(svg, {
      multipass: true,
      plugins: [
        'removeComments',
        'removeMetadata',
        'removeDimensions',
        { name: 'convertColors', params: { currentColor: true } }
      ]
    }).data

    // Normalize and strip styles/attributes to controls visuals.
    // - remove inline `style`, `class`, `id`, data-* attributes
    // - remove stroke/fill related attributes that should be controlled by IconBase
    // - convert explicit fill/stroke colors to `currentColor` (but keep `none`)
    let normalizedSvg = optimizedSvg
      // remove style, class, id and data attributes
      .replace(/\sstyle="[^"]*"/gi, '')
      .replace(/\sclass="[^"]*"/gi, '')
      .replace(/\sid="[^"]*"/gi, '')
      .replace(/\sdata-[^=]*="[^"]*"/gi, '')
      // remove presentation attributes we want to control from IconBase
      .replace(
        /\s(stroke-width|stroke-linecap|stroke-linejoin|stroke-miterlimit|stroke-opacity|fill-opacity)="[^"]*"/gi,
        ''
      )
      // normalize fill: if fill is not "none", set to currentColor
      .replace(/\sfill="(?!none)([^\"]*)"/gi, ' fill="currentColor"')
      // normalize stroke: if stroke is not "none", set to currentColor
      .replace(/\sstroke="(?!none)([^\"]*)"/gi, ' stroke="currentColor"')
      // remove any inline color attributes (e.g., color="#000")
      .replace(/\scolor="[^"]*"/gi, '')

    // Use normalized SVG for further processing
    let finalOptimizedSvg = normalizedSvg

    // For outlined icons: if an element has a stroke but no fill attribute, set fill="none"
    // This ensures shapes intended to be stroked don't get a default fill color.
    finalOptimizedSvg = finalOptimizedSvg.replace(
      /<(path|rect|circle|ellipse|polygon|polyline|line)([^>]*)>/gi,
      (match, tag, attrs) => {
        // If there's already a fill attribute, leave unchanged
        if (/\bfill=/i.test(attrs)) return match
        // If there's a stroke attribute, add fill="none"
        if (/\bstroke=/i.test(attrs)) {
          // Handle self-closing tags: attrs may end with '/'
          if (/\/\s*$/.test(attrs)) {
            // remove trailing slash from attrs, add fill and close as self-closing
            const cleaned = attrs.replace(/\/\s*$/, '')
            return `<${tag}${cleaned} fill="none" />`
          }
          // Normal opening tag
          return `<${tag}${attrs} fill="none">`
        }
        return match
      }
    )

    // Extract viewBox from original SVG markup (fallback to 0 0 24 24)
    const viewBoxMatch = svg.match(/<svg[^>]*viewBox="([^"]+)"/i)
    const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24'

    const componentName = toComponentName(file)

    // Transform SVG → JSX
    const jsxConverted = await transform(
      finalOptimizedSvg,
      {
        plugins: ['@svgr/plugin-jsx'],
        jsxRuntime: 'automatic',
        expandProps: false
      },
      { componentName }
    )

    // Extract children manually using regex
    const innerContent = extractInnerSvg(jsxConverted)

    // Wrap with IconBase
    const finalComponent = wrapWithIconBase(componentName, innerContent, viewBox)

    // Save to src/react/icons
    await fs.outputFile(path.join(OUTPUT_DIR, `${componentName}.tsx`), finalComponent)
  }

  logSuccess(`Icons generated → ${OUTPUT_DIR}`)
}

generateIcons().catch(err => {
  console.error('❌ Error generating icons:', err)
  process.exit(1)
})
