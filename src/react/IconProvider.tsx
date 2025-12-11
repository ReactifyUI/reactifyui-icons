import React, { createContext, useContext } from "react"
import type { IconContextValue } from "../utils/iconTypes"

const defaultContext: IconContextValue = {
    size: 24,
    strokeWidth: 1,
    theme: "light"
}

// Create the context with no defaults
const IconContext = createContext<IconContextValue>(defaultContext)

export const IconProvider = ({
    children,
    value
}: {
    children: React.ReactNode
    value?: IconContextValue
}) => {
    return (
        <IconContext.Provider value={value || defaultContext}>
            {children}
        </IconContext.Provider>
    )
}

// Hook for consuming provider inside IconBase
export const useIconContext = () => useContext(IconContext)

export default IconProvider