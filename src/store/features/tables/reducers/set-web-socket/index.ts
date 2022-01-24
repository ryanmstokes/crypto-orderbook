import { Lists } from 'types'

const SetWebSocketReducer = (state: Lists, action: { payload: { id: string, ws: WebSocket } }) => {
  state.orderbooks![action.payload.id].wsInstance = action.payload.ws
}

export default SetWebSocketReducer
