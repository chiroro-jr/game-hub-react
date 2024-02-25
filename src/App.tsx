import GameGrid from './components/GameGrid'
import GenresList from './components/GenresList'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="main-layout">
      <div className="nav p-3.5">
        <NavBar />
      </div>
      <div className="aside p-[18px]">
        <GenresList />
      </div>
      <div className="main p-[18px]">
        <GameGrid />
      </div>
    </div>
  )
}

export default App
