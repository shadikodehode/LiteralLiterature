import { useSearch } from "../context/SearchContext";
import { CategoryStyles } from "../styles/categoryStyles";
import { HoverStyles } from "../styles/hoverStyles";

export function CategoryCard({ category }) {
 const { setTopic, setPage } = useSearch()
 
 const hoverStyle = HoverStyles.categoryHover
 const CategoryCardDiv = CategoryStyles.categoryCardDiv
 const CategoryCardImg = CategoryStyles.categoryCardImg
 const CategoryLabel = CategoryStyles.CategoryLabel
 const CategoryBg = CategoryStyles.categoryBg
 
 const handleClick = (e) => {
  e.stopPropagation()
  setTopic(category.value)
  setPage(1)
 }

 return (
  <>
    <div
      className={`${CategoryCardDiv} ${hoverStyle}`}
      onClick={handleClick}>
    
      <img
        className={`${CategoryCardImg}`}
        draggable={false} 
        src={category.image} 
        alt={category.label} 
      />

      <h1 className={`${CategoryLabel}`}>
        {category.label}
      </h1>

      <div className={`${CategoryBg}`} />

    </div>
  </>
 )
}