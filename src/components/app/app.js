import React from 'react';

import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import ItemStatusFilter from '../item-status-filter/';
import TodoList from '../todo-list/';

import './app.css';

export default class App extends React.Component {
  state = {
    todoData: [
    {
      id: 111,
      label: 'Drink Coffee',
      important: false
    },
    {
      id: 222,
      label: 'Learn React',
      important: true
    },
    {
      id: 333,
      label: 'Build React App',
      important: true
    },
    {
      id: 444,
      label: 'Have a Lunch',
      important: false
    }
  ]
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          tasks={ this.state.todoData }
          onDeleted={ (id) => console.log(id) }
        />
      </div>
    );
  }
}
