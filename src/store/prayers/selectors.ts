import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectPrayers = (state: RootState) => state.prayers.data;

export const selectPrayersByColumnId = (columnId: number) =>
  createSelector(selectPrayers, state =>
    state.filter(item => item.columnId === columnId),
  );

export const seletPrayerById = (prayerId: number) =>
  createSelector(
    selectPrayers,
    state => state.filter(item => item.id === prayerId)[0],
  );
