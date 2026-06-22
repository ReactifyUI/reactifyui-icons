/**
 * Semantic stroke-weight preset names for ReactifyUI Icons.
 *
 * Each weight maps to a specific SVG `stroke-width` value.
 * Can be set per-icon via the `weight` prop or globally via `IconProvider`.
 *
 * | Weight  | stroke-width |
 * |---------|-------------|
 * | thin    | 0.75        |
 * | light   | 1           |
 * | regular | 1.5         |
 * | bold    | 2           |
 * | heavy   | 2.5         |
 *
 * @example
 * ```tsx
 * <Home weight="bold" />
 * <Search weight="thin" />
 *
 * // Set globally
 * <IconProvider value={{ weight: 'light' }}>
 *   <App />
 * </IconProvider>
 * ```
 */
export type IconWeight =
    | "thin"    // stroke-width: 0.75 — hairline stroke
    | "light"   // stroke-width: 1
    | "regular" // stroke-width: 1.5 — default
    | "bold"    // stroke-width: 2
    | "heavy"   // stroke-width: 2.5 — heaviest stroke

/** The default weight used when no `weight` prop is provided. */
export const DEFAULT_ICON_WEIGHT: IconWeight = "regular"

/**
 * Maps each `IconWeight` to its corresponding SVG `stroke-width` number.
 * Used internally by `IconBase` to resolve the final stroke width.
 */
export const ICON_WEIGHTS: Record<IconWeight, number> = {
    thin: 0.75,
    light: 1,
    regular: 1.5,
    bold: 2,
    heavy: 2.5,
}
