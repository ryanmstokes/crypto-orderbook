import { useSelector } from 'react-redux'
import { RootState } from 'store'
import TypedKeys from 'utils/typed-keys'

export const UseLoaded = () => {
  return useSelector((state: RootState): boolean => {
    return state.lists.loaded
  })
}

export const UseTables = (id: string, currentSymbol: string) => {
  return useSelector((state: RootState) => {
    if (state.lists.orderbooks![id].current !== 'undefined') {
      let prices: any

      if (state.lists.orderbooks![id].values) {
        prices = TypedKeys(state.lists.orderbooks![id].values).map(
          (key) => state.lists.orderbooks![id].values[key]
        )
      }

      let tableData: any = false
      // title: state.lists.orderbooks![id].title,

      if (prices !== undefined) {
        tableData = {
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
      state.lists.headers[key]
    )
  )
  return headers
}

export const UseTickers = (id: string): number[] => {
  return useSelector((state: RootState): number[] => {
    return state.lists.orderbooks![id].inc
  })
}


export const UseWSConfig = (symbol: string) => {
  return useSelector((state: RootState) => {
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
