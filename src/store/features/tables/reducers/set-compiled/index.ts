import { Lists } from 'types'
import deepClone from 'utils/deep-clone'
import TickeredList from 'utils/tickered-list'

const SetCompiledReducer = (state: Lists, action: {
  payload: {
    values: {
      asks: {
        values: number[][],
        sortBy: string
      },
      bids: {
        values: number[][],
        sortBy: string
      }
    },
    id: string
  }
}) => {
  const current = action.payload.id
  const asks = deepClone(
    TickeredList(
      action.payload.values.asks.values,
      action.payload.values.asks.sortBy,
      state.orderbooks![action.payload.id].ticker!
    )
  )
  const bids = deepClone(
    TickeredList(
      action.payload.values.bids.values,
      action.payload.values.bids.sortBy,
      state.orderbooks![action.payload.id].ticker!
    )
  )

  state.orderbooks![current].compiled = {
    asks: {
      title: 'Asks',
      sortBy: action.payload.values.asks.sortBy,
      values: asks,
    },
    bids:
    {
      title: 'Bids',
      sortBy: action.payload.values.bids.sortBy,
      values: bids,
    },
  }
}

export default SetCompiledReducer
