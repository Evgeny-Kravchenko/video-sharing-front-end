import React, { FC } from 'react';

import VideoListStyled from './styled-components';

import VideoListType from './types';
import { Video } from '../../../../../types';

import VideoItem from '../video-item';

const VideoList: FC<VideoListType> = (props: VideoListType) => {
  return (
    <VideoListStyled>
      {props.videos.map((video: Video, index: number) => {
        return <VideoItem key={index} video={video} />;
      })}
    </VideoListStyled>
  );
};

export default VideoList;
