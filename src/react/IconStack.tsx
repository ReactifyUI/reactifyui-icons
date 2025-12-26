import * as React from "react"

type StackAlign =
    | "center"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"

interface IconStackProps {
    size?: number | string
    align?: StackAlign
    gap?: number
    className?: string
    children: React.ReactNode
}

type IconLikeProps = {
    size?: number | string
    style?: React.CSSProperties
}

const alignMap: Record<StackAlign, React.CSSProperties> = {
    center: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    },
    "top-left": { top: 0, left: 0 },
    "top-right": { top: 0, right: 0 },
    "bottom-left": { bottom: 0, left: 0 },
    "bottom-right": { bottom: 0, right: 0 }
}

export function IconStack({
    size = 24,
    align = "center",
    gap = 0,
    className,
    children
}: IconStackProps) {
    const items = React.Children.toArray(children)

    return (
        <span
            className={className}
            style={{
                position: "relative",
                display: "inline-block",
                width: size,
                height: size
            }}
        >
            {items.map((child, index) => {
                if (!React.isValidElement(child)) return null

                const element = child as React.ReactElement<IconLikeProps>

                return (
                    <span
                        key={index}
                        style={{
                            position: "absolute",
                            ...alignMap[align],
                            zIndex: index,
                            pointerEvents: "none"
                        }}
                    >
                        {React.cloneElement(element, {
                            size,
                            style: {
                                ...(element.props.style || {}),
                                transform:
                                    gap && index > 0
                                        ? `translate(${gap}px, ${gap}px)`
                                        : element.props.style?.transform
                            }
                        })}
                    </span>
                )
            })}
        </span>
    )
}
