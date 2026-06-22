"use client"
import { useState } from "react"

interface MultiColorCardProps {
  name: string
  colors: string[]
}

export function MultiColorCard({ name, colors }: MultiColorCardProps) {
  const [copied, setCopied] = useState(false)

  function copy() {
    navigator.clipboard.writeText(colors.join(", "))
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <button
      onClick={copy}
      className="group rounded-xl overflow-hidden border border-white/10 hover:scale-[1.03] hover:shadow-xl hover:border-white/20 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/20 w-full"
      title={`Copy all hex values for ${name}`}
      aria-label={`Copy ${name} palette`}
    >
      {/* Color strip — split into equal segments */}
      <div className="flex h-16">
        {colors.map((c) => (
          <div key={c} className="flex-1" style={{ background: c }} />
        ))}
      </div>

      {/* Info bar */}
      <div className="bg-gray-900/70 backdrop-blur-sm px-3 py-2 flex items-center justify-between gap-2">
        <div className="min-w-0 text-left">
          <p className="text-[11px] font-semibold text-white truncate">{name}</p>
          <div className="flex flex-wrap gap-x-2 mt-0.5">
            {colors.map((c) => (
              <span key={c} className="text-[9px] font-mono text-gray-500 flex items-center gap-1">
                <span className="w-2 h-2 rounded-sm inline-block border border-white/10" style={{ background: c }} />
                {c.replace("AA","").replace("CC","").toUpperCase()}
              </span>
            ))}
          </div>
        </div>
        <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-md bg-white/10 group-hover:bg-white/20 transition-colors">
          {copied ? (
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          )}
        </div>
      </div>
    </button>
  )
}
