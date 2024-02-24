import httpClient from '@/services/http-client'
import { useEffect, useState } from 'react'

export interface Game {
  id: number
  name: string
  background_image: string
}

interface FetchGamesResponse {
  count: number
  results: Game[]
}

const useGames = () => {
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

  return { games, error, isLoading }
}

export default useGames
