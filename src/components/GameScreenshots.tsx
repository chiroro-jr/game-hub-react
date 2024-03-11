import useScreenshots from '@/hooks/useScreenshots'

interface Props {
  gameId: number
}

function GameScreenshots({ gameId }: Props) {
  const { data, isLoading, error } = useScreenshots(gameId)

  if (isLoading) return null

  if (error) throw error

  return (
    <div className="grid grid-cols-2 gap-4">
      {data?.results.map((screenshot) => (
        <img key={screenshot.id} src={screenshot.image} />
      ))}
    </div>
  )
}

export default GameScreenshots
