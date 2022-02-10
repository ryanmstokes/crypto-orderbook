import Button from 'components/inputs/button'
import { MouseEventHandler } from 'react'

function KillFeed(
  { callback }: { callback: MouseEventHandler<HTMLButtonElement> },
) {
  return (
    <div className="toggle">
      <Button callback={callback} title="Kill Feed" variant="b" />
    </div>
  )
}

export default KillFeed
