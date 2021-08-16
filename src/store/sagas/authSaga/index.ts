import { put, takeLatest } from 'redux-saga/effects';
import { http } from '../../../services/http';
import { actions } from '../../ducks';

export function* registrationSaga({ values }: any) {
  const request: { data?: any } = yield http.post('/auth/sign-up/', values);
  yield put(actions.auth.signUp(request.data));
}
export function* loginSaga({ values }: any) {
  const request: { data?: any } = yield http.post('/auth/sign-in/', values);
  yield put(actions.auth.signIn(request.data));
}
export function* watchRegistrationSaga() {
  yield takeLatest(actions.auth.signUpRequest.type, registrationSaga);
}
export function* watchLoginSaga() {
  yield takeLatest(actions.auth.signInRequest.type, loginSaga);
}
