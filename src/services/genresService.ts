import { Genre } from '../entities/Genre'
import HttpClient from './http-client'

const genresService = new HttpClient<Genre>('/genres')

export default genresService
