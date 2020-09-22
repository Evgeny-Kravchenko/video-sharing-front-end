import React, { FC, ReactElement, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import VideoList from '../video/components/video-list';
import { userOwnVideosRequest, userSharedVideosRequest } from '../../../actions';
import TabItem from './styled-components';
import Spinner from '../../local/spinner';
import ModalWindow from './components/modal-window';

import { State } from '../../../reducers/types';

const VideoPage: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const {
    ownVideos,
    ownVideosLoading,
    sharedVideos,
    sharedVideosLoading,
    userEmail,
    isSuccessDelete,
    loadingRemovingVideo,
  } = useSelector((state: State) => ({
    ownVideos: state.videosOfUser.ownVideos.videos,
    ownVideosLoading: state.videosOfUser.ownVideos.loading,
    sharedVideos: state.videosOfUser.sharedVideos.videos,
    sharedVideosLoading: state.videosOfUser.sharedVideos.loading,
    userEmail: state.authUser.email,
    isSuccessDelete: state.videosOfUser.ownVideos.statusOfRemovingVideo.isSuccess,
    loadingRemovingVideo: state.videosOfUser.ownVideos.statusOfRemovingVideo.loading,
  }));
  const [activeVideoPage, setActiveVideoPage] = useState('own');
  const [isModal, setIsModal] = useState(false);
  const videos = activeVideoPage === 'own' ? ownVideos : sharedVideos;
  const handleSetActiveVideoPage = (
    cb: (userEmail: string) => void,
    userEmail: string,
    path: string
  ) => () => {
    if (path !== activeVideoPage) {
      setActiveVideoPage(path);
      dispatch(cb(userEmail));
    }
  };
  const isLoading = !ownVideosLoading && !sharedVideosLoading;
  const downloadVideoButton =
    isLoading && activeVideoPage === 'own' ? (
      <button className="btn btn-primary" onClick={() => setIsModal(true)}>
        Add new video
      </button>
    ) : null;
  const spinner = ownVideosLoading || sharedVideosLoading ? <Spinner /> : null;
  const modal = isModal ? <ModalWindow onSetModalWindow={setIsModal} /> : null;
  const videoList = isLoading ? <VideoList videos={videos} /> : null;
  const successMessage =
    isSuccessDelete && activeVideoPage === 'own' ? (
      <p className="text-success pt-2 my-0 mx-auto">The video was removed successfully.</p>
    ) : null;
  return (
    <div className="py-lg-4 py-md-3 px-sm-0 p-2">
      <ul className="nav nav-tabs mb-4">
        <li
          className="nav-item"
          onClick={handleSetActiveVideoPage(userOwnVideosRequest, userEmail, 'own')}
        >
          <TabItem className={`nav-link ${activeVideoPage === 'own' ? 'active' : null}`}>
            My videos
          </TabItem>
        </li>
        <li
          className="nav-item"
          onClick={handleSetActiveVideoPage(userSharedVideosRequest, userEmail, 'shared')}
        >
          <TabItem className={`nav-link ${activeVideoPage === 'shared' ? 'active' : null}`}>
            Video shared to me
          </TabItem>
        </li>
      </ul>
      {activeVideoPage === 'own' && isLoading && (
        <div className="border d-flex p-2">
          {downloadVideoButton}
          {loadingRemovingVideo && activeVideoPage === 'own' && <Spinner />}
          {successMessage}
        </div>
      )}
      {spinner}
      {videoList}
      {modal}
    </div>
  );
};

export default VideoPage;
