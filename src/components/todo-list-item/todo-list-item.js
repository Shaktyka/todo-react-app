import React from 'react';
import './todo-list-item.css';

export default class TodoListItem extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  onLabelClick = (evt) => {
    console.log(evt.target);
  }

  render() {
    const { label, important = false } = this.props;

    const elStyle = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };

    return (
      <span className="todo-list-item">
        <span
          className="todo-list-item-label"
          style={ elStyle }
          onClick={ this.onLabelClick }
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
  }
}
