import { useState } from 'react'
import GameGrid from './components/GameGrid'
import GenresList from './components/GenresList'
import NavBar from './components/NavBar'
import PlatformSelector from './components/PlatformSelector'
import { GameQuery } from './hooks/useGames'
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
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre: number) =>
            setGameQuery({ ...gameQuery, genre })
          }
        />
      </div>
      <div className="main space-y-5 p-[18px]">
        <GameHeading />
        <div className="flex gap-6">
          <PlatformSelector
            onSelectPlatform={(platform: number) =>
              setGameQuery({ ...gameQuery, platform })
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
