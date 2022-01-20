import { createSlice } from '@reduxjs/toolkit'
import config from 'store/features/config/initial-state'

import LoadConfigReducer from 'store/features/config/reducers/load-config'
import SetMobileReducer from 'store/features/config/reducers/set-mobile'

export const configSlice = createSlice({
  name: 'config',
  initialState: config,
  reducers: {
    InitApp(state, action) { },
    LoadConfig: LoadConfigReducer,
    SetMobile: SetMobileReducer
  },
})

export * from 'store/features/config/hooks'

export const { InitApp, LoadConfig, SetMobile } = configSlice.actions

export default configSlice.reducer
