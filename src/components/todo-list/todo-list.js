import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ tasks, onDeleted }) => {
  const todos = tasks.map((item, index) => {
    const { id, ...itemProps } = item;

    return (
      <li
        key={ id }
        id={ item.id }
        className="list-group-item"
      >
        { (index + 1) + '  ' }
        <TodoListItem { ...itemProps } onDeleted={ () => onDeleted(id) } />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { todos }
    </ul>
  );
};

export default TodoList;
