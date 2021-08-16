import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any[] = [];

const columnsSlice = createSlice({
  initialState,
  name: 'columns',
  reducers: {
    setColumns(state, { payload }: PayloadAction<any>) {
      console.log('payload', payload);

      return payload;
    },
    getColumns() {},
  },
});

const actions = { ...columnsSlice.actions };

const reducer = columnsSlice.reducer;

export { actions, reducer };
