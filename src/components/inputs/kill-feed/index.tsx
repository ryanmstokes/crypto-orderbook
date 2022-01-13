import Button from 'components/inputs/button'

const KillFeed = ({ id, callback }: any) => {
  const ToggleWebSocketOptions: any = {
    title: "Kill Feed",
    callback: callback
  }
  return (
    <div className="toggle">
      <Button {...ToggleWebSocketOptions} />
    </div>
  )
}

export default KillFeed
