import { configureStore, combineReducers } from '@reduxjs/toolkit'
import useReducer from './user/userSlice'

const root

export const store = configureStore({
  reducer: {
    user: useReducer,
  },
})