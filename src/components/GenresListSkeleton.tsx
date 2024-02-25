import { Skeleton } from './ui/skeleton'

function GenresListSkeleton() {
  const skeletons = [1, 2, 3, 4, 5, 6, 8, 9, 10]

  return (
    <ul className="space-y-2.5">
      {skeletons.map((skeleton) => (
        <li key={skeleton} className="flex items-center gap-1.5">
          <Skeleton className="h-8 w-8 rounded-md" />
          <Skeleton className="h-4 w-[100px]" />
        </li>
      ))}
    </ul>
  )
}

export default GenresListSkeleton
