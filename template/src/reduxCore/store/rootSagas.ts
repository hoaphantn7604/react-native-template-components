import { all } from 'redux-saga/effects';
import { mainSaga } from '../main/sagas';

export default function* rootSaga() {
  yield all([mainSaga()]);
}
