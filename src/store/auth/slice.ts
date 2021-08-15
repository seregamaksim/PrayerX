import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IauthSlice {
  token: string;
  name: string;
  email: string;
}

const initialState: any = {
  token: '',
  name: '',
  email: '',
};

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    signIn(state, { payload }: PayloadAction<IauthSlice>) {
      state.token = payload.token;
      state.name = payload.name;
      state.email = payload.email;
    },
    signOut(state) {
      state.token = '';
      state.name = '';
      state.email = '';
    },
    signUp(state, { payload }: PayloadAction<any>) {
      state.token = payload.token;
      state.name = payload.name;
      state.email = payload.email;
    },
    signUpRequest() {},
  },
});

const actions = { ...authSlice.actions };
const reducer = authSlice.reducer;

export { actions, reducer };
