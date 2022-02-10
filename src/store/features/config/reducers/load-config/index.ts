import { Config } from 'types'

const LoadConfigReducer = (state: Config, action: { payload: Config }) => {
  const { payload } = action
  state.title = payload.title
  state.description = payload.description
  state.tables = payload.tables
}

export default LoadConfigReducer
