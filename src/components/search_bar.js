import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    var term = event.target.value;
    this.setState({ term: term });

    setTimeout(() => {
      this.props.handleSearch(term);
    }, 3000);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={ this.state.term }
          type="search"
          onChange={ this.handleInputChange } />
      </div>
    );
  }
}

SearchBar.propTypes = {
  handleSearch: PropTypes.func
};

export default SearchBar;