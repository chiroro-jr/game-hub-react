import { useState } from 'react'
import GameGrid from './components/GameGrid'
import GenresList from './components/GenresList'
import NavBar from './components/NavBar'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

  return (
    <div className="main-layout">
      <div className="nav p-3.5">
        <NavBar />
      </div>
      <div className="aside p-[18px]">
        <GenresList
          selectedGenre={selectedGenre}
          onSelectGenre={(genre: Genre) => setSelectedGenre(genre)}
        />
      </div>
      <div className="main space-y-4 p-[18px]">
        <div>
          <PlatformSelector />
        </div>
        <GameGrid selectedGenre={selectedGenre} />
      </div>
    </div>
  )
}

export default App
