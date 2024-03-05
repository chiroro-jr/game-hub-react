import { FormEvent } from 'react'
import { Input } from './ui/input'
import useGameQueryStore from '@/store'

// TODO: Use a ref for search input field
function SearchInput() {
  const setSearchTerm = useGameQueryStore((store) => store.setSearchTerm)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)

    setSearchTerm(formData.get('searchTerm')?.toString() || '')
  }

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <Input
        className="focus-within: w-full rounded-full border-none border-card bg-card px-4 text-card transition-all hover:bg-muted focus:bg-card-foreground"
        type="text"
        name="searchTerm"
        placeholder="Search games..."
      />
    </form>
  )
}

export default SearchInput
