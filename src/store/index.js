import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './menuSlice'
import { API } from '../asyncActions'
import { setupListeners } from '@reduxjs/toolkit/query'


export const store = configureStore({
  reducer: {
    [API.reducerPath]: API.reducer,
    menu: menuReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(API.middleware),
})

setupListeners(store.dispatch)