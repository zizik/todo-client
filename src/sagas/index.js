import { call, put, all, takeLatest } from "redux-saga/effects";

import Api from "../api";
import { GET_TODOS, ADD_TODO, receivedTodos, receivedNewTodo } from "../actions/todos";
import { setLoading } from "../actions/loader";

function* fetchTodos(action) {
  try {
    yield put(setLoading(true));
    const todos = yield call(Api.getTodos);
    yield put(receivedTodos(todos.data.data));
  } catch (err) {
    console.log(err);
  } finally {
    yield put(setLoading(false));
  }
}

function* watchAddTodo(action) {
  try {
    yield put(setLoading(true));
    const todo = yield call(Api.addTodo, action.payload);
    yield put(receivedNewTodo(todo.data.data));
  } catch (err) {
    console.log(err);
  } finally {
    yield put(setLoading(false));
  }
}

function* mySaga() {
  yield all([takeLatest(GET_TODOS, fetchTodos), takeLatest(ADD_TODO, watchAddTodo)]);
}

export default mySaga;
