import { useQuery } from "@tanstack/react-query"
import { fetchBooks, fetchBookId } from "../api/gutendex.js"

export const useBooks = ({ search = '', topic = '', page = 1 }) => {
  return useQuery({
    queryKey:['books', {search, topic, page}],
    queryFn: () => fetchBooks({search, topic, page})
  })
}

export const useBook = (id) => {
  return useQuery({
    queryKey:['book', id],
    queryFn: () => fetchBookId(id),
    enabled: !!id
  })
}