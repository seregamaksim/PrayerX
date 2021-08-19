import { put, takeLatest } from 'redux-saga/effects';
import { http } from '../../services/http';
import { IColumn, IPostColumn } from '../../types';

import { actions } from '../ducks';

export interface IPostColumnAction {
  type: typeof actions.columns.addColumnRequest.type;
  values: IPostColumn;
}

export function* fetchColumns() {
  try {
    const request: { data: IColumn[] } = yield http.get('/columns/');
    yield put(actions.columns.setColumns(request.data));
  } catch (e) {
    console.log('error', e);
  }
}
export function* postColumn({ values }: IPostColumnAction) {
  try {
    const request: { data: IColumn } = yield http.post('/columns/', values);
    yield put(actions.columns.addColumn(request.data));
  } catch (e) {
    console.log('error', e);
  }
}

export function* watchFetchColumns() {
  yield takeLatest(actions.columns.getColumns.type, fetchColumns);
}

export function* watchPostColumn() {
  yield takeLatest(actions.columns.addColumnRequest.type, postColumn);
}
