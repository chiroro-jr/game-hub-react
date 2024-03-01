import useGenres from '@/hooks/useGenres'
import usePlatforms from '@/hooks/usePlatforms'
import { GameQuery } from '@/services/gamesService'

interface Props {
  gameQuery: GameQuery
}

function GameHeading({ gameQuery }: Props) {
  const { data: genres } = useGenres()
  const selectedGenre = genres.results.find(
    (genre) => genre.id === gameQuery.genreId,
  )

  const { data: platforms } = usePlatforms()
  const selectedPlatform = platforms.results.find(
    (platform) => platform.id === gameQuery.platformId,
  )

  return (
    <h1 className="text-5xl font-bold">{`${selectedPlatform?.name || ''} ${selectedGenre?.name || ''} Games`}</h1>
  )
}

export default GameHeading
