import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { fetchBooks, fetchBookId } from "../api/gutendex.js"

export const useBooks = ({ search = '', topic = '' }) => {
  return useInfiniteQuery({
    queryKey:['books', {search, topic}],
    queryFn: ({pageParam}) => fetchBooks({search, topic, page: pageParam}),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.next ?? undefined
  })
}

export const useBook = (id) => {
  return useQuery({
    queryKey:['book', id],
    queryFn: () => fetchBookId(id),
    enabled: !!id
  })
}