import { createSlice } from '@reduxjs/toolkit'
import config from 'store/features/config/initial-state'
import { ConfigPayload } from 'types'
import { useSelector } from 'react-redux'
import { RootState } from 'store'

export const configSlice = createSlice({
  name: 'config',
  initialState: config,
  reducers: {
    loadConfig: (state, action: ConfigPayload) => {
      return action.payload
    },
  },
})

export * from 'store/features/config/hooks'

export const { loadConfig } = configSlice.actions

export default configSlice.reducer
