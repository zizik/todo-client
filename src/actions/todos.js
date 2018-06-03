export const GET_TODOS = "GET_TODOS";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const ADD_TODO = "ADD_TODO";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const DELETE_TODO = "DELETE_TODO";
export const DELETE_TODO_SUCCESS = "RECEIVED_DELETE_TODO";

export const getTodos = () => ({ type: GET_TODOS });
export const getTodosSuccess = todos => ({ type: GET_TODOS_SUCCESS, payload: todos });
export const addTodo = todo => ({ type: ADD_TODO, payload: todo });
export const addTodoSuccess = todo => ({ type: ADD_TODO_SUCCESS, payload: todo });
export const deleteTodo = id => ({ type: DELETE_TODO, payload: id });
export const deleteTodoSuccess = id => ({ type: DELETE_TODO_SUCCESS, payload: id });
