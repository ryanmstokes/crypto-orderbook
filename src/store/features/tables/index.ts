import { createSlice } from '@reduxjs/toolkit'
import tables from 'store/features/tables/initial-state'
import { ListsPayload, Values } from 'types'

export const tablesSlice = createSlice({
  name: 'tables',
  initialState: tables,
  reducers: {
    loadTables: (state, action: ListsPayload) => {
      /** Convert number[][] to {price:number, amount: number}[]
       * and save to store.
       */
      Object.keys(state.lists).forEach((key) => {
        Object.keys(action.payload).forEach((key2) => {
          let decoratedObjectArray: Values[] = []
          action.payload[key2].forEach((item) => {
            decoratedObjectArray.push({ price: item[0], amount: item[1] })
          })
          state.lists[key].prices[key2].values = decoratedObjectArray
        })
      })
      /** Set the current table to show to the name of the first table  */
      const initialTable: string = Object.keys(state.lists)[0]
      state.current = initialTable
    },
  },
})

export const { loadTables } = tablesSlice.actions

export default tablesSlice.reducer
