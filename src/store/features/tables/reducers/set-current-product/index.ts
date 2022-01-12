import { Lists } from 'types'

const SetCurrentProductReducer = (state: Lists, action: { payload: string }) => {
  state.orderbooks![action.payload].current = state.orderbooks![action.payload].current === state.orderbooks![action.payload].products[0] ? state.orderbooks![action.payload].products[1] : state.orderbooks![action.payload].products[0]
}

export default SetCurrentProductReducer
