export const initialState = {
  tasks: [],
  fetchingTask: false,
  addingTask: false,
  error: null
};
export const titleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TODO":
      return { ...state, task: action.payload };
    case "ADD_TODO":
      console.log(state);
      return { ...state, task: action.payload, addingTask: true };
    case "ADD_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
