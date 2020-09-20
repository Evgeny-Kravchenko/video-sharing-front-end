import React, { FC } from 'react';

import Video from './styled-components';
import { Wrapper } from '../../styles/global-styled-components';
import { IVideo } from '../../interfaces';

interface IVideoItemProps {
  video: IVideo;
}

const VideoItem: FC<IVideoItemProps> = (props: IVideoItemProps) => {
  const {
    video: { title, description },
  } = props;
  return (
    <Wrapper width="300px">
      <div className="card my-2">
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <Video src="#" controls>
            Your browser does not support the video tag.
          </Video>
          <p className="card-text">{description}</p>
          <button className="btn btn-outline-success">Watch video</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default VideoItem;
