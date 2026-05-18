import { BookList } from "../components/BookList.jsx";
import { CategoryList } from "../components/CategoryList.jsx";
import { useSearch } from "../context/SearchContext.js";
import { useBooks } from "../hooks/useBooks.js";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll.js";
import { getErrorMessage } from "../utils/errorMessage.js";

export default function HomePage() {
  const searchContext = useSearch()
  const { data, isLoading, isError, fetchNextPage, error, hasNextPage, isFetchingNextPage } = useBooks(searchContext)
  
  const rightRef = useInfiniteScroll({ fetchNextPage, hasNextPage, isFetchingNextPage })

  if (isLoading) return <div>Loading...</div>
  if(isError) return <div>{getErrorMessage(error)}</div>

  const books = data.pages.flatMap((page) => page.results)
  
  return(
    <div className="flex flex-col h-full">
      <div>
        <BookList books={books} rightRef={rightRef} isFetchingNextPage={isFetchingNextPage}/>
      </div>
    </div>
  )
}