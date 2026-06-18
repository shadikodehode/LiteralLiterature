import { useFavorites } from "../context/FavoritesContext.js"
import { useBook } from "../hooks/useBooks.js"
import { useParams } from "react-router"
import { getErrorMessage } from "../utils/errorMessage.js"
import { BookmarkToggleIcon } from "../components/icons/bookmarkToggleIcon.jsx"
import { BookStyles } from "../styles/bookStyles.js"

export default function BookDetailPage() {
  const { id } = useParams()
  const { data, isLoading, isError, error } = useBook(id)
  const { isFavorited, toggleFavorite } = useFavorites()
  
  if (isLoading) return <div>Loading...</div>
  if(isError) return <div>{getErrorMessage(error)}</div>

  const { title, authors, formats, summaries, subjects, download_count } = data

  const Bookmark = BookmarkToggleIcon
  const BookImg = BookStyles.bookImg

  const isBookFavorited = isFavorited(data.id)

  return(
    <div className="flex flex-col mt-16">
      <div className="flex flex-row justify-center m-8 gap-8">
        <img className={`h-88 w-70 ${BookImg}`}
          src={formats["image/jpeg"]} 
          alt={title} 
        />

        <div className="flex flex-col justify-between">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="text-lg font-semibold">
            {authors.map((author) => 
              <h3 key={author.name}>{author.name}</h3>
            )}
          </div>
        </div>
      </div>
      

      <div>
        <button onClick={() => toggleFavorite(data)}>
          <Bookmark 
            filled={isBookFavorited} 
            className={`size-6 ${isBookFavorited ? 'text-rose-700' : 'text-rose-700'}`}/>
        </button>
      </div>

      <div>
        <p>Description: {summaries[0]}</p>
      </div>

      <div>
        <p>Downloads: {download_count}</p>
      </div>

      <div>
        Category:
        {subjects.map((subject) =>
          <p key={subject}>{subject}</p>
        )}
      </div>

    </div>
  )
}