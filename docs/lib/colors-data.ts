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
  { name: "Light Sea Green", hex: "#20B2AA" }, { name: "Mint", hex: "#98FF98" },
  { name: "Spring Green", hex: "#00FF7F" }, { name: "Neon Green", hex: "#39FF14" },
  { name: "Lime", hex: "#BFFF00" }, { name: "Chartreuse", hex: "#7FFF00" },
  { name: "Dark Khaki", hex: "#BDB76B" }, { name: "Beige", hex: "#F5F5DC" },
  { name: "Tan", hex: "#D2B48C" }, { name: "Burlywood", hex: "#DEB887" },
  { name: "Wheat", hex: "#F5DEB3" }, { name: "Chocolate", hex: "#D2691E" },
  { name: "Saddle Brown", hex: "#8B4513" }, { name: "Sienna", hex: "#A0522D" },
  { name: "Peru", hex: "#CD853F" }, { name: "Copper", hex: "#B87333" },
  { name: "Bronze", hex: "#CD7F32" }, { name: "Gold", hex: "#FFD700" },
  { name: "Light Yellow", hex: "#FFFFE0" }, { name: "Lemon Chiffon", hex: "#FFFACD" },
  { name: "Moccasin", hex: "#FFE4B5" }, { name: "Peach Puff", hex: "#FFDAB9" },
  { name: "Papaya Whip", hex: "#FFEFD5" }, { name: "Lavender Blush", hex: "#FFF0F5" },
  { name: "Misty Rose", hex: "#FFE4E1" }, { name: "Seashell", hex: "#FFF5EE" },
  { name: "Snow", hex: "#FFFAFA" }, { name: "Ivory", hex: "#FFFFF0" },
  { name: "Honeydew", hex: "#F0FFF0" }, { name: "Azure", hex: "#F0FFFF" },
  { name: "Alice Blue", hex: "#F0F8FF" }, { name: "Ghost White", hex: "#F8F8FF" },
  { name: "White Smoke", hex: "#F5F5F5" }, { name: "Gainsboro", hex: "#DCDCDC" },
  { name: "Light Gray", hex: "#D3D3D3" }, { name: "Silver", hex: "#C0C0C0" },
  { name: "Dark Gray", hex: "#A9A9A9" }, { name: "Dim Gray", hex: "#696969" },
  { name: "Slate Gray", hex: "#708090" }, { name: "Light Slate Gray", hex: "#778899" },
  { name: "Charcoal", hex: "#36454F" }, { name: "Jet Black", hex: "#343434" },
  { name: "Onyx", hex: "#353839" }, { name: "Gunmetal", hex: "#2a3439" },
  { name: "Midnight Blue", hex: "#191970" }, { name: "Navy Blue", hex: "#000080" },
  { name: "Cobalt Blue", hex: "#0047AB" }, { name: "Royal Blue", hex: "#4169E1" },
  { name: "Dodger Blue", hex: "#1E90FF" }, { name: "Cornflower Blue", hex: "#6495ED" },
  { name: "Steel Blue", hex: "#4682B4" }, { name: "Deep Sky Blue", hex: "#00BFFF" },
  { name: "Sky Blue", hex: "#87CEEB" }, { name: "Light Sky Blue", hex: "#87CEFA" },
  { name: "Powder Blue", hex: "#B0E0E6" }, { name: "Baby Blue", hex: "#89CFF0" },
  { name: "Ice Blue", hex: "#99FFFF" }, { name: "Electric Blue", hex: "#7DF9FF" },
  { name: "Neon Blue", hex: "#4666FF" }, { name: "Indigo", hex: "#4B0082" },
  { name: "Dark Violet", hex: "#9400D3" }, { name: "Amethyst", hex: "#9966CC" },
  { name: "Orchid", hex: "#DA70D6" }, { name: "Fuchsia", hex: "#FF00FF" },
  { name: "Magenta", hex: "#FF1DCE" }, { name: "Hot Pink", hex: "#FF69B4" },
  { name: "Deep Pink", hex: "#FF1493" }, { name: "Neon Pink", hex: "#FF6EC7" },
  { name: "Coral", hex: "#FF7F50" }, { name: "Tomato", hex: "#FF6347" },
  { name: "Salmon", hex: "#FA8072" }, { name: "Light Coral", hex: "#F08080" },
  { name: "Indian Red", hex: "#CD5C5C" }, { name: "Rosy Brown", hex: "#BC8F8F" },
  { name: "Pale Violet Red", hex: "#DB7093" }, { name: "Thistle", hex: "#D8BFD8" },
  { name: "Plum", hex: "#DDA0DD" },
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

