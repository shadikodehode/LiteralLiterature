import { BookCard } from "./BookCard";
import { useScrollContainer } from "../hooks/useScrollContainer";

export function BookList({ books, rightRef, isFetchingNextPage }) {
  const { containerRef, scrollLeft, scrollRight } = useScrollContainer()

  return (
    <div className="flex justify-center">
      <button onClick={scrollLeft}>Left</button>
      <div ref={containerRef}
        className="
        flex flex-row overflow-x-auto h-full
        gap-4 m-4 p-8
        "
      >
        <div className="min-w-[35vw]"/>
        {books.map((book) => <BookCard key={book.id} book={book} />)}
        {isFetchingNextPage && <div>Loading more...</div>}
        <div ref={rightRef} />
      </div>
      <button onClick={scrollRight}>Right</button>
    </div>
  )
}