import { useSearch } from "../context/SearchContext";

export function CategoryCard({ category }) {
 const { setTopic, setPage } = useSearch()
 
 const handleClick = () => {
  setTopic(category.value)
  setPage(1)
 }

 return (
  <>
    <div
      className="flex flex-col items-center cursor-pointer"
      onClick={handleClick}>

      <img
        className="h-38" 
        src={category.image} 
        alt={category.label} 
      />

      <h3>{category.label}</h3>
    </div>
  </>
 )
}