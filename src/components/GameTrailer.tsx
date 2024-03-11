import useTrailers from '@/hooks/useTrailers'

interface Props {
  gameId: number
}

function GameTrailer({ gameId }: Props) {
  const { data, isLoading, error } = useTrailers(gameId)

  if (isLoading) return null

  if (error) throw error

  const firstTrailer = data?.results[0]
  return firstTrailer ? (
    <video
      className="w-full"
      src={firstTrailer.data[480]}
      poster={firstTrailer.preview}
      controls
    />
  ) : null
}

export default GameTrailer
