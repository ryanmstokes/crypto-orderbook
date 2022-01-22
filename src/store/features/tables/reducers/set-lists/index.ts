import { Lists, List } from 'types'

const SetListsReducer = (state: Lists, action: { payload: { [name: string]: List } }) => {
  state.lists = { ...state.lists, ...action.payload }
}

export default SetListsReducer
