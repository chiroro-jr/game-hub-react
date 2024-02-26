import { FormEvent } from 'react'
import { Input } from './ui/input'

interface Props {
  onSearch: (searchTerm: string) => void
}

function SearchInput({ onSearch }: Props) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)

    onSearch(formData.get('searchTerm')?.toString() || '')
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
