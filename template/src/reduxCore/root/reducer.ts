import { PlainAction } from 'redux-typed-actions';
import { changeLanguage } from 'shared/language';
import { ChangeLanguage } from './action';

export interface RootSate {
  locale: string;
}

const INITIAL_STATE: RootSate = {
  locale: 'en',
};

export default (state = INITIAL_STATE, action: PlainAction) => {
  switch (action.type) {
    case ChangeLanguage.type:
      changeLanguage(action.payload);
      return { ...state, locale: action.payload };
    default:
      return state;
  }
};
