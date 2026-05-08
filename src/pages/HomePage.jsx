import { BookList } from "../components/BookList.jsx";
import { useSearch } from "../context/SearchContext.js";
import { useBooks } from "../hooks/useBooks.js";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll.js";

export default function HomePage() {
  const searchContext = useSearch()
  const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage } = useBooks(searchContext)
  
  const bottomRef = useInfiniteScroll({ fetchNextPage, hasNextPage, isFetchingNextPage })

  if (isLoading) return <div>Loading...</div>
  if(isError) return <div>Error...</div>

  const books = data.pages.flatMap((page) => page.results)
  
  return(
    <div>
      <div>
        <BookList books={books} />
        {isFetchingNextPage && <div>Loading more...</div>}
      </div>
      <div ref={bottomRef}/>
    </div>
  )
}