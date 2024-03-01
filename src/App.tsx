import { useState } from 'react'
import GameGrid from './components/GameGrid'
import GenresList from './components/GenresList'
import NavBar from './components/NavBar'
import PlatformSelector from './components/PlatformSelector'
import { GameQuery } from '@/services/gamesService'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <div className="main-layout">
      <div className="nav p-3.5">
        <NavBar
          onSearch={(searchTerm: string) =>
            setGameQuery({ ...gameQuery, searchTerm })
          }
        />
      </div>
      <div className="aside p-[18px]">
        <GenresList
          selectedGenreId={gameQuery.genreId}
          onSelectGenre={(genreId: number) =>
            setGameQuery({ ...gameQuery, genreId })
          }
        />
      </div>
      <div className="main space-y-5 p-[18px]">
        <GameHeading gameQuery={gameQuery} />
        <div className="flex gap-6">
          <PlatformSelector
            onSelectPlatform={(platformId: number) =>
              setGameQuery({ ...gameQuery, platformId })
            }
          />

          <SortSelector
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </div>
        <GameGrid gameQuery={gameQuery} />
      </div>
    </div>
  )
}

export default App
