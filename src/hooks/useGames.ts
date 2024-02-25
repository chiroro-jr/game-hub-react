import { Genre } from './useGenres'
import useHttp from './useHttp'
import { Platform } from './usePlatforms'

export interface Game {
  id: number
  name: string
  background_image: string
  metacritic: number
  parent_platforms: { platform: Platform }[]
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: string | null,
) =>
  useHttp<Game>(
    '/games',
    {
      params: {
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatform,
      },
    },
    [selectedGenre, selectedPlatform],
  )

export default useGames
