// This file is only use for docs and playground

import registryJson from "../data/registry.json"

export interface IconRegistryItem {
    name: string
    import: string
    importNamed: string
    component: string
    filePath: string
    category: string
    tags: string[]
    originalSvg: string
}

// Strictly typed registry object
export const registry = registryJson as Record<string, IconRegistryItem>

// List of all icon names (["Home", "Search", "User", ...])
export const iconNames = Object.keys(registry)

// Optionally: list of categories
export const iconCategories = [
    ...new Set(iconNames.map(name => registry[name].category))
]

// Optionally: map searchable items
export const searchableIcons = iconNames.map(name => ({
    name,
    tags: registry[name].tags,
    category: registry[name].category
}))

export default registry


