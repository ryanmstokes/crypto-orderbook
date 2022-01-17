import { createSlice } from '@reduxjs/toolkit'
import config from 'store/features/config/initial-state'

import LoadConfigReducer from 'store/features/config/reducers/load-config'

export const configSlice = createSlice({
  name: 'config',
  initialState: config,
  reducers: {
    InitApp(state, action) { },
    LoadConfig: LoadConfigReducer,
  },
})

export * from 'store/features/config/hooks'

export const { InitApp, LoadConfig } = configSlice.actions

export default configSlice.reducer
