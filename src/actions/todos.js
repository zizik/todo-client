export const GET_TODOS = "GET_TODOS";
export const RECIEVED_TODOS = "RECIEVED_TODOS";

export const getTodos = () => ({ type: GET_TODOS });
export const resievedTodos = todos => ({ type: RECIEVED_TODOS, payload: todos });
