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
      <div className="flex justify-center font-bold text-xl">
        <button onClick={() => setIsOpen(!isOpen)}>
          {topic || 'Categories'}
        </button>
        {isOpen && (
          <div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategory(category)}
                className={topic === category ? 'bg-red-600' : 'bg-blue-600'}
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
