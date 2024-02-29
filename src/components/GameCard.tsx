import { Game } from '@/services/gamesService'
import { Card, CardContent, CardTitle } from './ui/card'
import PlatformIconsList from './PlatformIconsList'
import { cropImage } from '@/services/image-url'
import { Badge } from '@/components/ui/badge'

interface Props {
  game: Game
}

// TODO: Use an AspectRatio component for the card image
// TODO: Fix badges for games that don't have a rating
function GameCard({ game }: Props) {
  const badgeColor =
    game.metacritic > 85
      ? 'bg-green-600'
      : game.metacritic > 70
        ? 'bg-yellow-500'
        : 'bg-gray-500'

  return (
    <Card className="overflow-hidden rounded-xl border-none shadow-md">
      <img src={cropImage(game.background_image)} />
      <CardContent className="space-y-4 p-4">
        <CardTitle className="text-2xl">{game.name}</CardTitle>
        <div className="flex items-center justify-between">
          <PlatformIconsList platforms={game.parent_platforms} />
          <Badge
            className={`${badgeColor} rounded-sm px-2 text-[14px]`}
            variant="secondary"
          >
            {game.metacritic}
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}

export default GameCard
