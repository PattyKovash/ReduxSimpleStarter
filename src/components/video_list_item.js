import React from 'react';
import PropTypes from 'prop-types';

const VideoListItem = ({ video, handleVideoSelect }) => {
  const snippet = video.snippet;
  const imageUrl = snippet.thumbnails.default.url;

  const handleClick = () => {
    handleVideoSelect(video);
  }

  return (
    <li className="list-group-item" onClick={ handleClick }>
      <div className="video-item media">
        <div className="media-left">
          <img className="media-object" src={ imageUrl } />
        </div>

        <div className="media-body">
          <div className="media-heading">
            { snippet.title }
          </div>
        </div>
      </div>
    </li>
  );
};

VideoListItem.propTypes = {
  video: PropTypes.object,
  handleVideoSelect: PropTypes.func
};

export default VideoListItem;