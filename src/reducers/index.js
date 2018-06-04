import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import todos from "./todos";
import isLoading from "./loader";
import editModal from "./editModal";

export default combineReducers({
  todos,
  isLoading,
  editModal,
  form: formReducer,
});
