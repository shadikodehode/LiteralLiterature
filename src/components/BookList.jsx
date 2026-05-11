import { BookCard } from "./BookCard";

export function BookList({ books }) {
  return (
    <div className="flex flex-row flex-wrap m-20 justify-center item">
      {books.map((book) => <BookCard key={book.id} book={book} />)}
    </div>
  )
}