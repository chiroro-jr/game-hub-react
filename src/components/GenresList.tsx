import { cropImage } from '@/services/image-url'
import useGenres from '@/hooks/useGenres'
import { LuLoader2 } from 'react-icons/lu'

interface Props {
  onSelectGenre: (genre: number) => void
  selectedGenre: number | null
}

function GenresList({ onSelectGenre, selectedGenre }: Props) {
  const { data: genres, error, isLoading } = useGenres()

  if (error) return null

  return (
    <div className="space-y-2.5">
      <h2 className="text-lg font-bold">Genres</h2>
      {isLoading && (
        <LuLoader2 size="22px" className="mr-2 h-4 w-4 animate-spin" />
      )}
      <ul className="space-y-2.5">
        {genres?.results.map((genre) => (
          <li key={genre.id} onClick={() => onSelectGenre(genre.id)}>
            <a
              href="#"
              className={`${selectedGenre === genre.id && 'font-bold'} flex items-center gap-1.5 hover:underline`}
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
    </div>
  )
}

export default GenresList
