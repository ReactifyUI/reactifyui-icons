export interface ColorItem {
  name: string
  hex: string
}

export interface GradientItem {
  name: string
  stops: string[]
  css: string
}

export interface ColorSection {
  id: string
  title: string
  emoji: string
  description: string
  colors: ColorItem[]
}

export interface GradientSection {
  id: string
  title: string
  emoji: string
  gradients: GradientItem[]
}

// ── Base / Normal Colors ─────────────────────────────────────────────────────
export const BASE_COLORS: ColorItem[] = [
  { name: "Black", hex: "#000000" }, { name: "White", hex: "#FFFFFF" },
  { name: "Red", hex: "#FF0000" }, { name: "Lime", hex: "#00FF00" },
  { name: "Blue", hex: "#0000FF" }, { name: "Cyan", hex: "#00FFFF" },
  { name: "Magenta", hex: "#FF00FF" }, { name: "Yellow", hex: "#FFFF00" },
  { name: "Silver", hex: "#C0C0C0" }, { name: "Gray", hex: "#808080" },
  { name: "Maroon", hex: "#800000" }, { name: "Olive", hex: "#808000" },
  { name: "Green", hex: "#008000" }, { name: "Purple", hex: "#800080" },
  { name: "Teal", hex: "#008080" }, { name: "Navy", hex: "#000080" },
  { name: "Orange", hex: "#FFA500" }, { name: "Coral", hex: "#FF7F50" },
  { name: "Tomato", hex: "#FF6347" }, { name: "Salmon", hex: "#FA8072" },
  { name: "DarkRed", hex: "#8B0000" }, { name: "FireBrick", hex: "#B22222" },
  { name: "Crimson", hex: "#DC143C" }, { name: "IndianRed", hex: "#CD5C5C" },
  { name: "LightCoral", hex: "#F08080" }, { name: "DarkSalmon", hex: "#E9967A" },
  { name: "LightSalmon", hex: "#FFA07A" }, { name: "OrangeRed", hex: "#FF4500" },
  { name: "DarkOrange", hex: "#FF8C00" }, { name: "Gold", hex: "#FFD700" },
  { name: "Khaki", hex: "#F0E68C" }, { name: "DarkKhaki", hex: "#BDB76B" },
  { name: "PeachPuff", hex: "#FFDAB9" }, { name: "Moccasin", hex: "#FFE4B5" },
  { name: "LemonChiffon", hex: "#FFFACD" }, { name: "LightYellow", hex: "#FFFFE0" },
  { name: "Beige", hex: "#F5F5DC" }, { name: "AntiqueWhite", hex: "#FAEBD7" },
  { name: "Gainsboro", hex: "#DCDCDC" }, { name: "LightGray", hex: "#D3D3D3" },
  { name: "DarkGray", hex: "#A9A9A9" }, { name: "DimGray", hex: "#696969" },
  { name: "SlateGray", hex: "#708090" }, { name: "DarkSlateGray", hex: "#2F4F4F" },
  { name: "RosyBrown", hex: "#BC8F8F" }, { name: "Chocolate", hex: "#D2691E" },
  { name: "SaddleBrown", hex: "#8B4513" }, { name: "Sienna", hex: "#A0522D" },
  { name: "Brown", hex: "#A52A2A" }, { name: "Tan", hex: "#D2B48C" },
  { name: "DarkGreen", hex: "#006400" }, { name: "ForestGreen", hex: "#228B22" },
  { name: "SeaGreen", hex: "#2E8B57" }, { name: "MediumSeaGreen", hex: "#3CB371" },
  { name: "LightGreen", hex: "#90EE90" }, { name: "PaleGreen", hex: "#98FB98" },
  { name: "LawnGreen", hex: "#7CFC00" }, { name: "Chartreuse", hex: "#7FFF00" },
  { name: "SpringGreen", hex: "#00FF7F" }, { name: "YellowGreen", hex: "#9ACD32" },
  { name: "Aquamarine", hex: "#7FFFD4" }, { name: "Turquoise", hex: "#40E0D0" },
  { name: "DarkTurquoise", hex: "#00CED1" }, { name: "LightSeaGreen", hex: "#20B2AA" },
  { name: "CadetBlue", hex: "#5F9EA0" }, { name: "LightCyan", hex: "#E0FFFF" },
  { name: "SkyBlue", hex: "#87CEEB" }, { name: "DeepSkyBlue", hex: "#00BFFF" },
  { name: "DodgerBlue", hex: "#1E90FF" }, { name: "CornflowerBlue", hex: "#6495ED" },
  { name: "RoyalBlue", hex: "#4169E1" }, { name: "MediumBlue", hex: "#0000CD" },
  { name: "DarkBlue", hex: "#00008B" }, { name: "MidnightBlue", hex: "#191970" },
]

