import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { fetchBooks, fetchBookById } from "../api/gutendex.js"

export const useBooks = ({ search = '', topic = '' }) => {
  return useInfiniteQuery({
    queryKey:['books', {search, topic}],
    queryFn: ({pageParam}) => fetchBooks({search, topic, page: pageParam}),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (!lastPage.next) return undefined
      return new URL(lastPage.next).searchParams.get('page')
    }
  })
}

export const useBook = (id) => {
  return useQuery({
    queryKey:['book', id],
    queryFn: () => fetchBookById(id),
    enabled: !!id
  })
}