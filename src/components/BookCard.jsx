import { Link } from "react-router"

export function BookCard({ book }) {
  const { title, authors, formats } = book
  const author = authors[0]?.name
  const cover = formats["image/jpeg"]
  
  return (
    <div>
      <Link to={`/book/${book.id}`}>
        <h3>{title}</h3>
        <p>{author}</p>
        <img 
          src={cover} 
          alt={title} 
          onError={(e) => e.target.src ='/placeholder.jpg'}
        />
      </Link>
    </div>
  )
}