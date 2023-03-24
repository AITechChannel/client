import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import * as request from '../api/request';
import { Note, Response } from '../api/model';
import {
  createNote,
  deleteNote,
  fetchNoteFailure,
  fetchNoteList,
  fetchNoteSuccess
} from './slice';

export function* fetchNoteSaga({ payload }: any) {
  try {
    const response: Response<Note> = yield call(request.getList, payload);
    yield put(fetchNoteSuccess(response.data));
  } catch (e: any) {
    yield put(
      fetchNoteFailure({
        error: e.message
      })
    );
  }
}

export function* deleteNoteSaga({ payload }: any) {
  try {
    const response: Response<Note> = yield call(request.deleteNote, payload);
    // @ts-ignore
    const state: any = yield select();
    yield put(fetchNoteList(state.myNote.params));
  } catch (e) {}
}

export function* createNoteSaga({ payload }: any) {
  try {
    const response: Response<Note> = yield call(request.createNote, payload);
    // @ts-ignore
    const state: any = yield select();
    yield put(fetchNoteList(state.myNote.params));
  } catch (e) {}
}

function* NoteSaga() {
  yield all([
    takeLatest(fetchNoteList.type, fetchNoteSaga),
    takeLatest(createNote.type, createNoteSaga),
    takeLatest(deleteNote.type, deleteNoteSaga)
  ]);
}

export default NoteSaga;
