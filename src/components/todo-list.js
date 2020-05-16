import React from 'react';
import TodoListItem from './todo-list-item.js';

const TodoList = () => {
  const tasks = ['Drink Coffee', 'Learn React', 'Build App'];

  return (
    <ul>
      <li><TodoListItem /></li>
      <li><TodoListItem /></li>
      <li><TodoListItem /></li>
    </ul>
  );
};

export default TodoList;
