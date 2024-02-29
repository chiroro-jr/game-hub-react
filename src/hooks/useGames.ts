import { useInfiniteQuery } from '@tanstack/react-query'
import gamesService, { GameQuery } from '@/services/gamesService'

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam }) =>
      gamesService.getAll({
        params: {
          genres: gameQuery.genre,
          parent_platforms: gameQuery.platform,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchTerm,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : null
    },
  })

export default useGames
