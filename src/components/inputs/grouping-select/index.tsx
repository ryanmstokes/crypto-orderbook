import { UseTickers, SetTickerSize } from 'store/features/tables'
import { useDispatch } from 'react-redux'
import Select from 'components/inputs/select'
import { StyledGroupOptions } from 'components/inputs/grouping-select/styled'

const GroupingSelect = ({ id }: { id: string }) => {
  const dispatch = useDispatch()

  const setTicker = (size: number) => {
    dispatch(SetTickerSize({ id: id, ticker: Number(size) }))
  }

  return (
    <StyledGroupOptions>
      Group: <Select list={UseTickers(id)} callback={setTicker} />
    </StyledGroupOptions>
  )
}
export default GroupingSelect