// ── Advanced Colors ──────────────────────────────────────────────────────────
export const ADVANCED_COLORS: ColorItem[] = [
  { name: "Dark Red", hex: "#8B0000" }, { name: "Crimson", hex: "#DC143C" },
  { name: "Firebrick", hex: "#B22222" }, { name: "Maroon", hex: "#800000" },
  { name: "Scarlet", hex: "#FF2400" }, { name: "Ruby", hex: "#E0115F" },
  { name: "Dark Orange", hex: "#FF8C00" }, { name: "Burnt Orange", hex: "#CC5500" },
  { name: "Amber", hex: "#FFBF00" }, { name: "Goldenrod", hex: "#DAA520" },
  { name: "Mustard", hex: "#FFDB58" }, { name: "Ochre", hex: "#CC7722" },
  { name: "Olive", hex: "#808000" }, { name: "Dark Olive Green", hex: "#556B2F" },
  { name: "Army Green", hex: "#4B5320" }, { name: "Forest Green", hex: "#228B22" },
  { name: "Emerald", hex: "#50C878" }, { name: "Sea Green", hex: "#2E8B57" },
  { name: "Teal", hex: "#008080" }, { name: "Dark Cyan", hex: "#008B8B" },
  { name: "Turquoise", hex: "#40E0D0" }, { name: "Aquamarine", hex: "#7FFFD4" },
  { name: "Mint", hex: "#98FF98" }, { name: "Spring Green", hex: "#00FF7F" },
  { name: "Neon Green", hex: "#39FF14" }, { name: "Chartreuse", hex: "#7FFF00" },
  { name: "Copper", hex: "#B87333" }, { name: "Bronze", hex: "#CD7F32" },
  { name: "Gold", hex: "#FFD700" }, { name: "Charcoal", hex: "#36454F" },
  { name: "Jet Black", hex: "#343434" }, { name: "Onyx", hex: "#353839" },
  { name: "Gunmetal", hex: "#2a3439" }, { name: "Cobalt Blue", hex: "#0047AB" },
  { name: "Steel Blue", hex: "#4682B4" }, { name: "Baby Blue", hex: "#89CFF0" },
  { name: "Electric Blue", hex: "#7DF9FF" }, { name: "Neon Blue", hex: "#4666FF" },
  { name: "Indigo", hex: "#4B0082" }, { name: "Dark Violet", hex: "#9400D3" },
  { name: "Amethyst", hex: "#9966CC" }, { name: "Orchid", hex: "#DA70D6" },
  { name: "Fuchsia", hex: "#FF00FF" }, { name: "Magenta", hex: "#FF1DCE" },
  { name: "Hot Pink", hex: "#FF69B4" }, { name: "Deep Pink", hex: "#FF1493" },
  { name: "Neon Pink", hex: "#FF6EC7" }, { name: "Pale Violet Red", hex: "#DB7093" },
  { name: "Thistle", hex: "#D8BFD8" }, { name: "Plum", hex: "#DDA0DD" },
]

