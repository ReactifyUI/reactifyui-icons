"use client"
import { useState } from "react"

interface GradientCardProps {
  name: string
  stops: string[]
  css: string
}

export function GradientCard({ name, stops, css }: GradientCardProps) {
  const [copied, setCopied] = useState<"css" | "stops" | null>(null)

  function copyCss() {
    navigator.clipboard.writeText(css)
    setCopied("css")
    setTimeout(() => setCopied(null), 1500)
  }

  function copyStops(e: React.MouseEvent) {
    e.stopPropagation()
    navigator.clipboard.writeText(stops.join(", "))
    setCopied("stops")
    setTimeout(() => setCopied(null), 1500)
  }

  return (
    <div
      onClick={copyCss}
      className="group rounded-2xl overflow-hidden border border-white/10 hover:scale-[1.03] hover:shadow-2xl transition-all duration-200 cursor-pointer"
    >
      {/* Gradient preview */}
      <div className="h-28 w-full" style={{ background: css }} />

      {/* Info */}
      <div className="bg-gray-900/80 backdrop-blur-sm px-3 py-2.5">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-xs font-semibold text-white truncate">{name}</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {stops.map((s) => (
                <span key={s} className="text-[9px] font-mono text-gray-400 flex items-center gap-1">
                  <span className="inline-block w-2.5 h-2.5 rounded-full border border-white/20 flex-shrink-0" style={{ background: s }} />
                  {s.toUpperCase()}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-1 flex-shrink-0 mt-0.5">
            {/* Copy CSS button */}
            <div
              className="w-6 h-6 flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition-colors"
              title="Copy CSS"
            >
              {copied === "css" ? (
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              )}
            </div>
            {/* Copy stops button */}
            <div
              onClick={copyStops}
              className="w-6 h-6 flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition-colors"
              title="Copy hex stops"
            >
              {copied === "stops" ? (
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
