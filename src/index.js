import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header/';
import SearchPanel from './components/search-panel/';
import ItemStatusFilter from './components/item-status-filter/';
import TodoList from './components/todo-list/';

const App = () => {
  const todoData = [
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
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel /><ItemStatusFilter />
      <TodoList tasks={ todoData } />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
