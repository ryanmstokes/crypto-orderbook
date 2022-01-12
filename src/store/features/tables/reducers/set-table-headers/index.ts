import { Lists } from 'types'

const SetTableHeadersReducer = (state: Lists, action: { payload: any }) => {
  state.headers = action.payload
}

export default SetTableHeadersReducer

