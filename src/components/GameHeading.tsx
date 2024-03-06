import useGenre from '@/hooks/useGenre'
import usePlatforms from '@/hooks/usePlatforms'
import useGameQueryStore from '@/store'

// TODO: refactor to create useGenre and usePlatform
function GameHeading() {
  const genreId = useGameQueryStore((store) => store.gameQuery.genreId)
  const selectedGenre = useGenre(genreId)

  const { data: platforms } = usePlatforms()
  const platformId = useGameQueryStore((store) => store.gameQuery.platformId)
  const selectedPlatform = platforms.results.find(
    (platform) => platform.id === platformId,
  )

  return (
    <h1 className="text-5xl font-bold">{`${selectedPlatform?.name || ''} ${selectedGenre?.name || ''} Games`}</h1>
  )
}

export default GameHeading
