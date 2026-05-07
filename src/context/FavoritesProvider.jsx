import { FavoritesContext } from "./FavoritesContext"
import { useState } from "react"

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([])

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites}}>
      {children}
    </FavoritesContext.Provider>
  )
}