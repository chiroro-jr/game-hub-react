import HttpClient from './http-client'
import { Platform } from './platformsService'

export interface GameQuery {
  genreId?: number
  platformId?: number
  sortOrder?: string
  searchTerm?: string
}
export interface Game {
  id: number
  name: string
  slug: string
  description_raw: string
  background_image: string
  metacritic: number
  parent_platforms: { platform: Platform }[]
}

const gamesService = new HttpClient<Game>('/games')

export default gamesService
