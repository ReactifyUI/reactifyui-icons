import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "ReactifyUI Icons v1.1.0 — 1,696 Beautiful React Icons",
  description:
    "Modern, beautiful & fully customizable React icon library. 1,696 SVG icons, tree-shakeable, TypeScript native, zero CSS. 28% lighter in v1.1.0. Free forever. MIT licensed.",
  keywords: [
    "react icons",
    "svg icons",
    "icon library",
    "typescript icons",
    "reactifyui",
    "react svg",
    "tree shakeable icons",
    "animated icons react",
  ],
  openGraph: {
    title: "ReactifyUI Icons — 1,696 Beautiful React Icons",
    description:
      "1,696 production-ready SVG icons. Tree-shakeable, TypeScript native, zero CSS. Free & MIT licensed.",
    type: "website",
    url: "https://reactifyui.github.io/reactifyui-icons/",
  },
  twitter: {
    card: "summary",
    title: "ReactifyUI Icons",
    description: "1,696 beautiful, customizable React SVG icons. Free & MIT licensed.",
  },
  other: {
    version: "1.1.0",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
