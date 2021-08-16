import { put, takeLatest } from 'redux-saga/effects';
import { http } from '../../../services/http';

import { actions } from '../../ducks';

export function* fetchColumns() {
  try {
    const request: { data?: any } = yield http.get('/columns/');
    yield put(actions.columns.setColumns(request.data));
  } catch (e) {
    console.log('error', e);
  }
}

export function* watchFetchColumns() {
  yield takeLatest(actions.columns.getColumns, fetchColumns);
}
