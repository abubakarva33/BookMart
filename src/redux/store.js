import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/UserSlice'
import { api } from './api'

export const store = configureStore({
  reducer: {
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
})