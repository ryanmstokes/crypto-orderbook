import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import watcherSaga from 'store/features/config/saga/'

import configReducer from 'store/features/config'
import tablesReducer from 'store/features/tables'

const sagaMiddleWare = createSagaMiddleware()
export const store = configureStore({
  reducer: {
    config: configReducer,
    lists: tablesReducer,
  },
  middleware: [sagaMiddleWare],
})
sagaMiddleWare.run(watcherSaga)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
