import { useFavorites } from "../context/FavoritesContext.js"
import { useBook } from "../hooks/useBooks.js"
import { useParams } from "react-router"
import { getErrorMessage } from "../utils/errorMessage.js"
import { BookmarkToggleIcon } from "../components/icons/bookmarkToggleIcon.jsx"
import { BookStyles } from "../styles/bookStyles.js"
import { NavStyles } from "../styles/navStyles.js"

export default function BookDetailPage() {
  const { id } = useParams()
  const { data, isLoading, isError, error } = useBook(id)
  const { isFavorited, toggleFavorite } = useFavorites()
  
  if (isLoading) return <div>Loading...</div>
  if(isError) return <div>{getErrorMessage(error)}</div>

  const { title, authors, formats, summaries, subjects, download_count } = data

  const Bookmark = BookmarkToggleIcon
  const BookImgBig = BookStyles.bookImgBig
  const BookDetailTitle = BookStyles.bookDetailTitle
  const BookDetailAuthor = BookStyles.bookDetailAuthor
  const BookDetailDescription = BookStyles.bookDetailDescription
  const NavMargin = NavStyles.navMagrinHorizontal

  const isBookFavorited = isFavorited(data.id)

  return(
    <div className="flex flex-col mt-16">
      <div className=" relative flex flex-row justify-center m-8 gap-16">
        <img className={`absolute left-60 ${BookImgBig}`}
          src={formats["image/jpeg"]} 
          alt={title} 
        />

        <div className="flex flex-col justify-between ml-30 gap-8">
          <h1 className={`${BookDetailTitle}`}>{title}</h1>
          <div className={`${BookDetailAuthor}`}>
            {authors.map((author) => 
              <h3 key={author.name}>{author.name}</h3>
            )}
          </div>

          <div className="flex flex-row">
            <div>
              {subjects.map((subject) =>
                <p key={subject}>{subject}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-gray-50/70 p-8 h-screen mx-28  shadow-md gap-8 text-wrap px-40">
        <div className="flex flex-row justify-center">
          <div />
          <div className="flex flex-row">
            <div>
                <button onClick={() => toggleFavorite(data)}>
                  <Bookmark 
                    filled={isBookFavorited} 
                    fillColor="#ff8190"
                    className={`size-6 ${isBookFavorited ? 'text-rose-700' : 'text-rose-700'}`}/>
                </button>
              </div>
              <div>
                <p>Downloads: {download_count}</p>
              </div>
          </div>
        </div>
        
        <div className="flex flex-col">
          <div className={`${NavMargin}`} />
        </div>

        <div>
          <p className={`${BookDetailDescription}`}>
            {summaries[0]}
          </p>
        </div>
        <div>
          test
        </div>
      </div>
    </div>
  )
}