import { Lists } from 'types'
import deepClone from 'utils/deep-clone'
import TickeredList from 'utils/tickered-list'

const SetCompiledReducer = (state: Lists, action: {
  payload: any
}) => {

  const current = action.payload.id
  const asks = deepClone(TickeredList(action.payload.values.asks.values, "DESC", state.orderbooks![action.payload.id].ticker))
  const bids = deepClone(TickeredList(action.payload.values.bids.values, "ASC", state.orderbooks![action.payload.id].ticker)) /**state.orderbooks![action.payload.id].ticker */

  state.orderbooks![current].compiled = {
    asks: {
      title: 'Asks',
      sortBy: 'DESC',
      values: asks
    },
    bids:
    {
      title: 'Bids',
      sortBy: 'ASC',
      values: bids
    }
  }
}

export default SetCompiledReducer
