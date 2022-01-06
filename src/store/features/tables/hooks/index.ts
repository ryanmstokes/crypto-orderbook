import { useSelector } from 'react-redux'
import { RootState } from 'store'
import TypedKeys from 'utils/typed-keys'

export const useTables = () => {
  return useSelector((state: RootState) => {

    const current = state.lists.current
    let prices: any

    if (state.lists.lists[current].sorted) {
      prices = TypedKeys(state.lists.lists[current].sorted).map(
        (key) => state.lists.lists[current].sorted![key]
      )
    }

    let tableData: any = false

    if (prices !== undefined) {
      tableData = {
        title: state.lists.title,
        current: current,
        tables: prices.reverse()
      }
    }
    return tableData
  })
}

export const useTableHeaders = () => {
  const headers: string[] = useSelector((state: RootState) =>
    TypedKeys(state.lists.headers).map((key) =>
      state.lists.headers[key]))
  return headers
}

type numberArray = number[]
export const useTickers = (): number[] => {
  const tickers = useSelector((state: RootState): number[] => {
    const current = state.lists.current
    const tickers: numberArray = state.lists.lists[current].inc
    return tickers
  })
  return tickers
}

export const useTickerSize = (): number => {
  return useSelector((state: RootState): number => {
    const current = state.lists.current
    return state.lists.lists[current].ticker
  })
}

