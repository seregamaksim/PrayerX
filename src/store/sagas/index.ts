import { all } from 'redux-saga/effects';
import { watchRegistrationSaga, watchLoginSaga } from './authSaga';
import { watchFetchColumns, watchPostColumn } from './columnsSaga';

export default function* rootSaga() {
  yield all([
    watchRegistrationSaga(),
    watchLoginSaga(),
    watchFetchColumns(),
    watchPostColumn(),
  ]);
}
