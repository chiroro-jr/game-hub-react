import { cropImage } from '@/services/image-url'
import useGenres from '@/hooks/useGenres'
import useGameQueryStore from '@/store'

function GenresList() {
  const { data: genres, error } = useGenres()
  const selectedGenreId = useGameQueryStore((store) => store.gameQuery.genreId)
  const setSelectedGenreId = useGameQueryStore((store) => store.setGenreId)

  if (error) return null

  return (
    <div className="space-y-2.5">
      <h2 className="text-lg font-bold">Genres</h2>
      <ul className="space-y-2.5">
        {genres?.results.map((genre) => (
          <li key={genre.id} onClick={() => setSelectedGenreId(genre.id)}>
            <a
              href="#"
              className={`${selectedGenreId === genre.id && 'font-bold'} flex items-center gap-1.5 hover:underline`}
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
