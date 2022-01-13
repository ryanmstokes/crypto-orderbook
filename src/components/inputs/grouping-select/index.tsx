import { UseTickers, SetTickerSize } from 'store/features/tables'
import { useDispatch } from 'react-redux'
import Select from 'components/inputs/select'

const GroupingSelect = ({ id }: { id: string }) => {
  const dispatch = useDispatch()

  const setTicker = (size: number) => {
    dispatch(SetTickerSize({ id: id, ticker: Number(size) }))
  }

  const tickerOptions: any = {
    list: UseTickers(id),
    callback: setTicker
  }

  return (
    <div>
      Grouping: <Select {...tickerOptions} />
    </div>
  )
}
export default GroupingSelect
