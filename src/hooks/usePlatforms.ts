import useHttp from './useHttp'

export interface Platform {
  id: number
  slug: string
  name: string
}

const usePlatforms = () => useHttp<Platform>('/platforms/lists/parents')

export default usePlatforms
