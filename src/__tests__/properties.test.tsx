import React from "react"
import { render } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import "@testing-library/jest-dom/vitest"

import { Add, Home } from "../react/icons"
import { IconProvider } from "../react/IconProvider"

describe("Icon Property Tests", () => {
  describe("Size property", () => {
    it("handles numeric sizes (converts to px)", () => {
      const { container } = render(<Add size={48} />)
      const svg = container.querySelector("svg")
      expect(svg).toHaveAttribute("width", "48px")
      expect(svg).toHaveAttribute("height", "48px")
    })

    it("handles string sizes with units directly", () => {
      const { container } = render(<Add size="3rem" />)
      const svg = container.querySelector("svg")
      expect(svg).toHaveAttribute("width", "3rem")
      expect(svg).toHaveAttribute("height", "3rem")
    })
  })

  describe("Coloring & Themes", () => {
    it("applies raw CSS colors directly", () => {
      const { container } = render(<Add color="purple" />)
      const svg = container.querySelector("svg")
      expect(svg).toHaveStyle({ color: "rgb(128, 0, 128)" })
    })

    it("applies colors resolved from themes", () => {
      const { container } = render(<Add theme="primary" />)
      const svg = container.querySelector("svg")
      expect(svg).toHaveStyle({ color: "#0D6EFD" })
    })

    it("applies colors resolved from custom themes (e.g. success, danger)", () => {
      const { container: successContainer } = render(<Add theme="success" />)
      const successSvg = successContainer.querySelector("svg")
      expect(successSvg).toHaveStyle({ color: "#1BA97C" })

      const { container: dangerContainer } = render(<Add theme="danger" />)
      const dangerSvg = dangerContainer.querySelector("svg")
      expect(dangerSvg).toHaveStyle({ color: "#DC3545" })
    })

    it("supports overriding theme colors with explicit color prop", () => {
      const { container } = render(<Add theme="primary" color="orange" />)
      const svg = container.querySelector("svg")
      expect(svg).toHaveStyle({ color: "rgb(255, 165, 0)" })
    })
  })

  describe("Weights & Stroke Widths", () => {
    it("resolves strokeWidth from weight correctly", () => {
      const { container: thinContainer } = render(<Add weight="thin" />)
      expect(thinContainer.querySelector("svg")).toHaveAttribute("stroke-width", "0.75")

      const { container: boldContainer } = render(<Add weight="bold" />)
      expect(boldContainer.querySelector("svg")).toHaveAttribute("stroke-width", "2")
    })

    it("resolves strokeWidth from theme rules", () => {
      const { container } = render(<Add theme="selected" />)
      const svg = container.querySelector("svg")
      expect(svg).toHaveAttribute("stroke-width", "2.5")
    })

    it("overrides weight and theme strokeWidths with explicit strokeWidth prop", () => {
      const { container } = render(<Add weight="thin" theme="selected" strokeWidth={5} />)
      const svg = container.querySelector("svg")
      expect(svg).toHaveAttribute("stroke-width", "5")
    })
  })

  describe("CSS Transforms", () => {
    it("handles rotation", () => {
      const { container } = render(<Add rotate={90} />)
      const svg = container.querySelector("svg")
      expect(svg).toHaveStyle({ transform: "rotate(90deg)" })
    })

    it("handles flipping (horizontal, vertical, both)", () => {
      const { container: h } = render(<Add flip="horizontal" />)
      expect(h.querySelector("svg")).toHaveStyle({ transform: "scaleX(-1)" })

      const { container: v } = render(<Add flip="vertical" />)
      expect(v.querySelector("svg")).toHaveStyle({ transform: "scaleY(-1)" })

      const { container: b } = render(<Add flip="both" />)
      expect(b.querySelector("svg")).toHaveStyle({ transform: "scale(-1)" })
    })

    it("handles scaling", () => {
      const { container } = render(<Add scale={2} />)
      const svg = container.querySelector("svg")
      expect(svg).toHaveStyle({ transform: "scale(2)" })
    })

    it("handles translations", () => {
      const { container } = render(<Add translate={{ x: 15, y: -25 }} />)
      const svg = container.querySelector("svg")
      expect(svg).toHaveStyle({ transform: "translate(15px, -25px)" })
    })

    it("combines multiple transforms correctly", () => {
      const { container } = render(
        <Add rotate={45} scale={1.2} flip="horizontal" translate={{ x: 5, y: 5 }} />
      )
      const svg = container.querySelector("svg")
      expect(svg).toHaveStyle({
        transform: "translate(5px, 5px) rotate(45deg) scaleX(-1) scale(1.2)"
      })
    })

    it("applies custom transformOrigin", () => {
      const { container } = render(<Add transformOrigin="top left" rotate={45} />)
      const svg = container.querySelector("svg")
      expect(svg).toHaveStyle({ transformOrigin: "top left" })
    })
  })

  describe("Animations", () => {
    it("resolves basic CSS animation parameters", () => {
      const { container } = render(
        <Add
          animate={{
            type: "spin",
            duration: 1.5,
            delay: 0.5,
            iterationCount: 3,
            timingFunction: "ease-in"
          }}
        />
      )
      const svg = container.querySelector("svg")
      expect(svg).toHaveStyle({
        animationName: "rui-spin",
        animationDuration: "1.5s",
        animationDelay: "0.5s",
        animationIterationCount: "3",
        animationTimingFunction: "ease-in"
      })
    })

    it("resolves infinite animations", () => {
      const { container } = render(
        <Add
          animate={{
            type: "bounce",
            iterationCount: "infinite"
          }}
        />
      )
      const svg = container.querySelector("svg")
      expect(svg).toHaveStyle({
        animationName: "rui-bounce",
        animationIterationCount: "infinite"
      })
    })
  })

  describe("Presets and Custom Context States", () => {
    it("respects presets configured via IconProvider context", () => {
      const presets = {
        compact: {
          size: 16,
          strokeWidth: 1,
          color: "gray"
        },
        jumbo: {
          size: 64,
          strokeWidth: 3,
          color: "gold"
        }
      }

      const { container: compactContainer } = render(
        <IconProvider value={{ presets }}>
          <Home preset="compact" />
        </IconProvider>
      )
      const compactSvg = compactContainer.querySelector("svg")
      expect(compactSvg).toHaveAttribute("width", "16px")
      expect(compactSvg).toHaveAttribute("stroke-width", "1")
      expect(compactSvg).toHaveStyle({ color: "rgb(128, 128, 128)" })

      const { container: jumboContainer } = render(
        <IconProvider value={{ presets }}>
          <Home preset="jumbo" />
        </IconProvider>
      )
      const jumboSvg = jumboContainer.querySelector("svg")
      expect(jumboSvg).toHaveAttribute("width", "64px")
      expect(jumboSvg).toHaveAttribute("stroke-width", "3")
      expect(jumboSvg).toHaveStyle({ color: "rgb(255, 215, 0)" })
    })

    it("respects state presets configured via IconProvider context", () => {
      const states = {
        default: {},
        hover: { color: "blue", scale: 1.1 },
        active: { color: "green", scale: 0.9 },
        disabled: { color: "lightgray", opacity: 0.5 }
      } as any

      const { container } = render(
        <IconProvider value={{ states }}>
          <Home state="hover" />
        </IconProvider>
      )
      const svg = container.querySelector("svg")
      expect(svg).toHaveStyle({ color: "rgb(0, 0, 255)", transform: "scale(1.1)" })
    })
  })

  describe("Accessibility (A11y)", () => {
    it("is not decorative and contains title/desc when provided", () => {
      const { container } = render(
        <Add title="Plus sign" desc="Used for addition buttons" />
      )
      const svg = container.querySelector("svg")
      expect(svg).not.toHaveAttribute("aria-hidden", "true")
      expect(svg).toHaveAttribute("role", "img")

      const titleNode = svg?.querySelector("title")
      const descNode = svg?.querySelector("desc")
      expect(titleNode).toBeInTheDocument()
      expect(titleNode?.textContent).toBe("Plus sign")
      expect(descNode).toBeInTheDocument()
      expect(descNode?.textContent).toBe("Used for addition buttons")
    })
  })
})
