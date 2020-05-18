import React from 'react';
import './item-add-form.css';

export default class ItemAddForm extends React.Component {

  render () {
    const { onAdd } = this.props;

    return (
      <div className="item-add-form">
        <button
          className="btn btn-info"
          type="button"
          onClick={ onAdd }
        >Add task</button>
      </div>
    );
  }
}
