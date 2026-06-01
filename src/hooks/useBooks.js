import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { fetchBooks, fetchBookById } from "../api/gutendex.js"

export const useBooks = ({ search = '', topic = '', sort = '' }) => {
  return useInfiniteQuery({
    queryKey:['books', {search, topic, sort}],
    queryFn: ({pageParam}) => fetchBooks({search, topic, sort, page: pageParam}),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (!lastPage.next) return undefined
      return new URL(lastPage.next).searchParams.get('page')
    },
    staleTime: 1000 * 60 * 5
  })
}

export const useBook = (id) => {
  return useQuery({
    queryKey:['book', id],
    queryFn: () => fetchBookById(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5
  })
}