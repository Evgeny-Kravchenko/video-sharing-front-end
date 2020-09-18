import React, { FC } from 'react';
import { Wrapper } from '../../styles/global-styled-components';
import styled from 'styled-components';

const Video = styled.video`
  width: 100%;
  height: 200px;
`;

const VideoItem: FC = () => {
  return (
    <Wrapper width="300px">
      <div className="card my-2">
        <div className="card-body">
          <h4 className="card-title">Video item</h4>
          <h6 className="card-subtitle mb-2 text-muted">Video category</h6>
          <Video src="#" controls>
            Your browser does not support the video tag.
          </Video>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the car
            content.
          </p>
          <a href="#" className="card-link">
            Watch video
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default VideoItem;
