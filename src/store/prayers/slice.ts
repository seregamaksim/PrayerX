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
    addPrayer(state) {
      state.fetchStatus = 'pending';
    },
    addPrayerSuccess(state, { payload }: PayloadAction<IPrayer>) {
      console.log('add prayer', payload);

      state.data.push(payload);
      state.fetchStatus = 'fulfilled';
    },
    addPrayerFailed(state) {
      state.fetchStatus = 'rejected';
    },
    deletePrayer(state) {
      state.fetchStatus = 'pending';
    },
    deletePrayerSuccess(state, { payload }: PayloadAction<number>) {
      const index = state.data.findIndex(item => item.id === payload);
      if (index !== -1) state.data.splice(index, 1);
      console.log('delete prayer', state.data);

      state.fetchStatus = 'fulfilled';
    },
    deletePrayerFailed(state) {
      state.fetchStatus = 'rejected';
    },
  },
});

const actions = { ...prayersSlice.actions };
const reducer = prayersSlice.reducer;

export { actions, reducer };
