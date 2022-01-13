import { useSelector } from 'react-redux'
import { RootState } from 'store'
import TypedKeys from 'utils/typed-keys'

export const UseLoaded = (): any => {
  return useSelector((state: RootState): boolean => {
    return state.lists.loaded
  })
}

export const UseTables = (id: string, currentSymbol: any) => {
  return useSelector((state: RootState) => {
    if (state.lists.orderbooks![id].current !== 'undefined') {
      let prices: any

      if (state.lists.orderbooks![id].values) {
        prices = TypedKeys(state.lists.orderbooks![id].values).map(
          (key) => state.lists.orderbooks![id].values[key]
        )
      }
      let tableData: any = false

      if (prices !== undefined) {
        tableData = {
          title: state.lists.orderbooks![id].title,
          current: state.lists.orderbooks![id].current,
          tables: prices
        }
      }
      return tableData
    } else {
      return undefined
    }
  })
}

export const UseTableHeaders = () => {
  const headers: string[] = useSelector((state: RootState) =>
    TypedKeys(state.lists.headers).map((key) =>
      state.lists.headers[key]))
  return headers
}

export const UseTickers = (id: string): number[] => {
  return useSelector((state: RootState): number[] => {
    return state.lists.orderbooks![id].inc
  })
}


export const UseWSConfig = (symbol: any): any => {
  return useSelector((state: RootState): any => {
    return {
      url: state.lists.url,
      feed: state.lists.feed,
      symbol: state.lists.lists[symbol].product_ids
    }
  })
}

export const UseOrderbooks = (id: string) => {
  let current = useSelector((state: RootState) => state.lists.orderbooks![id].current)
  return {
    id: id,
    current: current,
  }
}
