import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface Props {
  onSelectSortOrder: (sortOrder: string) => void
}

function SortSelector({ onSelectSortOrder }: Props) {
  const sortOrders = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-added', label: 'Date added' },
    { value: '-metacritic', label: 'Average rating' },
    { value: '-popularity', label: 'Popularity' },
  ]

  return (
    <div className="space-y-1">
      <span className="text-sm">Order by</span>
      <Select onValueChange={(value) => onSelectSortOrder(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Relevance" />
        </SelectTrigger>
        <SelectContent>
          {sortOrders.map((sortOrder) => (
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
