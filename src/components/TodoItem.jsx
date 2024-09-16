// src/components/TodoItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../features/todos/todoSlice';
import { formatDate } from '../utils/utils'; 

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <div>
      <span>{todo.text}</span>
      <span style={{ marginLeft: '10px', color: 'gray', textAlign:'left' }}>({formatDate(todo.date)})</span>  
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default TodoItem;
