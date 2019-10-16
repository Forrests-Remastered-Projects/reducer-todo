export const initialState = {
  todos: [
    {
      task: "Buy a car",
      completed: false,
      id: 1
    },
    {
      task: "Learn to code",
      completed: false,
      id: 2
    },
    {
      task: "Do the Dishes",
      completed: false,
      id: 3
    }
  ]
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            task: action.payload,
            id: Date.now(),
            completed: false
          }
        ]
      };
    case "TOGGLE_COMPLETED":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, task: action.payload.task }
            : todo
        )
      };
    default:
      return state;
  }
};
