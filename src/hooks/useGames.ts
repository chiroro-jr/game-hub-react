import { useInfiniteQuery } from '@tanstack/react-query'
import gamesService from '@/services/gamesService'
import ms from 'ms'
import useGameQueryStore from '@/store'

const useGames = () => {
  const gameQuery = useGameQueryStore((store) => store.gameQuery)

  return useInfiniteQuery({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam }) =>
      gamesService.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchTerm,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : null
    },
    staleTime: ms('25h'),
  })
}
export default useGames
