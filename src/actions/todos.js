export const GET_TODOS = "GET_TODOS";
export const RECIEVED_TODOS = "RECIEVED_TODOS";

// const todos = [
//   {
//     description: "test1",
//     isComplete: false,
//     _id: "fgdfgvbcbrrtg34",
//   },
//   {
//     description: "test2",
//     isComplete: true,
//     _id: "fgdfgfsdfsrrtg34",
//   },
//   {
//     description: "test3",
//     isComplete: false,
//     _id: "fgdfgrrvcbfdrertg34",
//   },
// ];

export const getTodos = () => ({ type: GET_TODOS });
export const resievedTodos = todos => ({ type: RECIEVED_TODOS, payload: todos });
