import logoUrl from '../assets/images/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const NavBar = () => {
  return (
    <nav className="flex items-center gap-2 md:gap-4">
      <img className="h-16" src={logoUrl} alt="game hub logo" />
      <SearchInput />
      <ColorModeSwitch />
    </nav>
  )
}

export default NavBar
