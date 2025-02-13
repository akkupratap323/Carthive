import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import itemSlice from './itemsSlice';
import fetchStatusSlice from './fetchStatusSlice';
import bagSlice from './bagSlice';
import LoginSlice from './LoginSlice';
import ProfileSlice from './profileSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  items: itemSlice.reducer,
  fetchStatus: fetchStatusSlice.reducer,
  bag: bagSlice.reducer,
  LoginStatus: LoginSlice.reducer,
  ProfileStatus: ProfileSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
