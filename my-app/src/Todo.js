import React, { useState } from "react";
import "../src/index.css";
import todoForm from "./form";

export default function Todo(props) {
  const [editing, setEditing] = useState(false);
  const [editedInput, setEditedInput] = useState("");

  const handleChanges = event => {
    setEditedInput(event.target.value);
  };

  const renderEdit = () => {
    setEditing(true);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.updateTodo(editedInput, props.todo.id);
    setEditing(false);
  };

  if (editing) {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="editedInput"
          value={editedInput}
          placeholder={props.todo.task}
          onChange={handleChanges}
        />
        <button type="submit">Update Todo</button>
      </form>
    );
  }

  return (
    <div>
      <h3 className={props.todo.completed ? "completed" : null}>
        {props.todo.task}
      </h3>
      <button onClick={() => props.toggleCompleted(props.todo.id)}>
        Completed
      </button>
      <button onClick={renderEdit}>Edit</button>
    </div>
  );
}
