import { useState } from "react";
import { useSearch } from "../context/SearchContext";

export function Searchbar() {
  const [inputValue, setInputValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const { setSearch, setPage } = useSearch()

   const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(inputValue)
    setPage(1)
    setIsOpen(false)
  }

  return (
    <div className="relative"
    >
      <button
        onClick={() => setIsOpen(true)}
      >
        SearchIcon
      </button>
      {isOpen && (
        <div className="absolute left-0">
          <form 
            onSubmit={handleSubmit}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setIsOpen(false)
              }
            }}
          >
            <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            autoFocus
            />
            <button type="submit">Search</button>
          </form>
        </div>
      )}
    </div>
  )
}