import { Game } from '@/hooks/useGames'
import { Card, CardContent, CardTitle } from './ui/card'

interface Props {
  game: Game
}

function GameCard({ game }: Props) {
  return (
    <Card className="overflow-hidden rounded-xl">
      <img src={game.background_image} />
      <CardContent className="p-4">
        <CardTitle>{game.name}</CardTitle>
      </CardContent>
    </Card>
  )
}

export default GameCard
