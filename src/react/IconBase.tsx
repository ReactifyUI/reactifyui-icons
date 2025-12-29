import React from 'react'
import type { IconProps } from '../utils/iconTypes'
import { useIconContext } from './IconProvider'
import {
  resolveColor,
  resolveSize,
  resolveStrokeWidth,
  resolveOpacity,
  resolvePreset,
  resolveTheme,
  resolveWeight,
  resolveTransform,
  buildTransformStyle,
  resolveAnimation,
  resolveIconAnimation,
  resolveStrokeProps,
  resolveFillProps,
  resolveStatePreset
} from '../utils/iconConfig'
import { toPx } from '../utils/helpers'
import { normalizeSvgChildren } from '../utils/normalizeSvgChildren'
import { ensureIconAnimations } from '../utils/ensureIconAnimation'

/**
 * IconBase
 * Core wrapper for ALL icons in the library.
 * Handles:
 * - sizing
 * - colors
 * - weights
 * - strokeWidth
 * - opacity
 * - stroke/fill control
 * - ARIA roles
 * - accessibility (title/desc)
 * - theming defaults via IconProvider
 * - className + styling
 * - transform
 * - transformOrigin
 */

export const IconBase = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const ctx = useIconContext()

  const basePreset = resolvePreset(props.preset, ctx.presets)
  const statePreset = resolveStatePreset(props.state, ctx.states)

  const preset = {
    ...basePreset,
    ...statePreset
  }

  const theme = resolveTheme(props, preset, ctx)
  const weight = resolveWeight(props, preset, ctx)
  const size = resolveSize(props, preset, ctx)
  const strokeWidth = resolveStrokeWidth(props, preset, ctx, weight, theme)
  const color = resolveColor(props, preset, ctx, theme)
  const opacity = resolveOpacity(theme)

  const transform = resolveTransform(props, preset, ctx)
  const transformStyle = buildTransformStyle(transform)

  const strokeProps = resolveStrokeProps(props, preset, ctx)

  const fillProps = resolveFillProps(props, preset, ctx)

  const {
    decorative = !props.title,
    title,
    desc,
    children,
    className,
    ...rest
  } = props

  // Ensure keyframes/styles are injected
  ensureIconAnimations()

  // Resolve animation from props -> preset -> context so IconProvider.animate works
  const animation = resolveAnimation(props, preset, ctx)
  const animationStyle = resolveIconAnimation(animation)

  const svgViewBox = (props as any).viewBox ?? '0 0 24 24'
  const explicitStroke = (props as any).stroke
  return (
    <svg
      ref={ref}
      width={toPx(size)}
      height={toPx(size)}
      stroke={explicitStroke}
      strokeWidth={strokeWidth}
      opacity={opacity}
      viewBox={svgViewBox}
      className={`rui-animate ${className ?? ''}`}
      role={decorative ? undefined : 'img'}
      aria-hidden={decorative}
      {...strokeProps}
      {...fillProps}
      style={{
        transform: transformStyle,
        transformOrigin: transform.transformOrigin,
        ...animationStyle,
        color,
        ...props.style
      }}
      {...rest}
    >
      {title && <title>{title}</title>}
      {desc && <desc>{desc}</desc>}
      {
        // If an explicit stroke color was provided, ensure filled child shapes also receive a stroke
        // so users can apply stroke on filled icons. Otherwise just normalize children.
        (function applyStrokeToChildren(node: React.ReactNode): React.ReactNode {
          const normalized = normalizeSvgChildren(node)

          if (!explicitStroke) return normalized

          return React.Children.map(normalized, child => {
            if (!React.isValidElement(child)) return child

            const childProps = child.props as Record<string, any>

            // If child already has a stroke attribute, leave it alone.
            if (childProps.stroke) {
              // Recurse into children
              if (childProps.children) {
                return React.cloneElement(child, {
                  children: applyStrokeToChildren(childProps.children)
                } as any)
              }
              return child
            }

            // If element has a fill (it's a filled shape), add the explicit stroke
            if (childProps.fill) {
              const newProps: Record<string, any> = { stroke: explicitStroke }
              if (childProps.children)
                newProps.children = applyStrokeToChildren(childProps.children)
              return React.cloneElement(child, newProps as any)
            }

            // Otherwise recurse into children (e.g., <g> groups)
            if (childProps.children) {
              return React.cloneElement(child, {
                children: applyStrokeToChildren(childProps.children)
              } as any)
            }

            return child
          })
        })(children)
      }
    </svg>
  )
})

IconBase.displayName = 'IconBase'

export default IconBase
