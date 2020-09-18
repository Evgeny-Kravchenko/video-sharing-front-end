import React, { FC, ReactElement } from 'react';
import VideoList from '../../video-list';

const VideoPage: FC = (): ReactElement => {
  return (
    <div className="p-lg-5 p-md-3 p-2">
      <VideoList />
    </div>
  );
};

export default VideoPage;
