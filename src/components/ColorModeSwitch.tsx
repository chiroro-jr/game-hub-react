import { useTheme } from './theme-provider'
import { Switch } from './ui/switch'

const ColorModeSwitch = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Switch
      checked={theme === 'dark'}
      id="color-mode-switch"
      onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    />
  )
}

export default ColorModeSwitch
