import { GameQuery } from '@/services/gamesService'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import useGames from '@/hooks/useGames'

interface Props {
  gameQuery: GameQuery
}

function GameGrid({ gameQuery }: Props) {
  const { data, error, isLoading } = useGames(gameQuery)
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8]

  if (error) return <p>{error.message}</p>

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {isLoading
        ? skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)
        : data?.results.map((game) => <GameCard game={game} key={game.id} />)}
    </div>
  )
}

export default GameGrid
