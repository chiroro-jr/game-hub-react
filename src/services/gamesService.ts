import HttpClient from './http-client'
import { Platform } from './platformsService'

export interface GameQuery {
  genre: number | null
  platform: number | null
  sortOrder: string | null
  searchTerm: string | null
}
export interface Game {
  id: number
  name: string
  background_image: string
  metacritic: number
  parent_platforms: { platform: Platform }[]
}

const gamesService = new HttpClient<Game>('/games')

export default gamesService
