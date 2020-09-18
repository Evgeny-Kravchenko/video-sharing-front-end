import React, { FC, ReactElement, useState } from 'react';

const TabItem = styled.span`
  cursor: pointer;
  transition: 0.2s;
`;

import VideoList from '../../video-list';
import styled from 'styled-components';

const VideoPage: FC = (): ReactElement => {
  const [activeVideoPage, setActiveVideoPage] = useState('own');
  return (
    <div className="py-lg-4 py-md-3 p-2">
      <ul className="nav nav-tabs">
        <li className="nav-item" onClick={() => setActiveVideoPage('own')}>
          <TabItem className={`nav-link ${activeVideoPage === 'own' ? 'active' : null}`}>
            My videos
          </TabItem>
        </li>
        <li className="nav-item" onClick={() => setActiveVideoPage('shared')}>
          <TabItem className={`nav-link ${activeVideoPage === 'shared' ? 'active' : null}`}>
            Video shared to me
          </TabItem>
        </li>
      </ul>
      <VideoList />
    </div>
  );
};

export default VideoPage;
