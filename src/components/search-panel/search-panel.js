import React from 'react';
import './search-panel.css';

export default class SearchPanel extends React.Component {
  state = {
    text: ''
  }

  onSearch = (evt) => {
    const text = evt.target.value;
    this.setState({ text });
    this.props.onSearchChange(text);
  }

  render() {
    const searchText = 'Type to search';
    const searchStyle = {
      fontSize: '20px'
    };

    return (
      <input
        placeholder={ searchText }
        style={ searchStyle }
        className="search-input"
        onChange={ this.onSearch }
        value={ this.state.text }
      />
    );
  }
};
