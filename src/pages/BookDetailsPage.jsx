import { useFavorites } from "../context/FavoritesContext.js"
import { useBook } from "../hooks/useBooks.js"
import { useParams } from "react-router"

export default function BookDetailPage() {
  const { id } = useParams()
  const { data, isLoading, isError } = useBook(id)
  const { isFavorited, toggleFavorite } = useFavorites()
  
  if (isLoading) return <div>Loading...</div>
  if(isError) return <div>Error...</div>

  const { title, authors, formats, summaries, subjects, download_count } = data

  const isBookFavorited = isFavorited(data.id)

  return(
    <div>
      
      <h2>{title}</h2>
      
      <div>
        {authors.map((author) => 
          <h3 key={author.name}>{author.name}</h3>
        )}
      </div>

      <div>
        <button onClick={() => toggleFavorite(data)}>
          {isBookFavorited ? 'Remove from favorites' : 'Add to favorites'}
        </button>
      </div>

      <div>
        <p>{summaries[0]}</p>
      </div>

      <div>
        <p>{download_count}</p>
      </div>

      <div>
        {subjects.map((subject) =>
          <p key={subject}>{subject}</p>
        )}
      </div>
      
      <img 
        src={formats["image/jpeg"]} 
        alt={title} 
      />

    </div>
  )
}