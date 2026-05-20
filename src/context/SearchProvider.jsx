import { useState } from "react";
import { SearchContext } from "./SearchContext";

export function SearchProvider({ children }) {
  const [search, setSearch] = useState('')
  const [topic, setTopic] = useState('')
  const [page, setPage] = useState(1)
  const [sort, setSort] = useState('')

  return (
    <SearchContext.Provider value={{search, setSearch, topic, setTopic, page, setPage, sort, setSort}}>
      {children}
    </SearchContext.Provider>
  )
}
