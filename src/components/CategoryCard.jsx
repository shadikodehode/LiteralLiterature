import { useSearch } from "../context/SearchContext";
import { HoverStyles } from "../styles/hoverStyles";

export function CategoryCard({ category }) {
 const { setTopic, setPage } = useSearch()
 
 const hoverStyle = HoverStyles.categoryHover
 
 const handleClick = () => {
  setTopic(category.value)
  setPage(1)
 }

 return (
  <>
    <div
      className={`relative flex flex-col items-center ${hoverStyle}`}
      onClick={handleClick}>
    
      <img
        className="h-38 w-23.5 shadow-md" 
        src={category.image} 
        alt={category.label} 
      />

      <h1 className="flex absolute -bottom-2 text-xl w-28 skew-4 justify-center font-bold text-gray-50 bg-rose-700 rounded-sm p-1 shadow-xs shadow-black/30">
        {category.label}
      </h1>

      <div className="flex absolute justify-center -skew-4 -bottom-2 rounded-xl w-34 h-18 bg-olive-100 -z-10 shadow-md shadow-black/30" />

    </div>
  </>
 )
}