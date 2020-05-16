import React from 'react';

const TodoListItem = ({ label, important = false }) => {
  const elStyle = {
    color: important ? 'tomato' : 'black'
  };

  return <span style={ elStyle }>{ label }</span>;
};

export default TodoListItem;