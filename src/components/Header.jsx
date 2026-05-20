import { useState } from "react"
import { Link } from "react-router"
import { useSearch } from "../context/SearchContext.js"
import { CategoryList } from "./CategoryList.jsx"
import { SortingList } from "./SortingList.jsx"

export default function Header() {
  const [inputValue, setInputValue] = useState('')
  const { setSearch, setPage, setTopic } = useSearch()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(inputValue)
    setPage(1)
  }

  const handleHome = () => {
    setSearch('')
    setPage(1)
    setTopic('')
  }

  return (
    <nav className="flex flex-col justify-between p-4 gap-4 mt-20 font-bold text-2xl">
      <Link className="flex" to="/" onClick={handleHome}>Home</Link>
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text" 
          placeholder="Search book..." 
        />
        <button type="submit">Search</button>
      </form>
      <Link to="/favorites">Favorites</Link>
      <SortingList />
      <CategoryList />
    </nav>
  )
}