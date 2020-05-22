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
    ],
    searchText: '',
    filter: 'all' // all, active, done
  }

  // Найти индекс элемента в массиве
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

  // Сгенерировать случайное число до 100
  getRandomNumber = () => Math.round(Math.random() * 100);

  // Добавить новую задачу
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

  search = (items, text) => {
    if (text.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label
        .toLowerCase()
        .indexOf(text.toLowerCase()) > -1;
    });
  }

  filter = (items, filter) => {
    switch(filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  onSearchHandler = (text) => {
    this.setState({ searchText: text });
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  }

  render() {
    const { todoData, searchText, filter } = this.state;

    const visibleItems = this.filter(
      this.search(todoData, searchText), filter
    );
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={ todoCount } done={ doneCount } />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={ this.onSearchHandler } />
          <ItemStatusFilter filter={ filter } onFilterChange={ this.onFilterChange } />
        </div>
        <TodoList
          tasks={ visibleItems }
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
