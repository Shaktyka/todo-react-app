import React from 'react';
import TodoListItem from './todo-list-item.js';

const TodoList = () => {
  const tasks = ['Drink Coffee', 'Learn React', 'Build App'];

  return (
    <ul>
      <li><TodoListItem label="Drink Coffee" /></li>
      <li><TodoListItem label="Learn React" important /></li>
    </ul>
  );
};

export default TodoList;
