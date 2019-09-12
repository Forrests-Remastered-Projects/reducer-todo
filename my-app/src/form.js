import React, { useState, useReducer } from "react";
import { initialState, titleReducer } from "./reducers/reducer";
import styled from "styled-components";

const StyledForm = styled.form`
  background: linear-gradient(#9ee383, #e95f5f);
  width: 60%;
  margin: 0 auto;
`;

const Form = props => {
  const [todo, setTodo] = useState({
    item: "",
    completed: false,
    id: 112334
  });
  const handleChanges = e => {
    setTodo({ [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.addTodo(todo);
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        placeholder="task"
        value={todo}
        onChange={handleChanges}
      />

      <button>add</button>
    </StyledForm>
  );
};

export default Form;
