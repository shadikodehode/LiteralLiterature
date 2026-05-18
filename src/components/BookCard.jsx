import { Link } from "react-router"

export function BookCard({ book }) {
  const { title, authors, formats } = book
  const author = authors[0]?.name
  const cover = formats["image/jpeg"]
  
  return (
      <Link className="flex flex-row shrink-0 px-8 gap-4" 
        to={`/book/${book.id}`}>
        <img className="shadow-xl rounded-md h-56 w-40" 
          src={cover} 
          alt={title} 
          onError={(e) => e.target.src ='/placeholder.jpg'}
        />
        <div>
          <h1 className="text-xl font-bold line-clamp-4 w-40">
            {title}</h1>
          <p className="text-xs font-bold opacity-60">
            {author}</p>
        </div>
      </Link>
  )
}