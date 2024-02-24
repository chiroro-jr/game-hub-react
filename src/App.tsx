import GameGrid from './components/GameGrid'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="main-layout">
      <div className="nav">
        <NavBar />
      </div>
      <div className="aside">Aside</div>
      <div className="main">
        <GameGrid />
      </div>
    </div>
  )
}

export default App
