import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar.js';
import YOUTUBE_API_KEY from './config/config.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };
  }

  componentDidMount() {
    YTSearch({ key: YOUTUBE_API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));







// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import $ from 'jquery';
// import SearchBar from './components/search_bar';
// import YT from './config/config';

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { videos: [] };
//   }

//   componentDidMount() {
//     console.log(process.env);
//     this.YTSearch('javascript');
//   }

//   YTSearch(term, callback) {
//     $.ajax({
//         url: 'https://www.googleapis.com/youtube/v3/search',
//         method: 'GET',
//         dataType: 'json',
//         data: {
//           key: window.YOUTUBE_API_KEY,
//           part: 'snippet',
//           q: term,
//           type: 'video',
//           maxResults: '25',
//           videoEmbeddable: 'true'
//         }
//     })
//       .done(({ items }) => {
//         if (callback) {
//           callback(items);
//         }
//         console.log('item: ', items);
//       })
//       .fail((err) => {
//         console.log('error: ', err);
//       });
//   }

//   render() {
//     return (
//       <div>
//         <SearchBar />
//       </div>
//     );
//   }
// };

// ReactDOM.render(<App />, document.getElementById('container'));
