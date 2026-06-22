import type { Metadata } from "next"
import { ColorCard } from "./ColorCard"
import { GradientCard } from "./GradientCard"
import {
  BASE_COLORS,
  ADVANCED_COLORS,
  SEMANTIC_LIGHT,
  SEMANTIC_DARK,
  THEME_COLORS,
  GRADIENTS,
} from "../../lib/colors-data"

export const metadata: Metadata = {
  title: "Color Palettes — ReactifyUI",
  description:
    "Complete color palette reference for ReactifyUI — base colors, advanced colors, semantic tokens, theme colors, and 100 gradients. Click any swatch to copy the hex code.",
}

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const SECTIONS = [
  { id: "base", label: "Base Colors" },
  { id: "advanced", label: "Advanced" },
  { id: "semantic-light", label: "Semantic Light" },
  { id: "semantic-dark", label: "Semantic Dark" },
  { id: "themes", label: "Themes" },
  { id: "gradients", label: "Gradients" },
]

export default function ColorsPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* ── Navbar ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <a href={`${BASE}/`} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            ReactifyUI Icons
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`}
                className="px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 px-4">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,#4f46e520_0%,transparent_60%),radial-gradient(ellipse_at_bottom_right,#7c3aed20_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.015)_1px,transparent_1px)] bg-[size:48px_48px]" />

        {/* Floating color orbs */}
        <div className="absolute top-16 left-1/4 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: "linear-gradient(135deg,#ff512f,#dd2476)" }} />
        <div className="absolute bottom-16 right-1/4 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: "linear-gradient(135deg,#6a11cb,#2575fc)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: "linear-gradient(135deg,#43e97b,#38f9d7)" }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/70 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Not a library — public reference palette
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400">
              Color Palettes
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            A complete color reference — base colors, advanced shades, semantic
            tokens, themed palettes, and 100+ hand-crafted gradients.
            Click any swatch to copy the hex code.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-10">
            {[
              ["107+", "Base Colors"],
              ["50+", "Advanced Colors"],
              ["75+", "Semantic Tokens"],
              ["100+", "Gradients"],
            ].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-bold text-white">{num}</div>
                <div className="text-xs text-gray-500">{label}</div>
              </div>
            ))}
          </div>

          {/* Mini color strip preview */}
          <div className="flex justify-center gap-1.5 flex-wrap max-w-lg mx-auto">
            {["#FF0000","#FF7F50","#FFD700","#00FF00","#00FFFF","#0000FF","#8B00FF","#FF00FF","#FF69B4","#4f46e5","#10B981","#F59E0B"].map((c) => (
              <div key={c} className="w-7 h-7 rounded-lg border border-white/10 shadow-lg" style={{ background: c }} />
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-20">

        {/* ── Base Colors ──────────────────────────────────────────────────── */}
        <section id="base" className="scroll-mt-20">
          <SectionHeader emoji="🎨" title="Base Colors" count={BASE_COLORS.length}
            desc="The foundational 107 named CSS colors — the building blocks of any palette." />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
            {BASE_COLORS.map((c) => <ColorCard key={c.hex + c.name} {...c} />)}
          </div>
        </section>

        {/* ── Advanced Colors ───────────────────────────────────────────────── */}
        <section id="advanced" className="scroll-mt-20">
          <SectionHeader emoji="✨" title="Advanced Colors" count={ADVANCED_COLORS.length}
            desc="Extended spectrum with named variations — scarlets, cobalts, neons, and everything between." />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
            {ADVANCED_COLORS.map((c) => <ColorCard key={c.hex + c.name} {...c} />)}
          </div>
        </section>

        {/* ── Semantic Light ────────────────────────────────────────────────── */}
        <section id="semantic-light" className="scroll-mt-20">
          <SectionHeader emoji="☀️" title="Semantic Palette — Light Mode" count={SEMANTIC_LIGHT.length}
            desc="ReactifyUI design tokens for light interfaces — primary, status, neutral, highlight, and overlay colors." />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {SEMANTIC_LIGHT.map((c) => <ColorCard key={c.hex + c.name} {...c} />)}
          </div>
        </section>

        {/* ── Semantic Dark ─────────────────────────────────────────────────── */}
        <section id="semantic-dark" className="scroll-mt-20">
          <SectionHeader emoji="🌙" title="Semantic Palette — Dark Mode" count={SEMANTIC_DARK.length}
            desc="ReactifyUI design tokens adapted for dark interfaces — all the same roles, tuned for contrast on dark backgrounds." />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {SEMANTIC_DARK.map((c) => <ColorCard key={c.hex + c.name} {...c} />)}
          </div>
        </section>

        {/* ── Theme Colors ──────────────────────────────────────────────────── */}
        <section id="themes" className="scroll-mt-20">
          <SectionHeader emoji="🎭" title="Theme Collections"
            desc="Curated multi-color themes — dark, light, pastel, neon, nature, earthy, gemstone, and cosmic palettes." />
          <div className="space-y-12">
            {THEME_COLORS.map((section) => (
              <div key={section.id} id={section.id}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">{section.emoji}</span>
                  <h3 className="text-lg font-bold text-white">{section.title}</h3>
                  <span className="px-2 py-0.5 text-xs font-medium text-gray-400 bg-white/5 border border-white/10 rounded-full">
                    {section.colors.length}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-4">{section.description}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                  {section.colors.map((c) => <ColorCard key={c.hex + c.name} {...c} />)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Gradients ─────────────────────────────────────────────────────── */}
        <section id="gradients" className="scroll-mt-20">
          <SectionHeader emoji="🌈" title="Gradient System"
            desc="100+ hand-crafted gradients across 8 categories. Click to copy CSS, click the palette icon to copy hex stops." />
          <div className="space-y-12">
            {GRADIENTS.map((section) => (
              <div key={section.id} id={`gradient-${section.id}`}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">{section.emoji}</span>
                  <h3 className="text-lg font-bold text-white">{section.title}</h3>
                  <span className="px-2 py-0.5 text-xs font-medium text-gray-400 bg-white/5 border border-white/10 rounded-full">
                    {section.gradients.length}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {section.gradients.map((g) => <GradientCard key={g.name} {...g} />)}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/10 py-8 text-center text-xs text-gray-600">
        <p>ReactifyUI Color Palettes · Public Reference · Not a library or package</p>
        <p className="mt-1">
          Made with ❤️ by{" "}
          <a href="https://www.instagram.com/kanchansharma1408/" target="_blank" rel="noopener noreferrer"
            className="text-gray-500 hover:text-pink-400 transition-colors">
            Kanchan Sharma &amp; Team
          </a>
        </p>
      </footer>

    </div>
  )
}

// ── Helper components ──────────────────────────────────────────────────────
function SectionHeader({ emoji, title, desc, count }: { emoji: string; title: string; desc: string; count?: number }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">{emoji}</span>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        {count !== undefined && (
          <span className="px-2.5 py-0.5 text-xs font-medium text-gray-400 bg-white/5 border border-white/10 rounded-full">
            {count}
          </span>
        )}
      </div>
      <p className="text-sm text-gray-500 max-w-2xl">{desc}</p>
      <div className="mt-4 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
    </div>
  )
}
