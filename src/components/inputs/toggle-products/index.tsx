import { useDispatch } from 'react-redux'
import { CloseWebSocket } from 'store/features/tables'
import { SetCurrentProduct } from 'store/features/tables'
import Button from 'components/inputs/button'

const ToggleProducts = ({ id }: { id: string }) => {
  const dispatch = useDispatch()

  const toggle = () => {
    dispatch(CloseWebSocket(id))
    dispatch(SetCurrentProduct(id))
  }

  const toggleOptions: any = {
    title: "toggle",
    callback: toggle
  }

  return (
    <div className="toggle">
      <Button {...toggleOptions} />
    </div>
  )
}

export default ToggleProducts
