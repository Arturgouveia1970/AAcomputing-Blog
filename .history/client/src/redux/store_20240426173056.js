import { configureStore, combineReducers } from '@reduxjs/toolkit'
import useReducer from './user/userSlice'

const rootReducer = com

export const store = configureStore({
  reducer: {
    user: useReducer,
  },
})