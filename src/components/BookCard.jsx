import { Link } from "react-router"

export function BookCard({ book }) {
  const { title, authors, formats } = book
  const author = authors[0]?.name
  const cover = formats["image/jpeg"]
  
  return (
      <Link className="flex flex-row p-4 text-wrap w-md h-md gap-8" 
        to={`/book/${book.id}`}>
        <img className="shadow-md rounded-md max-h-40 max-w-25" 
          src={cover} 
          alt={title} 
          onError={(e) => e.target.src ='/placeholder.jpg'}
        />
        <div className="flex flex-col text-wrap max-w-25 gap-4">
          <h1 className="text-sm font-bold">
            {title}</h1>
          <p className="text-xs opacity-80">
            {author}</p>
        </div>
      </Link>
  )
}