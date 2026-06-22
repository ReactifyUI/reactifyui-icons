"use client"
import { useState } from "react"

interface ColorCardProps {
  name: string
  hex: string
}

function isLight(hex: string): boolean {
  const h = hex.replace("#", "")
  if (h.length !== 6) return true
  const r = parseInt(h.slice(0, 2), 16)
  const g = parseInt(h.slice(2, 4), 16)
  const b = parseInt(h.slice(4, 6), 16)
  return (0.299 * r + 0.587 * g + 0.114 * b) > 160
}

export function ColorCard({ name, hex }: ColorCardProps) {
  const [copied, setCopied] = useState(false)

  function copy() {
    navigator.clipboard.writeText(hex)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const light = isLight(hex)
  const textColor = light ? "rgba(0,0,0,0.75)" : "rgba(255,255,255,0.9)"
  const subColor = light ? "rgba(0,0,0,0.45)" : "rgba(255,255,255,0.55)"

  return (
    <button
      onClick={copy}
      className="group relative rounded-xl overflow-hidden border border-white/10 hover:scale-105 hover:shadow-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/30"
      style={{ background: hex }}
      title={`Copy ${hex}`}
      aria-label={`Copy ${name} ${hex}`}
    >
      {/* Color swatch area */}
      <div className="h-20 w-full" />

      {/* Info bar */}
      <div
        className="px-3 py-2 flex items-center justify-between"
        style={{ background: light ? "rgba(0,0,0,0.08)" : "rgba(0,0,0,0.25)" }}
      >
        <div className="text-left min-w-0">
          <p className="text-[11px] font-semibold truncate" style={{ color: textColor }}>{name}</p>
          <p className="text-[10px] font-mono" style={{ color: subColor }}>{hex.toUpperCase()}</p>
        </div>
        <div
          className="ml-2 flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-md transition-opacity"
          style={{ background: light ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.15)" }}
        >
          {copied ? (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: light ? "#16a34a" : "#4ade80" }}>
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: subColor }}>
              <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          )}
        </div>
      </div>
    </button>
  )
}