// ── ReactifyUI Semantic Palette (Light) ──────────────────────────────────────
export const SEMANTIC_LIGHT: ColorItem[] = [
  { name: "Primary / Default", hex: "#3B82F6" }, { name: "Primary / Hover", hex: "#2563EB" },
  { name: "Primary / Active", hex: "#1D4ED8" }, { name: "Primary / Disabled", hex: "#93C5FD" },
  { name: "Primary / Focus", hex: "#60A5FA" }, { name: "Secondary / Default", hex: "#8B5CF6" },
  { name: "Secondary / Hover", hex: "#7C3AED" }, { name: "Secondary / Active", hex: "#6D28D9" },
  { name: "Secondary / Disabled", hex: "#C4B5FD" }, { name: "Secondary / Focus", hex: "#A78BFA" },
  { name: "Success / Default", hex: "#10B981" }, { name: "Success / Hover", hex: "#059669" },
  { name: "Success / Active", hex: "#047857" }, { name: "Success / Disabled", hex: "#6EE7B7" },
  { name: "Warning / Default", hex: "#F59E0B" }, { name: "Warning / Hover", hex: "#D97706" },
  { name: "Warning / Active", hex: "#B45309" }, { name: "Warning / Disabled", hex: "#FCD34D" },
  { name: "Danger / Default", hex: "#EF4444" }, { name: "Danger / Hover", hex: "#DC2626" },
  { name: "Danger / Active", hex: "#B91C1C" }, { name: "Danger / Disabled", hex: "#FCA5A5" },
  { name: "Info / Default", hex: "#0EA5E9" }, { name: "Info / Hover", hex: "#0284C7" },
  { name: "Info / Active", hex: "#0369A1" }, { name: "Info / Disabled", hex: "#7DD3FC" },
  { name: "Neutral / Background", hex: "#F9FAFB" }, { name: "Neutral / Surface", hex: "#F3F4F6" },
  { name: "Neutral / Border", hex: "#D1D5DB" }, { name: "Neutral / Subtle Text", hex: "#9CA3AF" },
  { name: "Neutral / Default Text", hex: "#374151" }, { name: "Neutral / Strong Text", hex: "#111827" },
  { name: "Highlight / Yellow", hex: "#FEF08A" }, { name: "Highlight / Pink", hex: "#F9A8D4" },
  { name: "Highlight / Blue", hex: "#BAE6FD" }, { name: "Highlight / Green", hex: "#BBF7D0" },
  { name: "Highlight / Purple", hex: "#E9D5FF" }, { name: "Alert BG / Error", hex: "#FEF2F2" },
  { name: "Alert BG / Warning", hex: "#FFFBEB" }, { name: "Alert BG / Success", hex: "#ECFDF5" },
  { name: "Alert BG / Info", hex: "#EFF6FF" },
]

// ── ReactifyUI Semantic Palette (Dark) ───────────────────────────────────────
export const SEMANTIC_DARK: ColorItem[] = [
  { name: "Primary / Default", hex: "#60A5FA" }, { name: "Primary / Hover", hex: "#3B82F6" },
  { name: "Primary / Active", hex: "#2563EB" }, { name: "Primary / Disabled", hex: "#1E3A8A" },
  { name: "Secondary / Default", hex: "#C4B5FD" }, { name: "Secondary / Hover", hex: "#A78BFA" },
  { name: "Secondary / Active", hex: "#8B5CF6" }, { name: "Secondary / Disabled", hex: "#4C1D95" },
  { name: "Success / Default", hex: "#34D399" }, { name: "Success / Hover", hex: "#10B981" },
  { name: "Success / Active", hex: "#059669" }, { name: "Success / Disabled", hex: "#064E3B" },
  { name: "Warning / Default", hex: "#FBBF24" }, { name: "Warning / Hover", hex: "#F59E0B" },
  { name: "Danger / Default", hex: "#F87171" }, { name: "Danger / Hover", hex: "#EF4444" },
  { name: "Danger / Active", hex: "#DC2626" }, { name: "Danger / Disabled", hex: "#7F1D1D" },
  { name: "Info / Default", hex: "#38BDF8" }, { name: "Info / Hover", hex: "#0EA5E9" },
  { name: "Neutral / Background", hex: "#111827" }, { name: "Neutral / Surface", hex: "#1F2937" },
  { name: "Neutral / Border", hex: "#374151" }, { name: "Neutral / Default Text", hex: "#E5E7EB" },
  { name: "Neutral / Strong Text", hex: "#F9FAFB" }, { name: "Highlight / Yellow", hex: "#CA8A04" },
  { name: "Highlight / Pink", hex: "#BE185D" }, { name: "Highlight / Blue", hex: "#075985" },
  { name: "Highlight / Green", hex: "#166534" }, { name: "Highlight / Purple", hex: "#5B21B6" },
  { name: "Alert BG / Error", hex: "#7F1D1D" }, { name: "Alert BG / Warning", hex: "#78350F" },
  { name: "Alert BG / Success", hex: "#064E3B" }, { name: "Alert BG / Info", hex: "#0C4A6E" },
]

