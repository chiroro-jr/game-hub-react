import { FormEvent, useRef } from 'react'
import { Input } from './ui/input'
import useGameQueryStore from '@/store'

function SearchInput() {
  const inputRef = useRef<HTMLInputElement>(null)
  const setSearchTerm = useGameQueryStore((store) => store.setSearchTerm)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (inputRef.current && inputRef.current.value)
      setSearchTerm(inputRef.current.value)
  }

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <Input
        ref={inputRef}
        className="focus-within: w-full rounded-full border-none border-card bg-card px-4 text-card transition-all hover:bg-muted focus:bg-card-foreground"
        type="text"
        name="searchTerm"
        placeholder="Search games..."
      />
    </form>
  )
}
export default SearchInput
