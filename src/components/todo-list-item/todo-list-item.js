import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({ label, important = false }) => {
  const elStyle = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  };

  return (
    <span className="todo-list-item">
      <span
        className="todo-list-item-label"
        style={ elStyle }
      >
        { label }
      </span>

      <button
        type="button"
        className="btn btn-outline-danger btn-small">
        <i className="fa fa-trash-o" />
      </button>

      <button
        type="button"
        className="btn btn-outline-success btn-small">
        <i className="fa fa-exclamation" />
      </button>

    </span>
  );
};

export default TodoListItem;