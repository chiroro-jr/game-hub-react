import useGenres from '@/hooks/useGenres'
import { cropImage } from '@/services/image-url'

function GenresList() {
  const { data: genres, error, isLoading } = useGenres()

  if (error) return null

  if (isLoading) return <p>Loading genres</p>

  return (
    <ul className="space-y-2.5">
      {genres.map((genre) => (
        <li key={genre.id}>
          <a href="#" className="flex items-center gap-1.5 hover:underline">
            <img
              className="h-8 w-8 rounded-md object-cover"
              src={cropImage(genre.image_background)}
            />
            <span className="wrap">{genre.name}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default GenresList
