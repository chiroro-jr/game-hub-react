import useGames from '@/hooks/useGames'
import GameCard from './GameCard'

function GameGrid() {
  const { games, error, isLoading } = useGames()

  if (error) return <p>{error.message}</p>

  if (isLoading) return <p>Loading games...</p>

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {games.map((game) => (
        <GameCard game={game} key={game.id} />
      ))}
    </div>
  )
}

export default GameGrid
