import React from "react"
import { render } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import "@testing-library/jest-dom/vitest"

import { IconProvider } from "../react/IconProvider"
import { ArrowForwardBent } from "../react/icons"

describe("IconProvider", () => {
  it("applies provider color to icon", () => {
    const { container } = render(
      <IconProvider value={{ color: "blue" }}>
        <ArrowForwardBent />
      </IconProvider>
    )

    const svg = container.querySelector("svg")
    expect(svg).toHaveStyle({ color: "rgb(0, 0, 255)" })
  })

  it("icon props override provider values", () => {
    const { container } = render(
      <IconProvider value={{ color: "blue" }}>
        <ArrowForwardBent color="red" />
      </IconProvider>
    )

    const svg = container.querySelector("svg")
    expect(svg).toHaveStyle({ color: "rgb(255, 0, 0)" })
  })
})