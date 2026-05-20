import { Link } from "react-router"
import { formatAuthorName } from "../utils/formatAuthorName.js"
import { useScrollContext } from "../context/ScrollContext.js"

export function BookCard({ book }) {
  const { title, authors, formats } = book
  const cover = formats["image/jpeg"]
  const author = formatAuthorName(authors[0]?.name)
  
    const { isScrolling } = useScrollContext()
  
  return (
      <Link className="flex flex-row shrink-0 mx-8 gap-4 select-none" 
        draggable={false}
        to={`/book/${book.id}`}
        onClick={(e) => { if (isScrolling.current) e.preventDefault() }}
      >
        <img className="shadow-xl rounded-md h-56 w-40" 
          src={cover} 
          alt={title} 
          draggable={false}
          onError={(e) => e.target.src ='/placeholder.jpg'}
        />
        <div className="flex flex-col justify-between">
          <h1 className="text-xl font-bold line-clamp-4 w-40">
            {title}</h1>
          <p className="text-xs font-bold opacity-60">
            {author}</p>
        </div>
      </Link>
  )
}
