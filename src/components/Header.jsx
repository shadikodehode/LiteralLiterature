import { useSearch } from "../context/SearchContext.js"
import { Searchbar } from "./Searchbar.jsx"
import { HomeIcon } from "./icons/HomeIcon.jsx"
import { BookmakrIcon } from "./icons/BookmakrIcon.jsx"
import { BookshelfIcon } from "./icons/BookshelfIcon.jsx"
import { HamburgerMenuIcon } from "./icons/HamburgerMenuIcon.jsx"
import { LogoIcon } from "./icons/LogoIcon.jsx"
import { NavLink } from "react-router"
import { CommonStyles } from "../styles/commonStyles.js"
import { HoverStyles } from "../styles/hoverStyles.js"
import { ActiveStyles } from "../styles/activeStyles.js"
import { ContainerStyles } from "../styles/containerStyles.js"
import { NavStyles } from "../styles/navStyles.js"

export default function Header() {
  const { setSearch, setPage, setTopic } = useSearch()

  const ButtonHover = HoverStyles.navButton
  const IconHover = HoverStyles.navIcon
  const IconActive = ActiveStyles.navIcon
  const ButtonActive = ActiveStyles.navButton
  const NavIcon = NavStyles.navIcon 
  const NavDiv = NavStyles.navDiv
  const LogoStyle = CommonStyles.logoIcon
  const ContainerNav = ContainerStyles.containerNav
  const NavBox = NavStyles.navBox
  const NavMargin = NavStyles.navMargin
  const IconName = NavStyles.iconName

  const handleHome = () => {
    setSearch('')
    setPage(1)
    setTopic('')
  }

  return (
    <>
      <nav className={`${NavDiv}`}>
        
        <div>
          <LogoIcon className={`${LogoStyle}`} />
        </div>

        <div className={`${ContainerNav}`}>

          <NavLink to="/" onClick={handleHome}>
            {({ isActive }) => (
              <div className="relative w-12 h-12">
                <div className={`absolute flex p-2 ${NavBox} ${ButtonHover} ${isActive ? `${ButtonActive}` : ''}`}>
                  <span className={`${IconName} ${isActive ? IconActive: NavIcon}`}>
                    Home
                  </span>
                  <HomeIcon className={`size-6 ${IconHover} ${isActive ? IconActive : NavIcon}`} />
                  <div/>
                </div>
              </div>
            )} 
          </NavLink>
          
          <NavLink to="/favorites">
            {({ isActive }) => (
              <div className="relative w-12 h-12">
                <div className={`absolute flex ${NavBox} ${ButtonHover} ${isActive ? `${ButtonActive}` : ''}`}>
                  <span className={`${IconName} ${isActive ? IconActive: NavIcon}`}>
                    Bookmarks
                  </span>
                  <BookmakrIcon className={`size-7 ${IconHover} ${isActive ? IconActive : NavIcon}`} />
                  <div />
                </div>
              </div>
            )}
          </NavLink>
          
          <NavLink to="/BookPopular">
            {({ isActive }) => (
              <div className="relative w-12 h-12">
                <div className={`absolute ml-0.5 pl-3 ${NavBox} ${ButtonHover} ${isActive ? `${ButtonActive}` : ''}`}>
                  <span className={`${IconName} ${isActive ? IconActive: NavIcon}`}>
                    List
                  </span>
                  <BookshelfIcon className={`size-7 shrink-0 ${IconHover} ${isActive ? IconActive : NavIcon}`} />
                  <div />
                </div>
              </div>
            )}
          </NavLink>

          <div className="relative w-12 h-12">
            <div className={`absolute ${NavBox} ${ButtonHover}`}>
              <Searchbar />
            </div>
          </div>

        </div>
        <div />
      </nav>
      <div className={`${NavMargin}`}></div>
    </>
  )
}