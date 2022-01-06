import { createSlice } from '@reduxjs/toolkit'
import tables from 'store/features/tables/initial-state'
import { Values } from 'types'
import TypedKeys from 'utils/typed-keys'
import TickeredList from 'utils/tickered-list'

//import ListManager from 'utils/tables/list-manager'
const deepClone = (object: any) => JSON.parse(JSON.stringify(object))

export const tablesSlice = createSlice({
  name: 'tables',
  initialState: tables,
  reducers: {
    //* Refactor into its own component, and split state changes into different reducers when creating rredux saga */
    loadTables: (state) => {
      const initialTable: string = Object.keys(state.lists)[0]
      state.current = initialTable
      const current = state.current
      /** Set the current table to show to the name of the first table  */

      const payloadLists = deepClone(state.lists[current].compiled)

      //* Rename this */
      let orders: any = {}
      TypedKeys(payloadLists).forEach((key: any) => {
        const tickeredList: any = state.lists[current].compiled![key].values
        //* Refactor into function */
        let cumulativeTotal = 0
        let decoratedObjectArray: Values[] = []
        tickeredList!.forEach((item: number[]) => {
          cumulativeTotal += item[1]
          decoratedObjectArray.push({ price: item[0], amount: item[1], total: cumulativeTotal })
        })
        orders[key] = { title: key, sortBy: payloadLists![key].sortBy, values: decoratedObjectArray }

        //** Set up table headers */
        let headerArray: { [name: string]: string } = {}
        Object.keys(state.lists[Object.keys(state.lists)[0]].prices[key].values[0]).forEach((key, index) => {
          headerArray["title" + index] = key
        })
        state.headers = headerArray

      })
      /** Set the orders to be displayed */
      state.lists[current].sorted = orders

    },
    //* Refactor into its own component */
    setTickerSize: (state, action: { payload: number }) => {
      const current = state.current
      state.lists[current].ticker = action.payload
    },
    //* Refactor into its own component */
    setCompiled: (state, action: {
      payload: any
    }) => {
      const current = state.current
      const asks = deepClone(TickeredList(action.payload.asks.values, "DESC", state.lists[current].ticker))
      const bids = deepClone(TickeredList(action.payload.bids.values, "ASC", state.lists[current].ticker))

      state.lists[current].compiled = {
        asks: {
          title: 'Asks',
          sortBy: 'DESC',
          values: asks
        },
        bids:
        {
          title: 'Bids',
          sortBy: 'ASC',
          values: bids
        }
      }
    }
  },
})

export * from 'store/features/tables/hooks'

export const { loadTables, setTickerSize, setCompiled } = tablesSlice.actions

export default tablesSlice.reducer
