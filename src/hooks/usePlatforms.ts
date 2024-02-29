import platforms from '@/data/platforms'
import httpClient from '@/services/http-client'
import { useQuery } from '@tanstack/react-query'
import { FetchDataResponse } from '@/services/http-client'
export interface Platform {
  id: number
  slug: string
  name: string
}

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: () =>
      httpClient
        .get<FetchDataResponse<Platform>>('/platforms/lists/parents')
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24Hrs
    initialData: { count: platforms.length, results: platforms },
  })

export default usePlatforms
