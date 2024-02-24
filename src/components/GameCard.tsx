import { Game } from '@/hooks/useGames'
import { Card, CardContent, CardTitle } from './ui/card'
import PlatformIconsList from './PlatformIconsList'
import { cropImage } from '@/services/image-url'

interface Props {
  game: Game
}

function GameCard({ game }: Props) {
  return (
    <Card className="overflow-hidden rounded-xl">
      <img src={cropImage(game.background_image)} />
      <CardContent className="space-y-4 p-4">
        <CardTitle className="text-2xl">{game.name}</CardTitle>
        <PlatformIconsList platforms={game.parent_platforms} />
      </CardContent>
    </Card>
  )
}

export default GameCard
