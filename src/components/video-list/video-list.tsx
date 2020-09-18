import React from 'react';
import VideoItem from '../video-item';
import styled from 'styled-components';

const VideoListStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const VideoList = () => {
  return (
    <VideoListStyled>
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
    </VideoListStyled>
  );
};

export default VideoList;
