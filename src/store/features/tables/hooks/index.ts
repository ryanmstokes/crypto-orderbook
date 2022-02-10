import { useSelector } from 'react-redux'
import { RootState } from 'store'
import TypedKeys from 'utils/typed-keys'

export const UseLoaded = () => useSelector((state: RootState): boolean => state.lists.loaded)

export const UseTables = (id: string) => useSelector((state: RootState) => {
  if (state.lists.orderbooks![id].current !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let prices: any

    if (state.lists.orderbooks![id].values) {
      prices = TypedKeys(state.lists.orderbooks![id].values).map(
        (key) => state.lists.orderbooks![id].values![key]
      )
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let tableData: any = false

    if (prices !== undefined) {
      tableData = {
        current: state.lists.orderbooks![id].current,
        tables: prices,
      }
    }
    return tableData
  }
  return undefined
})

export const UseTableHeaders = () => {
  const headers: string[] = useSelector(
    (state: RootState) => TypedKeys(state.lists.headers).map((key) => state.lists.headers[key])
  )
  return headers
}

export const UseTickers = (id: string): number[] => useSelector(
  (state: RootState): number[] => state.lists.orderbooks![id].inc!
)

export const UseWSConfig = (symbol: string) => useSelector((state: RootState) => ({
  url: state.lists.url,
  feed: state.lists.feed,
  symbol: state.lists.lists[symbol].product_ids,
}))

export const UseOrderbooks = (id: string) => {
  const current = useSelector((state: RootState) => state.lists.orderbooks![id].current)
  return {
    id,
    current,
  }
}
