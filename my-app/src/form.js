import React, { useState, useReducer } from 'react';
import { initialState, titleReducer } from './reducers/reducer'

const Form = (props) => {
    const handleChanges = e => {
        setTodo({[e.target.name]: e.target.value})
    };
    
    const [Todo, setTodo] = useState({
        item: '',
        completed: false,
        id: 112334
    });
        
    const handleSubmit = e => {
        e.preventDefault()
        
            props.addTodo(Todo) 
    

    return(
        <input 
  type="text"
  name="Todo"
  placeholder="task"
  value={Todo}
  onChange={handleChanges}
  
/>

<button>add</button>
    
};

}

export default Form;