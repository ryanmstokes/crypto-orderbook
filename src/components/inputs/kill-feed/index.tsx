import Button from 'components/inputs/button'
import { MouseEventHandler } from 'react'

const KillFeed = ({ id, callback }: { id: string, callback: MouseEventHandler<HTMLButtonElement> }) => {
  return (
    <div className="toggle">
      <Button callback={callback} title="Kill Feed" variant="b" />
    </div>
  )
}

export default KillFeed
