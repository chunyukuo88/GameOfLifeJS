import React, { useState } from "react";
import './App.css';

export function TodoForm({ addTodo }){
  const [value, setValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
             className="input"
             value={value} 
             onChange={entry => setValue(entry.target.value)}/>
    </form>
  );
};