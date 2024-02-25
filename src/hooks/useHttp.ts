import httpClient from '@/services/http-client'
import axios, { AxiosRequestConfig } from 'axios'
import { useEffect, useState } from 'react'

interface FetchDataResponse<T> {
  count: number
  results: T[]
}

const useHttp = <T>(
  url: string,
  requestConfig?: AxiosRequestConfig,
  deps?: unknown[],
) => {
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(
    () => {
      const controller = new AbortController()
      const signal = controller.signal

      setIsLoading(true)
      httpClient
        .get<FetchDataResponse<T>>(url, {
          signal,
          ...requestConfig,
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
    },
    deps ? [...deps] : [],
  )

  return { data, error, isLoading }
}

export default useHttp
