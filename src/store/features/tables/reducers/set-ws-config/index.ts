import { Lists } from 'types'

const SetWSConfigReducer = (state: Lists, action: { payload: { [name: string]: string } }) => {
  state = { ...state, ...action.payload }
}

export default SetWSConfigReducer
