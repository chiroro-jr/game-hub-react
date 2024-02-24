import logoUrl from '../assets/images/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between p-2">
      <img className="h-20 w-20" src={logoUrl} alt="game hub logo" />
      <ColorModeSwitch />
    </nav>
  )
}

export default NavBar
