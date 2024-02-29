import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import usePlatforms from '@/hooks/usePlatforms'

interface Props {
  onSelectPlatform: (platform: number) => void
}

function PlatformSelector({ onSelectPlatform }: Props) {
  const { data, error } = usePlatforms()

  if (error) return null

  return (
    <div className="space-y-1">
      <span className="text-sm">Filter by platform</span>
      <Select onValueChange={(value) => onSelectPlatform(Number(value))}>
        <SelectTrigger className="w-[180px] border-none bg-card">
          <SelectValue placeholder="Select platform" />
        </SelectTrigger>
        <SelectContent className="border-none">
          {data?.results.map((platform) => (
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
