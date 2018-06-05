import { TOGGLE_MODAL, START_EDITING } from "../actions/editModal";

export default (
  state = {
    isOpen: false,
    editingId: "",
  },
  action,
) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...state, isOpen: !state.isOpen };
    case START_EDITING:
      return { ...state, isOpen: true, editingId: action.payload };
    default:
      return state;
  }
};
