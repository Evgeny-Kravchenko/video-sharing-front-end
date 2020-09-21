import React, { FC } from 'react';

import VideoStyled from './styled-components';
import { Wrapper } from '../../styles/global-styled-components';
import { VideoItemProps } from './types';

const VideoItem: FC<VideoItemProps> = (props: VideoItemProps) => {
  const {
    video: { title, description },
  } = props;
  return (
    <Wrapper width="300px">
      <div className="card my-2">
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <VideoStyled src="#" controls>
            Your browser does not support the video tag.
          </VideoStyled>
          <p className="card-text">{description}</p>
          <button className="btn btn-outline-success">Watch video</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default VideoItem;
