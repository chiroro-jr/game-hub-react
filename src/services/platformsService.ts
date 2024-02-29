import HttpClient from './http-client'

export interface Platform {
  id: number
  slug: string
  name: string
}

const platformsService = new HttpClient<Platform>('/platforms/lists/parents')

export default platformsService
