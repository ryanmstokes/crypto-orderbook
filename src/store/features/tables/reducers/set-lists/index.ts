import { Lists, List } from 'types'

const SetListsReducer = (state: Lists, action: { payload: { [name: string]: List } }) => {
  state = { ...state, ...action.payload }
}

export default SetListsReducer
