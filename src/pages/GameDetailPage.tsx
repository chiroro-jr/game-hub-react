import ExpandableText from '@/components/ExpandableText'
import GameAttributes from '@/components/GameAttributes'
import useGame from '@/hooks/useGame'
import { useParams } from 'react-router-dom'

function GameDetailPage() {
  const { slug } = useParams()

  const { data: game, error, isLoading } = useGame(slug!)

  if (error) throw error

  if (isLoading)
    return <p className="py-4 text-center text-xl">Loading game...</p>

  return (
    <div className="space-y-6 p-[18px]">
      <div className="space-y-3">
        <h1 className="text-5xl font-bold">{game?.name}</h1>
        <ExpandableText>{game?.description_raw}</ExpandableText>
      </div>
      <GameAttributes game={game} />
    </div>
  )
}

export default GameDetailPage
