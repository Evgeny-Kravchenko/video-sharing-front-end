import React, { FC, ReactElement, useState } from 'react';
import { connect } from 'react-redux';

import VideoList from '../../video-list';
import { userOwnVideosRequest, userSharedVideosRequest } from '../../../actions';
import TabItem from './styled-components';
import Spinner from '../../spinner';
import { State } from '../../../reducers/types';
import VideoPageProps from './types';

const VideoPage: FC<VideoPageProps> = (props: VideoPageProps): ReactElement => {
  const {
    ownVideos,
    ownVideosLoading,
    sharedVideos,
    sharedVideosLoading,
    onOwnVideo,
    onSharedVideo,
    userEmail,
  } = props;
  const [activeVideoPage, setActiveVideoPage] = useState('own');
  const videos = activeVideoPage === 'own' ? ownVideos : sharedVideos;
  const handleSetActiveVideoPage = (path: string) => () => {
    setActiveVideoPage(path);
  };
  const handleLoadingVideos = (
    cb: (userEmail: string) => void,
    userEmail: string,
    path: string
  ) => () => {
    if (path !== activeVideoPage) {
      cb(userEmail);
    }
  };
  return (
    <div className="py-lg-4 py-md-3 p-2">
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item" onClick={handleSetActiveVideoPage('own')}>
          <TabItem
            className={`nav-link ${activeVideoPage === 'own' ? 'active' : null}`}
            onClick={handleLoadingVideos(onOwnVideo, userEmail, 'own')}
          >
            My videos
          </TabItem>
        </li>
        <li className="nav-item" onClick={handleSetActiveVideoPage('shared')}>
          <TabItem
            className={`nav-link ${activeVideoPage === 'shared' ? 'active' : null}`}
            onClick={handleLoadingVideos(onSharedVideo, userEmail, 'shared')}
          >
            Video shared to me
          </TabItem>
        </li>
      </ul>
      {ownVideosLoading || sharedVideosLoading ? <Spinner /> : null}
      {!ownVideosLoading && !sharedVideosLoading ? <VideoList videos={videos} /> : null}
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    ownVideos: state.videosOfUser.ownVideos.videos,
    ownVideosLoading: state.videosOfUser.ownVideos.loading,
    sharedVideos: state.videosOfUser.sharedVideos.videos,
    sharedVideosLoading: state.videosOfUser.sharedVideos.loading,
    userEmail: state.authUser.email,
  };
};

const mapDispatchToProps = {
  onOwnVideo: userOwnVideosRequest,
  onSharedVideo: userSharedVideosRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoPage);
