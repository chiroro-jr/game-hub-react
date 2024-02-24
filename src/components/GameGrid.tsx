import useGames from '@/hooks/useGames'

function GameGrid() {
  const { games, error, isLoading } = useGames()

  if (error) return <p>{error.message}</p>

  if (isLoading) return <p>Loading games...</p>

  return (
    <ul>
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  )
}

export default GameGrid
