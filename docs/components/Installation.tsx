"use client"
import { useState } from "react"

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)
  function copy() {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="relative group">
      <div className="code-block text-sm leading-relaxed overflow-x-auto">
        <pre><code>{code}</code></pre>
      </div>
      <button
        onClick={copy}
        className="absolute top-3 right-3 p-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white/50 hover:text-white transition-all opacity-0 group-hover:opacity-100"
        title="Copy"
      >
        {copied ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
        )}
      </button>
    </div>
  )
}

const TABS = ["npm", "yarn", "pnpm", "bun"]
const INSTALL: Record<string, string> = {
  npm:  "npm install reactifyui-icons",
  yarn: "yarn add reactifyui-icons",
  pnpm: "pnpm add reactifyui-icons",
  bun:  "bun add reactifyui-icons",
}

export { CodeBlock }

export function Installation() {
  const [tab, setTab] = useState("npm")

  return (
    <section id="installation" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Installation</h2>
          <p className="text-gray-500 text-lg">
            Get up and running in seconds. React 19+ required.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          {/* Tab bar */}
          <div className="flex border-b border-gray-100">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-3 text-sm font-medium transition-colors ${
                  tab === t
                    ? "text-brand-600 border-b-2 border-brand-600 bg-brand-50/50"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="p-4">
            <CodeBlock code={INSTALL[tab]} />
          </div>
        </div>

        {/* Peer deps note */}
        <p className="text-center text-sm text-gray-400 mt-4">
          Peer dependencies: <code className="text-gray-600 font-mono">react</code> and{" "}
          <code className="text-gray-600 font-mono">react-dom</code> version 19+
        </p>
      </div>
    </section>
  )
}
