import Tables from 'components/tables'
import 'components/widget/styles.css'
import Select from 'components/inputs/select'
import { useTickers } from 'store/features/tables'
import { useDispatch } from 'react-redux'
import { setTickerSize } from 'store/features/tables'
import { useTables } from 'store/features/tables'

const Widget = () => {
  const dispatch = useDispatch()

  const setTicker = (size: number) => {
    dispatch(setTickerSize(Number(size)))
  }

  const options: any = {
    list: useTickers(),
    callback: setTicker
  }
  const tableData = useTables()

  return (
    <div data-testid="Widget" className="widget">
      <div>
        Grouping: <Select {...options} />
      </div>
      {
        tableData ? <Tables {...tableData} /> : <div>Loading</div>
      }
    </div>
  )
}

export default Widget
