import React from 'react';
import PropTypes from 'prop-types';
import VideoListItem from './video_list_item.js';

const VideoList = ({ videos, handleVideoSelect }) => {

  const videoItems = videos.map((video) => {
    return (
      <VideoListItem
        key={ video.etag }
        video={ video }
        handleVideoSelect={ handleVideoSelect } />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      { videoItems }
    </ul>
  );
}

VideoList.propTypes = {
  videos: PropTypes.array,
  handleVideoSelect: PropTypes.func
};

export default VideoList;