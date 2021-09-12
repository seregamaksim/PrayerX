import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import { http } from '../../services/http';

import { actions } from '../ducks';
import { IPrayer, IAddPrayer, IUpdatePrayer } from './types';

export interface IAddPrayerAction {
  type: typeof actions.prayers.addPrayer.type;
  data: IAddPrayer;
}
export interface IDeletePrayerAction {
  type: typeof actions.prayers.deletePrayer.type;
  prayerId: number;
}
export interface IUpdatePrayerAction {
  type: typeof actions.prayers.updatePrayer.type;
  values: IUpdatePrayer;
}
export function* fetchPrayers() {
  try {
    const request: { data: IPrayer[] } = yield http.get('/prayers/');
    yield put(actions.prayers.getPrayersSuccess(request.data));
  } catch (e) {
    yield put(actions.prayers.getPrayersFailed());
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
    yield put(actions.prayers.addPrayerFailed());
    console.log('error', e);
  }
}
export function* deletePrayer({ prayerId }: IDeletePrayerAction) {
  try {
    yield http.delete(`/prayers/${prayerId}`);
    yield put(actions.prayers.deletePrayerSuccess(prayerId));
  } catch (e: any) {
    yield put(actions.prayers.deletePrayerFailed());
    if (e.statusCode === 500) {
      yield put(actions.prayers.deletePrayerSuccess(prayerId));
    }
    console.log('error', e);
  }
}
export function* updatePrayer({ values }: IUpdatePrayerAction) {
  try {
    const request: { data: IPrayer } = yield http.put(
      `/prayers/${values.id}`,
      values,
    );
    yield put(actions.prayers.updatePrayerSuccess(request.data));
  } catch (e) {
    yield put(actions.prayers.updatePrayerFailed());
    console.log('error', e);
  }
}
export function* watchUpdatePrayer() {
  yield takeEvery(actions.prayers.updatePrayer.type, updatePrayer);
}
export function* watchDeletePrayer() {
  yield takeEvery(actions.prayers.deletePrayer.type, deletePrayer);
}
export function* watchAddPrayer() {
  yield takeEvery(actions.prayers.addPrayer.type, addPrayer);
}

export function* watchFetchPrayers() {
  yield takeEvery(actions.prayers.getPrayers.type, fetchPrayers);
}
