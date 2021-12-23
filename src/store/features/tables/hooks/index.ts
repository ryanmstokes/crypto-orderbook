import { useSelector } from 'react-redux'
import { RootState } from 'store'
import TypedKeys from 'utils/typed-keys'

export const useTables = () => {
  const table = useSelector((state: RootState) => {
    const current = state.lists.current
    const prices = TypedKeys(state.lists.lists[current].prices).map((key) => state.lists.lists[current].prices[key])
    return {
      title: state.lists.title,
      current: current,
      tables: prices
    }
  })
  return table
}