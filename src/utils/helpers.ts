/**
 * Converts numeric values into pixel units.
 * 24 → "24px"
 * "1.5rem" → "1.5rem"
 */
export function toPx(value?: number | string): string | undefined {
  if (value === undefined) return undefined
  return typeof value === "number" ? `${value}px` : value
}
