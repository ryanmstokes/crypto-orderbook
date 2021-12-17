import { createSlice } from '@reduxjs/toolkit'
import initialState from 'store/features/config/initial-state'
import { ConfigStatePayload } from 'types'

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    loadConfig: (state, action: ConfigStatePayload) => {
      return action.payload
    },
  },
})

export const { loadConfig } = configSlice.actions

export default configSlice.reducer
