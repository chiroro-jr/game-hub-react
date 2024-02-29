import axios, { AxiosRequestConfig } from 'axios'

export interface FetchDataResponse<T> {
  count: number
  results: T[]
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'fc992f5179d14507bfc1bddc17a9c03c',
  },
})

class HttpClient<T> {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll = (requestConfig?: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchDataResponse<T>>(this.endpoint, requestConfig)
      .then((res) => res.data)
}

export default HttpClient
