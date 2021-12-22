import Tables from 'components/tables'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import 'components/widget/styles.css'

const Widget = () => {
  const tables = useSelector((state: RootState) => state.lists)
  return (
    <div data-testid="Widget" className="widget">
      <Tables />
    </div>
  )
}

export default Widget
