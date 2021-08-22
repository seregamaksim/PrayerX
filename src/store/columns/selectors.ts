import { RootState } from '../store';
import { createSelector } from 'reselect';

export const selectColumns = (state: RootState) => state.columns.data;

export const selectColumnById = (columnId: number) =>
  createSelector(
    selectColumns,
    state => state.filter(item => item.id === columnId)[0],
  );
