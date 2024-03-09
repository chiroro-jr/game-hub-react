import { ReactNode } from 'react'

interface Props {
  term: string
  children: ReactNode | ReactNode[]
}

function DefinitionTerm({ children, term }: Props) {
  return (
    <div className="space-y-1">
      <dt className="text-2xl font-bold text-card-foreground opacity-30">
        {term}
      </dt>
      <dd>{children}</dd>
    </div>
  )
}

export default DefinitionTerm
