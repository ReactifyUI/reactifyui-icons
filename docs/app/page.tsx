import { readFileSync } from "fs"
import { join } from "path"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Features } from "@/components/Features"
import { Installation } from "@/components/Installation"
import { QuickStart } from "@/components/QuickStart"
import { ApiReference } from "@/components/ApiReference"
import { Themes } from "@/components/Themes"
import { IconsBrowser } from "@/components/IconsBrowser"
import { Footer } from "@/components/Footer"

// Read icon data at build time — never ships the raw file read to the client
function getIconData() {
  const dataPath = join(process.cwd(), "public", "icons-data.json")
  const raw = readFileSync(dataPath, "utf8")
  return JSON.parse(raw) as {
    icons: Array<{ name: string; slug: string; category: string; viewBox: string; svg: string }>
    categories: string[]
  }
}

export default function Home() {
  const { icons, categories } = getIconData()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Installation />
        <QuickStart />
        <ApiReference />
        <Themes />
        <IconsBrowser icons={icons} categories={categories} />
      </main>
      <Footer />
    </>
  )
}
