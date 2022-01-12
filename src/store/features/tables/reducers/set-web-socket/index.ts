import { Lists } from 'types'

const SetWebSocketReducer = (state: Lists, action: { payload: { id: string, ws: any } }) => {
  state.orderbooks![action.payload.id].wsInstance = action.payload.ws
}

export default SetWebSocketReducer
