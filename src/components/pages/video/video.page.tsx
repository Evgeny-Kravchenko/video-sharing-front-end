import React, { FC, ReactElement, useState } from 'react';
import { connect } from 'react-redux';

import VideoList from '../../video-list';
import { IState, IVideoPageProps } from '../../../interfaces';
import { userOwnVideosRequest, userSharedVideosRequest } from '../../../actions';
import TabItem from './styled-components';
import Spinner from '../../spinner';

const VideoPage: FC<IVideoPageProps> = (props: IVideoPageProps): ReactElement => {
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
  return (
    <div className="py-lg-4 py-md-3 p-2">
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item" onClick={() => setActiveVideoPage('own')}>
          <TabItem
            className={`nav-link ${activeVideoPage === 'own' ? 'active' : null}`}
            onClick={() => onOwnVideo(userEmail)}
          >
            My videos
          </TabItem>
        </li>
        <li className="nav-item" onClick={() => setActiveVideoPage('shared')}>
          <TabItem
            className={`nav-link ${activeVideoPage === 'shared' ? 'active' : null}`}
            onClick={() => onSharedVideo(userEmail)}
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

const mapStateToProps = (state: IState) => {
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
