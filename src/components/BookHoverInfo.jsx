import { Link } from "react-router"
import { formatAuthorName } from "../utils/formatAuthorName.js"
import { useScrollContext } from "../context/ScrollContext.js"
import { BookStyles } from "../styles/bookStyles.js"

export function BookCard({ book }) {
  const { title, authors } = book
  const author = formatAuthorName(authors[0]?.name)
  
  const { isScrolling } = useScrollContext()

  const BookDiv = BookStyles.bookDiv
  
  return (
      <Link className={`${BookDiv}`}
        draggable={false}
        to={`/book/${book.id}`}
        onClick={(e) => { if (isScrolling.current) e.preventDefault() }}
      >
        <div>
          <h1>
            {title}</h1>
          <p>
            {author}</p>
        </div>
      </Link>
  )
}
