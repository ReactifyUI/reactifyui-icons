import type { IconAnimation } from "./iconAnimation"

export function resolveAnimation(
    animate?: IconAnimation
): React.CSSProperties | undefined {
    if (!animate) return

    const cfg =
        typeof animate === "string"
            ? { type: animate }
            : animate

    const duration = cfg.duration ?? 1000
    const easing = cfg.timingFunction ?? "linear"
    const iteration =
        cfg.iterationCount ?? "infinite"

    switch (cfg.type) {
        case "spin":
            return {
                animation: `rui-spin ${duration}ms ${easing} ${iteration} ${cfg.delay}`
            }

        case "pulse":
            return {
                animation: `rui-pulse ${duration}ms ${easing} ${iteration} ${cfg.delay}`
            }

        case "bounce":
            return {
                animation: `rui-bounce ${duration}ms ${easing} ${iteration} ${cfg.delay}`
            }

        case "shake":
            return {
                animation: `rui-shake ${duration}ms ${easing} ${iteration} ${cfg.delay}`
            }

        case "ping":
            return {
                animation: `rui-ping ${duration}ms ${easing} ${iteration} ${cfg.delay}`
            }
    }
}
