import { call, put, all, takeLatest, takeEvery, select } from "redux-saga/effects";

import Api from "../api";
import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  getTodosSuccess,
  addTodoSuccess,
  deleteTodoSuccess,
  editTodoSuccess,
} from "../actions/todos";
import { setLoading } from "../actions/loader";
import { toggleModal } from "../actions/editModal";

function* watchGetTodos(action) {
  try {
    yield put(setLoading(true));
    const todos = yield call(Api.getTodos);
    yield put(getTodosSuccess(todos.data.data));
  } catch (err) {
    console.log(err);
  } finally {
    yield put(setLoading(false));
  }
}

function* watchAddTodo(action) {
  try {
    const todo = yield call(Api.addTodo, action.payload);
    yield put(addTodoSuccess(todo.data.data));
  } catch (err) {
    console.log(err);
  }
}

function* watchDeleteTodo(action) {
  try {
    const todo = yield call(Api.deleteTodo, action.payload);
    yield put(deleteTodoSuccess(todo.data.data.id));
  } catch (err) {
    console.log(err);
  }
}

function* watchEditTodo(action) {
  try {
    const getId = state => state.editModal.editingId;
    const id = yield select(getId);
    const todo = yield call(Api.editTodo, id, action.payload);
    yield put(toggleModal());
    yield put(editTodoSuccess(todo.data.data));
  } catch (err) {
    console.log(err);
  }
}

function* mySaga() {
  yield all([
    takeLatest(GET_TODOS, watchGetTodos),
    takeEvery(ADD_TODO, watchAddTodo),
    takeEvery(DELETE_TODO, watchDeleteTodo),
    takeEvery(EDIT_TODO, watchEditTodo),
  ]);
}

export default mySaga;
