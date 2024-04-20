import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'
import cartReducer from './feature/cartSlice'
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    cart : cartReducer

    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch