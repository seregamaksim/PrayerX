import { put, takeEvery, call, takeLatest } from 'redux-saga/effects';
import { http } from '../../../services/http';
import { actions } from '../../ducks';

export function* registrationSaga({ values }: any) {
  console.log('action', values);

  const request: { data?: any } = yield http.post('/auth/sign-up/', values);
  yield put(actions.auth.signUp(request.data));
}

export function* watchRegistrationSaga() {
  yield takeLatest(actions.auth.signUpRequest.type, registrationSaga);
}
