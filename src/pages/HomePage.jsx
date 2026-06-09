import { BookPopular } from "../components/BookPopular.jsx";
import { CategoryGrid } from "../components/CategoryGrid.jsx";
import { ArrowCircleIcon } from "../components/icons/ArrowCircleIcon.jsx";
import { useSearch } from "../context/SearchContext.js";
import { useBooks } from "../hooks/useBooks.js";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll.js";
import { getErrorMessage } from "../utils/errorMessage.js";
import { CommonStyles } from "../styles/common.js";

export default function HomePage() {
  const searchContext = useSearch()
  const { data, isLoading, isError, fetchNextPage, error, hasNextPage, isFetchingNextPage } = useBooks(searchContext)
  const { data: popularData, isLoading: isLoadingPopular } = useBooks({})
  const { search, topic } = useSearch()
  
  const HeaderText = CommonStyles.headerText

  const popularBooks = popularData?.pages.flatMap((page) => page.results) ?? []

  const isFiltered = !!search || !!topic
  
  const rightRef = useInfiniteScroll({ fetchNextPage, hasNextPage, isFetchingNextPage })

  if (isLoading || isLoadingPopular) return <div>
    <ArrowCircleIcon className="size-24"/>
  </div>
  if(isError) return <div>{getErrorMessage(error)}</div>

  const books = data.pages.flatMap((page) => page.results)
  
  return(
    <>
      <div className="flex flex-col h-full mx-10">
        <h1 className={`${HeaderText}`}>Popular</h1>
        <div className="mb-12">
          {isFiltered 
            ? <BookPopular books={books} rightRef={rightRef} isFetchingNextPage={isFetchingNextPage} /> 
            : <BookPopular books={popularBooks} rightRef={rightRef} isFetchingNextPage={isFetchingNextPage} />
          }
        </div>
        <CategoryGrid />
      </div>
    </>
  )
}