// ── Theme Colors (grouped) ───────────────────────────────────────────────────
export const THEME_COLORS: ColorSection[] = [
  {
    id: "dark-themes", title: "Dark Themes", emoji: "🌑",
    description: "Deep, moody dark backgrounds for night-mode interfaces",
    colors: [
      { name: "Midnight Noir", hex: "#0D0D0D" }, { name: "Shadow Realm", hex: "#1A1A1A" },
      { name: "Lunar Eclipse", hex: "#2C2C2C" }, { name: "Stormy Sky", hex: "#3B3B4F" },
      { name: "Dusk Horizon", hex: "#2E2B40" }, { name: "Onyx Shadow", hex: "#171717" },
      { name: "Scarlet Flame", hex: "#7A1E1E" }, { name: "Nightfall Blue", hex: "#1B263B" },
      { name: "Velvet Moon", hex: "#2E294E" }, { name: "Obsidian Black", hex: "#0B0B0B" },
      { name: "Deep Space", hex: "#101820" },
    ],
  },
  {
    id: "light-themes", title: "Light Themes", emoji: "☀️",
    description: "Clean, airy backgrounds for minimal and professional UIs",
    colors: [
      { name: "Golden Hour", hex: "#FFD580" }, { name: "Ivory Cloud", hex: "#F9F9F9" },
      { name: "Radiant Pearl", hex: "#F6F0E9" }, { name: "Marble White", hex: "#FAFAFA" },
      { name: "Silver Frost", hex: "#C0C0C0" }, { name: "Crystal Clear", hex: "#E8F9FD" },
      { name: "Cloudy Grey", hex: "#D9D9D9" }, { name: "Pearl White", hex: "#FDFDFD" },
      { name: "Champagne Mist", hex: "#EFE1D6" }, { name: "Lunar Silver", hex: "#D3D3D3" },
      { name: "Pale Sand", hex: "#F4EBD0" },
    ],
  },
  {
    id: "pastel-themes", title: "Pastel / Soft Themes", emoji: "🌸",
    description: "Gentle, soothing tones for approachable and friendly designs",
    colors: [
      { name: "Blush Petal", hex: "#F8C8DC" }, { name: "Rosewood Charm", hex: "#A0525C" },
      { name: "Velvet Rose", hex: "#E6A6B0" }, { name: "Twilight Glow", hex: "#D6CADD" },
      { name: "Cherry Blossom", hex: "#FFB7C5" }, { name: "Rose Quartz", hex: "#F7CAC9" },
      { name: "Soft Lavender", hex: "#C8A2C8" }, { name: "Crystal Rose", hex: "#FADADD" },
      { name: "Peach Bloom", hex: "#FFDAB9" }, { name: "Icy Mint", hex: "#B2F2BB" },
    ],
  },
  {
    id: "neon-cyber", title: "Neon / Cyber Themes", emoji: "🔮",
    description: "Vibrant, electric hues for cyberpunk and futuristic interfaces",
    colors: [
      { name: "Cyber Neon", hex: "#39FF14" }, { name: "Electric Violet", hex: "#8F00FF" },
      { name: "Neon Pulse", hex: "#FF073A" }, { name: "Electric Aqua", hex: "#00FFFF" },
      { name: "Cyberpunk Glow", hex: "#FF00FF" }, { name: "Neon Coral", hex: "#FF6EC7" },
      { name: "Magenta Wave", hex: "#E11584" }, { name: "Cosmic Indigo", hex: "#3F00FF" },
      { name: "Galaxy Purple", hex: "#6A0DAD" }, { name: "Stardust Glow", hex: "#FFEF00" },
    ],
  },
  {
    id: "nature-themes", title: "Nature-Inspired Themes", emoji: "🌊",
    description: "Organic, earth-toned palettes drawn from the natural world",
    colors: [
      { name: "Ocean Breeze", hex: "#00BFFF" }, { name: "Desert Sand", hex: "#EDC9AF" },
      { name: "Forest Whisper", hex: "#228B22" }, { name: "Arctic Mist", hex: "#E0FFFF" },
      { name: "Coral Bloom", hex: "#FF7F50" }, { name: "Olive Grove", hex: "#808000" },
      { name: "Glacier Blue", hex: "#74C2E1" }, { name: "Jade Valley", hex: "#00A36C" },
      { name: "Tropical Rain", hex: "#00CED1" }, { name: "Mint Breeze", hex: "#98FF98" },
      { name: "Mystic Forest", hex: "#355E3B" }, { name: "Autumn Leaf", hex: "#D2691E" },
    ],
  },
  {
    id: "warm-earthy", title: "Warm & Earthy Themes", emoji: "🔥",
    description: "Rich, warm tones evoking fire, earth, and spice",
    colors: [
      { name: "Crimson Storm", hex: "#990000" }, { name: "Ruby Ember", hex: "#9B111E" },
      { name: "Bronze Age", hex: "#CD7F32" }, { name: "Coffee Roast", hex: "#6F4E37" },
      { name: "Amber Spark", hex: "#FFBF00" }, { name: "Lava Flow", hex: "#E25822" },
      { name: "Lemon Zest", hex: "#FFD300" }, { name: "Cinnamon Spice", hex: "#A0522D" },
      { name: "Rustic Clay", hex: "#B7410E" }, { name: "Warm Amber", hex: "#FFB300" },
      { name: "Desert Dusk", hex: "#C19A6B" },
    ],
  },
  {
    id: "gemstone-luxury", title: "Gemstone / Luxury Themes", emoji: "💎",
    description: "Rich gem-inspired colors for premium and luxury products",
    colors: [
      { name: "Aurora Glow", hex: "#B6FFEA" }, { name: "Sapphire Dream", hex: "#0F52BA" },
      { name: "Emerald Dawn", hex: "#50C878" }, { name: "Sapphire Ice", hex: "#4682B4" },
      { name: "Royal Amethyst", hex: "#663399" }, { name: "Ruby Ember", hex: "#E0115F" },
      { name: "Emerald Mist", hex: "#2E8B57" }, { name: "Golden Glow", hex: "#FFD700" },
      { name: "Copper Flame", hex: "#B87333" },
    ],
  },
  {
    id: "cosmic-fantasy", title: "Cosmic / Fantasy Themes", emoji: "🌌",
    description: "Otherworldly hues from space, myth, and imagination",
    colors: [
      { name: "Sunset Mirage", hex: "#FF4500" }, { name: "Mystic Fog", hex: "#B0C4DE" },
      { name: "Indigo Flame", hex: "#4B0082" }, { name: "Galaxy Dust", hex: "#483D8B" },
      { name: "Cosmic Indigo", hex: "#3F00FF" }, { name: "Horizon Glow", hex: "#FFA07A" },
      { name: "Polar Light", hex: "#ADD8E6" }, { name: "Stardust Glow", hex: "#FFF44F" },
      { name: "Rainbow Spectrum", hex: "#FF6F61" },
    ],
  },
]

