import React, { useState } from "react";
import './App.css';

export function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button onClick={() => completeTodo(index)}>完成</button>
        <button onClick={() => removeTodo(index)}>刪除</button>
      </div>
    </div>
  );
}