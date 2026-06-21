import { CodeBlock } from "./Installation"

const EXAMPLES = [
  {
    title: "Basic usage",
    code: `import { Home, Search, ArrowLeft } from 'reactifyui-icons'

export default function App() {
  return (
    <nav>
      <Home size={24} />
      <Search size={20} color="#4f46e5" />
      <ArrowLeft size={24} weight="bold" />
    </nav>
  )
}`,
  },
  {
    title: "Global defaults with IconProvider",
    code: `import { IconProvider, Home, Search, Bell } from 'reactifyui-icons'

export default function App() {
  return (
    <IconProvider value={{ size: 20, theme: 'sidebar', strokeWidth: 1.5 }}>
      <Home />
      <Search />
      <Bell />
    </IconProvider>
  )
}`,
  },
  {
    title: "Themes, weights & animations",
    code: `import { AlertCircle, Loader, Star } from 'reactifyui-icons'

<AlertCircle theme="danger" />
<Star theme="highlight" weight="bold" />
<Loader animate={{ type: 'spin', duration: 1 }} />`,
  },
  {
    title: "Transforms",
    code: `import { ArrowUp, Home } from 'reactifyui-icons'

// Rotate 180° to make an ArrowDown
<ArrowUp rotate={180} />

// Flip horizontally
<Home flip="horizontal" />`,
  },
  {
    title: "DynamicIcon — load by name at runtime",
    code: `import { DynamicIcon } from 'reactifyui-icons/dynamic'

// Perfect for CMS-driven UIs or icon pickers
<DynamicIcon name="Home" size={24} theme="primary" />
<DynamicIcon name="Search" fallback={<span>...</span>} />`,
  },
]

export function QuickStart() {
  return (
    <section id="usage" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Quick Start</h2>
          <p className="text-gray-500 text-lg">Common patterns to get you moving fast.</p>
        </div>

        <div className="space-y-6">
          {EXAMPLES.map((ex) => (
            <div key={ex.title} className="rounded-2xl border border-gray-200 overflow-hidden">
              <div className="px-5 py-3 bg-gray-50 border-b border-gray-100">
                <span className="text-sm font-semibold text-gray-700">{ex.title}</span>
              </div>
              <div className="p-4 bg-white">
                <CodeBlock code={ex.code} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
