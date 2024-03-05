import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import usePlatforms from '@/hooks/usePlatforms'
import useGameQueryStore from '@/store'

function PlatformSelector() {
  const { data, error } = usePlatforms()
  const setSelectedPlatformId = useGameQueryStore(
    (store) => store.setPlatformId,
  )

  if (error) return null

  return (
    <div className="space-y-1">
      <span className="text-sm">Filter by platform</span>
      <Select onValueChange={(value) => setSelectedPlatformId(Number(value))}>
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
