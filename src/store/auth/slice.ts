import { createSlice } from '@reduxjs/toolkit';

const initialState: any = [];

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    signIn(state) {},
    signOut(state) {},
  },
});

const actions = { ...authSlice.actions };
const reducer = authSlice.reducer;

export { actions, reducer };
