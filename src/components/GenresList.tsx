import { cropImage } from '@/services/image-url'
import genres from '@/data/genres'

interface Props {
  onSelectGenre: (genre: number) => void
  selectedGenre: number | null
}

// TODO: Add the genres as static data to allow for local querying
function GenresList({ onSelectGenre, selectedGenre }: Props) {
  return (
    <div className="space-y-2.5">
      <h2 className="text-lg font-bold">Genres</h2>
      <ul className="space-y-2.5">
        {genres.map((genre) => (
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
