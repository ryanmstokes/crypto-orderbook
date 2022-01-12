import { Lists } from 'types'

const SetWSConfigReducer = (state: Lists, action: { payload: any }) => {
  state = { ...state, ...action.payload }
}

export default SetWSConfigReducer
