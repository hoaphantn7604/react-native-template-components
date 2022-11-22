import { combineReducers } from '@reduxjs/toolkit';
import mainSlice from '@reduxCore/main/slice';

export type RootReducer = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  main: mainSlice,
});
