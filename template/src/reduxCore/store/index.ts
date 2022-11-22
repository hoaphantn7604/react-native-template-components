import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';

import logger from 'redux-logger';
import { RootReducer, rootReducer } from '@reduxCore/store/rootReducers';
import rootSaga from './rootSagas';

const persistConfig = {
  key: 'root',
  version: 0,
  storage: AsyncStorage,
  blacklist: [],
  whitelist: ['main'],
  stateReconciler: autoMergeLevel2,
};

const finalReducer = persistReducer<RootReducer>(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: finalReducer,
  middleware: [sagaMiddleware, logger],
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
