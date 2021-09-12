import { put, takeLatest } from 'redux-saga/effects';
import { http } from '../../services/http';

import { actions } from '../ducks';
import { IColumn, IPostColumn, IUpdateColumn } from './types';

export interface IPostColumnAction {
  type: typeof actions.columns.addColumn.type;
  values: IPostColumn;
}
export interface IDeleteColumnAction {
  type: typeof actions.columns.deleteColumn.type;
  columnId: number;
}
export interface IUpdateColumnAction {
  type: typeof actions.columns.updateColumn.type;
  data: IUpdateColumn;
}
export function* fetchColumns() {
  try {
    const request: { data: IColumn[] } = yield http.get('/columns/');
    yield put(actions.columns.getColumnsSuccess(request.data));
  } catch (e) {
    yield put(actions.columns.getColumnsFailed());
    console.log('error', e);
  }
}
export function* postColumn({ values }: IPostColumnAction) {
  try {
    const request: { data: IColumn } = yield http.post('/columns/', values);
    yield put(actions.columns.addColumnSuccess(request.data));
  } catch (e) {
    yield put(actions.columns.addColumnFailed());
    console.log('error', e);
  }
}
export function* deleteColumn({ columnId }: IDeleteColumnAction) {
  try {
    yield http.delete(`/columns/${columnId}`);
    yield put(actions.columns.deleteColumnSuccess(columnId));
  } catch (e) {
    yield put(actions.columns.deleteColumnFailed());
  }
}
export function* updateColumn({ data }: IUpdateColumnAction) {
  try {
    const required: { data: IColumn } = yield http.put(
      `/columns/${data.columnId}`,
      data.values,
    );
    console.log('required', required.data);

    yield put(actions.columns.updateColumnSuccess(required.data));
  } catch (e) {
    yield put(actions.columns.updateColumnFailed());
  }
}
export function* watchFetchColumns() {
  yield takeLatest(actions.columns.getColumns.type, fetchColumns);
}

export function* watchPostColumn() {
  yield takeLatest(actions.columns.addColumn.type, postColumn);
}

export function* watchDeleteColumn() {
  yield takeLatest(actions.columns.deleteColumn.type, deleteColumn);
}

export function* watchUpdateColumn() {
  yield takeLatest(actions.columns.updateColumn.type, updateColumn);
}
