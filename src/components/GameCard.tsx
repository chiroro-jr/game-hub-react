import { Game } from '@/entities/Game'
import { Card, CardContent, CardTitle } from './ui/card'
import PlatformIconsList from './PlatformIconsList'
import { cropImage } from '@/services/image-url'
import { Link } from 'react-router-dom'
import CriticScore from './CriticScore'

interface Props {
  game: Game
}

// TODO: Use an AspectRatio component for the card image
// TODO: Fix badges for games that don't have a rating
function GameCard({ game }: Props) {
  return (
    <Link to={`/games/${game.id}`}>
      <Card className="overflow-hidden rounded-xl border-none shadow-md transition-all duration-150 hover:-translate-y-2 hover:scale-[1.02] ">
        <img src={cropImage(game.background_image)} />
        <CardContent className="space-y-4 p-4">
          <CardTitle className="text-2xl">{game.name}</CardTitle>
          <div className="flex items-center justify-between">
            <PlatformIconsList platforms={game.parent_platforms} />
            <CriticScore score={game.metacritic} />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default GameCard
