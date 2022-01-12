import { Config } from 'types'

const LoadConfigReducer = (state: Config, action: any) => {
  state.title = action.payload.title
  state.description = action.payload.description
  state.tables = action.payload.tables
}

export default LoadConfigReducer
