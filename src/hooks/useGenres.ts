import { useQuery } from '@tanstack/react-query'
import httpClient from '@/services/http-client'
import { FetchDataResponse } from '@/services/http-client'
import genres from '@/data/genres'

export interface Genre {
  id: number
  slug: string
  name: string
  image_background: string
}

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: () =>
      httpClient
        .get<FetchDataResponse<Genre>>('/genres')
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 25Hrs
    initialData: { count: genres.length, results: genres },
  })
export default useGenres
