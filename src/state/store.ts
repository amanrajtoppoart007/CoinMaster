import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';

import authReducer from '@state/reducers/auth.slice';
import userReducer from '@state/reducers/user.slice';
import configReducer from '@state/reducers/config.slice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'user', 'config'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  config: configReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export type RootStateProps = ReturnType<typeof rootReducer>;

export const persistor = persistStore(store);
