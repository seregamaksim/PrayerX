import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IColumn, InitialState } from './types';

const initialState: InitialState = {
  data: [],
  fetchStatus: 'idle',
};

const columnsSlice = createSlice({
  initialState,
  name: 'columns',
  reducers: {
    getColumns(state) {
      state.fetchStatus = 'pending';
    },
    getColumnsSuccess(state, { payload }: PayloadAction<IColumn[]>) {
      state.data = payload;
      state.fetchStatus = 'fulfilled';
    },
    getColumnsFailed(state) {
      state.fetchStatus = 'rejected';
    },
    addColumn(state) {
      state.fetchStatus = 'pending';
    },
    addColumnSuccess(state, { payload }: PayloadAction<IColumn>) {
      state.data.push(payload);
      state.fetchStatus = 'fulfilled';
    },
    addColumnFailed(state) {
      state.fetchStatus = 'rejected';
    },
    deleteColumn(state) {
      state.fetchStatus = 'pending';
    },
    deleteColumnSuccess(state, { payload }: PayloadAction<number>) {
      const index = state.data.findIndex(item => item.id === payload);
      if (index !== -1) state.data.splice(index, 1);
      state.fetchStatus = 'fulfilled';
    },
    deleteColumnFailed(state) {
      state.fetchStatus = 'rejected';
    },
    updateColumn(state) {
      state.fetchStatus = 'pending';
    },
    updateColumnSuccess(state, { payload }: PayloadAction<IColumn>) {
      console.log('pay', payload);

      const index = state.data.findIndex(item => item.id === payload.id);
      if (index !== -1) {
        state.data[index].title = payload.title;
        state.data[index].description = payload.description;
      }
      state.fetchStatus = 'fulfilled';
    },
    updateColumnFailed(state) {
      state.fetchStatus = 'rejected';
    },
  },
});

const actions = { ...columnsSlice.actions };

const reducer = columnsSlice.reducer;

export { actions, reducer };
