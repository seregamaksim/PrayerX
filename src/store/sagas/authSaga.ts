import { put, takeLatest } from 'redux-saga/effects';
import { http } from '../../services/http';
import {
  IAuth,
  ILoginResponse,
  IRegistrationResponse,
  IRegistrationVal,
} from '../../types';
import { actions } from '../ducks';

export interface ILoginAction {
  type: typeof actions.auth.signInRequest.type;
  values: IAuth;
}
export interface IRegistrationAction {
  type: typeof actions.auth.signInRequest.type;
  values: IRegistrationVal;
}
export function* registrationSaga({ values }: IRegistrationAction) {
  const request: { data: IRegistrationResponse } = yield http.post(
    '/auth/sign-up/',
    values,
  );
  console.log('request.data', request.data);
  yield put(actions.auth.signUp(request.data));
}
export function* loginSaga({ values }: ILoginAction) {
  const request: { data: ILoginResponse } = yield http.post(
    '/auth/sign-in/',
    values,
  );
  console.log('request.data', request.data);

  yield put(actions.auth.signIn(request.data));
}
export function* watchRegistrationSaga() {
  yield takeLatest(actions.auth.signUpRequest.type, registrationSaga);
}
export function* watchLoginSaga() {
  yield takeLatest(actions.auth.signInRequest.type, loginSaga);
}
