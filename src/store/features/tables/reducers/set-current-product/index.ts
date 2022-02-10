import { Lists } from 'types'

const SetCurrentProductReducer = (state: Lists, action: { payload: string }) => {
  const orderbook = state.orderbooks![action.payload]
  const { products } = orderbook
  state.orderbooks![action.payload].current = orderbook.current === products[0]
    ? products[1] : products[0]
}

export default SetCurrentProductReducer
