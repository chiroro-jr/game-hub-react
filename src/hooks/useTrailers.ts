import { Trailer } from '@/entities/Trailer'
import HttpClient from '@/services/http-client'
import { useQuery } from '@tanstack/react-query'

const useTrailers = (gameId: number) => {
  const httpClient = new HttpClient<Trailer>(`/games/${gameId}/movies`)

  return useQuery({
    queryKey: ['trailers', gameId],
    queryFn: () => httpClient.getAll(),
  })
}

export default useTrailers
