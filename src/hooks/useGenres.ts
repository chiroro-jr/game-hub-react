import useHttp from './useHttp'

export interface Genre {
  id: number
  slug: string
  name: string
  image_background: string
}

const useGenres = () => useHttp<Genre>('/genres')
export default useGenres
