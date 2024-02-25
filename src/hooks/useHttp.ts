import httpClient from '@/services/http-client'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface FetchDataResponse<T> {
  count: number
  results: T[]
}

const useHttp = <T>(url: string) => {
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    setIsLoading(true)
    httpClient
      .get<FetchDataResponse<T>>(url, {
        signal,
      })
      .then((res) => {
        setIsLoading(false)
        setData(res.data.results)
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

  return { data, error, isLoading }
}

export default useHttp
