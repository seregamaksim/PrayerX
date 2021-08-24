import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState, IPrayer } from './types';

const initialState: InitialState = {
  data: [],
  fetchStatus: 'idle',
};

const prayersSlice = createSlice({
  initialState,
  name: 'prayers',
  reducers: {
    getPrayers(state) {
      state.fetchStatus = 'pending';
    },
    getPrayersSuccess(state, { payload }: PayloadAction<IPrayer[]>) {
      state.data = payload;
      state.fetchStatus = 'fulfilled';
    },
    getPrayersFailed(state) {
      state.fetchStatus = 'rejected';
    },
  },
});

const actions = { ...prayersSlice.actions };
const reducer = prayersSlice.reducer;

export { actions, reducer };
