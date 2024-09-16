// src/components/TodoList.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todoSlice';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [inputValue, setInputValue] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (inputValue) {
      dispatch(addTodo({
        id: Date.now(),
        text: inputValue
      }));
      setInputValue('');
    }
  };

  return (
    <div>
      <input 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Add a new todo" 
      />
      <button onClick={handleAdd}>Add</button>
      <div>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
