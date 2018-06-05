import { GET_TODOS_SUCCESS, ADD_TODO_SUCCESS, DELETE_TODO_SUCCESS, EDIT_TODO_SUCCESS } from "../actions/todos";

export default (state = [], action) => {
  switch (action.type) {
    case GET_TODOS_SUCCESS:
      return [...action.payload];
    case ADD_TODO_SUCCESS:
      return [...state, action.payload];
    case DELETE_TODO_SUCCESS:
      return state.filter(todo => todo._id !== action.payload);
    case EDIT_TODO_SUCCESS:
      return state.map(todo => {
        if (todo._id !== action.payload._id) return todo;
        return action.payload;
      });
    default:
      return state;
  }
};
