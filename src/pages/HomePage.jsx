import { BookCard } from "../components/BookCard.jsx";
import { useSearch } from "../context/SearchContext.js";
import { useBooks } from "../hooks/useBooks.js";

export default function HomePage() {
  const searchContext = useSearch()
  const { data, isLoading, isError,  } = useBooks(searchContext)

  console.log(data);

  if (isLoading) return <div>Loading...</div>
  if(isError) return <div>Error...</div>
  
  return(
    <div>
      {data.pages
        .flatMap((page) => page.results)
        .map((book) => <BookCard key={book.id} book={book} />)
      }
    </div>
  )
}