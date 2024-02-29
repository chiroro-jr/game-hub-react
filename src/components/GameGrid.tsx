import { GameQuery } from '@/services/gamesService'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import useGames from '@/hooks/useGames'
import React from 'react'
import { Button } from './ui/button'

interface Props {
  gameQuery: GameQuery
}

function GameGrid({ gameQuery }: Props) {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames(gameQuery)
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8]

  if (error) return <p>{error.message}</p>

  return (
    <div className="space-y-6 pb-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isLoading
          ? skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)
          : data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page?.results.map((game) => (
                  <GameCard game={game} key={game.id} />
                ))}
              </React.Fragment>
            ))}
      </div>

      {hasNextPage && (
        <Button
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
          className="flex h-auto w-auto bg-card px-6 py-2.5 text-lg font-semibold text-card-foreground transition-all hover:bg-card-foreground hover:text-card"
        >
          {isFetchingNextPage ? 'Loading...' : 'Load more'}
        </Button>
      )}
    </div>
  )
}

export default GameGrid
