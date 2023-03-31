import todoSaga from '@/features/notes/redux/saga';
import authSaga from '@/features/auth/redux/saga';
import { all, fork } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([fork(todoSaga), fork(authSaga)]);
}
