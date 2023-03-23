import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getList } from '../api/request';
import { ParamsGetListNote } from '../utils/interface';
import { Note, Response } from './Model';
import { fetchNoteFailure, fetchNoteList, fetchNoteSuccess } from './slice';

export function* fetchNoteSaga(data: any) {
  const params = data.payload;
  try {
    const response: Response<Note> = yield call(getList, params);
    yield put(fetchNoteSuccess(response.data));
  } catch (e: any) {
    yield put(
      fetchNoteFailure({
        error: e.message
      })
    );
  }
}

function* NoteSaga() {
  yield all([takeLatest(fetchNoteList.type, fetchNoteSaga)]);
}

export default NoteSaga;
