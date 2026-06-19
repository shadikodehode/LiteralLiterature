import { Link } from "react-router"
import { useScrollContext } from "../context/ScrollContext.js"
import { BookStyles } from "../styles/bookStyles.js"
import { useMousePosition } from "../hooks/useMousePosition.js";
import { BookInfoPopover } from "./BookInfoPopover.jsx";
import { useState } from "react";

export function BookCard({ book }) {
  const { title, formats } = book
  const cover = formats["image/jpeg"]
  
  const { isScrolling } = useScrollContext()
  const { position, onMouseMove } = useMousePosition()
  const [isHovered, setIsHovered] = useState(false)

  const BookDiv = BookStyles.bookDiv
  const BookImg = BookStyles.bookImg
  
  return (
    <>
      <Link className={`${BookDiv}`}
        draggable={false}
        to={`/book/${book.id}`}
        onClick={(e) => { if (isScrolling.current) e.preventDefault() }}
        onMouseEnter = {() => {setIsHovered(true)}}
        onMouseLeave = {() => {setIsHovered(false)}}
        onMouseMove = {onMouseMove}
      >
        <img className={`${BookImg}`} 
          draggable={false}
          src={cover} 
          alt={title} 
          onError={(e) => e.target.src ='/placeholder.jpg'}
        />
      </Link>
      {isHovered && <BookInfoPopover book={book} position={position} />}
    </>
  )
}
