import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as request from '../api/request';
import {
  loginSuccess,
  login,
  refreshTokenSuccess,
  logout,
  logoutSuccess,
  refreshToken
} from './slice';

export function* loginSaga({ payload }: any) {
  try {
    const response: Record<string, string> = yield call(request.login, payload);
    yield put(loginSuccess(response));
  } catch (e: any) {}
}

export function* refreshTokenSaga({ payload }: any) {
  try {
    const response: Record<string, string> = yield call(
      request.refreshToken,
      payload
    );
    yield put(refreshTokenSuccess(response));
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
    takeLatest(logout.type, logoutSaga),
    takeLatest(refreshToken.type, refreshTokenSaga)
  ]);
}

export default AuthSaga;
