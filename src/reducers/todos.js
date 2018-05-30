const initialState = [
  {
    description: "test1",
    isComplete: false,
    _id: "fgdfgvbcbrrtg34",
  },
  {
    description: "test2",
    isComplete: true,
    _id: "fgdfgfsdfsrrtg34",
  },
  {
    description: "test3",
    isComplete: false,
    _id: "fgdfgrrvcbfdrertg34",
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_TODOS":
      return [...action.payload];
    default:
      return state;
  }
};
