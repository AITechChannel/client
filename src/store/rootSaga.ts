import todoSaga from '@/features/my-note/redux/saga';
import { all, fork } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([fork(todoSaga)]);
}
