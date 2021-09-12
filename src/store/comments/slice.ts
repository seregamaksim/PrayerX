import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IComment, IInitialState } from './types';

const initialState: IInitialState = {
  data: [],
  fetchStatus: 'idle',
};

const commentsSlice = createSlice({
  initialState,
  name: 'comments',
  reducers: {
    getComments(state) {
      state.fetchStatus = 'pending';
    },
    getCommentsSuccess(state, { payload }: PayloadAction<IComment[]>) {
      console.log('comments', payload);

      state.data = payload;
      state.fetchStatus = 'fulfilled';
    },
    getCommentsFailed(state) {
      state.fetchStatus = 'rejected';
    },
    addComment(state) {
      state.fetchStatus = 'pending';
    },
    addCommentSuccess(state, { payload }: PayloadAction<IComment>) {
      state.data.push(payload);
      console.log('comments', payload);
      state.fetchStatus = 'fulfilled';
    },
    addCommentFailed(state) {
      state.fetchStatus = 'rejected';
    },
    deleteComment(state) {
      state.fetchStatus = 'pending';
    },
    deleteCommentSuccess(state, { payload }: PayloadAction<number>) {
      const index = state.data.findIndex(item => item.id === payload);
      if (index !== -1) state.data.splice(index, 1);
      state.fetchStatus = 'fulfilled';
    },
    deleteCommentFailed(state) {
      state.fetchStatus = 'rejected';
    },
  },
});

const actions = { ...commentsSlice.actions };

const reducer = commentsSlice.reducer;

export { actions, reducer };
