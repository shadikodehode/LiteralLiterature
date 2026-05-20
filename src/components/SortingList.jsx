import { useState } from "react"
import { useSearch } from "../context/SearchContext.js"

export function SortingList() {
  const { sort, setSort } = useSearch()
  const [isOpen, setIsOpen] = useState(false)

  const sorting = [
    { label: 'Popular', value: ''},
    { label: 'A-Z', value: 'ascending'},
    { label: 'Z-A', value: 'descending'}
  ]

  const handleSort = (value) => setSort(value)
  
  return (
    
    <div
      className="absolute flex flex-col font-bold text-xl"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >

      <div className="flex left-0 flex-row cursor-pointer gap-2">
        <button className="bg-accent p-2 rounded-sm">
          { sorting.find(s => s.value === sort)?.label || 'Sort'}
        </button>
      </div>

      { isOpen && (
        <div className="flex flex-col gap-4 items-start font-normal text-md">
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