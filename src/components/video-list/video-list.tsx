import React, { FC } from 'react';
import VideoItem from '../video-item';
import VideoListStyled from './styled-components';
import IVideoList from '../../interfaces/video-list-props.interface';

const VideoList: FC<IVideoList> = () => {
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
