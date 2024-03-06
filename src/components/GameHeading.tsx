import useGenre from '@/hooks/useGenre'
import usePlatform from '@/hooks/usePlatform'
import useGameQueryStore from '@/store'

function GameHeading() {
  const genreId = useGameQueryStore((store) => store.gameQuery.genreId)
  const selectedGenre = useGenre(genreId)

  const platformId = useGameQueryStore((store) => store.gameQuery.platformId)
  const selectedPlatform = usePlatform(platformId)

  return (
    <h1 className="text-5xl font-bold">{`${selectedPlatform?.name || ''} ${selectedGenre?.name || ''} Games`}</h1>
  )
}

export default GameHeading
