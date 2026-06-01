import { useSearch } from "../context/SearchContext";

export function CategoryCard({ category }) {
 const { setTopic, setPage } = useSearch()
 
 const handleClick = () => {
  setTopic(category.value)
  setPage(1)
 }

 return (
  <>
    <div onClick={handleClick}>
      <img src={category.image} alt={category.label} />
      <h3>{category.label}</h3>
    </div>
  </>
 )
}