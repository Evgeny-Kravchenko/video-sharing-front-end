import React, { FC } from 'react';
import VideoItem from '../video-item';
import VideoListStyled from './styled-components';
import Video from '../video-item/types';
import VideoListType from './types';

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
