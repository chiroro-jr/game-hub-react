import Screenshot from '@/entities/Screenshot'
import HttpClient from '@/services/http-client'
import { useQuery } from '@tanstack/react-query'

const useScreenshots = (gameId: number) => {
  const httpClient = new HttpClient<Screenshot>(`games/${gameId}/screenshots`)

  return useQuery({
    queryKey: ['screenshots', gameId],
    queryFn: () => httpClient.getAll(),
  })
}

export default useScreenshots
