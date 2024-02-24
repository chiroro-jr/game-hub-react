import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: 'fc992f5179d14507bfc1bddc17a9c03c',
  },
})

export default httpClient
