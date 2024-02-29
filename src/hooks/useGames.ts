import { useQuery } from '@tanstack/react-query'
import gamesService, { GameQuery } from '@/services/gamesService'

const useGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ['games', gameQuery],
    queryFn: () =>
      gamesService.getAll({
        params: {
          genres: gameQuery.genre,
          parent_platforms: gameQuery.platform,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchTerm,
        },
      }),
  })

export default useGames
