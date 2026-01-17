import { describe, it, expect } from "vitest"

import registry from "../data/registry.json"

describe("Icon registry", () => {
  it("contains categories", () => {
    expect(registry.Add.category).toBeDefined()
    expect(Object.keys(registry.Add.category).length).toBeGreaterThan(0)
  })
})
