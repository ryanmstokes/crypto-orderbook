import Button from 'components/inputs/button'

const KillFeed = ({ id, callback }: { id: string, callback: any }) => {
  return (
    <div className="toggle">
      <Button callback={callback} title="Kill Feed" />
    </div>
  )
}

export default KillFeed
