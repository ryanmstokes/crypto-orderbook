import { Lists } from 'types'

const SetTableHeadersReducer = (state: Lists, action: { payload: { [name: string]: string } }) => {
  state.headers = action.payload
}

export default SetTableHeadersReducer
