import { GameQuery } from '@/services/gamesService'
import { Genre } from '@/services/genresService'
import { FetchDataResponse } from '@/services/http-client'
import { Platform } from '@/services/platformsService'
import { useQueryClient } from '@tanstack/react-query'

interface Props {
  gameQuery: GameQuery
}

function GameHeading({ gameQuery }: Props) {
  const queryClient = useQueryClient()

  const selectedGenre = queryClient
    .getQueryData<FetchDataResponse<Genre>>(['genres'])
    ?.results.find((genre) => genre.id === gameQuery.genreId)
  const selectedPlatform = queryClient
    .getQueryData<FetchDataResponse<Platform>>(['platforms'])
    ?.results.find((platform) => platform.id === gameQuery.platformId)

  return (
    <h1 className="text-5xl font-bold">{`${selectedPlatform?.name || ''} ${selectedGenre?.name || ''} Games`}</h1>
  )
}

export default GameHeading
