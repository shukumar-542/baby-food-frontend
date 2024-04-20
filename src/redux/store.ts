import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'
import cartReducer from './feature/cartSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'


const persistConfig = {
  key: 'cart',
  storage,
}


// const persistedCartReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer:  {
    [baseApi.reducerPath]: baseApi.reducer,
    cart: cartReducer


  } ,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
