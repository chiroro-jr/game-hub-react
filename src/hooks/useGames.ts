import useHttp from './useHttp'
import { Platform } from './usePlatforms'

export interface GameQuery {
  genre: number | null
  platform: number | null
}
export interface Game {
  id: number
  name: string
  background_image: string
  metacritic: number
  parent_platforms: { platform: Platform }[]
}

const useGames = (gameQuery: GameQuery) =>
  useHttp<Game>(
    '/games',
    {
      params: {
        genres: gameQuery.genre,
        parent_platforms: gameQuery.platform,
      },
    },
    [gameQuery],
  )

export default useGames
