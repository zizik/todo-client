import { SET_LOADING } from "../actions/loader";

export default (state = false, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.payload;
    default:
      return state;
  }
};
