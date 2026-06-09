import { BookPopular } from "../components/BookPopular"
import { useFavorites } from "../context/FavoritesContext"

export default function FavoritesPage() {
  const { favorites } = useFavorites()
  
  if (favorites.length === 0) return <div>No books added to favorites yet</div>

  return (
    <div>
      <BookPopular books={favorites} />
    </div>
  )
}