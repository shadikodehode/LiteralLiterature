import { createContext, useContext } from "react";

export const FavoritesContext = createContext()

export function useFavorites() {
  const context = useContext(FavoritesContext)
  return context
}