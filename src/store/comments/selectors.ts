import { createSelector } from 'reselect';
import { RootState } from '../store';

export const getComments = (state: RootState) => state.comments;

export const getCommentsByPrayerId = (prayerId: number) =>
  createSelector(getComments, state =>
    state.data.filter(item => item.prayerId === prayerId),
  );
