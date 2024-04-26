import { configureStore, combineReducers } from '@reduxjs/toolkit'
import useReducer from './user/userSlice'

const rootReducer = c

export const store = configureStore({
  reducer: {
    user: useReducer,
  },
})