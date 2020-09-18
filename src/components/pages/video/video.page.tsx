import React, { FC, ReactElement, useState } from 'react';

import VideoList from '../../video-list';

const VideoPage: FC = (): ReactElement => {
  const [activeVideoPage, setActiveVideoPage] = useState('own')
  return (
    <div className="py-lg-4 py-md-3 p-2">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <span className="nav-link">
            My videos
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link active">
            Video shared to me
          </span>
        </li>
      </ul>
      <VideoList />
    </div>
  );
};

export default VideoPage;
