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
      <h1>90's To-Do List App</h1>
      <TodoForm addTodo={addTodo} clearCompleted={clearCompleted} />

      <TodoList
        todos={state.todos}
        toggleCompleted={toggleCompleted}
        updateTodo={updateTodo}
      />
      <img id="one" src="../photo-1554448326-fa887763def2.jpg"></img>
      <img id="two" src="../photo-1527333118761-68a5b86be367.jpg"></img>
      <img id="three" src="../photo-1528669631894-8dbd0935e091.jpg"></img>
      <img id="four" src="../photo-1531525645387-7f14be1bdbbd.jpg"></img>

      <p>© 2019 FORREST DARABIAN - ALL RIGHTS RESERVED</p>
    </div>
  );
}

export default App;
