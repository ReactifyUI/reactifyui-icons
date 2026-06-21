const PROPS = [
  // Size & Color
  { prop: "size", type: "number | string", default: "24", desc: "Width and height of the icon in px" },
  { prop: "color", type: "string", default: "currentColor", desc: "Icon color — any valid CSS color value" },
  { prop: "strokeWidth", type: "number", default: "1.5", desc: "SVG stroke width" },
  // Design system
  { prop: "theme", type: "IconTheme", default: '"default"', desc: "Named theme token. Sets color, opacity, and optionally strokeWidth" },
  { prop: "weight", type: "IconWeight", default: '"regular"', desc: "Stroke weight preset: thin | light | regular | bold | heavy" },
  { prop: "preset", type: "string", default: "—", desc: "Named preset defined in IconProvider" },
  { prop: "state", type: "IconState", default: '"default"', desc: "State preset: active | inactive | selected | disabled | hover" },
  // Transforms
  { prop: "rotate", type: "number", default: "0", desc: "Rotation in degrees" },
  { prop: "flip", type: '"horizontal" | "vertical" | "both"', default: "—", desc: "Mirror the icon along an axis" },
  { prop: "scale", type: "number", default: "1", desc: "Scale factor" },
  { prop: "translate", type: "{ x?: number, y?: number }", default: "—", desc: "Offset position in pixels" },
  { prop: "transformOrigin", type: "string", default: '"center"', desc: "CSS transform-origin for rotate/scale" },
  // Animation
  { prop: "animate", type: "IconAnimation", default: "—", desc: "Animation config. See animation section below" },
  // Accessibility
  { prop: "title", type: "string", default: "—", desc: "Injects <title> inside the SVG for screen readers" },
  { prop: "desc", type: "string", default: "—", desc: "Injects <desc> for extended description" },
  { prop: "decorative", type: "boolean", default: "true", desc: "When true, sets aria-hidden and removes role='img'" },
  // SVG pass-through
  { prop: "className", type: "string", default: "—", desc: "Additional CSS class name" },
  { prop: "style", type: "CSSProperties", default: "—", desc: "Inline style object" },
  { prop: "onClick", type: "MouseEventHandler", default: "—", desc: "Click handler (and all other SVG event handlers)" },
  { prop: "strokeLinecap", type: "string", default: "—", desc: "SVG stroke-linecap attribute" },
  { prop: "strokeLinejoin", type: "string", default: "—", desc: "SVG stroke-linejoin attribute" },
  { prop: "fill", type: "string", default: "—", desc: "SVG fill attribute" },
]

const ANIMATION_PROPS = [
  { prop: "type", type: "IconAnimationType", default: "required", desc: "Animation type (see table below)" },
  { prop: "duration", type: "number", default: "1", desc: "Duration in seconds" },
  { prop: "delay", type: "number", default: "0", desc: "Delay before animation starts (seconds)" },
  { prop: "iterationCount", type: 'number | "infinite"', default: '"infinite"', desc: "How many times the animation runs" },
  { prop: "timingFunction", type: "string", default: '"linear"', desc: "CSS timing function: linear | ease | ease-in | ease-out | ease-in-out" },
]

const ANIMATION_TYPES = [
  { type: "spin", desc: "Continuous clockwise rotation" },
  { type: "spinReverse", desc: "Counter-clockwise rotation" },
  { type: "progress", desc: "Partial rotation loop (loading arc)" },
  { type: "pulse", desc: "Scale in/out pulse" },
  { type: "ping", desc: "Ripple/ping effect" },
  { type: "bounce", desc: "Vertical bounce" },
  { type: "shake", desc: "Horizontal shake" },
  { type: "wiggle", desc: "Rotation wiggle" },
  { type: "float", desc: "Gentle vertical float" },
  { type: "fade", desc: "Opacity fade in/out" },
  { type: "slideUp", desc: "Slide up and fade in" },
  { type: "slideDown", desc: "Slide down and fade in" },
]

const WEIGHTS = [
  { weight: "thin", stroke: "0.75", desc: "Hairline stroke" },
  { weight: "light", stroke: "1", desc: "Light stroke" },
  { weight: "regular", stroke: "1.5", desc: "Default stroke" },
  { weight: "bold", stroke: "2", desc: "Bold stroke" },
  { weight: "heavy", stroke: "2.5", desc: "Heaviest stroke" },
]

function Table({ headers, rows }: { headers: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            {headers.map((h) => (
              <th key={h} className="text-left px-4 py-3 font-semibold text-gray-700 whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={`border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-gray-600 align-top">
                  {typeof cell === "string" && cell.startsWith('"') ? (
                    <code className="text-brand-600 font-mono text-xs bg-brand-50 px-1.5 py-0.5 rounded">{cell}</code>
                  ) : typeof cell === "string" && cell !== "—" && cell !== "required" ? (
                    <code className="text-gray-700 font-mono text-xs bg-gray-100 px-1.5 py-0.5 rounded">{cell}</code>
                  ) : (
                    <span className={cell === "required" ? "text-red-500 font-medium" : ""}>{cell}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function ApiReference() {
  return (
    <section id="api" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">API Reference</h2>
          <p className="text-gray-500 text-lg">Every prop, every type — all in one place.</p>
        </div>

        {/* Icon Props */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-2">IconProps</h3>
          <p className="text-gray-500 text-sm mb-4">All props are optional unless marked required. Every icon accepts all standard <code className="text-gray-700 font-mono">SVGAttributes</code> in addition to these.</p>
          <Table
            headers={["Prop", "Type", "Default", "Description"]}
            rows={PROPS.map((p) => [
              <code key={p.prop} className="font-mono text-xs text-brand-700 font-semibold">{p.prop}</code>,
              <code key={p.prop+"t"} className="font-mono text-xs text-gray-600">{p.type}</code>,
              p.default,
              p.desc,
            ])}
          />
        </div>

        {/* IconAnimation */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-2">IconAnimation</h3>
          <p className="text-gray-500 text-sm mb-4">Passed to the <code className="font-mono text-gray-700">animate</code> prop.</p>
          <Table
            headers={["Prop", "Type", "Default", "Description"]}
            rows={ANIMATION_PROPS.map((p) => [
              <code key={p.prop} className="font-mono text-xs text-brand-700 font-semibold">{p.prop}</code>,
              <code key={p.prop+"t"} className="font-mono text-xs text-gray-600">{p.type}</code>,
              p.default,
              p.desc,
            ])}
          />
        </div>

        {/* Animation types */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Animation Types</h3>
          <Table
            headers={["type", "Description"]}
            rows={ANIMATION_TYPES.map((a) => [
              <code key={a.type} className="font-mono text-xs text-brand-700">{a.type}</code>,
              a.desc,
            ])}
          />
        </div>

        {/* Weights */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Icon Weights</h3>
          <Table
            headers={["weight", "strokeWidth", "Description"]}
            rows={WEIGHTS.map((w) => [
              <code key={w.weight} className="font-mono text-xs text-brand-700">{w.weight}</code>,
              w.stroke,
              w.desc,
            ])}
          />
        </div>
      </div>
    </section>
  )
}
