import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const YOUTUBE_KEY = process.env.YOUTUBE_KEY;

// Create new component. Componet should produce HTML

const App = function () {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take component's generated HTML and add it to the DOM (add to page)

ReactDOM.render(<App />, document.getElementById('container'));

