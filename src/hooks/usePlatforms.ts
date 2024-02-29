import platforms from '@/data/platforms'
import platformsService from '@/services/platformsService'
import { useQuery } from '@tanstack/react-query'

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: platformsService.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24Hrs
    initialData: { count: platforms.length, results: platforms },
  })

export default usePlatforms
