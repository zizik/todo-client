import { TOGGLE_MODAL } from "../actions/editModal";

export default (
  state = {
    isOpen: false,
  },
  action,
) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};
