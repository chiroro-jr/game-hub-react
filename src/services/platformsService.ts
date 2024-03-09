import { Platform } from '../entities/Platform'
import HttpClient from './http-client'

const platformsService = new HttpClient<Platform>('/platforms/lists/parents')

export default platformsService
