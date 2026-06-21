import React, { Suspense } from "react"
import { dynamicMap } from "./dynamicMap"
import type { IconProps } from "../utils/iconTypes"

export interface DynamicIconProps extends IconProps {
  name: string
  fallback?: React.ReactNode
}

export const DynamicIcon = React.forwardRef<SVGSVGElement, DynamicIconProps>(
  ({ name, fallback = null, ...props }, ref) => {
    const LazyIcon = dynamicMap[name] as any

    if (!LazyIcon) {
      console.warn(`[ReactifyUI Icons] DynamicIcon: "${name}" is not a valid icon name.`)
      return <>{fallback}</>
    }

    return (
      <Suspense fallback={fallback}>
        <LazyIcon ref={ref} {...props} />
      </Suspense>
    )
  }
)

DynamicIcon.displayName = "DynamicIcon"

export default DynamicIcon
