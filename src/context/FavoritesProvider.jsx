import { FavoritesContext } from "./FavoritesContext"
import { useState } from "react"

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([])

  const toggleFavorite = (book) => {
    setFavorites((prev) =>
      prev.some((f) => f.id === book.id)
        ? prev.filter((f) => f.id !== book.id)
        : [...prev, book]
    )
  }

  const isFavorited = (id) => favorites.some((f) => f.id === id)

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorited }}>
      {children}
    </FavoritesContext.Provider>
  )
}