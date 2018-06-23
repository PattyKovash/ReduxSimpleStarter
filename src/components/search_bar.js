import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  render() {
    return (
      <div>
        <input
          value={ this.state.term }
          onChange={ this.handleInputChange }/>
      </div>
    );
  }
}

export default SearchBar;
// import React, { Component } from 'react';

// class SearchBar extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { term: '' };

//     this.onInputChange = this.onInputChange.bind(this);
//   }

//   onInputChange(event) {
//     this.setState({ term: event.target.value });
//   }

//   render() {
//     return (
//       <div>
//         <input
//           value={ this.state.term }
//           onChange={ this.onInputChange }/>
//       </div>
//     );
//   }
// }

// export default SearchBar;