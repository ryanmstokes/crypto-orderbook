import { Lists } from 'types'

const SetListsReducer = (state: Lists, action: { payload: any }) => {
  state = { ...state, ...action.payload }
}

export default SetListsReducer
