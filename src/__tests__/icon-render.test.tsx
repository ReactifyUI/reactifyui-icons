import React from "react"
import { render } from "@testing-library/react"
import { describe, it, expect } from "vitest"

import { Add } from "../react/icons"

describe("Icon rendering", () => {
  it("renders svg element", () => {
    const { container } = render(
      <Add />
    )

    const svg = container.querySelector("svg")
    expect(svg).toBeInTheDocument()
  })

  it("applies size prop correctly", () => {
    const { container } = render(
      <Add size={32} />
    )

    const svg = container.querySelector("svg")
    expect(svg).toHaveAttribute("width", "32px")
    expect(svg).toHaveAttribute("height", "32px")
  })
})