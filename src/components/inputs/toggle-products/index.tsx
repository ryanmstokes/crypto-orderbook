import { useDispatch } from 'react-redux'
import { CloseWebSocket, SetCurrentProduct } from 'store/features/tables'
import Button from 'components/inputs/button'

function ToggleProducts({ id }: { id: string }) {
  const dispatch = useDispatch()

  const toggle = () => {
    dispatch(CloseWebSocket(id))
    dispatch(SetCurrentProduct(id))
  }

  return (
    <div className="toggle">
      <Button title="Toggle feed" callback={toggle} variant="a" />
    </div>
  )
}

export default ToggleProducts
