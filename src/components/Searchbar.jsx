import { useEffect, useState, useRef } from "react";
import { useSearch } from "../context/SearchContext";
import { SearchIcon } from "./icons/SearchIcon";
import { HoverStyles } from "../styles/hoverStyles";
import { NavStyles } from "../styles/navStyles";
import { ActiveStyles } from "../styles/activeStyles";


export function Searchbar() {
  const [inputValue, setInputValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const { setSearch, setPage } = useSearch()
  const inputRef = useRef(null)

  const IconHover = HoverStyles.navIcon
  const NavIcon = NavStyles.navIcon
  const IconName = NavStyles.iconName
  const NavBox = NavStyles.navBox
  const ButtonHover = HoverStyles.navButton
  const ButtonActive = ActiveStyles.searchIcon
  const SearchActive = ActiveStyles.searchInput

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  const handleSearch = () => {
    setSearch(inputValue)
    setPage(1)
    setIsOpen(false)
  }

   const handleSubmit = (e) => {
    e.preventDefault()
    handleSearch()
  }

  return (
    <div className="relative w-12 h-12 left-0.5" draggable={false}>
      <div 
        className={`absolute flex items-center p-2 ${NavBox} ${isOpen ? ButtonActive : ButtonHover}`}
        onClick={() => { if (!isOpen) setIsOpen(true) }}
      >
          <span className={`${IconName} ${IconHover} ${NavIcon} group-hover:text-gray-100/70 transition-all overflow-hidden whitespace-nowrap duration-150 ${isOpen ? 'max-w-0' : 'group-hover:max-w-xs'}`}>
            Search...
          </span>

        <form
          className="flex items-center"
          onSubmit={handleSubmit}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) {
              setIsOpen(false)
            }
          }}
        >
          <input  
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className={`${isOpen ? SearchActive : 'max-w-0'}`}
          />
          <button 
            type="button"
            onClick={(e) => {
              if (isOpen) {
                e.stopPropagation() 
                handleSearch()
              }
            }}
          >
            <SearchIcon className={`size-7 cursor-pointer ${IconHover} ${isOpen ? SearchActive : NavIcon}`}/>
          </button>
        </form>
      </div>
    </div>
  )
}