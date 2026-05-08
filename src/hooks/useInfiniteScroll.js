import { useEffect, useRef } from "react"
 
export function useInfiniteScroll({ fetchNextPage, hasNextPage, isFetchingNextPage }) {
  const bottomRef = useRef(null)
 
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if(entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage()
      }
    })
    if(bottomRef.current) observer.observe(bottomRef.current)
    return () => observer.disconnect()
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  return bottomRef
} 