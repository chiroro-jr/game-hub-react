import { useQuery } from '@tanstack/react-query'
import { Platform } from './usePlatforms'
import httpClient from '@/services/http-client'
import { FetchDataResponse } from '@/services/http-client'
export interface GameQuery {
  genre: number | null
  platform: number | null
  sortOrder: string | null
  searchTerm: string | null
}
export interface Game {
  id: number
  name: string
  background_image: string
  metacritic: number
  parent_platforms: { platform: Platform }[]
}

const useGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ['games', gameQuery],
    queryFn: () =>
      httpClient
        .get<FetchDataResponse<Game>>('/games', {
          params: {
            genres: gameQuery.genre,
            parent_platforms: gameQuery.platform,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchTerm,
          },
        })
        .then((res) => res.data),
  })
export default useGames
