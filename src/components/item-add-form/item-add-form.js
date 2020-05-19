import React from 'react';
import './item-add-form.css';

export default class ItemAddForm extends React.Component {
  state = {
    label: ''
  }

  onLabelChange = (evt) => {
    this.setState({ label: evt.target.value });
  }

  onSubmit = (evt) => {
    this.props.onAdd(this.state.label);
    this.setState({ label: '' });
    evt.preventDefault();
  }

  render () {
    return (
      <form className="item-add-form" onSubmit={ this.onSubmit }>
        <input
          type="text"
          className="form-control"
          onChange={ this.onLabelChange }
          value={ this.state.label }
          placeholder="What needs to be done"
          required
        />
        <button
          className="btn btn-info"
          type="submit"
        >Add&nbsp;task</button>
      </form>
    );
  }
}
