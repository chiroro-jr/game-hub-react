import httpClient from '@/services/http-client'
import axios from 'axios'
import { useEffect, useState } from 'react'

export interface Genre {
  id: number
  slug: string
  name: string
}

interface FetchGenresResponse {
  count: number
  results: Genre[]
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([])
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    setIsLoading(true)
    httpClient
      .get<FetchGenresResponse>('/genres', {
        signal,
      })
      .then((res) => {
        setIsLoading(false)
        setGenres(res.data.results)
      })
      .catch((error) => {
        if (axios.isCancel(error)) return
        setIsLoading(false)
        setError(error)
      })

    return () => {
      controller.abort()
    }
  }, [])

  return { genres, error, isLoading }
}

export default useGenres
