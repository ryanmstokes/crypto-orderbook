import { Lists } from 'types'

const SetIncReducer = (state: Lists, action: { payload: { id: string, current: string } }) => {
  state.orderbooks![action.payload.id].inc = state.lists[action.payload.current].inc
}

export default SetIncReducer
