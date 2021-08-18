import { RootState } from '../store';
import { createSelector } from 'reselect';

export const selectColumns = (state: RootState) => state.columns;
