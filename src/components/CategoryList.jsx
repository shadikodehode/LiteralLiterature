import { useState } from "react"
import { useSearch } from "../context/SearchContext"

export function CategoryList() {
  const { setTopic, setPage, topic } = useSearch()
  const [isOpen, setIsOpen] = useState(false)
  
  const categories = [
    'fiction', 'mystery', 
    'thriller', 'romance', 
    'fantasy', 'morality', 
    'society', 'power', 
    'justice', 'adventure', 
    'tragedy', 'war', 
    'philosophy',
  ]

  const handleCategory = (category) => {
    setTopic(category)
    setPage(1)
    setIsOpen(false)
  }
  
  return (
    <>
      <div className="absolute flex flex-col font-bold text-xl">
        <div className="flex flex-row cursor-pointer gap-2">
          <button className="bg-accent p-2 rounded-sm"
          onClick = {() => 
            setIsOpen(!isOpen)}
          >
          {topic || 'Categories'}
        </button>
        
        <button
          onClick={() => handleCategory('')}>
            Reset
        </button>
        </div>
        

        {isOpen && (
          <div className="flex gap-4 flex-col items-start font-normal text-md">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategory(category)}
                className={topic === category 
                  ? 
                  '' 
                  : 
                  'cursor-pointer'
                }
              >
              {category}
              </button>
            ))}
          </div>

        )}
      </div>
    </>
  )
}
