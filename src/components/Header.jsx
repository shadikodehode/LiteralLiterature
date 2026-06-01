import { Link } from "react-router"
import { useSearch } from "../context/SearchContext.js"
import { CategoryList } from "./CategoryList.jsx"
import { SortingList } from "./SortingList.jsx"
import { Searchbar } from "./Searchbar.jsx"

export default function Header() {
  const { setSearch, setPage, setTopic } = useSearch()

  const handleHome = () => {
    setSearch('')
    setPage(1)
    setTopic('')
  }

  return (
    <nav className="flex flex-col justify-between p-4 gap-4 mt-20 font-bold text-2xl">
      <Link className="flex" to="/" onClick={handleHome}>Home</Link>
      <Searchbar />
      <Link to="/favorites">Favorites</Link>
      <SortingList />
      <CategoryList />
    </nav>
  )
}