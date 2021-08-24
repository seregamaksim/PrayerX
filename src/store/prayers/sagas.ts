import { put, takeLatest } from 'redux-saga/effects';
import { http } from '../../services/http';

import { actions } from '../ducks';
import { IPrayer } from './types';

export function* fetchPrayers() {
  try {
    const request: { data: IPrayer[] } = yield http.get('/prayers/');
    yield put(actions.prayers.getPrayersSuccess(request.data));
  } catch (e) {
    yield put(actions.prayers.getPrayersFailed);
    console.log('error', e);
  }
}
export function* watchFetchPrayers() {
  yield takeLatest(actions.prayers.getPrayers.type, fetchPrayers);
}
