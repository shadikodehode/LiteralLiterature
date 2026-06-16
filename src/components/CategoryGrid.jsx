import { useState } from "react";
import { categories } from "../data/categories";
import { CategoryCard } from "./CategoryCard";
import { CategoryModal } from "./CategoryModal";
import { FontStyles } from "../styles/fontStyles.js";
import { ContainerStyles } from "../styles/containerStyles.js"
import { CategoryStyles } from "../styles/categoryStyles.js";

export function CategoryGrid() {
  const [isOpen, setIsOpen] = useState()

  const HeaderStyle = FontStyles.fontCommon
  const HeaderFont = FontStyles.headerSub
  const ContainerDiv = ContainerStyles.containerCommon
  const ContainerCategory = CategoryStyles.categoryContainer
  const CategoryDiv = CategoryStyles.categoryDiv
  const CategoryButtonDiv = CategoryStyles.categoryButtonDiv
  const CategoryButton = CategoryStyles.categoryButton

  return (
    <>
      <div className={`${ContainerDiv} ${ContainerCategory}`}>
          <h1 className={`${HeaderStyle} ${HeaderFont}`}>
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
          className={`${CategoryDiv}`}
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

        <div className={CategoryButtonDiv}>
          <button 
              className={CategoryButton}
              onClick={() => setIsOpen(true)}
            >
              Show All
            </button>
          </div>

      </div>
    </>
  )
}