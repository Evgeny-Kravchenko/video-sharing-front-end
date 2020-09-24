import React, { FC, ReactElement, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  addNewVideoRequest,
  userOwnVideosRequest,
  userSharedVideosRequest,
} from '../../../actions';

import TabItem from './styled-components';

import Spinner from '../../local/spinner';
import ModalWindow from './components/modal-window';
import VideoList from '../video/components/video-list';
import ErrorIndicator from '../../local/error-indicator';

import { State } from '../../../reducers/types';
import { Video } from '../../../types';

import { getArrayFromSet } from '../../../helpers';

const VideoPage: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const {
    collection,
    ownVideosIds,
    ownVideosLoading,
    sharedVideosIds,
    sharedVideosLoading,
    userEmail,
    isSuccessDelete,
    loadingRemovingVideo,
    errorLoadingOwnVideos,
    errorLoadingSharedVideos,
    errorRemovingVideo,
  } = useSelector((state: State) => ({
    collection: getArrayFromSet(state.videos.collection),
    ownVideosIds: state.videos.ownVideosIds,
    ownVideosLoading: state.videos.statusOfLoadingOwnVideos.loading,
    sharedVideosIds: state.videos.sharedVideosIds,
    sharedVideosLoading: state.videos.statusOfLoadingSharedVideos.loading,
    userEmail: state.user.email,
    isSuccessDelete: state.videos.statusOfRemovingVideo.isSuccess,
    loadingRemovingVideo: state.videos.statusOfRemovingVideo.loading,
    errorLoadingOwnVideos: state.videos.statusOfLoadingOwnVideos.error,
    errorLoadingSharedVideos: state.videos.statusOfLoadingSharedVideos.error,
    errorRemovingVideo: state.videos.statusOfRemovingVideo.error,
  }));

  const [activeVideoPage, setActiveVideoPage] = useState('own');
  const [isModal, setIsModal] = useState(false);

  const videos =
    activeVideoPage === 'own'
      ? collection.filter((video: Video) => ownVideosIds.includes(video.id))
      : collection.filter((video: Video) => sharedVideosIds.includes(video.id));

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
  const videoList = isLoading ? <VideoList videos={videos} /> : null;
  const successMessage =
    isSuccessDelete && activeVideoPage === 'own' ? (
      <p className="text-success pt-2 my-0 mx-auto">The video was removed successfully.</p>
    ) : null;
  const errorMeassage =
    errorRemovingVideo && activeVideoPage === 'own' ? (
      <p className="text-danger pt-2 my-0 mx-auto">{errorRemovingVideo.message}</p>
    ) : null;

  const isSuccessCallback = (state: State) => state.videos.statusOfAddingNewVideo.isSuccess;
  const isLoadingCallback = (state: State) => state.videos.statusOfAddingNewVideo.loading;
  const isErrorCallback = (state: State) => state.videos.statusOfAddingNewVideo.error;

  const modal = isModal ? (
    <ModalWindow
      onSetModalWindow={setIsModal}
      isSuccessCallback={isSuccessCallback}
      isLoadingCallback={isLoadingCallback}
      isErrorCallback={isErrorCallback}
      action={addNewVideoRequest}
    />
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
          {!errorLoadingOwnVideos && downloadVideoButton}
          {loadingRemovingVideo && activeVideoPage === 'own' && <Spinner />}
          {errorMeassage}
          {successMessage}
          {errorLoadingOwnVideos && <ErrorIndicator />}
        </div>
      )}
      {errorLoadingSharedVideos && activeVideoPage === 'shared' && <ErrorIndicator />}
      {spinner}
      {videoList}
      {modal}
    </div>
  );
};

export default VideoPage;
