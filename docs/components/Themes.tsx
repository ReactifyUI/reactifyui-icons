const THEMES = [
  // Core
  { name: "default",   color: "#111827", category: "Core" },
  { name: "light",     color: "#000000", category: "Core" },
  { name: "dark",      color: "#FFFFFF", category: "Core" },
  { name: "muted",     color: "#6C757D", category: "Core" },
  { name: "subtle",    color: "#ADB5BD", category: "Core" },
  { name: "inverted",  color: "#FFFFFF", category: "Core" },
  // Brand
  { name: "primary",   color: "#0D6EFD", category: "Brand" },
  { name: "secondary", color: "#6C757D", category: "Brand" },
  { name: "accent",    color: "#6610F2", category: "Brand" },
  { name: "brand",     color: "#4F46E5", category: "Brand" },
  { name: "highlight", color: "#F59E0B", category: "Brand" },
  // Semantic
  { name: "success",   color: "#1BA97C", category: "Semantic" },
  { name: "warning",   color: "#F4B400", category: "Semantic" },
  { name: "danger",    color: "#DC3545", category: "Semantic" },
  { name: "info",      color: "#0DCAF0", category: "Semantic" },
  { name: "neutral",   color: "#495057", category: "Semantic" },
  // Action
  { name: "active",    color: "#0D6EFD", category: "Action" },
  { name: "inactive",  color: "#ADB5BD", category: "Action" },
  { name: "selected",  color: "#4F46E5", category: "Action" },
  { name: "disabled",  color: "#CED4DA", category: "Action" },
  { name: "hover",     color: "#343A40", category: "Action" },
  // Context
  { name: "navbar",    color: "#FFFFFF", category: "Context" },
  { name: "sidebar",   color: "#6C757D", category: "Context" },
  { name: "toolbar",   color: "#343A40", category: "Context" },
  { name: "footer",    color: "#ADB5BD", category: "Context" },
  { name: "overlay",   color: "#FFFFFF", category: "Context" },
  // Personality
  { name: "calm",      color: "#5EEAD4", category: "Personality" },
  { name: "soft",      color: "#E9D5FF", category: "Personality" },
  { name: "bold",      color: "#111827", category: "Personality" },
  { name: "energetic", color: "#F97316", category: "Personality" },
  { name: "elegant",   color: "#334155", category: "Personality" },
]

const CATEGORIES = ["Core", "Brand", "Semantic", "Action", "Context", "Personality"]

export function Themes() {
  return (
    <section id="themes" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Themes</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            30+ named design tokens. Pass any theme name to the <code className="font-mono text-brand-600">theme</code> prop
            or set a global default via <code className="font-mono text-brand-600">IconProvider</code>.
          </p>
          <div className="mt-4 inline-block px-4 py-2 bg-gray-950 rounded-lg font-mono text-sm text-gray-200">
            {"<AlertCircle theme=\"danger\" />"}
          </div>
        </div>

        <div className="space-y-8">
          {CATEGORIES.map((cat) => (
            <div key={cat}>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">{cat}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {THEMES.filter((t) => t.category === cat).map((theme) => (
                  <div
                    key={theme.name}
                    className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50 hover:border-gray-200 transition-colors"
                  >
                    <div
                      className="w-7 h-7 rounded-lg border border-gray-200 flex-shrink-0"
                      style={{
                        background: theme.color === "#FFFFFF" ? "linear-gradient(135deg, #f8fafc, #e2e8f0)" : theme.color,
                      }}
                    />
                    <code className="text-xs font-mono text-gray-700 truncate">{theme.name}</code>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
