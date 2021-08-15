import { all } from 'redux-saga/effects';
import { watchRegistrationSaga } from './authSaga';

export default function* rootSaga() {
  yield all([watchRegistrationSaga()]);
}
