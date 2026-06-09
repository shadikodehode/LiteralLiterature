import { useSearch } from "../context/SearchContext.js"
import { Searchbar } from "./Searchbar.jsx"
import { HomeIcon } from "./icons/HomeIcon.jsx"
import { BookmakrIcon } from "./icons/BookmakrIcon.jsx"
import { BookshelfIcon } from "./icons/BookshelfIcon.jsx"
import { HamburgerMenuIcon } from "./icons/HamburgerMenuIcon.jsx"
import { LogoIcon } from "./icons/LogoIcon.jsx"
import { HoverStyles } from "../styles/common.js"
import { ActiveStyles } from "../styles/common.js"
import { NavLink } from "react-router"
import { CommonStyles } from "../styles/common.js"

export default function Header() {
  const { setSearch, setPage, setTopic } = useSearch()

  const buttonHover = HoverStyles.navButton
  const iconHover = HoverStyles.navIcon
  const iconActive = ActiveStyles.navIcon
  const buttonActive = ActiveStyles.navButton
  const navIcon = CommonStyles.navIcon 

  const handleHome = () => {
    setSearch('')
    setPage(1)
    setTopic('')
  }

  return (
    <>
      <nav className="flex flex-col justify-between items-center p-4 gap-4 mt-12 mb-12 font-bold text-2xl">
        
        <div>
          <LogoIcon className="size-16 text-red-500"/>
        </div>

        <div className="flex flex-col gap-6">

          
          <NavLink to="/" onClick={handleHome}>
            {({ isActive }) => (
              <div className={`flex justify-center items-center p-2 ${buttonHover} ${isActive ? `${buttonActive}` : ''}`}>
                <HomeIcon className={`size-6 ${iconHover} ${isActive ? iconActive : navIcon}`} />
              </div>
            )} 
          </NavLink>

          <div className={`flex justify-center items-center p-2 ${buttonHover}`}>
            <Searchbar />
          </div>

          
          <NavLink to="/favorites">
            {({ isActive }) => (
              <div className={`flex justify-center items-center p-2 ${buttonHover} ${isActive ? `${buttonActive}` : ''}`}>
                <BookmakrIcon className={`size-7 ${iconHover} ${isActive ? iconActive : navIcon}`} />
              </div>
            )}
          </NavLink>
          
          <NavLink to="/BookPopular">
            {({ isActive }) => (
              <div className={`flex justify-center items-center p-2 ml-0.5 pl-3 ${buttonHover} ${isActive ? `${buttonActive}` : ''}`}>
                <BookshelfIcon className={`size-7 shrink-0 ${iconHover} ${isActive ? iconActive : navIcon}`} />
              </div>
            )}
          </NavLink>

        </div>
        <div className="flex justify-center items-center p-2 mr-2">
          <HamburgerMenuIcon className={`size-8 ${navIcon}`} />
        </div>
      </nav>
      <div className="bg-taupe-400/50 w-0.5 my-5 rounded-md"></div>
    </>
  )
}