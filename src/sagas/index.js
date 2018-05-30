import { call, put, takeLatest } from "redux-saga/effects";

import Api from "../api";
import { GET_TODOS, resievedTodos } from "../actions/todos";

function* fetchTodos(action) {
  try {
    const todos = yield call(Api.getTodos);
    yield put(resievedTodos(todos.data));
  } catch (e) {
    console.log(e);
  }
}

function* mySaga() {
  yield takeLatest(GET_TODOS, fetchTodos);
}

export default mySaga;
