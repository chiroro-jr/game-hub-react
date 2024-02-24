import { useTheme } from './theme-provider'
import { Switch } from './ui/switch'

const ColorModeSwitch = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center gap-2">
      <Switch
        checked={theme === 'dark'}
        id="color-mode-switch"
        onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
      <span className="whitespace-nowrap font-semibold">Dark Mode</span>
    </div>
  )
}

export default ColorModeSwitch
