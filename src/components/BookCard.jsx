import { Link } from "react-router"

export function BookCard({ book }) {
  const { title, authors, formats } = book
  const author = authors[0]?.name
  const cover = formats["image/jpeg"]
  
  return (
      <Link className="flex flex-row p-4 text-wrap w-xs h-md gap-6" 
        to={`/book/${book.id}`}>
        <img className="shadow-xl  rounded-md h-45 w-30" 
          src={cover} 
          alt={title} 
          onError={(e) => e.target.src ='/placeholder.jpg'}
        />
        <div className="flex flex-col text-wrap max-w-25 gap-4">
          <h1 className="text-sm font-bold line-clamp-4">
            {title}</h1>
          <p className="text-xs font-bold opacity-60">
            {author}</p>
        </div>
      </Link>
  )
}