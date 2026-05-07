import { useState } from "react";
import { SearchContext } from "./SearchContext";

export function SearchProvider({ children }) {
  const [search, setSearch] = useState('')
  const [topic, setTopic] = useState('')
  const [page, setPage] = useState(1)

  return (
    <SearchContext.Provider value={{search, setSearch, topic, setTopic, page, setPage}}>
      {children}
    </SearchContext.Provider>
  )
}