// ── Gradients ────────────────────────────────────────────────────────────────
export const GRADIENTS: GradientSection[] = [
  {
    id: "fire-energy", title: "Fire & Energy", emoji: "🔥",
    gradients: [
      { name: "Sunset Blaze", stops: ["#ff512f", "#dd2476"], css: "linear-gradient(135deg, #ff512f, #dd2476)" },
      { name: "Molten Lava", stops: ["#ff6a00", "#ee0979"], css: "linear-gradient(135deg, #ff6a00, #ee0979)" },
      { name: "Golden Heat", stops: ["#f7971e", "#ffd200"], css: "linear-gradient(135deg, #f7971e, #ffd200)" },
      { name: "Crimson Flame", stops: ["#ff4e50", "#f9d423"], css: "linear-gradient(135deg, #ff4e50, #f9d423)" },
      { name: "Solar Burst", stops: ["#f83600", "#f9d423"], css: "linear-gradient(135deg, #f83600, #f9d423)" },
      { name: "Inferno Glow", stops: ["#ff416c", "#ff4b2b"], css: "linear-gradient(135deg, #ff416c, #ff4b2b)" },
      { name: "Amber Pulse", stops: ["#fc4a1a", "#f7b733"], css: "linear-gradient(135deg, #fc4a1a, #f7b733)" },
      { name: "Volcano Core", stops: ["#ff9966", "#ff5e62"], css: "linear-gradient(135deg, #ff9966, #ff5e62)" },
      { name: "Blazing Torch", stops: ["#ed213a", "#93291e"], css: "linear-gradient(135deg, #ed213a, #93291e)" },
      { name: "Fiery Spectrum", stops: ["#f857a6", "#ff5858"], css: "linear-gradient(135deg, #f857a6, #ff5858)" },
    ],
  },
  {
    id: "ocean-cool", title: "Ocean & Cool Breeze", emoji: "🌊",
    gradients: [
      { name: "Deep Sea", stops: ["#2c3e50", "#4ca1af"], css: "linear-gradient(135deg, #2c3e50, #4ca1af)" },
      { name: "Aqua Wave", stops: ["#00c6ff", "#0072ff"], css: "linear-gradient(135deg, #00c6ff, #0072ff)" },
      { name: "Ice Glacier", stops: ["#83a4d4", "#b6fbff"], css: "linear-gradient(135deg, #83a4d4, #b6fbff)" },
      { name: "Blue Horizon", stops: ["#1e3c72", "#2a5298"], css: "linear-gradient(135deg, #1e3c72, #2a5298)" },
      { name: "Crystal Lake", stops: ["#89f7fe", "#66a6ff"], css: "linear-gradient(135deg, #89f7fe, #66a6ff)" },
      { name: "Ocean Breeze", stops: ["#00d2ff", "#3a7bd5"], css: "linear-gradient(135deg, #00d2ff, #3a7bd5)" },
      { name: "Frosted Blue", stops: ["#5ee7df", "#b490ca"], css: "linear-gradient(135deg, #5ee7df, #b490ca)" },
      { name: "Pacific Wave", stops: ["#00b4db", "#0083b0"], css: "linear-gradient(135deg, #00b4db, #0083b0)" },
      { name: "Blue Lagoon", stops: ["#005aa7", "#fffde4"], css: "linear-gradient(135deg, #005aa7, #fffde4)" },
      { name: "Shallow Reef", stops: ["#36d1dc", "#5b86e5"], css: "linear-gradient(135deg, #36d1dc, #5b86e5)" },
    ],
  },
  {
    id: "nature-organic", title: "Nature & Organic", emoji: "🌿",
    gradients: [
      { name: "Emerald Glow", stops: ["#11998e", "#38ef7d"], css: "linear-gradient(135deg, #11998e, #38ef7d)" },
      { name: "Forest Whisper", stops: ["#134e5e", "#71b280"], css: "linear-gradient(135deg, #134e5e, #71b280)" },
      { name: "Lime Burst", stops: ["#a8e063", "#56ab2f"], css: "linear-gradient(135deg, #a8e063, #56ab2f)" },
      { name: "Tropical Leaves", stops: ["#00b09b", "#96c93d"], css: "linear-gradient(135deg, #00b09b, #96c93d)" },
      { name: "Mint Fresh", stops: ["#43e97b", "#38f9d7"], css: "linear-gradient(135deg, #43e97b, #38f9d7)" },
      { name: "Morning Dew", stops: ["#dce35b", "#45b649"], css: "linear-gradient(135deg, #dce35b, #45b649)" },
      { name: "Bamboo Forest", stops: ["#44a08d", "#093637"], css: "linear-gradient(135deg, #44a08d, #093637)" },
      { name: "Spring Fields", stops: ["#76b852", "#8dc26f"], css: "linear-gradient(135deg, #76b852, #8dc26f)" },
    ],
  },
  {
    id: "galaxy-futuristic", title: "Galaxy & Futuristic", emoji: "🌌",
    gradients: [
      { name: "Cosmic Purple", stops: ["#41295a", "#2f0743"], css: "linear-gradient(135deg, #41295a, #2f0743)" },
      { name: "Nebula Glow", stops: ["#6a11cb", "#2575fc"], css: "linear-gradient(135deg, #6a11cb, #2575fc)" },
      { name: "Aurora Sky", stops: ["#00c6fb", "#005bea"], css: "linear-gradient(135deg, #00c6fb, #005bea)" },
      { name: "Deep Cosmos", stops: ["#20002c", "#cbb4d4"], css: "linear-gradient(135deg, #20002c, #cbb4d4)" },
      { name: "Plasma Light", stops: ["#fc466b", "#3f5efb"], css: "linear-gradient(135deg, #fc466b, #3f5efb)" },
      { name: "Black Hole", stops: ["#000000", "#434343"], css: "linear-gradient(135deg, #000000, #434343)" },
      { name: "Dark Matter", stops: ["#283c86", "#45a247"], css: "linear-gradient(135deg, #283c86, #45a247)" },
      { name: "Supernova", stops: ["#00c3ff", "#ffff1c"], css: "linear-gradient(135deg, #00c3ff, #ffff1c)" },
      { name: "Solar Eclipse", stops: ["#0f0c29", "#24243e"], css: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)" },
      { name: "Void Spark", stops: ["#3a1c71", "#ffaf7b"], css: "linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b)" },
    ],
  },
  {
    id: "luxury-royal", title: "Luxury & Royal", emoji: "✨",
    gradients: [
      { name: "Golden Hour", stops: ["#f6d365", "#fda085"], css: "linear-gradient(135deg, #f6d365, #fda085)" },
      { name: "Royal Velvet", stops: ["#6a0572", "#a6036d"], css: "linear-gradient(135deg, #6a0572, #a6036d)" },
      { name: "Diamond Shine", stops: ["#d9a7c7", "#fffcdc"], css: "linear-gradient(135deg, #d9a7c7, #fffcdc)" },
      { name: "Golden Crown", stops: ["#fceabb", "#f8b500"], css: "linear-gradient(135deg, #fceabb, #f8b500)" },
      { name: "Ruby Wine", stops: ["#870000", "#190a05"], css: "linear-gradient(135deg, #870000, #190a05)" },
      { name: "Luxury Amber", stops: ["#ffb75e", "#ed8f03"], css: "linear-gradient(135deg, #ffb75e, #ed8f03)" },
      { name: "Velour Gold", stops: ["#ffe259", "#ffa751"], css: "linear-gradient(135deg, #ffe259, #ffa751)" },
    ],
  },
  {
    id: "pastel-soft", title: "Pastel & Soft", emoji: "🎨",
    gradients: [
      { name: "Peach Cream", stops: ["#fbc2eb", "#a6c1ee"], css: "linear-gradient(135deg, #fbc2eb, #a6c1ee)" },
      { name: "Cotton Candy", stops: ["#ff9a9e", "#fad0c4"], css: "linear-gradient(135deg, #ff9a9e, #fad0c4)" },
      { name: "Soft Blush", stops: ["#e0c3fc", "#8ec5fc"], css: "linear-gradient(135deg, #e0c3fc, #8ec5fc)" },
      { name: "Pink Dream", stops: ["#ffdde1", "#ee9ca7"], css: "linear-gradient(135deg, #ffdde1, #ee9ca7)" },
      { name: "Powder Sky", stops: ["#89f7fe", "#f0f9ff"], css: "linear-gradient(135deg, #89f7fe, #f0f9ff)" },
      { name: "Lavender Fog", stops: ["#cfd9df", "#e2ebf0"], css: "linear-gradient(135deg, #cfd9df, #e2ebf0)" },
      { name: "Rose Cloud", stops: ["#ffdde1", "#ee9ca7"], css: "linear-gradient(135deg, #ffdde1, #ee9ca7)" },
    ],
  },
  {
    id: "neon-modern", title: "Neon & Modern", emoji: "🌟",
    gradients: [
      { name: "Neon Pulse", stops: ["#fc00ff", "#00dbde"], css: "linear-gradient(135deg, #fc00ff, #00dbde)" },
      { name: "Electric Lime", stops: ["#a8ff78", "#78ffd6"], css: "linear-gradient(135deg, #a8ff78, #78ffd6)" },
      { name: "Neon Blast", stops: ["#12c2e9", "#f64f59"], css: "linear-gradient(135deg, #12c2e9, #c471ed, #f64f59)" },
      { name: "Nightlife", stops: ["#373b44", "#4286f4"], css: "linear-gradient(135deg, #373b44, #4286f4)" },
      { name: "Tron Grid", stops: ["#00c9ff", "#92fe9d"], css: "linear-gradient(135deg, #00c9ff, #92fe9d)" },
      { name: "Vaporwave", stops: ["#8e2de2", "#4a00e0"], css: "linear-gradient(135deg, #8e2de2, #4a00e0)" },
      { name: "Synthwave", stops: ["#f953c6", "#b91d73"], css: "linear-gradient(135deg, #f953c6, #b91d73)" },
      { name: "Hyper Blue", stops: ["#00f2fe", "#4facfe"], css: "linear-gradient(135deg, #00f2fe, #4facfe)" },
    ],
  },
  {
    id: "creative-experimental", title: "Creative & Experimental", emoji: "🎭",
    gradients: [
      { name: "Candy Pop", stops: ["#f857a6", "#ff5858"], css: "linear-gradient(135deg, #f857a6, #ff5858)" },
      { name: "Miami Vibes", stops: ["#fc6076", "#ef9d43"], css: "linear-gradient(135deg, #fc6076, #ff9a44, #ef9d43)" },
      { name: "Berry Mix", stops: ["#4e54c8", "#8f94fb"], css: "linear-gradient(135deg, #4e54c8, #8f94fb)" },
      { name: "Citrus Rush", stops: ["#f7971e", "#ffd200"], css: "linear-gradient(135deg, #f7971e, #ffd200)" },
      { name: "Rainbow Flow", stops: ["#ff9a9e", "#fad0c4"], css: "linear-gradient(135deg, #ff9a9e, #fad0c4)" },
      { name: "Kaleido Light", stops: ["#00c3ff", "#ffff1c"], css: "linear-gradient(135deg, #00c3ff, #ffff1c)" },
      { name: "Sunrise Pop", stops: ["#ff512f", "#f09819"], css: "linear-gradient(135deg, #ff512f, #f09819)" },
    ],
  },
]
