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
      state.fetchStatus = 'fulfilled';
    },
    deletePrayerFailed(state) {
      state.fetchStatus = 'rejected';
    },
    updatePrayer(state) {
      state.fetchStatus = 'pending';
    },
    updatePrayerSuccess(state, { payload }: PayloadAction<IPrayer>) {
      const index = state.data.findIndex(item => item.id === payload.id);
      if (index !== -1) {
        state.data[index].title = payload.title;
        state.data[index].description = payload.description;
        state.data[index].checked = payload.checked;
      }
      state.fetchStatus = 'fulfilled';
    },
    updatePrayerRejected(state) {
      state.fetchStatus = 'rejected';
    },
  },
});

const actions = { ...prayersSlice.actions };
const reducer = prayersSlice.reducer;

export { actions, reducer };
