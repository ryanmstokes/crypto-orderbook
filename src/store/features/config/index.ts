import { createSlice } from '@reduxjs/toolkit'
import initialState from 'store/features/config/initial-state'

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    loadConfig: (state, payload) => {
      return { ...state, ...payload }
    },
  },
})

// Action creators are generated for each case reducer function
export const { loadConfig } = configSlice.actions

export default configSlice.reducer
