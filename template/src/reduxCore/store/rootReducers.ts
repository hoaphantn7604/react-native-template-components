import { combineReducers } from 'redux';
import Root from 'reduxCore/root/reducer';

export interface RootState {
  Root: ReturnType<typeof Root>;
}

export const rootReducer = combineReducers({
  Root,
});
