import { all } from 'redux-saga/effects';
import { helloSaga } from './authSaga';

export default function* rootSaga() {
  yield all([helloSaga()]);
}
