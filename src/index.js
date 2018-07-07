import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// Component Files
import SearchBar from './components/search_bar.js';
import VideoDetail from './components/video_detail.js';
import VideoList from './components/video_list.js';
import VideoListItem from './components/video_list_item.js';

// Config File
import YOUTUBE_API_KEY from './config/config.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.handleVideoSelect = this.handleVideoSelect.bind(this);
  }

  componentDidMount() {
    YTSearch({ key: YOUTUBE_API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  handleVideoSelect(selectedVideo) {
    this.setState({ selectedVideo });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList
          handleVideoSelect={ this.handleVideoSelect }
          videos={ this.state.videos } />
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
