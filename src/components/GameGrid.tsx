import useGames from '@/hooks/useGames'
import GameCard from './GameCard'
import { Genre } from '@/hooks/useGenres'
import GameCardSkeleton from './GameCardSkeleton'

interface Props {
  selectedGenre: Genre | null
}

function GameGrid({ selectedGenre }: Props) {
  const { data: games, error, isLoading } = useGames(selectedGenre)
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8]

  if (error) return <p>{error.message}</p>

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {isLoading
        ? skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)
        : games.map((game) => <GameCard game={game} key={game.id} />)}
    </div>
  )
}

export default GameGrid
