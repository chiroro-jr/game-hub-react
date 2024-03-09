import { Platform } from '@/entities/Platform'
import { Genre } from './Genre'
import { Publisher } from './Publisher'

export interface Game {
  id: number
  name: string
  slug: string
  description_raw: string
  background_image: string
  metacritic: number
  parent_platforms: { platform: Platform }[]
  genres: Genre[]
  publishers: Publisher[]
}
