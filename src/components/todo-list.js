import React from 'react';
import TodoListItem from './todo-list-item.js';

const TodoList = ({ tasks }) => {
  const todos = tasks.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={ id } id={ item.id }>
        <TodoListItem { ...itemProps } />
      </li>
    );
  });

  return (
    <ul>
      { todos }
    </ul>
  );
};

export default TodoList;
