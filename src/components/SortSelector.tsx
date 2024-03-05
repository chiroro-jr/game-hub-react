import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import orderings from '@/data/orderings'
import useGameQueryStore from '@/store'

function SortSelector() {
  const setSortOrder = useGameQueryStore((store) => store.setSortOrder)

  return (
    <div className="space-y-1">
      <span className="text-sm">Order by</span>
      <Select onValueChange={(value) => setSortOrder(value)}>
        <SelectTrigger className="w-[180px] border-none bg-card">
          <SelectValue placeholder="Relevance" />
        </SelectTrigger>
        <SelectContent className="border-none">
          {orderings.map((sortOrder) => (
            <SelectItem key={sortOrder.label} value={sortOrder.value}>
              {sortOrder.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default SortSelector
