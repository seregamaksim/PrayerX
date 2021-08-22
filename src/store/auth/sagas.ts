import { put, takeLatest } from 'redux-saga/effects';
import { http } from '../../services/http';
import {
  IAuth,
  ILoginResponse,
  IRegistrationResponse,
  IRegistrationVal,
} from './types';
import { actions } from '../ducks';

export interface ILoginAction {
  type: typeof actions.auth.signIn.type;
  values: IAuth;
}
export interface IRegistrationAction {
  type: typeof actions.auth.signUp.type;
  values: IRegistrationVal;
}
export function* registrationSaga({ values }: IRegistrationAction) {
  try {
    const request: { data: IRegistrationResponse } = yield http.post(
      '/auth/sign-up/',
      values,
    );

    yield put(actions.auth.signUpSuccess(request.data));
  } catch (e) {
    yield put(actions.auth.signUpFailed);
  }
}
export function* loginSaga({ values }: ILoginAction) {
  try {
    const request: { data: ILoginResponse } = yield http.post(
      '/auth/sign-in/',
      values,
    );
    yield put(actions.auth.signInSuccess(request.data));
  } catch (e) {
    yield put(actions.auth.signInFailed);
  }
}
export function* watchRegistrationSaga() {
  yield takeLatest(actions.auth.signUp.type, registrationSaga);
}
export function* watchLoginSaga() {
  yield takeLatest(actions.auth.signIn.type, loginSaga);
}
