import { Game } from '@/entities/Game'
import DefinitionTerm from './DefinitionTerm'
import CriticScore from './CriticScore'

interface Props {
  game?: Game
}

function GameAttributes({ game }: Props) {
  return (
    <dl className="grid grid-cols-2 gap-4">
      <DefinitionTerm term="Platforms">
        <ul>
          {game?.parent_platforms.map(({ platform }) => (
            <li key={platform.id}>{platform.name}</li>
          ))}
        </ul>
      </DefinitionTerm>
      <DefinitionTerm term="Metascore">
        <CriticScore score={game?.metacritic || 0} />
      </DefinitionTerm>

      <DefinitionTerm term="Genres">
        <ul>
          {game?.genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
        </ul>
      </DefinitionTerm>
      <DefinitionTerm term="Publishers">
        <ul>
          {game?.publishers.map((publisher) => (
            <li key={publisher.id}>{publisher.name}</li>
          ))}
        </ul>
      </DefinitionTerm>
    </dl>
  )
}

export default GameAttributes
