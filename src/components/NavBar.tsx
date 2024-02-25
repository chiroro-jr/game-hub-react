import logoUrl from '../assets/images/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between">
      <img className="h-16" src={logoUrl} alt="game hub logo" />
      <ColorModeSwitch />
    </nav>
  )
}

export default NavBar
