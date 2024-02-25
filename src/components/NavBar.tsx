import logoUrl from '../assets/images/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props {
  onSearch: (searchTerm: string) => void
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <nav className="flex items-center gap-2 md:gap-4">
      <img className="h-16" src={logoUrl} alt="game hub logo" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </nav>
  )
}

export default NavBar
