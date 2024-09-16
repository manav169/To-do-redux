    // src/components/TodoItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../features/todos/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default TodoItem;
