import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/todo-list.js';
import SearchPanel from './components/search-panel.js';
import AppHeader from './components/app-header.js';

const App = () => {
  const isLoggedIn = true;
  const loginBox = <p>Log in, please</p>;
  const welcomeBox = <p>Welcome Back!</p>;

  return (
    <div>
      <span>{ new Date().toString() }</span>
      { isLoggedIn ? welcomeBox : loginBox }
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
