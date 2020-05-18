import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import ItemStatusFilter from '../item-status-filter/';
import TodoList from '../todo-list/';
import ItemAddForm from '../item-add-form/'; 

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

  // Удаление элемента из массива
  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const newArray = todoData.filter((el) => el.id !== id);
      return {
        todoData: newArray
      }
    });
  }

  getRandomNumber = () => Math.round(Math.random() * 10);

  // Добавление элемента в массив
  addItem = (text) => {
    const newItem = {
      id: uuidv4(4),
      label: 'New Task ' + this.getRandomNumber(),
      important: false
    };

    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray
      }
    });
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
          onDeleted={ this.deleteItem }
        />
        <ItemAddForm onAdd={ this.addItem } />
      </div>
    );
  }
}
