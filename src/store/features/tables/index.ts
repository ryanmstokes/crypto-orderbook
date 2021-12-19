import { createSlice } from '@reduxjs/toolkit'
import config from 'store/features/config/initial-state'
import { ConfigPayload } from 'types'

export const configSlice = createSlice({
  name: 'tables',
  initialState: config,
  reducers: {
    loadTables: (state, action: ConfigPayload) => {
      return action.payload
    },
  },
})

export const { loadTables } = configSlice.actions

export default configSlice.reducer
