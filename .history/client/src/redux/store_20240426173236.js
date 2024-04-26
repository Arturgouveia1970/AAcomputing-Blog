import { configureStore, combineReducers } from '@reduxjs/toolkit'
import useReducer from './user/userSlice'

const rootReducer = combineReducers({
  user: useReducer,
});

const persistReducer

export const store = configureStore({
  reducer: {
    user: useReducer,
  },
})