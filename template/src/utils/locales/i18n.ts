import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

import vi from './vi.json';
import en from './en.json';

const languageDetector: any = {
  type: 'languageDetector',
  async: true,
  detect: (cb: (locale: string) => void) => cb('en'),
  init: () => {},
  cacheUserLanguage: () => {},
};

export const resources = {
  en: en,
  vi: vi,
} as const;

i18next.use(languageDetector).use(initReactI18next).init({
  returnNull: false,
  resources,
});

export function t(path: string) {
  return i18next.t(path);
}
export function changeLanguage(alias: string) {
  i18next.changeLanguage(alias);
}
export default i18next;
