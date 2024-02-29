import HttpClient from './http-client'

export interface Genre {
  id: number
  slug: string
  name: string
  image_background: string
}

const genresService = new HttpClient<Genre>('/genres')

export default genresService
