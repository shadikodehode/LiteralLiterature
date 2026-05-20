import { createContext, useContext } from "react";

export const ScrollContext = createContext()

export function useScrollContext() {
  const context = useContext(ScrollContext)
  if (!context) throw new Error('useScrollContext must be used within a ScrollContext.Provider')
  return context
}