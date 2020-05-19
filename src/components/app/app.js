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
      important: false,
      done: false
    },
    {
      id: 222,
      label: 'Learn React',
      important: true,
      done: false
    },
    {
      id: 333,
      label: 'Build React App',
      important: true,
      done: false
    },
    {
      id: 444,
      label: 'Have a Lunch',
      important: false,
      done: false
    }
    ]
  }

  findIndex =(id) => {
    return this.state.todoData.findIndex((el) => el.id === id);
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

  createTodoItem = (text) => {
    return {
      id: uuidv4(4),
      label: text,
      important: false,
      done: false
    }
  }

  // Добавление элемента в массив
  addItem = (text = 'Task N') => {
    // console.log(text);
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray
      }
    });
  }

  toggleProperty = (arr, id, propName) => {
    const index = this.findIndex(id);
    const oldItem = arr[index];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName]
    };
    return [
      ...arr.slice(0, index), newItem, ...arr.slice(index + 1)
    ];
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  }

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={ todoCount } done={ doneCount } />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          tasks={ todoData }
          onDeleted={ this.deleteItem }
          onToggleImportant={ this.onToggleImportant }
          onToggleDone={ this.onToggleDone }
        />
        <ItemAddForm onAdd={ this.addItem } />
      </div>
    );
  }
}

/*
  Что ещё сделать:
  - редактирование тасков
  - дата дедлайна
 */
