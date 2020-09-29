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

import {
  SpinnerWrapper,
  StatusMessage,
} from './components/modal-window/styled-components/modal-header';

import {
  getCollection,
  getErrorLoadingOwnVideos,
  getErrorLoadingSharedVideos,
  getErrorRemovingVideo,
  getIsSuccessDelete,
  getLoadingRemovingVideo,
  getOwnVideosIds,
  getOwnVideosLoading,
  getSharedVideosIds,
  getSharedVideosLoading,
  getUid,
} from '../../../selectors';

const VideoPage: FC = (): ReactElement => {
  const dispatch = useDispatch();

  const collection = useSelector(getCollection);
  const ownVideosIds = useSelector(getOwnVideosIds);
  const ownVideosLoading = useSelector(getOwnVideosLoading);
  const sharedVideosIds = useSelector(getSharedVideosIds);
  const sharedVideosLoading = useSelector(getSharedVideosLoading);
  const uid = useSelector(getUid);
  const isSuccessDelete = useSelector(getIsSuccessDelete);
  const loadingRemovingVideo = useSelector(getLoadingRemovingVideo);
  const errorLoadingOwnVideos = useSelector(getErrorLoadingOwnVideos);
  const errorLoadingSharedVideos = useSelector(getErrorLoadingSharedVideos);
  const errorRemovingVideo = useSelector(getErrorRemovingVideo);

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
      <StatusMessage className="text-success pt-2 my-0 mx-auto">
        The video was removed successfully.
      </StatusMessage>
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
          onClick={handleSetActiveVideoPage(userOwnVideosRequest, uid, 'own')}
        >
          <TabItem className={`nav-link ${activeVideoPage === 'own' ? 'active' : null}`}>
            My videos
          </TabItem>
        </li>
        <li
          className="nav-item"
          onClick={handleSetActiveVideoPage(userSharedVideosRequest, uid, 'shared')}
        >
          <TabItem className={`nav-link ${activeVideoPage === 'shared' ? 'active' : null}`}>
            Video shared to me
          </TabItem>
        </li>
      </ul>
      {activeVideoPage === 'own' && isLoading && (
        <div className="border d-flex flex-wrap p-2">
          {!errorLoadingOwnVideos && downloadVideoButton}
          {loadingRemovingVideo && activeVideoPage === 'own' && (
            <SpinnerWrapper className="mx-auto order-1">
              <Spinner />
            </SpinnerWrapper>
          )}
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
