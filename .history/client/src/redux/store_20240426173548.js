import { configureStore, combineReducers } from '@reduxjs/toolkit'
import useReducer from './user/userSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const rootReducer = combineReducers({
  user: useReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const persistReducer 0

export const store = configureStore({
  reducer: {
    user: useReducer,
  },
})