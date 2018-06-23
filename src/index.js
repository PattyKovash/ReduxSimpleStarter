// Create new component. This should produce some html
const App = function () {
  return <div>Hi!</div>;
}
// Take this component's generated html and put in the DOM

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
