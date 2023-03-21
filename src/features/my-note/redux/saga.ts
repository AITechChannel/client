import axios from 'axios';
import { all, call, put, takeLatest, take } from 'redux-saga/effects';

import { fetchTodoFailure, fetchTodoSuccess } from './actions';
import { FETCH_TODO_REQUEST } from './actions/actionTypes';
import { ITodo } from './actions/types';

const getTodos = () =>
  axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos');

function* fetchTodoSaga() {
  try {
    //@ts-ignore
    const response = yield call(getTodos);
    console.log('call api');
    yield put(
      fetchTodoSuccess({
        todos: response.data
      })
    );
    console.log('call api');
  } catch (e: any) {
    yield put(
      fetchTodoFailure({
        error: e.message
      })
    );
  }
}

function* todoSaga() {
  yield all([takeLatest(FETCH_TODO_REQUEST, fetchTodoSaga)]);
}

export default todoSaga;
