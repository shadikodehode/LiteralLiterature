import { useState } from "react"
import { useSearch } from "../context/SearchContext.js"
import { SortingStyles } from "../styles/sortingStyles.js"

export function SortingList() {
  const { sort, setSort } = useSearch()
  const [isOpen, setIsOpen] = useState(false)

  const sorting = [
    { label: 'Popular', value: ''},
    { label: 'A-Z', value: 'ascending'},
    { label: 'Z-A', value: 'descending'}
  ]

  const handleSort = (value) => setSort(value)

  const SortOpen = SortingStyles.sortOpen
  const SortContainer = SortingStyles.sortContainer
  const SortButton = SortingStyles.sortButton
  const SortButtonSub = SortingStyles.sortButtonSub
  
  return (
    
    <div
      className={`${SortOpen}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >

      <div className={`${SortContainer}`}>
        <button className={`${SortButton}`}>
          { sorting.find(s => s.value === sort)?.label || 'Sort'}
        </button>
      </div>

      { isOpen && (
        <div className={`${SortButtonSub}`}>
          { sorting.map(({ label, value }) => (
            <button
              key={ value || 'popular'}
              onClick={() => handleSort(value)}
              className={ sort === value ? 'active styles' : ''}
            >
              { label }
            </button>
          ))}
          </div>
      )}
    </div>
  )
}