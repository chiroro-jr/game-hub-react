import useGame from '@/hooks/useGame'
import { useParams } from 'react-router-dom'

function GameDetailPage() {
  const { slug } = useParams()

  const { data: game, error, isLoading } = useGame(slug!)

  if (error) throw error

  if (isLoading)
    return <p className="py-4 text-center text-xl">Loading game...</p>

  return (
    <div className="space-y-2 p-[18px]">
      <h1 className="text-5xl font-bold">{game?.name}</h1>
      <div>{game?.description_raw}</div>
    </div>
  )
}

export default GameDetailPage
