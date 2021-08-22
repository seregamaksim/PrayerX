import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthSlice, ILoginResponse, IRegistrationResponse } from './types';

const initialState: IAuthSlice = {
  token: '',
  name: '',
  email: '',
  fetchStatus: 'idle',
};

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    signIn(state) {
      state.fetchStatus = 'pending';
    },
    signInSuccess(state, { payload }: PayloadAction<ILoginResponse>) {
      state.token = payload.token;
      state.name = payload.name;
      state.email = payload.email;
    },
    signInFailed(state) {
      state.fetchStatus = 'rejected';
    },
    signOut(state) {
      state.token = '';
      state.name = '';
      state.email = '';
    },
    signUp(state) {
      state.fetchStatus = 'pending';
    },
    signUpSuccess(state, { payload }: PayloadAction<IRegistrationResponse>) {
      state.token = payload.token;
      state.name = payload.name;
      state.email = payload.email;
      state.fetchStatus = 'fulfilled';
    },
    signUpFailed(state) {
      state.fetchStatus = 'rejected';
    },
  },
});

const actions = { ...authSlice.actions };
const reducer = authSlice.reducer;

export { actions, reducer };
