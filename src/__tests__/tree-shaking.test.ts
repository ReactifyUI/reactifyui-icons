import { describe, it, expect } from "vitest"

import { ArrowForwardBent } from "../react/icons"

describe("Tree-shaking support", () => {
  it("allows direct icon import", () => {
    expect(typeof ArrowForwardBent).toBe("function")
  })
})
