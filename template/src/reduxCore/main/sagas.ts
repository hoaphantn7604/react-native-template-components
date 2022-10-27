import axios from 'axios';
import { put, takeLatest, call } from 'typed-redux-saga';
import { todoRequestAction, todoSuccessRequestAction } from './slice';

const fetchTodoSaga = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts');
};

function* todoRequestSaga() {
  const response = yield* call(fetchTodoSaga);
  const { data } = response;

  yield put(todoSuccessRequestAction(data));
}

export function* mainSaga() {
  yield takeLatest(todoRequestAction, todoRequestSaga);
}
