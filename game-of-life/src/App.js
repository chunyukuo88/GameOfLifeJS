import React, { useState } from "react";
import './App.css';
import { Todo } from './Todo';
import { TodoForm } from './TodoForm';

function App() {
  const [todos, setTodos] = useState([
    {text: '烤麵包.', isCompleted: false},
    {text: '溫習SSH.', isCompleted: false},
    {text: '複習JEST測試方法.', isCompleted: false},
    {text: '搞定報稅表.', isCompleted: false},
    {text: '開始摺新的薬玉.', isCompleted: false},
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index}
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
          />
        ))}
      </div>
      <TodoForm addTodo={ addTodo } />
    </div>
    );
};

export default App;