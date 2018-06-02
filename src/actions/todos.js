export const GET_TODOS = "GET_TODOS";
export const RECEIVED_TODOS = "RECIEVED_TODOS";
export const ADD_TODO = "ADD_TODO";
export const RECEIVED_NEW_TODO = "RECEIVED_NEW_TODO";

export const getTodos = () => ({ type: GET_TODOS });
export const receivedTodos = todos => ({ type: RECEIVED_TODOS, payload: todos });
export const addTodo = todo => ({ type: ADD_TODO, payload: todo });
export const receivedNewTodo = todo => ({ type: RECEIVED_NEW_TODO, payload: todo });
