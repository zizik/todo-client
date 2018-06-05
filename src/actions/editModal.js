export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const START_EDITING = "START_EDITING";

export const toggleModal = () => ({ type: TOGGLE_MODAL });
export const startEditing = id => ({ type: START_EDITING, payload: id });
