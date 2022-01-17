import { Lists } from 'types'

const SetTickerSizeReducer = (state: Lists, action: { payload: { id: string, ticker: number } }) => {
  const tickerSize = action.payload.ticker > 0 ? action.payload.ticker : state.orderbooks![action.payload.id].inc[0]
  state.orderbooks![action.payload.id].ticker = tickerSize
}

export default SetTickerSizeReducer
