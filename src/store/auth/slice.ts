import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAuthSlice {
  token: string;
  name: string;
  email: string;
}

const initialState: IAuthSlice = {
  token: '',
  name: '',
  email: '',
};

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    signIn(state, { payload }: PayloadAction<IAuthSlice>) {
      state.token = payload.token;
      state.name = payload.name;
      state.email = payload.email;
    },
    signOut(state) {
      state.token = '';
      state.name = '';
      state.email = '';
    },
    signUp(state, { payload }: PayloadAction<IAuthSlice>) {
      state.token = payload.token;
      state.name = payload.name;
      state.email = payload.email;
    },
    signUpRequest() {},
    signInRequest() {},
  },
});

const actions = { ...authSlice.actions };
const reducer = authSlice.reducer;

export { actions, reducer };
