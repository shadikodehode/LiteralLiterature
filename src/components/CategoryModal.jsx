import { useSearch } from "../context/SearchContext"
import { categories } from "../data/categories"

export function CategoryModal({ onClose }) {
  const { setTopic, setPage } = useSearch()

  const handleSelect = (value) => {
    setTopic(value)
    setPage(1)
    onclose()
  }

  return (
    <>
      <div 
        className="fixed inset-0 z-10" 
        onClick={onclose} />
      <div
        className="fixed inset-0 z-20 flex items-center justify-center pointer-events-none"
      >
        <div
        className="pointer-events-auto"
          autoFocus
          tabIndex={-1}
          onKeyDown={(e) => e.key === 'Escape' && onClose()}
        >
          <button onClick={onclose}>Xicon</button>
          <div>
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => handleSelect(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}