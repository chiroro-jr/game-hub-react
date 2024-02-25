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
        className="w-full rounded-full px-4 py-6"
        type="text"
        name="searchTerm"
        placeholder="Search games..."
      />
    </form>
  )
}

export default SearchInput
