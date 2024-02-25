import { Genre } from './useGenres'
import useHttp from './useHttp'

export interface Platform {
  id: number
  slug: string
  name: string
}

export interface Game {
  id: number
  name: string
  background_image: string
  metacritic: number
  parent_platforms: { platform: Platform }[]
}

const useGames = (selectedGenre: Genre | null) =>
  useHttp<Game>(
    '/games',
    {
      params: { genres: selectedGenre?.id },
    },
    [selectedGenre],
  )

export default useGames
