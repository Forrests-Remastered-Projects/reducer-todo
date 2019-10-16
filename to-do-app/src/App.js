import React, { useReducer } from "react";
import ReactDOM from "react-dom";

import TodoForm from "./form";
import TodoList from "./Todolist";

import { initialState, todoReducer } from "./reducers/reducer";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = item => dispatch({ type: "ADD_TODO", payload: item });

  const toggleCompleted = id => dispatch({ type: "TOGGLE_COMPLETED", id: id });

  const clearCompleted = () => dispatch({ type: "CLEAR_COMPLETED" });

  const updateTodo = (task, id) =>
    dispatch({ type: "UPDATE_TODO", payload: { task, id } });

  return (
    <div className="App">
      <h1>To-Do List App</h1>
      <TodoForm addTodo={addTodo} clearCompleted={clearCompleted} />
      <TodoList
        todos={state.todos}
        toggleCompleted={toggleCompleted}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;
