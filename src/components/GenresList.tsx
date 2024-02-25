import useGenres from '@/hooks/useGenres'

function GenresList() {
  const { genres, error, isLoading } = useGenres()

  if (error) return null

  if (isLoading) return <p>Loading genres</p>

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  )
}

export default GenresList
