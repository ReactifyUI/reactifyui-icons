"use client"
import { useState, useMemo, useCallback, useRef } from "react"

interface IconData {
  name: string
  slug: string
  category: string
  viewBox: string
  svg: string
}

interface Props {
  icons: IconData[]
  categories: string[]
}

function perceivedLuminance(hex: string): number {
  const h = hex.replace("#", "")
  if (h.length !== 6) return 128
  const r = parseInt(h.slice(0, 2), 16)
  const g = parseInt(h.slice(2, 4), 16)
  const b = parseInt(h.slice(4, 6), 16)
  return 0.299 * r + 0.587 * g + 0.114 * b
}

function IconCard({
  icon,
  color,
  size,
  onCopy,
}: {
  icon: IconData
  color: string
  size: number
  onCopy: (name: string) => void
}) {
  const previewSvg = icon.svg
    .replace(/currentColor/g, color)
    .replace(/<svg([^>]*)>/i, (_, attrs) => {
      const cleaned = attrs
        .replace(/\s*width="[^"]*"/gi, "")
        .replace(/\s*height="[^"]*"/gi, "")
      return `<svg${cleaned} width="${size}" height="${size}">`
    })

  const needsDarkBg = perceivedLuminance(color) > 180
  const label = icon.name.replace(/([A-Z])/g, " $1").trim()

  return (
    <button
      onClick={() => onCopy(icon.name)}
      className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-100 bg-white hover:border-brand-300 hover:shadow-md hover:shadow-brand-100 transition-all duration-150 cursor-pointer relative"
      title={`Click to copy import for ${icon.name}`}
    >
      <div
        className="w-10 h-10 flex items-center justify-center rounded-lg transition-colors"
        style={needsDarkBg ? { background: "#1e1e2e", borderRadius: 8 } : undefined}
        dangerouslySetInnerHTML={{ __html: previewSvg }}
      />
      <span className="text-[10px] text-gray-400 text-center leading-tight truncate w-full">
        {label}
      </span>
      {/* Copy overlay hint */}
      <div className="absolute inset-0 rounded-xl bg-brand-600/0 group-hover:bg-brand-600/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all pointer-events-none">
        <div className="absolute bottom-1 right-1">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
        </div>
      </div>
    </button>
  )
}

export function IconsBrowser({ icons, categories }: Props) {
  const [query, setQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [color, setColor] = useState("#111827")
  const [hexInput, setHexInput] = useState("#111827")
  const [size, setSize] = useState(24)
  const [toast, setToast] = useState("")
  const [toastVisible, setToastVisible] = useState(false)
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Debounced search
  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setQuery(val)
  }, [])

  const results = useMemo(() => {
    let list = icons
    if (activeCategory !== "All") {
      list = list.filter((i) => i.category === activeCategory)
    }
    if (query.trim()) {
      const q = query.toLowerCase()
      list = list.filter(
        (i) => i.name.toLowerCase().includes(q) || i.slug.toLowerCase().includes(q)
      )
    }
    return list
  }, [icons, query, activeCategory])

  function handleHexInput(e: React.ChangeEvent<HTMLInputElement>) {
    let val = e.target.value
    if (val && !val.startsWith("#")) val = "#" + val
    setHexInput(val)
    if (/^#[0-9a-fA-F]{6}$/.test(val)) setColor(val)
  }

  function handleColorPicker(e: React.ChangeEvent<HTMLInputElement>) {
    setColor(e.target.value)
    setHexInput(e.target.value)
  }

  function showToast(msg: string) {
    setToast(msg)
    setToastVisible(true)
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current)
    toastTimerRef.current = setTimeout(() => setToastVisible(false), 2000)
  }

  function handleCopy(name: string) {
    navigator.clipboard.writeText(`import { ${name} } from 'reactifyui-icons'`)
    showToast(`Copied import for ${name}`)
  }

  return (
    <section id="icons" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Icon Library
          </h2>
          <p className="text-gray-500 text-lg">
            {icons.length.toLocaleString()} icons. Click any icon to copy its import statement.
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 mb-6 flex flex-wrap gap-4 items-end">
          {/* Search */}
          <div className="flex-1 min-w-[200px]">
            <label className="text-xs font-medium text-gray-400 uppercase tracking-wider block mb-1.5">Search</label>
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search icons..."
                className="w-full h-9 pl-8 pr-3 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-brand-500 bg-gray-50"
              />
            </div>
          </div>

          {/* Color */}
          <div>
            <label className="text-xs font-medium text-gray-400 uppercase tracking-wider block mb-1.5">Color</label>
            <div className="flex items-center gap-0 h-9 border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
              <input
                type="color"
                value={color}
                onChange={handleColorPicker}
                className="w-9 h-9 border-none cursor-pointer p-1"
              />
              <input
                type="text"
                value={hexInput}
                onChange={handleHexInput}
                maxLength={7}
                className="w-20 h-9 px-2 text-xs font-mono text-gray-700 border-none bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Size */}
          <div>
            <label className="text-xs font-medium text-gray-400 uppercase tracking-wider block mb-1.5">
              Size <span className="normal-case text-gray-300">{size}px</span>
            </label>
            <input
              type="range"
              min={12}
              max={48}
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="w-28 accent-brand-600"
            />
          </div>

          {/* Result count */}
          <div className="ml-auto self-end">
            <span className="text-sm text-gray-400">
              {results.length.toLocaleString()} {results.length === 1 ? "icon" : "icons"}
            </span>
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-brand-600 text-white shadow-sm shadow-brand-200"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-brand-300 hover:text-brand-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Icon grid */}
        {results.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-gray-400 gap-3">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <p className="text-lg font-medium">No icons found</p>
            <p className="text-sm">Try a different search term or category</p>
          </div>
        ) : (
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-2">
            {results.map((icon) => (
              <IconCard
                key={icon.slug}
                icon={icon}
                color={color}
                size={size}
                onCopy={handleCopy}
              />
            ))}
          </div>
        )}
      </div>

      {/* Toast */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-200 ${
          toastVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-2 bg-gray-900 text-white text-sm px-4 py-2.5 rounded-full shadow-lg whitespace-nowrap">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          {toast}
        </div>
      </div>
    </section>
  )
}
