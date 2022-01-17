import { Lists } from 'types'

const CloseWebSocketReducer = (state: Lists, action: { payload: string }) => {
  state.orderbooks![action.payload].wsInstance.close()
}

export default CloseWebSocketReducer
