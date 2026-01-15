import React from "react"
import { render } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import "@testing-library/jest-dom/vitest"

import { Home } from "../react/icons"

describe("Icon accessibility", () => {
  it("is aria-hidden by default", () => {
    const { container } = render(<Home />)
    const svg = container.querySelector("svg")
    expect(svg).toHaveAttribute("aria-hidden", "true")
  })

  it("supports aria-label when provided", () => {
    const { container } = render(<Home aria-label="Home icon" />)
    const svg = container.querySelector("svg")
    expect(svg).toHaveAttribute("aria-label", "Home icon")
    expect(svg).toHaveAttribute("aria-hidden", "false")
  })
})