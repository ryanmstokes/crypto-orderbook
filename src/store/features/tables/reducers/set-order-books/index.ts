import { Lists } from 'types'

const SetOrderBooksReducer = (state: Lists, action: { payload: any }) => {
  state.orderbooks = action.payload
}

export default SetOrderBooksReducer
