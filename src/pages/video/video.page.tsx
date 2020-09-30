import React, { FC, ReactElement, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  addNewVideoRequest,
  userOwnVideosRequest,
  userSharedVideosRequest,
} from '../../redux/actions';

import TabItem from './styled-components';

import Spinner from '../../components/spinner';
import ModalWindow from './components/modal-window';
import VideoList from '../video/components/video-list';
import ErrorIndicator from '../../components/error-indicator';

import { Video } from '../../types';

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
  getStatusOfAddingNewVideo,
  getUid,
} from '../../redux/selectors';

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

  const isNotLoading = !ownVideosLoading && !sharedVideosLoading;

  const downloadVideoButton =
    isNotLoading && activeVideoPage === 'own' ? (
      <button className="btn btn-primary" onClick={() => setIsModal(true)}>
        Add new video
      </button>
    ) : null;
  const spinner = ownVideosLoading || sharedVideosLoading ? <Spinner /> : null;
  const videoList = isNotLoading ? <VideoList videos={videos} /> : null;
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
  const noVideosMessage =
    !videos.length && isNotLoading ? (
      <p className="text-secondary text-center p-4">There aren&apos;t any videos.</p>
    ) : null;

  const { isSuccess, loading, error } = useSelector(getStatusOfAddingNewVideo);

  const modal = isModal ? (
    <ModalWindow
      onSetModalWindow={setIsModal}
      isSuccess={isSuccess}
      isLoading={loading}
      isError={error}
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
      {activeVideoPage === 'own' && isNotLoading && (
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
      {noVideosMessage}
    </div>
  );
};

export default VideoPage;
