import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// Component Files
import SearchBar from './components/search_bar.js';
import VideoDetail from './components/video_detail.js';
import VideoList from './components/video_list.js';

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
    this.searchAndSet = this.searchAndSet.bind(this);
  }

  componentDidMount() {
    this.searchAndSet('surfboards');
  }

  searchVideo(term, cb) {
    YTSearch({ key: YOUTUBE_API_KEY, term: term }, (videos, err) => {
      cb(videos, err);
    })
  }

  setVideos(videos) {
    this.setState({ videos });
  }

  handleVideoSelect(selectedVideo) {
    this.setState({ selectedVideo });
  }

  searchAndSet(term) {
    this.searchVideo(term, (videos, err) => {
      if (videos) {
        this.setVideos(videos);
        this.handleVideoSelect(videos[0]);
      } else {
        console.log('ERROR: ', err);
      }
    })
  }

  render() {
    return (
      <div>
        <SearchBar handleSearch={ this.searchAndSet }/>
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
