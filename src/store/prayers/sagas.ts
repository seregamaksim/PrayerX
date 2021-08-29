import { put, takeLatest } from 'redux-saga/effects';
import { http } from '../../services/http';

import { actions } from '../ducks';
import { IPrayer, IAddPrayer } from './types';

export interface IAddPrayerAction {
  type: typeof actions.prayers.addPrayer.type;
  data: IAddPrayer;
}
export interface IDeletePrayerAction {
  type: typeof actions.prayers.deletePrayer.type;
  prayerId: number;
}
export function* fetchPrayers() {
  try {
    const request: { data: IPrayer[] } = yield http.get('/prayers/');
    yield put(actions.prayers.getPrayersSuccess(request.data));
  } catch (e) {
    yield put(actions.prayers.getPrayersFailed);
    console.log('error', e);
  }
}
export function* addPrayer({ data }: IAddPrayerAction) {
  console.log('data', data);

  try {
    const request: { data: IPrayer } = yield http.post(
      `/columns/${data.columnId}/prayers`,
      data.values,
    );
    yield put(actions.prayers.addPrayerSuccess(request.data));
  } catch (e) {
    yield put(actions.prayers.addPrayerFailed);
    console.log('error', e);
  }
}
export function* deletePrayer({ prayerId }: IDeletePrayerAction) {
  try {
    yield http.delete(`/prayers/${prayerId}`);
    yield put(actions.prayers.deletePrayerSuccess(prayerId));
  } catch (e) {
    yield put(actions.prayers.deletePrayerFailed);
    console.log('error', e);
  }
}
export function* watchDeletePrayer() {
  yield takeLatest(actions.prayers.deletePrayer.type, deletePrayer);
}
export function* watchAddPrayer() {
  yield takeLatest(actions.prayers.addPrayer.type, addPrayer);
}

export function* watchFetchPrayers() {
  yield takeLatest(actions.prayers.getPrayers.type, fetchPrayers);
}
