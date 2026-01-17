export type IconAnimationType =
    | "spin"
    | "spinReverse"
    | "progress"
    | "pulse"
    | "ping"
    | "bounce"
    | "shake"
    | "wiggle"
    | "float"
    | "fade"
    | "slideUp"
    | "slideDown"

export interface IconAnimation {
    type: IconAnimationType
    duration?: number  // number in seconds          
    delay?: number     // number in seconds          
    iterationCount?: number | "infinite"
    timingFunction?: "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out" // CSS timing function
}