// ── Cool / Fresh Themes ──────────────────────────────────────────────────────
export const COOL_FRESH_COLORS: ColorItem[] = [
  { name: "Arctic Dawn", hex: "#AFEEEE" }, { name: "Teal Breeze", hex: "#008080" },
  { name: "Winter Sky", hex: "#87CEEB" }, { name: "Azure Skies", hex: "#007FFF" },
  { name: "Ocean Pearl", hex: "#5DADEC" }, { name: "Frostbite Blue", hex: "#4682B4" },
  { name: "Tropical Sunset", hex: "#FF7F50" }, { name: "Coral Bloom", hex: "#FF6F61" },
  { name: "Crystal Rose", hex: "#FFD1DC" },
]

// ── Advanced ReactifyUI Multi-Color Themes ───────────────────────────────────
export interface MultiColorTheme {
  name: string
  colors: string[]
}

export interface MultiColorSection {
  id: string
  title: string
  emoji: string
  themes: MultiColorTheme[]
}

export const ADVANCED_THEMES: MultiColorSection[] = [
  {
    id: "aurora", title: "Aurora Themes", emoji: "🌌",
    themes: [
      { name: "Aurora Emerald", colors: ["#0B3D91","#1ABC9C","#16A085","#2ECC71"] },
      { name: "Polar Violet", colors: ["#2C3E50","#8E44AD","#9B59B6","#D7BDE2"] },
      { name: "Arctic Glow", colors: ["#154360","#2980B9","#48C9B0","#F4F6F7"] },
      { name: "Celestial Teal", colors: ["#0E6251","#117864","#48C9B0","#E8F8F5"] },
      { name: "Borealis Pink", colors: ["#6C3483","#AF7AC5","#E8DAEF","#FADBD8"] },
      { name: "Starlit Sky", colors: ["#1B2631","#34495E","#5D6D7E","#AEB6BF"] },
      { name: "Aurora Flame", colors: ["#641E16","#C0392B","#E74C3C","#F5B7B1"] },
      { name: "Twilight Haze", colors: ["#512E5F","#7D3C98","#BB8FCE","#F4ECF7"] },
      { name: "Frozen Lights", colors: ["#1F618D","#2980B9","#5499C7","#AED6F1"] },
      { name: "Solar Mist", colors: ["#117A65","#16A085","#73C6B6","#D1F2EB"] },
    ],
  },
  {
    id: "cyberpunk", title: "Cyberpunk Themes", emoji: "🕶",
    themes: [
      { name: "Neon Tokyo", colors: ["#0F0F0F","#FF00FF","#00FFFF","#FFD700"] },
      { name: "Synthwave", colors: ["#2D0B59","#FF2E88","#05D9E8","#FFFADE"] },
      { name: "Future Glow", colors: ["#0B0C10","#66FCF1","#45A29E","#C5C6C7"] },
      { name: "Techno Violet", colors: ["#3D087B","#FF4C29","#05DFD7","#F9F9F9"] },
      { name: "Cyber Jade", colors: ["#001219","#0A9396","#94D2BD","#E9D8A6"] },
      { name: "Laser Pink", colors: ["#300030","#FF007F","#FF77A9","#FFD6E0"] },
      { name: "Ultra Blue", colors: ["#0A0F0D","#3A86FF","#00B4D8","#CAF0F8"] },
      { name: "Dark Neon", colors: ["#1E1E2F","#FF006E","#8338EC","#FB5607"] },
      { name: "Chrome Grid", colors: ["#121212","#00FF85","#00D4FF","#F2F2F2"] },
      { name: "Hologram Pulse", colors: ["#222831","#00ADB5","#FF2E63","#EEEEEE"] },
    ],
  },
  {
    id: "retro-arcade", title: "Retro Arcade Themes", emoji: "🎮",
    themes: [
      { name: "Pixel Pop", colors: ["#101820","#FF6F61","#FEE715","#00BFFF"] },
      { name: "Gameboy Green", colors: ["#0F380F","#306230","#8BAC0F","#9BBC0F"] },
      { name: "8-bit Night", colors: ["#2E294E","#541388","#D90368","#F1E9DA"] },
      { name: "Pac-Man", colors: ["#000000","#FFD700","#FF0000","#0000FF"] },
      { name: "Joystick", colors: ["#141414","#FF005C","#FB8B24","#3A86FF"] },
      { name: "Console Glow", colors: ["#1C1C1C","#FF49A0","#49FFCE","#FFFF49"] },
      { name: "Atari Classic", colors: ["#2B2D42","#8D99AE","#EDF2F4","#EF233C"] },
      { name: "Retro Sunset", colors: ["#3D0C02","#FF4500","#FF8C00","#FFD700"] },
      { name: "Pixel Ocean", colors: ["#001F54","#034078","#1282A2","#F0F3BD"] },
      { name: "VHS Glitch", colors: ["#2C2C54","#706FD3","#34ACE0","#33D9B2"] },
    ],
  },
  {
    id: "glassmorphism", title: "Glassmorphism Themes", emoji: "🧊",
    themes: [
      { name: "Frost White", colors: ["#FFFFFFAA","#E0E0E0AA","#BDBDBDAA","#9E9E9EAA"] },
      { name: "Misty Blue", colors: ["#EAF6FFAA","#B3E5FC","#81D4FA","#4FC3F7"] },
      { name: "Frozen Aqua", colors: ["#F0FFFFAA","#B2EBF2","#4DD0E1","#00BCD4"] },
      { name: "Crystal Violet", colors: ["#F3E5F5AA","#E1BEE7","#BA68C8","#9C27B0"] },
      { name: "Soft Gray", colors: ["#FAFAFAAA","#EEEEEE","#E0E0E0","#BDBDBD"] },
      { name: "Cloud White", colors: ["#FFFFFFCC","#F5F5F5","#E8EAF6","#CFD8DC"] },
      { name: "Icy Mint", colors: ["#E8F5E9AA","#C8E6C9","#A5D6A7","#81C784"] },
      { name: "Glacial Pink", colors: ["#FCE4E4AA","#F8BBD0","#F48FB1","#F06292"] },
      { name: "Polar Sky", colors: ["#E3F2FDCC","#90CAF9","#64B5F6","#42A5F5"] },
      { name: "Clear Lavender", colors: ["#EDE7F6AA","#D1C4E9","#B39DDB","#9575CD"] },
    ],
  },
  {
    id: "futuristic-cyber", title: "Futuristic / Cyber Themes", emoji: "🔮",
    themes: [
      { name: "Neon Grid", colors: ["#39FF14","#0FF0FC","#FF073A"] },
      { name: "Cyberpunk Nights", colors: ["#FF007F","#00F0FF","#120458"] },
      { name: "Digital Hologram", colors: ["#9D00FF","#00FFE0","#2D0A3E"] },
      { name: "AI Circuit", colors: ["#46FFAE","#0085FF","#0D1A26"] },
      { name: "Techno Pulse", colors: ["#FF3CAC","#784BA0","#2B86C5"] },
      { name: "Graffiti Pop", colors: ["#FF005C","#00D084","#FFD300"] },
      { name: "Midnight Subway", colors: ["#2D3436","#00CEC9","#FAB1A0"] },
      { name: "Concrete Jungle", colors: ["#636E72","#D63031","#81ECEC"] },
      { name: "Street Neon", colors: ["#FF6B81","#48DBFB","#1B1464"] },
      { name: "City Lights", colors: ["#FFE53B","#FF2525","#2F3542"] },
    ],
  },
  {
    id: "artistic", title: "Artistic & Creative", emoji: "🎨",
    themes: [
      { name: "Canvas Splash", colors: ["#FF6F61","#6B5B95","#88B04B"] },
      { name: "Pop Art", colors: ["#FF4136","#2ECC40","#0074D9"] },
      { name: "Watercolor Dreams", colors: ["#A8E6CF","#DCEDC1","#FFD3B6"] },
      { name: "Abstract Flow", colors: ["#FF9A8B","#FF6A88","#FF99AC"] },
      { name: "Mosaic Pattern", colors: ["#E94E77","#542733","#5A6A62"] },
      { name: "Dragon Fire", colors: ["#FF4500","#8B0000","#FFD700"] },
      { name: "Elven Forest", colors: ["#2E8B57","#3CB371","#98FB98"] },
      { name: "Mystic Moon", colors: ["#483D8B","#9370DB","#E6E6FA"] },
      { name: "Phoenix Glow", colors: ["#FF7518","#FFB347","#FFD580"] },
      { name: "Frozen Crystal", colors: ["#B0E0E6","#00CED1","#4682B4"] },
    ],
  },
  {
    id: "gaming-esports", title: "Gaming & Esports", emoji: "🎮",
    themes: [
      { name: "Valorant Pulse", colors: ["#FF4655","#0F1923","#ECE8E1"] },
      { name: "Minecraft Grass", colors: ["#3C9A5F","#6A994E","#BC4749"] },
      { name: "Fortnite Pop", colors: ["#7F5AF0","#2CB67D","#F25F4C"] },
      { name: "Cyber Arena", colors: ["#FF2E63","#08D9D6","#252A34"] },
      { name: "Shadow Ninja", colors: ["#1A1A1D","#950740","#C3073F"] },
      { name: "Diwali Glow", colors: ["#FF9933","#FFFFFF","#138808"] },
      { name: "Christmas Eve", colors: ["#006400","#FF0000","#FFD700"] },
      { name: "Halloween Night", colors: ["#FF7518","#000000","#8B008B"] },
      { name: "Holi Splash", colors: ["#FF61A6","#2AF598","#FFE53B"] },
      { name: "Cherry Blossom", colors: ["#FFC0CB","#FF69B4","#FFD1DC"] },
    ],
  },
  {
    id: "seasonal", title: "Seasonal & Nature", emoji: "❄️",
    themes: [
      { name: "Spring Meadow", colors: ["#77DD77","#C1E1C1","#FDFD96"] },
      { name: "Summer Breeze", colors: ["#FFB347","#FFD700","#FF6961"] },
      { name: "Autumn Leaves", colors: ["#D2691E","#CD853F","#FFDEAD"] },
      { name: "Winter Frost", colors: ["#00CED1","#B0E0E6","#E0FFFF"] },
      { name: "Monsoon Mist", colors: ["#2E86AB","#A9CCE3","#D5DBDB"] },
      { name: "Emerald Glow", colors: ["#50C878","#046307","#A9DFBF"] },
      { name: "Sapphire Night", colors: ["#0F52BA","#1E3A8A","#82CFFD"] },
      { name: "Ruby Shine", colors: ["#E0115F","#9B111E","#FFC1CC"] },
      { name: "Amethyst Dream", colors: ["#9966CC","#663399","#E6E6FA"] },
      { name: "Obsidian Stone", colors: ["#0B0C10","#1F2833","#C5C6C7"] },
    ],
  },
  {
    id: "oceanic", title: "Oceanic & Aquatic", emoji: "🌊",
    themes: [
      { name: "Deep Ocean", colors: ["#001F3F","#0074D9","#7FDBFF"] },
      { name: "Coral Reef", colors: ["#FF7F50","#40E0D0","#FFDAB9"] },
      { name: "Lagoon Blue", colors: ["#00CED1","#20B2AA","#F0FFFF"] },
      { name: "Arctic Ice", colors: ["#5DADE2","#D6EAF8","#E5E8E8"] },
      { name: "Sunset Beach", colors: ["#FF5733","#FFC300","#DAF7A6"] },
      { name: "Steel Grey", colors: ["#2F4F4F","#708090","#B0C4DE"] },
      { name: "Golden Luxe", colors: ["#FFD700","#B8860B","#FFF8DC"] },
      { name: "Copper Bronze", colors: ["#B87333","#CD7F32","#EED6C4"] },
      { name: "Chrome Shine", colors: ["#C0C0C0","#808080","#F5F5F5"] },
      { name: "Titanium Black", colors: ["#1C1C1C","#2E2E2E","#A9A9A9"] },
    ],
  },
  {
    id: "food-inspired", title: "Food & Dessert Inspired", emoji: "🍰",
    themes: [
      { name: "Strawberry Cream", colors: ["#FF6F61","#FFD1DC","#FFF0F5"] },
      { name: "Mint Choco", colors: ["#3EB489","#6B4226","#D2B48C"] },
      { name: "Blueberry Muffin", colors: ["#4B0082","#6A5ACD","#E6E6FA"] },
      { name: "Caramel Swirl", colors: ["#C68E17","#FFD580","#FFF5E1"] },
      { name: "Matcha Latte", colors: ["#B2D8B2","#7FB77E","#F8F6E7"] },
      { name: "Apple Minimal", colors: ["#FAFAFA","#D1D1D6","#1D1D1F"] },
      { name: "Google Pop", colors: ["#4285F4","#EA4335","#FBBC05","#34A853"] },
      { name: "Microsoft Grid", colors: ["#F25022","#7FBA00","#00A4EF","#FFB900"] },
      { name: "Tesla Energy", colors: ["#CC0000","#222222","#EAEAEA"] },
      { name: "Spotify Groove", colors: ["#1DB954","#191414","#FFFFFF"] },
    ],
  },
  {
    id: "sci-fi-space", title: "Sci-Fi & Space", emoji: "🧬",
    themes: [
      { name: "Quantum Glow", colors: ["#3B0A45","#7F00FF","#E100FF"] },
      { name: "DNA Helix", colors: ["#4FACFE","#00F2FE","#43E97B"] },
      { name: "Space Nebula", colors: ["#2C003E","#512B81","#B67DE8"] },
      { name: "AI Circuit", colors: ["#00FFAB","#2C2C54","#706FD3"] },
      { name: "Time Warp", colors: ["#0F2027","#203A43","#2C5364"] },
      { name: "Forest Canopy", colors: ["#228B22","#6B8E23","#98FB98"] },
      { name: "Volcanic Lava", colors: ["#FF4500","#8B0000","#2F1B0C"] },
      { name: "Aurora Lights", colors: ["#00FFAB","#4D4C7D","#6A82FB"] },
      { name: "Rainforest Mist", colors: ["#355E3B","#4CAF50","#A5D6A7"] },
      { name: "Dreamwave", colors: ["#FF6FD8","#3813C2","#00C9FF"] },
    ],
  },
  {
    id: "luxury-travel", title: "Luxury & Travel", emoji: "🏆",
    themes: [
      { name: "Royal Purple", colors: ["#4B0082","#800080","#E6E6FA"] },
      { name: "Ivory Gold", colors: ["#FFFFF0","#FFD700","#B8860B"] },
      { name: "Sapphire Luxe", colors: ["#0D1B2A","#1B263B","#415A77"] },
      { name: "Platinum White", colors: ["#F8F8F8","#DCDCDC","#A9A9A9"] },
      { name: "Black Diamond", colors: ["#0A0A0A","#1C1C1C","#2E2E2E"] },
      { name: "Safari Dusk", colors: ["#C19A6B","#8B4513","#F4A460"] },
      { name: "Himalayan Sky", colors: ["#4682B4","#B0C4DE","#F0FFFF"] },
      { name: "Tokyo Nights", colors: ["#0F0E17","#FF8906","#F25F4C"] },
      { name: "Santorini Blue", colors: ["#1E90FF","#00BFFF","#F0F8FF"] },
      { name: "Amazon Rain", colors: ["#2E8B57","#006400","#98FB98"] },
    ],
  },
]
