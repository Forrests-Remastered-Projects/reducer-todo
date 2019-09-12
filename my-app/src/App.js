import React, { useReducer } from "react";
import ReactDOM from "react-dom";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import { initialState, todoReducer } from "./reducers";

import "./styles.css";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = item => dispatch({ type: "ADD_TODO", payload: item });

  const toggleCompleted = id => dispatch({ type: "TOGGLE_COMPLETED", id: id });

  const clearCompleted = () => dispatch({ type: "CLEAR_COMPLETED" });

  const updateTodo = (task, id) =>
    dispatch({ type: "UPDATE_TODO", payload: { task, id } });

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} clearCompleted={clearCompleted} />
      <TodoList
        todos={state.todos}
        toggleCompleted={toggleCompleted}
        updateTodo={updateTodo}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
