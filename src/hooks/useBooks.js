import { useQuery } from "@tanstack/react-query"
import { fetchBooks, fetchBookId } from "../api/gutendex.js"

const useBooks = ({ search = '', topic = '', page = 1 }) => {
  return useQuery({
    queryKey:['books', {search, topic, page}],
    queryFn: () => fetchBooks({search, topic, page})
  })
}

const useBook = (id) => {
  return useQuery({
    queryKey:['book', id],
    queryFn: () => fetchBookId(id)
  })
}