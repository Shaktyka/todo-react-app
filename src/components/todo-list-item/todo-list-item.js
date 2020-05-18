import React from 'react';
import './todo-list-item.css';

export default class TodoListItem extends React.Component {
  state = {
    done: false,
    important: false
  };

  // Первый вариант
  onLabelClick = () => {
    this.setState(({done}) => {
      return { done: !done };
    });
  }

  // Второй вариант
  onMarkImportant = () => {
    this.setState((state) => {
      return { important: !state.important }
    });
  }

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

    let classNames = 'todo-list-item';

    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <span className={ classNames }>
        <span
          className="todo-list-item-label"
          onClick={ this.onLabelClick }
        >
          { label }
        </span>

        <button
          type="button"
          className="btn btn-outline-danger btn-small"
          onClick={ onDeleted }
        >
          <i className="fa fa-trash-o" />
        </button>

        <button
          type="button"
          className="btn btn-outline-success btn-small"
          onClick={ this.onMarkImportant }
        >
          <i className="fa fa-exclamation" />
        </button>

      </span>
    );
  }
}
