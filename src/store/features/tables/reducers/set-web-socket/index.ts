import { Lists } from 'types'

const SetWebSocketReducer = (state: Lists, action: { payload: { id: string, ws: WebSocket } }) => {
  // eslint-disable-next-line no-console
  console.log(action.payload.ws)
  state.orderbooks![action.payload.id].wsInstance = action.payload.ws
}

export default SetWebSocketReducer
