import { categories } from "../data/categories"
import { CategoryCard } from "./CategoryCard"
import { ExitIcon } from "./icons/ExitIcon"
import { CommonStyles } from "../styles/commonStyles"
import { HoverStyles } from "../styles/hoverStyles"
import { CategoryStyles } from "../styles/categoryStyles"

export function CategoryModal({ onClose }) {
  const ExitButton = CommonStyles.button
  const ExitHover = HoverStyles.button
  const CategoryModalDiv = CategoryStyles.categoryModalDiv
  const CategoryModalClose = CategoryStyles.categoryModalClose
  const CategoryModalButton = CategoryStyles.categoryModalButton
  const CategoryModalCard = CategoryStyles.categoryModalCard

  return (
    <>
      <div
        className={`fixed inset-0 z-20 ${CategoryModalDiv}`}
        onClick={onClose}
      >
        <div
        className={`${CategoryModalClose}`}
          autoFocus
          tabIndex={-1}
          onKeyDown={(e) => e.key === 'Escape' && onClose()}
        >
          <div className={`${CategoryModalButton}`}>
            <button 
              className=" cursor-pointer"
              onClick={onClose}
            >
              <ExitIcon className={`size-8 ${ExitButton} ${ExitHover}`}/>
            </button>
          </div>

          <div className={CategoryModalCard}>
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