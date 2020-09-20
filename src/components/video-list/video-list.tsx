import React, { FC } from 'react';
import VideoItem from '../video-item';
import VideoListStyled from './styled-components';
import { IVideoList, IVideo } from '../../interfaces';

const VideoList: FC<IVideoList> = (props: IVideoList) => {
  return (
    <VideoListStyled>
      {props.videos.map((video: IVideo, index: number) => {
        return <VideoItem key={index} video={video} />;
      })}
    </VideoListStyled>
  );
};

export default VideoList;
