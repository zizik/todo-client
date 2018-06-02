import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import todos from "./todos";
import isLoading from "./loader";

export default combineReducers({
  todos,
  isLoading,
  form: formReducer,
});
