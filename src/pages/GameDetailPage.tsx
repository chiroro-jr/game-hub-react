import ExpandableText from '@/components/ExpandableText'
import GameAttributes from '@/components/GameAttributes'
import GameScreenshots from '@/components/GameScreenshots'
import GameTrailer from '@/components/GameTrailer'
import useGame from '@/hooks/useGame'
import { useParams } from 'react-router-dom'

function GameDetailPage() {
  const { slug } = useParams()

  const { data: game, error, isLoading } = useGame(slug!)

  if (error) throw error

  if (isLoading)
    return <p className="py-4 text-center text-xl">Loading game...</p>

  return (
    <div className="grid grid-cols-1 gap-4 p-[18px] md:grid-cols-2">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold">{game?.name}</h1>
        <ExpandableText>{game?.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </div>
      <div className="space-y-4">
        <GameTrailer gameId={game?.id || 0} />
        <GameScreenshots gameId={game?.id || 0} />
      </div>
    </div>
  )
}

export default GameDetailPage
