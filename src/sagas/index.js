import { call, put, takeLatest } from "redux-saga/effects";

import Api from "../api";
import { GET_TODOS, resievedTodos } from "../actions/todos";
import { setLoading } from "../actions/loader";

function* fetchTodos(action) {
  try {
    yield put(setLoading(true));
    const todos = yield call(Api.getTodos);
    yield put(resievedTodos(todos.data));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(setLoading(false));
  }
}

function* mySaga() {
  yield takeLatest(GET_TODOS, fetchTodos);
}

export default mySaga;
