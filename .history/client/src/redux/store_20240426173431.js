import { configureStore, combineReducers } from '@reduxjs/toolkit'
import useReducer from './user/userSlice'


const rootReducer = combineReducers({
  user: useReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
}

export const store = configureStore({
  reducer: {
    user: useReducer,
  },
})