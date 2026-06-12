import { useState } from "react";
import { useSearch } from "../context/SearchContext";
import { SearchIcon } from "./icons/SearchIcon";
import { HoverStyles } from "../styles/hoverStyles";
import { NavStyles } from "../styles/navStyles";


export function Searchbar() {
  const [inputValue, setInputValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const { setSearch, setPage } = useSearch()

  const iconHover = HoverStyles.navIcon
  const navIcon = NavStyles.navIcon

   const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(inputValue)
    setPage(1)
    setIsOpen(false)
  }

  return (
    <div className="relative"
    >
      <button className="ml-1 pt-2"
        onClick={() => setIsOpen(true)}
      >
        <SearchIcon className={`size-7 cursor-pointer ${iconHover} ${navIcon}`} />
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