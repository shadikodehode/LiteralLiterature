import { createContext, useContext } from "react";

export const FavoritesContext = createContext()

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (!context) throw new Error('useFavorites must be used within a FavoritesProvider')
  return context
}