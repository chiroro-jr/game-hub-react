import { GameQuery } from '@/services/gamesService'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import useGames from '@/hooks/useGames'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

interface Props {
  gameQuery: GameQuery
}

function Loading() {
  return (
    <p className="mt-4 py-4 text-center text-xl font-semibold text-card-foreground">
      Loading more...
    </p>
  )
}

function GameGrid({ gameQuery }: Props) {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGames(gameQuery)
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8]

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0

  if (error) return <p>{error.message}</p>

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      next={() => fetchNextPage()}
      hasMore={hasNextPage}
      loader={<Loading />}
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isLoading
          ? skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)
          : data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.results.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </React.Fragment>
            ))}
      </div>
    </InfiniteScroll>
  )
}

export default GameGrid
