import { createContext, useContext } from "react";

export const SearchContext = createContext()

export function useSearch() {
  const context = useContext(SearchContext)
  return context
}