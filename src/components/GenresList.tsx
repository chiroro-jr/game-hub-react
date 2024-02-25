import useGenres, { Genre } from '@/hooks/useGenres'
import { cropImage } from '@/services/image-url'
import GenresListSkeleton from './GenresListSkeleton'

interface Props {
  onSelectGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}

function GenresList({ onSelectGenre, selectedGenre }: Props) {
  const { data: genres, error, isLoading } = useGenres()

  if (error) return null

  if (isLoading) return <GenresListSkeleton />

  return (
    <ul className="space-y-2.5">
      {genres.map((genre) => (
        <li key={genre.id} onClick={() => onSelectGenre(genre)}>
          <a
            href="#"
            className={`${selectedGenre?.id === genre.id && 'font-bold'} flex items-center gap-1.5 hover:underline`}
          >
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
