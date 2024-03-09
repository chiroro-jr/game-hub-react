import { Link } from 'react-router-dom'
import logoUrl from '../assets/images/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const NavBar = () => {
  return (
    <nav className="flex items-center gap-2 p-3.5 md:gap-4">
      <Link to="/">
        <img className="w-16" src={logoUrl} alt="game hub logo" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </nav>
  )
}

export default NavBar
