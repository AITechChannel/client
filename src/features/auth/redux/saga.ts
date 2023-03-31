import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as request from '../api/request';
import {
  loginSuccess,
  login,
  refreshTokenSuccess,
  logout,
  logoutSuccess
} from './slice';

export function* loginSaga({ payload }: any) {
  try {
    const response: Record<string, string> = yield call(request.login, payload);
    yield put(loginSuccess(response));
  } catch (e: any) {}
}

export function* logoutSaga({ payload }: any) {
  try {
    const response: Record<string, string> = yield call(
      request.logout,
      payload
    );
    yield put(logoutSuccess(response));
  } catch (e: any) {}
}

function* AuthSaga() {
  yield all([
    takeLatest(login.type, loginSaga),
    takeLatest(logout.type, logoutSaga)
  ]);
}

export default AuthSaga;
