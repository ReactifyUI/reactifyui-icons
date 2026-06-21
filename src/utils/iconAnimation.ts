/**
 * Animation type identifiers supported by ReactifyUI Icons.
 *
 * @example
 * ```tsx
 * <Loader animate={{ type: 'spin' }} />
 * <Bell animate={{ type: 'shake', duration: 0.5 }} />
 * ```
 */
export type IconAnimationType =
    | "spin"        // Continuous clockwise rotation
    | "spinReverse" // Continuous counter-clockwise rotation
    | "progress"    // Partial rotation loop — useful for loading arcs
    | "pulse"       // Scale in/out pulse
    | "ping"        // Ripple / ping effect
    | "bounce"      // Vertical bounce
    | "shake"       // Horizontal shake
    | "wiggle"      // Rotation wiggle
    | "float"       // Gentle vertical float
    | "fade"        // Opacity fade in/out
    | "slideUp"     // Slide up and fade in
    | "slideDown"   // Slide down and fade in

/**
 * Animation configuration for a ReactifyUI icon.
 *
 * Pass this object to the `animate` prop on any icon or set it globally
 * via `IconProvider`. CSS keyframes are injected once at runtime — no
 * external stylesheet required.
 *
 * @example
 * ```tsx
 * // Infinite spin
 * <Loader animate={{ type: 'spin' }} />
 *
 * // Shake 3 times over 0.5s
 * <Bell animate={{ type: 'shake', duration: 0.5, iterationCount: 3 }} />
 *
 * // Slow pulse with ease timing
 * <Heart animate={{ type: 'pulse', duration: 2, timingFunction: 'ease-in-out' }} />
 * ```
 */
export interface IconAnimation {
    /** The animation type to apply. */
    type: IconAnimationType

    /**
     * Duration of one animation cycle in seconds.
     * @default 1
     */
    duration?: number

    /**
     * Delay before the animation starts, in seconds.
     * @default 0
     */
    delay?: number

    /**
     * How many times the animation runs before stopping.
     * Use `"infinite"` for a looping animation.
     * @default "infinite"
     */
    iterationCount?: number | "infinite"

    /**
     * CSS easing function for the animation.
     * @default "linear"
     */
    timingFunction?: "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out"
}
