import { BookCard } from "./BookCard";

export function BookList({ books }) {
  return (
    <div>
      {books.map((book) => <BookCard key={book.id} book={book} />)}
    </div>
  )
}