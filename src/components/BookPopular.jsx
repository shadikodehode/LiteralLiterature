import { BookCard } from "./BookCard.jsx";
import { useScrollContainer } from "../hooks/useScrollContainer.js";
import { ScrollContext } from "../context/ScrollContext.js";
import { useDragScroll } from "../hooks/useDragScroll.js";
import { ArrowBoxIcon } from "./icons/ArrowBoxIcon.jsx"
import { BookStyles } from "../styles/bookStyles.js";

export function BookPopular({ books, rightRef, isFetchingNextPage }) {
  const { containerRef, scrollLeft, scrollRight } = useScrollContainer()
  const { onMouseDown, onMouseMove, onMouseUp, isScrolling } = useDragScroll(containerRef)

  const BookContainer = BookStyles.bookContainer

  return (
    <ScrollContext.Provider value={{ isScrolling }}>
    <div className="flex justify-center"
    draggable={false}>
      <button onClick={scrollLeft}>
        <ArrowBoxIcon />
      </button>
      <div 
        ref={containerRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        className={`${BookContainer} no-scrollbar`}
      >
        <div className="min-w-[35vw] "/>
        {books.map((book) => <BookCard key={book.id} book={book} />)}
        {isFetchingNextPage && <div>Loading more...</div>}
        <div ref={rightRef} />
      </div>
      <button onClick={scrollRight}>
        <ArrowBoxIcon />
      </button>
    </div>
    </ScrollContext.Provider>
  )
}