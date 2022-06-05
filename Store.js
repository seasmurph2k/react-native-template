import {configureStore} from '@reduxjs/toolkit';
import AppReducer from './src/Reducers/AppReducer';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const reducers = combineReducers({app: AppReducer});
const persistedReducer = persistReducer(persistConfig, reducers);

export const Store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    if (__DEV__) {
      const createDebugger = require('redux-flipper').default;
      return getDefaultMiddleware({
        serializableCheck: {
          ignoreActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
        },
      }).concat(createDebugger());
    } else {
      return getDefaultMiddleware({
        serializableCheck: {
          ignoreActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
        },
      });
    }
  },
  devTools: process.env.NODE_ENV !== 'production',
});
export const persistor = persistStore(Store);
