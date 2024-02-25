import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

function PlatformSelector() {
  return (
    <div className="space-y-1">
      <span className="text-sm">Filter by platform</span>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select platform" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="playstation">Playstation</SelectItem>
          <SelectItem value="xbox">Xbox</SelectItem>
          <SelectItem value="pc">PC</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default PlatformSelector
