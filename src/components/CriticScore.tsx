import { Badge } from './ui/badge'

interface Props {
  score: number
}

const CriticScore = ({ score }: Props) => {
  const badgeColor =
    score > 85 ? 'bg-green-600' : score > 70 ? 'bg-yellow-500' : 'bg-gray-500'

  return (
    <Badge
      className={`${badgeColor} rounded-sm px-2 text-[14px]`}
      variant="secondary"
    >
      {score}
    </Badge>
  )
}

export default CriticScore
