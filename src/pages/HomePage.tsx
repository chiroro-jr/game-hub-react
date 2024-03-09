import GameGrid from '@/components/GameGrid'
import GameHeading from '@/components/GameHeading'
import GenresList from '@/components/GenresList'
import PlatformSelector from '@/components/PlatformSelector'
import SortSelector from '@/components/SortSelector'

function HomePage() {
  return (
    <div className="main-layout">
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

export default HomePage
