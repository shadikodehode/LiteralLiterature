import { categories } from "../data/categories"
import { CategoryCard } from "./CategoryCard"
import { ExitIcon } from "./icons/ExitIcon"

export function CategoryModal({ onClose }) {

  return (
    <>
      <div 
        className="fixed inset-0 z-10" 
        onClick={onClose} 
      />
      <div
        className="fixed inset-0 z-20 flex items-center justify-center pointer-events-none backdrop-blur-sm bg-slate-600/50"
      >
        <div
        className="flex flex-col pointer-events-auto m-20 rounded-2xl w-3/4"
          autoFocus
          tabIndex={-1}
          onKeyDown={(e) => e.key === 'Escape' && onClose()}
        >
          <div className="flex justify-between">
            <h1>Categories</h1>
            <button 
              className="cursor-pointer"
              onClick={onClose}
            >
              <ExitIcon className="w-10 h-10 text-red-400"/>
            </button>
          </div>

          <div className="flex flex-row flex-wrap justify-center p-8 gap-20">
            {categories.map((category) => (
              <CategoryCard
                key={category.value} 
                category={category}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}