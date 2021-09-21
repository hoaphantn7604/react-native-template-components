const BASE_URL = 'http:127.0.0.1:8012';
const APP_NAME = 'My Theme';
const URL_IMAGE = 'http:127.0.0.1:8012/assets';

export type COLOR = {
  PRIMARY: string;
  SECONDARY: string;
  BUTTON: string;
  BUTTON_TEXT: string;
  TEXT: string;
  BACKGROUND: string;
  HEADER_BG: string;
};

const COLORS: COLOR = {
  PRIMARY: '#FF3030',
  SECONDARY: '#F4A460',
  BUTTON: 'black',
  BUTTON_TEXT: 'gray',
  TEXT: 'black',
  BACKGROUND: '#E8E8E8',
  HEADER_BG: 'black',
};

export { APP_NAME, BASE_URL, URL_IMAGE, COLORS };
