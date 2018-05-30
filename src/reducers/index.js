import { combineReducers } from "redux";
import todos from "./todos";
import isLoading from "./loader";

export default combineReducers({
  todos,
  isLoading,
});
