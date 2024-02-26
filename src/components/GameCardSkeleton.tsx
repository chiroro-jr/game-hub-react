import { Card, CardContent } from './ui/card'
import { Skeleton } from './ui/skeleton'

function GameCardSkeleton() {
  return (
    <Card className="overflow-hidden rounded-xl border-none">
      <Skeleton className="h-[300px] rounded-none" />
      <CardContent className="space-y-4 p-4">
        <Skeleton className="h-8 max-w-[250px] rounded-sm" />
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 max-w-[200px] flex-1 rounded-sm" />
          <Skeleton className="h-6 w-6 rounded-sm px-2" />
        </div>
      </CardContent>
    </Card>
  )
}

export default GameCardSkeleton
