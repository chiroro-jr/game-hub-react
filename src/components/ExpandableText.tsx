import { useState } from 'react'

interface Props {
  children?: string
}

function ExpandableText({ children }: Props) {
  const [expanded, setExpanded] = useState(false)
  const limit = 300

  if (!children) return null

  if (children.length <= 300) return <p className="leading-3">{children}</p>

  const summary = expanded ? children : children.substring(0, limit) + '...'

  return (
    <p className="leading-6">
      {summary}
      <button
        type="button"
        className="ml-2 rounded-lg bg-yellow-300 px-2 py-1 text-xs font-bold text-black"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Show less' : 'Show more'}
      </button>
    </p>
  )
}

export default ExpandableText
