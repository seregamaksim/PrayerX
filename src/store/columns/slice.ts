import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IColumn } from '../../types';

const initialState: IColumn[] = [];

const columnsSlice = createSlice({
  initialState,
  name: 'columns',
  reducers: {
    setColumns(state, { payload }: PayloadAction<IColumn[]>) {
      return payload;
    },
    getColumns() {},
    addColumn(state, { payload }: PayloadAction<IColumn>) {
      state.push(payload);
    },
    addColumnRequest() {},
  },
});

const actions = { ...columnsSlice.actions };

const reducer = columnsSlice.reducer;

export { actions, reducer };
