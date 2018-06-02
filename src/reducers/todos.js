import { RECEIVED_TODOS, RECEIVED_NEW_TODO } from "../actions/todos";

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVED_TODOS:
      return [...action.payload];
    case RECEIVED_NEW_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};
