import { changeLanguage } from 'shared/language';
import { ChangeLanguage } from './action';

export interface RootState {
  locale: string;
}

const INITIAL_STATE: RootState = {
  locale: 'en',
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ChangeLanguage.type:
      changeLanguage(action.payload);
      return { ...state, locale: action.payload };
    default:
      return state;
  }
};
