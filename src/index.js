import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/todo-list.js';
import SearchPanel from './components/search-panel.js';
import AppHeader from './components/app-header.js';

const App = () => {
  const isLoggedIn = true;
  const loginBox = <p>Log in, please</p>;
  const welcomeBox = <p>Welcome Back!</p>;

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
      <span>{ new Date().toString() }</span>
      { isLoggedIn ? welcomeBox : loginBox }
      <AppHeader />
      <SearchPanel />
      <TodoList tasks={ todoData } />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
