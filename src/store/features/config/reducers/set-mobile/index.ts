import { Config } from 'types'

const SetMobileReducer = (state: Config, action: { payload: boolean }) => {
  state.mobile = action.payload
}

export default SetMobileReducer
