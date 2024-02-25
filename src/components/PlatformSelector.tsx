import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import usePlatforms from '@/hooks/usePlatforms'

interface Props {
  onSelectPlatform: (platform: string) => void
}

function PlatformSelector({ onSelectPlatform }: Props) {
  const { data: platforms, error, isLoading } = usePlatforms()

  if (error) return null

  if (isLoading) return null

  return (
    <div className="space-y-1">
      <span className="text-sm">Filter by platform</span>
      <Select onValueChange={(value) => onSelectPlatform(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select platform" />
        </SelectTrigger>
        <SelectContent>
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
