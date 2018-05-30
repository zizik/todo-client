import { RECIEVED_TODOS } from "../actions/todos";

export default (state = [], action) => {
  switch (action.type) {
    case RECIEVED_TODOS:
      return [...action.payload];
    default:
      return state;
  }
};
