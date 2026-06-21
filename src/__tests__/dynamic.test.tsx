import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import "@testing-library/jest-dom/vitest"

import { DynamicIcon } from "../react/DynamicIcon"
import { dynamicMap } from "../react/dynamicMap"

describe("DynamicIcon Component", () => {
  it("renders the requested icon dynamically", async () => {
    const { container } = render(
      <DynamicIcon name="Home" size={32} color="red" />
    )

    // Wait for the lazy component to resolve and mount the SVG
    await waitFor(() => {
      const svg = container.querySelector("svg")
      expect(svg).toBeInTheDocument()
      expect(svg).toHaveAttribute("width", "32px")
      expect(svg).toHaveStyle({ color: "rgb(255, 0, 0)" })
    })
  })

  it("renders custom fallback while loading", async () => {
    // Return a delayed promise to simulate loading state
    const delayedPromise = new Promise<{ default: React.ComponentType<any> }>(resolve => {
      setTimeout(() => {
        resolve({ default: () => <svg data-testid="mock-icon" /> })
      }, 50)
    })

    const originalIcon = dynamicMap.Home
    dynamicMap.Home = React.lazy(() => delayedPromise)

    render(
      <DynamicIcon name="Home" fallback={<span data-testid="fallback">Loading...</span>} />
    )

    // Fallback renders immediately because the promise is pending
    const fallback = screen.queryByTestId("fallback")
    expect(fallback).toBeInTheDocument()
    expect(fallback).toHaveTextContent("Loading...")

    // Once resolved, the mock SVG replaces the fallback
    await waitFor(() => {
      expect(screen.queryByTestId("fallback")).not.toBeInTheDocument()
      expect(screen.getByTestId("mock-icon")).toBeInTheDocument()
    })

    // Restore original mapping
    dynamicMap.Home = originalIcon
  })

  it("warns and renders fallback when icon name is invalid", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {})
    
    const { container } = render(
      <DynamicIcon name="InvalidIconName" fallback={<span data-testid="fallback">Not Found</span>} />
    )

    const fallback = screen.getByTestId("fallback")
    expect(fallback).toBeInTheDocument()
    expect(fallback).toHaveTextContent("Not Found")
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining('DynamicIcon: "InvalidIconName" is not a valid icon name.')
    )

    warnSpy.mockRestore()
  })
})
