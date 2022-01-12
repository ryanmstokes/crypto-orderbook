import { createSlice } from '@reduxjs/toolkit'
import tables from 'store/features/tables/initial-state'

import SetListsReducer from 'store/features/tables/reducers/set-lists'
import SetTableHeadersReducer from 'store/features/tables/reducers/set-table-headers'
import SetWSConfigReducer from 'store/features/tables/reducers/set-ws-config'
import SetTablesReducer from 'store/features/tables/reducers/set-tables'
import SetIncReducer from 'store/features/tables/reducers/set-inc'
import SetLoadedReducer from 'store/features/tables/reducers/set-loaded'
import SetTickerSizeReducer from 'store/features/tables/reducers/set-ticker-size'
import SetCompiledReducer from 'store/features/tables/reducers/set-compiled'
import SetOrderBooksReducer from 'store//features/tables/reducers/set-order-books'
import SetCurrentProductReducer from 'store//features/tables/reducers/set-current-product'
import SetWebSocketReducer from 'store/features/tables/reducers/set-web-socket'
import CloseWebSocketReducer from 'store/features/tables/reducers/close-web-socket'

export const tablesSlice = createSlice({
  name: 'tables',
  initialState: tables,
  reducers: {
    SetLists: SetListsReducer,
    SetTableHeaders: SetTableHeadersReducer,
    SetWSConfig: SetWSConfigReducer,
    SetTables: SetTablesReducer,
    SetInc: SetIncReducer,
    SetLoaded: SetLoadedReducer,
    SetTickerSize: SetTickerSizeReducer,
    SetCompiled: SetCompiledReducer,
    SetOrderBooks: SetOrderBooksReducer,
    SetCurrentProduct: SetCurrentProductReducer,
    SetWebSocket: SetWebSocketReducer,
    CloseWebSocket: CloseWebSocketReducer,
  },
})

export * from 'store/features/tables/hooks'

export const {
  SetTables,
  SetTickerSize,
  SetCompiled,
  SetLists,
  SetTableHeaders,
  SetWSConfig,
  SetLoaded,
  SetOrderBooks,
  SetCurrentProduct,
  SetInc,
  SetWebSocket,
  CloseWebSocket
} = tablesSlice.actions

export default tablesSlice.reducer
