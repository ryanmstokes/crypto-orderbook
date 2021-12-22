import { configureStore } from '@reduxjs/toolkit'
import configReducer from 'store/features/config'
import tablesSlice from 'store/features/tables'
export const store = configureStore({
  reducer: {
    config: configReducer,
    lists: tablesSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch