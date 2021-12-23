import { createSlice } from '@reduxjs/toolkit'
import tables from 'store/features/tables/initial-state'
import { ListsPayload, Values } from 'types'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import TypedKeys from 'utils/typed-keys'

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
          let cumulativeTotal = 0
          let decoratedObjectArray: Values[] = []
          action.payload[key2].forEach((item) => {
            cumulativeTotal += item[1]
            decoratedObjectArray.push({ price: item[0], amount: item[1], total: cumulativeTotal })
          })
          state.lists[key].prices[key2].values = decoratedObjectArray
        })
      })
      /** Set the current table to show to the name of the first table  */
      const initialTable: string = Object.keys(state.lists)[0]
      state.current = initialTable
      let headerArray: { [name: string]: string } = {}
      Object.keys(state.lists[Object.keys(state.lists)[0]].prices['bids'].values[0]).forEach((key, index) => {
        headerArray["title" + index] = key
      })
      state.headers = headerArray
    },
  },
})


export * from 'store/features/tables/hooks'

export const useTableHeaders = () => {
  const headers: string[] = useSelector((state: RootState) => TypedKeys(state.lists.headers).map((key) => state.lists.headers[key]))
  return headers
}

export const { loadTables } = tablesSlice.actions

export default tablesSlice.reducer
