import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "ReactifyUI Icons — 1,696 Beautiful React Icons",
  description:
    "Modern, beautiful & fully customizable React icon library. 1,696 SVG icons, tree-shakeable, TypeScript native, zero CSS. Free forever. MIT licensed.",
  keywords: ["react icons", "svg icons", "icon library", "typescript", "reactifyui"],
  openGraph: {
    title: "ReactifyUI Icons",
    description: "1,696 beautiful, customizable React SVG icons. Free & MIT licensed.",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
