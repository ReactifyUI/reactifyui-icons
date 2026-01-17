export type IconWeight =
    | "thin"
    | "light"
    | "regular"
    | "bold"
    | "heavy"

export const DEFAULT_ICON_WEIGHT: IconWeight = "regular"

export const ICON_WEIGHTS: Record<IconWeight, number> = {
    thin: 0.75,
    light: 1,
    regular: 1.5,
    bold: 2,
    heavy: 2.5
}
