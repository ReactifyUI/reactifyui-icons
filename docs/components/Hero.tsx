"use client"
import { useState } from "react"

export function Hero() {
  const [copied, setCopied] = useState(false)

  function copyInstall() {
    navigator.clipboard.writeText("npm install reactifyui-icons")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-brand-900 to-slate-900">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          v1.0.0 — Free &amp; Open Source
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
          Beautiful icons for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-violet-400">
            React
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          1,696 production-ready SVG icons. Tree-shakeable, TypeScript native,
          zero CSS dependencies. Fully customizable with themes, animations,
          and weights.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-10">
          {[
            ["1,696", "Icons"],
            ["60+", "Categories"],
            ["30+", "Themes"],
            ["12", "Animations"],
          ].map(([num, label]) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold text-white">{num}</div>
              <div className="text-sm text-white/50">{label}</div>
            </div>
          ))}
        </div>

        {/* Install command */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <div
            className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-3 cursor-pointer hover:bg-white/15 transition-colors group"
            onClick={copyInstall}
          >
            <span className="text-white/40 font-mono text-sm select-none">$</span>
            <code className="font-mono text-white text-sm">npm install reactifyui-icons</code>
            <span className="text-white/40 group-hover:text-white/70 transition-colors ml-2">
              {copied ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                </svg>
              )}
            </span>
          </div>

          <a
            href="#icons"
            className="px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-colors text-sm"
          >
            Browse Icons →
          </a>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {["MIT Licensed", "TypeScript", "Tree-Shakeable", "Zero CSS", "React 19+"].map((b) => (
            <span key={b} className="px-3 py-1 text-xs font-medium text-white/60 bg-white/5 border border-white/10 rounded-full">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
