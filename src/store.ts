import { create } from 'zustand'

interface GameQuery {
  genreId?: number
  platformId?: number
  searchTerm?: string
  sortOrder?: string
}

interface GameQueryStore {
  gameQuery: GameQuery
  setGenreId: (genreId: number) => void
  setPlatformId: (platformId: number) => void
  setSearchTerm: (searchTerm: string) => void
  setSortOrder: (sortOrder: string) => void
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),

  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),

  setSearchTerm: (searchTerm) => set(() => ({ gameQuery: { searchTerm } })),
}))

export default useGameQueryStore
