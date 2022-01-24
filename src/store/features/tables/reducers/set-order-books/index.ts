import { Lists, ConfigOrderbooks } from 'types'

const SetOrderBooksReducer = (state: Lists, action: { payload: ConfigOrderbooks }) => {
  state.orderbooks = action.payload
}

export default SetOrderBooksReducer
