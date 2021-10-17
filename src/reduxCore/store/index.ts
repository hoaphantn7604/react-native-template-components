import { createStore, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { createEpicMiddleware } from 'redux-observable';
import AsyncStorage from '@react-native-async-storage/async-storage';

import logger from 'redux-logger';
import { rootEpic } from 'reduxCore/store/rootEpics';
import { rootReducer } from 'reduxCore/store/rootReducers';

const persistConfig = {
  key: 'root',
  version: 0,
  storage: AsyncStorage,
  blacklist: [],
  whitelist: ['Root'],
  stateReconciler: autoMergeLevel2,
};

const finalReducer = persistReducer(persistConfig, rootReducer);

const epicMiddleware = createEpicMiddleware();

export const store = createStore(
  finalReducer,
  applyMiddleware(logger, epicMiddleware),
);

epicMiddleware.run(rootEpic);

export const persistor = persistStore(store);
