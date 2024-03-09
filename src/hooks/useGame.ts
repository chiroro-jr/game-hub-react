import gamesService from '@/services/gamesService'
import { useQuery } from '@tanstack/react-query'
import ms from 'ms'

const useGame = (slug: string) =>
  useQuery({
    queryKey: ['games', slug],
    queryFn: () => gamesService.getOne(slug),
    staleTime: ms('24h'),
  })

export default useGame
