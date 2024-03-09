import { useParams } from 'react-router-dom'

function GameDetailPage() {
  const params = useParams()
  return (
    <div>
      <div>Game details page</div>
      <div>Showing details for Game Id = {params.id}</div>
    </div>
  )
}

export default GameDetailPage
