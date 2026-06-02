import { useState } from "react";
import { categories } from "../data/categories";
import { CategoryCard } from "./CategoryCard";
import { CategoryModal } from "./CategoryModal";

export function CategoryGrid() {
  const [isOpen, setIsOpen] = useState()

  return (
    <>
      <div>
        <div className="flex justify-between mr-30 ml-30">
          <h1>Categories</h1>
          <button onClick={() => setIsOpen(true)}>Show All</button>
        </div>
        {isOpen && <CategoryModal onClose={() => setIsOpen(false)} />}
         <div className="flex flex-row justify-center gap-16">
          {categories.slice(0, 6).map((category) => (
            <CategoryCard 
              key={category.value} 
              category={category} 
            />
          ))}
        </div> 
      </div>
    </>
  )
}