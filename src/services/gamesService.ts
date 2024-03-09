import { Game } from '../entities/Game'
import HttpClient from './http-client'

const gamesService = new HttpClient<Game>('/games')

export default gamesService
