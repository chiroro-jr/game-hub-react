import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import platforms from '@/data/platforms'

interface Props {
  onSelectPlatform: (platform: number) => void
}

// TODO: Add the platforms as static data instead of fetching from server
function PlatformSelector({ onSelectPlatform }: Props) {
  return (
    <div className="space-y-1">
      <span className="text-sm">Filter by platform</span>
      <Select onValueChange={(value) => onSelectPlatform(Number(value))}>
        <SelectTrigger className="w-[180px] border-none bg-card">
          <SelectValue placeholder="Select platform" />
        </SelectTrigger>
        <SelectContent className="border-none">
          {platforms.map((platform) => (
            <SelectItem key={platform.id} value={platform.id.toString()}>
              {platform.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default PlatformSelector
