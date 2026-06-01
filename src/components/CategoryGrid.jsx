import { useState } from "react";
import { categories } from "../data/categories";
import { CategoryCard } from "./CategoryCard";
import { CategoryModal } from "./CategoryModal";

export function CategoryGrid() {
  const [isOpen, setIsOpen] = useState()

  return (
    <>
      <div>
        <div>
          {categories.slice(0, 6).map((category) => (
            <CategoryCard key={category.value} category={category} />
          ))}
        </div>
        <button onClick={() => setIsOpen(true)}>Show All</button>
        {isOpen && <CategoryModal onClose={() => setIsOpen(false)} />}
      </div>
    </>
  )
}