import GameGrid from './components/GameGrid'
import GenresList from './components/GenresList'
import NavBar from './components/NavBar'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'

function App() {
  return (
    <div className="main-layout">
      <div className="nav p-3.5">
        <NavBar />
      </div>
      <div className="aside p-[18px]">
        <GenresList />
      </div>
      <div className="main space-y-5 p-[18px]">
        <GameHeading />
        <div className="flex gap-6">
          <PlatformSelector />

          <SortSelector />
        </div>
        <GameGrid />
      </div>
    </div>
  )
}

export default App
