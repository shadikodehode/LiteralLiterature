import { BookPopular } from "../components/BookPopular.jsx";
import { CategoryGrid } from "../components/CategoryGrid.jsx";
import { ArrowCircleIcon } from "../components/icons/ArrowCircleIcon.jsx";
import { useSearch } from "../context/SearchContext.js";
import { useBooks } from "../hooks/useBooks.js";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll.js";
import { getErrorMessage } from "../utils/errorMessage.js";
import { FontStyles } from "../styles/fontStyles.js";
import { ContainerStyles } from "../styles/containerStyles.js";
import { CommonStyles } from "../styles/commonStyles.js";

export default function HomePage() {
  const searchContext = useSearch()
  const { data, isLoading, isError, fetchNextPage, error, hasNextPage, isFetchingNextPage } = useBooks(searchContext)
  const { data: popularData, isLoading: isLoadingPopular } = useBooks({})
  const { search, topic } = useSearch()
  
  const HeaderStyle = FontStyles.fontCommon
  const HeaderFont = FontStyles.headerMain
  const ContainerDiv = ContainerStyles.containerCommon
  const ContainerPopular = ContainerStyles.containerMain
  const loadingDiv = CommonStyles.loadingContainer
  const loadingSpin = CommonStyles.loadingIcon

  const popularBooks = popularData?.pages.flatMap((page) => page.results) ?? []

  const isFiltered = !!search || !!topic
  
  const rightRef = useInfiniteScroll({ fetchNextPage, hasNextPage, isFetchingNextPage })

  if (isLoading || isLoadingPopular) return <div className={`${loadingDiv}`}>
    <div className={`${loadingSpin}`}>
      <ArrowCircleIcon />
    </div>
  </div>
  if(isError) return <div>{getErrorMessage(error)}</div>

  const books = data.pages.flatMap((page) => page.results)
  
  return(
    <>
      <div className={`${ContainerDiv} ${ContainerPopular}`}>
        <h1 className={`${HeaderStyle} ${HeaderFont}`}>Popular</h1>
        <div>
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