import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import * as request from '../api/request';
import { Note, Response } from '../api/model';
import {
  createNote,
  deleteNote,
  fetchNoteFailure,
  fetchNoteList,
  fetchNoteSuccess,
  fetchNoteListMore,
  fetchNoteListMoreSuccess,
  fetchDetailNoteSuccess,
  fetchDetailNote,
  updateNote,
  updateNoteSuccess,
  createCategory,
  fetchCategoryList,
  fetchCategoryListSuccess
} from './slice';

export function* updateNoteSaga({ payload }: any) {
  const { _id } = payload;
  try {
    const response: Record<string, string> = yield call(
      request.updateNote,
      _id,
      payload
    );
    const state: Record<string, any> = yield select();
    yield put(fetchNoteList(state.myNote.params));
  } catch (e: any) {}
}

export function* fetchDetailNoteSaga({ payload }: any) {
  try {
    const response: Record<string, string> = yield call(
      request.getNoteDetail,
      payload
    );
    yield put(fetchDetailNoteSuccess(response));
  } catch (e: any) {}
}

export function* fetchNoteSaga({ payload }: any) {
  try {
    const response: Record<string, string> = yield call(
      request.getList,
      payload
    );
    yield put(fetchNoteSuccess(response));
  } catch (e: any) {
    yield put(
      fetchNoteFailure({
        error: e.message
      })
    );
  }
}

export function* fetchNoteMoreSaga({ payload }: any) {
  try {
    const response: Record<string, string> = yield call(
      request.getList,
      payload
    );
    yield put(fetchNoteListMoreSuccess(response));
  } catch (e: any) {}
}

export function* deleteNoteSaga({ payload }: any) {
  try {
    const response: Record<string, string> = yield call(
      request.deleteNote,
      payload
    );
    const state: Record<string, any> = yield select();
    yield put(fetchNoteList(state.myNote.params));
  } catch (e) {}
}

export function* createNoteSaga({ payload }: any) {
  try {
    const response: Record<string, string> = yield call(
      request.createNote,
      payload
    );
    const state: Record<string, any> = yield select();
    yield put(fetchNoteList(state.myNote.params));
  } catch (e) {}
}

export function* createCategorySaga({ payload }: any) {
  try {
    const response: Record<string, string> = yield call(
      request.createCategory,
      payload
    );
    const state: Record<string, any> = yield select();
    yield put(fetchCategoryList({}));
  } catch (e) {}
}

export function* fetchCategoryListSaga({ payload }: any) {
  try {
    const response: Record<string, string> = yield call(
      request.getCategoryList,
      payload
    );

    yield put(fetchCategoryListSuccess(response));
  } catch (e) {}
}

function* NoteSaga() {
  yield all([
    takeLatest(fetchNoteList.type, fetchNoteSaga),
    takeLatest(fetchDetailNote.type, fetchDetailNoteSaga),
    takeLatest(fetchNoteListMore.type, fetchNoteMoreSaga),
    takeLatest(createNote.type, createNoteSaga),
    takeLatest(deleteNote.type, deleteNoteSaga),
    takeLatest(updateNote.type, updateNoteSaga),
    takeLatest(createCategory.type, createCategorySaga),
    takeLatest(fetchCategoryList.type, fetchCategoryListSaga)
  ]);
}

export default NoteSaga;
