import { BookCard } from "./BookCard";

export function BookList({ books }) {
  return (
    <div className="flex flex-row max-w-screen flex-wrap">
      {books.map((book) => <BookCard key={book.id} book={book} />)}
    </div>
  )
}