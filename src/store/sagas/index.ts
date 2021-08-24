import { all } from 'redux-saga/effects';
import { watchRegistrationSaga, watchLoginSaga } from '../auth/sagas';
import {
  watchFetchColumns,
  watchPostColumn,
  watchDeleteColumn,
  watchUpdateColumn,
} from '../columns/sagas';
import { watchFetchPrayers } from '../prayers/sagas';

export default function* rootSaga() {
  yield all([
    watchRegistrationSaga(),
    watchLoginSaga(),
    watchFetchColumns(),
    watchPostColumn(),
    watchDeleteColumn(),
    watchUpdateColumn(),
    watchFetchPrayers(),
  ]);
}
