import { useState } from "react";
import { categories } from "../data/categories";
import { CategoryCard } from "./CategoryCard";
import { CategoryModal } from "./CategoryModal";
import { CommonStyles } from "../styles/common.js"

export function CategoryGrid() {
  const [isOpen, setIsOpen] = useState()
  const HeaderText = CommonStyles.headerText

  return (
    <>
      <div className="flex flex-col gap-8">
          <h1 className={`ml-24 ${HeaderText}`}>
            Categories
          </h1>

        {
          isOpen 
          && 
          <CategoryModal 
            onClose={() => setIsOpen(false)} 
          />
        }

        <div 
          className="flex flex-row justify-center gap-20"
        >
          {
            categories
            .slice(0, 6)
            .map((category) => (
              <CategoryCard 
                key={category.value} 
                category={category} 
              />
            ))
          }
          
        </div> 

        <div className="flex justify-end mr-36">
          <button 
              className=" font-bold text-sm text-rose-700 cursor-pointer hover:text-base hover:text-rose-600 rounded-md transition-transform"
              onClick={() => setIsOpen(true)}
            >
              Show All
            </button>
          </div>
      </div>
    </>
  )
}