import httpClient from '@/services/http-client'
import { useEffect, useState } from 'react'

interface Game {
  id: number
  name: string
}

interface FetchGamesResponse {
  count: number
  results: Game[]
}

function GameGrid() {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    httpClient
      .get<FetchGamesResponse>('/games')
      .then((res) => {
        setIsLoading(false)
        setGames(res.data.results)
      })
      .catch((error) => {
        setIsLoading(false)
        setError(error)
      })
  }, [])

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
